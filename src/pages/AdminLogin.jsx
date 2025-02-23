import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserShield, FaLock } from "react-icons/fa";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin123") {
      navigate("/admin-dashboard");
    } else {
      alert("❌ Invalid credentials, please try again!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-teal-500 via-cyan-600 to-purple-700 p-6">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md text-center transform transition-all duration-500 hover:shadow-2xl">
        {/* Icon */}
        <FaUserShield className="text-5xl text-teal-600 mx-auto mb-6 animate-pulse" />

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900 tracking-tight">
          Admin Login
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Username Field */}
          <div className="relative">
            <FaUserShield className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Admin Username"
              className="w-full p-4 pl-12 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300"
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full p-4 pl-12 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 text-white p-4 rounded-xl text-lg font-semibold shadow-md hover:from-teal-600 hover:to-cyan-700 transform hover:scale-105 transition-all duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;