import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <NavBar />
      
      <motion.div
        className="pt-24 pb-12 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto max-w-4xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              About This Project
            </h1>
            <p className="text-xl text-gray-600">
              Understanding the evolution of human-robot collaboration.
            </p>
          </motion.div>

          <motion.div
            className="glass-card rounded-xl p-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Project Overview</h2>
            <p className="text-gray-700 mb-6">
              This interactive visualization explores the different methodologies in which humans and robots can work together, based on the classification proposed by Müller et al. The project aims to communicate the evolution and power of hybrid human-machine teams, from complete isolation to seamless collaboration.
            </p>
            
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Research Background</h3>
            <p className="text-gray-700 mb-6">
              As robotics and automation continue to advance, understanding how humans and robots can effectively work together becomes increasingly important. This project synthesizes research from various sources to present a comprehensive model of human-robot integration across different levels of interaction and collaboration.
            </p>
            
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Methodology</h3>
            <p className="text-gray-700 mb-6">
              The visualizations and information presented are based on academic research and industry case studies. Each stage of integration is analyzed in terms of:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Spatial and temporal relationships between humans and robots</li>
              <li>Communication and coordination mechanisms</li>
              <li>Safety considerations and implementations</li>
              <li>Task allocation and workflow design</li>
              <li>Technical requirements for implementation</li>
            </ul>

            {/* Contact Information */}
            <motion.section
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Contact the author</h3>
              <p className="text-gray-700 mb-4">
                Hi I'm Santiago Pavon, and I'm a curious learner on HRI, robotics and AI. Feel free to contact me if you have any questions, ideas or comments over what you have seen on the page.
              </p>
              <a 
                href="mailto:santiagopavon10@icloud.com" 
                className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact
              </a>
            </motion.section>
          </motion.div>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default AboutPage;
