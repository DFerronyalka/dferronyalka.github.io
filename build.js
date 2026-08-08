/* ==================================================================
   build.js — turns the JavaScript-driven site into plain HTML files.

   You never run this yourself. GitHub runs it automatically every
   time you commit (see .github/workflows/deploy.yml).

   What it does: loads each page in a headless browser, lets site.js
   draw the content exactly as a visitor would see it, then saves the
   finished HTML. The result is a site whose text is readable by
   search engines, AI agents and anything else that doesn't run
   JavaScript — while the live pages still work normally on top.

   Because it reuses site.js rather than reimplementing it, the static
   output can never drift from what the browser shows.
   ================================================================== */

const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

const SRC = __dirname;
const OUT = path.join(SRC, "dist");
const ORIGIN = "https://example.invalid";   // only used to resolve URLs

/* files and folders that should not be published */
const SKIP = new Set([
  "dist", "node_modules", "build.js", "package.json", "package-lock.json",
  ".git", ".github", "README.md",
]);

/* ---------- copy everything across ---------- */
function copyInto(from, to) {
  fs.mkdirSync(to, { recursive: true });
  for (const name of fs.readdirSync(from)) {
    if (from === SRC && SKIP.has(name)) continue;
    const src = path.join(from, name);
    const dst = path.join(to, name);
    if (fs.statSync(src).isDirectory()) copyInto(src, dst);
    else fs.copyFileSync(src, dst);
  }
}

/* ---------- render one page ---------- */
const dataJs = fs.readFileSync(path.join(SRC, "data.js"), "utf8");
const siteJs = fs.readFileSync(path.join(SRC, "site.js"), "utf8");
// contact.js is optional — the site falls back to defaults without it.
const contactJs = fs.existsSync(path.join(SRC, "contact.js"))
  ? fs.readFileSync(path.join(SRC, "contact.js"), "utf8") : "";

async function render(templateFile, url) {
  const html = fs.readFileSync(path.join(SRC, templateFile), "utf8");
  const dom = new JSDOM(html, { url, runScripts: "outside-only" });
  const w = dom.window;

  // Wait until the document has finished parsing, so site.js draws
  // immediately instead of queueing itself for an event we've missed.
  if (w.document.readyState !== "complete") {
    await new Promise(res => w.addEventListener("load", res, { once: true }));
  }

  // Run the site's own code against the page, exactly as a browser would.
  // External <script> tags are not fetched, so analytics stays out of the
  // saved output — the tag itself is still in the HTML for real visitors.
  // Both files must run in ONE eval: data.js uses `const`, which would
  // otherwise be scoped to its own eval and invisible to site.js.
  w.eval(dataJs + "\n;\n" + contactJs + "\n;\n" + siteJs);

  if (!w.document.getElementById("brand").textContent.trim()) {
    throw new Error("Nothing rendered for " + templateFile + " — check data.js");
  }
  return { dom, html: cleanUrls(dom.serialize()), window: w };
}

/* Rewrite project.html?id=x links to real folder URLs, which is where
   the build writes each page. The query form still works if anything
   is missed, so this can only improve the links, never break them. */
function cleanUrls(html) {
  return html.replace(/href="project\.html\?id=([^"]+)"/g,
    (_, id) => 'href="projects/' + id + '/"');
}

/* ---------- read the project list ---------- */
function projects() {
  const sandbox = {};
  new (require("vm").Script)(dataJs + ";this.__p = PROJECTS;").runInNewContext(sandbox);
  return sandbox.__p || [];
}

const slug = t => String(t).toLowerCase().trim()
  .replace(/[^\w\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-");
const pid = p => p.id || slug(p.title);

/* ---------- build ---------- */
fs.rmSync(OUT, { recursive: true, force: true });
copyInto(SRC, OUT);

let pages = 0;

async function main() {

/* home page */
{
  const { html } = await render("index.html", ORIGIN + "/");
  fs.writeFileSync(path.join(OUT, "index.html"), html);
  pages++;
  console.log("built  /");
}

/* one real folder per published project */
const list = projects().filter(p => !p.draft);
for (const p of list) {
  const id = pid(p);
  const dir = path.join(OUT, "projects", id);
  const url = ORIGIN + "/projects/" + encodeURIComponent(id) + "/";
  const { window: w } = await render("project.html", url);

  // The page now sits two folders deep, so point relative links at the root.
  const doc = w.document;
  if (!doc.querySelector("base")) {
    const base = doc.createElement("base");
    base.setAttribute("href", "/");
    doc.head.insertBefore(base, doc.head.firstChild);
  }

  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"),
    "<!DOCTYPE html>\n" + cleanUrls(w.document.documentElement.outerHTML));
  pages++;
  console.log("built  /projects/" + id + "/");
}

/* a plain sitemap so crawlers find every page */
fs.writeFileSync(path.join(OUT, "sitemap.txt"),
  ["/", ...list.map(p => "/projects/" + pid(p) + "/")].join("\n") + "\n");

console.log(`\n${pages} pages written to dist/`);
}

main().catch(e => { console.error("BUILD FAILED:", e.message); process.exit(1); });
