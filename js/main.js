/**
 * ══════════════════════════════════════════
 *  PORTFOLIO — main.js
 *  Requires: utils.js, constants.js, config.js
 * ══════════════════════════════════════════
 */

/* ─── Catppuccin accent palettes ──────── */
const PAL = {
  mocha:     ["#f5e0dc","#f2cdcd","#f5c2e7","#cba6f7","#f38ba8","#eba0ac","#fab387","#f9e2af","#a6e3a1","#94e2d5","#89dceb","#74c7ec","#89b4fa","#b4befe"],
  macchiato: ["#f4dbd6","#f0c6c6","#f5bde6","#c6a0f6","#ed8796","#ee99a0","#f5a97f","#eed49f","#a6da95","#8bd5ca","#91d7e3","#7dc4e4","#8aadf4","#b7bdf8"],
  frappe:    ["#f2d5cf","#eebebe","#f4b8e4","#ca9ee6","#e78284","#ea999c","#ef9f76","#e5c890","#a6d189","#81c8be","#99d1db","#85c1dc","#8caaee","#babbf1"],
  latte:     ["#dc8a78","#dd7878","#ea76cb","#8839ef","#d20f39","#e64553","#fe640b","#df8e1d","#40a02b","#179299","#04a5e5","#209fb5","#1e66f5","#7287fd"],
};

/* ─── Estado global ────────────────────── */
let theme = localStorage.getItem("portfolio_theme") || "mocha";

/* Apply saved theme on load */
el.setAttribute("data-theme", theme);
const savedAccent = storage.get("accent");
if (savedAccent) el.style.setProperty("--accent", savedAccent);

/* Apply saved language on load */
let currentLang = storage.get("lang", "pt");
el.setAttribute("lang", currentLang === "en" ? "en" : "pt-BR");

/* ─── Bilingual helper ─────────────────
   Resolve um valor que pode ser:
   - string simples → retorna a string
   - { pt, en }     → retorna a versão do idioma atual
──────────────────────────────────────── */
function t(val) {
  if (!val || typeof val !== "object") return val || "";
  return val[currentLang] || val.pt || "";
}

/* ─── SVG icons ───────────────────────── */
const ICON = {
  gh:  `<svg viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.44 9.8 8.21 11.39.6.11.82-.26.82-.57v-2.24c-3.01.55-3.8-.73-4.04-1.41-.13-.34-.72-1.41-1.23-1.7-.42-.22-1.02-.77-.01-.79.94-.01 1.62.87 1.85 1.23 1.08 1.82 2.8 1.3 3.49.99.11-.78.42-1.3.77-1.6-2.67-.3-5.46-1.33-5.46-5.93 0-1.3.47-2.38 1.23-3.22-.12-.3-.54-1.53.12-3.18 0 0 1.01-.31 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.54 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12.01 12.01 0 0 0 24 12C24 5.37 18.63 0 12 0z"/></svg>`,
  li:  `<svg viewBox="0 0 24 24"><path d="M20.45 20.45h-3.55V14.9c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.65H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.2 0 22.23 0z"/></svg>`,
  ml:  `<svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  ext: `<svg viewBox="0 0 24 24"><path d="M14 3v2h3.59L7.76 14.83l1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7z"/></svg>`,
  dl:  `<svg viewBox="0 0 24 24"><path d="M5 20h14v-2H5v2zm7-18v10.17l-3.59-3.58L7 10l5 5 5-5-1.41-1.41L13 12.17V2h-2z"/></svg>`,
};

/* ══════════════════════════════════════════
   HERO
══════════════════════════════════════════ */
$("heroName").textContent = C.name;
$("footerLeft").innerHTML = `<a href="${C.github}" target="_blank" rel="noopener">${X(C.name)}</a>`;
$("heroLinks").innerHTML  = `
  <a class="hero-link" href="${C.github}"   target="_blank" rel="noopener">${ICON.gh} GitHub</a>
  <span class="hero-sep">|</span>
  <a class="hero-link" href="${C.linkedin}" target="_blank" rel="noopener">${ICON.li} LinkedIn</a>
  <span class="hero-sep">|</span>
  <a class="hero-link" href="https://mail.google.com/mail/?view=cm&fs=1&to=${C.email}&subject=Olá João&body=Gostaria de conversar com você!" target="_blank" rel="noopener">${ICON.ml} <span class="lang-pt">Contato</span><span class="lang-en">Contact</span></a>`;

/* Bio — renderiza no idioma atual */
function renderBio() {
  $("heroBio").innerHTML = t(C.bio);
}
renderBio();

/* Resume button (nav) */
const resumeUrl = C.resume && C.resume !== "#" ? C.resume : null;
$("resumeBtn").addEventListener("click", () => {
  if (resumeUrl) {
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "curriculo_joao_pedro_serra.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
});
if (!resumeUrl) {
  $("resumeBtn").style.opacity = ".4";
  $("resumeBtn").style.pointerEvents = "none";
  $("resumeBtn").title = "Configure C.resume com o link do seu PDF";
}

/* ══════════════════════════════════════════
   SKILLS
══════════════════════════════════════════ */
$("skillsGrid").innerHTML = C.skills.map(s => {
  const base = `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${s.icon}`;
  const src  = `${base}/${s.icon}-${s.dv}.svg`;
  const fb   = `${base}/${s.icon}-plain.svg`;
  return `<span class="skill-pill">
    <img src="${src}" alt="${X(s.name)}" loading="lazy" onerror="this.onerror=null;this.src='${fb}'">
    ${X(s.name)}
  </span>`;
}).join("");

/* ══════════════════════════════════════════
   PROJECT CARDS
══════════════════════════════════════════ */
function tagColor(str) {
  const pal = PAL[theme];
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
  const hex = pal[h % pal.length];
  const r = parseInt(hex.slice(1,3),16);
  const g = parseInt(hex.slice(3,5),16);
  const b = parseInt(hex.slice(5,7),16);
  return { color: hex, bg: `rgba(${r},${g},${b},0.13)` };
}

function buildCard(p, projIdx) {
  const av = `https://github.com/${p.user}.png?size=48`;
  const avHtml = `<img class="pcard-av" src="${av}" alt="@${X(p.user)}" loading="lazy"
    onerror="this.outerHTML='<span class=\\'pcard-av-fallback\\'>A</span>'">`;

  /*
   * termDesc → texto dentro do terminal (bloco superior)
   * desc     → texto na área de info abaixo do terminal
   * Ambos resolvem { pt, en } ou string simples via t()
   */
  const termDesc = t(p.termDesc || p.desc);
  const desc     = t(p.desc);

  const topArea = p.image
    ? `<img class="pcard-img-terminal" src="${p.image}" alt="${X(p.title)}" loading="lazy">`
    : `<div class="pcard-body">
        <p class="pcard-reponame">${X(p.user)} / <span class="acc">${X(p.repo)}</span></p>
        <p class="pcard-termdesc">${X(termDesc)}</p>
        <div class="pcard-footer">
          <div class="pcard-avs">${avHtml}</div>
          <span class="pcard-contrib">${p.contributors||1} Contributor${(p.contributors||1)>1?"s":""}</span>
        </div>
      </div>`;

  const demoLink = p.demo
    ? `<a class="pcard-link" href="${p.demo}" target="_blank" rel="noopener" onclick="event.stopPropagation()">${ICON.ext} Demo</a>`
    : "";

  return `<div class="proj-card" data-href="${p.github}">
    <div class="pcard-terminal-wrap" data-proj-idx="${projIdx}">
      <div class="pcard-top">
        <div class="pcard-bar">
          <div class="pdots"><span class="pd pd-r"></span><span class="pd pd-y"></span><span class="pd pd-g"></span></div>
          <span class="pcard-repo">${X(p.user)}/${X(p.repo)}</span>
        </div>
        ${topArea}
      </div>
    </div>
    <div class="pcard-info" data-proj-idx="${projIdx}" style="cursor:pointer">
      <div class="pcard-title">${X(p.title)}</div>
      <p class="pcard-desc">${X(desc)}</p>
      <div class="pcard-tags"><svg class="pcard-tag-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>${p.tags.map(t=>{const {color,bg}=tagColor(t);return `<span class="pcard-tag" style="color:${color};background:${bg};border:1px solid ${color}30">${X(t)}</span>`;}).join("")}</div>
      <div class="pcard-links">
        <a class="pcard-link" href="${p.github}" target="_blank" rel="noopener" onclick="event.stopPropagation()">${ICON.gh} GitHub</a>
        ${demoLink}
      </div>
    </div>
  </div>`;
}

/* Click on any part of card → open modal; only explicit <a> links navigate away */
document.addEventListener("click", e => {
  /* 1. Close modal if clicking the overlay backdrop */
  if (e.target === $("projModal")) { closeProjectModal(); return; }

  /* 2. Let real anchor clicks (GH link, demo link) pass through naturally */
  if (e.target.closest("a[href]")) return;

  /* 3. Any click on an element with data-proj-idx → open modal */
  const projEl = e.target.closest("[data-proj-idx]");
  if (projEl) {
    openProjectModal(parseInt(projEl.dataset.projIdx, 10));
    return;
  }
});

/* ─── Project list (flat, indexed for modal) ── */
const PROJECTS_LIST = C.projects;

const featured = PROJECTS_LIST.filter(p => p.featured).slice(0, 2);
const others   = PROJECTS_LIST.filter(p => !p.featured);

function renderCards() {
  $("featGrid").innerHTML = featured.map(p => buildCard(p, PROJECTS_LIST.indexOf(p))).join("");
  $("allGrid").innerHTML  = others.map(p => buildCard(p, PROJECTS_LIST.indexOf(p))).join("");
}
renderCards();

let allShown = false;
$("viewAllBtn").addEventListener("click", e => {
  e.preventDefault();
  allShown = !allShown;
  $("allProjects").classList.toggle("hidden", !allShown);
  $("viewAllBtn").innerHTML = allShown
    ? `<span class="lang-pt">Ver menos ←</span><span class="lang-en">View less ←</span>`
    : `<span class="lang-pt">Ver todos →</span><span class="lang-en">View all →</span>`;
  if (allShown) setTimeout(() => $("allProjects").scrollIntoView({ behavior:"smooth" }), 50);
});

/* ══════════════════════════════════════════
   PROJECT TERMINAL MODAL
══════════════════════════════════════════ */
let _openModalIdx = null;

function openProjectModal(idx) {
  const p = PROJECTS_LIST[idx];
  if (!p) return;
  _openModalIdx = idx;

  const termDesc = t(p.termDesc || p.desc);
  const desc     = t(p.desc);

  $("projModalPath").textContent     = `~/projects/${p.repo}/`;
  $("projModalRepo").innerHTML       = `${X(p.user)} / <span class="acc">${X(p.repo)}</span>`;
  $("projModalTermDesc").textContent = termDesc;

  const av = `https://github.com/${p.user}.png?size=48`;
  $("projModalAvs").innerHTML = `<img class="pcard-av" src="${av}" alt="@${X(p.user)}" loading="lazy"
    onerror="this.outerHTML='<span class=\\'pcard-av-fallback\\'>A</span>'">`;
  $("projModalContrib").textContent =
    `${p.contributors || 1} Contributor${(p.contributors || 1) > 1 ? "s" : ""}`;

  $("projModalTitle").textContent = p.title;
  $("projModalDesc").textContent  = desc;

  $("projModalTags").innerHTML = p.tags.map(tag => {
    const { color, bg } = tagColor(tag);
    return `<span class="pcard-tag" style="color:${color};background:${bg};border:1px solid ${color}30">${X(tag)}</span>`;
  }).join("");

  const demoLink = p.demo
    ? `<a class="proj-modal-link" href="${p.demo}" target="_blank" rel="noopener">${ICON.ext} Demo</a>`
    : "";
  $("projModalLinks").innerHTML =
    `<a class="proj-modal-link" href="${p.github}" target="_blank" rel="noopener">${ICON.gh} GitHub</a>${demoLink}`;

  $("projModal").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeProjectModal() {
  _openModalIdx = null;
  $("projModal").classList.add("hidden");
  document.body.style.overflow = "";
}

$("projModalClose").addEventListener("click", closeProjectModal);
document.addEventListener("keydown", e => { if (e.key === "Escape") closeProjectModal(); });

/* ══════════════════════════════════════════
   LANGUAGE TOGGLE
   Altera o idioma, re-renderiza os conteúdos
   dinâmicos (bio + cards) e sincroniza os botões.
══════════════════════════════════════════ */
function setLang(l) {
  currentLang = l;
  el.setAttribute("lang", l === "en" ? "en" : "pt-BR");
  storage.set("lang", l);
  renderBio();
  renderCards();
  if (_openModalIdx !== null) openProjectModal(_openModalIdx);
  document.querySelectorAll(".nav-lang-btn").forEach(b =>
    b.classList.toggle("on", b.dataset.lang === l));
  const cityEl = document.querySelector(".loc-city-text");
  if (cityEl) cityEl.textContent = l === "en" ? "Fortaleza, CE — Brazil" : "Fortaleza, CE — Brasil";
}

/* Inicializa botões com o idioma salvo */
document.querySelectorAll(".nav-lang-btn").forEach(b => {
  b.classList.toggle("on", b.dataset.lang === currentLang);
  b.addEventListener("click", () => setLang(b.dataset.lang));
});

/* ══════════════════════════════════════════
   THEME SWITCHER
══════════════════════════════════════════ */
function setTheme(t) {
  theme = t;
  el.setAttribute("data-theme", t);
  const savedAccent = storage.get("accent");
  if (!savedAccent) el.style.removeProperty("--accent");
  storage.set("theme", t);
  document.querySelectorAll(".t-btn").forEach(b => b.classList.toggle("on", b.dataset.t === t));
  renderColors();
  renderCards();
}

function renderColors() {
  $("tColors").innerHTML = PAL[theme].map(c =>
    `<div class="t-c" style="background:${c}" title="${c}" data-color="${c}"></div>`
  ).join("");

  document.querySelectorAll(".t-c").forEach(dot => {
    dot.addEventListener("click", () => {
      el.style.setProperty("--accent", dot.dataset.color);
      storage.set("accent", dot.dataset.color);
      document.querySelectorAll(".t-c").forEach(d => d.classList.remove("accent-active"));
      dot.classList.add("accent-active");
    });
  });
}

$("tBtns").innerHTML = THEMES.map(t =>
  `<button class="t-btn${t === theme ? " on" : ""}" data-t="${t}">${THEME_LABELS[t]}</button>`
).join("");
document.querySelectorAll(".t-btn").forEach(b => b.addEventListener("click", () => setTheme(b.dataset.t)));
renderColors();

if (savedAccent) {
  setTimeout(() => {
    document.querySelectorAll(".t-c").forEach(d => {
      if (d.dataset.color === savedAccent) d.classList.add("accent-active");
    });
  }, 0);
}

/* ══════════════════════════════════════════
   BACKGROUND EFFECT
══════════════════════════════════════════ */
let bgOn   = true;
let _moved = false;

$("bgTog").addEventListener("click", () => {
  bgOn = !bgOn;
  $("bgTog").classList.toggle("on", bgOn);
  $("bgSt").textContent = bgOn ? "on" : "off";
});

document.addEventListener("mousedown", () => { _moved = false; });
document.addEventListener("mousemove", e => { if (e.buttons === 1) _moved = true; });
document.addEventListener("click", e => {
  if (!bgOn || _moved) return;
  const sel = window.getSelection();
  if (sel && sel.toString().length > 0) return;

  const BG_MIN_SIZE = 20;
  const BG_MAX_SIZE = 84;
  const BG_OFFSET = 140;
  const BG_MIN_DUR = 5;
  const BG_MAX_DUR = 8.5;
  const BG_DELAY = 0.2;
  const BG_EXTRA = 0.4;
  const colors = PAL[theme];
  const count = Math.floor(Math.random() * 4) + 2;
  for (let i = 0; i < count; i++) {
    const sq = document.createElement("div");
    sq.className = "bsq";
    const sz = Math.random() * (BG_MAX_SIZE - BG_MIN_SIZE) + BG_MIN_SIZE;
    const x = e.clientX - sz/2 + (Math.random() - 0.5) * BG_OFFSET;
    const y = e.clientY - sz/2 + (Math.random() - 0.5) * BG_OFFSET;
    const col = colors[Math.floor(Math.random() * colors.length)];
    const dur = BG_MIN_DUR + Math.random() * (BG_MAX_DUR - BG_MIN_DUR);
    sq.style.cssText = `width:${sz}px;height:${sz}px;left:${x}px;top:${y}px;background:${col}28;border:1px solid ${col}55;animation-delay:${Math.random() * BG_DELAY}s;animation-duration:${dur}s`;
    $("bg").appendChild(sq);
    setTimeout(() => sq.remove(), (dur + BG_EXTRA) * 1000);
  }
});

/* ══════════════════════════════════════════
   CLICK TRACKER
══════════════════════════════════════════ */
let clicks = parseInt(storage.get("clicks", "0"));
function updateClicks() {
  $("clickNum").textContent = clicks.toLocaleString("pt-BR");
  $("clickSub").textContent = clicks.toLocaleString("pt-BR");
}
updateClicks();
$("clickBtn").addEventListener("click", () => {
  clicks++;
  storage.set("clicks", String(clicks));
  updateClicks();
});

/* ══════════════════════════════════════════
   CONTACT BUTTON
══════════════════════════════════════════ */
$("chatBtn").href = C.about.scheduleUrl;
$("chatBtn").target = "_blank";
$("chatBtn").rel = "noopener";
$("chatBtn").style.cursor = "pointer";

/* ══════════════════════════════════════════
   LOCATION CLOCK
══════════════════════════════════════════ */
(function startClock() {
  const TZ = "America/Fortaleza";
  const tick = () => {
    try {
      const now = new Date();
      const t = now.toLocaleTimeString("pt-BR", { timeZone:TZ, hour:"2-digit", minute:"2-digit", second:"2-digit", hour12:false });
      const d = now.toLocaleDateString("pt-BR", { timeZone:TZ, weekday:"short", day:"2-digit", month:"short" });
      $("locTime").textContent = `${t} · ${d}`;
    } catch { $("locTime").textContent = "--:--:--"; }
  };
  tick();
  setInterval(tick, 1000);
})();

/* ══════════════════════════════════════════
   LEAFLET MAP
══════════════════════════════════════════ */
(function initMap() {
  const MAP_ID = "fortalezaMap";
  const LAT = -3.7327;
  const LNG = -38.5270;
  const ZOOM = 12;
  const RESIZE_DELAY = 250;
  const MAX_ZOOM = 19;
  try {
    const map = L.map(MAP_ID, {
      center:[LAT, LNG], zoom:ZOOM,
      zoomControl:false, scrollWheelZoom:false,
      dragging:false, touchZoom:false, doubleClickZoom:false,
      boxZoom:false, keyboard:false, attributionControl:false, tap:false,
    });
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom:MAX_ZOOM }).addTo(map);
    setTimeout(() => map.invalidateSize(), RESIZE_DELAY);
    document.getElementById(MAP_ID).style.pointerEvents = "none";
  } catch {
    document.getElementById(MAP_ID).style.background = "var(--crust)";
  }
})();

/* ══════════════════════════════════════════
   RECENT COMMITS
══════════════════════════════════════════ */
$("cmGhLink").href = `${C.github}?tab=overview`;

/* ── Commit fetcher helpers ────────────────────────────────────────────────
   Strategy:
     1. Try GitHub Events API (fast, but only covers public pushes in last 90d)
     2. If zero PushEvents found, fall back to fetching the latest commit
        from every repo listed in C.projects — works even when the events
        feed is empty (e.g. all recent work was in private repos).
   All requests are unauthenticated (60 req/h rate limit per IP).
────────────────────────────────────────────────────────────────────────── */
const GH_HEADERS = { Accept:"application/vnd.github.v3+json" };

async function fetchViaEvents() {
  const MAX_COMMITS = 6;
  const r = await fetch(
    `https://api.github.com/users/${C.githubUser}/events/public?per_page=100`,
    { headers: GH_HEADERS }
  );
  if (!r.ok) throw new Error(`events HTTP ${r.status}`);
  const evs = await r.json();
  const commits = [];
  for (const ev of evs) {
    if (ev.type !== "PushEvent") continue;
    const repo = ev.repo.name.split("/")[1];
    for (const cm of (ev.payload.commits || [])) {
      commits.push({
        repo,
        msg: cm.message.split("\n")[0].trim(),
        url: `https://github.com/${ev.repo.name}/commit/${cm.sha}`,
        date: ev.created_at,
      });
      if (commits.length >= MAX_COMMITS) break;
    }
    if (commits.length >= MAX_COMMITS) break;
  }
  return commits;
}

async function fetchViaRepos() {
  const MAX_COMMITS = 5;
  const COMMITS_PER_REPO = 2;
  const seen = new Set();
  const repos = C.projects
    .map(p => ({ user: p.user || C.githubUser, repo: p.repo }))
    .filter(r => { const k = `${r.user}/${r.repo}`; if (seen.has(k)) return false; seen.add(k); return true; });

  const results = await Promise.allSettled(
    repos.map(({ user, repo }) =>
      fetch(
        `https://api.github.com/repos/${user}/${repo}/commits?per_page=${COMMITS_PER_REPO}`,
        { headers: GH_HEADERS }
      ).then(r => r.ok ? r.json() : []).then(cms =>
        cms.map(c => ({
          repo,
          msg: (c.commit?.message || "").split("\n")[0].trim(),
          url: c.html_url,
          date: c.commit?.author?.date || "",
        }))
      )
    )
  );

  const commits = results
    .filter(r => r.status === "fulfilled")
    .flatMap(r => r.value)
    .filter(c => c.msg)
    .sort((a, b) => (b.date > a.date ? 1 : -1))
    .slice(0, MAX_COMMITS);
  return commits;
}

async function fetchCommits() {
  const list = $("cmList");
  let commits = [];

  /* Tentar carregar do arquivo JSON (atualizado por GitHub Actions) */
  try {
    const res = await fetch('data/commits.json');
    if (res.ok) {
      commits = await res.json();
    }
  } catch(e) {
    console.warn("Failed to fetch from JSON:", e);
  }

  /* Se não carregou do JSON, tentar API como fallback */
  if (!commits.length) {
    const timeout = new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Timeout")), 5000)
    );

    try {
      commits = await Promise.race([fetchViaEvents(), timeout]);
    } catch(e) {
      console.warn("Events API failed:", e);
    }

    /* If events gave nothing, try repo-level commits */
    if (!commits.length) {
      try {
        commits = await Promise.race([fetchViaRepos(), timeout]);
      } catch(e) {
        console.warn("Repo commits fallback failed:", e);
      }
    }
  }

  if (commits.length) {
    list.innerHTML = commits.map(c =>
      `<a class="cm-item" href="${c.url}" target="_blank" rel="noopener">
        <span class="cm-repo">${X(c.repo)}</span>
        <span class="cm-msg">${X(c.msg)}</span>
        <span class="cm-arrow">↗</span>
      </a>`
    ).join("");
  } else {
    list.innerHTML = `<div class="cm-item" style="color:var(--overlay0)">buscando commits...</div>`;
  }

  const CM_BAR_MIN_WIDTH = 7;
  const CM_BAR_MAX_WIDTH = 23;
  const cols = PAL[theme].slice(0, 8);
  $("cmBar").innerHTML = cols.map(c =>
    `<div class="cm-seg" style="width:${CM_BAR_MIN_WIDTH + Math.random() * (CM_BAR_MAX_WIDTH - CM_BAR_MIN_WIDTH)}px;background:${c};opacity:.75"></div>`
  ).join("");
}
fetchCommits();

let infoOpen = false;
$("cmInfo").addEventListener("click", () => {
  infoOpen = !infoOpen;
  $("cmInfoPanel").classList.toggle("hidden", !infoOpen);
  $("cmInfo").textContent = infoOpen ? "[×]" : "[info]";
});
