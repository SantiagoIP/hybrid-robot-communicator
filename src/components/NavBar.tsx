
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 glass-nav"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <circle cx="12" cy="5" r="3" />
                <path d="M12 8v8" />
                <path d="M9 14l3 3 3-3" />
              </svg>
            </div>
            <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
              Robot Integration
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/resources" className="text-sm font-medium hover:text-primary transition-colors">
              Resources
            </Link>
          </nav>
        </div>
      </div>
    </motion.header>
  );
};

export default NavBar;
