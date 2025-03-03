
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-4">
      <motion.div
        className="max-w-md w-full glass-card rounded-xl p-8 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-6"
          initial={{ rotate: -90 }}
          animate={{ rotate: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <AlertCircle className="w-10 h-10 text-red-600" />
        </motion.div>
        
        <motion.h1
          className="text-3xl font-bold mb-2 text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          404 - Page Not Found
        </motion.h1>
        
        <motion.p
          className="text-gray-600 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          The page you're looking for doesn't exist or has been moved.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Return to Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;
