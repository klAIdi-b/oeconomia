/* Œconomia — page « Ma progression ».
   Rassemble ce que le visiteur a lu (notices, dossiers, portraits) et les exercices réussis,
   et propose la suite. Tout est enregistré dans le navigateur (localStorage « oec-lu » et « oec-ex »). */
(function () {
  "use strict";
  const NIV = { 1: "Découverte", 2: "Intermédiaire", 3: "Avancé" };
  const PREFIX = { m: "marche", mo: "monnaie", cr: "croissance", em: "emploi", co: "commerce", in: "inegalites", et: "etat", fi: "finance", vi: "visions" };
  const get = (k, d) => { try { return JSON.parse(localStorage.getItem(k) || "") || d; } catch (e) { return d; } };
  const bar = (n, t) => `<span class="pg-bar"><i style="width:${t ? Math.round((100 * n) / t) : 0}%"></i></span>`;

  /* ---------- Badges : de petits jalons, calculés à partir de ce qui est déjà enregistré ---------- */
  const HETERO = ["marx", "robinson", "kalecki", "minsky", "kelton", "veblen", "galbraith", "polanyi", "mazzucato", "aglietta", "waring", "mises", "hayek"];
  const DOMINANT = ["smith", "ricardo", "walras", "marshall", "pareto", "samuelson", "friedman", "lucas", "krugman", "summers", "stiglitz", "kahneman", "duflo", "acemoglu", "piketty", "sen", "ostrom"];
  function badges(lu, nbOk, ok, themes) {
    const defis = get("oec-defis", []).length, pc = get("oec-parcours", {}), finis = (pc.finis || []).length;
    const cLus = (OEC.concepts || []).filter((c) => lu.has("c-" + c.id)).length, qLus = (OEC.questions || []).filter((q) => lu.has("q-" + q.id)).length;
    const eLus = (OEC.economists || []).filter((e) => lu.has("eco-" + e.id)).length;
    const het = HETERO.filter((id) => lu.has("eco-" + id)).length, dom = DOMINANT.filter((id) => lu.has("eco-" + id)).length;
    const avance = themes.some((t) => ok[t.id] && ok[t.id][3] >= Math.ceil(Math.round((t.n || 24) / 3) / 2));
    let test = false, chat = false; try { test = !!localStorage.getItem("oec-boussole"); chat = !!localStorage.getItem("oec-chat-vu"); } catch (e) {}
    const B = [
      ["Premiers pas", "Lire une première notion", cLus >= 1, "#concepts"],
      ["Curieux", "Lire 10 notions", cLus >= 10, "#concepts"],
      ["Enquêteur", "Lire 3 grandes questions", qLus >= 3, "#questions"],
      ["Portraitiste", "Lire 5 portraits d’économistes", eLus >= 5, "#pantheon"],
      ["Esprit ouvert", "Lire 3 portraits du courant dominant et 3 portraits hétérodoxes", het >= 3 && dom >= 3, "#familles"],
      ["Connais-toi toi-même", "Faire le test « Quel économiste êtes-vous ? »", test, "#boussole"],
      ["Interviewer", "Ouvrir ŒconoChat", chat, "#tutorat"],
      ["Joueur", "Réussir 5 petits défis", defis >= 5, "#accueil"],
      ["Champion des défis", "Réussir 20 petits défis", defis >= 20, "#accueil"],
      ["Entraîné", "Réussir 10 exercices", nbOk >= 10, "#entrainement"],
      ["Expert", "Réussir la moitié d’un niveau Avancé", avance, "#entrainement"],
      ["Explorateur", "Terminer un parcours guidé", finis >= 1, "#parcours"]
    ];
    const n = B.filter((b) => b[2]).length;
    return `<h3>Vos badges <small class="pg-badge-count">${n} sur ${B.length}</small></h3>
      <div class="pg-badges">${B.map(([t, d, got, h]) => `<a class="pg-badge${got ? " got" : ""}" href="${h}" title="${d}"><span class="pg-medal" aria-hidden="true">${got ? "★" : "☆"}</span><b>${t}</b><small>${got ? "Obtenu" : d}</small></a>`).join("")}</div>`;
  }
  const bcss = document.createElement("style");
  bcss.textContent = `.pg-badges{display:grid; grid-template-columns:repeat(auto-fill, minmax(min(100%, 200px), 1fr)); gap:10px; margin:10px 0 28px}
.pg-badge{display:flex; flex-direction:column; gap:2px; padding:12px 14px; border:1px dashed var(--line); border-radius:var(--r); text-decoration:none; color:var(--ink-soft); background:transparent}
.pg-badge b{color:var(--ink-soft); font-size:15px}
.pg-badge small{font-size:12.5px}
.pg-badge.got{border:1px solid var(--gold); background:var(--card); color:var(--ink)}
.pg-badge.got b{color:var(--ink)}
.pg-medal{font-size:22px; line-height:1; color:var(--line)}
.pg-badge.got .pg-medal{color:var(--gold)}
.pg-badge-count{font:600 13px var(--f-body); color:var(--ink-soft); margin-left:8px}`;
  document.head.appendChild(bcss);

  function render() {
    const root = document.getElementById("progRoot"); if (!root) return;
    const lu = new Set(get("oec-lu", [])), ex = get("oec-ex", {});
    const themes = (OEC.lazy && OEC.lazy.exercises) || [];
    /* exercices réussis par thème et par niveau, d’après l’identifiant de l’exercice */
    const ok = {}; themes.forEach((t) => (ok[t.id] = { 1: 0, 2: 0, 3: 0 }));
    Object.entries(ex).forEach(([id, v]) => { if (!v || !v.ok) return; const p = id.match(/^([a-z]+)(\d)-/); if (p && PREFIX[p[1]] && ok[PREFIX[p[1]]]) ok[PREFIX[p[1]]][+p[2]]++; });
    const nbOk = Object.values(ok).reduce((a, t) => a + t[1] + t[2] + t[3], 0), nbEx = OEC.totaux ? OEC.totaux().exercices : 0;
    const concepts = OEC.concepts || [], questions = OEC.questions || [], ecos = (OEC.economists || []).filter((e) => e.idees);
    const cLus = concepts.filter((c) => lu.has("c-" + c.id)).length, qLus = questions.filter((q) => lu.has("q-" + q.id)).length, eLus = ecos.filter((e) => lu.has("eco-" + e.id)).length;
    const vide = !lu.size && !nbOk;
    const nbAvant = Object.values(ex).filter((v) => v && v.avant && !v.ok).length, nbApres = Object.values(ex).filter((v) => v && v.apres && !v.ok).length;
    const parNiv = (t) => Math.round((t.n || 24) / 3);

    /* suggestions */
    const sug = [];
    themes.forEach((t) => { const k = Math.ceil(parNiv(t) * 0.75); [1, 2].forEach((n) => { if (ok[t.id][n] >= k && ok[t.id][n + 1] < k && sug.length < 4) sug.push([`#ex-${t.id}-${n + 1}`, `Passez au niveau ${NIV[n + 1]} en ${t.nom}`, `Vous avez réussi ${ok[t.id][n]} exercices sur ${parNiv(t)} au niveau ${NIV[n]}.`]); }); });
    themes.forEach((t) => { [1, 2, 3].forEach((n) => { const k = ok[t.id][n]; if (k > 0 && k < 6 && sug.length < 4 && !sug.some((s) => s[0].startsWith(`#ex-${t.id}`))) sug.push([`#ex-${t.id}-${n}`, `Continuez ${t.nom}, niveau ${NIV[n]}`, `${k} exercice${k > 1 ? "s" : ""} réussi${k > 1 ? "s" : ""} sur ${parNiv(t)}.`]); }); });
    const qNon = questions.find((q) => !lu.has("q-" + q.id));
    if (qNon && sug.length < 4) sug.push(["#q-" + qNon.id, `Lisez la grande question « ${qNon.court} »`, qNon.titre]);
    const cNon = concepts.find((c) => !lu.has("c-" + c.id));
    if (cNon && sug.length < 4) sug.push(["#c-" + cNon.id, `Découvrez la notion « ${cNon.nom} »`, cNon.court]);
    if (vide) sug.splice(0, sug.length, ["#parcours", "Suivez un parcours guidé", `${OEC.lettres(OEC.totaux().parcours, true)} itinéraires pour découvrir un sujet pas à pas : l’inflation, les crises, le commerce…`], ["#boussole", "Faites le test « Quel économiste êtes-vous ? »", "Dix situations pour découvrir de quels économistes vous êtes proche."], ["#ex-marche-1", "Commencez l’entraînement", "Marché et prix, niveau Découverte : huit exercices pour démarrer."], ["#c-offre-demande", "Lisez votre première notion", "Offre, demande et élasticité : la base pour comprendre les prix."]);

    root.innerHTML = `
      ${vide ? `<p class="pg-vide">Vous n’avez encore rien lu ni résolu sur cet appareil. Voici par où commencer.</p>` : ""}
      ${nbAvant || nbApres ? `<p class="pg-vide">Un exercice compte comme réussi si vous le réussissez du premier coup, ou en le refaisant un autre jour.${nbApres ? ` ${nbApres} exercice${nbApres > 1 ? "s" : ""} réussi${nbApres > 1 ? "s" : ""} juste après la correction ${nbApres > 1 ? "sont" : "est"} à refaire un autre jour.` : ""}${nbAvant ? ` ${nbAvant} réussite${nbAvant > 1 ? "s" : ""} enregistrée${nbAvant > 1 ? "s" : ""} avant cette règle ${nbAvant > 1 ? "restent signalées" : "reste signalée"} dans les exercices : refaites ${nbAvant > 1 ? "ces exercices pour les" : "cet exercice pour le"} valider.` : ""}</p>` : ""}
      <div class="pg-chiffres">
        <a href="#concepts"><b>${cLus}<small> / ${concepts.length}</small></b><span>notions lues</span>${bar(cLus, concepts.length)}</a>
        <a href="#questions"><b>${qLus}<small> / ${questions.length}</small></b><span>grandes questions lues</span>${bar(qLus, questions.length)}</a>
        <a href="#pantheon"><b>${eLus}<small> / ${ecos.length}</small></b><span>portraits lus</span>${bar(eLus, ecos.length)}</a>
        <a href="#entrainement"><b>${nbOk}<small> / ${nbEx}</small></b><span>exercices réussis</span>${bar(nbOk, nbEx)}</a>
      </div>
      ${badges(lu, nbOk, ok, themes)}
      <h3>Et maintenant ?</h3>
      <div class="pg-sug">${sug.map(([h, t, p]) => `<a class="door" href="${h}"><b>${t}</b><p>${p}</p><span class="go">Y aller →</span></a>`).join("")}</div>
      <h3>Exercices par thème</h3>
      <div class="tablewrap"><table class="positions pg-table"><thead><tr><th>Thème</th>${[1, 2, 3].map((n) => `<th>${NIV[n]}</th>`).join("")}</tr></thead><tbody>
        ${themes.map((t) => `<tr><td>${t.nom}</td>${[1, 2, 3].map((n) => `<td><a href="#ex-${t.id}-${n}">${ok[t.id][n]} / ${parNiv(t)}</a>${bar(ok[t.id][n], parNiv(t))}</td>`).join("")}</tr>`).join("")}
      </tbody></table></div>
      <h3>Notions par domaine</h3>
      <div class="pg-cats">${Object.entries(OEC.conceptCats || {}).map(([k, nom]) => { const cs = concepts.filter((c) => c.cat === k), l = cs.filter((c) => lu.has("c-" + c.id)); const non = cs.filter((c) => !lu.has("c-" + c.id)).slice(0, 3);
        return `<div class="pg-cat"><b>${nom}</b><span>${l.length} / ${cs.length} lues</span>${bar(l.length, cs.length)}${non.length ? `<p>À lire : ${non.map((c) => `<a href="#c-${c.id}">${c.nom}</a>`).join(" · ")}</p>` : `<p>Toutes lues ✓</p>`}</div>`; }).join("")}</div>
      <p class="pg-note">Votre progression est enregistrée dans ce navigateur, sur cet appareil : elle n’est ni envoyée ni visible par d’autres. Une notice, un dossier ou un portrait compte comme « lu » quand vous l’avez parcouru jusqu’au bout ou réussi son quiz ; un exercice, quand vous l’avez réussi.</p>
      <p><button type="button" class="btn small ghost pg-reset">Effacer ma progression</button></p>`;
  }
  document.addEventListener("click", (e) => {
    const b = e.target.closest(".pg-reset"); if (!b) return;
    if (!b.dataset.sure) { b.dataset.sure = "1"; b.textContent = "Confirmer : tout effacer sur cet appareil"; setTimeout(() => { if (b.isConnected) { delete b.dataset.sure; b.textContent = "Effacer ma progression"; } }, 5000); return; }
    try { ["oec-lu", "oec-ex", "oec-ex-pos", "oec-derniere", "oec-boussole", "oec-defis"].forEach((k) => localStorage.removeItem(k)); } catch (err) {}
    render();
  });
  window.addEventListener("hashchange", () => { if (location.hash === "#progression") render(); });
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", render); else render();
  OEC.progression = { render };
})();
