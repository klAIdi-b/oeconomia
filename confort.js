/* Œconomia — confort et accessibilité.
   1. Taille du texte : bouton « Aa » dans l’en-tête (normale, grande, très grande), mémorisée dans le navigateur.
   2. Lien d’évitement « Aller au contenu » pour la navigation au clavier, et langue du document déclarée.
   3. Champ de recherche sur la page d’accueil, qui ouvre la recherche du site. */
(function () {
  "use strict";
  document.documentElement.lang = "fr";

  /* ---------- 1. Taille du texte ---------- */
  const TAILLES = [[1, "normale"], [1.12, "grande"], [1.25, "très grande"]];
  let t = 0;
  try { t = Math.max(0, Math.min(2, +localStorage.getItem("oec-taille") || 0)); } catch (e) {}
  const apply = () => {
    document.documentElement.style.setProperty("--oec-zoom", TAILLES[t][0]);
    document.documentElement.classList.toggle("oec-zoomed", t > 0);
    const b = document.getElementById("sizeBtn");
    if (b) { b.title = `Taille du texte : ${TAILLES[t][1]} (cliquer pour changer)`; b.setAttribute("aria-label", b.title); b.dataset.t = t; }
  };
  const theme = document.getElementById("themeBtn");
  if (theme) {
    const b = document.createElement("button");
    b.className = "theme-btn size-btn"; b.id = "sizeBtn"; b.type = "button"; b.innerHTML = `<span aria-hidden="true">A<small>a</small></span>`;
    b.addEventListener("click", () => { t = (t + 1) % TAILLES.length; try { localStorage.setItem("oec-taille", t); } catch (e) {} apply(); });
    theme.before(b);
  }
  apply();

  /* ---------- 2. Aller au contenu ---------- */
  const skip = document.createElement("a");
  skip.className = "skip-link"; skip.href = "#"; skip.textContent = "Aller au contenu";
  skip.addEventListener("click", (e) => {
    e.preventDefault();
    const v = document.querySelector(`main [data-view="${document.body.dataset.view || "accueil"}"]`) || document.querySelector("main");
    const target = (v && v.querySelector("h1, h2")) || v;
    if (target) { target.setAttribute("tabindex", "-1"); target.focus(); }
  });
  document.body.prepend(skip);

  /* ---------- 3. Recherche sur l’accueil ---------- */
  const row = document.querySelector('[data-view="accueil"] .cta-row');
  if (row) {
    const s = document.createElement("button");
    s.type = "button"; s.className = "home-search";
    s.innerHTML = `<svg width="18" height="18" viewBox="0 0 16 16" aria-hidden="true"><circle cx="7" cy="7" r="5" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M11 11l3.5 3.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg><span>Rechercher une notion, un économiste, une crise, une date…</span><kbd>/</kbd>`;
    s.setAttribute("aria-label", "Rechercher dans Œconomia");
    s.addEventListener("click", () => { const b = document.getElementById("searchBtn"); if (b) b.click(); });
    row.after(s);
  }
})();
