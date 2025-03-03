
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type StageDetailProps = {
  stage: string;
  isActive: boolean;
};

const StageDetail: React.FC<StageDetailProps> = ({ stage, isActive }) => {
  if (!isActive) return null;

  const stageData = {
    cell: {
      title: 'Cell (Isolation)',
      description: 'In this initial stage, robots and humans operate in completely separate spaces. The robot works in isolation, typically in a confined or restricted area, while humans remain outside this space. There is no direct interaction between humans and robots.',
      humanCapabilities: [
        'Complete control over robot programming',
        'Monitoring from a safe distance',
        'Manual intervention when robot is stopped'
      ],
      robotCapabilities: [
        'Repetitive tasks execution',
        'Operation in dangerous environments',
        'High precision in controlled settings'
      ],
      communication: [
        'One-way programming instructions',
        'No real-time feedback loop',
        'Safety barriers prevent physical interaction'
      ],
      examples: [
        'Traditional industrial robot cells with safety cages',
        'Automated manufacturing lines',
        'Hazardous material handling robots'
      ]
    },
    coexistence: {
      title: 'Coexistence',
      description: 'In the coexistence stage, humans and robots share the same environment but work independently with minimal interaction. Safety measures ensure they can operate in proximity without endangering humans.',
      humanCapabilities: [
        'Working in the same general area as robots',
        'Performing separate tasks alongside robots',
        'Monitoring robot performance'
      ],
      robotCapabilities: [
        'Basic awareness of human presence',
        'Safety-limited operation',
        'Independent task execution'
      ],
      communication: [
        'Passive safety systems',
        'Limited sensor-based awareness',
        'Minimal direct communication'
      ],
      examples: [
        'Warehouse robots navigating around human workers',
        'Cleaning robots operating in office spaces',
        'Manufacturing floors with designated robot work areas'
      ]
    },
    synchronised: {
      title: 'Synchronised',
      description: 'In the synchronisation stage, humans and robots share the same workspace but work at different times. Their tasks are coordinated in sequence, with each waiting for the other to complete their work before entering the shared space.',
      humanCapabilities: [
        'Accessing robot workspace when robots are inactive',
        'Setting up materials for robot processing',
        'Performing quality checks after robot tasks',
      ],
      robotCapabilities: [
        'Time-scheduled operation',
        'Task completion notification',
        'Workspace preparation for human entry'
      ],
      communication: [
        'Handover protocols',
        'Status signals indicating workspace availability',
        'Task completion notifications'
      ],
      examples: [
        'Machine tending where humans load/unload between cycles',
        'Sequential assembly operations',
        'Shared workstations with scheduled access'
      ]
    },
    cooperation: {
      title: 'Cooperation',
      description: 'In cooperation, humans and robots work simultaneously in the same workspace, each focusing on their specific tasks. They operate in parallel with awareness of each other but without directly collaborating on the same subtask.',
      humanCapabilities: [
        'Working alongside robots without interruption',
        'Complementary task execution',
        'Adaptive workflow based on robot activity'
      ],
      robotCapabilities: [
        'Human-aware navigation and operation',
        'Advanced safety systems',
        'Complementary task execution'
      ],
      communication: [
        'Real-time position tracking',
        'Status updates between systems',
        'Spatial awareness and adjustment'
      ],
      examples: [
        'Assembly lines where robots handle heavy components while humans perform precise tasks',
        'Collaborative logistics where robots transport materials to human workstations',
        'Surgical settings where robots hold instruments while surgeons operate'
      ]
    },
    collaboration: {
      title: 'Collaboration',
      description: 'The highest level of integration, collaboration involves humans and robots working together on the same task simultaneously. Their actions directly affect each other, requiring sophisticated communication and coordination systems.',
      humanCapabilities: [
        'Direct physical interaction with robots',
        'Real-time guidance and adaptation',
        'Intuitive control through gestures or voice'
      ],
      robotCapabilities: [
        'Force/torque sensing for safe contact',
        'Adaptive motion based on human actions',
        'Context awareness and prediction'
      ],
      communication: [
        'Bidirectional real-time feedback',
        'Haptic feedback',
        'Multi-modal communication (visual, auditory, tactile)'
      ],
      examples: [
        'Collaborative assembly where human and robot manipulate the same part',
        'Rehabilitation robots that respond to patient movements',
        'Teaching by demonstration in manufacturing'
      ]
    }
  };

  const current = stageData[stage as keyof typeof stageData];

  return (
    <motion.div
      className="w-full bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-primary mb-3">{current.title}</h2>
      <p className="text-gray-700 mb-6">{current.description}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div 
          className="bg-blue-50 rounded-lg p-4 border border-blue-100"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <h3 className="font-semibold text-blue-700 mb-3 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Human Capabilities
          </h3>
          <ul className="space-y-2">
            {current.humanCapabilities.map((capability, index) => (
              <motion.li 
                key={index} 
                className="text-sm text-gray-700 flex items-start"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
              >
                <span className="text-green-500 mr-2">●</span>
                {capability}
              </motion.li>
            ))}
          </ul>
        </motion.div>
        
        <motion.div 
          className="bg-blue-50 rounded-lg p-4 border border-blue-100"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <h3 className="font-semibold text-blue-700 mb-3 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Robot Capabilities
          </h3>
          <ul className="space-y-2">
            {current.robotCapabilities.map((capability, index) => (
              <motion.li 
                key={index} 
                className="text-sm text-gray-700 flex items-start"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
              >
                <span className="text-blue-500 mr-2">●</span>
                {capability}
              </motion.li>
            ))}
          </ul>
        </motion.div>
        
        <motion.div 
          className="bg-blue-50 rounded-lg p-4 border border-blue-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <h3 className="font-semibold text-blue-700 mb-3 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Communication
          </h3>
          <ul className="space-y-2">
            {current.communication.map((comm, index) => (
              <motion.li 
                key={index} 
                className="text-sm text-gray-700 flex items-start"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + (index * 0.1) }}
              >
                <span className="text-purple-500 mr-2">●</span>
                {comm}
              </motion.li>
            ))}
          </ul>
        </motion.div>
        
        <motion.div 
          className="bg-blue-50 rounded-lg p-4 border border-blue-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <h3 className="font-semibold text-blue-700 mb-3 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            Examples
          </h3>
          <ul className="space-y-2">
            {current.examples.map((example, index) => (
              <motion.li 
                key={index} 
                className="text-sm text-gray-700 flex items-start"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + (index * 0.1) }}
              >
                <span className="text-orange-500 mr-2">●</span>
                {example}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default StageDetail;
