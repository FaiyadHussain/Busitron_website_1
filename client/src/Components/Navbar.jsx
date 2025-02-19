import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/what-we-do" },
  { name: "Contact Us", path: "/contact-us" },
  { name: "Careers", path: "/careers" },
];

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("Token"); // Remove token from localStorage
    setIsLoggedIn(false);
    navigate("/"); // Redirect to home
  };

  return (
    <nav className="bg-black shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 text-white">
            <NavLink
              to="/"
              className="bg-gradient-to-r from-[#df3482] font-bold text-2xl to-[#4B0082] text-transparent bg-clip-text"
            >
              BUSITRON
            </NavLink>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-6">
            {!isLoggedIn &&
              navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-white text-lg font-bold px-4 py-2 rounded-md ${
                      isActive ? "bg-[#df3482]" : ""
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

            {/* Show additional options when logged in */}
            {isLoggedIn && (
              <>
                <NavLink
                  to="/admin/CreateJob"
                  className="text-white text-md font-bold px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700"
                >
                  Create Job
                </NavLink>
                <NavLink
                  to="/admin/ListJobs"
                  className="text-white text-md font-bold px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700"
                >
                  All Jobs
                </NavLink>
                <button
                  onClick={handleLogout}
                  className="text-white  hover:cursor-pointer text-md font-bold px-4 py-2 rounded-md bg-red-600 hover:bg-red-700"
                >
                  Logout
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-400 focus:outline-none"
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-black absolute w-full shadow-lg"
          >
            <div className="px-4 pt-2 pb-3 space-y-2">
              {!isLoggedIn &&
                navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      `block px-4 py-2 rounded-md transition duration-300 ${
                        isActive
                          ? "bg-[#df3482] text-white"
                          : "text-white hover:bg-[#4B0082]"
                      }`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </NavLink>
                ))}

              {/* Show additional options when logged in */}
              {isLoggedIn && (
                <>
                  <NavLink
                    to="/admin/CreateJob"
                    className="block px-4 py-2 rounded-md bg-blue-600 text-white text-lg font-bold"
                    onClick={() => setIsOpen(false)}
                  >
                    Create Job
                  </NavLink>
                  <NavLink
                    to="/admin/ListJobs"
                    className="block px-4 py-2 rounded-md bg-green-600 text-white text-lg font-bold"
                    onClick={() => setIsOpen(false)}
                  >
                    All Jobs
                  </NavLink>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsOpen(false);
                    }}
                    className="block px-4 py-2 rounded-md bg-red-600 text-white text-lg font-bold w-full text-left"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
