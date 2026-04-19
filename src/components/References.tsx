import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

type Reference = {
  id: number;
  title: string;
  authors: string;
  year: number;
  publication: string;
  url: string;
  note?: string;
};

const references: Reference[] = [
  {
    id: 1,
    title: 'Process-oriented Task Assignment for Assembly Processes with Human-Robot Interaction',
    authors: 'Müller, R., Vette, M., & Mailahn, O.',
    year: 2016,
    publication: 'Procedia CIRP, 44, 210–215',
    url: 'https://doi.org/10.1016/j.procir.2016.02.080',
    note: 'Foundational five-stage taxonomy (cell → coexistence → synchronised → cooperation → collaboration).',
  },
  {
    id: 2,
    title: 'Human–Robot Collaboration: A Survey',
    authors: 'Bauer, A., Wollherr, D., & Buss, M.',
    year: 2008,
    publication: 'International Journal of Humanoid Robotics, 5(1), 47–66',
    url: 'https://doi.org/10.1142/S0219843608001303',
  },
  {
    id: 3,
    title: 'A new strategy for ensuring human safety during various levels of interaction with industrial robots',
    authors: 'Bdiwi, M., Pfeifer, M., & Sterzing, A.',
    year: 2017,
    publication: 'CIRP Annals — Manufacturing Technology, 66(1), 453–456',
    url: 'https://doi.org/10.1016/j.cirp.2017.04.009',
    note: 'Adds safety levels to each interaction stage.',
  },
  {
    id: 4,
    title: 'Foundation for a classification of collaboration levels for human-robot cooperation in manufacturing',
    authors: 'Kolbeinsson, A., Lagerstedt, E., & Lindblom, J.',
    year: 2019,
    publication: 'Production & Manufacturing Research, 7(1), 448–471',
    url: 'https://doi.org/10.1080/21693277.2019.1645628',
    note: 'Direct extension of the Müller classification, clarifying cooperation vs. collaboration.',
  },
  {
    id: 5,
    title: 'Symbiotic Human-Robot Collaborative Assembly',
    authors: 'Wang, L., Liu, S., Liu, H., & Wang, X. V.',
    year: 2020,
    publication: 'CIRP Annals, 69(2), 701–726',
    url: 'https://doi.org/10.1016/j.cirp.2020.03.008',
    note: 'Bridges collaboration and co-evolution via the "symbiotic HRC" concept.',
  },
  {
    id: 6,
    title: 'Human–robot collaboration and machine learning: A systematic review of recent research',
    authors: 'Semeraro, F., Griffiths, A., & Cangelosi, A.',
    year: 2023,
    publication: 'Robotics and Computer-Integrated Manufacturing, 79, 102432',
    url: 'https://doi.org/10.1016/j.rcim.2022.102432',
    note: 'Backs the learning-driven mutual adaptation underlying the co-evolution stage.',
  },
  {
    id: 7,
    title: 'Reviewing human-robot collaboration in manufacturing: Opportunities and challenges in the context of Industry 5.0',
    authors: 'Pedersen, M. R., et al.',
    year: 2024,
    publication: 'Robotics and Computer-Integrated Manufacturing',
    url: 'https://doi.org/10.1016/j.rcim.2024.102861',
    note: 'Macro Industry 5.0 framing — human-centric, sustainable, resilient automation.',
  },
  {
    id: 8,
    title: 'Human–AI coevolution',
    authors: 'Pedreschi, D., Pappalardo, L., et al.',
    year: 2024,
    publication: 'Artificial Intelligence, 339, 104244',
    url: 'https://doi.org/10.1016/j.artint.2024.104244',
    note: 'Defines coevolution as a perpetual, iterative process between humans and learning systems — scholarly anchor for the term.',
  },
  {
    id: 9,
    title: 'Mutual human–robot understanding for a robot-enhanced society: shared embodied cognition',
    authors: 'Frontiers in Artificial Intelligence',
    year: 2025,
    publication: 'Frontiers in AI, 8, Article 1608014',
    url: 'https://doi.org/10.3389/frai.2025.1608014',
    note: 'Underwrites the "shared cognition" and trust-building dimensions of co-evolution.',
  },
  {
    id: 10,
    title: 'Human-Robot Interaction: A Survey',
    authors: 'Goodrich, M. A., & Schultz, A. C.',
    year: 2007,
    publication: 'Foundations and Trends in Human-Computer Interaction, 1(3), 203–275',
    url: 'https://doi.org/10.1561/1100000005',
  },
  {
    id: 11,
    title: 'Managing strategic-level human-machine teams in the agribusiness sector',
    authors: 'Pavon, S. I.',
    year: 2023,
    publication: 'MSc dissertation, KEDGE Business School (supervisor: O. Dupouët)',
    url: '/hybrid-robot-communicator/thesis.pdf',
    note: 'Origin of the "co-evolution approach" framing extended on this site.',
  },
];

const References = () => {
  return (
    <motion.section
      className="py-12 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-2 text-center text-gray-800">References & Further Reading</h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Foundational taxonomy and recent (2017–2025) literature consistent with the cell-to-co-evolution model.
        </p>
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md">
          <ol className="divide-y divide-gray-200">
            {references.map((ref, index) => (
              <motion.li
                key={ref.id}
                className="py-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.4) }}
              >
                <a
                  href={ref.url}
                  target={ref.url.startsWith('http') ? '_blank' : undefined}
                  rel={ref.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group inline-flex items-start gap-2 font-medium text-gray-800 hover:text-primary transition-colors"
                >
                  <span>{ref.title}</span>
                  <ExternalLink className="w-3.5 h-3.5 mt-1 opacity-0 group-hover:opacity-60 transition-opacity flex-shrink-0" aria-hidden="true" />
                </a>
                <p className="text-gray-600 text-sm mt-1">
                  {ref.authors} ({ref.year}). <em>{ref.publication}</em>
                </p>
                {ref.note && (
                  <p className="text-gray-500 text-xs mt-1 italic">{ref.note}</p>
                )}
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </motion.section>
  );
};

export default References;
