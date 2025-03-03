
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type StageVisualizationProps = {
  stage: string;
  isActive: boolean;
};

const StageVisualization: React.FC<StageVisualizationProps> = ({ stage, isActive }) => {
  if (!isActive) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  // Different visualizations based on the stage
  const renderVisualization = () => {
    switch (stage) {
      case 'cell':
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute w-[80%] h-[80%] border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
              <motion.div 
                className="absolute w-12 h-12 bg-robot-blue rounded-md shadow-lg shadow-robot-blue/30"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              />
            </div>
            <motion.div 
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-human-green rounded-full mb-2 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-white" stroke="currentColor">
                    <path d="M12 2a2 2 0 0 0-2 2 2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0-2-2zm0 9c-2.7 0-5.8 1.29-6 2.01V15h12v-2c-.2-.71-3.3-2-6-2z" strokeWidth="1" fill="white" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        );
      
      case 'coexistence':
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            <motion.div 
              className="absolute w-[70%] h-[40%] rounded-full bg-workspace-peach opacity-80"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <motion.div 
              className="absolute top-20 left-[30%]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-12 h-12 bg-robot-blue rounded-md shadow-lg shadow-robot-blue/30" />
            </motion.div>
            <motion.div 
              className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-human-green rounded-full flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-white" stroke="currentColor">
                    <path d="M12 2a2 2 0 0 0-2 2 2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0-2-2zm0 9c-2.7 0-5.8 1.29-6 2.01V15h12v-2c-.2-.71-3.3-2-6-2z" strokeWidth="1" fill="white" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        );
      
      case 'synchronised':
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            <motion.div 
              className="absolute w-[70%] h-[50%] rounded-full bg-workspace-peach opacity-80"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <motion.div 
              className="absolute top-1/3 left-[35%]"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-12 h-12 bg-robot-blue rounded-md shadow-lg shadow-robot-blue/30" />
            </motion.div>
            <motion.div 
              className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-human-green rounded-full flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-white" stroke="currentColor">
                    <path d="M12 2a2 2 0 0 0-2 2 2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0-2-2zm0 9c-2.7 0-5.8 1.29-6 2.01V15h12v-2c-.2-.71-3.3-2-6-2z" strokeWidth="1" fill="white" />
                  </svg>
                </div>
              </div>
            </motion.div>
            <motion.svg 
              className="absolute w-full h-full" 
              viewBox="0 0 400 300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <motion.path
                d="M160,100 C180,140 220,160 240,180"
                fill="none"
                stroke="#999"
                strokeWidth="2"
                strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 1 }}
              />
              <motion.path
                d="M155,105 L165,95 M235,175 L245,185"
                fill="none"
                stroke="#999"
                strokeWidth="2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 2 }}
              />
            </motion.svg>
          </div>
        );
      
      case 'cooperation':
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            <motion.div 
              className="absolute w-[70%] h-[50%] rounded-full bg-workspace-peach opacity-80"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <motion.div
              className="absolute flex space-x-3 top-[35%] left-[25%]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-10 h-10 bg-robot-blue rounded-md shadow-md shadow-robot-blue/30" />
              <div className="w-10 h-10 bg-robot-blue rounded-md shadow-md shadow-robot-blue/30" />
              <div className="w-10 h-10 bg-robot-blue rounded-md shadow-md shadow-robot-blue/30" />
            </motion.div>
            <motion.div 
              className="absolute bottom-[25%] left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-human-green rounded-full flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-white" stroke="currentColor">
                    <path d="M12 2a2 2 0 0 0-2 2 2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0-2-2zm0 9c-2.7 0-5.8 1.29-6 2.01V15h12v-2c-.2-.71-3.3-2-6-2z" strokeWidth="1" fill="white" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        );
      
      case 'collaboration':
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            <motion.div 
              className="absolute w-[70%] h-[50%] rounded-full bg-workspace-peach opacity-80"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <motion.div 
              className="absolute top-[35%] left-[35%]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-12 h-12 bg-robot-blue rounded-md shadow-lg shadow-robot-blue/30" />
            </motion.div>
            <motion.div 
              className="absolute bottom-[25%] left-[45%]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-human-green rounded-full flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-white" stroke="currentColor">
                    <path d="M12 2a2 2 0 0 0-2 2 2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0-2-2zm0 9c-2.7 0-5.8 1.29-6 2.01V15h12v-2c-.2-.71-3.3-2-6-2z" strokeWidth="1" fill="white" />
                  </svg>
                </div>
              </div>
            </motion.div>
            <motion.svg 
              className="absolute w-full h-full" 
              viewBox="0 0 400 300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <motion.path
                d="M160,120 C190,140 210,150 240,180"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="3"
                strokeDasharray="0"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 1 }}
              />
              <motion.path
                d="M240,120 C210,140 190,150 160,180"
                fill="none"
                stroke="#22c55e"
                strokeWidth="3"
                strokeDasharray="0"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
              />
            </motion.svg>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <motion.div
      className="w-full h-full flex items-center justify-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {renderVisualization()}
    </motion.div>
  );
};

export default StageVisualization;
