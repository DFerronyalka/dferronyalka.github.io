/* ==================================================================
   components.js — the "Bracketry & Mechanisms" collection.

   One card on the home page, one gallery page, and a "Component
   detail" box on any project page whose parts are listed here.

   Nothing else needs editing. data.js and contact.js are untouched.

   ── THE FIVE THINGS YOU EDIT ──
     1. HEADER      the title, blurb and tags for the card and page
     2. PROCESSES   the filter chips across the top
     3. PROGRAMS    which project each part belongs to
     4. NUMBERING   your ref numbers (SM-014 etc.)
     5. ITEMS       the parts themselves

   Every count on the site is DERIVED from the items list — the card's
   "42 components", the chip counts, the stats bar, and the "6 parts"
   on a project page. Add or delete an item and every number updates
   itself. Never type a count by hand.

   Rules: text in "quotes", every line ends with a comma, don't delete
   the { } or [ ] brackets.
   ================================================================== */

const BRACKETRY = {

  /* ---------- 1. HEADER ------------------------------------------
     Set enabled: false to hide the whole thing from the site without
     deleting anything.                                              */

  enabled: true,

  id:       "bracketry",              // the page address: components.html
  title:    "Bracketry & Mechanisms",
  year:     "2021 — 2026",
  category: "Component Log",          // its chip in the Projects filter row
  status:   "Ongoing",

  blurb: "Brackets, mounts, fixtures and one-off components designed and released to fabrication across multiple programs — grouped by manufacturing process.",

  // 2–4 bullets on the home page card. {count} becomes the live number.
  highlights: [
    "{count} components released to fabrication since 2021",
    "Sheet metal, machined, weldment and printed tooling",
    "Each entry states material, process and the constraint it solved",
  ],

  // One or two sentences at the top of the collection page.
  intro: "Each entry states what the part does, what it is made from, how it was made, and the one constraint that drove the design. Parts belonging to a larger project link back to that project's page.",

  tags: ["SolidWorks", "Sheet Metal", "GD&T", "DFM", "Press Brake", "Weldments"],

  // How many tiles show before the "show all" button. Set to 0 for no limit.
  gridCap: 12,


  /* ---------- 2. PROCESSES ---------------------------------------
     The filter chips, in this order. A process with no parts is
     hidden automatically, so you can list ones you haven't used yet.
     Delete a line to drop it; add a line to introduce a new one.     */

  processes: [
    "Sheet metal",
    "Machined",
    "Weldment",
    "Printed tooling",
    "Hardware & fastening",
  ],


  /* ---------- 3. PROGRAMS ----------------------------------------
     A program is the larger project a part belongs to.

     `id`    must match a project's id in data.js for the link to work
             (e.g. "dta-1-drivetrain"). Use "" for programs that have
             no project page yet — the name still shows, just no link.
     `name`  what appears on the tile.

     Delete a program you don't use. Parts referencing a program that
     isn't listed here still appear; they just show no program line.   */

  programs: [
    { id: "dta-1-drivetrain",    name: "DTA-1 Drivetrain" },
    { id: "wheel-light-mounting", name: "Wheel Light System" },
    { id: "",                    name: "Tube Chassis" },
    { id: "",                    name: "Swing-Out Tire Carrier" },
    { id: "",                    name: "Shop & Tooling" },
  ],


  /* ---------- 4 & 5. NUMBERING AND ITEMS -------------------------
     Copy one whole { ... }, block to add a part. Newest first.

       ref       your drawing or part number. Shown on the tile and in
                 the "Component detail" box on the project page.
                 Any scheme works — these are placeholders.
       name      what the part is
       material  "0.190 in HRPO"
       process   how it was actually made: "Laser + press brake"
       group     must match one of the PROCESSES above (drives the chips)
       program   must match a PROGRAMS name above (drives the link)
       image     "images/components/sm-014.jpg" — or "" for a placeholder
       note      ONE sentence: what it does, the constraint solved, and
                 a number. This format is the whole point of the page.

     ⚠ Everything below is PLACEHOLDER TEXT with invented numbers.
       Replace it before this goes live.                              */

  items: [

    {
      ref: "SM-014",
      name: "PLACEHOLDER — Shock Tower Gusset",
      material: "0.190 in HRPO",
      process: "Laser + press brake",
      group: "Sheet metal",
      program: "Tube Chassis",
      image: "",
      note: "<FILL IN: what it does, the constraint it solved, and one number — e.g. reacts 4,200 lbf bump load into two frame tubes; bend relief set to clear existing weld beads>",
    },

    {
      ref: "MC-006",
      name: "PLACEHOLDER — Pivot Spindle Housing",
      material: "6061-T6 billet",
      process: "3-axis mill",
      group: "Machined",
      program: "Swing-Out Tire Carrier",
      image: "",
      note: "<FILL IN: one sentence — function, constraint, number>",
    },

    {
      ref: "WD-003",
      name: "PLACEHOLDER — Swing Arm Weldment",
      material: "1.75 in x 0.120 DOM",
      process: "TIG, fixtured",
      group: "Weldment",
      program: "Swing-Out Tire Carrier",
      image: "",
      note: "<FILL IN: one sentence — function, constraint, number>",
    },

    {
      ref: "PR-002",
      name: "PLACEHOLDER — Bearing Press Guide",
      material: "PETG, FDM",
      process: "3D printed",
      group: "Printed tooling",
      program: "Shop & Tooling",
      image: "",
      note: "<FILL IN: one sentence — function, constraint, number>",
    },

    {
      ref: "SM-009",
      name: "PLACEHOLDER — Light Pod Bracket",
      material: "0.135 in A36",
      process: "Plasma + brake",
      group: "Sheet metal",
      program: "Wheel Light System",
      image: "",
      note: "<FILL IN: one sentence — function, constraint, number>",
    },

    {
      ref: "SM-002",
      name: "PLACEHOLDER — Sensor Standoff, Offset",
      material: "0.080 in 6061-T6",
      process: "Laser + brake",
      group: "Sheet metal",
      program: "DTA-1 Drivetrain",
      image: "",
      note: "<FILL IN: one sentence — function, constraint, number>",
    },

  ],
};
