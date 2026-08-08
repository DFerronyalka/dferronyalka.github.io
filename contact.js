/* ==================================================================
   contact.js — everything about how people get in touch with you.

   Split out of data.js to keep that file focused on your projects.
   Both pages load this. If you delete the file, the site still works
   and falls back to sensible defaults.
   ================================================================== */

const CONTACT = {

  /* ---- the Contact section at the bottom of the home page ---- */
  heading: "Let's build something",
  blurb:   "I'm seeking a Summer 2027 mechanical design or manufacturing internship — 12 consecutive weeks, full-time, onsite, and open to relocation anywhere in the U.S. Email is the fastest way to reach me.",

  /* ---- the "Email me" button ---- */
  emailSubject: "Internship Opportunity",

  /* ---- the "request →" email on gated files ----
     {file}    = the file's label, e.g. "Drawing set (Rev A)"
     {project} = the project title
     {me}      = your name
     \n is a line break. Each line ends with  + , to join them.       */

  requestSubject: "Access request — {project}: {file}",

  requestBody:
    "Hi Drake,\n\n" +
    "I'd like to request access to:\n" +
    "  Project: {project}\n\n" +
    "  {file}\n\n" +
    "A little about me and what I'm evaluating it for:\n\n\n" +
    "Thanks,",
};
