
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
            
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Future Directions</h3>
            <p className="text-gray-700">
              As technology continues to evolve, we expect to see more sophisticated forms of human-robot collaboration emerging. Areas of particular interest include natural language interaction, intuitive gesture recognition, shared autonomy frameworks, and adaptive collaborative behaviors. This project will be updated as new research and applications in this field develop.
            </p>
          </motion.div>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default AboutPage;
