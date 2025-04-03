import React from "react";

const About = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="bg-opacity-90 backdrop-blur-lg bg-black/30 p-4 shadow-lg flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold">Math Solver ChatBot</h1>
        <a
          href="/"
          className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-300 transition"
        >
          Home
        </a>
      </nav>

      {/* About Section */}
      <div className="flex-grow flex items-center justify-center p-6">
        <div className="max-w-3xl bg-white shadow-xl rounded-lg p-8 text-black">
          <h2 className="text-4xl font-bold text-center text-gray-700">
            About Math Solver ChatBot
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            The <span className="font-bold text-blue-600">Math Solver ChatBot</span> is an
            advanced AI-powered assistant designed to help users solve complex mathematical
            problems effortlessly. Whether you need help with algebra, calculus, trigonometry,
            or basic arithmetic, this chatbot is your go-to solution!
          </p>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Powered by <span className="font-bold text-purple-600">DeepSeek AI</span> through{" "}
            <span className="font-bold text-purple-600">OpenRouter</span>, this chatbot
            leverages cutting-edge natural language processing and deep learning models to
            provide accurate and step-by-step solutions to your math queries.
          </p>
          <h3 className="mt-6 text-2xl font-semibold text-gray-700">
            Why Choose Math Solver ChatBot?
          </h3>
          <ul className="mt-3 list-disc list-inside text-gray-600 text-lg">
            <li>Instant and precise mathematical solutions</li>
            <li>Step-by-step explanations for better understanding</li>
            <li>AI-driven responses powered by DeepSeek AI</li>
            <li>User-friendly and interactive chat interface</li>
            <li>Completely free and accessible anytime</li>
          </ul>
          <h3 className="mt-6 text-2xl font-semibold text-gray-700">How It Works?</h3>
          <p className="mt-3 text-lg text-gray-600 leading-relaxed">
            Simply enter your math problem in the chat, and the chatbot will analyze it and
            provide a solution in real-time. With its deep-learning capabilities, it can
            understand complex queries and offer well-structured explanations.
          </p>
          <h3 className="mt-6 text-2xl font-semibold text-gray-700">Get Started!</h3>
          <p className="mt-3 text-lg text-gray-600 leading-relaxed">
            Head back to the{" "}
            <a
              href="/"
              className="text-blue-500 font-semibold hover:underline"
            >
              Home Page
            </a>{" "}
            and start solving your math problems with ease!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
