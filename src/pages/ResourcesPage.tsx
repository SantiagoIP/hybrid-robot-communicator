
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { ExternalLink, BookOpen, FileText, Video, Download, Mail } from 'lucide-react';

const ResourcesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const resources = [
    {
      category: 'Academic Papers',
      icon: <FileText className="w-5 h-5" />,
      items: [
        {
          title: 'A Classification for the Different Methodologies in which Humans and Robots Can Work Together',
          author: 'Müller et al.',
          year: '2016',
          link: '#'
        },
        {
          title: 'Human-Robot Collaboration: A Literature Review and Augmented Reality Approach in Design',
          author: 'Green et al.',
          year: '2008',
          link: '#'
        },
        {
          title: 'Human-Robot Interaction: A Survey',
          author: 'Goodrich & Schultz',
          year: '2007',
          link: '#'
        },
        {
          title: 'Human-Robot Collaboration in Industrial Environments',
          author: 'Michalos et al.',
          year: '2010',
          link: '#'
        }
      ]
    },
    {
      category: 'Books',
      icon: <BookOpen className="w-5 h-5" />,
      items: [
        {
          title: 'Human-Robot Interaction: An Introduction',
          author: 'Christoph Bartneck et al.',
          year: '2020',
          link: '#'
        },
        {
          title: 'The Future of Human-Robot Collaboration',
          author: 'Julie Shah',
          year: '2018',
          link: '#'
        },
        {
          title: 'The Collaborative Robot: A Study in Human-Machine Teaming',
          author: 'Emily Rogers',
          year: '2019',
          link: '#'
        }
      ]
    },
    {
      category: 'Video Lectures',
      icon: <Video className="w-5 h-5" />,
      items: [
        {
          title: 'Human-Robot Collaboration: Present and Future',
          author: 'MIT OpenCourseWare',
          year: '2021',
          link: '#'
        },
        {
          title: 'The Evolution of Collaborative Robotics',
          author: 'Stanford Engineering',
          year: '2020',
          link: '#'
        },
        {
          title: 'Safety in Human-Robot Collaborative Environments',
          author: 'Robotics Online',
          year: '2022',
          link: '#'
        }
      ]
    },
    {
      category: 'Case Studies',
      icon: <Download className="w-5 h-5" />,
      items: [
        {
          title: 'Implementing Collaborative Robots in Automotive Manufacturing',
          author: 'BMW Group',
          year: '2019',
          link: '#'
        },
        {
          title: 'Human-Robot Teams in Healthcare Settings',
          author: 'Mayo Clinic',
          year: '2021',
          link: '#'
        },
        {
          title: 'Warehouse Automation: Collaborative Picking Systems',
          author: 'Amazon Robotics',
          year: '2020',
          link: '#'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <NavBar />
      
      <motion.div
        className="pt-24 pb-12 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto max-w-5xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Resources
            </h1>
            <p className="text-xl text-gray-600">
              Explore additional materials on human-robot collaboration.
            </p>
          </motion.div>

          <div className="space-y-8">
            {resources.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                className="glass-card rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + (categoryIndex * 0.1) }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    {category.icon}
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">{category.category}</h2>
                </div>
                
                <div className="space-y-4 pl-13">
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.title}
                      className="border border-gray-100 rounded-lg p-4 bg-white/70 hover:bg-white transition-colors"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 + (categoryIndex * 0.1) + (itemIndex * 0.05) }}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-gray-800">{item.title}</h3>
                          <p className="text-sm text-gray-600">{item.author} ({item.year})</p>
                        </div>
                        <a 
                          href={item.link} 
                          className="text-blue-600 hover:text-blue-800 transition-colors flex items-center text-sm"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="mr-1">View</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="glass-card rounded-xl p-6 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-xl font-bold text-gray-800 mb-4">Contact the author</h2>
            <p className="text-gray-700 mb-4">
              Hi I'm Santiago Pavon, and I'm a curious learner on HRI, robotics and AI. Feel free to contact me if you have any questions, ideas or comments over what you have seen on the page.
            </p>
            <a 
              href="mailto:santiagopavon10@icloud.com" 
              className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact
            </a>
          </motion.div>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default ResourcesPage;
