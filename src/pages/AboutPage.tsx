
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

          <motion.div
            className="glass-card rounded-xl p-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-800">The Team</h2>
            <p className="text-gray-700 mb-6">
              This project was developed by a multidisciplinary team with expertise in robotics, human-computer interaction, industrial engineering, and data visualization.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800">Robotics Team</h3>
                <p className="text-sm text-gray-600">Technical implementation and robot programming</p>
              </div>
              
              <div className="text-center">
                <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800">HCI Researchers</h3>
                <p className="text-sm text-gray-600">Human-centered design and interaction patterns</p>
              </div>
              
              <div className="text-center">
                <div className="w-24 h-24 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800">Data Visualization</h3>
                <p className="text-sm text-gray-600">Interactive design and information architecture</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default AboutPage;
