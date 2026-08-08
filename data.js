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
  { label: "GPA",      value: "3.85 / 4.00" },
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
    draft: false,
    id: "wheel-light-mounting",
    title: "Wheel Light Mounting System",
    year: "2024-2026",
    category: "Mechanical",
    status: "Patent Granted",
    blurb: "A modular mounting architecture for off-road wheel lighting, engineered for vibration resistance, packaging efficiency, and serviceability — taken from CAD through CNC-fabricated prototype to an issued U.S. patent on which I am a named co-inventor.",
    highlights: [
      "Modular mounting design engineered for vibration resistance and serviceability.",
      "Manufacturing-ready drawings and BOM developed in SolidWorks.",
      "Prototype fabricated via laser-cut flat patterns and secondary operations, validated through torque checks and road testing.",
    ],
    tags: ["Mechanical Design", "SolidWorks", "GD&T"],
    image: "images/Wheel_Light_Fitment_Thumbnail.jpg",
    links: {
      github: "",
      writeup: "",
      demo: "",
    },

    /* ---- detail page ---- */
    gallery: [
      { src: "images/Wheel_Light_First_Prototype.jpg", caption: "First prototype set — laser-cut mild steel bracket members and an assembled ring mount, laid out prior to fitment." },
      { src: "images/Wheel_Light_Fitment.jpg", caption: "Front assembly installed on the steering knuckle, mounted to existing caliper and hub bolts. The ring clears the rotor, caliper, and tie rod with the wheel in place." },
      { src: "images/Wheel_Light_Patent.jpg", caption: "Fig. 1 — the four bracket assemblies: driver-side knuckle (12), passenger-side knuckle (14), and rear axle hub (16), which fits either side. U.S. Patent 12,673,603 B2." },
    ],

    problem: "Wheel ring lights are conventionally mounted to the brake dust shield — a thin stamped panel whose only job is deflecting debris. It carries no design load, has no structural stiffness, and was never intended to support a ring assembly hanging off it in an unsprung, rotating, continuously shock-loaded position. Mounting to it is a known bad practice in the industry, and it's the default anyway because it's the only flat surface behind the wheel that's easy to reach.\n\nThe alternative isn't obvious. Anything stiff enough to mount to — knuckle, hub, caliper bracket — is already crowded with brake and suspension hardware, varies by vehicle, and can't be drilled or modified without creating a liability. Whatever replaces the dust shield mount has to clear the rotor and caliper through full articulation, use only fasteners the vehicle already has, and still come apart for brake service without removing the light ring from the vehicle.\n\nDesign constraints:\n\n- Direct bolt-on to 2018–2025 Jeep Wrangler JLU (4-door), no drilling or vehicle modification\n\n- Installs using existing knuckle and hub fasteners, single tool removal/installation\n\n- Removable in the field so the rings can come off before off-road use rather than be damaged during it\n\n- Removable independently of brake service, without disturbing the rest of the assembly",

    approach: "The system attaches to structural vehicle components instead of the dust shield — specifically the steering knuckle at the front and the axle hub assembly at the rear. Bracket geometry is shaped to wrap the existing contours of those components, and mounting holes are positioned to land on bolts the vehicle already has: axle flange and caliper bolts at the knuckle, hub flange bolts at the rear axle. Nothing is drilled, welded, or modified on the vehicle.\n\nMounting geometry was reverse-engineered from EINSTAR 3D scans of each knuckle and axle mounting location, giving the bracket profiles real surface data to conform to rather than nominal dimensions.\n\nFour bracket assemblies cover the vehicle: a driver-side knuckle assembly, a passenger-side knuckle assembly (mirrored, not identical, because the knuckles aren't), and a rear axle assembly that fits either side. Each carries a ring-shaped mount that accepts ring lights on both its inner and outer circumference via strap fasteners.\n\nServiceability is built into the bracket topology: rather than one welded structure, each assembly is several bracket members removably coupled to one another.\n\nThat topology exists because the removability requirement cut against the structural one. A mount stiff enough to survive unsprung shock loading is normally achieved through fastener count and preload — which is also what produces hardware nobody bothers to remove. Splitting each assembly into separate members lets the ring mount and its lights come off at a small number of fasteners while the structural brackets stay bolted to the vehicle. The removal a customer actually performs before a trail run is a one-tool operation, and the same interface serves brake service.\n\nMy contribution covered initial design and prototyping. Each mounting location was 3D scanned, and clearance against OEM components was checked in CAD against the scan data and then confirmed with FDM-printed fit-check articles before any metal was cut. SolidWorks drawings and flat patterns, dimensioned with GD&T per ASME Y14.5, were released to an outside laser-cutting supplier; I formed and assembled the resulting prototype set.",
    result: "U.S. Patent No. 12,673,603 B2 issued to Shoreline Offroad, LLC, naming three co-inventors. Eleven claims across three independent claims cover the ring-mount-plus-bracket-assembly architecture, with the mounting location expressly claimed as something other than a brake dust shield, and the steering knuckle and axle hub named specifically.\n\nDevelopment moved from FDM-printed fit-check articles to laser-cut flat patterns, formed and assembled in-house. The resulting hardware was validated through fitment checks, torque checks, and road testing.\n\n- 5 first-article prototype units, fit-checked across multiple vehicle positions with full removal and reinstallation at each\n\n- Interference with OEM components resolved at the FDM stage, before release to metal\n\n- Several hundred miles of combined road and off-highway use across the co-inventors' personal vehicles\n\nRights were assigned prior to issuance; inventorship remains on the patent record.",

    lessons: [
      "Clearance was verified against 3D scan data and confirmed with printed fit-check articles, so the bracket profiles landed correctly on the first metal run. What the scan-and-print workflow didn't catch was fastener length...the bolts specified for the first mild steel prototype were long enough to interfere with the axle bracket assembly once torqued down. The scans captured the mounting surfaces; they didn't capture what was going to occupy the space behind them.",
      "The lesson generalizes past this project: I was validating part geometry and treating hardware as a detail to be picked later. Fastener stack-up is part of the assembly envelope, not an afterthought to it — the check should have run on the assembled state including hardware, not on the brackets alone.",
    ],

    specs: [
      { k: "Patent",       v: "US 12,673,603 B2" },
      { k: "Issue Date",      v: "2026-07-07" },
      { k: "Application no.",    v: "19/314,475" },
      { k: "Filed",       v: "2024" },
      { k: "Inventors",         v: "Joshua West,\nDrake Ferronyalka,\nAndre Ferronyalka" },
      { k: "Assignee",  v: "Shoreline Offroad Co." },
      { k: "Application",    v: "2018–2025 Jeep Wrangler JLU (4-door)" },
      { k: "Material",    v: "Mild Steel" },
      { k: "Fabrication",    v: "Laser-cut flat patterns, formed and assembled in-house" },
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

{
    draft: false,
    id: "linear-rail-conversion",
    title: "X-Axis Linear Rail Conversion — CNC Plasma Table",
    year: "2026",
    category: "Mechanical",
    status: "In Service",
    blurb: "Converted the X-axis of a Langmuir CrossFire XR plasma table from a hand-preloaded ball-bearing carriage to 20 mm profiled linear rail, with a machined aluminum cantilever bracket sized by hand calculation from measured Z-axis and cableway loads — designed and installed for AFNY Specialties through Pulsar Designs.",
    highlights: [
      "Reacted the cantilever moment as a force couple across two HGH20CA blocks at 78.7 mm centers — the minimum achievable spacing, with 2 mm clearance between block bodies.",
      "In continuous production service since May 2026 with no re-adjustment required — replacing a carriage that needed preload correction on a recurring basis.",
    ],
    tags: ["Mechanical Design", "CNC Plasma", "SolidWorks", "Linear Rail Systems"],
    image: "images/linear-rail-card.jpg",
    links: {
      github: "",
      writeup: "",
      demo: "",
    },

    /* ---- detail page ---- */
    gallery: [
      { src: "", caption: "" },
      { src: "", caption: "" },
      { src: "", caption: "" },
    ],

    problem: "The X-axis on AFNY's Langmuir CrossFire XR rides on a hand-preloaded ball bearing carriage. Preload is set by rotating eccentric adjusters by feel and locking them with flange nuts, so there is no repeatable reference and no way to return to a known setting.\n\nOperating the machine through a Florida year, motion was smooth and consistent at shop temperatures around 85 F. As temperatures dropped near 30 F in winter, the X-axis became sticky and sporadic, and the carriage required repeated preload correction to keep cutting.\n\nThe mechanism was never fully isolated. Bearing grease stiffens substantially near freezing, the preload had been set at summer temperature with little margin, and the formed steel tube varies enough along its length that preload already changes with carriage position. Any of these could dominate, and separating them would have required instrumentation testing the shop had no reason to fund.\n\nWhat all three share is a dependence on preload set by hand. A profiled linear rail sets preload by machined geometry and a specified preload class instead, which removes that dependence regardless of which contributor was largest.",

    approach: "Converted the X-axis to HGR20 profile rail with two HGH20CA carriage blocks, and designed a two-part bracket to carry the existing Z-axis assembly and cableway off the new carriage.\n\nThe cantilever moment is reacted as a force couple across the two blocks rather than absorbed by a single block in moment loading, which is the weak direction for a profiled rail block. The available envelope set the block spacing at 78.7 mm centers, leaving 2 mm between block bodies, the minimum achievable for this block size. That is a stiffness compromise, accepted because the applied loads are small.\n\nLoads were measured rather than estimated: 2.58 kg for the Z-axis assembly and 2.27 kg for the cableway, weighed separately because they act at different moment arms. Statics gave a root moment of 1.974 N·m, and beam bending with a stress concentration factor at the fillet gave a peak stress of 3.316 MPa against 6061-T6 yield, for a factor of safety of 83.2. Block capacity was never a constraint; the couple force is roughly 24.74 N per block against a 27.76 kN static rating.\n\nThe assembly was FDM printed in PETG with heat-set threaded inserts and fit-checked on the machine before release for machining. The printed article was then left in service and ran production for roughly two months, validating the geometry, load path, and rail mounting under real cutting loads before committing to billet.\n\nRail mounting holes were drilled fresh rather than reusing the OEM pattern. A 3D printed jig positioned and held the rail across the full gantry length, and the rail's own mounting holes were then used as the drill template, center punched, drilled, and tapped in place. Locating from the rail itself removes transfer error from hole position, which mattered because two blocks at 78.7 mm centers are rigidly linked and cannot accommodate a rail that wanders across the span.\n\nThe carriage bracket was machined from solid 5 in stock with an integral gusset rather than fabricated, which avoids weld distortion at the interface mounting to the blocks.",

    result: "The PETG prototype ran production for roughly two months before visible deflection appeared at the PD-PC1 to PD-PC2 joint, where the 0.25 in section could not hold the cantilever moment under sustained load at shop temperature. Cut quality never degraded visually. It was replaced on the expectation that creep would continue through a Florida summer rather than on any observed loss of performance.\n\nThe machined 6061-T6 parts were installed in May 2026 using the same geometry, and the machine has run in production since with no preload correction, replacing a carriage that had needed adjustment on a recurring basis.\n\nCut quality has held through a Florida summer with no observed change. The cold weather behavior that prompted the conversion cannot be verified until winter, and that check is still outstanding.",

    lessons: [
      "Released the drawings with dimensional tolerancing only. Applying GD&T would have controlled the relationships that actually matter here: perpendicularity between the carriage and upright mounting faces, and flatness on the block mounting surface. Two carriage blocks at 78.7 mm centers are rigidly linked and can't accommodate an out-of-flat mount.",
      "The PETG prototype showed visible deflection at the PD-PC1 to PD-PC2 joint within the first month, where the 0.25 in section could not hold the cantilever moment under sustained load at shop temperature. Cut quality never degraded visually, and the part was replaced on the expectation that creep would continue through a Florida summer rather than on any observed loss of performance. The same geometry in 6061-T6 has held since. Static load capacity and long-term dimensional stability are different requirements, and a printed article can satisfy the first while failing the second.",
    ],

    specs: [
      { k: "Machine", v: "Langmuir CrossFire XR, X-axis" },
      { k: "Linear guide", v: "HGR20 profile rail, 1400 mm" },
      { k: "Carriage", v: "2 × HGH20CA blocks, 78.7 mm center" },
      { k: "Block spacing", v: "2 mm clearance between bodies (minimum achievable)" },
	  { k: "Rail mounting", v: "Drilled to 60 mm pitch, M5 hardware" },
	  { k: "Carriage bracket", v: "6061-T6, machined from solid, PD-PC1" },
	  { k: "Upright", v: "6061-T6, 0.25 in plate, PD-PC2" },
      { k: "Applied load", v: "25.31 N Z-Axis, 22.27 N cableway assembly (measured)" },
      { k: "Root moment", v: "1.974 N·m" },
      { k: "Peak stress", v: "1.66 MPa bending, vertical leg" },
      { k: "Analysis", v: "Hand calculation, statics and beam bending" },
      { k: "Installed", v: "May 2026" },
      { k: "Status", v: "In production service" },
    ],

    files: [
      { label: "Sizing calculations (PDF)",     url: "" },
      { label: "Drawing set (Rev 3)", request: true},
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
    org: "University of Central Florida",
    facts: [{k: "Expected Graduation:", v: "May 2028"},
            {k: "GPA:", v: "3.85 / 4.00"},
            ],
    detail: "Relevant coursework: Differential Equations, Physics II with lab, Statics, Solid Mechanics, Dynamics, Thermodynamics, Programming with Python and C.",
  },
  {
    period: "2025 — Present",
    title: "Founder / Mechanical Design",
    org: "Pulsar Designs LLC",
    facts: [],
    detail: "Independent mechanical design and fabrication services. Retained by AFNY Specialties following full-time employment for CNC equipment upgrades and design work.",
  },
  {
    period: "2024 — 2025",
    title: "Associate of Arts",
    org: "State College of Florida",
    facts: [{k: "GPA:", v: "3.82 / 4.00"},
            {k: "President's List:", v: "Fall 2024, Spring/Fall 2025"},
           ],
    detail: "Completed the lower-division engineering sequence prior to transferring to UCF: Calculus I–III, Physics I with lab, and Chemistry. Recognized as Outstanding Student in American Sign Language, 2025.",
  },
  {
    period: "2020 — 2025",
    title: "Mechanical Design and Fabrication Technician",
    org: "AFNY Specialties",
    detail: "Carried hardware from concept through installation for off-highway and commercial platforms — remotely from 2020 to 2023 while on active duty, then on-site part-time through 2025 while completing an A.A. Designed SolidWorks assemblies ranging from single-piece brackets to 10–15 part assemblies and suspension hardware engineered for high-vibration duty, producing the BOMs, drawings, and assembly notes that supported the build. Fabrication ran alongside design, CNC plasma (SheetCAM), press brake forming, and standardized threading on a FlexArm system, which kept every design accountable to what the shop could actually produce.",
  },
  {
    period: "July 2017 — December 2023",
    title: "Fire Controlman — AEGIS",
    org: "United States Navy",
    detail: "Maintained and troubleshot MK 99 T-1348 Radar Transmitter and ACSSFC 400 Hz power systems aboard DDG-class ships, executing preventive and corrective maintenance to sustain operational readiness in high-tempo environments. Led and trained 10+ technicians on diagnostics, troubleshooting workflows, and procedure compliance. Previously held a DoD Secret Clearance (U.S. Navy, adjudicated 2017) through December 2023.",
  },
];
