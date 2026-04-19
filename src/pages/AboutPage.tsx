import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, ExternalLink, BookOpen, Sparkles } from 'lucide-react';

const THESIS = {
  title: 'Managing strategic-level human-machine teams in the agribusiness sector',
  author: 'Santiago Ismael Pavon',
  institution: 'KEDGE Business School — MSc in International Business',
  supervisor: 'Olivier Dupouët',
  defended: '24 February 2023',
  pdfHref: '/hybrid-robot-communicator/thesis.pdf',
  /**
   * ORCID iD — leave as null for now. When you create one at https://orcid.org,
   * paste the 16-digit iD here (e.g. '0000-0002-1825-0097') and the badge will appear automatically.
   */
  orcid: null as string | null,
};

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              About This Project
            </h1>
            <p className="text-xl text-gray-600">
              Understanding the evolution of human-robot collaboration.
            </p>
          </motion.div>

          <motion.div
            className="glass-card rounded-xl p-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Project Overview</h2>
            <p className="text-gray-700 mb-6">
              This interactive visualization is the public communication layer for a master's thesis on hybrid human-machine teams in organisations. It extends the well-known industrial-HRC taxonomy of Müller, Vette &amp; Mailahn (Procedia CIRP, 2016) — cell, coexistence, synchronised, cooperation, collaboration — with a sixth stage, <em>co-evolution</em>, framed through a managerial lens.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-gray-800">Research Background</h3>
            <p className="text-gray-700 mb-6">
              The model synthesises the foundational HRC literature (Bauer 2008; Goodrich &amp; Schultz 2007), recent refinements of the taxonomy (Bdiwi 2017; Kolbeinsson 2019), and the emerging Industry 5.0 / human–AI coevolution discourse (Wang 2020; Semeraro 2023; Pedersen 2024; Pedreschi 2024; Frontiers in AI 2025). The aim is to make a research-grade model accessible to practitioners and managers thinking about how hybrid teams will reshape their organisations.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-gray-800">Methodology</h3>
            <p className="text-gray-700 mb-3">
              Each stage of integration is analysed in terms of:
            </p>
            <ul className="list-disc pl-6 mb-2 text-gray-700 space-y-2">
              <li>Spatial and temporal relationships between humans and robots</li>
              <li>Communication and coordination mechanisms</li>
              <li>Safety considerations and implementations</li>
              <li>Task allocation and workflow design</li>
              <li>Technical requirements for implementation</li>
            </ul>
          </motion.div>

          {/* Thesis context */}
          <motion.section
            className="glass-card rounded-xl p-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            aria-labelledby="thesis-context-heading"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center">
                <BookOpen className="w-5 h-5" aria-hidden="true" />
              </div>
              <h2 id="thesis-context-heading" className="text-2xl font-bold text-gray-800">
                Thesis context
              </h2>
            </div>

            <p className="text-gray-700 mb-6">
              This site is the visual companion to the master's thesis below. The thesis introduces the &quot;co-evolution approach&quot; as a managerial frame for trust and communication inside hybrid human-machine teams, with a focus on the agribusiness sector. The interactive page generalises that framing to all six stages of the model.
            </p>

            <dl className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-3 text-sm mb-6">
              <dt className="font-semibold text-gray-700">Title</dt>
              <dd className="sm:col-span-2 text-gray-800">{THESIS.title}</dd>

              <dt className="font-semibold text-gray-700">Author</dt>
              <dd className="sm:col-span-2 text-gray-800">{THESIS.author}</dd>

              <dt className="font-semibold text-gray-700">Institution</dt>
              <dd className="sm:col-span-2 text-gray-800">{THESIS.institution}</dd>

              <dt className="font-semibold text-gray-700">Supervisor</dt>
              <dd className="sm:col-span-2 text-gray-800">{THESIS.supervisor}</dd>

              <dt className="font-semibold text-gray-700">Defended</dt>
              <dd className="sm:col-span-2 text-gray-800">{THESIS.defended}</dd>

              {THESIS.orcid && (
                <>
                  <dt className="font-semibold text-gray-700">ORCID</dt>
                  <dd className="sm:col-span-2">
                    <a
                      href={`https://orcid.org/${THESIS.orcid}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:underline"
                    >
                      <span className="inline-block w-4 h-4 rounded-full bg-[#a6ce39] text-white text-[9px] font-bold leading-4 text-center" aria-hidden="true">iD</span>
                      {THESIS.orcid}
                    </a>
                  </dd>
                </>
              )}
            </dl>

            <details className="mb-6 bg-blue-50/50 rounded-lg p-4 border border-blue-100">
              <summary className="cursor-pointer font-medium text-gray-800 select-none">
                Abstract (excerpt)
              </summary>
              <p className="text-gray-700 text-sm mt-3 italic">
                As we step into the fourth industrial revolution, hybrid human-machine teams will progressively share the workplace at every level of the organisation, including strategic and managerial roles. This thesis investigates the constraints of managing such teams in the agribusiness sector, focusing on two core values — trust and communication — and on whether a co-evolution approach (versus an individualistic one) is more conducive to effective hybrid teams.
              </p>
            </details>

            <details className="mb-6 bg-gray-50 rounded-lg p-4 border border-gray-200">
              <summary className="cursor-pointer font-medium text-gray-800 select-none">
                BibTeX
              </summary>
              <pre className="text-xs mt-3 overflow-x-auto bg-white p-3 rounded border border-gray-200">
{`@mastersthesis{pavon2023hybrid,
  title  = {Managing strategic-level human-machine teams in the agribusiness sector},
  author = {Pavon, Santiago Ismael},
  school = {KEDGE Business School},
  year   = {2023},
  type   = {MSc dissertation, International Business},
  note   = {Supervisor: Olivier Dupou"et},
  url    = {https://santiagoip.github.io/hybrid-robot-communicator/thesis.pdf}
}`}
              </pre>
            </details>

            <div className="flex flex-wrap gap-3">
              <a
                href={THESIS.pdfHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
              >
                <FileText className="w-4 h-4" aria-hidden="true" />
                Read the thesis (PDF)
              </a>
              <a
                href="https://github.com/SantiagoIP/hybrid-robot-communicator"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-white text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
              >
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
                Source on GitHub
              </a>
            </div>
          </motion.section>

          {/* Industry 5.0 macro framing */}
          <motion.section
            className="glass-card rounded-xl p-8 mb-8 border-l-4 border-l-purple-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            aria-labelledby="industry5-heading"
          >
            <div className="flex items-center gap-3 mb-3">
              <Sparkles className="w-5 h-5 text-purple-500" aria-hidden="true" />
              <h2 id="industry5-heading" className="text-xl font-bold text-gray-800">
                Why this matters now: the Industry 5.0 framing
              </h2>
            </div>
            <p className="text-gray-700 mb-3">
              Industry 4.0 connected machines; Industry 5.0 reconnects humans. The European Commission and the recent literature (Pedersen et al., 2024) frame Industry 5.0 around three values — <strong>human-centric</strong>, <strong>sustainable</strong> and <strong>resilient</strong> automation — where robots are designed to amplify human creativity, judgement and well-being rather than replace them.
            </p>
            <p className="text-gray-700">
              The co-evolution stage of this model is the natural endpoint of that paradigm: a team where humans and robots learn from each other continuously, where responsibility is shared at the system level, and where trust is treated as a measurable design outcome rather than a residual.
            </p>
          </motion.section>

          {/* Contact */}
          <motion.section
            className="glass-card rounded-xl p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            aria-labelledby="contact-heading"
          >
            <h2 id="contact-heading" className="text-xl font-semibold mb-3 text-gray-800">Contact the author</h2>
            <p className="text-gray-700 mb-4">
              I'm Santiago Pavon — a curious learner on HRI, robotics and AI. Feel free to reach out with questions, ideas or comments about anything you've seen on this page.
            </p>
            <a
              href="mailto:santiagopavon10@icloud.com"
              className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact
            </a>
          </motion.section>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
