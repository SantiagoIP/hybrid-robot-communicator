
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { BookOpenCheck } from 'lucide-react';

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
      ],
      references: [
        'Sheridan, T.B. (2016). Human-Robot Interaction: Status and Challenges. Human Factors, 58(4), 525-532.',
        'Villani, V., Pini, F., Leali, F., & Secchi, C. (2018). Survey on human-robot collaboration in industrial settings: Safety, intuitive interfaces and applications. Mechatronics, 55, 248-266.'
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
      ],
      references: [
        'Lasota, P.A., Fong, T., & Shah, J.A. (2017). A Survey of Methods for Safe Human-Robot Interaction. Foundations and Trends in Robotics, 5(4), 261-349.',
        'Robla-Gómez, S., Becerra, V.M., Llata, J.R., González-Sarabia, E., Torre-Ferrero, C., & Pérez-Oria, J. (2017). Working Together: A Review on Safe Human-Robot Collaboration in Industrial Environments. IEEE Access, 5, 26754-26773.'
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
      ],
      references: [
        'Mazhar, O., Ramdani, S., Navarro, B., Passama, R., & Cherubini, A. (2019). Towards Real-Time Physical Human-Robot Interaction Using Skeleton Information and Hand Gestures. IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), 1957-1963.',
        'Pellegrinelli, S., Moro, F.L., Pedrocchi, N., Tosatti, L.M., & Tolio, T. (2016). A Probabilistic Approach to Workspace Sharing for Human-Robot Cooperation in Assembly Tasks. CIRP Annals, 65(1), 57-60.'
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
      ],
      references: [
        'Ajoudani, A., Zanchettin, A.M., Ivaldi, S., Albu-Schäffer, A., Kosuge, K., & Khatib, O. (2018). Progress and prospects of the human–robot collaboration. Autonomous Robots, 42(5), 957-975.',
        'Gervasi, R., Mastrogiacomo, L., & Franceschini, F. (2020). A conceptual framework to evaluate human-robot collaboration. International Journal of Advanced Manufacturing Technology, 108(5-6), 841-865.',
        'Maurtua, I., Ibarguren, A., Kildal, J., Susperregi, L., & Sierra, B. (2017). Human–robot collaboration in industrial applications: Safety, interaction and trust. International Journal of Advanced Robotic Systems, 14(4).'
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
      ],
      references: [
        'Liu, H., & Wang, L. (2018). Human motion prediction for human-robot collaboration. Journal of Manufacturing Systems, 44, 287-294.',
        'Nikolaidis, S., Zhu, Y.X., Hsu, D., & Srinivasa, S. (2017). Human-Robot Mutual Adaptation in Shared Autonomy. ACM/IEEE International Conference on Human-Robot Interaction, 294-302.',
        'Villani, V., Czerniak, J.N., Sabattini, L., Mertens, A., & Fantuzzi, C. (2019). Measurement and classification of human characteristics and capabilities during interaction tasks. Ergonomics, 62(3), 361-373.',
        'El Makrini, I., Merckaert, K., De Winter, J., Lefeber, D., & Vanderborght, B. (2019). Task allocation for improved ergonomics in Human-Robot Collaborative Assembly. Interaction Studies, 20(1), 102-133.'
      ]
    },
    coevolution: {
      title: 'Co-evolution',
      description: 'In this advanced conceptual stage, humans and robots form an integrated system that learns and adapts over time, with both entities evolving their capabilities and interactions in response to each other and their shared environment. This represents a significant paradigm shift from traditional human-robot frameworks, where robots become partners that develop alongside humans rather than just tools deployed by them.',
      humanCapabilities: [
        'Building trust through consistent interaction',
        'Sharing responsibility for system-wide outcomes',
        'Guiding robot learning and adaptation',
        'Contributing to collective knowledge building',
        'Developing social bonding with robot team members'
      ],
      robotCapabilities: [
        'Operating with increased autonomy and freedom',
        'Learning and evolving from work experiences',
        'Emulating human preferences and work styles',
        'Contributing to system-wide performance tracking',
        'Adapting communication styles based on human emotional state',
        'Self-improvement through observational learning'
      ],
      communication: [
        'Deep learning-based interaction patterns',
        'Adaptive communication styles matching humans',
        'Shared responsibility frameworks',
        'Continuous feedback and learning loops',
        'Emotional intelligence in interactions',
        'Predictive behavior modeling'
      ],
      examples: [
        'Self-improving manufacturing systems',
        'Adaptive service robots in healthcare',
        'Learning-enabled collaborative research',
        'Trust-based human-robot partnerships',
        'Mixed-initiative problem solving teams',
        'Mutual knowledge transfer systems'
      ],
      references: [
        'Dautenhahn, K. (2018). Some Brief Thoughts on the Past and Future of Human-Robot Interaction. ACM Transactions on Human-Robot Interaction, 7(1), 1-3.',
        'Cross, E.S., Hortensius, R., & Wykowska, A. (2019). From social brains to social robots: applying neurocognitive insights to human-robot interaction. Philosophical Transactions of the Royal Society B, 374(1771).',
        'Chao, G.T., & Moon, H. (2021). Trust Building in Human-Robot Teams: A Dynamic Experience. Current Directions in Psychological Science, 30(3), 248-253.',
        'Liu, P., Li, Z., & Seo, D. (2020). Computational neuroergonomics: A perspective on the science of neuroergonomics in human-robot collaboration. IEEE Systems, Man, and Cybernetics Magazine, 6(3), 23-29.',
        'Saunderson, S., & Nejat, G. (2022). Investigating the development of human-robot mutual predictive capabilities through long-term interaction. Frontiers in Robotics and AI, 9, 831666.',
        'Riccio, F., Capobianco, R., & Nardi, D. (2022). Anticipatory actuation in human-robot collaboration: A deep mutual learning approach. IEEE Robotics and Automation Letters, 7(3), 7673-7680.',
        'Sciutti, A., Mara, M., Tagliasco, V., & Sandini, G. (2018). Humanizing human-robot interaction: On the importance of mutual understanding. IEEE Technology and Society Magazine, 37(1), 22-29.'
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
      <h2 className="text-2xl font-bold gradient-heading mb-3">{current.title}</h2>
      <p className="text-gray-700 mb-6">{current.description}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div 
          className="bg-blue-50 rounded-lg p-4 border border-blue-100 hover:border-blue-200 hover:shadow-md transition-all duration-300"
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
                className="text-sm text-gray-700 flex items-start hover-list-item rounded-md px-1"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
              >
                <span className="text-green-500 mr-2 flex-shrink-0">●</span>
                {capability}
              </motion.li>
            ))}
          </ul>
        </motion.div>
        
        <motion.div 
          className="bg-blue-50 rounded-lg p-4 border border-blue-100 hover:border-blue-200 hover:shadow-md transition-all duration-300"
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
                className="text-sm text-gray-700 flex items-start hover-list-item rounded-md px-1"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
              >
                <span className="text-blue-500 mr-2 flex-shrink-0">●</span>
                {capability}
              </motion.li>
            ))}
          </ul>
        </motion.div>
        
        <motion.div 
          className="bg-blue-50 rounded-lg p-4 border border-blue-100 hover:border-blue-200 hover:shadow-md transition-all duration-300"
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
                className="text-sm text-gray-700 flex items-start hover-list-item rounded-md px-1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + (index * 0.1) }}
              >
                <span className="text-purple-500 mr-2 flex-shrink-0">●</span>
                {comm}
              </motion.li>
            ))}
          </ul>
        </motion.div>
        
        <motion.div 
          className="bg-blue-50 rounded-lg p-4 border border-blue-100 hover:border-blue-200 hover:shadow-md transition-all duration-300"
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
                className="text-sm text-gray-700 flex items-start hover-list-item rounded-md px-1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + (index * 0.1) }}
              >
                <span className="text-orange-500 mr-2 flex-shrink-0">●</span>
                {example}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
      
      {/* Academic references section */}
      <motion.div
        className="mt-6 bg-blue-50/70 rounded-lg p-4 border border-blue-100 hover:border-blue-200 hover:shadow-md transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.6 }}
      >
        <h3 className="font-semibold text-blue-700 mb-3 flex items-center">
          <BookOpenCheck className="w-5 h-5 mr-2" />
          Academic References
        </h3>
        <ul className="space-y-2 text-sm">
          {current.references.map((reference, index) => (
            <motion.li 
              key={index} 
              className="text-gray-700 pl-5 pr-2 py-1 hover-list-item rounded-md relative"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.7 + (index * 0.1) }}
            >
              <span className="absolute left-1 top-2 text-blue-500 text-xs">[{index + 1}]</span>
              {reference}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default StageDetail;
