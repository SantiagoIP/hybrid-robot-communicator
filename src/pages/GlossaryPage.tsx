import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Search, X } from 'lucide-react';

type GlossaryEntry = {
  term: string;
  acronym?: string;
  definition: string;
  related?: string[];
};

const GLOSSARY: GlossaryEntry[] = [
  {
    term: 'AMR',
    acronym: 'Autonomous Mobile Robot',
    definition:
      'A wheeled robot that navigates a shared space (warehouse aisle, factory floor) on its own, using sensors and a map rather than fixed tracks. Common at the coexistence and cooperation stages.',
    related: ['Cobot', 'Coexistence', 'AGV'],
  },
  {
    term: 'AGV',
    acronym: 'Automated Guided Vehicle',
    definition:
      'An older cousin of the AMR: follows fixed routes (magnetic tape, painted lines, embedded wires) rather than self-navigating. Typical of cell or coexistence stages.',
    related: ['AMR', 'Coexistence'],
  },
  {
    term: 'Agribusiness',
    definition:
      'The full chain of production, processing, distribution and management of agricultural products. The applied focus of the Pavon (2023) thesis: where the next generation of cobots and field robots is most likely to land first.',
    related: ['Cobot', 'Co-evolution'],
  },
  {
    term: 'Cell',
    definition:
      'Stage 1 of the model. The robot operates inside a fenced enclosure with safety interlocks; humans only enter when the system is fully stopped. The classic industrial robot setup.',
    related: ['Coexistence', 'HRC'],
  },
  {
    term: 'Cobot',
    acronym: 'Collaborative robot',
    definition:
      'A robot designed to work safely in physical proximity to humans without a cage — usually with force/torque sensing, low payload and rounded geometry. Enables cooperation, collaboration and co-evolution stages.',
    related: ['Collaboration', 'Force/torque sensing', 'HRC'],
  },
  {
    term: 'Coexistence',
    definition:
      'Stage 2. Humans and robots share the same physical space but work on independent tasks, kept apart by sensors, lights and floor markings rather than fences.',
    related: ['Cell', 'Synchronised'],
  },
  {
    term: 'Co-evolution',
    definition:
      "Stage 6 of the model, introduced in Pavon (2023). Humans and robots form a single adaptive system: bidirectional learning, shared responsibility, system-level trust. Sits inside the European Commission's Industry 5.0 frame.",
    related: ['Industry 5.0', 'Symbiotic HRC', 'Human–AI coevolution'],
  },
  {
    term: 'Collaboration',
    definition:
      'Stage 5. Humans and robots work jointly on the same task at the same moment — surgical arm + surgeon, hand-guided cobot assembly. Requires force/torque sensing and bidirectional intent signalling.',
    related: ['Cooperation', 'Co-evolution', 'Cobot'],
  },
  {
    term: 'Cooperation',
    definition:
      'Stage 4. Humans and robots work in parallel on the same workpiece or product, but on different sub-tasks (e.g. cobot torques the bracket while the operator clips the wiring). Same square metre, same minute.',
    related: ['Collaboration', 'Synchronised'],
  },
  {
    term: 'Cycle time',
    definition:
      'The time it takes to complete one full repetition of a task on a line. The first KPI to baseline before introducing a robot: it lets you measure the integration honestly.',
    related: ['Handover'],
  },
  {
    term: 'Embodied cognition',
    definition:
      "A view from cognitive science that thinking is shaped by the body's sensors and actions in the world. In HRC, 'shared embodied cognition' (Frontiers in AI 2025) is the idea that human and robot can build a joint understanding of the task through shared physical experience.",
    related: ['Co-evolution', 'Symbiotic HRC'],
  },
  {
    term: 'Explainability',
    definition:
      'The capacity of an AI or robot system to justify its decisions in terms a human can act on (and contest). Becomes a hard requirement at the co-evolution stage where the robot starts initiating actions on its own.',
    related: ['Trust calibration', 'Co-evolution'],
  },
  {
    term: 'Force/torque sensing',
    definition:
      'A sensor on the robot wrist or joints that measures contact force and rotational pressure in real time. The technical enabler of safe physical contact and hand-guiding (collaboration stage).',
    related: ['Cobot', 'Collaboration'],
  },
  {
    term: 'Handover',
    definition:
      'The moment when work transfers from robot to human or back. The defining ritual of the synchronised stage — the part is in the right orientation, at the right second, with the right signal.',
    related: ['Synchronised'],
  },
  {
    term: 'HRC',
    acronym: 'Human–Robot Collaboration',
    definition:
      'The applied subfield of robotics that studies how humans and robots share tasks, space and goals on the shop floor. The Müller (2016) taxonomy lives here.',
    related: ['HRI', 'Cobot'],
  },
  {
    term: 'HRI',
    acronym: 'Human–Robot Interaction',
    definition:
      'The broader research field studying how humans interact with any robot — industrial, social, service or domestic. HRC is its industrial subset.',
    related: ['HRC'],
  },
  {
    term: 'Human-in-the-loop',
    definition:
      'A design pattern where a human can interrupt, correct or approve a robot/AI decision at runtime, rather than only auditing it after the fact. Becomes essential from the cooperation stage onward.',
    related: ['Trust calibration', 'Explainability'],
  },
  {
    term: 'Human–AI coevolution',
    definition:
      'A research program (Pedreschi et al. 2024) framing the human–AI relationship as a perpetual loop in which each side reshapes the other through repeated interaction. The scholarly anchor for the co-evolution stage on this site.',
    related: ['Co-evolution', 'Symbiotic HRC'],
  },
  {
    term: 'Industry 4.0',
    definition:
      'The cyber-physical phase of industry: connected machines, IoT, big data, smart factories. Optimises productivity but is largely silent on the worker.',
    related: ['Industry 5.0'],
  },
  {
    term: 'Industry 5.0',
    definition:
      "European Commission policy frame (Breque, De Nul & Petridis, 2021) anchored on three values: human-centric, sustainable, resilient. Reframes industry as serving worker wellbeing and the planet, not only output. The macro home of the co-evolution stage.",
    related: ['Co-evolution', 'Industry 4.0'],
  },
  {
    term: 'LOA',
    acronym: 'Levels of Automation',
    definition:
      'A scale describing how much of a task is done by the human vs. by the machine, from full manual control to full autonomous operation. Different LOAs map onto different stages of the HRC model.',
    related: ['Human-in-the-loop'],
  },
  {
    term: 'Müller (2016) taxonomy',
    definition:
      'The five-stage classification of human–robot interaction in assembly (cell, coexistence, synchronised, cooperation, collaboration) that the first five stages of this site are built on. Refined by Bdiwi (2017) and Benos, Bechar & Bochtis (2020).',
    related: ['HRC', 'Co-evolution'],
  },
  {
    term: 'Symbiotic HRC',
    definition:
      'Wang et al. (2020) term for an HRC mode in which humans and robots adapt to each other continuously, sharing information and goals. Sits between collaboration and the co-evolution stage on this model.',
    related: ['Co-evolution', 'HRC'],
  },
  {
    term: 'Synchronised',
    definition:
      'Stage 3 of the model. Humans and robots share the same workspace but work at different moments, choreographed around a clean handover.',
    related: ['Cell', 'Cooperation', 'Handover'],
  },
  {
    term: 'Trust calibration',
    definition:
      'The active management of how much a worker trusts the robot — neither too little (under-use, frustration) nor too much (complacency, blind reliance). One of the two core variables in the Pavon (2023) framing.',
    related: ['Explainability', 'Human-in-the-loop'],
  },
];

const GlossaryPage: React.FC = () => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const grouped = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filtered = q
      ? GLOSSARY.filter((entry) => {
          return (
            entry.term.toLowerCase().includes(q) ||
            (entry.acronym && entry.acronym.toLowerCase().includes(q)) ||
            entry.definition.toLowerCase().includes(q)
          );
        })
      : GLOSSARY;

    const sorted = [...filtered].sort((a, b) =>
      a.term.localeCompare(b.term, 'en', { sensitivity: 'base' })
    );

    const map = new Map<string, GlossaryEntry[]>();
    for (const entry of sorted) {
      const letter = entry.term[0].toUpperCase();
      const list = map.get(letter) ?? [];
      list.push(entry);
      map.set(letter, list);
    }
    return Array.from(map.entries());
  }, [query]);

  const totalShown = grouped.reduce((acc, [, items]) => acc + items.length, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <motion.div
        className="pt-24 pb-12 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto max-w-4xl">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Glossary
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              The recurring terms used across the model — robotics, HRC, Industry 5.0 and the management vocabulary that goes with them — defined in plain language.
            </p>
          </motion.div>

          <motion.div
            className="mb-8 sticky top-20 z-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                aria-hidden="true"
              />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search the glossary…"
                aria-label="Search the glossary"
                className="w-full pl-10 pr-10 py-3 bg-white/95 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              {totalShown} of {GLOSSARY.length} term{GLOSSARY.length === 1 ? '' : 's'} shown
            </p>
          </motion.div>

          {grouped.length === 0 ? (
            <motion.p
              className="text-center text-gray-500 py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              No terms match &ldquo;{query}&rdquo;. Try a shorter query or clear the search.
            </motion.p>
          ) : (
            <div className="space-y-8">
              {grouped.map(([letter, entries]) => (
                <motion.section
                  key={letter}
                  className="glass-card rounded-xl p-6"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  aria-labelledby={`glossary-section-${letter}`}
                >
                  <h2
                    id={`glossary-section-${letter}`}
                    className="text-2xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2"
                  >
                    {letter}
                  </h2>
                  <dl className="space-y-5">
                    {entries.map((entry) => (
                      <div key={entry.term} id={`term-${slug(entry.term)}`}>
                        <dt className="font-semibold text-gray-900">
                          {entry.term}
                          {entry.acronym && (
                            <span className="ml-2 text-sm font-normal text-gray-500">
                              — {entry.acronym}
                            </span>
                          )}
                        </dt>
                        <dd className="text-sm text-gray-700 mt-1 leading-relaxed">
                          {entry.definition}
                        </dd>
                        {entry.related && entry.related.length > 0 && (
                          <p className="text-xs text-gray-500 mt-2">
                            <span className="font-medium">See also:</span>{' '}
                            {entry.related.join(', ')}
                          </p>
                        )}
                      </div>
                    ))}
                  </dl>
                </motion.section>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

function slug(term: string): string {
  return term
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export default GlossaryPage;
