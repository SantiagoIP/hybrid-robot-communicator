# Human–Robot Collaboration in Teams

An interactive companion to a master's thesis on hybrid human–machine teams in
organisations. The site presents the six stages of human–robot integration —
from isolated cells to **co-evolution** — read through a managerial lens.

🌐 **Live site:** <https://santiagoip.github.io/hybrid-robot-communicator/>
📄 **Thesis PDF:** [Managing strategic-level human-machine teams in the agribusiness sector](https://santiagoip.github.io/hybrid-robot-communicator/thesis.pdf)
📚 **Author:** Santiago I. Pavon — KEDGE Business School, MSc in International Business (2023, sup. O. Dupouët)

---

## What is on the site

| Page          | What you find                                                                              |
| ------------- | ------------------------------------------------------------------------------------------ |
| **Home**      | Interactive 6-stage model with per-stage visualization, plain-language analogies, ethics questions and a manager checklist. |
| **About**     | Thesis context, BibTeX, and the Industry 5.0 framing with direct quotes from the European Commission's 2021/2022 briefs. |
| **Glossary**  | Plain-language definitions of HRC, HRI, cobot, AMR, LOA, embodied cognition, Industry 5.0, etc. With search. |
| **Resources** | Curated, hyperlinked literature behind the model.                                          |
| **One-pager** | Print-ready single-page summary of the six stages with `Print → Save as PDF`.              |

Citations in the running text are hoverable: hover (or tap on mobile) any
underlined reference for the full citation, a one-line summary, and a link to
the source.

---

## The six stages

1. **Cell (isolation)** — fenced robot, human outside.
2. **Coexistence** — same room, separate jobs (warehouse picker + AMR).
3. **Synchronised** — same workspace, different moments (handover-driven).
4. **Cooperation** — same workpiece, different sub-tasks (cobot + operator).
5. **Collaboration** — same task, joint motion (surgeon + robotic arm).
6. **Co-evolution** — humans and robots learn from each other; shared trust,
   shared responsibility. Originally introduced in **Pavon (2023)**.

The first five stages follow Müller, Vette & Mailahn (Procedia CIRP, 2016),
refined by Bdiwi (2017), Kolbeinsson (2019) and Benos, Bechar & Bochtis (2020).
The sixth stage is the author's contribution and is read against the European
Commission's Industry 5.0 paradigm (Breque, De Nul & Petridis, 2021).

---

## Tech stack

- **React 18 + TypeScript** with **Vite** as the build tool.
- **Tailwind CSS** with a small set of custom design tokens
  (`src/lib/stageTokens.ts` for the stage palette, `tailwind.config.ts` for
  human/robot/workspace colors).
- **Framer Motion** for animation, with `useReducedMotion` respected.
- **Radix UI** (Tabs, Popover) as the accessibility primitives behind the
  per-stage tabs and the citation hover cards.
- **lucide-react** for icons.
- **react-router-dom** (HashRouter) for client-side routing on GitHub Pages.

That is the entire runtime dependency tree — no `shadcn/ui` scaffolding, no
unused UI kit, no charting library, no form library.

---

## Local development

```bash
npm install
npm run dev          # http://localhost:8080
npm run build        # production build to dist/
npm run lint         # eslint
npm run preview      # preview the built site
```

---

## Project structure

```
src/
├── App.tsx                          # routes, layout shell
├── main.tsx                         # entry
├── index.css                        # Tailwind + minimal CSS variables + print rules
├── components/
│   ├── Citation.tsx                 # hover/tap citation card
│   ├── Footer.tsx                   # global footer
│   ├── NavBar.tsx                   # global nav
│   ├── ProgressTracker.tsx          # stage progress bar
│   ├── References.tsx               # full reference list (homepage)
│   ├── StageCard.tsx                # 6 stage cards (homepage)
│   ├── StageDetail.tsx              # per-stage details + extension
│   ├── StageExtension.tsx           # tabs: plain language / ethics / checklist
│   ├── StageVisualization.tsx       # picks the visualization per stage
│   ├── ui/tabs.tsx                  # Radix Tabs wrapper (single retained shadcn primitive)
│   └── visualization/StageCanvas.tsx  # SVG + HTML overlay primitive shared by all stages
├── pages/
│   ├── HomePage.tsx                 # interactive 6-stage explorer
│   ├── AboutPage.tsx                # thesis context + Industry 5.0
│   ├── GlossaryPage.tsx             # searchable glossary
│   ├── ResourcesPage.tsx            # curated literature index
│   ├── PrintPage.tsx                # printable one-pager (Save as PDF)
│   └── NotFound.tsx                 # 404
└── lib/
    ├── citations.ts                 # citation registry (hover cards + page text)
    ├── stageTokens.ts               # 6-color stage palette + helpers
    └── utils.ts                     # `cn` className merge helper
```

---

## License

MIT — see [LICENSE](./LICENSE).
