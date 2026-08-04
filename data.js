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
  tagline:   "I design, build and test physical systems — from CAD and machined parts to embedded control. Six years maintaining shipboard radar and 400 Hz power systems, now designing actuators for lunar dust environments.",
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
  { label: "Clearance", value: "DoD Secret (Inactive, adjudicated 2017)" },
  { label: "Based in",  value: "Orlando, FL - open to relocation" },
  { label: "Graduating",value: "May 2028 (expected)" },
  { label: "GPA",      value: "3.82 / 4.00" },
  { label: "Availability",  value: "Summer 2027 - 12 weeks, full-time, onsite" },
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
    draft: true,
    id: "wheel-light-mounting",
    title: "Wheel Light Mounting System",
    year: "2024-2026",
    category: "Mechanical",
    status: "Patent Granted",
    blurb: "A modular mounting architecture for off-road wheel lighting, engineered for vibration resistance, packaging efficiency, and serviceability — taken from CAD through CNC-fabricated prototype to an issued U.S. patent on which I am a named co-inventor.",
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

    problem: "Wheel ring lights are conventionally mounted to the brake dust shield — a thin stamped panel whose only job is deflecting debris. It carries no design load, has no structural stiffness, and was never intended to support a ring assembly hanging off it in an unsprung, rotating, continuously shock-loaded position. Mounting to it is a known bad practice in the industry, and it's the default anyway because it's the only flat surface behind the wheel that's easy to reach.\n\nThe alternative isn't obvious. Anything stiff enough to mount to — knuckle, hub, caliper bracket — is already crowded with brake and suspension hardware, varies by vehicle, and can't be drilled or modified without creating a liability. Whatever replaces the dust shield mount has to clear the rotor and caliper through full articulation, use only fasteners the vehicle already has, and still come apart for brake service without removing the light ring from the vehicle.\n\nDesign constraints: <FILL IN — target vehicle platforms/model years, wheel diameter and backspacing range, ring light fixtures supported>",

    approach: "The system attaches to structural vehicle components instead of the dust shield — specifically the steering knuckle at the front and the axle hub assembly at the rear. Bracket geometry is shaped to wrap the existing contours of those components, and mounting holes are positioned to land on bolts the vehicle already has: axle flange and caliper bolts at the knuckle, hub flange bolts at the rear axle. Nothing is drilled, welded, or modified on the vehicle.\n\nThree bracket assemblies cover the vehicle: a driver-side knuckle assembly, a passenger-side knuckle assembly (mirrored, not identical, because the knuckles aren't), and a rear axle assembly that fits either side. Each carries a ring-shaped mount that accepts ring lights on both its inner and outer circumference via strap fasteners.\n\nServiceability is built into the bracket topology. Rather than one welded structure, each assembly is several bracket members removably coupled to one another. That lets the ring mount come off for brake work without disturbing the rest of the assembly — the constraint that usually kills aftermarket lighting installs.\n\nMy contribution covered <FILL IN — which of the three assemblies you owned, which analyses, which drawings>, including SolidWorks drawings dimensioned with GD&T per ASME Y14.5 for CNC plasma and downstream secondary operations, plus the released BOM.",
    result: "U.S. Patent No. 12,673,603 B2 issued to Shoreline Offroad, LLC, naming three co-inventors. Eleven claims across three independent claims cover the ring-mount-plus-bracket-assembly architecture, with the mounting location expressly claimed as something other than a brake dust shield, and the steering knuckle and axle hub named specifically.\n\nPrototypes were fabricated via CNC plasma cutting and secondary operations, then validated through fitment checks, torque checks, and road testing.\n\n<FILL IN — hard numbers: vehicle platforms fitted, units built, test miles, retorque results, whether units are in service. Two real numbers here outweigh a paragraph of description.>\n\nRights were assigned prior to issuance; inventorship remains on the patent record.",

    lessons: [
      "<FILL IN: what fabrication taught you that CAD didn't — plasma kerf, heat distortion, a tolerance you couldn't actually hold, a feature that was awkward to fixture.>",
      "<FILL IN: what road testing revealed that bench checks missed.>",
      "<FILL IN: what you'd change in a second revision.>",
    ],

    specs: [
      { k: "Patent",       v: "US 12,673,603 B2" },
      { k: "Issue Date",      v: "2026-07-07" },
      { k: "Application no.",    v: "19/314,475." },
      { k: "Filed",       v: "2024" },
      { k: "Inventors",         v: "Joshua West,\nDrake Ferronyalka,\nAndre Ferronyalka" },
      { k: "Assignee",  v: "Shoreline Offroad Co." },
      { k: "Application",    v: "2018-2025 Jeep Wrangler (4dr)" },
      { k: "Material",    v: "Mild Steel" },
      { k: "Fabrication",    v: "CNC PLasma + Secondary Operations" },
      { k: "Status",    v: "Patent Granted" },
    ],

    files: [
      { label: "Patent - US 12,673,603 B2",   url: "https://patentsgazette.uspto.gov/week27/OG/html/1548-1/US12673603-20260707.html" },

    ],
  },
   {
    draft: true,
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

];

/* ------------------------------------------------------------------
   SKILLS — add or remove groups and items freely.
   ------------------------------------------------------------------ */

const SKILLS = [
  { group: "Certifications", items: ["CSWA - Certified SolidWorks Associate"] },
  { group: "CAD & Design",   items: ["SolidWorks", "Siemens NX", "GD&T (ASME Y14.5)", "Technical Drawing", "Tolerance Stack-Up", "DFM"] },
  { group: "Analysis",       items: ["ANSYS - Static Structural", "First-Principles Sizing", "Shaft & Gear Load Analysis"] },
  { group: "Electronics",    items: ["Radar & 400 Hz Power Systems", "BLDC Motor Control (VESC)", "Load Cells", "Thermocouples", "IMU", "Data Acquisition", "Oscilloscope", "Soldering"] },
  { group: "Software",       items: ["Python", "C", "Embedded (RP2040 / Raspberry Pi)"] },
  { group: "Manufacturing",  items: ["Manual Lathe & Mill", "CNC Plasma", "SheetCAM", "FDM", "Fixture Design"] },
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
    period: "2026 — Present",
    title: "BSME — Mechanical Engineering",
    org: "University of Central Florida      Expected Graduation: May 2028      GPA: 3.82 / 4.00",
    detail: "Relevant coursework: Statics, Solid Mechanics, Dynamics, Thermodynamics, Programming with Python and C.",
  },
  {
    period: "July 2017 — December 2023",
    title: "Fire Controlman — AEGIS",
    org: "United States Navy",
    detail: "Maintained and troubleshot MK 99 T-1348 Radar Transmitter and ACSSFC 400 Hz power systems aboard DDG-class ships, executing preventive and corrective maintenance to sustain operational readiness in high-tempo environments. Led and trained 10+ technicians on diagnostics, troubleshooting workflows, and procedure compliance. Previously held a DoD Secret Clearance (U.S. Navy, adjudicated 2017) through December 2023.",
  },
];
