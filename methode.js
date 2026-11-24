/* Œconomia — Boîte à outils : fiches de méthode (savoir-faire quantitatifs et rédactionnels).
   Chaque fiche : objectif, méthode pas à pas, exemple résolu, pièges fréquents, mini-entraînement (réponse à afficher).
   Les exercices de la page Entraînement renvoient aux fiches par leur identifiant (lien a[data-fiche]). */
(function () {
  "use strict";
  const P = (...a) => a.map((t) => `<p>${t}</p>`).join("");

  OEC.methode = [
  { id: "variation", titre: "Calculer un taux de variation", court: "Hausses, baisses, points de pourcentage",
    objectif: "Mesurer de combien une grandeur a augmenté ou diminué, en pourcentage.",
    etapes: ["Repérez la valeur de départ (V<sub>départ</sub>) et la valeur d’arrivée (V<sub>arrivée</sub>).", "Calculez la différence : V<sub>arrivée</sub> − V<sub>départ</sub>.", "Divisez par la valeur de <b>départ</b>, puis multipliez par 100.", "Interprétez le signe : positif pour une hausse, négatif pour une baisse."],
    formule: "Taux de variation = (V<sub>arrivée</sub> − V<sub>départ</sub>) ÷ V<sub>départ</sub> × 100",
    exemple: P("Le prix d’un abonnement de transports passe de 80 à 86 francs par mois.", "(86 − 80) ÷ 80 × 100 = 6 ÷ 80 × 100 = <b>7,5 %</b>. Phrase : « Le prix de l’abonnement a augmenté de 7,5 % ».", "Différence entre <b>points</b> et <b>pourcentage</b> : si le chômage passe de 2 % à 3 %, il augmente de <b>1 point</b> de pourcentage, mais de <b>50 %</b> (1 ÷ 2 × 100)."),
    pieges: ["Diviser par la valeur d’arrivée au lieu de la valeur de départ.", "Confondre une hausse de 1 point et une hausse de 1 %.", "Oublier le signe moins d’une baisse."],
    entrainement: [["Les exportations passent de 250 à 230 milliards. Taux de variation ?", "(230 − 250) ÷ 250 × 100 = <b>−8 %</b>."], ["Le taux d’inflation passe de 2 % à 3,5 %. Variation en points ?", "<b>+1,5 point</b> de pourcentage (soit +75 % en relatif)."]],
    themes: ["marche", "croissance", "emploi"] },

  { id: "multiplicateur", titre: "Coefficient multiplicateur et variations successives", court: "Enchaîner des hausses et des baisses, taux moyen",
    objectif: "Enchaîner plusieurs variations et calculer un taux annuel moyen sans se tromper.",
    etapes: ["Transformez chaque taux en coefficient multiplicateur : CM = 1 + taux (hausse de 5 % → 1,05 ; baisse de 5 % → 0,95).", "Pour des variations successives, <b>multipliez</b> les coefficients (on ne les additionne pas).", "Retransformez en taux : taux global = (CM global − 1) × 100.", "Pour un taux annuel moyen sur n années : (CM global)<sup>1/n</sup> − 1."],
    formule: "CM = 1 + t ; CM global = CM<sub>1</sub> × CM<sub>2</sub> × … ; taux moyen = CM<sup>1/n</sup> − 1",
    exemple: P("Une action monte de 20 %, puis baisse de 20 %.", "CM global = 1,20 × 0,80 = 0,96, soit <b>−4 %</b> : on ne revient pas au point de départ.", "Un PIB augmente de 10 % en 5 ans : taux annuel moyen = 1,10<sup>1/5</sup> − 1 ≈ <b>1,92 %</b> par an (et non 2 %)."),
    pieges: ["Additionner des pourcentages successifs (+20 % puis −20 % ≠ 0 %).", "Diviser un taux global par le nombre d’années pour obtenir un taux annuel moyen.", "Oublier qu’une baisse de 50 % nécessite une hausse de 100 % pour revenir au niveau initial."],
    entrainement: [["Un prix augmente de 10 % deux années de suite. Hausse totale ?", "1,10 × 1,10 = 1,21, soit <b>+21 %</b>."], ["Après une baisse de 25 %, de combien doit-on remonter pour retrouver la valeur initiale ?", "1 ÷ 0,75 ≈ 1,333, soit <b>+33,3 %</b>."]],
    themes: ["croissance", "finance", "monnaie"] },

  { id: "indices", titre: "Lire et calculer un indice", court: "Base 100, comparaisons, changement de base",
    objectif: "Comparer l’évolution de grandeurs à partir d’une année de référence.",
    etapes: ["Choisissez une année de base, à laquelle l’indice vaut 100.", "Indice d’une année = valeur de l’année ÷ valeur de l’année de base × 100.", "Lisez directement la variation depuis la base : indice 118 = +18 % depuis l’année de base.", "Pour comparer deux années qui ne sont pas la base, calculez un taux de variation entre les deux indices."],
    formule: "Indice = V<sub>année</sub> ÷ V<sub>base</sub> × 100",
    exemple: P("Le salaire médian passe de 6 200 francs (base, 2016) à 6 800 francs en 2024.", "Indice 2024 = 6 800 ÷ 6 200 × 100 ≈ <b>109,7</b> : hausse de 9,7 % depuis 2016.", "Si l’IPC passe de 104 à 107, l’inflation n’est pas de 3 %, mais de (107 − 104) ÷ 104 × 100 ≈ <b>2,9 %</b>."),
    pieges: ["Soustraire deux indices et lire le résultat comme un pourcentage quand aucun des deux ne vaut 100.", "Comparer les niveaux de deux indices de base différente.", "Oublier que l’indice ne dit rien du niveau absolu, seulement de l’évolution."],
    entrainement: [["Un indice passe de 120 à 150. Variation en % ?", "(150 − 120) ÷ 120 × 100 = <b>+25 %</b>."], ["Indice 85 en base 100 : que s’est-il passé depuis la base ?", "Une baisse de <b>15 %</b>."]],
    themes: ["monnaie", "croissance"] },

  { id: "reel", titre: "Passer du nominal au réel", court: "Pouvoir d’achat, PIB réel, taux d’intérêt réel",
    objectif: "Retirer l’effet de la hausse des prix pour mesurer une évolution « en volume ».",
    etapes: ["Identifiez la grandeur nominale (en francs courants) et l’inflation (ou le déflateur).", "Pour une évolution : (1 + variation nominale) ÷ (1 + inflation) − 1.", "En approximation, pour de petits taux : variation réelle ≈ variation nominale − inflation.", "Pour un niveau : valeur réelle = valeur nominale ÷ (indice des prix ÷ 100)."],
    formule: "Variation réelle = (1 + v<sub>nominale</sub>) ÷ (1 + inflation) − 1 ≈ v<sub>nominale</sub> − inflation",
    exemple: P("Un salaire augmente de 2 % et les prix de 3 %.", "Variation réelle = 1,02 ÷ 1,03 − 1 ≈ <b>−0,97 %</b> : le pouvoir d’achat baisse.", "Un compte rapporte 1 % quand l’inflation est de 2,8 % : taux réel ≈ 1 − 2,8 = <b>−1,8 %</b>."),
    pieges: ["Conclure qu’un salaire « a augmenté » sans tenir compte de l’inflation.", "Utiliser l’approximation pour des taux élevés (hyperinflation, longues périodes).", "Confondre l’IPC (prix à la consommation) et le déflateur du PIB (prix de toute la production)."],
    entrainement: [["Le PIB nominal augmente de 4 %, le déflateur de 1,5 %. Croissance réelle ?", "1,04 ÷ 1,015 − 1 ≈ <b>2,46 %</b> (approximation : 2,5 %)."], ["Une somme de 1 000 francs, avec 5 % d’inflation, vaut combien en francs d’aujourd’hui dans un an ?", "1 000 ÷ 1,05 ≈ <b>952 francs</b>."]],
    themes: ["monnaie", "croissance", "finance"] },

  { id: "proportions", titre: "Parts, moyennes et médianes", court: "Calculer une part, une moyenne pondérée, une médiane",
    objectif: "Décrire une répartition avec les bons indicateurs.",
    etapes: ["<b>Part</b> d’un élément = élément ÷ total × 100.", "<b>Moyenne</b> = somme des valeurs ÷ nombre de valeurs ; <b>moyenne pondérée</b> = somme (valeur × poids) ÷ somme des poids.", "<b>Médiane</b> : rangez les valeurs dans l’ordre ; c’est celle du milieu (ou la moyenne des deux du milieu).", "Comparez moyenne et médiane : un grand écart signale des valeurs extrêmes."],
    formule: "Part = partie ÷ tout × 100 ; moyenne pondérée = Σ (x × p) ÷ Σ p",
    exemple: P("Une classe a 12 apprentis de commerce et 8 de logistique ; leurs moyennes sont 4,8 et 4,3.", "Moyenne de la classe = (12 × 4,8 + 8 × 4,3) ÷ 20 = (57,6 + 34,4) ÷ 20 = <b>4,6</b>, et non (4,8 + 4,3) ÷ 2 = 4,55.", "Salaires de 5 personnes : 4 800, 5 200, 5 500, 6 100, 19 000. Moyenne : 8 120 ; médiane : <b>5 500</b>. La médiane décrit mieux la personne « typique »."),
    pieges: ["Faire la moyenne de moyennes sans pondérer.", "Calculer une part par rapport au mauvais total.", "Présenter la moyenne comme la situation de la majorité quand la distribution est très inégale."],
    entrainement: [["Sur 9,1 millions d’habitants, 2,4 millions n’ont pas la nationalité suisse. Part ?", "2,4 ÷ 9,1 × 100 ≈ <b>26,4 %</b>."], ["Médiane de 3, 9, 4, 12, 7 ?", "Rangés : 3, 4, 7, 9, 12 → médiane <b>7</b>."]],
    themes: ["inegalites", "etat"] },

  { id: "tableaux", titre: "Lire un tableau statistique", court: "Source, unité, champ, date : rédiger une phrase juste",
    objectif: "Extraire une information exacte d’un tableau et la formuler correctement.",
    etapes: ["Lisez le <b>titre</b>, la <b>source</b>, la <b>date</b> et le <b>champ</b> (qui, où, quand).", "Repérez les <b>unités</b> : francs, milliers, %, points, indice base 100.", "Lisez une donnée au croisement d’une ligne et d’une colonne, et rédigez une phrase complète : « Selon [source], en [date], [donnée] [unité] [champ] ».", "Comparez : écarts en points, rapports (« deux fois plus »), évolutions en %.", "Dégagez une tendance générale, puis une exception."],
    formule: "Phrase type : « Selon l’OFS, en 2024, le taux de chômage au sens du BIT était de X % en Suisse. »",
    exemple: P("Tableau : taux de chômage SECO, octobre 2026 : Suisse 3,0 % ; Genève 5,3 %.", "Phrase : « Selon le SECO, fin octobre 2026, 5,3 % de la population active genevoise était inscrite au chômage, contre 3,0 % en moyenne suisse, soit un écart de 2,3 points. »"),
    pieges: ["Oublier l’unité, ou confondre milliers et millions.", "Ignorer le champ (inscrits au SECO ≠ chômeurs au sens du BIT).", "Tirer une conclusion causale d’un simple tableau."],
    entrainement: [["Un tableau indique « en milliers » et une case vaut 141. Que représente-t-elle ?", "<b>141 000</b> unités (par exemple 141 000 chômeurs)."], ["Pourquoi préciser la source d’un chiffre ?", "Parce que deux sources peuvent mesurer différemment la même notion (définitions, champ, méthode) : la source permet de vérifier et de comparer."]],
    themes: ["emploi", "commerce", "inegalites"] },

  { id: "graphiques", titre: "Lire et construire un graphique", court: "Axes, échelles, déplacement ou mouvement le long d’une courbe",
    objectif: "Interpréter correctement un graphique économique et éviter les pièges visuels.",
    etapes: ["Identifiez ce que représentent les <b>axes</b> et leurs <b>unités</b>.", "Vérifiez l’<b>échelle</b> : commence-t-elle à zéro ? Est-elle régulière ?", "Pour l’offre et la demande : un changement de <b>prix</b> fait glisser le long de la courbe ; un changement d’un <b>autre facteur</b> (revenu, goûts, coûts) déplace la courbe.", "Décrivez la tendance générale, les points remarquables (maximum, minimum, rupture) et leur date.", "Pour construire : titre, axes nommés avec unités, source, légende si plusieurs séries."],
    formule: "Demande se déplace à droite → prix et quantité ↑ ; offre se déplace à gauche → prix ↑, quantité ↓",
    exemple: P("Une vague de chaleur augmente la demande de glaces : la courbe de demande se déplace vers la droite, le prix et la quantité d’équilibre augmentent.", "Un graphique dont l’axe vertical commence à 95 au lieu de 0 peut faire paraître une hausse de 2 % spectaculaire."),
    pieges: ["Confondre un déplacement de courbe et un mouvement le long de la courbe.", "Se laisser tromper par une échelle tronquée.", "Lire une corrélation entre deux courbes comme une relation de cause à effet."],
    entrainement: [["Le prix du lait (intrant) augmente : quelle courbe se déplace sur le marché du fromage, et dans quel sens ?", "L’<b>offre</b> se déplace vers la <b>gauche</b> : le prix monte, la quantité baisse."], ["Une baisse du prix du fromage déplace-t-elle la courbe de demande de fromage ?", "<b>Non</b> : on se déplace le long de la courbe de demande."]],
    themes: ["marche", "monnaie"] },

  { id: "equations", titre: "Résoudre un équilibre", court: "Équations linéaires et systèmes simples",
    objectif: "Trouver un prix et une quantité d’équilibre à partir d’équations.",
    etapes: ["Écrivez la condition d’équilibre : quantité demandée = quantité offerte.", "Regroupez les termes en P d’un côté, les nombres de l’autre.", "Isolez P en divisant par son coefficient.", "Remplacez P dans l’une des équations pour trouver Q, et <b>vérifiez</b> avec l’autre."],
    formule: "Q<sub>d</sub> = a − bP et Q<sub>o</sub> = c + dP → P* = (a − c) ÷ (b + d)",
    exemple: P("Q<sub>d</sub> = 120 − 4P et Q<sub>o</sub> = 30 + 2P.", "120 − 4P = 30 + 2P → 90 = 6P → <b>P* = 15</b>.", "Q* = 120 − 4 × 15 = <b>60</b> ; vérification : 30 + 2 × 15 = 60. ✓"),
    pieges: ["Se tromper de signe en changeant un terme de côté.", "Oublier de calculer la quantité après le prix.", "Ne pas vérifier avec la seconde équation."],
    entrainement: [["Q<sub>d</sub> = 200 − 5P, Q<sub>o</sub> = 20 + 4P. Prix d’équilibre ?", "180 = 9P → <b>P* = 20</b> ; Q* = 100."], ["Avec une taxe t payée par les vendeurs, comment s’écrit l’offre ?", "Q<sub>o</sub> = c + d(P − t) : les vendeurs reçoivent P − t."]],
    themes: ["marche", "commerce", "etat"] },

  { id: "elasticite", titre: "Calculer et interpréter une élasticité", court: "Sensibilité d’une grandeur à une autre",
    objectif: "Mesurer à quel point la demande réagit à une variation de prix ou de revenu.",
    etapes: ["Calculez la variation en % de la quantité.", "Calculez la variation en % du prix (ou du revenu, ou du prix d’un autre bien).", "Élasticité = variation en % de la quantité ÷ variation en % de la cause.", "Interprétez : en valeur absolue, moins de 1 = inélastique, plus de 1 = élastique. Pour une élasticité croisée : positive = substituts, négative = compléments."],
    formule: "e = (ΔQ/Q) ÷ (ΔP/P)",
    exemple: P("Le prix des billets de bus augmente de 10 %, le nombre de billets vendus baisse de 4 %.", "e = −4 ÷ 10 = <b>−0,4</b> : demande inélastique. La recette de la compagnie augmente (1,10 × 0,96 ≈ 1,056)."),
    pieges: ["Inverser numérateur et dénominateur.", "Oublier le signe (négatif pour la demande par rapport au prix).", "Conclure qu’une demande inélastique ne réagit pas du tout."],
    entrainement: [["Prix +5 %, quantité −10 %. Élasticité ? Effet sur la recette ?", "e = −2 (élastique) : la recette <b>baisse</b>."], ["Le prix du café monte, les ventes de thé augmentent. Signe de l’élasticité croisée ?", "<b>Positif</b> : thé et café sont des substituts."]],
    themes: ["marche"] },

  { id: "interets", titre: "Intérêts composés, actualisation, règle de 70", court: "Le temps et l’argent",
    objectif: "Calculer ce que devient une somme dans le temps, et ce que vaut aujourd’hui une somme future.",
    etapes: ["Valeur future d’un placement : capital × (1 + taux)<sup>n</sup>.", "Valeur actuelle d’une somme future : somme ÷ (1 + taux)<sup>n</sup>.", "Temps de doublement : environ 70 ÷ taux (en %).", "Comparez toujours des sommes reçues à des dates différentes en les ramenant à la même date."],
    formule: "VF = C × (1 + r)<sup>n</sup> ; VA = F ÷ (1 + r)<sup>n</sup> ; doublement ≈ 70 ÷ r",
    exemple: P("10 000 francs placés à 4 % pendant 20 ans : 10 000 × 1,04<sup>20</sup> ≈ <b>21 911 francs</b>.", "Règle de 70 : à 4 %, un placement double en environ 70 ÷ 4 ≈ <b>17,5 ans</b>.", "Recevoir 10 000 francs dans 5 ans, avec un taux de 3 %, vaut aujourd’hui 10 000 ÷ 1,03<sup>5</sup> ≈ <b>8 626 francs</b>."),
    pieges: ["Multiplier le taux par le nombre d’années (intérêts simples) au lieu d’utiliser une puissance.", "Oublier que des frais ou l’inflation réduisent le rendement réel.", "Comparer directement des sommes reçues à des dates différentes."],
    entrainement: [["1 000 francs à 5 % pendant 3 ans ?", "1 000 × 1,05<sup>3</sup> ≈ <b>1 157,63 francs</b>."], ["À 2 % de croissance par an, en combien de temps le PIB double-t-il ?", "Environ 70 ÷ 2 = <b>35 ans</b>."]],
    themes: ["finance", "croissance"] },

  { id: "argumenter", titre: "Construire une argumentation", court: "Répondre à une question de rédaction en économie",
    objectif: "Rédiger une réponse structurée, nuancée et appuyée sur des notions et des faits.",
    etapes: ["<b>Analysez la question</b> : définissez les mots-clés, repérez le type de question (expliquer, discuter, « faut-il… »).", "<b>Mobilisez des notions</b> du cours (au moins une ou deux), et des <b>faits</b> : chiffres, exemples suisses, épisodes historiques.", "<b>Organisez</b> : pour une question « faut-il », présentez les arguments pour, puis contre (plan dialectique) ; pour une question « pourquoi », présentez plusieurs facteurs.", "Construisez chaque argument en trois temps : <b>idée</b> → <b>explication</b> (mécanisme, notion) → <b>exemple</b>.", "<b>Concluez</b> : répondez clairement à la question, avec une nuance ou une condition."],
    formule: "Argument = Affirmation + Explication (mécanisme) + Exemple (fait, chiffre)",
    exemple: P("Question : « Faut-il plafonner les loyers ? »", "Argument contre : <i>Idée</i> — un plafonnement peut créer une pénurie. <i>Explication</i> — un prix plafond inférieur à l’équilibre fait que la quantité demandée dépasse l’offre, et les propriétaires sont moins incités à construire et à entretenir. <i>Exemple</i> — à Berlin, le plafonnement de 2020 a été suivi d’une forte baisse des logements proposés à la location.", "Conclusion : « Un plafonnement peut protéger les locataires en place à court terme, mais sans hausse de l’offre, il ne résout pas la pénurie. »"),
    pieges: ["Réciter le cours sans répondre à la question posée.", "Donner des opinions sans mécanisme économique ni exemple.", "Oublier la conclusion, ou conclure sans nuance."],
    entrainement: [["Quelle est la différence entre une affirmation et un argument ?", "Un argument <b>justifie</b> l’affirmation par un mécanisme et l’illustre par un exemple."], ["Comment conclure une question « faut-il » de façon nuancée ?", "Répondre clairement, en précisant <b>à quelles conditions</b> ou <b>dans quelle mesure</b> la réponse est valable."]],
    themes: ["marche", "monnaie", "croissance", "emploi", "commerce", "inegalites", "etat", "finance"] },

  { id: "documents", titre: "Analyser un document et exercer son esprit critique", court: "Source, contexte, corrélation et causalité",
    objectif: "Comprendre un document économique et évaluer la solidité de ce qu’il affirme.",
    etapes: ["<b>Présentez</b> le document : nature (tableau, article, graphique), auteur, source, date.", "Dégagez l’<b>idée principale</b> en une phrase.", "Reliez-la à une ou plusieurs <b>notions</b> du cours.", "Exercez votre <b>esprit critique</b> : qui parle, avec quel intérêt ? Les données sont-elles récentes, complètes, comparables ? Une corrélation prouve-t-elle une causalité ?", "Concluez sur l’apport et les limites du document."],
    formule: "Corrélation ≠ causalité : deux grandeurs peuvent évoluer ensemble sans que l’une cause l’autre",
    exemple: P("Un graphique montre que les pays où l’on consomme le plus de chocolat ont le plus de prix Nobel par habitant, avec la Suisse en tête.", "Il y a <b>corrélation</b>, mais pas de causalité : un troisième facteur, le niveau de richesse, explique à la fois une consommation élevée de chocolat et un système de recherche développé."),
    pieges: ["Paraphraser le document sans l’analyser.", "Prendre un chiffre isolé pour une tendance.", "Confondre corrélation et causalité, ou oublier une variable cachée."],
    entrainement: [["Les villes avec beaucoup de pompiers ont beaucoup d’incendies. Les pompiers causent-ils les incendies ?", "<b>Non</b> : la taille de la ville explique à la fois le nombre de pompiers et le nombre d’incendies."], ["Une étude financée par une association de producteurs conclut que leur produit est bon pour la santé. Que faire ?", "Ne pas la rejeter d’office, mais <b>vérifier</b> la méthode et chercher d’autres études indépendantes."]],
    themes: ["inegalites", "emploi", "croissance"] }
  ];

  /* ---------- Rendu ---------- */
  const THEMES = { marche: "Marché et prix", monnaie: "Monnaie et inflation", croissance: "Croissance et PIB", emploi: "Emploi et chômage", commerce: "Commerce international", inegalites: "Inégalités et répartition", etat: "État et biens publics", finance: "Finance" };
  function fiche(f, i) {
    return `<details class="bloc fiche" id="fiche-${f.id}" data-fiche-id="${f.id}">
      <summary><span class="bnum">${String(i + 1).padStart(2, "0")}</span><span class="btxt"><b>${f.titre}</b><small>${f.court}</small></span><span class="bchev"></span></summary>
      <div class="bbody">
        <p class="fiche-obj"><b>Objectif :</b> ${f.objectif} <button type="button" class="ex-lien fiche-lien" data-lien="methode-${f.id}" title="Copier le lien direct vers cette fiche">Copier le lien</button> <button type="button" class="ex-lien pr-fiche" data-id="${f.id}" title="Imprimer cette fiche, ou l’enregistrer en PDF">Imprimer</button></p>
        <h4>La méthode</h4><ol class="fiche-etapes">${f.etapes.map((e) => `<li>${e}</li>`).join("")}</ol>
        <p class="fiche-formule">${f.formule}</p>
        <h4>Exemple résolu</h4><div class="fiche-ex">${f.exemple}</div>
        <h4>Les pièges</h4><ul class="fiche-pieges">${f.pieges.map((e) => `<li>${e}</li>`).join("")}</ul>
        <h4>À vous</h4><ol class="fiche-train">${f.entrainement.map(([q, r]) => `<li><p>${q}</p><button type="button" class="btn small ghost fiche-voir">Voir la réponse</button><p class="fiche-rep" hidden>${r}</p></li>`).join("")}</ol>
        <p class="fiche-liens"><b>S’entraîner :</b> ${f.themes.map((t) => `<a href="#entrainement" data-ex-theme="${t}">${THEMES[t]}</a>`).join(" · ")}</p>
      </div>
    </details>`;
  }
  function render() {
    const box = document.getElementById("methodeList"); if (!box) return;
    box.innerHTML = `<div class="blocs">${OEC.methode.map(fiche).join("")}</div>`;
  }
  /* Ouvrir une fiche depuis un exercice, ou un thème d’exercices depuis une fiche */
  let pendingFiche = null;
  function openFiche(id) {
    const d = document.getElementById("fiche-" + id); if (!d) return;
    d.open = true;
    setTimeout(() => { const y = d.getBoundingClientRect().top + window.scrollY - ((window.OECAPP && OECAPP.headH) ? OECAPP.headH() : 80); window.scrollTo({ top: y, behavior: "instant" }); }, 60);
  }
  document.addEventListener("click", (e) => {
    const lien = e.target.closest(".fiche-lien");
    if (lien && OEC.copyLink) { OEC.copyLink(lien.dataset.lien, lien); return; }
    const v = e.target.closest(".fiche-voir");
    if (v) { v.nextElementSibling.hidden = false; v.hidden = true; return; }
    const a = e.target.closest("a[data-fiche]");
    if (a) { pendingFiche = a.dataset.fiche; if (location.hash === "#methode") { e.preventDefault(); openFiche(pendingFiche); pendingFiche = null; } return; }
    const t = e.target.closest("a[data-ex-theme]");
    if (t) { try { localStorage.setItem("oec-ex-pos", JSON.stringify({ theme: t.dataset.exTheme, niveau: 1 })); } catch (err) {} if (OEC.exo && OEC.exo.show) OEC.exo.show(t.dataset.exTheme); }
  });
  window.addEventListener("hashchange", () => { if (location.hash === "#methode" && pendingFiche) { const id = pendingFiche; pendingFiche = null; setTimeout(() => openFiche(id), 200); } });
  /* lien direct : #methode/<fiche> */
  const fromHash = () => { const m = location.hash.match(/^#methode[\/-]([a-z-]+)$/); if (m) setTimeout(() => openFiche(m[1]), 300); };
  window.addEventListener("hashchange", fromHash);
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", fromHash); else fromHash();
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", render); else render();
})();
