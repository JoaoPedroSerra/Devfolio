/**
 * ══════════════════════════════════════════
 *  PORTFOLIO CONSTANTS & CONFIG
 * ══════════════════════════════════════════
 */

/* Animation & Timing */
const ANIM = {
  modalDuration: 180,
  cardHoverDelay: 200,
  transitionSpeed: 200,
  bgSquareMinDuration: 5,
  bgSquareMaxDuration: 8.5,
};

/* Sizes & Spacing */
const SIZE = {
  avatarSmall: 48,
  avatarLarge: 96,
  bgSquareMin: 20,
  bgSquareMax: 84,
  bgSquareOffset: 140,
  clockUpdateInterval: 1000,
};

/* Selectors */
const SEL = {
  heroName: "heroName",
  heroBio: "heroBio",
  heroLinks: "heroLinks",
  skillsGrid: "skillsGrid",
  featGrid: "featGrid",
  allGrid: "allGrid",
  viewAllBtn: "viewAllBtn",
  allProjects: "allProjects",
  projModal: "projModal",
  projModalBox: "projModalBox",
  projModalClose: "projModalClose",
  projModalPath: "projModalPath",
  projModalRepo: "projModalRepo",
  projModalTermDesc: "projModalTermDesc",
  projModalAvs: "projModalAvs",
  projModalContrib: "projModalContrib",
  projModalTitle: "projModalTitle",
  projModalDesc: "projModalDesc",
  projModalTags: "projModalTags",
  projModalLinks: "projModalLinks",
  tBtns: "tBtns",
  tColors: "tColors",
  bgTog: "bgTog",
  bgSt: "bgSt",
  bg: "bg",
  clickNum: "clickNum",
  clickSub: "clickSub",
  clickBtn: "clickBtn",
  chatBtn: "chatBtn",
  locTime: "locTime",
  fortalezaMap: "fortalezaMap",
  cmList: "cmList",
  cmGhLink: "cmGhLink",
  cmBar: "cmBar",
  cmInfo: "cmInfo",
  cmInfoPanel: "cmInfoPanel",
  footerLeft: "footerLeft",
  navLangBtn: "nav-lang-btn",
  resumeBtn: "resumeBtn",
};

/* GitHub API */
const GH = {
  apiHeaders: { Accept: "application/vnd.github.v3+json" },
  eventsPerPage: 100,
  reposPerPage: 2,
  maxCommits: 6,
  maxReposCommits: 5,
  eventCacheLimit: 90, // days
};

/* Location */
const LOC = {
  timezone: "America/Fortaleza",
  cityPt: "Fortaleza, CE — Brasil",
  cityEn: "Fortaleza, CE — Brazil",
  lat: -3.7327,
  lng: -38.5270,
  zoom: 12,
};

/* Theme */
const THEMES = ["latte", "frappe", "macchiato", "mocha"];
const THEME_LABELS = {
  latte: "Latte",
  frappe: "Frappé",
  macchiato: "Macchiato",
  mocha: "Mocha",
};
