
import React from 'react';
import { motion } from 'framer-motion';

const References = () => {
  const references = [
    {
      id: 1,
      title: "A Classification for the Different Methodologies in which Humans and Robots Can Work Together",
      authors: "Müller et al.",
      year: 2016,
      publication: "IEEE/RSJ International Conference on Intelligent Robots and Systems",
      url: "#"
    },
    {
      id: 2,
      title: "Safety, Security, and Rescue Robotics",
      authors: "Murphy et al.",
      year: 2014,
      publication: "IEEE Robotics & Automation Magazine",
      url: "#"
    },
    {
      id: 3,
      title: "Human-Robot Collaboration: A Literature Review and Augmented Reality Approach in Design",
      authors: "Green et al.",
      year: 2008,
      publication: "International Journal of Advanced Robotic Systems",
      url: "#"
    },
    {
      id: 4,
      title: "Human-Robot Interaction: A Survey",
      authors: "Goodrich & Schultz",
      year: 2007,
      publication: "Foundations and Trends in Human-Computer Interaction",
      url: "#"
    },
    {
      id: 5,
      title: "Human-Robot Collaboration in Industrial Environments",
      authors: "Michalos et al.",
      year: 2010,
      publication: "International Journal of Advanced Manufacturing Technology",
      url: "#"
    }
  ];

  return (
    <motion.section
      className="py-12 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">References & Further Reading</h2>
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md">
          <ul className="divide-y divide-gray-200">
            {references.map((ref, index) => (
              <motion.li 
                key={ref.id} 
                className="py-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <p className="font-medium text-gray-800">{ref.title}</p>
                <p className="text-gray-600 text-sm">
                  {ref.authors} ({ref.year}). <em>{ref.publication}</em>
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default References;
