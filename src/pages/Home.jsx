import Navbar from "../components/Navbar";
import ChatBot from "../components/ChatBot";

const Home = () => {
  return (
    <div className="text-white flex flex-col min-h-screen bg-red-400"
    style={{
        background: "linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d)",
        backgroundSize: "400% 400%",
      }}>
      <Navbar />
      <ChatBot />
    </div>
  );
};

export default Home;
