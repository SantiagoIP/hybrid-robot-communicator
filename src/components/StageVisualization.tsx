import React from 'react';
import { motion } from 'framer-motion';
import { Bot, User, ArrowRightLeft, ArrowRight, RefreshCw, Brain, Zap, Sparkles } from 'lucide-react';
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
              className="absolute w-[80%] h-[60%] flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                className="absolute left-1/2 top-1/2 transform -translate-x-[75%] -translate-y-1/2 border-2 border-dashed border-gray-300 rounded-lg p-8 bg-white/50"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="flex flex-col items-center space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <div className="bg-robot-blue p-4 rounded-lg shadow-lg shadow-robot-blue/30 flex items-center justify-center">
                    <Bot className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-sm text-gray-800 font-medium bg-white/90 px-3 py-1.5 rounded-full shadow-sm whitespace-nowrap">Robot Zone</p>
                </motion.div>
              </motion.div>

              <motion.div 
                className="absolute left-1/2 top-1/2 transform translate-x-[25%] -translate-y-1/2 border-2 border-dashed border-gray-300 rounded-lg p-8 bg-white/50"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <motion.div
                  className="flex flex-col items-center space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <div className="bg-human-green p-4 rounded-full shadow-lg shadow-human-green/30 flex items-center justify-center">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-sm text-gray-800 font-medium bg-white/90 px-3 py-1.5 rounded-full shadow-sm whitespace-nowrap">Human Zone</p>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/90 px-4 py-2 rounded-full text-sm text-gray-600 shadow-md border border-gray-100"
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
              className="absolute w-[80%] h-[60%] rounded-xl bg-workspace-peach/50 flex items-center justify-center border border-workspace-peach/80"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.p
                className="absolute top-4 text-sm font-medium text-gray-600 bg-white/90 px-4 py-1.5 rounded-full shadow-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Shared Workspace
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="absolute left-1/2 top-1/2 transform -translate-x-[60%] -translate-y-1/2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="bg-robot-blue p-4 rounded-lg shadow-lg shadow-robot-blue/30 flex items-center justify-center">
                  <Bot className="w-8 h-8 text-white" />
                </div>
                <p className="text-sm text-gray-600 font-medium bg-white/90 px-3 py-1.5 rounded-full shadow-sm whitespace-nowrap">Independent work</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute left-1/2 top-1/2 transform translate-x-[20%] -translate-y-1/2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="bg-human-green p-4 rounded-full shadow-lg shadow-human-green/30 flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                <p className="text-sm text-gray-600 font-medium bg-white/90 px-3 py-1.5 rounded-full shadow-sm whitespace-nowrap">Independent work</p>
              </div>
            </motion.div>

            <motion.div 
              className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/90 px-4 py-2 rounded-full text-sm text-gray-600 shadow-md border border-gray-100 z-10"
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
              className="absolute w-[80%] h-[60%] rounded-xl bg-workspace-peach/50 flex items-center justify-center border border-workspace-peach/80"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.p
                className="absolute top-2 text-xs font-medium text-gray-600 bg-white/90 px-3 py-1 rounded-full shadow-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Time-Shared Workspace
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="absolute left-[30%] top-[40%] transform -translate-y-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex flex-col items-center space-y-2">
                <div className="bg-robot-blue p-3 rounded-lg shadow-lg shadow-robot-blue/30 flex items-center justify-center">
                  <Bot className="w-8 h-8 text-white" />
                </div>
                <motion.div 
                  className="px-2 py-1 bg-blue-100 rounded text-xs shadow-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 2, repeatDelay: 1 }}
                >
                  Time slot 1
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute right-[30%] top-[40%] transform -translate-y-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex flex-col items-center space-y-2">
                <div className="bg-human-green p-3 rounded-full shadow-lg shadow-human-green/30 flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                <motion.div 
                  className="px-2 py-1 bg-green-100 rounded text-xs shadow-sm"
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
              className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <ArrowRightLeft className="w-16 h-16 text-gray-400 opacity-50" />
            </motion.div>

            <motion.div 
              className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-white/90 px-4 py-2 rounded-full text-xs text-gray-600 shadow-md border border-gray-100 z-10"
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
              className="absolute w-[80%] h-[60%] rounded-xl bg-workspace-peach/50 flex items-center justify-center border border-workspace-peach/80"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.p
                className="absolute top-2 text-xs font-medium text-gray-600 bg-white/90 px-3 py-1 rounded-full shadow-sm"
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
                  <Bot className="w-8 h-8 text-white" />
                </div>
                <p className="text-xs text-gray-600 font-medium bg-white/80 px-2 py-1 rounded-full shadow-sm">Task A</p>
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
                <p className="text-xs text-gray-600 font-medium bg-white/80 px-2 py-1 rounded-full shadow-sm">Task B</p>
              </div>
            </motion.div>

            {/* Feedback Arrows - Center them between the agents */}
            <motion.svg 
              className="absolute w-full h-full pointer-events-none" 
              viewBox="0 0 400 300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.path
                d="M130,130 C175,110 225,110 270,130"
                fill="none"
                stroke="#4b7bec"
                strokeWidth="3"
                strokeDasharray="6,3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              />
              <motion.path
                d="M270,150 C225,170 175,170 130,150"
                fill="none"
                stroke="#26de81"
                strokeWidth="3"
                strokeDasharray="6,3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
              />
              <motion.circle cx="130" cy="140" r="3" fill="#4b7bec" 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.5 }}
              />
              <motion.circle cx="270" cy="140" r="3" fill="#26de81" 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.5 }}
              />
            </motion.svg>

            <motion.div 
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 px-4 py-2 rounded-full text-xs text-gray-600 shadow-md border border-gray-100"
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
              className="absolute w-[80%] h-[60%] rounded-xl bg-workspace-peach/50 flex items-center justify-center border border-workspace-peach/80"
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
                  className="absolute top-1 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-600 bg-white/90 px-3 py-1 rounded-full shadow-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Shared Task
                </motion.p>
              </motion.div>
              <motion.p
                className="absolute top-2 text-xs font-medium text-gray-600 bg-white/90 px-3 py-1 rounded-full shadow-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Collaborative Workspace
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="absolute left-[30%] top-[40%] transform -translate-y-1/2 z-20"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="flex flex-col items-center space-y-2">
                <div className="bg-robot-blue p-3 rounded-lg shadow-lg shadow-robot-blue/30 flex items-center justify-center">
                  <Bot className="w-8 h-8 text-white" />
                </div>
                <motion.div
                  className="px-2 py-1 bg-blue-100 rounded text-xs shadow-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  Co-worker
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute right-[30%] top-[40%] transform -translate-y-1/2 z-20"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div className="flex flex-col items-center space-y-2">
                <div className="bg-human-green p-3 rounded-full shadow-lg shadow-human-green/30 flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                <motion.div
                  className="px-2 py-1 bg-green-100 rounded text-xs shadow-sm"
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
              className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
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

            {/* Connecting Communication Lines - Centered */}
            <motion.svg 
              className="absolute w-full h-full pointer-events-none" 
              viewBox="0 0 400 300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <motion.path
                d="M130,140 C175,140 225,140 270,140"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
              <motion.path
                d="M270,160 C225,160 175,160 130,160"
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
                  cx: [130, 200, 270, 200, 130],
                  opacity: [0, 1, 0, 1, 0]
                }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              />
              
              <motion.circle cx="200" cy="160" r="4" fill="#22c55e"
                animate={{ 
                  cx: [270, 200, 130, 200, 270],
                  opacity: [0, 1, 0, 1, 0]
                }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              />
            </motion.svg>

            <motion.div 
              className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-white/90 px-4 py-2 rounded-full text-xs text-gray-600 shadow-md border border-gray-100 z-10"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              Same task, active communication
            </motion.div>
          </div>
        );
      
      case 'coevolution':
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Co-evolution Stage - Advanced Integration */}
            <motion.div 
              className="absolute w-[80%] h-[60%] rounded-xl bg-gradient-to-br from-workspace-peach/50 to-purple-100/30 flex items-center justify-center border border-workspace-peach/80"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.p
                className="absolute top-2 text-xs font-medium text-gray-600 bg-white/90 px-3 py-1 rounded-full shadow-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Co-Evolutionary Environment
              </motion.p>
            </motion.div>
            
            {/* Connected Area showing integration */}
            <motion.div
              className="absolute w-[60%] h-[50%] rounded-lg bg-gradient-to-r from-blue-100/30 via-purple-100/20 to-green-100/30 border border-white/30 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 bg-white/5 rounded-lg"
                animate={{ 
                  background: ["rgba(255,255,255,0.05)", "rgba(255,255,255,0.15)", "rgba(255,255,255,0.05)"] 
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </motion.div>
            
            <motion.div 
              className="absolute left-[30%] top-1/2 transform -translate-y-1/2 z-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex flex-col items-center space-y-2">
                <motion.div 
                  className="bg-robot-blue p-3 rounded-lg shadow-lg shadow-robot-blue/30 flex items-center justify-center"
                  animate={{
                    boxShadow: [
                      "0 10px 15px -3px rgba(59, 130, 246, 0.3)",
                      "0 10px 20px -3px rgba(59, 130, 246, 0.5)",
                      "0 10px 15px -3px rgba(59, 130, 246, 0.3)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Bot className="w-8 h-8 text-white" />
                </motion.div>
                <motion.div
                  className="px-2 py-1 bg-blue-100 rounded text-xs shadow-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  Adaptive System
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute right-[30%] top-1/2 transform -translate-y-1/2 z-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex flex-col items-center space-y-2">
                <motion.div 
                  className="bg-human-green p-3 rounded-full shadow-lg shadow-human-green/30 flex items-center justify-center"
                  animate={{
                    boxShadow: [
                      "0 10px 15px -3px rgba(38, 222, 129, 0.3)",
                      "0 10px 20px -3px rgba(38, 222, 129, 0.5)",
                      "0 10px 15px -3px rgba(38, 222, 129, 0.3)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <User className="w-8 h-8 text-white" />
                </motion.div>
                <motion.div
                  className="px-2 py-1 bg-green-100 rounded text-xs shadow-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  Human Partner
                </motion.div>
              </div>
            </motion.div>

            {/* Brain in the middle representing shared cognition */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <motion.div
                className="bg-purple-100/50 backdrop-blur-sm p-3 rounded-full border border-purple-200"
                animate={{ 
                  boxShadow: ["0 0 0px rgba(147, 51, 234, 0)", "0 0 20px rgba(147, 51, 234, 0.4)", "0 0 0px rgba(147, 51, 234, 0)"] 
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Brain className="w-8 h-8 text-purple-600" />
              </motion.div>
            </motion.div>

            {/* Learning and evolution particles */}
            <motion.div className="absolute inset-0 overflow-hidden">
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  initial={{ 
                    x: Math.random() * 100 + 150, 
                    y: Math.random() * 100 + 100,
                    opacity: 0,
                    scale: 0 
                  }}
                  animate={{ 
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                    x: Math.random() * 200 + 100,
                    y: Math.random() * 200 + 50
                  }}
                  transition={{ 
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 5,
                    ease: "easeInOut"
                  }}
                >
                  <Sparkles className={`w-${Math.floor(Math.random() * 3) + 3} h-${Math.floor(Math.random() * 3) + 3} text-${Math.random() > 0.5 ? 'purple' : 'blue'}-${Math.floor(Math.random() * 3) + 3}00`} />
                </motion.div>
              ))}
            </motion.div>

            {/* Complex interconnected network lines */}
            <motion.svg 
              className="absolute w-full h-full pointer-events-none" 
              viewBox="0 0 400 300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              {/* Multiple connection paths */}
              <motion.path
                d="M130,130 C175,110 225,110 270,130"
                fill="none"
                stroke="#4b7bec"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
              <motion.path
                d="M270,150 C225,170 175,170 130,150"
                fill="none"
                stroke="#26de81"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
              />
              <motion.path
                d="M130,140 C175,140 225,140 270,140"
                fill="none"
                stroke="#a55eea"
                strokeWidth="2"
                strokeDasharray="3,2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              />
              
              {/* Additional connection paths */}
              <motion.path
                d="M150,120 C180,90 220,90 250,120"
                fill="none"
                stroke="#fd9644"
                strokeWidth="1.5"
                strokeDasharray="2,2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              />
              <motion.path
                d="M150,160 C180,190 220,190 250,160"
                fill="none"
                stroke="#fd9644"
                strokeWidth="1.5"
                strokeDasharray="2,2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 1.6 }}
              />
              
              {/* Interactive Communication Particles */}
              <motion.circle cx="200" cy="130" r="3" fill="#4b7bec" 
                animate={{ 
                  cx: [130, 200, 270, 200, 130],
                  opacity: [0, 1, 0, 1, 0]
                }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              />
              
              <motion.circle cx="200" cy="150" r="3" fill="#26de81"
                animate={{ 
                  cx: [270, 200, 130, 200, 270],
                  opacity: [0, 1, 0, 1, 0]
                }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              />
              
              <motion.circle cx="200" cy="140" r="3" fill="#a55eea"
                animate={{ 
                  cx: [130, 200, 270, 200, 130],
                  opacity: [0, 1, 0, 1, 0]
                }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              />
            </motion.svg>

            <motion.div 
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 px-4 py-2 rounded-full text-xs text-gray-600 shadow-md border border-gray-100"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              Mutual evolution and adaptation
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
