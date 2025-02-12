import React, { useState, useEffect } from "react";

export default function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [username, setUsername] = useState("");
  const [greeting, setGreeting] = useState("World");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleNameChange = (e) => {
    setUsername(e.target.value);
    setGreeting(e.target.value || "World");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 text-white transition-all">
      <div className="bg-white text-gray-900 rounded-2xl shadow-xl p-8 text-center max-w-lg transform hover:scale-105 transition duration-300 ease-in-out">
        
        {/* App Header */}
        <h1 className="text-4xl font-bold mb-2">Hello, {greeting}! 🌍</h1>
        <p className="text-lg text-gray-700">Welcome to your personalized React App!</p>
        
        {/* User Input */}
        <div className="mt-4">
          <input
            type="text"
            placeholder="Enter your name..."
            value={username}
            onChange={handleNameChange}
            className="w-full p-2 border rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Clock Display */}
        <div className="mt-6">
          <p className="text-sm text-gray-600">Current Time:</p>
          <p className="text-2xl font-semibold">{currentTime.toLocaleTimeString()}</p>
        </div>

        {/* Call to Action */}
        <button className="mt-6 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition duration-300">
          Explore More
        </button>
      </div>
    </div>
  );
}
