import React from 'react';
import { motion } from 'framer-motion';
import StageExtension, {
  type StageExtensionData,
} from '@/components/StageExtension';

type StageDetailProps = {
  stage: string;
  isActive: boolean;
};

type StageData = {
  title: string;
  description: string;
  humanCapabilities: string[];
  robotCapabilities: string[];
  communication: string[];
  examples: string[];
  extension: StageExtensionData;
};

const StageDetail: React.FC<StageDetailProps> = ({ stage, isActive }) => {
  if (!isActive) return null;

  const stageData: Record<string, StageData> = {
    cell: {
      title: 'Cell (Isolation)',
      description:
        'In this initial stage, robots and humans operate in completely separate spaces. The robot works in isolation, typically in a confined or restricted area, while humans remain outside this space. There is no direct interaction between humans and robots.',
      humanCapabilities: [
        'Complete control over robot programming',
        'Monitoring from a safe distance',
        'Manual intervention when robot is stopped',
      ],
      robotCapabilities: [
        'Repetitive tasks execution',
        'Operation in dangerous environments',
        'High precision in controlled settings',
      ],
      communication: [
        'One-way programming instructions',
        'No real-time feedback loop',
        'Safety barriers prevent physical interaction',
      ],
      examples: [
        'Traditional industrial robot cells with safety cages',
        'Automated manufacturing lines',
        'Hazardous material handling robots',
      ],
      extension: {
        analogy: {
          summary:
            'Think of a CNC machining cell on the shop floor: the robot runs inside a fenced enclosure, the operator sets up the program, hits start, and only opens the gate once the machine is fully stopped.',
          feels:
            'The operator describes the robot as "the equipment", not as a teammate. Their day is built around set-up, programming and supervision, with most of the time spent outside the cell.',
        },
        ethics: [
          {
            theme: 'Responsibility',
            question:
              'If the robot damages a part inside the cage, who owns the failure — the programmer, the operator or the supplier?',
          },
          {
            theme: 'Trust',
            question:
              'How do we know the safety interlocks actually work, and how often are they tested?',
          },
          {
            theme: 'Communication',
            question:
              'When the cell stops, do operators get a clear reason or just a flashing light?',
          },
          {
            theme: 'Responsibility',
            question:
              'Are workers trained to do anything beyond pressing reset, or is dependency on a single specialist baked in?',
          },
        ],
        checklist: [
          'Document every safety interlock and the test cadence for each one.',
          'Define a single source of truth for fault codes (and make it readable in plain language).',
          'Cross-train at least two people per cell so knowledge is not bottlenecked.',
          'Record cycle-time and downtime baselines now — you will need them to justify moving to the next stage.',
        ],
      },
    },
    coexistence: {
      title: 'Coexistence',
      description:
        'In the coexistence stage, humans and robots share the same environment but work independently with minimal interaction. Safety measures ensure they can operate in proximity without endangering humans.',
      humanCapabilities: [
        'Working in the same general area as robots',
        'Performing separate tasks alongside robots',
        'Monitoring robot performance',
      ],
      robotCapabilities: [
        'Basic awareness of human presence',
        'Safety-limited operation',
        'Independent task execution',
      ],
      communication: [
        'Passive safety systems',
        'Limited sensor-based awareness',
        'Minimal direct communication',
      ],
      examples: [
        'Warehouse robots navigating around human workers',
        'Cleaning robots operating in office spaces',
        'Manufacturing floors with designated robot work areas',
      ],
      extension: {
        analogy: {
          summary:
            'A warehouse picker and an autonomous mobile robot share the same aisle. The picker walks their route, the AMR rolls its route, and both rely on sensors and floor markings to stay out of each other\'s way.',
          feels:
            'Workers learn the robot\'s patterns the way they learn a new colleague\'s habits. The aisle layout, the lighting and the shift schedule start to be drawn around the robot as much as around the people.',
        },
        ethics: [
          {
            theme: 'Trust',
            question:
              'What happens to trust the first time a sensor misses a person and the robot has to slow down hard?',
          },
          {
            theme: 'Communication',
            question:
              'Do workers have a way to tell the robot "I am here" beyond standing in front of a sensor?',
          },
          {
            theme: 'Responsibility',
            question:
              'When productivity drops because the robot keeps yielding to people, whose KPI takes the hit?',
          },
          {
            theme: 'Autonomy',
            question:
              'Are workers allowed to override the robot, or only escalate to a supervisor?',
          },
        ],
        checklist: [
          'Map the shared zones and publish the rules-of-the-road in writing.',
          'Set up a quick "near-miss" log so close calls become learning data, not blame.',
          'Run a dry-run shift with the robot in slow mode before going live.',
          'Agree on a single visual signal (light, colour, sound) that means "robot is about to move".',
        ],
      },
    },
    synchronised: {
      title: 'Synchronised',
      description:
        'In the synchronisation stage, humans and robots share the same workspace but work at different times. Their tasks are coordinated in sequence, with each waiting for the other to complete their work before entering the shared space.',
      humanCapabilities: [
        'Accessing robot workspace when robots are inactive',
        'Setting up materials for robot processing',
        'Performing quality checks after robot tasks',
      ],
      robotCapabilities: [
        'Time-scheduled operation',
        'Task completion notification',
        'Workspace preparation for human entry',
      ],
      communication: [
        'Handover protocols',
        'Status signals indicating workspace availability',
        'Task completion notifications',
      ],
      examples: [
        'Machine tending where humans load/unload between cycles',
        'Sequential assembly operations',
        'Shared workstations with scheduled access',
      ],
      extension: {
        analogy: {
          summary:
            'A pick-and-place robot loads a blank onto a fixture, steps back, and the operator deburrs and inspects the part before the robot picks the next one. Two pairs of hands on the same workpiece, never at the same second.',
          feels:
            'The shift is built around the handover. The operator stops asking "what is the robot doing?" and starts asking "is my part where I expect it, in the orientation I expect it, at the second I expect it?".',
        },
        ethics: [
          {
            theme: 'Communication',
            question:
              'Is the "ready" signal designed for the worker, or just for the system log?',
          },
          {
            theme: 'Responsibility',
            question:
              'If a defect is found at handover, who is expected to stop the line — the operator who spotted it or the supervisor?',
          },
          {
            theme: 'Trust',
            question:
              'How long does a worker have to wait for the robot before they assume something is wrong, and what should they do then?',
          },
          {
            theme: 'Autonomy',
            question:
              'Can the worker reorder their own tasks within the cycle, or is the schedule strictly imposed by the robot?',
          },
        ],
        checklist: [
          'Document the handover protocol on paper, not just in firmware.',
          'Define who is allowed to stop the line, and how, in fewer than three sentences.',
          'Measure idle time on both sides — humans waiting for robots and robots waiting for humans.',
          'Add a manual override that does not require a manager\'s key for the first 30 seconds.',
        ],
      },
    },
    cooperation: {
      title: 'Cooperation',
      description:
        'In cooperation, humans and robots work simultaneously in the same workspace, each focusing on their specific tasks. They operate in parallel with awareness of each other but without directly collaborating on the same subtask.',
      humanCapabilities: [
        'Working alongside robots without interruption',
        'Complementary task execution',
        'Adaptive workflow based on robot activity',
      ],
      robotCapabilities: [
        'Human-aware navigation and operation',
        'Advanced safety systems',
        'Complementary task execution',
      ],
      communication: [
        'Real-time position tracking',
        'Status updates between systems',
        'Spatial awareness and adjustment',
      ],
      examples: [
        'Assembly lines where robots handle heavy components while humans perform precise tasks',
        'Collaborative logistics where robots transport materials to human workstations',
        'Surgical settings where robots hold instruments while surgeons operate',
      ],
      extension: {
        analogy: {
          summary:
            'On a sub-assembly station, the cobot torques the heavy bracket while the operator clips in the wiring harness next to it. Two jobs, one product, the same square metre, at the same minute.',
          feels:
            'Workers start to anticipate the robot the way they anticipate a trusted line colleague: they know when it is about to reach in, when it is about to slow down, and they plan their own move around it.',
        },
        ethics: [
          {
            theme: 'Trust',
            question:
              'If the robot adapts its speed to the worker, does the worker know it is doing so, or does productivity quietly become a personal score?',
          },
          {
            theme: 'Communication',
            question:
              'How does the robot signal intent before moving — and is that signal accessible to workers with hearing or vision differences?',
          },
          {
            theme: 'Responsibility',
            question:
              'When a parallel task fails, can we tell from the logs whether the failure was the human\'s, the robot\'s, or the way the work was split?',
          },
          {
            theme: 'Autonomy',
            question:
              'Are workers free to refuse a pace they consider unsafe, or is the speed dictated by the robot\'s optimum?',
          },
        ],
        checklist: [
          'Instrument both human and robot cycle times, but never use them as individual performance scores.',
          'Define an explicit "intent signal" the robot must give before any motion above a threshold.',
          'Run a fortnightly retro with the floor team, not just engineers, to refine the split of tasks.',
          'Build accessibility into the signals from day one (light + sound + vibration, not one of them).',
        ],
      },
    },
    collaboration: {
      title: 'Collaboration',
      description:
        'The collaboration stage involves humans and robots working together on the same task simultaneously. Their actions directly affect each other, requiring sophisticated communication and coordination systems.',
      humanCapabilities: [
        'Direct physical interaction with robots',
        'Real-time guidance and adaptation',
        'Intuitive control through gestures or voice',
      ],
      robotCapabilities: [
        'Force/torque sensing for safe contact',
        'Adaptive motion based on human actions',
        'Context awareness and prediction',
      ],
      communication: [
        'Bidirectional real-time feedback',
        'Haptic feedback',
        'Multi-modal communication (visual, auditory, tactile)',
      ],
      examples: [
        'Collaborative assembly where human and robot manipulate the same part',
        'Rehabilitation robots that respond to patient movements',
        'Teaching by demonstration in manufacturing',
      ],
      extension: {
        analogy: {
          summary:
            'A surgeon and a robotic arm hold the same instrument during a procedure: the surgeon leads, the arm dampens tremor and resists unsafe motion, and the result is something neither could deliver alone. The same logic applies to a technician hand-guiding a cobot through a delicate assembly.',
          feels:
            'The worker stops speaking about the robot in the third person. They say "we are holding it", "we are about to cut", and they expect the system to push back if the move is wrong.',
        },
        ethics: [
          {
            theme: 'Trust',
            question:
              'Can the worker stop the robot mid-motion with a gesture, or only through a button they have to reach for?',
          },
          {
            theme: 'Responsibility',
            question:
              'If the joint task injures someone, where does the legal line sit — operator, employer or robot vendor?',
          },
          {
            theme: 'Communication',
            question:
              'When the robot disagrees with a worker\'s correction, how does it surface that disagreement?',
          },
          {
            theme: 'Autonomy',
            question:
              'How much physical force is the worker comfortable having applied near them, and who set that threshold?',
          },
        ],
        checklist: [
          'Co-design the gestures and signals with the workers who will use them, not just the integrators.',
          'Tune force and speed limits per-worker if the system allows it, and revisit them quarterly.',
          'Have a written "pair contract" describing what each side is allowed to do without asking.',
          'Provide an immediate, no-blame channel to report a moment that felt unsafe — even if nothing went wrong.',
        ],
      },
    },
    coevolution: {
      title: 'Co-evolution',
      description:
        "Co-evolution is the author's own extension of the Müller (2016) taxonomy, originally introduced in Pavon (2023, KEDGE BS) as a managerial approach for hybrid human–machine teams in agribusiness. At this stage, humans and robots form a single adaptive system situated within the Industry 5.0 paradigm: robots act with greater autonomy while remaining tightly coupled to humans through bidirectional learning. Responsibility, error attribution and trust become system-level properties rather than individual ones, and robots progressively emulate human preferences and communication styles to strengthen team cohesion. Since the thesis was defended, the surrounding literature on symbiotic HRC (Wang 2020), human–AI coevolution (Pedreschi et al. 2024) and shared embodied cognition (Frontiers in AI 2025) has converged on similar ideas.",
      humanCapabilities: [
        'Building trust through consistent interaction',
        'Sharing responsibility for system-wide outcomes',
        'Guiding robot learning and adaptation',
        'Contributing to collective knowledge building',
      ],
      robotCapabilities: [
        'Operating with increased autonomy and freedom',
        'Learning and evolving from work experiences',
        'Emulating human preferences and work styles',
        'Contributing to system-wide performance tracking',
      ],
      communication: [
        'Deep learning-based interaction patterns',
        'Adaptive communication styles matching humans',
        'Shared responsibility frameworks',
        'Continuous feedback and learning loops',
      ],
      examples: [
        'Self-improving manufacturing systems',
        'Adaptive service robots in healthcare',
        'Learning-enabled collaborative research',
        'Trust-based human-robot partnerships',
      ],
      extension: {
        analogy: {
          summary:
            'A foreman and a senior operator who have run the line together for years: the operator no longer waits for instructions, the foreman no longer second-guesses the operator\'s choices, and the line\'s performance numbers belong to both of them. Now picture the same relationship between an agronomist and a fleet of field robots that has worked the same plot for several seasons.',
          feels:
            'The system stops being "the machine over there" and starts showing up in plural in the way the team talks: "we recalibrated", "we missed the window", "we hit target". Responsibility, learning and credit are shared with the robot rather than parked next to it.',
        },
        ethics: [
          {
            theme: 'Responsibility',
            question:
              'If the system learns from a worker\'s style, who owns the resulting model — the worker, the employer, or the vendor?',
          },
          {
            theme: 'Trust',
            question:
              'How is consent renewed when the robot\'s behaviour drifts after an update or new training data?',
          },
          {
            theme: 'Communication',
            question:
              'When errors emerge from the joint learning loop, can we still attribute them, or have we accepted a "system-level" verdict?',
          },
          {
            theme: 'Autonomy',
            question:
              'What rights do workers have to opt out of being learned from, without being moved off the team?',
          },
          {
            theme: 'Responsibility',
            question:
              'In the agribusiness context, who carries the climate or biodiversity risk of an autonomously evolving farm system?',
          },
        ],
        checklist: [
          'Treat the joint model as a shared asset: govern it like jointly-authored IP, not a piece of software.',
          'Re-collect informed consent at every behavioural update that crosses a defined threshold.',
          'Run an "explainability shift" once a quarter where the system has to justify its choices to the team.',
          'Define what "stage-6" success looks like in human terms — well-being, learning, voice — not only throughput.',
          'Pair each AI update with a sustainability review (energy, materials, second-order effects).',
        ],
      },
    },
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
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
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
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
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
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
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
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
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
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
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
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
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
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
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
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
              >
                <span className="text-orange-500 mr-2">●</span>
                {example}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      <StageExtension stage={stage} {...current.extension} />
    </motion.div>
  );
};

export default StageDetail;
