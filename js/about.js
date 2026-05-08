/**
 * ══════════════════════════════════════════
 *  PORTFOLIO — about.js
 *  Requires: config.js (loaded before this)
 * ══════════════════════════════════════════
 */

/* ─── Catppuccin accent palettes (same as main) ─ */
const PAL = {
  mocha:     ["#f5e0dc","#f2cdcd","#f5c2e7","#cba6f7","#f38ba8","#eba0ac","#fab387","#f9e2af","#a6e3a1","#94e2d5","#89dceb","#74c7ec","#89b4fa","#b4befe"],
  macchiato: ["#f4dbd6","#f0c6c6","#f5bde6","#c6a0f6","#ed8796","#ee99a0","#f5a97f","#eed49f","#a6da95","#8bd5ca","#91d7e3","#7dc4e4","#8aadf4","#b7bdf8"],
  frappe:    ["#f2d5cf","#eebebe","#f4b8e4","#ca9ee6","#e78284","#ea999c","#ef9f76","#e5c890","#a6d189","#81c8be","#99d1db","#85c1dc","#8caaee","#babbf1"],
  latte:     ["#dc8a78","#dd7878","#ea76cb","#8839ef","#d20f39","#e64553","#fe640b","#df8e1d","#40a02b","#179299","#04a5e5","#209fb5","#1e66f5","#7287fd"],
};

/* ─── Helpers ─────────────────────────── */
const $  = id => document.getElementById(id);
const X  = s  => String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
const el = document.documentElement;

/* ─── Bilingual helper ─────────────────
   Same as main.js — resolves { pt, en } or plain string
──────────────────────────────────────── */
function t(val) {
  if (!val || typeof val !== "object") return val || "";
  return val[lang] || val.pt || "";
}

/* ─── SVG icons ───────────────────────── */
const ICON = {
  gh: `<svg viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.44 9.8 8.21 11.39.6.11.82-.26.82-.57v-2.24c-3.01.55-3.8-.73-4.04-1.41-.13-.34-.72-1.41-1.23-1.7-.42-.22-1.02-.77-.01-.79.94-.01 1.62.87 1.85 1.23 1.08 1.82 2.8 1.3 3.49.99.11-.78.42-1.3.77-1.6-2.67-.3-5.46-1.33-5.46-5.93 0-1.3.47-2.38 1.23-3.22-.12-.3-.54-1.53.12-3.18 0 0 1.01-.31 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.54 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12.01 12.01 0 0 0 24 12C24 5.37 18.63 0 12 0z"/></svg>`,
  li: `<svg viewBox="0 0 24 24"><path d="M20.45 20.45h-3.55V14.9c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.65H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 .77.77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.2 0 22.23 0z"/></svg>`,
  ml: `<svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
};

/* ══════════════════════════════════════════
   THEME SYNC
   Reads theme saved by main.js in localStorage
══════════════════════════════════════════ */
let currentTheme = localStorage.getItem("portfolio_theme") || "mocha";
const savedAccent = localStorage.getItem("portfolio_accent");

/* Language must be declared here so it's available everywhere below */
let lang = localStorage.getItem("portfolio_lang") || "pt";

el.setAttribute("data-theme", currentTheme);
el.setAttribute("lang", lang === "en" ? "en" : "pt-BR");
if (savedAccent) el.style.setProperty("--accent", savedAccent);

const THEMES  = ["latte","frappe","macchiato","mocha"];
const T_LABEL = { latte:"Latte", frappe:"Frappé", macchiato:"Macchiato", mocha:"Mocha" };

function applyTheme(t) {
  currentTheme = t;
  el.setAttribute("data-theme", t);
  /* Preserve any custom accent the user picked — only reset if none saved */
  const savedAccent = localStorage.getItem("portfolio_accent");
  if (!savedAccent) el.style.removeProperty("--accent");
  localStorage.setItem("portfolio_theme", t);
  document.querySelectorAll(".ab-t-btn").forEach(b => b.classList.toggle("on", b.dataset.t === t));
  /* Re-render expertise pills (they use tagColor which depends on theme) */
  renderExpertise();
}

$("abTBtns").innerHTML = THEMES.map(t =>
  `<button class="ab-t-btn${t === currentTheme ? " on" : ""}" data-t="${t}">${T_LABEL[t]}</button>`
).join("");
document.querySelectorAll(".ab-t-btn").forEach(b => b.addEventListener("click", () => applyTheme(b.dataset.t)));

/* ══════════════════════════════════════════
   LANGUAGE TOGGLE
══════════════════════════════════════════ */

document.querySelectorAll(".nav-lang-btn").forEach(btn => {
  /* Mark the saved lang as active on page load */
  btn.classList.toggle("on", btn.dataset.lang === lang);

  btn.addEventListener("click", () => {
    lang = btn.dataset.lang;
    localStorage.setItem("portfolio_lang", lang);
    el.setAttribute("lang", lang === "en" ? "en" : "pt-BR");
    document.querySelectorAll(".nav-lang-btn").forEach(b => b.classList.toggle("on", b.dataset.lang === lang));
  });
});

/* ══════════════════════════════════════════
   POPULATE FROM CONFIG
══════════════════════════════════════════ */
const ab = C.about;

/* Name + title in sidebar */
$("ab-name-display").textContent = C.name;
$("ab-title-display").textContent = t(ab.title) || "Desenvolvedor Fullstack";

/* Resume button */
const resumeUrl = C.resume && C.resume !== "#" ? C.resume : null;
const rBtn = $("aboutResumeBtn");
if (resumeUrl) {
  rBtn.addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "curriculo_joao_pedro_serra.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
} else {
  rBtn.style.opacity = ".4";
  rBtn.style.pointerEvents = "none";
}

/* ── Intro section ─────────────────────── */
$("ab-intro-links").innerHTML = `
  <a class="ab-intro-link" href="${C.github}" target="_blank" rel="noopener">${ICON.gh} GitHub</a>
  <span class="hero-sep">|</span>
  <a class="ab-intro-link" href="${C.linkedin}" target="_blank" rel="noopener">${ICON.li} LinkedIn</a>
  <span class="hero-sep">|</span>
  <a class="ab-intro-link" href="mailto:${C.email}">${ICON.ml} <span class="lang-pt">Contato</span><span class="lang-en">Contact</span></a>
`;

/* Intro text (PT) */
const introPt = $("ab-intro-text-pt");
if (introPt && ab.intro) {
  introPt.innerHTML = typeof ab.intro === "object" ? ab.intro.pt : ab.intro;
}
/* Intro text (EN) */
const introEn = $("ab-intro-text-en");
if (introEn && ab.intro) {
  const enText = typeof ab.intro === "object" ? ab.intro.en : ab.intro;
  introEn.innerHTML = enText;
}

/* ── Current Role ─────────────────────── */
function renderRole(container, roleData, lang) {
  if (!roleData) {
    container.innerHTML = `<p style="font-size:12px;color:var(--overlay0)">Configure <code style="color:var(--accent)">C.about.currentRole</code> com sua função atual.</p>`;
    return;
  }
  const bullets = Array.isArray(roleData.bullets)
    ? roleData.bullets
    : (roleData.bullets && roleData.bullets[lang]) || roleData.bullets?.pt || [];

  const roleTitle = typeof roleData.role === "object"
    ? (roleData.role[lang] || roleData.role.pt)
    : roleData.role;

  container.innerHTML = `
    <div class="ab-role-card">
      <div class="ab-role-header">
        <span class="ab-role-company">
          ${roleData.companyUrl && roleData.companyUrl !== "#"
            ? `<a href="${roleData.companyUrl}" target="_blank" rel="noopener" style="color:inherit">${X(roleData.company)}</a>`
            : X(roleData.company)}
        </span>
        <span class="ab-role-period">${X(t(roleData.period))}</span>
      </div>
      <div class="ab-role-title">${X(roleTitle)}</div>
      <ul class="ab-role-bullets">
        ${bullets.map(b => `<li>${X(b)}</li>`).join("")}
      </ul>
    </div>
  `;
}
renderRole($("ab-role-content"), ab.currentRole, lang);

/* ── Experience ─────────────────────────── */
function renderExperience(container, expList) {
  if (!expList || !expList.length) {
    container.innerHTML = `<p style="font-size:12px;color:var(--overlay0)">Configure <code style="color:var(--accent)">C.about.experience</code> com suas experiências anteriores.</p>`;
    return;
  }
  container.innerHTML = expList.map(exp => {
    const bullets = Array.isArray(exp.bullets)
      ? exp.bullets
      : (exp.bullets && exp.bullets[lang]) || exp.bullets?.pt || [];
    const roleTitle = typeof exp.role === "object"
      ? (exp.role[lang] || exp.role.pt)
      : exp.role;
    return `
      <div class="ab-role-card">
        <div class="ab-role-header">
          <span class="ab-role-company">
            ${exp.companyUrl && exp.companyUrl !== "#"
              ? `<a href="${exp.companyUrl}" target="_blank" rel="noopener" style="color:inherit">${X(exp.company)}</a>`
              : X(exp.company)}
          </span>
          <span class="ab-role-period">${X(t(exp.period))}</span>
        </div>
        <div class="ab-role-title">${X(roleTitle)}</div>
        ${bullets.length ? `<ul class="ab-role-bullets">${bullets.map(b => `<li>${X(b)}</li>`).join("")}</ul>` : ""}
      </div>
    `;
  }).join("");
}
renderExperience($("ab-experience-content"), ab.experience);

/* ── Education ─────────────────────────── */
function renderEducation(container, eduList, lang) {
  if (!eduList || !eduList.length) {
    container.innerHTML = `<p style="font-size:12px;color:var(--overlay0)">Configure <code style="color:var(--accent)">C.about.education</code> com sua formação.</p>`;
    return;
  }
  container.innerHTML = eduList.map(edu => {
    /* course pode ser string, array ou { pt, en } onde cada valor é string ou array */
    const raw = typeof edu.course === "object" && !Array.isArray(edu.course)
      ? (edu.course[lang] || edu.course.pt)
      : edu.course;

    const courseArr  = Array.isArray(raw) ? raw : [raw];
    const courseName = courseArr[0];
    const bullets    = courseArr.slice(1);

    return `
      <div class="ab-edu-card">
        <div class="ab-edu-header">
          <span class="ab-edu-inst">${X(edu.institution)}</span>
          <span class="ab-edu-period">${X(edu.period)}</span>
        </div>
        <div class="ab-edu-course">${X(courseName)}</div>
        ${bullets.length ? `<ul class="ab-role-bullets" style="margin-top:.6rem">${bullets.map(b => `<li>${X(b)}</li>`).join("")}</ul>` : ""}
      </div>
    `;
  }).join("");
}
renderEducation($("ab-edu-content"), ab.education, lang);

/* ── Tech Expertise ────────────────────── */
function renderExpertise() {
  const container = $("ab-skills-content");
  const groups = ab.expertise;
  if (!groups) {
    container.innerHTML = `<p style="font-size:12px;color:var(--overlay0)">Configure <code style="color:var(--accent)">C.about.expertise</code>.</p>`;
    return;
  }
  /* Support both flat object and {pt, en} object */
  const data = (groups.pt || groups.en) ? (groups[lang] || groups.pt) : groups;
  container.innerHTML = Object.entries(data).map(([label, pills]) => `
    <div class="ab-exp-group">
      <div class="ab-exp-group-label">${X(label)}</div>
      <div class="ab-exp-pills">
        ${pills.map(p => `<span class="ab-exp-pill">${X(p)}</span>`).join("")}
      </div>
    </div>
  `).join("");
}
renderExpertise();

/* ── Helpers to re-render sidebar static fields ─── */
function renderSidebarLang() {
  $("ab-title-display").textContent = t(ab.title) || "Desenvolvedor Fullstack";
  const locEl = document.querySelector(".ab-loc-city");
  if (locEl) locEl.textContent = lang === "en" ? "Fortaleza, CE — Brazil" : "Fortaleza, CE — Brasil";
}

/* Re-render language-dependent sections when lang changes */
document.querySelectorAll(".nav-lang-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const newLang = btn.dataset.lang;
    renderRole($("ab-role-content"), ab.currentRole, newLang);
    renderExperience($("ab-experience-content"), ab.experience);
    renderEducation($("ab-edu-content"), ab.education, newLang);
    renderExpertise();
    renderSidebarLang();
  });
});

/* Apply saved lang to JS-rendered sections on init */
if (lang === "en") {
  renderRole($("ab-role-content"), ab.currentRole, "en");
  renderExperience($("ab-experience-content"), ab.experience);
  renderEducation($("ab-edu-content"), ab.education, "en");
  renderExpertise();
}

/* ══════════════════════════════════════════
   SCROLLSPY
   Updates sidebar nav active item on scroll
══════════════════════════════════════════ */
const sections = document.querySelectorAll(".about-section");
const navItems = document.querySelectorAll(".ab-nav-item");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navItems.forEach(item => {
        item.classList.toggle("active", item.dataset.section === id);
      });
    }
  });
}, { rootMargin: "-25% 0px -65% 0px" });

sections.forEach(s => observer.observe(s));

/* ══════════════════════════════════════════
   BACKGROUND SQUARES EFFECT (same as main)
══════════════════════════════════════════ */
let bgOn = true;
let _moved = false;

document.addEventListener("mousedown", () => { _moved = false; });
document.addEventListener("mousemove", e => { if (e.buttons === 1) _moved = true; });
document.addEventListener("click", e => {
  if (!bgOn || _moved) return;
  const sel = window.getSelection();
  if (sel && sel.toString().length > 0) return;

  const colors = PAL[currentTheme];
  const count  = Math.floor(Math.random() * 3) + 1;
  for (let i = 0; i < count; i++) {
    const sq  = document.createElement("div");
    sq.className = "bsq";
    const sz  = Math.random() * 55 + 15;
    const off = 120;
    const x   = e.clientX - sz / 2 + (Math.random() - .5) * off;
    const y   = e.clientY - sz / 2 + (Math.random() - .5) * off;
    const col = colors[Math.floor(Math.random() * colors.length)];
    const dur = 5 + Math.random() * 3;
    sq.style.cssText = `width:${sz}px;height:${sz}px;left:${x}px;top:${y}px;background:${col}28;border:1px solid ${col}55;animation-delay:${Math.random()*.2}s;animation-duration:${dur}s`;
    document.body.appendChild(sq);
    setTimeout(() => sq.remove(), (dur + .4) * 1000);
  }
});
