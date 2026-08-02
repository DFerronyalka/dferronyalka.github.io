/* ==================================================================
   data.js — THIS IS THE ONLY FILE YOU NEED TO EDIT.

   Both pages of your site read from this one file:
     index.html    - the home page with the project cards
     project.html  - the detail page for a single project

   Add a project here and it appears in BOTH places automatically.
   You will never need to create a new file for a new project.

   Rules that will save you pain:
     1. Text goes inside "quotes".
     2. Every line ends with a comma.
     3. Don't delete the { } or [ ] brackets.
     4. To use a quote mark inside text, write it as \"

   ── ABOUT THE <FILL IN ...> MARKERS ──
   Anywhere I didn't have your real numbers, I left a marker like:
       <FILL IN: measured torque>
   These show up on the live page in dashed amber boxes so you can't
   miss them. Replace the whole marker, angle brackets included, with
   the real value. If a line doesn't apply to you, delete the line.
   ================================================================== */

const SITE = {
  name:      "Drake Ferronyalka",
  role:      "Mechanical & Robotics Engineering Student",
  tagline:   "I design, build and test physical systems — from CAD and machined parts to embedded control. Currently studying engineering and looking for internship opportunities.",
  location:  "Orlando, FL, United States",
  email:     "dferronyalka@gmail.com",
  // Leave any of these as "" to hide the button.
  github:    "https://github.com/DFerronyalka",
  linkedin:  "https://www.linkedin.com/in/drakeferronyalka/",
  resumeUrl: "resume.pdf",
  about: [
    "Veteran-engineer building toward flight hardware and lunar ISRU systems, currently a Mechanical Engineering student at UCF and Machinist Apprentice in its Office of Research shop.",
    "Six years as a U.S. Navy Fire Controlman gave me a first-principles, precision-driven approach to hardware.",
    "Currently developing DTA-1, a dust-tolerant actuator for lunar surface robotics, under my engineering brand, Pulsar Designs.",
    "Seeking mechanical design and manufacturing internships supporting flight hardware, mechanisms, and GSE.",
  ],
};

/* ------------------------------------------------------------------
   "AT A GLANCE" — the small card in the About section.
   ------------------------------------------------------------------ */

const GLANCE = [
  { label: "Focus",     value: "Mechanical Design & Space Robotics" },
  { label: "Clearance", value: "DoD Secret (Active)" },
  { label: "Based in",  value: "Orlando, FL, USA" },
  { label: "Year",      value: "3rd Year - BSME" },
  { label: "Projects",  value: "auto" },
  { label: "Email",     value: "dferronyalka@gmail.com" },
];

/* ==================================================================
   PROJECTS — newest first.

   Short fields (id, title, year, category, status, blurb, highlights,
   tags, image, links) show on the home page card.

   Long fields (gallery, problem, approach, result, lessons, specs,
   files) only show on that project's own page. All optional —
   sections with no content simply don't appear.
   ================================================================== */

const PROJECTS = [
  {
    id: "dta-1-drivetrain",
    title: "DTA-1 Drivetrain Prototype",
    year: "2026",
    category: "Mechanical",
    status: "Research & Design Phase",
    blurb: "Dust-tolerant drivetrain for lunar surface robotics, pairing a CubeMars R80 KV110 motor with a two-stage 10:1 planetary gearbox in a compact 4-inch OD housing — sized from first principles for a 20 kg rover platform.",
    highlights: [
      "First-principles torque/speed sizing for a 20 kg rover platform.",
      "Two-stage 10:1 planetary gearbox in a compact 4-inch OD housing.",
      "Removable seal test cartridge for lunar dust-ingress testing.",
    ],
    tags: ["Mechanical Design", "Space Robotics", "SolidWorks", "Embedded DAQ"],
    image: "",
    links: {
      github: "",
      writeup: "",
      demo: "",
    },

    /* ---- detail page ---- */
    gallery: [
      { src: "", caption: "DTA-1 assembly section view — motor, two-stage reduction, seal cartridge" },
      { src: "", caption: "Seal test cartridge, removed from the housing" },
      { src: "", caption: "<FILL IN: what this third image shows — test rig, printed prototype, or delete this line>" },
    ],

    problem: "Lunar regolith is abrasive, angular and electrostatically charged, and it degrades exactly the parts a rover cannot afford to lose: seals, bearings and gear meshes. Apollo-era hardware showed measurable wear within a single EVA. An actuator intended for sustained surface operations has to be designed around dust ingress as a primary load case rather than treated as an environmental footnote.\n\nDesign constraints for DTA-1: a 20 kg rover platform, a 4-inch outer-diameter housing envelope, and <FILL IN: your remaining hard constraints — target continuous torque, wheel speed, mass budget, operating temperature range, duty cycle>",

    approach: "Sized the drivetrain from first principles rather than from a catalogue: derived required wheel torque and speed from platform mass, wheel diameter, worst-case slope and expected regolith rolling resistance, then worked back through a 10:1 two-stage planetary reduction to a continuous-torque requirement at the motor. That set the selection of the CubeMars R80 KV110 and drove the gearbox stage split.\n\nPackaged the reduction into a 4-inch OD housing, which forced <FILL IN: the specific packaging trade you made — e.g. planet count, stage ratio split, bearing arrangement, or where you gave up margin to hold the envelope>\n\nThe dust-tolerance strategy is a removable seal test cartridge: the sealing interface is isolated in a swappable module so different seal geometries and materials can be tested to failure without rebuilding the actuator. Instrumentation via <FILL IN: what the embedded DAQ measures — torque, current, temperature, seal drag — and at what rate>",

    result: "<FILL IN: where the project actually stands. Anything real counts — the sizing calculation converged and here are the numbers, the CAD is complete at N parts, the first cartridge is printed, bench testing begins on this date. If nothing is built yet, say that plainly and state what the analysis predicts.>\n\nPredicted performance: <FILL IN: continuous torque at the wheel, no-load speed, gearbox efficiency estimate, total actuator mass>",

    lessons: [
      "<FILL IN: something the sizing or packaging work actually taught you — a constraint that turned out to dominate, an assumption that didn't survive, a number that surprised you.>",
      "<FILL IN: what you'd change about the approach next time. This is the highest-value line on the page — reviewers read it as evidence you can evaluate your own work.>",
    ],

    specs: [
      { k: "Platform mass",  v: "20 kg (design target)" },
      { k: "Motor",          v: "CubeMars R80, KV110" },
      { k: "Reduction",      v: "10:1, two-stage planetary" },
      { k: "Housing OD",     v: "4 in" },
      { k: "Cont. torque",   v: "<FILL IN>" },
      { k: "Actuator mass",  v: "<FILL IN>" },
      { k: "Seal interface", v: "Removable test cartridge" },
      { k: "Status",         v: "Research & design" },
    ],

    files: [
      { label: "Design report (PDF)",     url: "" },
      { label: "CAD — STEP package",      url: "" },
      { label: "Sizing calculations",     url: "" },
    ],
  },

  {
    id: "wheel-light-mounting",
    title: "Wheel Light Mounting System",
    year: "2024",
    category: "Mechanical",
    status: "Complete",
    blurb: "A modular, patent-pending mounting architecture for off-road lighting, engineered for vibration resistance, packaging efficiency, and serviceability — from CAD to CNC-fabricated prototype.",
    highlights: [
      "Modular mounting design engineered for vibration resistance and serviceability.",
      "Manufacturing-ready drawings and BOM developed in SolidWorks with full GD&T.",
      "Prototype fabricated via CNC plasma cutting and secondary operations, validated through torque checks and road testing.",
    ],
    tags: ["Mechanical Design", "SolidWorks", "GD&T", "CNC Fabrication"],
    image: "",
    links: {
      github: "",
      writeup: "",
      demo: "",
    },

    /* ---- detail page ---- */
    gallery: [
      { src: "", caption: "Mounted assembly on the vehicle" },
      { src: "", caption: "SolidWorks assembly — modular bracket architecture" },
      { src: "", caption: "Plasma-cut blanks before secondary operations" },
    ],

    problem: "Off-road lighting mounts live in a punishing vibration environment, and the common failure isn't the light — it's the bracket loosening, fatiguing or forcing a full teardown to service. <FILL IN: what specifically prompted this project — a mount that failed on you, a gap you saw in what's sold, a customer requirement.>\n\nThe design had to hold up under vibration, package efficiently around <FILL IN: the wheel/vehicle geometry it mounts to>, and stay serviceable without removing surrounding hardware.",

    approach: "Designed a modular bracket architecture in SolidWorks so that <FILL IN: what the modularity actually buys — fits multiple light sizes, multiple vehicles, or lets one damaged element be replaced alone>. Vibration resistance came from <FILL IN: the specific measures — fastener preload spec, thread locker, isolation grommets, gusseting, stiffening geometry>\n\nProduced a manufacturing-ready package: fully dimensioned drawings with GD&T to <FILL IN: standard used, e.g. ASME Y14.5-2018> plus a complete BOM. Fabricated the prototype by CNC plasma cutting from <FILL IN: material and thickness>, followed by <FILL IN: secondary operations — bending, drilling, tapping, deburring, finishing>",

    result: "Validated through fastener torque checks and road testing over <FILL IN: distance and terrain type, and how long the test ran>. <FILL IN: what the checks actually showed — torque retention after N miles, no visible fatigue, any failure you found and fixed.>\n\nThe design is patent-pending as of <FILL IN: filing date, and provisional vs non-provisional>",

    lessons: [
      "<FILL IN: what fabrication taught you that CAD didn't — plasma kerf, heat distortion, a tolerance you couldn't actually hold, a feature that was awkward to fixture.>",
      "<FILL IN: what road testing revealed that bench checks missed.>",
      "<FILL IN: what you'd change in a second revision.>",
    ],

    specs: [
      { k: "Material",     v: "<FILL IN: e.g. 3/16 in A36 steel>" },
      { k: "Process",      v: "CNC plasma cutting + secondary ops" },
      { k: "Fasteners",    v: "<FILL IN: size, grade, torque spec>" },
      { k: "Finish",       v: "<FILL IN: powder coat, zinc, raw>" },
      { k: "Mass",         v: "<FILL IN>" },
      { k: "Road tested",  v: "<FILL IN: miles / hours>" },
      { k: "IP status",    v: "Patent pending" },
    ],

    files: [
      { label: "Drawing set (PDF)",   url: "" },
      { label: "BOM",                 url: "" },
      { label: "CAD — STEP package",  url: "" },
    ],
  },
];

/* ------------------------------------------------------------------
   SKILLS — add or remove groups and items freely.
   ------------------------------------------------------------------ */

const SKILLS = [
  { group: "Certifications", items: ["CSWA"] },
  { group: "CAD & Design",   items: ["SolidWorks", "Siemens NX", "GD&T", "Technical Drawing"] },
  { group: "Analysis",       items: ["ANSYS", "Statics & Dynamics"] },
  { group: "Electronics",    items: ["Oscilloscope", "Soldering"] },
  { group: "Software",       items: ["Python", "C"] },
  { group: "Manufacturing",  items: ["3D Printing (FDM)", "Lathe & Mill", "Plasma Cutting", "SheetCAM"] },
];

/* ------------------------------------------------------------------
   TIMELINE — education, jobs, competitions, awards. Newest first.
   ------------------------------------------------------------------ */

const TIMELINE = [
  {
    period: "May 2026 — Present",
    title: "Machinist Apprentice",
    org: "University of Central Florida — Office of Research",
    detail: "Support UCF Senior Design teams and faculty-led research by translating design intent into manufacturable components, fixtures, and tooling using SolidWorks, GD&T, and first-principles problem-solving, while advising project teams on design for manufacturability to reduce rework and improve producibility with available shop equipment.",
  },
  {
    period: "2025 — Present",
    title: "BSME — Mechanical Engineering",
    org: "University of Central Florida",
    detail: "Relevant coursework: Statics, Solid Mechanics, Dynamics, Thermodynamics, Programming with Python and C.",
  },
  {
    period: "July 2017 — December 2023",
    title: "Fire Controlman — AEGIS",
    org: "United States Navy",
    detail: "Maintained and troubleshot MK 99 T-1348 Radar Transmitter and ACSSFC 400 Hz power systems aboard DDG-class ships, executing preventive and corrective maintenance to sustain operational readiness in high-tempo environments. Led and trained 10+ technicians on diagnostics, troubleshooting workflows, and procedure compliance. Held an active DoD Secret Clearance (adjudicated 2017).",
  },
];
