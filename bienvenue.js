/* Œconomia — accueil de la première visite.
   S’affiche une seule fois, à l’arrivée sur la page d’accueil (pas quand on arrive par un lien direct vers une page).
   Se ferme par « Explorer librement », la croix, la touche Échap ou un clic à côté. Mémorisé dans le navigateur (« oec-bienvenue »).
   Pour le revoir : OEC.bienvenue.show(). */
(function () {
  "use strict";
  const KEY = "oec-bienvenue";
  const css = document.createElement("style");
  css.textContent = `
.bv{border:0; padding:0; background:transparent; max-width:min(760px, calc(100vw - 24px)); width:100%; max-height:calc(100vh - 24px)}
.bv::backdrop{background:rgba(10,20,15,.45); backdrop-filter:blur(2px)}
.bv-in{position:relative; overflow:auto; max-height:calc(100vh - 24px); border-radius:16px; background:var(--paper); color:var(--ink); border:1px solid var(--line); box-shadow:0 24px 60px rgba(0,0,0,.3); padding:30px 32px 26px}
.bv-x{position:absolute; top:12px; right:14px; border:0; background:transparent; font-size:26px; line-height:1; color:var(--ink-soft); cursor:pointer}
.bv h2{font:400 clamp(30px, 4vw, 42px)/1.05 var(--f-display); margin:6px 0 10px}
.bv-lede{color:var(--ink-soft); margin:0 0 20px; font-size:16px; line-height:1.55}
.bv-fams{display:grid; grid-template-columns:repeat(3, minmax(0,1fr)); gap:10px; margin-bottom:22px}
.bv-fam{padding:14px 14px 12px; border-radius:12px; background:var(--card); border:1px solid var(--line)}
.bv-fam b{display:block; font:400 21px/1.1 var(--f-display); margin-bottom:6px}
.bv-fam p{margin:0; font-size:13.5px; line-height:1.45; color:var(--ink-soft)}
.bv-start{font:600 11px/1 var(--f-engr); letter-spacing:.18em; text-transform:uppercase; color:var(--gold); margin:0 0 10px}
.bv-go{display:grid; grid-template-columns:repeat(2, minmax(0,1fr)); gap:10px}
.bv-go a, .bv-go button{display:flex; text-align:left; font:inherit; cursor:pointer; flex-direction:column; gap:4px; padding:14px; border-radius:12px; text-decoration:none; color:var(--ink); border:1px solid var(--line); background:var(--card)}
.bv-go a:hover, .bv-go button:hover{border-color:var(--note); background:var(--note-soft)}
.bv-go a b, .bv-go button b{font-size:15px}
.bv-go a small, .bv-go button small{font-size:13px; color:var(--ink-soft); line-height:1.4}
.bv-go .main{background:var(--ink); color:var(--paper); border-color:var(--ink)}
.bv-go .main small{color:color-mix(in srgb, var(--paper) 75%, transparent)}
.bv-foot{display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between; gap:10px; margin-top:20px; padding-top:14px; border-top:1px solid var(--line); font-size:13px; color:var(--ink-soft)}
@media (max-width: 640px){ .bv-in{padding:24px 18px 18px} .bv-fams, .bv-go{grid-template-columns:minmax(0,1fr)} .bv-fam{padding:10px 12px} .bv-fam p{font-size:13px} }`;
  document.head.appendChild(css);

  function show() {
    let d = document.querySelector("dialog.bv");
    if (!d) {
      d = document.createElement("dialog"); d.className = "bv"; d.setAttribute("aria-labelledby", "bvTitre");
      d.innerHTML = `<div class="bv-in">
        <button type="button" class="bv-x" aria-label="Fermer">×</button>
        <p class="eyebrow">Bienvenue</p>
        <h2 id="bvTitre">Smith, Marx, Keynes : ils sont rarement d’accord. Et vous ?</h2>
        <p class="bv-lede">Œconomia raconte l’histoire de l’économie à travers ses grandes questions, ses auteurs et leurs disputes.</p>
        <p class="bv-start">Vous êtes :</p>
        <div class="bv-go">
          <button type="button" data-bv-profil="decouvre" class="main"><b>Je découvre l’économie</b><small>Des parcours guidés, des notions en version courte.</small></button>
          <button type="button" data-bv-profil="connais"><b>Je connais déjà l’économie</b><small>Les notices complètes, les controverses, les familles de pensée.</small></button>
          <button type="button" data-bv-profil="enseigne"><b>J’enseigne</b><small>Des séances prêtes à l’emploi et leurs fiches élèves.</small></button>
          <a href="#boussole"><b>Quel économiste êtes-vous ?</b><small>Ou commencez par le test : dix situations, environ 5 minutes.</small></a>
        </div>
        <div class="bv-foot"><span>Ce message ne s’affiche qu’une fois. Vous pourrez changer de profil en haut de la page d’accueil.</span><button type="button" class="btn small ghost bv-close">Explorer librement</button></div>
      </div>`;
      document.body.appendChild(d);
      const close = () => { try { localStorage.setItem(KEY, "1"); } catch (e) {} if (d.open) d.close(); };
      d.addEventListener("click", (e) => {
        const p = e.target.closest("[data-bv-profil]");
        if (p) { close(); const b = document.querySelector(`.profils [data-profil="${p.dataset.bvProfil}"]`); if (b) { b.click(); const box = document.getElementById("profilBox"); if (box) box.scrollIntoView({ block: "center" }); } return; }
        if (e.target === d || e.target.closest(".bv-x, .bv-close, .bv-go a")) close();
      });
      d.addEventListener("cancel", () => { try { localStorage.setItem(KEY, "1"); } catch (e) {} });
    }
    if (!d.open) d.showModal();
  }
  /* Ne s’ouvre plus à l’arrivée : après un premier défilement de l’accueil (ou 20 secondes), et seulement si aucun profil n’a été choisi */
  function maybeShow() {
    let vu = false; try { vu = !!localStorage.getItem(KEY) || !!localStorage.getItem("oec-profil"); } catch (e) { vu = true; }
    const h = location.hash;
    if (vu || !(!h || h === "#" || h === "#accueil")) return;
    let fait = false;
    const go = () => {
      if (fait) return; fait = true; window.removeEventListener("scroll", sc);
      let deja = false; try { deja = !!localStorage.getItem(KEY) || !!localStorage.getItem("oec-profil"); } catch (e) {}
      if (!deja && document.body.dataset.view === "accueil") show();
    };
    const sc = () => { if (window.scrollY > 400) go(); };
    window.addEventListener("scroll", sc, { passive: true });
    setTimeout(go, 20000);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", maybeShow); else maybeShow();
  OEC.bienvenue = { show };
})();
