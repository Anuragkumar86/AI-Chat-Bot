import { useState } from "react";

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // Function to send message
  async function sendMessage() {
    if (!input.trim()) return;  // Stop if the input is empty

    const newMessages = [
      ...messages,
      { sender: "user", text: input },
    ];
    setMessages(newMessages); // Add user message to the state
    setInput(""); // Clear input field

    // Add typing indicator
    const typingMessage = { sender: "bot", text: "..." };
    setMessages((prevMessages) => [...prevMessages, typingMessage]);

    try {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${import.meta.env.VITE_API_KEY}`,
          "Content-Type": "application/json",
          // "HTTP-Referer": "http://localhost:5173/", // or your actual site URL
          "X-Title": "AI Chat Bot", // can be anything
        },
        body: JSON.stringify({
          model: "openai/gpt-3.5-turbo", // use a common model for now
          messages: [{ role: "user", content: input }],
        }),
      });
      

      const data = await response.json();
      const botMessage =
        data.choices?.[0]?.message?.content || "No response received.";

      // Remove typing indicator and add bot response
      setMessages((prevMessages) => [
        ...prevMessages.filter((msg) => msg.text !== "..."),
        { sender: "bot", text: botMessage },
      ]);
    } catch (error) {
      setMessages((prevMessages) => [
        ...prevMessages.filter((msg) => msg.text !== "..."),
        { sender: "bot", text: `Error: ${error.message}` },
      ]);
    }
  }

  // Function to render code block with syntax highlighting
  function renderCodeBlock(code) {
    return (
      <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-auto">
        <code className="text-sm">{code}</code>
      </pre>
    );
  }

  // Function to render step-by-step explanations with enhanced styling
  function renderExplanation(text) {
    const steps = text.split("\n").map((step, index) => (
      <div
        key={index}
        className="bg-gray-700 p-6 rounded-lg mt-6 shadow-lg" // Added more padding and margin
      >
        <p className="text-yellow-300 font-semibold text-lg">Step {index + 1}:</p>
        <p className="mt-4 text-white text-base">{step}</p> {/* Added margin and text styling */}
      </div>
    ));
    return <div className="mt-4">{steps}</div>;
  }

  return (
    <div className="flex-grow flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-gray-800 shadow-2xl rounded-lg p-8 flex flex-col">
        <h2 className="text-3xl font-bold text-center text-yellow-300 mb-6">Math Solver</h2>
        <div className="mt-4 p-4 bg-gray-700 rounded-lg h-[28rem] overflow-y-auto flex flex-col space-y-6"> {/* Increased spacing */}
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg max-w-xl shadow-md ${
                msg.sender === "user"
                  ? "bg-yellow-500 text-black self-end"
                  : "bg-gray-600 text-white self-start"
              }`}
            >
              {/* Display code block if the message contains code */}
              {msg.text.startsWith("```") ? (
                renderCodeBlock(msg.text)
              ) : msg.text.includes("Step-by-Step Explanation") ? (
                renderExplanation(msg.text)
              ) : (
                <p>{msg.text}</p>
              )}
            </div>
          ))}
        </div>
        <div className="mt-4 flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask your question..."
            className="flex-grow px-4 py-3 bg-gray-900 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <button
            onClick={sendMessage}
            className="bg-yellow-500 text-black px-6 py-3 rounded-lg hover:bg-yellow-600 transition font-semibold"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
