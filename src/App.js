import React, { useState, useEffect } from "react";

export default function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="bg-white text-gray-900 rounded-2xl shadow-lg p-6 text-center max-w-md">
        <h1 className="text-4xl font-bold">Hello, World! 🌍</h1>
        <p className="mt-2 text-lg">Welcome to your React App!</p>
        <p className="mt-4 text-sm text-gray-600">Current Time:</p>
        <p className="text-xl font-semibold">{currentTime.toLocaleTimeString()}</p>
      </div>
    </div>
  );
}
