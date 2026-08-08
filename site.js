/* ==================================================================
   site.js — the machinery that draws both pages from data.js.
   You do not need to edit this file.
   ================================================================== */

(function () {
  "use strict";

  /* ---------- helpers ---------- */
  const $ = id => document.getElementById(id);
  const esc = s => String(s ?? "").replace(/[&<>"']/g, c =>
    ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]));
  const initials = t => String(t).split(/\s+/).filter(Boolean).slice(0,2)
    .map(w => w[0]).join("").toUpperCase();

  // Turn a title into a URL-safe id, so a project without an explicit
  // `id` still gets a working page.
  const slug = t => String(t).toLowerCase().trim()
    .replace(/[^\w\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-");
  const pid = p => p.id || slug(p.title);

  // Does this project have enough extra content to justify its own page?
  const hasDetail = p =>
    !!(p.problem || p.approach || p.result ||
       (p.lessons && p.lessons.length) ||
       (p.specs && p.specs.length) ||
       (p.files && p.files.length) ||
       (p.gallery && p.gallery.length));

  // Where a project's page lives.
  // Always the query form at runtime — it works everywhere, with or
  // without the build step, locally or live. The build rewrites these
  // to clean /projects/<id>/ URLs in the saved HTML, and both keep
  // working, so nothing can 404 if a build hasn't run.
  const projUrl = p => "project.html?id=" + encodeURIComponent(pid(p));

  // Projects marked `draft: true` are hidden from the home page.
  // They stay reachable by direct link so you can preview them.
  const live = () => PROJECTS.filter(p => !p.draft);

  // Path back to the home page from wherever this page is.
  const home = () => /\/projects\/[^\/]+\/?$/.test(location.pathname)
    ? "../../index.html" : "index.html";

  // Contact wording lives in contact.js. Missing file or missing field
  // falls back to data.js, then to a sensible default.
  const C = (k, dflt) => {
    if (typeof CONTACT !== "undefined" && CONTACT && CONTACT[k]) return CONTACT[k];
    if (SITE && SITE[k]) return SITE[k];
    return dflt;
  };

  // One-tap email: prefilled subject so a reply lands in the right thread.
  const mailto = () => "mailto:" + SITE.email + "?subject="
    + encodeURIComponent(C("emailSubject", "Internship Opportunity"));

  const LINK_LABELS = { github:"Code", writeup:"Write-up", demo:"Demo",
                        video:"Video", cad:"CAD files", paper:"Paper" };

  function extLinks(links){
    if (!links) return [];
    return Object.entries(links).filter(([,u]) => u)
      .map(([k,u]) => '<a href="'+esc(u)+'" target="_blank" rel="noopener">'
        + (LINK_LABELS[k] || esc(k)) + ' ↗</a>');
  }

  function statusClass(s){
    const t = String(s||"").toLowerCase();
    if (t.includes("complete") || t.includes("delivered") || t.includes("shipped")) return "done";
    if (/progress|design|research|ongoing|wip|build|test|phase|prototyp/.test(t)) return "prog";
    return "";
  }

  // Highlight any <FILL IN ...> placeholder left in the content, so it's
  // impossible to miss on the page. Delete the marker and it disappears.
  const markFill = h => String(h).replace(/&lt;FILL IN[^&]*?&gt;/g,
    m => '<span class="fill">' + m + '</span>');

  function badges(p){
    return (p.year ? '<span class="yr">'+esc(p.year)+'</span>' : "")
      + (p.category ? '<span class="badge">'+esc(p.category)+'</span>' : "")
      + (p.status ? '<span class="badge '+statusClass(p.status)+'">'+esc(p.status)+'</span>' : "");
  }

  function tagRow(tags){
    return (tags && tags.length)
      ? '<div class="tags">'+tags.map(t => '<span class="tag">'+esc(t)+'</span>').join("")+'</div>'
      : "";
  }

  function thumb(p){
    return p.image
      ? '<img src="'+esc(p.image)+'" alt="'+esc(p.title)+'" loading="lazy"'
        + ' onerror="this.parentNode.innerHTML=\'<div class=&quot;gen&quot;>'
        + esc(initials(p.title))+'</div>\'">'
      : '<div class="gen">'+esc(initials(p.title))+'</div>';
  }

  /* ---------- shared chrome: brand, nav, footer ---------- */
  function chrome(){
    const brand = $("brand");
    // SITE.brand wins if you set it; otherwise use your first name.
    if (brand) brand.innerHTML =
      esc(SITE.brand || String(SITE.name).split(" ")[0]) + '<span>.</span>';
    const fn = $("f-name");
    if (fn) fn.textContent = "© " + new Date().getFullYear() + " " + SITE.name;

    const nl = $("navlinks"), mb = $("menubtn");
    if (nl && mb) {
      mb.addEventListener("click", () => nl.classList.toggle("open"));
      nl.addEventListener("click", e => {
        if (e.target.tagName === "A") nl.classList.remove("open");
      });
    }
  }

  /* ---------- scroll reveal ---------- */
  function reveal(){
    const els = document.querySelectorAll(".rv");
    if (!els.length) return;
    if (!("IntersectionObserver" in window)) {
      els.forEach(e => e.classList.add("in"));
      return;
    }
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add("in"); obs.unobserve(e.target); }
      });
    }, { threshold: .08 });
    els.forEach(e => obs.observe(e));
  }

  /* ==================================================================
     HOME PAGE
     ================================================================== */
  function renderHome(){
    document.title = SITE.name + " — Engineering Portfolio";
    $("h-name").textContent    = SITE.name;
    $("h-role").textContent    = SITE.role;
    $("h-tagline").textContent = SITE.tagline;

    const meta = [];
    if (SITE.location) meta.push("◎ " + esc(SITE.location));
    if (SITE.email)    meta.push("✉ " + esc(SITE.email));
    meta.push("● Available for internships");
    $("h-meta").innerHTML = meta.map(m => "<span>"+m+"</span>").join("");

    let cta = '<a class="btn primary" href="#projects">View projects</a>';
    if (SITE.resumeUrl) cta += '<a class="btn" href="'+esc(SITE.resumeUrl)+'" target="_blank" rel="noopener">Résumé ↗</a>';
    if (SITE.github)    cta += '<a class="btn" href="'+esc(SITE.github)+'" target="_blank" rel="noopener">GitHub ↗</a>';
    if (SITE.linkedin)  cta += '<a class="btn" href="'+esc(SITE.linkedin)+'" target="_blank" rel="noopener">LinkedIn ↗</a>';
    $("h-cta").innerHTML = cta;

    const ch = $("c-head"), cb = $("c-blurb");
    if (ch && C("heading", "")) ch.textContent = C("heading", "");
    if (cb && C("blurb", ""))   cb.textContent = C("blurb", "");

    $("c-cta").innerHTML =
      (SITE.email ? '<a class="btn primary" href="'+esc(mailto())+'">Email me</a>' : "")
      + (SITE.linkedin ? '<a class="btn" href="'+esc(SITE.linkedin)+'" target="_blank" rel="noopener">LinkedIn ↗</a>' : "")
      + (SITE.github ? '<a class="btn" href="'+esc(SITE.github)+'" target="_blank" rel="noopener">GitHub ↗</a>' : "");

    /* about */
    const LIVE = live();
    $("about-text").innerHTML = (SITE.about||[]).map(p => "<p>"+esc(p)+"</p>").join("");
    const glanceValue = v => {
      if (v === "auto") return esc(LIVE.length + " documented");
      if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return '<a href="mailto:'+esc(v)+'">'+esc(v)+'</a>';
      if (/^https?:\/\//.test(v)) return '<a href="'+esc(v)+'" target="_blank" rel="noopener">'
        + esc(v.replace(/^https?:\/\/(www\.)?/,"").replace(/\/$/,"")) + ' ↗</a>';
      return esc(v);
    };
    $("about-facts").innerHTML = (typeof GLANCE !== "undefined" ? GLANCE : [])
      .filter(r => r && r.label && r.value)
      .map(r => '<div class="kv"><span>'+esc(r.label)+'</span><span>'+glanceValue(r.value)+'</span></div>')
      .join("");

    /* filters */
    const cats = ["All", ...new Set(LIVE.map(p => p.category).filter(Boolean))];
    let active = "All";
    $("filters").innerHTML = cats.map(c =>
      '<button class="chip'+(c===active?" on":"")+'" data-cat="'+esc(c)+'">'+esc(c)
      + ' <span style="opacity:.55">'
      + (c==="All" ? LIVE.length : LIVE.filter(p => p.category===c).length)
      + '</span></button>').join("");

    function card(p){
      const detail = hasDetail(p);
      const href = projUrl(p);
      const links = extLinks(p.links);
      if (detail) links.push('<a class="more" href="'+href+'">Full write-up →</a>');
      return '<article class="proj'+(detail?" clickable":"")+'">'
        + (detail ? '<a class="cardlink" href="'+href+'" aria-label="'+esc(p.title)+'"></a>' : "")
        + '<div class="thumb">'+thumb(p)+'</div>'
        + '<div class="pbody">'
        +   '<div class="ptop">'+badges(p)+'</div>'
        +   '<h3>'+esc(p.title)+'</h3>'
        +   (p.blurb ? '<p class="blurb">'+esc(p.blurb)+'</p>' : "")
        +   (p.highlights && p.highlights.length
              ? '<ul class="hl">'+p.highlights.map(h => '<li>'+esc(h)+'</li>').join("")+'</ul>' : "")
        +   tagRow(p.tags)
        +   (links.length ? '<div class="plinks">'+links.join("")+'</div>' : "")
        + '</div></article>';
    }

    function draw(){
      const list = active === "All" ? LIVE : LIVE.filter(p => p.category === active);
      $("grid").innerHTML = list.length
        ? list.map(card).join("")
        : '<p class="empty">No projects in this category yet.</p>';
    }
    draw();

    $("filters").addEventListener("click", e => {
      const b = e.target.closest(".chip");
      if (!b) return;
      active = b.dataset.cat;
      document.querySelectorAll(".chip").forEach(c =>
        c.classList.toggle("on", c.dataset.cat === active));
      draw();
    });

    /* skills + timeline */
    $("skills-grid").innerHTML = SKILLS.map(s =>
      '<div class="card"><h4>'+esc(s.group)+'</h4><ul>'
      + s.items.map(i => "<li>"+esc(i)+"</li>").join("") + "</ul></div>").join("");

    const tlDetail = d => {
      if (!d) return "";
      // A single string becomes a paragraph; a list becomes bullets.
      if (Array.isArray(d))
        return '<ul class="det bullets">'
          + d.map(x => '<li>'+markFill(esc(x))+'</li>').join("") + '</ul>';
      return '<div class="det">'+markFill(esc(d))+'</div>';
    };
    // Organisation and facts share one subheading line, separated by dots:
    //   University of Central Florida · Graduating May 2028 · GPA 3.82 / 4.00
    const tlSub = t => {
      const parts = [];
      if (t.org) parts.push(esc(t.org));
      (t.facts || []).filter(x => x && x.k).forEach(x =>
        parts.push('<span class="f">' + esc(x.k)
          + (x.v ? " " + markFill(esc(x.v)) : "") + '</span>'));
      return parts.length
        ? '<div class="org">' + parts.join('<i class="sep">·</i>') + '</div>'
        : "";
    };

    $("tl").innerHTML = TIMELINE.map(t =>
      '<div class="tl-item">'
      + '<div class="per">'+esc(t.period)+'</div>'
      + '<h3>'+esc(t.title)+'</h3>'
      + tlSub(t)
      + tlDetail(t.detail)
      + '</div>').join("");

    /* active nav link on scroll */
    const links = [...document.querySelectorAll(".navlinks a")];
    if ("IntersectionObserver" in window) {
      const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (!e.isIntersecting) return;
          links.forEach(a => a.classList.toggle("active",
            a.getAttribute("href") === "#" + e.target.id));
        });
      }, { rootMargin: "-45% 0px -50% 0px" });
      document.querySelectorAll("section[id]").forEach(s => obs.observe(s));
    }
  }

  /* ==================================================================
     PROJECT DETAIL PAGE
     ================================================================== */
  function renderProject(){
    let wanted = new URLSearchParams(location.search).get("id");
    if (!wanted) {
      const m = location.pathname.match(/\/projects\/([^\/]+)\/?$/);
      if (m) wanted = decodeURIComponent(m[1]);
    }
    const p = PROJECTS.find(x => pid(x) === wanted) || null;

    if (!p) {
      document.title = "Project not found — " + SITE.name;
      $("p-root").innerHTML =
        '<div class="nf"><h1>Project not found</h1>'
        + '<p>That link doesn\'t match any project on this site. It may have been renamed.</p>'
        + '<a class="btn primary" href="'+home()+'#projects">See all projects</a></div>';
      return;
    }

    document.title = p.title + " — " + SITE.name;
    const setMeta = (sel, val) => {
      const el = document.querySelector(sel);
      if (el && val) el.setAttribute("content", val);
    };
    setMeta('meta[name="description"]', p.blurb);
    setMeta('meta[property="og:description"]', p.blurb);
    setMeta('meta[property="og:title"]', p.title + " — " + SITE.name);

    /* --- draft notice --- */
    $("p-draft").innerHTML = p.draft
      ? '<div class="draftbar"><strong>Draft — not listed on the site.</strong> '
        + 'This page is only reachable by direct link. Remove <code>draft: true</code> '
        + 'in data.js to publish it.</div>'
      : "";

    /* --- hero --- */
    const heroLinks = extLinks(p.links)
      .map(a => a.replace('<a ', '<a class="btn" '));
    $("p-hero").innerHTML =
      '<a class="back" href="'+home()+'#projects">← All projects</a>'
      + '<div class="ptop">'+badges(p)+'</div>'
      + '<h1>'+esc(p.title)+'</h1>'
      + (p.blurb ? '<p class="lede">'+markFill(esc(p.blurb))+'</p>' : "")
      + tagRow(p.tags)
      + (heroLinks.length ? '<div class="cta">'+heroLinks.join("")+'</div>' : "");

    /* --- gallery --- */
    const gal = (p.gallery || []).filter(g => g && (g.src || g.caption));
    $("p-gallery").innerHTML = gal.length
      ? '<div class="gal'+(gal.length > 1 ? " multi" : "")+'">'
        + gal.map(g =>
            '<figure class="shot">'
            + (g.src
                ? '<img src="'+esc(g.src)+'" alt="'+esc(g.caption || p.title)+'" loading="lazy">'
                : '<div class="ph">IMAGE PENDING<br>'+markFill(esc(g.caption || ""))+'</div>')
            + (g.caption && g.src ? '<figcaption class="cap">'+markFill(esc(g.caption))+'</figcaption>' : "")
            + '</figure>').join("")
        + '</div>'
      : "";

    /* --- write-up --- */
    const para = t => String(t).split(/\n{2,}/).map(x => '<p>'+markFill(esc(x))+'</p>').join("");
    let body = "";
    if (p.problem)  body += '<section><h2>The problem</h2>'+para(p.problem)+'</section>';
    if (p.approach) body += '<section><h2>Approach</h2>'+para(p.approach)+'</section>';
    if (p.result)   body += '<section><h2>Result</h2>'+para(p.result)+'</section>';
    if (p.lessons && p.lessons.length)
      body += '<section><h2>What I\'d do differently</h2><ul class="lessons">'
        + p.lessons.map(l => '<li>'+markFill(esc(l))+'</li>').join("") + '</ul></section>';
    if (!body && !gal.length)
      body = '<section><p>Full write-up coming soon.</p></section>';
    $("p-body").innerHTML = body;

    /* --- sidebar: specs + files --- */
    let side = "";
    if (p.specs && p.specs.length)
      side += '<div class="card specs"><h4>Specifications</h4>'
        + p.specs.filter(s => s && s.k).map(s =>
            '<div class="kv"><span>'+esc(s.k)+'</span><span>'+markFill(esc(s.v))+'</span></div>').join("")
        + '</div>';
    // A file row is one of three things:
    //   url          -> a real download
    //   request:true -> a prefilled email asking you for it (nothing published)
    //   neither      -> greyed out, marked "soon"
    const fileRow = f => {
      if (f.request) {
        // Wording comes from SITE.requestSubject / SITE.requestBody in
        // data.js if set. {file}, {project} and {me} are filled in.
        const fill = t => String(t)
          .replace(/\{file\}/g, f.label)
          .replace(/\{project\}/g, p.title)
          .replace(/\{me\}/g, SITE.name);

        const subject = fill(C("requestSubject",
          "Access request — {project}: {file}"));
        const body = fill(C("requestBody", [
          "Hi " + String(SITE.name).split(" ")[0] + ",",
          "",
          "I'd like to request access to:",
          "  {file}",
          "  Project: {project}",
          "",
          "A little about me and what I'm evaluating it for:",
          "",
          "",
          "Thanks,",
        ].join("\n")));

        const href = "mailto:" + SITE.email
          + "?subject=" + encodeURIComponent(subject)
          + "&body=" + encodeURIComponent(body);
        return '<a class="req" href="' + esc(href) + '"><span>' + esc(f.label)
          + '</span><span class="arr">request →</span></a>';
      }
      if (f.url) {
        return '<a href="'+esc(f.url)+'" target="_blank" rel="noopener"><span>'
          + esc(f.label)+'</span><span class="arr">↓</span></a>';
      }
      return '<a class="soon"><span>'+esc(f.label)+'</span><span class="arr">soon</span></a>';
    };

    if (p.files && p.files.length)
      side += '<div class="card"><h4>Files</h4><ul class="files">'
        + p.files.filter(f => f && f.label).map(f => '<li>'+fileRow(f)+'</li>').join("")
        + '</ul></div>';
    $("p-side").innerHTML = side;

    /* --- prev / next --- */
    const LIVE = live();
    const li = LIVE.findIndex(x => pid(x) === wanted);
    const prev = li > -1 ? LIVE[li - 1] : null;
    const next = li > -1 ? LIVE[li + 1] : null;
    const cell = (q, dir, cls) => q
      ? '<a class="'+cls+'" href="'+projUrl(q)+'">'
        + '<div class="dir">'+dir+'</div><div class="t">'+esc(q.title)+'</div></a>'
      : '<span></span>';
    $("p-nav").innerHTML =
      cell(prev, "← Newer project", "prev") + cell(next, "Older project →", "next");
  }

  /* ---------- boot ---------- */
  function start(){
    if (typeof SITE === "undefined" || typeof PROJECTS === "undefined") {
      document.body.insertAdjacentHTML("afterbegin",
        '<pre style="color:#ff6b6b;padding:24px;font-family:monospace">'
        + 'data.js did not load.\n\nCheck that data.js sits next to this page,\n'
        + 'and that its punctuation is intact (a missing comma or bracket\n'
        + 'stops the whole file).</pre>');
      return;
    }
    chrome();
    if ($("grid"))   renderHome();
    if ($("p-root")) renderProject();
    reveal();
  }

  if (document.readyState === "loading")
    document.addEventListener("DOMContentLoaded", start);
  else start();
})();
