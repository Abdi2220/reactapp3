import React, { useState } from "react";

const AuthModal = ({ isOpen, onClose }) => {
  const [mode, setMode] = useState("login");

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-gray-900 text-white rounded-2xl shadow-2xl p-8 w-80 relative border border-gray-700">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-400 hover:text-white text-2xl"
        >
          &times;
        </button>

        {/* Login Mode */}
        {mode === "login" ? (
          <div>
            <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
              >
                Login
              </button>
            </form>
            <p className="text-center text-sm text-gray-400 mt-4">
              Don’t have an account?{" "}
              <button
                onClick={() => setMode("signup")}
                className="text-blue-400 hover:underline"
              >
                Sign Up
              </button>
            </p>
          </div>
        ) : (
          // Signup Mode
          <div>
            <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none"
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition"
              >
                Create Account
              </button>
            </form>
            <p className="text-center text-sm text-gray-400 mt-4">
              Already have an account?{" "}
              <button
                onClick={() => setMode("login")}
                className="text-green-400 hover:underline"
              >
                Login
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthModal;
