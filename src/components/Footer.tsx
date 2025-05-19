
import React from 'react';
import { motion } from 'framer-motion';
import { GithubIcon, Mail, BookOpen } from 'lucide-react';

const Footer = () => {
  return (
    <motion.footer
      className="py-8 mt-12 border-t border-gray-200 bg-white/30 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div className="px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2 gradient-heading">
              <span className="text-human-darkGreen">Human</span>-<span className="text-robot-darkBlue">Robot</span> Collaboration in Teams
            </h3>
            <p className="text-sm text-gray-600">
              Exploring the evolution of human-robot collaboration from isolation to full integration.
            </p>
            <p className="text-sm text-gray-600 mt-2">© Robot Integration Project</p>
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://github.com/SantiagoIP" className="text-gray-600 hover:text-primary transition-colors hover-button p-2 rounded-full hover:bg-gray-100" aria-label="GitHub">
              <GithubIcon className="w-5 h-5" />
            </a>
            <a href="mailto:contact@example.com" className="text-gray-600 hover:text-primary transition-colors hover-button p-2 rounded-full hover:bg-gray-100" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
            <a href="/resources" className="text-gray-600 hover:text-primary transition-colors hover-button p-2 rounded-full hover:bg-gray-100" aria-label="Resources">
              <BookOpen className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
