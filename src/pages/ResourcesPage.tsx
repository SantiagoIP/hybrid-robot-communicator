import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, FileText, Video, Download, ExternalLink } from 'lucide-react';

type ResourceItem = {
  title: string;
  author: string;
  year: string;
  link: string;
};

type ResourceCategory = {
  category: string;
  icon: React.ReactNode;
  items: ResourceItem[];
};

const ResourcesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const resources: ResourceCategory[] = [
    {
      category: 'Foundational papers',
      icon: <FileText className="w-5 h-5" />,
      items: [
        {
          title: 'Process-oriented Task Assignment for Assembly Processes with Human-Robot Interaction',
          author: 'Müller, R., Vette, M., & Mailahn, O.',
          year: '2016',
          link: 'https://doi.org/10.1016/j.procir.2016.02.080',
        },
        {
          title: 'Human–Robot Collaboration: A Survey',
          author: 'Bauer, A., Wollherr, D., & Buss, M.',
          year: '2008',
          link: 'https://doi.org/10.1142/S0219843608001303',
        },
        {
          title: 'Human-Robot Interaction: A Survey',
          author: 'Goodrich, M. A., & Schultz, A. C.',
          year: '2007',
          link: 'https://doi.org/10.1561/1100000005',
        },
      ],
    },
    {
      category: 'Refinements of the taxonomy',
      icon: <FileText className="w-5 h-5" />,
      items: [
        {
          title: 'A new strategy for ensuring human safety during various levels of interaction with industrial robots',
          author: 'Bdiwi, M., Pfeifer, M., & Sterzing, A.',
          year: '2017',
          link: 'https://doi.org/10.1016/j.cirp.2017.04.009',
        },
        {
          title: 'Foundation for a classification of collaboration levels for human-robot cooperation in manufacturing',
          author: 'Kolbeinsson, A., Lagerstedt, E., & Lindblom, J.',
          year: '2019',
          link: 'https://doi.org/10.1080/21693277.2019.1645628',
        },
        {
          title: 'Symbiotic Human-Robot Collaborative Assembly',
          author: 'Wang, L., Liu, S., Liu, H., & Wang, X. V.',
          year: '2020',
          link: 'https://doi.org/10.1016/j.cirp.2020.03.008',
        },
      ],
    },
    {
      category: 'Co-evolution & Industry 5.0 (recent)',
      icon: <BookOpen className="w-5 h-5" />,
      items: [
        {
          title: 'Human–robot collaboration and machine learning: A systematic review of recent research',
          author: 'Semeraro, F., Griffiths, A., & Cangelosi, A.',
          year: '2023',
          link: 'https://doi.org/10.1016/j.rcim.2022.102432',
        },
        {
          title: 'Reviewing human-robot collaboration in manufacturing: Opportunities and challenges in the context of Industry 5.0',
          author: 'Pedersen, M. R., et al.',
          year: '2024',
          link: 'https://doi.org/10.1016/j.rcim.2024.102861',
        },
        {
          title: 'Human–AI coevolution',
          author: 'Pedreschi, D., Pappalardo, L., et al.',
          year: '2024',
          link: 'https://doi.org/10.1016/j.artint.2024.104244',
        },
        {
          title: 'Mutual human–robot understanding for a robot-enhanced society: shared embodied cognition',
          author: 'Frontiers in Artificial Intelligence',
          year: '2025',
          link: 'https://doi.org/10.3389/frai.2025.1608014',
        },
      ],
    },
    {
      category: 'Video & talks',
      icon: <Video className="w-5 h-5" />,
      items: [
        {
          title: 'The Future of Human and Robot Interaction (Davos / Webb Interview)',
          author: 'Admoni, H.',
          year: '2020',
          link: 'https://www.youtube.com/watch?v=2uRQXFF9VI8',
        },
      ],
    },
    {
      category: 'This project',
      icon: <Download className="w-5 h-5" />,
      items: [
        {
          title: 'Managing strategic-level human-machine teams in the agribusiness sector (full thesis PDF)',
          author: 'Pavon, S. I. — KEDGE Business School (supervisor: O. Dupouët)',
          year: '2023',
          link: '/hybrid-robot-communicator/thesis.pdf',
        },
        {
          title: 'Source code for this site',
          author: 'GitHub repository',
          year: 'ongoing',
          link: 'https://github.com/SantiagoIP/hybrid-robot-communicator',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
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
              Curated, hyperlinked literature behind the cell-to-co-evolution model.
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
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mr-3">
                    {category.icon}
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">{category.category}</h2>
                </div>

                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => {
                    const isExternal = item.link.startsWith('http');
                    return (
                      <motion.a
                        key={item.title}
                        href={item.link}
                        target={isExternal ? '_blank' : undefined}
                        rel={isExternal ? 'noopener noreferrer' : undefined}
                        className="group block border border-gray-100 rounded-lg p-4 bg-white/70 hover:bg-white hover:border-blue-200 transition-colors"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 + (categoryIndex * 0.1) + (itemIndex * 0.05) }}
                      >
                        <div className="flex justify-between items-start gap-3">
                          <div className="min-w-0">
                            <h3 className="font-semibold text-gray-800 group-hover:text-primary transition-colors">
                              {item.title}
                            </h3>
                            <p className="text-sm text-gray-600 mt-1">
                              {item.author} ({item.year})
                            </p>
                          </div>
                          <ExternalLink
                            className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors mt-1 flex-shrink-0"
                            aria-hidden="true"
                          />
                        </div>
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ResourcesPage;
