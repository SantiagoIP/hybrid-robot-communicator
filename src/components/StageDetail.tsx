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
      description: 'The collaboration stage involves humans and robots working together on the same task simultaneously. Their actions directly affect each other, requiring sophisticated communication and coordination systems.',
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
    },
    coevolution: {
      title: 'Co-evolution',
      description: 'This stage represents the author\'s own conceptual model for future human-robot integration, extending beyond traditional frameworks found in current literature. In this proposed advanced stage, robots would operate with greater freedom and autonomy while maintaining strong interconnection with humans. Robots could learn and evolve in their work, leading to better performance and adaptation. The workplace would become a unified system where responsibility is shared, and errors are tracked holistically rather than being attributed to individual agents. Robots would develop the ability to emulate human preferences and communication styles, fostering improved teamwork capacity and trust-building relationships.',
      humanCapabilities: [
        'Building trust through consistent interaction',
        'Sharing responsibility for system-wide outcomes',
        'Guiding robot learning and adaptation',
        'Contributing to collective knowledge building'
      ],
      robotCapabilities: [
        'Operating with increased autonomy and freedom',
        'Learning and evolving from work experiences',
        'Emulating human preferences and work styles',
        'Contributing to system-wide performance tracking'
      ],
      communication: [
        'Deep learning-based interaction patterns',
        'Adaptive communication styles matching humans',
        'Shared responsibility frameworks',
        'Continuous feedback and learning loops'
      ],
      examples: [
        'Self-improving manufacturing systems',
        'Adaptive service robots in healthcare',
        'Learning-enabled collaborative research',
        'Trust-based human-robot partnerships'
      ]
    }
  };

  const current = stageData[stage as keyof typeof stageData];

  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">{current.title}</h2>
      <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">{current.description}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <motion.div 
          className="bg-gradient-to-br from-green-50 to-green-50/50 rounded-lg p-4 border border-green-100/80"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.15 }}
        >
          <h3 className="font-semibold text-green-700 mb-2.5 flex items-center text-sm">
            <span className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-2 shrink-0">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </span>
            Human Capabilities
          </h3>
          <ul className="space-y-1.5">
            {current.humanCapabilities.map((capability, index) => (
              <motion.li 
                key={index} 
                className="text-sm text-gray-600 flex items-start leading-snug"
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: 0.2 + (index * 0.05) }}
              >
                <span className="text-green-400 mr-2 mt-1 text-[8px] shrink-0">&#9679;</span>
                {capability}
              </motion.li>
            ))}
          </ul>
        </motion.div>
        
        <motion.div 
          className="bg-gradient-to-br from-blue-50 to-blue-50/50 rounded-lg p-4 border border-blue-100/80"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.15 }}
        >
          <h3 className="font-semibold text-blue-700 mb-2.5 flex items-center text-sm">
            <span className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-2 shrink-0">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
            Robot Capabilities
          </h3>
          <ul className="space-y-1.5">
            {current.robotCapabilities.map((capability, index) => (
              <motion.li 
                key={index} 
                className="text-sm text-gray-600 flex items-start leading-snug"
                initial={{ opacity: 0, x: 5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: 0.2 + (index * 0.05) }}
              >
                <span className="text-blue-400 mr-2 mt-1 text-[8px] shrink-0">&#9679;</span>
                {capability}
              </motion.li>
            ))}
          </ul>
        </motion.div>
        
        <motion.div 
          className="bg-gradient-to-br from-purple-50 to-purple-50/50 rounded-lg p-4 border border-purple-100/80"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.25 }}
        >
          <h3 className="font-semibold text-purple-700 mb-2.5 flex items-center text-sm">
            <span className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mr-2 shrink-0">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </span>
            Communication
          </h3>
          <ul className="space-y-1.5">
            {current.communication.map((comm, index) => (
              <motion.li 
                key={index} 
                className="text-sm text-gray-600 flex items-start leading-snug"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.3 + (index * 0.05) }}
              >
                <span className="text-purple-400 mr-2 mt-1 text-[8px] shrink-0">&#9679;</span>
                {comm}
              </motion.li>
            ))}
          </ul>
        </motion.div>
        
        <motion.div 
          className="bg-gradient-to-br from-orange-50 to-orange-50/50 rounded-lg p-4 border border-orange-100/80"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.25 }}
        >
          <h3 className="font-semibold text-orange-700 mb-2.5 flex items-center text-sm">
            <span className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center mr-2 shrink-0">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </span>
            Examples
          </h3>
          <ul className="space-y-1.5">
            {current.examples.map((example, index) => (
              <motion.li 
                key={index} 
                className="text-sm text-gray-600 flex items-start leading-snug"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.3 + (index * 0.05) }}
              >
                <span className="text-orange-400 mr-2 mt-1 text-[8px] shrink-0">&#9679;</span>
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
