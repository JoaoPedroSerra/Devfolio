/**
 * ══════════════════════════════════════════
 *  UTILITY FUNCTIONS
 * ══════════════════════════════════════════
 */

const $ = id => document.getElementById(id);
const X = s => String(s)
  .replace(/&/g, "&amp;")
  .replace(/</g, "&lt;")
  .replace(/>/g, "&gt;");

const el = document.documentElement;

/* Bilingual resolver — handles both simple strings and { pt, en } objects */
function t(val, lang = "pt") {
  if (!val || typeof val !== "object") return val || "";
  return val[lang] || val.pt || "";
}

/* Local storage with namespace */
const storage = {
  get: (key, defaultVal = null) => {
    const val = localStorage.getItem(`portfolio_${key}`);
    return val !== null ? val : defaultVal;
  },
  set: (key, val) => localStorage.setItem(`portfolio_${key}`, String(val)),
};

/* DOM class toggling utility */
function toggleClass(el, className, force) {
  if (force !== undefined) {
    el.classList.toggle(className, force);
  } else {
    el.classList.toggle(className);
  }
}

/* Escape HTML in dynamic content */
function safeHTML(html) {
  const div = document.createElement("div");
  div.textContent = html;
  return div.innerHTML;
}
