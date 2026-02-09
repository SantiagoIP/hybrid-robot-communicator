import React from 'react';
import { motion } from 'framer-motion';

const References = () => {
  const references = [
    {
      id: 1,
      title: "A Classification for the Different Methodologies in which Humans and Robots Can Work Together",
      authors: "Muller et al.",
      year: 2016,
      publication: "IEEE/RSJ International Conference on Intelligent Robots and Systems"
    },
    {
      id: 2,
      title: "Safety, Security, and Rescue Robotics",
      authors: "Murphy et al.",
      year: 2014,
      publication: "IEEE Robotics & Automation Magazine"
    },
    {
      id: 3,
      title: "Human-Robot Collaboration: A Literature Review and Augmented Reality Approach in Design",
      authors: "Green et al.",
      year: 2008,
      publication: "International Journal of Advanced Robotic Systems"
    },
    {
      id: 4,
      title: "Human-Robot Interaction: A Survey",
      authors: "Goodrich & Schultz",
      year: 2007,
      publication: "Foundations and Trends in Human-Computer Interaction"
    },
    {
      id: 5,
      title: "Human-Robot Collaboration in Industrial Environments",
      authors: "Michalos et al.",
      year: 2010,
      publication: "International Journal of Advanced Manufacturing Technology"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <h2 className="text-2xl font-bold mb-5 text-gray-800">References & Further Reading</h2>
      <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100 overflow-hidden">
        <ul className="divide-y divide-gray-100">
          {references.map((ref, index) => (
            <motion.li
              key={ref.id}
              className="px-6 py-4 hover:bg-blue-50/30 transition-colors"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 + index * 0.06 }}
            >
              <p className="font-medium text-gray-800 text-sm leading-snug mb-1">{ref.title}</p>
              <p className="text-gray-500 text-xs">
                {ref.authors} ({ref.year}) &middot; <em>{ref.publication}</em>
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
};

export default References;
