/* Œconomia — test de positionnement : six questions pour suggérer un point de départ.
   Deux questions par niveau des exercices (Découverte 1 point, Intermédiaire 2 points, Avancé 3 points), sur 12.
   L’ordre des réponses est mélangé à chaque affichage ; « Je ne sais pas » reste en dernier.
   Seuils : Intermédiaire dès 5 points ; Avancé dès 10 points et avec les deux questions du niveau Avancé réussies.
   Le résultat n’est qu’une suggestion : il ne verrouille rien, et le visiteur choisit s’il l’applique
   (niveau de lecture et profil, gardés dans le navigateur). */
(function () {
  "use strict";
  const NSP = "Je ne sais pas";
  const NIV = { 1: "Découverte", 2: "Intermédiaire", 3: "Avancé" };
  const Q = [
    { pts: 1, theme: "Marché et prix",
      q: "Une mode soudaine rend les vélos électriques très populaires. Que devient leur prix, dans les premiers mois ?",
      o: ["Il baisse, car on en vend davantage et les coûts diminuent", "Il monte, car la demande augmente plus vite que l’offre", "Il ne change pas, car les fabricants fixent eux-mêmes leurs prix", "Il baisse, car les fabricants produisent aussitôt davantage"], c: 1,
      e: "La demande augmente d’un coup, alors que l’offre met du temps à suivre. Le prix monte. C’est le modèle de l’offre et de la demande.", lien: ["#c-offre-demande", "Offre et demande"] },
    { pts: 1, theme: "Monnaie et inflation",
      q: "Votre salaire augmente de 2 % en un an, et les prix de 4 %. Que devient votre pouvoir d’achat ?",
      o: ["Il augmente d’environ 2 %", "Il augmente d’environ 6 %", "Il ne change pas", "Il baisse d’environ 2 %"], c: 3,
      e: "Ce qui compte, c’est le salaire comparé aux prix, soit 2 % − 4 % ≈ −2 %. Le salaire nominal augmente, le salaire réel baisse.", lien: ["#methode-reel", "Passer du nominal au réel"] },
    { pts: 2, theme: "Croissance et PIB",
      q: "En un an, le PIB d’un pays mesuré aux prix courants augmente de 5 %, les prix de 3 % et la population de 1 %. De combien le PIB réel par habitant a-t-il augmenté, à peu près ?",
      o: ["D’environ 9 %", "D’environ 1 %", "D’environ 2 %", "D’environ 4 %"], c: 1,
      e: "Il faut deux étapes. En retirant la hausse des prix, la production réelle augmente d’environ 5 − 3 = 2 %. En la partageant entre 1 % d’habitants en plus, il reste environ 1 % par habitant (1,05 ÷ 1,03 ÷ 1,01 ≈ 1,009).", lien: ["#c-pib", "PIB et ses limites"] },
    { pts: 2, theme: "Finance",
      q: "On vous promet 1 000 francs dans deux ans. Vous pouvez placer votre argent sans risque à 5 % par an. Combien vaut cette promesse aujourd’hui ?",
      o: ["Environ 1 103 francs", "Environ 952 francs", "Environ 907 francs", "Exactement 900 francs"], c: 2,
      e: "Il faut actualiser sur deux ans, 1 000 ÷ 1,05² ≈ 907 francs. Placés à 5 %, 907 francs deviennent bien 1 000 francs en deux ans. Diviser une seule fois par 1,05 oublie une année, et retirer 2 × 5 % oublie les intérêts composés.", lien: ["#methode-interets", "Intérêts composés et actualisation"] },
    { pts: 3, theme: "Concurrence et monopole",
      q: "Une entreprise seule sur son marché fait face à la demande P = 100 − Q et produit à un coût marginal constant de 20 francs. Quel prix maximise son profit ?",
      o: ["50 francs, en vendant 50 unités", "20 francs, en vendant 80 unités", "60 francs, en vendant 40 unités", "80 francs, en vendant 20 unités"], c: 2,
      e: "Le profit est maximal quand la recette marginale égale le coût marginal. La recette totale vaut (100 − Q) × Q, sa dérivée 100 − 2Q. L’égalité 100 − 2Q = 20 donne Q = 40, et la demande donne P = 60. À 50 unités, la recette est maximale mais pas le profit ; à 80 unités, c’est l’issue de la concurrence.", lien: ["#c-concurrence-imparfaite", "Concurrence imparfaite"] },
    { pts: 3, theme: "Politique monétaire",
      q: "L’inflation monte surtout parce que le prix du pétrole a flambé. La banque centrale relève fortement ses taux. Quel est le principal risque ?",
      o: ["Aucun risque réel, car l’inflation vient toujours d’un excès de monnaie", "Une baisse rapide du prix du pétrole, qui créerait ensuite une déflation", "Une hyperinflation, car le crédit plus cher fait monter les coûts", "Aggraver le ralentissement sans agir sur la cause de la hausse des prix"], c: 3,
      e: "Face à un choc d’offre, la banque centrale est prise entre deux maux. Si elle laisse faire, l’inflation risque de s’installer dans les anticipations. Si elle freine, elle réduit la demande au prix d’une hausse du chômage. Les monétaristes insistent sur le premier danger, les keynésiens sur le second. C’est le dilemme de la stagflation.", lien: ["#c-stagflation", "Stagflation"] }
  ];
  const MAX = Q.reduce((s, x) => s + x.pts, 0);
  const NIVEAUX = [
    { min: 0, nom: "Découverte", niveau: "decouvrir", profil: "decouvre", ex: 1,
      texte: "Au niveau Découverte, les exercices demandent de reconnaître une notion, de l’appliquer à un cas concret et de calculer en une étape, comme en fin d’apprentissage de commerce ou en maturité professionnelle. Les versions courtes des notions et les parcours guidés expliquent chaque idée pas à pas, sans prérequis.",
      liens: [["#parcours", "Suivre un parcours guidé"], ["#concepts", "Parcourir les notions en version courte"], ["#ex-marche-1", "S’entraîner au niveau Découverte"]] },
    { min: 5, nom: "Intermédiaire", niveau: "approfondir", profil: "connais", ex: 2,
      texte: "Vous appliquez déjà les notions de base. Le niveau Intermédiaire vous fera raisonner avec un modèle, enchaîner plusieurs étapes de calcul et lire des graphiques et des données, comme en fin de secondaire II exigeant ou en première année de Bachelor. Les notions complètes, avec leurs preuves et leurs objections, sont à votre portée.",
      liens: [["#concepts", "Lire les notions en version complète"], ["#questions", "Explorer les grandes questions"], ["#ex-marche-2", "S’entraîner au niveau Intermédiaire"]] },
    { min: 10, nom: "Avancé", niveau: "approfondir", profil: "connais", ex: 3, tout3: true,
      texte: "Vous maniez déjà des modèles. Le niveau Avancé vise la deuxième et la troisième année de Bachelor, avec des modèles formalisés (optimisation, équilibre, actualisation, théorie des jeux), des données réelles et des rédactions qui comparent plusieurs écoles. Les controverses et les familles de pensée en sont le prolongement naturel.",
      liens: [["#controverses", "Les controverses entre économistes"], ["#familles", "Les familles de pensée"], ["#ex-marche-3", "S’entraîner au niveau Avancé"]] }
  ];
  const get = (k) => { try { return localStorage.getItem(k); } catch (e) { return null; } };
  const set = (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} };
  const melange = (n) => { const a = [...Array(n).keys()]; for (let k = n - 1; k > 0; k--) { const r = Math.floor(Math.random() * (k + 1)); [a[k], a[r]] = [a[r], a[k]]; } return a; };
  let rep = [];

  function render() {
    const root = document.getElementById("posRoot"); if (!root) return;
    rep = Q.map(() => null);
    let avant = null; try { avant = JSON.parse(get("oec-positionnement") || "null"); } catch (e) {}
    root.innerHTML = `${avant ? `<p class="pos-avant">Dernier résultat : <b>${avant.nom}</b> (${avant.score} points sur ${avant.max || 9}). Vous pouvez refaire le test à tout moment.</p>` : ""}
      <div class="quizbox">${Q.map((x, i) => `
        <div class="quizq pos-q" data-i="${i}"><p class="qq"><span class="pos-theme">${i + 1}. ${x.theme} · niveau ${NIV[x.pts]}</span><br>${x.q}</p>
          <div class="qopts">${melange(x.o.length).map((j) => `<button type="button" class="qopt" data-j="${j}" aria-pressed="false">${x.o[j]}</button>`).join("")}<button type="button" class="qopt pos-nsp" data-j="${x.o.length}" aria-pressed="false">${NSP}</button></div>
          <p class="qexpl" hidden></p></div>`).join("")}
      </div>
      <p class="pos-go"><button type="button" class="btn" id="posVoir" disabled>Voir mon résultat</button> <small id="posReste">Répondez aux ${Q.length} questions ; « Je ne sais pas » est une réponse acceptée.</small></p>
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

  /* niveau suggéré : le plus haut dont le seuil est atteint ; l’Avancé exige en plus les deux questions de ce niveau */
  function niveauDe(score, justes) {
    const tout3 = Q.every((x, i) => x.pts < 3 || justes[i]);
    return NIVEAUX.filter((n) => score >= n.min && (!n.tout3 || tout3)).pop();
  }

  function resultat(root) {
    let score = 0;
    const justes = Q.map((x, i) => rep[i] === x.c);
    Q.forEach((x, i) => {
      const box = root.querySelector(`.pos-q[data-i="${i}"]`), ok = justes[i];
      if (ok) score += x.pts;
      box.querySelectorAll(".qopt").forEach((b) => { b.disabled = true; const j = +b.dataset.j; if (j === x.c) b.classList.add("right"); else if (j === rep[i]) b.classList.add("wrong"); });
      const ex = box.querySelector(".qexpl");
      ex.innerHTML = `${ok ? "<b>Bonne réponse.</b> " : ""}${x.e} Pour en savoir plus : <a href="${x.lien[0]}">${x.lien[1]}</a>.`; ex.hidden = false;
    });
    const N = niveauDe(score, justes);
    const presque = N.nom === "Intermédiaire" && score >= 10;
    set("oec-positionnement", JSON.stringify({ score, max: MAX, nom: N.nom, ex: N.ex, d: new Date().toISOString().slice(0, 10) }));
    const res = root.querySelector("#posRes");
    res.innerHTML = `<div class="pos-res"><p class="eyebrow">Votre point de départ suggéré</p>
      <h2>${N.nom}</h2><p class="pos-score">${score} points sur ${MAX}</p>
      <p>${N.texte}</p>${presque ? `<p>Votre score est élevé, mais une des deux questions du niveau Avancé vous a échappé. Essayez quelques exercices de ce niveau pour voir s’ils vous conviennent.</p>` : ""}
      <ul>${N.liens.map(([h, t]) => `<li><a href="${h}">${t} →</a></li>`).join("")}</ul>
      <p class="pos-applique"><button type="button" class="btn small" id="posAppl">Ouvrir les notions en version ${N.niveau === "decouvrir" ? "courte" : "complète"} par défaut</button>
        <button type="button" class="btn small ghost" id="posRefaire">Refaire le test</button></p>
      <p class="pos-note">Avec six questions, ce résultat n’est qu’une indication. Vous pouvez toujours passer d’une version à l’autre avec les boutons « Découvrir » et « Approfondir » de chaque notion, et choisir librement le niveau des exercices.</p></div>`;
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

  OEC.positionnement = { render, _niveau: niveauDe, _Q: Q };
  window.addEventListener("hashchange", () => { if (location.hash === "#positionnement") render(); });
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", render); else render();
})();
