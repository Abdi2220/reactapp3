import React, { useState } from "react";
import { NavLink } from "react-router";
import AuthModal from "./AuthModal";

const Navbar = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <ul className="flex space-x-6 items-center">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-blue-400 transition-colors ${
                  isActive ? "text-blue-400" : ""
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `hover:text-blue-400 transition-colors ${
                  isActive ? "text-blue-400" : ""
                }`
              }
            >
              Om os
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/kontakt"
              className={({ isActive }) =>
                `hover:text-blue-400 transition-colors ${
                  isActive ? "text-blue-400" : ""
                }`
              }
            >
              Kontakt
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/news"
              className={({ isActive }) =>
                `hover:text-blue-400 transition-colors ${
                  isActive ? "text-blue-400" : ""
                }`
              }
            >
              News
            </NavLink>
          </li>

          {/* Dropdown using group-hover */}
          <li className="relative group">
            <button className="hover:text-blue-400 text-blue-200 transition-colors">
              More ⬇️
            </button>
            <ul className="absolute top-full left-0 mt-2 w-44 bg-gray-900 border border-gray-700 rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <li>
                <NavLink
                  to="/newweather"
                  className="block px-4 py-2 hover:bg-gray-800 rounded transition-colors"
                >
                  Weather
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/openweather4"
                  className="block px-4 py-2 hover:bg-gray-800 rounded transition-colors"
                >
                  weather map 
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/everything"
                  className="block px-4 py-2 hover:bg-gray-800 rounded transition-colors"
                >
                  everything
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/starhips"
                  className="block px-4 py-2 hover:bg-gray-800 rounded transition-colors"
                >
                  Starships
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/Music"
                  className="block px-4 py-2 hover:bg-gray-800 rounded transition-colors"
                >
                  Music
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/nummerplade"
                  className="block px-4 py-2 hover:bg-gray-800 rounded transition-colors"
                >
                  nummerplade
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/energydata"
                  className="block px-4 py-2 hover:bg-gray-800 rounded transition-colors"
                >
                  energydata
                </NavLink>
              </li>
            </ul>
          </li>

          <li className="relative group">
            <button className="hover:text-blue-400 transition-colors text-blue-200">
              Rapidapi
            </button>
            <ul className="absolute top-full left-0 mt-2 w-44 bg-gray-900 border border-gray-700 rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <li>
                <NavLink
                  to="/lovecalc"
                  className="block px-4 py-2 hover:bg-gray-800 rounded transition-colors"
                >
                  lovecalc
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/facts"
                  className="block px-4 py-2 hover:bg-gray-800 rounded transition-colors"
                >
                  fun facts 
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/hobbies"
                  className="block px-4 py-2  hover:bg-gray-800 rounded transition-colors"
                >
                  Hobbies
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>

        <button
          onClick={() => setModalOpen(true)}
          className="ml-auto px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
        >
          Sign In
        </button>

        <AuthModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
      </div>
    </header>
  );
};

export default Navbar;
