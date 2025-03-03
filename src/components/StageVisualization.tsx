
import React from 'react';
import { motion } from 'framer-motion';
import { Robot, User, ArrowRightLeft, ArrowRight, RefreshCw } from 'lucide-react';
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
            {/* Isolation Stage - Separate Work Areas */}
            <motion.div 
              className="absolute left-1/4 top-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-dashed border-gray-300 rounded-lg p-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="flex flex-col items-center space-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <div className="bg-robot-blue p-3 rounded-lg shadow-lg shadow-robot-blue/30 flex items-center justify-center">
                  <Robot className="w-8 h-8 text-white" />
                </div>
                <p className="text-xs text-gray-600 font-medium">Robot Zone</p>
              </motion.div>
            </motion.div>

            <motion.div 
              className="absolute right-1/4 top-1/2 transform translate-x-1/2 -translate-y-1/2 border-2 border-dashed border-gray-300 rounded-lg p-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.div
                className="flex flex-col items-center space-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div className="bg-human-green p-3 rounded-full shadow-lg shadow-human-green/30 flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                <p className="text-xs text-gray-600 font-medium">Human Zone</p>
              </motion.div>
            </motion.div>

            <motion.div 
              className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-500"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Completely separated operation
            </motion.div>
          </div>
        );
      
      case 'coexistence':
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Coexistence Stage - Shared Environment */}
            <motion.div 
              className="absolute w-[80%] h-[60%] rounded-xl bg-workspace-peach opacity-70 flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.p
                className="absolute top-2 text-xs font-medium text-gray-600 bg-white/80 px-2 py-1 rounded-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Shared Workspace
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="absolute left-[30%] top-1/2 transform -translate-y-1/2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex flex-col items-center space-y-2">
                <div className="bg-robot-blue p-3 rounded-lg shadow-lg shadow-robot-blue/30 flex items-center justify-center">
                  <Robot className="w-8 h-8 text-white" />
                </div>
                <p className="text-xs text-gray-600 font-medium">Independent work</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute right-[30%] top-1/2 transform -translate-y-1/2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex flex-col items-center space-y-2">
                <div className="bg-human-green p-3 rounded-full shadow-lg shadow-human-green/30 flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                <p className="text-xs text-gray-600 font-medium">Independent work</p>
              </div>
            </motion.div>

            <motion.div 
              className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-500"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Same space, independent tasks
            </motion.div>
          </div>
        );
      
      case 'synchronised':
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Synchronised Stage - Time Coordination */}
            <motion.div 
              className="absolute w-[80%] h-[60%] rounded-xl bg-workspace-peach opacity-70 flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.p
                className="absolute top-2 text-xs font-medium text-gray-600 bg-white/80 px-2 py-1 rounded-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Time-Shared Workspace
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="absolute left-[30%] top-1/2 transform -translate-y-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex flex-col items-center space-y-2">
                <div className="bg-robot-blue p-3 rounded-lg shadow-lg shadow-robot-blue/30 flex items-center justify-center">
                  <Robot className="w-8 h-8 text-white" />
                </div>
                <motion.div 
                  className="px-2 py-1 bg-blue-100 rounded text-xs"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 2, repeatDelay: 1 }}
                >
                  Time slot 1
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute right-[30%] top-1/2 transform -translate-y-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex flex-col items-center space-y-2">
                <div className="bg-human-green p-3 rounded-full shadow-lg shadow-human-green/30 flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                <motion.div 
                  className="px-2 py-1 bg-green-100 rounded text-xs"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 2, repeatDelay: 1 }}
                >
                  Time slot 2
                </motion.div>
              </div>
            </motion.div>

            {/* Connecting Arrow */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <ArrowRightLeft className="w-12 h-12 text-gray-400 opacity-50" />
            </motion.div>

            <motion.div 
              className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-500"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Coordinated timing, shared resources
            </motion.div>
          </div>
        );
      
      case 'cooperation':
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Cooperation Stage - Simultaneous Work with Feedback */}
            <motion.div 
              className="absolute w-[80%] h-[60%] rounded-xl bg-workspace-peach opacity-70 flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.p
                className="absolute top-2 text-xs font-medium text-gray-600 bg-white/80 px-2 py-1 rounded-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Simultaneous Operation
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="absolute left-[30%] top-1/2 transform -translate-y-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex flex-col items-center space-y-2">
                <div className="bg-robot-blue p-3 rounded-lg shadow-lg shadow-robot-blue/30 flex items-center justify-center">
                  <Robot className="w-8 h-8 text-white" />
                </div>
                <p className="text-xs text-gray-600 font-medium">Task A</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute right-[30%] top-1/2 transform -translate-y-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex flex-col items-center space-y-2">
                <div className="bg-human-green p-3 rounded-full shadow-lg shadow-human-green/30 flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                <p className="text-xs text-gray-600 font-medium">Task B</p>
              </div>
            </motion.div>

            {/* Feedback Arrows */}
            <motion.svg 
              className="absolute w-full h-full pointer-events-none" 
              viewBox="0 0 400 300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.path
                d="M150,130 C175,110 225,110 250,130"
                fill="none"
                stroke="#4b7bec"
                strokeWidth="3"
                strokeDasharray="6,3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              />
              <motion.path
                d="M250,150 C225,170 175,170 150,150"
                fill="none"
                stroke="#26de81"
                strokeWidth="3"
                strokeDasharray="6,3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
              />
              <motion.circle cx="150" cy="140" r="3" fill="#4b7bec" 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.5 }}
              />
              <motion.circle cx="250" cy="140" r="3" fill="#26de81" 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.5 }}
              />
            </motion.svg>

            <motion.div 
              className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-500"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              Different tasks, mutual feedback
            </motion.div>
          </div>
        );
      
      case 'collaboration':
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Collaboration Stage - Integrated Work */}
            <motion.div 
              className="absolute w-[80%] h-[60%] rounded-xl bg-workspace-peach opacity-70 flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="absolute z-10 bg-gradient-to-r from-blue-100/50 to-green-100/50 w-[50%] h-[60%] rounded-lg border border-white/50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <motion.p
                  className="absolute top-1 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-600 bg-white/80 px-2 py-1 rounded-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Shared Task
                </motion.p>
              </motion.div>
              <motion.p
                className="absolute top-2 text-xs font-medium text-gray-600 bg-white/80 px-2 py-1 rounded-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Collaborative Workspace
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="absolute left-[30%] top-1/2 transform -translate-y-1/2 z-20"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="flex flex-col items-center space-y-2">
                <div className="bg-robot-blue p-3 rounded-lg shadow-lg shadow-robot-blue/30 flex items-center justify-center">
                  <Robot className="w-8 h-8 text-white" />
                </div>
                <motion.div
                  className="px-2 py-1 bg-blue-100 rounded text-xs"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  Co-worker
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute right-[30%] top-1/2 transform -translate-y-1/2 z-20"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div className="flex flex-col items-center space-y-2">
                <div className="bg-human-green p-3 rounded-full shadow-lg shadow-human-green/30 flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                <motion.div
                  className="px-2 py-1 bg-green-100 rounded text-xs"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  Co-worker
                </motion.div>
              </div>
            </motion.div>

            {/* Active Communication Indicator */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <motion.div
                className="bg-white/30 backdrop-blur-sm p-2 rounded-full"
                animate={{ 
                  boxShadow: ["0 0 0px rgba(59, 130, 246, 0)", "0 0 15px rgba(59, 130, 246, 0.5)", "0 0 0px rgba(59, 130, 246, 0)"] 
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <RefreshCw className="w-8 h-8 text-gray-600" />
              </motion.div>
            </motion.div>

            {/* Connecting Communication Lines */}
            <motion.svg 
              className="absolute w-full h-full pointer-events-none" 
              viewBox="0 0 400 300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <motion.path
                d="M160,140 C180,140 220,140 240,140"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
              <motion.path
                d="M240,160 C220,160 180,160 160,160"
                fill="none"
                stroke="#22c55e"
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
              />
              
              {/* Interactive Communication Particles */}
              <motion.circle cx="200" cy="140" r="4" fill="#3b82f6" 
                animate={{ 
                  cx: [160, 200, 240, 200, 160],
                  opacity: [0, 1, 0, 1, 0]
                }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              />
              
              <motion.circle cx="200" cy="160" r="4" fill="#22c55e"
                animate={{ 
                  cx: [240, 200, 160, 200, 240],
                  opacity: [0, 1, 0, 1, 0]
                }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              />
            </motion.svg>

            <motion.div 
              className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-500"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              Same task, active communication
            </motion.div>
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
