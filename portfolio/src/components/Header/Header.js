import React, { useState } from 'react';
import User_Img from '../user-img.jpg';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <nav className=" bg-gray-900 p-4 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
  
            <div className="flex-shrink-0">
              <h1 className="text-white text-lg font-semibold">
                Intezar's Portfolio
              </h1>
            </div>

            <div className="flex items-center sm:hidden">
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
              </button>
            </div>

            <div className="hidden sm:flex sm:space-x-4">
              <NavLink
                to="/"
                className={({isActive})=>`rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 duration-200 ${isActive? " text-orange-600" : "text-gray-300"}`
              }              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({isActive})=>`rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 duration-200 ${isActive? " text-orange-600" : "text-gray-300"}`
                }
              >
                About
              </NavLink>
              <NavLink
                to="/projects"
                className={({isActive})=>`rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 duration-200 ${isActive? " text-orange-600" : "text-gray-300"}`
              }              >
                Projects
              </NavLink>
              <NavLink
                to="/experience"
                className={({isActive})=>`rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 duration-200 ${isActive? " text-orange-600" : "text-gray-300"}`
              }              >
                Experience
              </NavLink>
            </div>

            <div className="hidden sm:flex items-center space-x-4">
              <button
                className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="sr-only">View notifications</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                  />
                </svg>
              </button>
              <img className="h-8 w-8 rounded-full" src={User_Img} alt="User" />
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="sm:hidden" id="mobile-menu">
            <div className="flex flex-col items-center space-y-2 px-2 pt-2 pb-3">
              <NavLink
                to="/"
                className={({isActive})=>`rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 duration-200 ${isActive? " text-orange-600" : "text-gray-300"}`
              }              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({isActive})=>`rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 duration-200 ${isActive? " text-orange-600" : "text-gray-300"}`
              }              >
                About
              </NavLink>
              <NavLink
                to="/projects"
                className={({isActive})=>`rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 duration-200 ${isActive? " text-orange-600" : "text-gray-300"}`
              }              >
                Projects
              </NavLink>
              <NavLink
                to="/experience"
                className={({isActive})=>`rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 duration-200 ${isActive? " text-orange-600" : "text-gray-300"}`
              }              >
                Experience
              </NavLink>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;