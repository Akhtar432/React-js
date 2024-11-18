import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="h-full flex items-center justify-center space-x-60 ">
      <div className="flex justify-center place-content-center  h-16 w-20">
        <img
          src="https://logos-world.net/wp-content/uploads/2021/02/App-Store-Logo-2008-2013.png"
          alt="App Store Logo"
        />
      </div>
      <ul className="flex flex-row space-x-6 text-slate-900 font-medium">
        <li>
          <NavLink to="/" className="hover:text-gray-300">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/docs" className="hover:text-gray-300">
            Docs
          </NavLink>
        </li>
        <li>
          <NavLink to="/github" className="hover:text-gray-300">
            GitHub
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="hover:text-gray-300">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;