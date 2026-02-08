import React from "react";
import { NavLink } from "react-router";

const Footer = () => {
  return (
  
      <footer className="bg-gray-900 text-white py-4 mt-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <ul className="flex space-x-6 mb-3 md:mb-0">
            <li>
              <NavLink
                to="/nummerplade"
                className="hover:text-blue-400 transition-colors text-blue-400"
              >
                Number-plates
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="hover:text-blue-400 transition-colors text-blue-400"
              >
                Om os
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/kontakt"
                className="hover:text-blue-400 transition-colors text-blue-400"
              >
                Kontakt
              </NavLink>
            </li>
          </ul>
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </footer>
  
  );
};

export default Footer;
