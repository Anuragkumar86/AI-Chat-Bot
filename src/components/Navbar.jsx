import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar p-4 flex justify-between items-center px-6 bg-black bg-opacity-70 shadow-lg backdrop-blur-md">
      <h1 className="text-3xl font-bold text-yellow-400">Math Solver ChatBot</h1>
      <div className="flex gap-4">
        <Link to="/" className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-600 transition">Home</Link>
        <Link to="/about" className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-600 transition">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
