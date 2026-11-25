/* Œconomia — test de positionnement : cinq questions pour suggérer un point de départ.
   Une question par grand thème, de difficulté croissante (points 1, 1, 2, 2, 3). Le résultat n’est qu’une suggestion :
   il ne verrouille rien, et le visiteur choisit s’il l’applique (niveau de lecture et profil, gardés dans le navigateur). */
(function () {
  "use strict";
  const NSP = "Je ne sais pas";
  const Q = [
    { pts: 1, theme: "Marché et prix",
      q: "Une mode soudaine rend les vélos électriques très populaires. Que devient leur prix, dans les premiers mois ?",
      o: ["Il monte, car la demande augmente plus vite que l’offre", "Il baisse, car on en vend davantage", "Il ne change pas, car les fabricants le fixent", "Il baisse, car les fabricants produisent aussitôt en plus grande série"], c: 0,
      e: "La demande augmente d’un coup, alors que l’offre met du temps à suivre : le prix monte. C’est le modèle de l’offre et de la demande.", lien: ["#c-offre-demande", "Offre et demande"] },
    { pts: 1, theme: "Monnaie et inflation",
      q: "Votre salaire augmente de 2 % en un an, et les prix de 4 %. Que devient votre pouvoir d’achat ?",
      o: ["Il baisse d’environ 2 %", "Il augmente de 2 %", "Il augmente de 6 %", "Il ne change pas"], c: 0,
      e: "Ce qui compte, c’est le salaire comparé aux prix : 2 % − 4 % ≈ −2 %. Votre salaire nominal augmente, votre salaire réel baisse.", lien: ["#methode-reel", "Passer du nominal au réel"] },
    { pts: 2, theme: "Croissance et PIB",
      q: "Le PIB d’un pays, mesuré aux prix courants, augmente de 3 % en un an, et les prix augmentent aussi de 3 %. Que s’est-il passé ?",
      o: ["La production réelle n’a presque pas changé", "L’économie a connu une forte croissance", "Le pays est entré en récession", "La population a augmenté de 3 %"], c: 0,
      e: "Toute la hausse vient des prix : en volume, la production est restée stable. La croissance se mesure par le PIB réel, corrigé de l’inflation.", lien: ["#c-pib", "PIB et ses limites"] },
    { pts: 2, theme: "Commerce international",
      q: "Un pays impose un droit de douane élevé sur les voitures importées. Qui en supporte surtout le coût dans ce pays ?",
      o: ["Les acheteurs de voitures, qui paient plus cher et ont moins de choix", "Seulement les constructeurs étrangers", "Personne, puisque l’État encaisse la taxe", "Les exportateurs étrangers de matières premières"], c: 0,
      e: "Le prix intérieur monte : les consommateurs paient plus cher, les producteurs nationaux y gagnent, l’État encaisse une partie, et il reste une perte nette.", lien: ["#c-surplus", "Surplus et perte sèche"] },
    { pts: 3, theme: "Politique économique",
      q: "L’inflation monte surtout parce que le prix du pétrole a flambé. La banque centrale relève fortement ses taux. Quel est le principal risque ?",
      o: ["Aggraver le ralentissement de l’économie, sans agir sur la cause première de la hausse des prix", "Provoquer une hyperinflation", "Faire baisser immédiatement le prix du pétrole", "Aucun : une hausse des taux n’a jamais de coût"], c: 0,
      e: "Face à un choc d’offre, la banque centrale est prise entre deux maux : laisser l’inflation s’installer, ou freiner la demande au prix d’une hausse du chômage. C’est le dilemme de la stagflation.", lien: ["#c-stagflation", "Stagflation"] }
  ];
  const MAX = Q.reduce((s, x) => s + x.pts, 0);
  const NIVEAUX = [
    { min: 0, nom: "Découverte", niveau: "decouvrir", profil: "decouvre", ex: 1,
      texte: "Commencez par les versions courtes des notions et par un parcours guidé : chaque idée y est expliquée pas à pas, sans prérequis.",
      liens: [["#parcours", "Suivre un parcours guidé"], ["#concepts", "Parcourir les notions en version courte"], ["#ex-marche-1", "S’entraîner au niveau Découverte"]] },
    { min: 4, nom: "Intermédiaire", niveau: "approfondir", profil: "connais", ex: 2,
      texte: "Vous avez de bonnes bases. Les notions complètes, avec leurs preuves et leurs objections, sont à votre portée, et les exercices de niveau Intermédiaire vous feront progresser.",
      liens: [["#concepts", "Lire les notions en version complète"], ["#questions", "Explorer les grandes questions"], ["#ex-marche-2", "S’entraîner au niveau Intermédiaire"]] },
    { min: 7, nom: "Avancé", niveau: "approfondir", profil: "connais", ex: 3,
      texte: "Vous maîtrisez déjà les mécanismes de base. Allez directement aux controverses, aux familles de pensée et aux exercices de niveau Avancé.",
      liens: [["#controverses", "Les controverses entre économistes"], ["#familles", "Les familles de pensée"], ["#ex-marche-3", "S’entraîner au niveau Avancé"]] }
  ];
  const get = (k) => { try { return localStorage.getItem(k); } catch (e) { return null; } };
  const set = (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} };
  let rep = [];

  function render() {
    const root = document.getElementById("posRoot"); if (!root) return;
    rep = Q.map(() => null);
    let avant = null; try { avant = JSON.parse(get("oec-positionnement") || "null"); } catch (e) {}
    root.innerHTML = `${avant ? `<p class="pos-avant">Dernier résultat : <b>${avant.nom}</b> (${avant.score} points sur ${MAX}). Vous pouvez refaire le test à tout moment.</p>` : ""}
      <div class="quizbox">${Q.map((x, i) => `
        <div class="quizq pos-q" data-i="${i}"><p class="qq"><span class="pos-theme">${i + 1}. ${x.theme}</span><br>${x.q}</p>
          <div class="qopts">${x.o.concat(NSP).map((o, j) => `<button type="button" class="qopt${j === x.o.length ? " pos-nsp" : ""}" data-j="${j}" aria-pressed="false">${o}</button>`).join("")}</div>
          <p class="qexpl" hidden></p></div>`).join("")}
      </div>
      <p class="pos-go"><button type="button" class="btn" id="posVoir" disabled>Voir mon résultat</button> <small id="posReste">Répondez aux cinq questions ; « Je ne sais pas » est une réponse acceptée.</small></p>
      <div id="posRes" hidden></div>`;
    root.querySelectorAll(".pos-q").forEach((box) => box.addEventListener("click", (ev) => {
      const b = ev.target.closest(".qopt"); if (!b || b.disabled) return;
      const i = +box.dataset.i; rep[i] = +b.dataset.j;
      box.querySelectorAll(".qopt").forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
      const n = rep.filter((r) => r !== null).length;
      root.querySelector("#posVoir").disabled = n < Q.length;
      root.querySelector("#posReste").textContent = n < Q.length ? `Encore ${Q.length - n} question${Q.length - n > 1 ? "s" : ""}.` : "Prêt.";
    }));
    root.querySelector("#posVoir").addEventListener("click", () => resultat(root));
  }

  function resultat(root) {
    let score = 0;
    Q.forEach((x, i) => {
      const box = root.querySelector(`.pos-q[data-i="${i}"]`), ok = rep[i] === x.c;
      if (ok) score += x.pts;
      box.querySelectorAll(".qopt").forEach((b) => { b.disabled = true; const j = +b.dataset.j; if (j === x.c) b.classList.add("right"); else if (j === rep[i]) b.classList.add("wrong"); });
      const ex = box.querySelector(".qexpl");
      ex.innerHTML = `${ok ? "<b>Bonne réponse.</b> " : ""}${x.e} Pour en savoir plus : <a href="${x.lien[0]}">${x.lien[1]}</a>.`; ex.hidden = false;
    });
    const N = NIVEAUX.filter((n) => score >= n.min).pop();
    set("oec-positionnement", JSON.stringify({ score, nom: N.nom, ex: N.ex, d: new Date().toISOString().slice(0, 10) }));
    const res = root.querySelector("#posRes");
    res.innerHTML = `<div class="pos-res"><p class="eyebrow">Votre point de départ suggéré</p>
      <h2>${N.nom}</h2><p class="pos-score">${score} points sur ${MAX}</p>
      <p>${N.texte}</p>
      <ul>${N.liens.map(([h, t]) => `<li><a href="${h}">${t} →</a></li>`).join("")}</ul>
      <p class="pos-applique"><button type="button" class="btn small" id="posAppl">Ouvrir les notions en version ${N.niveau === "decouvrir" ? "courte" : "complète"} par défaut</button>
        <button type="button" class="btn small ghost" id="posRefaire">Refaire le test</button></p>
      <p class="pos-note">Avec cinq questions, ce résultat n’est qu’une indication. Vous pouvez toujours passer d’une version à l’autre avec les boutons « Découvrir » et « Approfondir » de chaque notion, et choisir librement le niveau des exercices.</p></div>`;
    res.hidden = false;
    root.querySelector("#posVoir").closest(".pos-go").hidden = true;
    res.querySelector("#posAppl").addEventListener("click", (ev) => {
      set("oec-niveau", N.niveau); set("oec-profil", N.profil);
      document.querySelectorAll(".profils [data-profil]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.profil === N.profil)));
      ev.target.textContent = "Réglage enregistré ✓"; ev.target.disabled = true;
    });
    res.querySelector("#posRefaire").addEventListener("click", () => { render(); root.scrollIntoView({ block: "start", behavior: "smooth" }); });
    res.scrollIntoView({ block: "start", behavior: "smooth" });
  }

  OEC.positionnement = { render };
  window.addEventListener("hashchange", () => { if (location.hash === "#positionnement") render(); });
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", render); else render();
})();
