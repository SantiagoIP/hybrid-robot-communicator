import React, { useEffect } from 'react';
import { Printer, Download } from 'lucide-react';
import { stageColor } from '@/lib/stageTokens';

type StageRow = {
  name: string;
  blurb: string;
  spatial: string;
  temporal: string;
  communication: string;
  example: string;
  manager: string;
};

const STAGES: StageRow[] = [
  {
    name: '1 · Cell (Isolation)',
    blurb: 'Robot caged, human outside.',
    spatial: 'Fully separated.',
    temporal: 'No overlap.',
    communication: 'One-way programming.',
    example: 'Fenced industrial robot cell.',
    manager: 'Document interlocks. Cross-train at least two operators per cell.',
  },
  {
    name: '2 · Coexistence',
    blurb: 'Same room, separate jobs.',
    spatial: 'Shared space, separate zones.',
    temporal: 'Same shift, no shared task.',
    communication: 'Sensors and floor markings.',
    example: 'Warehouse picker and AMR in one aisle.',
    manager: 'Publish rules-of-the-road. Log near-misses without blame.',
  },
  {
    name: '3 · Synchronised',
    blurb: 'Same workspace, different moments.',
    spatial: 'Shared.',
    temporal: 'Choreographed handover.',
    communication: 'Status signals, ready/done.',
    example: 'Pick-and-place loads, operator deburrs.',
    manager: 'Document the handover protocol on paper, not just in firmware.',
  },
  {
    name: '4 · Cooperation',
    blurb: 'Same workpiece, different sub-tasks.',
    spatial: 'Shared.',
    temporal: 'Same minute.',
    communication: 'Position tracking, intent signals.',
    example: 'Cobot torques bracket while operator clips harness.',
    manager: 'Instrument cycle times for the team, never as a personal score.',
  },
  {
    name: '5 · Collaboration',
    blurb: 'Same task, joint motion.',
    spatial: 'Shared.',
    temporal: 'Same second.',
    communication: 'Force/torque, gestures, voice.',
    example: 'Surgeon + robotic arm; hand-guided assembly.',
    manager: 'Co-design the gestures with the operators who will use them.',
  },
  {
    name: '6 · Co-evolution',
    blurb: "Pavon (2023): humans and robots learn each other.",
    spatial: 'Shared, fluid.',
    temporal: 'Continuous.',
    communication: 'Adaptive, bidirectional learning loops.',
    example: 'Foreman + senior operator; agronomist + field-robot fleet.',
    manager: 'Treat the joint model as shared IP. Renew consent at every behavioural drift.',
  },
];

const PrintPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const today = new Date().toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="min-h-screen bg-gray-50 print:bg-white">
      <div className="max-w-5xl mx-auto px-4 pt-24 pb-12 print:pt-6 print:pb-6 print:px-0">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 print:hidden">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Printable one-pager
            </h1>
            <p className="text-sm text-gray-600 mt-1">
              The full six-stage model on a single A4/Letter page — for meetings, briefings or pinning above a workstation.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg shadow-sm hover:bg-primary/90 transition-colors"
            >
              <Printer className="w-4 h-4" aria-hidden="true" />
              Print / Save as PDF
            </button>
            <a
              href="/hybrid-robot-communicator/thesis.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-800 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
            >
              <Download className="w-4 h-4" aria-hidden="true" />
              Full thesis (PDF)
            </a>
          </div>
        </div>

        <article
          id="one-pager"
          className="bg-white rounded-xl shadow-md border border-gray-200 p-8 print:shadow-none print:border-0 print:rounded-none print:p-6"
          aria-label="One-pager summary of the six stages of human-robot integration"
        >
          <header className="border-b border-gray-300 pb-4 mb-5">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
              From Cell to Co-evolution — the six stages of human–robot integration
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              A managerial reading of the Müller (2016) HRC taxonomy, extended with the co-evolution stage from Pavon (2023, KEDGE BS) and framed inside the European Commission's Industry 5.0 paradigm (Breque, De Nul &amp; Petridis, 2021).
            </p>
            <p className="text-[11px] text-gray-500 mt-2">
              santiagoip.github.io/hybrid-robot-communicator · printed {today}
            </p>
          </header>

          <table className="w-full border-collapse text-[11px] md:text-xs">
            <thead>
              <tr className="text-left text-gray-700 border-b-2 border-gray-300">
                <th className="py-2 pr-2 w-[15%] font-semibold">Stage</th>
                <th className="py-2 px-2 w-[12%] font-semibold">Spatial</th>
                <th className="py-2 px-2 w-[12%] font-semibold">Temporal</th>
                <th className="py-2 px-2 w-[18%] font-semibold">Communication</th>
                <th className="py-2 px-2 w-[20%] font-semibold">Workplace example</th>
                <th className="py-2 pl-2 w-[23%] font-semibold">Manager priority</th>
              </tr>
            </thead>
            <tbody>
              {STAGES.map((row, i) => (
                <tr
                  key={row.name}
                  className="border-b border-gray-200 align-top"
                  style={{ pageBreakInside: 'avoid' }}
                >
                  <td className="py-3 pr-2">
                    <div
                      className="font-semibold text-gray-900 leading-tight"
                      style={{
                        borderLeft: `4px solid ${stageColor(i)}`,
                        paddingLeft: '8px',
                      }}
                    >
                      {row.name}
                    </div>
                    <div className="text-[10px] text-gray-500 mt-1 pl-3">{row.blurb}</div>
                  </td>
                  <td className="py-3 px-2 text-gray-700">{row.spatial}</td>
                  <td className="py-3 px-2 text-gray-700">{row.temporal}</td>
                  <td className="py-3 px-2 text-gray-700">{row.communication}</td>
                  <td className="py-3 px-2 text-gray-700">{row.example}</td>
                  <td className="py-3 pl-2 text-gray-700">{row.manager}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <section className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-[11px] md:text-xs">
            <div className="border border-gray-200 rounded-md p-3 bg-gray-50/50">
              <h3 className="font-semibold text-gray-800 mb-1">Three values of Industry 5.0</h3>
              <p className="text-gray-700">
                Human-centric · Sustainable · Resilient. Technology should serve the worker and the planet, not only output (European Commission, 2021).
              </p>
            </div>
            <div className="border border-gray-200 rounded-md p-3 bg-gray-50/50">
              <h3 className="font-semibold text-gray-800 mb-1">Two managerial variables</h3>
              <p className="text-gray-700">
                Trust and communication, treated as design outcomes rather than residuals. Both rise in weight at every stage and dominate from cooperation onward.
              </p>
            </div>
            <div className="border border-gray-200 rounded-md p-3 bg-gray-50/50">
              <h3 className="font-semibold text-gray-800 mb-1">One question per stage</h3>
              <p className="text-gray-700">
                "Who owns the failure, and who owns the credit?" — the answer migrates from the programmer (stage 1) to the team (stage 6) as integration deepens.
              </p>
            </div>
          </section>

          <footer className="mt-6 pt-3 border-t border-gray-300 text-[10px] text-gray-500 leading-snug">
            <p>
              <strong>Sources:</strong> Müller, Vette &amp; Mailahn (2016); Bdiwi, Pfeifer &amp; Sterzing (2017); Kolbeinsson, Lagerstedt &amp; Lindblom (2019); Benos, Bechar &amp; Bochtis (2020); Wang et al. (2020); Semeraro, Griffiths &amp; Cangelosi (2023); Pedersen et al. (2024); Pedreschi et al. (2024); Frontiers in AI (2025); Breque, De Nul &amp; Petridis (2021); European Commission (2022); Pavon, S. I. (2023). MSc dissertation, KEDGE Business School (sup. O. Dupouët).
            </p>
            <p className="mt-1">
              © Santiago Pavon · MIT License · santiagoip.github.io/hybrid-robot-communicator
            </p>
          </footer>
        </article>
      </div>
    </div>
  );
};

export default PrintPage;
