import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut } from "react-feather";
import { FaUser, FaLock, FaEnvelope, FaMobile, FaHome } from "react-icons/fa";

const UserLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (user) {
      setIsLoggedIn(true);
      setCurrentUser(user);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password && name && mobile && email && address) {
      const user = {
        id: Date.now(),
        username,
        name,
        mobile,
        email,
        address,
        role: "user",
      };
      localStorage.setItem("currentUser", JSON.stringify(user));

      const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
      savedUsers.push(user);
      localStorage.setItem("users", JSON.stringify(savedUsers));

      setIsLoggedIn(true);
      setCurrentUser(user);
      setError("");
      navigate("/");
    } else {
      setError("Please fill in all fields.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setIsLoggedIn(false);
    setCurrentUser(null);
    navigate("/");
  };

  if (isLoggedIn) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-teal-500 via-cyan-600 to-purple-700 px-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md text-center transform transition-all duration-500 hover:shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Welcome, {currentUser.name}!
          </h2>
          <div className="space-y-4 text-gray-700 text-left">
            <p className="flex items-center">
              <FaUser className="mr-3 text-teal-600" /> {currentUser.username}
            </p>
            <p className="flex items-center">
              <FaEnvelope className="mr-3 text-teal-600" /> {currentUser.email}
            </p>
            <p className="flex items-center">
              <FaMobile className="mr-3 text-teal-600" /> {currentUser.mobile}
            </p>
            <p className="flex items-center">
              <FaHome className="mr-3 text-teal-600" /> {currentUser.address}
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="mt-8 flex items-center justify-center gap-2 w-full bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:from-red-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300"
          >
            <LogOut size={20} /> Logout
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-teal-500 via-cyan-600 to-purple-700 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md text-center transform transition-all duration-500 hover:shadow-2xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">
          User Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative">
            <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="w-full p-4 pl-12 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300"
            />
          </div>
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
          <div className="relative">
            <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
              className="w-full p-4 pl-12 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300"
            />
          </div>
          <div className="relative">
            <FaMobile className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Mobile Number"
              className="w-full p-4 pl-12 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300"
            />
          </div>
          <div className="relative">
            <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="w-full p-4 pl-12 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300"
            />
          </div>
          <div className="relative">
            <FaHome className="absolute left-4 top-5 text-gray-500" />
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Address"
              rows="3"
              className="w-full p-4 pl-12 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300 resize-none"
            />
          </div>
          {error && (
            <p className="text-red-500 text-sm animate-fadeIn">{error}</p>
          )}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:from-teal-600 hover:to-cyan-700 transform hover:scale-105 transition-all duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;