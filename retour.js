/* Œconomia — accueil des visiteurs qui reviennent
   Sur la page d’accueil, propose de reprendre là où l’on s’était arrêté : parcours en cours, dernière page lue,
   résultat de la Boussole, nouveau numéro de l’actualité. Ne s’affiche pas à la première visite. */
(function () {
  const get = (k, d) => { try { return JSON.parse(localStorage.getItem(k) || "") || d; } catch (e) { return d; } };
  const set = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} };
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  /* Mémoriser la dernière page de contenu ouverte */
  const SUIVI = /^#(eco-|c-|q-|methode-|ex-)/;
  function noter() {
    const h = location.hash;
    if (!SUIVI.test(h)) return;
    setTimeout(() => {
      if (location.hash !== h) return;
      const t = document.title.replace(/\s*·\s*Œconomia\s*$/, "").trim();
      if (t && t !== "Œconomia") set("oec-derniere", { h, t, at: Date.now() });
    }, 900);
  }
  window.addEventListener("hashchange", noter);

  const css = document.createElement("style");
  css.textContent = `
.rt-back{margin:0 0 26px; padding:18px 20px; border:1px solid var(--line); border-left:4px solid var(--gold); border-radius:var(--r); background:var(--card)}
.rt-back h3{font-size:26px; margin:6px 0 12px}
.rt-back-list{display:grid; grid-template-columns:repeat(auto-fit, minmax(min(100%, 240px), 1fr)); gap:10px}
.rt-back-list a{display:flex; flex-direction:column; gap:3px; padding:12px 14px; border:1px solid var(--line); border-radius:12px; text-decoration:none; color:var(--ink); background:var(--paper)}
.rt-back-list a:hover, .rt-back-list a:focus-visible{border-color:var(--gold)}
.rt-back-list small{font-size:12px; color:var(--ink-soft); letter-spacing:.04em; text-transform:uppercase}
.rt-back-list b{font-size:15px; line-height:1.3}
.rt-back-list span{font-size:13px; color:var(--ink-soft)}`;
  document.head.appendChild(css);

  function items() {
    const out = [];
    const nr = OEC.revision ? OEC.revision.nombre() : 0;
    if (nr) out.push(["#revision", "Révision du jour", `${nr} exercice${nr > 1 ? "s" : ""} à revoir`, "Réviser →"]);
    const S = get("oec-parcours", {}), P = (OEC.parcours && OEC.parcours.list) || [];
    const p = S.actif && P.find((x) => x.id === S.actif.id);
    if (p) out.push([`#parcours-${p.id}`, "Parcours en cours", p.titre, `Reprendre à l’étape ${Math.min(S.actif.i + 1, p.etapes.length)} sur ${p.etapes.length} →`]);
    const d = get("oec-derniere", null);
    if (d && d.h && d.t) out.push([d.h, "Dernière page ouverte", d.t, "Reprendre la lecture →"]);
    const b = get("oec-boussole", null), e = b && (OEC.economists || []).find((x) => x.id === b.id);
    if (e) out.push([`#eco-${e.id}`, "Votre test", `Vous pensez comme ${e.nom}`, "Lire sa fiche →"]);
    else out.push(["#boussole", "Pas encore fait", "Quel économiste êtes-vous ?", "Dix situations, environ 5 minutes →"]);
    const a = (OEC.actualites || [])[0], vu = get("oec-actu-vue", 0);
    if (a && a.n > vu) out.push(["#actualite", "Nouveau", a.titre, "Lire l’actualité →"]);
    return out.slice(0, 3);
  }
  /* Le bloc se place en haut de l’accueil, dans le héros, pour être vu sans défiler */
  function render() {
    const slot = document.getElementById("retourSlot");
    if (!slot) return;
    const lu = get("oec-lu", []), ex = get("oec-ex", {});
    const revient = lu.length || Object.keys(ex).length || get("oec-derniere", null) || get("oec-boussole", null) || (get("oec-parcours", {}).vus || []).length;
    const cta = document.querySelector('.hero .cta-row a[href="#boussole"]');
    if (cta) cta.textContent = get("oec-boussole", null) ? "Refaire le test" : "Quel économiste êtes-vous ?";
    const lede = document.querySelector(".hero .lede"); if (lede) lede.hidden = !!revient;   /* pour qui revient, la reprise remplace le chapeau */
    if (!revient) { slot.innerHTML = ""; return; }
    let box = document.getElementById("retour");
    if (!box) { box = document.createElement("div"); box.id = "retour"; box.className = "rt-back"; slot.appendChild(box); }
    box.innerHTML = `<p class="eyebrow">Bon retour</p><h3>On reprend où vous en étiez ?</h3><div class="rt-back-list">${items().map(([h, k, t, go]) => `<a href="${h}"><small>${esc(k)}</small><b>${esc(t)}</b><span>${esc(go)}</span></a>`).join("")}</div>`;
  }
  function vue() {
    const v = document.body.dataset.view;
    if (v === "actualite") { const a = (OEC.actualites || [])[0]; if (a) set("oec-actu-vue", a.n); }
    if (!v || v === "accueil") render();
  }
  const go = () => { noter(); vue(); new MutationObserver(vue).observe(document.body, { attributes: true, attributeFilter: ["data-view"] }); };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", () => setTimeout(go, 0)); else setTimeout(go, 0);
  window.addEventListener("load", () => setTimeout(vue, 300));
})();
