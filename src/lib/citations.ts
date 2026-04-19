export type CitationEntry = {
  id: string;
  authors: string;
  year: number;
  title: string;
  publication: string;
  url: string;
  short: string;
};

export const CITATIONS: Record<string, CitationEntry> = {
  muller2016: {
    id: 'muller2016',
    authors: 'Müller, R., Vette, M. & Mailahn, O.',
    year: 2016,
    title:
      'Process-oriented Task Assignment for Assembly Processes with Human-Robot Interaction',
    publication: 'Procedia CIRP, 44, 210–215',
    url: 'https://doi.org/10.1016/j.procir.2016.02.080',
    short:
      'Foundational five-stage HRC taxonomy: cell → coexistence → synchronised → cooperation → collaboration.',
  },
  bdiwi2017: {
    id: 'bdiwi2017',
    authors: 'Bdiwi, M., Pfeifer, M. & Sterzing, A.',
    year: 2017,
    title:
      'A new strategy for ensuring human safety during various levels of interaction with industrial robots',
    publication: 'CIRP Annals — Manufacturing Technology, 66(1), 453–456',
    url: 'https://doi.org/10.1016/j.cirp.2017.04.009',
    short: 'Adds graded safety levels to each interaction stage.',
  },
  kolbeinsson2019: {
    id: 'kolbeinsson2019',
    authors: 'Kolbeinsson, A., Lagerstedt, E. & Lindblom, J.',
    year: 2019,
    title:
      'Foundation for a classification of collaboration levels for human-robot cooperation in manufacturing',
    publication: 'Production & Manufacturing Research, 7(1), 448–471',
    url: 'https://doi.org/10.1080/21693277.2019.1645628',
    short: 'Refines the Müller taxonomy and clarifies cooperation vs. collaboration.',
  },
  benos2020: {
    id: 'benos2020',
    authors: 'Benos, L., Bechar, A. & Bochtis, D.',
    year: 2020,
    title:
      'Safety and ergonomics in human-robot interactive agricultural operations',
    publication: 'Biosystems Engineering, 200, 55–72',
    url: 'https://doi.org/10.1016/j.biosystemseng.2020.09.009',
    short:
      'Applies and refines the HRC stage model to agricultural operations; cited in the thesis.',
  },
  bauer2008: {
    id: 'bauer2008',
    authors: 'Bauer, A., Wollherr, D. & Buss, M.',
    year: 2008,
    title: 'Human–Robot Collaboration: A Survey',
    publication: 'International Journal of Humanoid Robotics, 5(1), 47–66',
    url: 'https://doi.org/10.1142/S0219843608001303',
    short: 'Foundational survey of human–robot collaboration.',
  },
  goodrich2007: {
    id: 'goodrich2007',
    authors: 'Goodrich, M. A. & Schultz, A. C.',
    year: 2007,
    title: 'Human-Robot Interaction: A Survey',
    publication: 'Foundations and Trends in Human-Computer Interaction, 1(3), 203–275',
    url: 'https://doi.org/10.1561/1100000005',
    short: 'Foundational survey of HRI as a research field.',
  },
  wang2020: {
    id: 'wang2020',
    authors: 'Wang, L., Liu, S., Liu, H. & Wang, X. V.',
    year: 2020,
    title: 'Symbiotic Human-Robot Collaborative Assembly',
    publication: 'CIRP Annals, 69(2), 701–726',
    url: 'https://doi.org/10.1016/j.cirp.2020.03.008',
    short:
      'Coins "symbiotic HRC", bridging collaboration and the co-evolution stage.',
  },
  semeraro2023: {
    id: 'semeraro2023',
    authors: 'Semeraro, F., Griffiths, A. & Cangelosi, A.',
    year: 2023,
    title:
      'Human–robot collaboration and machine learning: A systematic review of recent research',
    publication: 'Robotics and Computer-Integrated Manufacturing, 79, 102432',
    url: 'https://doi.org/10.1016/j.rcim.2022.102432',
    short:
      'Systematic review of learning-driven mutual adaptation in HRC.',
  },
  pedersen2024: {
    id: 'pedersen2024',
    authors: 'Pedersen, M. R. et al.',
    year: 2024,
    title:
      'Reviewing human-robot collaboration in manufacturing: Opportunities and challenges in the context of Industry 5.0',
    publication: 'Robotics and Computer-Integrated Manufacturing',
    url: 'https://doi.org/10.1016/j.rcim.2024.102861',
    short:
      'Macro Industry 5.0 framing — human-centric, sustainable, resilient automation.',
  },
  pedreschi2024: {
    id: 'pedreschi2024',
    authors: 'Pedreschi, D., Pappalardo, L. et al.',
    year: 2024,
    title: 'Human–AI coevolution',
    publication: 'Artificial Intelligence, 339, 104244',
    url: 'https://doi.org/10.1016/j.artint.2024.104244',
    short:
      'Defines coevolution as an iterative loop between humans and learning systems.',
  },
  frontiers2025: {
    id: 'frontiers2025',
    authors: 'Frontiers in Artificial Intelligence',
    year: 2025,
    title:
      'Mutual human–robot understanding for a robot-enhanced society: shared embodied cognition',
    publication: 'Frontiers in AI, 8, Article 1608014',
    url: 'https://doi.org/10.3389/frai.2025.1608014',
    short:
      'Underwrites the "shared cognition" and trust-building dimensions of co-evolution.',
  },
  pavon2023: {
    id: 'pavon2023',
    authors: 'Pavon, S. I.',
    year: 2023,
    title:
      'Managing strategic-level human-machine teams in the agribusiness sector',
    publication: 'MSc dissertation, KEDGE Business School (supervisor: O. Dupouët)',
    url: '/hybrid-robot-communicator/thesis.pdf',
    short:
      'Origin of the "co-evolution approach" framing extended on this site.',
  },
  breque2021: {
    id: 'breque2021',
    authors: 'Breque, M., De Nul, L. & Petridis, A.',
    year: 2021,
    title:
      'Industry 5.0: Towards a sustainable, human-centric and resilient European industry',
    publication: 'European Commission, Directorate-General for Research and Innovation',
    url: 'https://op.europa.eu/en/publication-detail/-/publication/468a892a-5097-11eb-b59f-01aa75ed71a1/',
    short:
      'European Commission policy brief introducing Industry 5.0 around three pillars: human-centric, sustainable, resilient.',
  },
  ec2022: {
    id: 'ec2022',
    authors: 'European Commission',
    year: 2022,
    title: 'Industry 5.0, a transformative vision for Europe',
    publication: 'Publications Office of the European Union',
    url: 'https://op.europa.eu/en/publication-detail/-/publication/38a2fa08-728e-11ec-9136-01aa75ed71a1/',
    short:
      'Follow-up brief on Industry 5.0 as a transformative agenda for European industry.',
  },
};

export type CitationKey = keyof typeof CITATIONS;
