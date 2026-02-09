import React from 'react';
import { motion } from 'framer-motion';
import { Bot, User, ArrowRightLeft, RefreshCw, Brain, Sparkles } from 'lucide-react';

type StageVisualizationProps = {
  stage: string;
  isActive: boolean;
};

const SPARKLE_CONFIGS = [
  { x: 160, y: 110, size: 14, color: '#a855f6', delay: 0.2, duration: 3.2, dx: 180, dy: 90 },
  { x: 220, y: 130, size: 12, color: '#3b82f6', delay: 1.0, duration: 3.8, dx: 250, dy: 110 },
  { x: 190, y: 160, size: 16, color: '#a855f6', delay: 0.6, duration: 4.0, dx: 170, dy: 180 },
  { x: 240, y: 100, size: 10, color: '#3b82f6', delay: 1.5, duration: 3.5, dx: 200, dy: 80 },
  { x: 150, y: 140, size: 13, color: '#a855f6', delay: 2.0, duration: 3.0, dx: 130, dy: 160 },
  { x: 200, y: 120, size: 11, color: '#3b82f6', delay: 0.8, duration: 4.2, dx: 230, dy: 100 },
  { x: 170, y: 170, size: 15, color: '#a855f6', delay: 1.3, duration: 3.6, dx: 190, dy: 150 },
  { x: 260, y: 140, size: 12, color: '#3b82f6', delay: 2.5, duration: 3.4, dx: 220, dy: 170 },
];

const StageVisualization: React.FC<StageVisualizationProps> = ({ stage, isActive }) => {
  if (!isActive) return null;

  const renderVisualization = () => {
    switch (stage) {
      case 'cell':
        return (
          <div className="relative w-full h-full flex flex-col items-center justify-center px-6 py-4">
            {/* Title */}
            <motion.div
              className="mb-6 bg-white px-4 py-1.5 rounded-full text-sm text-gray-600 font-medium shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              Separate spaces
            </motion.div>

            {/* Icons container */}
            <div className="flex items-center justify-center w-full gap-16 mb-6">
              {/* Robot Zone */}
              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <div className="bg-robot-blue p-4 rounded-lg shadow-lg shadow-robot-blue/30 flex items-center justify-center mb-3">
                  <Bot className="w-8 h-8 text-white" />
                </div>
                <span className="bg-white px-3 py-1.5 rounded-full text-sm text-gray-600 font-medium shadow-sm border border-gray-100">
                  Robot Zone
                </span>
              </motion.div>

              {/* Divider */}
              <motion.div
                className="w-px h-20 bg-gradient-to-b from-transparent via-gray-300 to-transparent"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              />

              {/* Human Zone */}
              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <div className="bg-human-green p-4 rounded-full shadow-lg shadow-human-green/30 flex items-center justify-center mb-3">
                  <User className="w-8 h-8 text-white" />
                </div>
                <span className="bg-white px-3 py-1.5 rounded-full text-sm text-gray-600 font-medium shadow-sm border border-gray-100">
                  Human Zone
                </span>
              </motion.div>
            </div>

            {/* Description */}
            <motion.div
              className="bg-white px-4 py-1.5 rounded-full text-sm text-gray-500 font-medium shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              Completely separated operation
            </motion.div>
          </div>
        );

      case 'coexistence':
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Shared environment background */}
            <motion.div
              className="absolute inset-4 rounded-xl bg-workspace-peach/40 border border-workspace-peach/60"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.p
                className="absolute top-3 left-1/2 -translate-x-1/2 text-sm font-medium text-gray-600 bg-white/90 px-4 py-1.5 rounded-full shadow-sm whitespace-nowrap"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Shared Workspace
              </motion.p>
            </motion.div>

            {/* Robot */}
            <motion.div
              className="absolute left-[22%] top-[42%] -translate-y-1/2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex flex-col items-center gap-3">
                <div className="bg-robot-blue p-3.5 rounded-lg shadow-lg shadow-robot-blue/30">
                  <Bot className="w-7 h-7 text-white" />
                </div>
                <span className="text-sm text-gray-600 font-medium bg-white/90 px-3 py-1.5 rounded-full shadow-sm whitespace-nowrap">
                  Independent work
                </span>
              </div>
            </motion.div>

            {/* Human */}
            <motion.div
              className="absolute right-[22%] top-[42%] -translate-y-1/2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex flex-col items-center gap-3">
                <div className="bg-human-green p-3.5 rounded-full shadow-lg shadow-human-green/30">
                  <User className="w-7 h-7 text-white" />
                </div>
                <span className="text-sm text-gray-600 font-medium bg-white/90 px-3 py-1.5 rounded-full shadow-sm whitespace-nowrap">
                  Independent work
                </span>
              </div>
            </motion.div>

            {/* Bottom label */}
            <motion.div
              className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white/90 px-4 py-2 rounded-full text-sm text-gray-600 shadow-sm border border-gray-100 z-10 whitespace-nowrap"
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
            {/* Workspace background */}
            <motion.div
              className="absolute inset-x-8 inset-y-6 rounded-xl bg-workspace-peach/40 border border-workspace-peach/60"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.p
                className="absolute top-3 left-1/2 -translate-x-1/2 text-sm font-medium text-gray-600 bg-white/90 px-3 py-1.5 rounded-full shadow-sm whitespace-nowrap"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Time-Shared Workspace
              </motion.p>
            </motion.div>

            {/* Robot */}
            <motion.div
              className="absolute left-[28%] top-[42%] -translate-y-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex flex-col items-center gap-2">
                <div className="bg-robot-blue p-3 rounded-lg shadow-lg shadow-robot-blue/30">
                  <Bot className="w-7 h-7 text-white" />
                </div>
                <motion.span
                  className="px-2.5 py-1 bg-blue-100 rounded-full text-xs font-medium text-blue-700 shadow-sm"
                  animate={{ opacity: [0, 1, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 3, times: [0, 0.1, 0.4, 0.5] }}
                >
                  Time slot 1
                </motion.span>
              </div>
            </motion.div>

            {/* Connecting Arrow */}
            <motion.div
              className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <ArrowRightLeft className="w-10 h-10 text-gray-400" />
            </motion.div>

            {/* Human */}
            <motion.div
              className="absolute right-[28%] top-[42%] -translate-y-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex flex-col items-center gap-2">
                <div className="bg-human-green p-3 rounded-full shadow-lg shadow-human-green/30">
                  <User className="w-7 h-7 text-white" />
                </div>
                <motion.span
                  className="px-2.5 py-1 bg-green-100 rounded-full text-xs font-medium text-green-700 shadow-sm"
                  animate={{ opacity: [0, 0, 0, 1, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 3, times: [0, 0.4, 0.5, 0.6, 0.9, 1.0] }}
                >
                  Time slot 2
                </motion.span>
              </div>
            </motion.div>

            {/* Bottom label */}
            <motion.div
              className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white/90 px-4 py-2 rounded-full text-sm text-gray-600 shadow-sm border border-gray-100 z-10 whitespace-nowrap"
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
            {/* Workspace background */}
            <motion.div
              className="absolute inset-x-8 inset-y-6 rounded-xl bg-workspace-peach/40 border border-workspace-peach/60"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.p
                className="absolute top-3 left-1/2 -translate-x-1/2 text-sm font-medium text-gray-600 bg-white/90 px-3 py-1.5 rounded-full shadow-sm whitespace-nowrap"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Simultaneous Operation
              </motion.p>
            </motion.div>

            {/* Robot */}
            <motion.div
              className="absolute left-[25%] top-[45%] -translate-y-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex flex-col items-center gap-2">
                <div className="bg-robot-blue p-3 rounded-lg shadow-lg shadow-robot-blue/30">
                  <Bot className="w-7 h-7 text-white" />
                </div>
                <span className="text-xs text-gray-600 font-medium bg-white/90 px-2.5 py-1 rounded-full shadow-sm">Task A</span>
              </div>
            </motion.div>

            {/* Human */}
            <motion.div
              className="absolute right-[25%] top-[45%] -translate-y-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex flex-col items-center gap-2">
                <div className="bg-human-green p-3 rounded-full shadow-lg shadow-human-green/30">
                  <User className="w-7 h-7 text-white" />
                </div>
                <span className="text-xs text-gray-600 font-medium bg-white/90 px-2.5 py-1 rounded-full shadow-sm">Task B</span>
              </div>
            </motion.div>

            {/* Feedback lines SVG */}
            <motion.svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 400 280"
              preserveAspectRatio="xMidYMid meet"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {/* Top arc - blue dashed */}
              <motion.path
                d="M130,120 C175,95 225,95 270,120"
                fill="none"
                stroke="#61a3ff"
                strokeWidth="2.5"
                strokeDasharray="6,4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              />
              {/* Bottom arc - green dashed */}
              <motion.path
                d="M270,145 C225,170 175,170 130,145"
                fill="none"
                stroke="#61dfa0"
                strokeWidth="2.5"
                strokeDasharray="6,4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
              />
              {/* Endpoint dots */}
              <motion.circle cx="130" cy="132" r="3" fill="#61a3ff"
                initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.5 }}
              />
              <motion.circle cx="270" cy="132" r="3" fill="#61dfa0"
                initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.5 }}
              />
            </motion.svg>

            {/* Bottom label */}
            <motion.div
              className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white/90 px-4 py-2 rounded-full text-sm text-gray-600 shadow-sm border border-gray-100 z-10 whitespace-nowrap"
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
            {/* Workspace background */}
            <motion.div
              className="absolute inset-x-8 inset-y-6 rounded-xl bg-workspace-peach/40 border border-workspace-peach/60"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.p
                className="absolute top-3 left-1/2 -translate-x-1/2 text-sm font-medium text-gray-600 bg-white/90 px-3 py-1.5 rounded-full shadow-sm whitespace-nowrap"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Collaborative Workspace
              </motion.p>
            </motion.div>

            {/* Shared task zone */}
            <motion.div
              className="absolute inset-x-[25%] inset-y-[25%] rounded-lg bg-gradient-to-r from-blue-100/40 to-green-100/40 border border-white/50 z-[5]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <motion.p
                className="absolute top-2 left-1/2 -translate-x-1/2 text-xs font-medium text-gray-500 bg-white/90 px-3 py-1 rounded-full shadow-sm whitespace-nowrap"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Shared Task
              </motion.p>
            </motion.div>

            {/* Robot */}
            <motion.div
              className="absolute left-[25%] top-[42%] -translate-y-1/2 z-20"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex flex-col items-center gap-2">
                <div className="bg-robot-blue p-3 rounded-lg shadow-lg shadow-robot-blue/30">
                  <Bot className="w-7 h-7 text-white" />
                </div>
                <motion.span
                  className="px-2.5 py-1 bg-blue-100 rounded-full text-xs font-medium text-blue-700 shadow-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  Co-worker
                </motion.span>
              </div>
            </motion.div>

            {/* Human */}
            <motion.div
              className="absolute right-[25%] top-[42%] -translate-y-1/2 z-20"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex flex-col items-center gap-2">
                <div className="bg-human-green p-3 rounded-full shadow-lg shadow-human-green/30">
                  <User className="w-7 h-7 text-white" />
                </div>
                <motion.span
                  className="px-2.5 py-1 bg-green-100 rounded-full text-xs font-medium text-green-700 shadow-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  Co-worker
                </motion.span>
              </div>
            </motion.div>

            {/* Active Communication Indicator */}
            <motion.div
              className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <motion.div
                className="bg-white/40 backdrop-blur-sm p-2 rounded-full"
                animate={{
                  boxShadow: [
                    "0 0 0px rgba(59, 130, 246, 0)",
                    "0 0 12px rgba(59, 130, 246, 0.4)",
                    "0 0 0px rgba(59, 130, 246, 0)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <RefreshCw className="w-6 h-6 text-gray-500" />
              </motion.div>
            </motion.div>

            {/* Connection lines */}
            <motion.svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 400 280"
              preserveAspectRatio="xMidYMid meet"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <motion.path
                d="M130,130 L270,130"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
              <motion.path
                d="M270,150 L130,150"
                fill="none"
                stroke="#22c55e"
                strokeWidth="2.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
              />
              {/* Animated particles */}
              <motion.circle r="3.5" fill="#3b82f6"
                animate={{ cx: [130, 270], cy: [130, 130], opacity: [0, 1, 1, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
              />
              <motion.circle r="3.5" fill="#22c55e"
                animate={{ cx: [270, 130], cy: [150, 150], opacity: [0, 1, 1, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
              />
            </motion.svg>

            {/* Bottom label */}
            <motion.div
              className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white/90 px-4 py-2 rounded-full text-sm text-gray-600 shadow-sm border border-gray-100 z-10 whitespace-nowrap"
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
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            {/* Gradient environment */}
            <motion.div
              className="absolute inset-x-8 inset-y-6 rounded-xl bg-gradient-to-br from-workspace-peach/40 to-purple-100/30 border border-workspace-peach/60"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.p
                className="absolute top-3 left-1/2 -translate-x-1/2 text-sm font-medium text-gray-600 bg-white/90 px-3 py-1.5 rounded-full shadow-sm whitespace-nowrap"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Co-Evolutionary Environment
              </motion.p>
            </motion.div>

            {/* Integration zone */}
            <motion.div
              className="absolute inset-x-[20%] inset-y-[20%] rounded-lg bg-gradient-to-r from-blue-100/20 via-purple-100/15 to-green-100/20 border border-white/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 rounded-lg"
                animate={{
                  background: [
                    "rgba(255,255,255,0.05)",
                    "rgba(255,255,255,0.12)",
                    "rgba(255,255,255,0.05)"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </motion.div>

            {/* Robot */}
            <motion.div
              className="absolute left-[25%] top-[45%] -translate-y-1/2 z-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex flex-col items-center gap-2">
                <motion.div
                  className="bg-robot-blue p-3 rounded-lg shadow-lg shadow-robot-blue/30"
                  animate={{
                    boxShadow: [
                      "0 10px 15px -3px rgba(97, 163, 255, 0.3)",
                      "0 10px 20px -3px rgba(97, 163, 255, 0.5)",
                      "0 10px 15px -3px rgba(97, 163, 255, 0.3)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Bot className="w-7 h-7 text-white" />
                </motion.div>
                <motion.span
                  className="px-2.5 py-1 bg-blue-100 rounded-full text-xs font-medium text-blue-700 shadow-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  Adaptive System
                </motion.span>
              </div>
            </motion.div>

            {/* Human */}
            <motion.div
              className="absolute right-[25%] top-[45%] -translate-y-1/2 z-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex flex-col items-center gap-2">
                <motion.div
                  className="bg-human-green p-3 rounded-full shadow-lg shadow-human-green/30"
                  animate={{
                    boxShadow: [
                      "0 10px 15px -3px rgba(97, 223, 160, 0.3)",
                      "0 10px 20px -3px rgba(97, 223, 160, 0.5)",
                      "0 10px 15px -3px rgba(97, 223, 160, 0.3)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <User className="w-7 h-7 text-white" />
                </motion.div>
                <motion.span
                  className="px-2.5 py-1 bg-green-100 rounded-full text-xs font-medium text-green-700 shadow-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  Human Partner
                </motion.span>
              </div>
            </motion.div>

            {/* Brain - shared cognition */}
            <motion.div
              className="absolute top-[43%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <motion.div
                className="bg-purple-100/60 backdrop-blur-sm p-2.5 rounded-full border border-purple-200/60"
                animate={{
                  boxShadow: [
                    "0 0 0px rgba(147, 51, 234, 0)",
                    "0 0 16px rgba(147, 51, 234, 0.35)",
                    "0 0 0px rgba(147, 51, 234, 0)"
                  ]
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <Brain className="w-6 h-6 text-purple-600" />
              </motion.div>
            </motion.div>

            {/* Sparkle particles - using fixed sizes and colors */}
            {SPARKLE_CONFIGS.map((cfg, i) => (
              <motion.div
                key={i}
                className="absolute pointer-events-none"
                initial={{ x: cfg.x, y: cfg.y, opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 0.8, 0],
                  scale: [0, 1, 0],
                  x: cfg.dx,
                  y: cfg.dy
                }}
                transition={{
                  duration: cfg.duration,
                  repeat: Infinity,
                  delay: cfg.delay,
                  ease: "easeInOut"
                }}
              >
                <Sparkles
                  style={{ width: cfg.size, height: cfg.size, color: cfg.color }}
                />
              </motion.div>
            ))}

            {/* Network connection lines */}
            <motion.svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 400 280"
              preserveAspectRatio="xMidYMid meet"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              {/* Multi-path connections */}
              <motion.path d="M130,120 C175,100 225,100 270,120"
                fill="none" stroke="#61a3ff" strokeWidth="2"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
              <motion.path d="M270,150 C225,170 175,170 130,150"
                fill="none" stroke="#61dfa0" strokeWidth="2"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              />
              <motion.path d="M130,135 L270,135"
                fill="none" stroke="#a855f6" strokeWidth="1.5" strokeDasharray="4,3"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              />
              <motion.path d="M150,108 C180,85 220,85 250,108"
                fill="none" stroke="#fb923c" strokeWidth="1.5" strokeDasharray="3,3"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              />
              <motion.path d="M150,162 C180,185 220,185 250,162"
                fill="none" stroke="#fb923c" strokeWidth="1.5" strokeDasharray="3,3"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 1.6 }}
              />

              {/* Animated particles */}
              <motion.circle r="3" fill="#61a3ff"
                animate={{ cx: [130, 200, 270], cy: [120, 100, 120], opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              />
              <motion.circle r="3" fill="#61dfa0"
                animate={{ cx: [270, 200, 130], cy: [150, 170, 150], opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              />
              <motion.circle r="2.5" fill="#a855f6"
                animate={{ cx: [130, 270], cy: [135, 135], opacity: [0, 1, 1, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              />
            </motion.svg>

            {/* Bottom label */}
            <motion.div
              className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white/90 px-4 py-2 rounded-full text-sm text-gray-600 shadow-sm border border-gray-100 z-10 whitespace-nowrap"
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
      className="w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {renderVisualization()}
    </motion.div>
  );
};

export default StageVisualization;
