/* Œconomia — notices longues, lot 3 (c) : optimum de Pareto, capabilités */
(function () {
  const T = 'style="fill:var(--ink); font:600 13px Manrope, sans-serif"';
  const S = 'style="fill:var(--ink-soft); font:500 11.5px Manrope, sans-serif"';
  const M = 'style="fill:var(--ink-soft); font:500 11px \'JetBrains Mono\', monospace"';
  const fig = (h, body, caption, label) => `<figure class="schema"><svg viewBox="0 0 640 ${h}" role="img" aria-label="${label}">${body}</svg><figcaption>${caption}</figcaption></figure>`;

  /* =====================================================================
     15. OPTIMUM DE PARETO
     ===================================================================== */
  const frontiere = fig(340, (() => {
    const O = [90, 290], Rr = 230, px = (a) => O[0] + Rr * Math.cos(a), py = (a) => O[1] - Rr * Math.sin(a);
    let s = `<line x1="${O[0]}" y1="${O[1]}" x2="${O[0] + Rr + 40}" y2="${O[1]}" style="stroke:var(--line)"/><line x1="${O[0]}" y1="${O[1]}" x2="${O[0]}" y2="${O[1] - Rr - 30}" style="stroke:var(--line)"/>`;
    const p = []; for (let a = 0; a <= Math.PI / 2 + 0.001; a += 0.04) p.push(px(a) + "," + py(a));
    s += `<polyline points="${p.join(" ")}" style="fill:none; stroke:var(--note); stroke-width:3"/>`;
    const A = [O[0] + 90, O[1] - 80];
    s += `<polygon points="${A[0]},${A[1]} ${A[0]},${py(Math.asin(80 / Rr))} ${px(Math.acos(90 / Rr))},${A[1]}" style="fill:var(--gold); opacity:.25"/>`;
    s += `<circle cx="${A[0]}" cy="${A[1]}" r="6" style="fill:var(--serial)"/><text x="${A[0] - 10}" y="${A[1] + 18}" text-anchor="end" style="fill:var(--serial); font:700 13px Manrope, sans-serif">A</text>`;
    const B = [px(1.05), py(1.05)], C = [px(0.25), py(0.25)], Dp = [px(1.45), py(1.45)];
    [[B, "B"], [C, "C"], [Dp, "D"]].forEach(([pt, l]) => { s += `<circle cx="${pt[0]}" cy="${pt[1]}" r="6" style="fill:var(--ink)"/><text x="${pt[0] + 10}" y="${pt[1] - 8}" style="fill:var(--ink); font:700 13px Manrope, sans-serif">${l}</text>`; });
    s += `<text x="${O[0] + Rr + 36}" y="${O[1] + 18}" text-anchor="end" ${M}>bien-être d’Anna →</text><text x="${O[0] - 8}" y="${O[1] - Rr - 36}" ${M}>bien-être de Bruno</text>`;
    s += `<text x="360" y="60" ${T}>Frontière des possibilités de bien-être</text>`;
    s += `<text x="360" y="84" ${S}>A est inefficace : depuis A, on peut améliorer</text><text x="360" y="100" ${S}>le sort de l’un sans nuire à l’autre (zone dorée).</text>`;
    s += `<text x="360" y="128" ${S}>B, C et D sont tous Pareto-optimaux,</text><text x="360" y="144" ${S}>même D, où Bruno a presque tout.</text>`;
    s += `<text x="360" y="172" ${S}>Le critère ne dit pas lequel préférer.</text>`;
    return s;
  })(), "Schéma de la frontière des possibilités de bien-être. Tous les points de la frontière sont optimaux au sens de Pareto ; le critère permet d’écarter les situations gaspilleuses comme A, mais ne tranche pas entre des répartitions très différentes comme C et D.", "Frontière en quart de cercle avec un point intérieur et trois points sur la frontière");

  OEC.notices["optimum-pareto"] = {
    essentiel: [
      "Une situation est optimale au sens de Pareto lorsqu’il est impossible d’améliorer le sort d’une personne sans détériorer celui d’au moins une autre. Elle est inefficace s’il reste des améliorations possibles pour quelqu’un sans perte pour personne.",
      "Ce critère, proposé par Vilfredo Pareto en 1906, permet de juger l’efficacité sans comparer le bonheur de personnes différentes. Les théorèmes du bien-être montrent qu’un marché parfaitement concurrentiel atteint un tel optimum.",
      "Mais le critère est muet sur l’équité : une situation où une seule personne possède presque tout peut être optimale. Et presque toutes les politiques réelles font des gagnants et des perdants, ce qui oblige à des jugements que le critère de Pareto ne permet pas de trancher."
    ],
    sections: [
      { id: "depart", titre: "La question de départ : comment juger une réforme sans comparer les bonheurs ?", html: `
<p>Supposons qu’un gouvernement envisage d’ouvrir un marché à la concurrence étrangère. Les consommateurs paieront moins cher, les entreprises exportatrices gagneront de nouveaux clients, mais les ouvriers d’une usine concurrencée perdront leur emploi. La réforme est-elle bonne ? Pour répondre, il faudrait comparer le gain de millions de consommateurs au drame de quelques milliers de familles. Comment additionner des satisfactions de personnes différentes ? Un franc vaut-il la même chose pour un riche et pour un pauvre ?</p>
<p>Au début du XXe siècle, l’ingénieur et économiste italien Vilfredo <a href="#eco-pareto">Pareto</a>, successeur de Walras à Lausanne, juge ces comparaisons scientifiquement impossibles. Il propose un critère plus modeste, qui n’exige aucune comparaison : une situation est meilleure qu’une autre si au moins une personne y gagne et que personne n’y perd. Ce critère, d’apparence anodine, est devenu la définition même de l’efficacité en économie.</p>` },
      { id: "raisonnement", titre: "Le raisonnement pas à pas", html: `
<h4>1. Amélioration et optimum</h4>
<p>On parle d’amélioration au sens de Pareto lorsqu’un changement améliore la situation d’au moins une personne sans détériorer celle de quiconque. Une situation est optimale au sens de Pareto, ou efficace, lorsqu’il n’existe plus aucune amélioration de ce type. Partager un gâteau entre deux personnes est efficace dès qu’aucune miette n’est perdue, quelle que soit la part de chacune : donner davantage à l’un oblige à prendre à l’autre.</p>
${frontiere}
<h4>2. Une contrainte de modestie</h4>
<p>Pareto parle d’« ophélimité » plutôt que d’utilité, pour désigner la satisfaction que chacun tire des biens selon ses propres goûts, sans jugement moral. Son critère n’exige pas de mesurer cette satisfaction : il suffit de savoir si chacun préfère ou non une situation à une autre. C’est sa force, car il évite les comparaisons entre personnes, et sa faiblesse, car il laisse indéterminées toutes les situations où certains gagnent et d’autres perdent.</p>
<h4>3. Le premier théorème du bien-être</h4>
<p>Le résultat le plus célèbre lié au critère de Pareto est le premier théorème du bien-être, démontré rigoureusement par Kenneth Arrow et Gérard Debreu au début des années 1950. Il établit qu’un équilibre de concurrence parfaite est Pareto-optimal : si tous les marchés existent, si personne n’a de pouvoir sur les prix, s’il n’y a pas d’<a href="#c-externalite">externalités</a> ni d’asymétries d’information, aucun échange supplémentaire ne peut améliorer le sort de quelqu’un sans nuire à un autre. C’est la formalisation moderne de la « main invisible ».</p>
<h4>4. Le second théorème</h4>
<p>Le second théorème établit que, sous certaines conditions, n’importe quelle situation Pareto-optimale peut être atteinte par le marché, à condition de redistribuer au préalable les ressources initiales de manière forfaitaire, c’est-à-dire sans modifier les incitations. Il semble séparer l’efficacité, confiée au marché, et l’équité, confiée à la redistribution. En pratique, les impôts et transferts forfaitaires sont presque impossibles : on taxe le revenu ou la consommation, ce qui modifie les comportements et crée des pertes d’efficacité.</p>
<h4>5. Le critère de compensation</h4>
<p>Comme presque toutes les réformes font des perdants, Nicholas Kaldor et John Hicks proposent en 1939 un critère élargi : une réforme est souhaitable si les gagnants gagnent assez pour pouvoir indemniser les perdants et rester gagnants, même si l’indemnisation n’a pas lieu. Kaldor l’illustre précisément par l’abrogation des Corn Laws en 1846 : les gains des consommateurs dépassaient les pertes des propriétaires fonciers. C’est le fondement de l’analyse coûts-avantages. Mais si l’indemnisation ne se fait pas, des perdants réels subsistent, et le critère cache un jugement de valeur.</p>
<h4>6. Les limites logiques</h4>
<p>Tibor Scitovsky montre en 1941 que le critère de compensation peut conduire à des contradictions : une réforme peut être jugée souhaitable, et son annulation aussi. Kenneth Arrow démontre en 1951 qu’aucune règle de décision collective ne peut satisfaire en même temps quelques exigences élémentaires de cohérence et de démocratie. Amartya <a href="#eco-sen">Sen</a> montre en 1970 qu’on ne peut pas toujours concilier le critère de Pareto et le respect d’un minimum de libertés individuelles. Le critère de Pareto ne suffit donc pas à fonder les choix collectifs.</p>` },
      { id: "preuves", titre: "Ce que disent les faits", html: `
<h4>Les marchés réels sont-ils efficaces ?</h4>
<p>Les conditions du premier théorème ne sont jamais parfaitement réunies. Bruce Greenwald et Joseph Stiglitz montrent en 1986 qu’en présence d’informations imparfaites ou de marchés incomplets, ce qui est la règle, l’équilibre de marché n’est généralement pas Pareto-optimal, et l’intervention publique peut en principe l’améliorer. Le théorème du « second rang » de Richard Lipsey et Kelvin Lancaster (1956) ajoute que lorsqu’une condition d’optimalité est violée, corriger une seule autre distorsion peut aggraver la situation : il n’existe pas de recette simple pour s’approcher de l’optimum.</p>
<h4>Des améliorations de Pareto réelles</h4>
<p>Il existe pourtant des réformes qui ne font presque que des gagnants. Alvin Roth, Nobel 2012, a conçu des systèmes d’échange de reins entre paires de donneurs et de patients incompatibles : la donneuse d’un patient donne à un autre patient compatible, dont le proche donne au premier. Personne n’y perd, des vies sont sauvées. De même, la réorganisation de l’affectation des élèves aux écoles à New York ou à Boston selon des algorithmes d’appariement a réduit le nombre d’élèves mal affectés sans léser les autres.</p>
<h4>L’analyse coûts-avantages en pratique</h4>
<p>Les administrations utilisent quotidiennement des versions du critère de Kaldor-Hicks pour évaluer routes, réglementations ou programmes publics. Ces analyses ont amélioré la qualité des décisions, mais elles reposent sur des choix sensibles : valeur d’une vie statistique, taux d’actualisation des bénéfices futurs, poids accordé aux gains des riches et des pauvres.</p>` }
    ],
    cas: [
      { titre: "Le libre-échange et l’aide aux perdants", html: `
<p>L’ouverture commerciale est l’exemple type d’une réforme qui satisfait le critère de Kaldor-Hicks sans être une amélioration de Pareto : le pays gagne globalement, mais certains travailleurs perdent (<a href="#c-avantage-comparatif">voir l’avantage comparatif</a>). Conscients du problème, les États-Unis créent en 1962 le programme d’aide à l’ajustement commercial (Trade Adjustment Assistance), qui verse des allocations et finance des formations pour les travailleurs touchés par les importations. Les études jugent son ampleur modeste par rapport aux pertes subies, notamment lors du « choc chinois ». L’écart entre compensation possible et compensation effective est au cœur de la défiance envers la mondialisation.</p>` },
      { titre: "L’échange de reins", html: `
<p>Une personne qui veut donner un rein à son conjoint malade n’est souvent pas compatible avec lui. Alvin Roth, Tayfun Sönmez et Utku Ünver conçoivent au début des années 2000 des algorithmes qui forment des chaînes et des cycles d’échange entre de nombreuses paires incompatibles. Chaque donneur donne un rein à un inconnu compatible, et son proche en reçoit un d’un autre donneur. Personne n’est lésé, plusieurs patients sont greffés. Ces programmes, d’abord en Nouvelle-Angleterre, se sont étendus à de nombreux pays, dont la Suisse, qui a lancé un programme national de don croisé en 2019. C’est une amélioration de Pareto au sens strict, rendue possible par une institution bien conçue plutôt que par le marché, l’achat d’organes étant interdit.</p>` },
      { titre: "La réforme des retraites et l’impossibilité de Pareto", html: `
<p>Les réformes des retraites illustrent la difficulté inverse. Face au vieillissement, il faut augmenter les cotisations, reculer l’âge de la retraite ou baisser les rentes : chaque option fait des perdants, actifs, retraités ou générations futures. Aucune n’est une amélioration de Pareto. En Suisse, la réforme AVS 21, qui relève de 64 à 65 ans l’âge de référence des femmes et augmente la TVA, est acceptée de justesse en votation en septembre 2022. Le débat ne porte pas sur l’efficacité au sens de Pareto, mais sur la répartition des efforts entre groupes, exactement le terrain où le critère reste muet et où la décision devient politique.</p>` }
    ],
    objections: `
<h4>1. Le silence sur l’équité</h4>
<p>Le critère de Pareto juge efficace une société où une personne possède tout, dès lors qu’on ne peut rien lui retirer sans la léser. Amartya Sen écrivait qu’une société peut être Pareto-optimale tout en étant « parfaitement odieuse ». L’efficacité n’est qu’une dimension du jugement sur une situation.</p>
<h4>2. Un biais en faveur du statu quo</h4>
<p>En exigeant que personne ne perde, le critère donne de fait un droit de veto à ceux qui bénéficient de la situation existante, même si elle est le fruit d’injustices passées. Toute réforme redistributive est exclue par construction.</p>
<h4>3. La comparaison entre personnes est inévitable</h4>
<p>En pratique, les décisions publiques comparent constamment des gains et des pertes de personnes différentes. Refuser ces comparaisons au nom de la science ne les supprime pas ; cela les rend implicites. Des économistes comme Abram Bergson et Samuelson ont proposé des « fonctions de bien-être social » qui explicitent ces jugements.</p>
<h4>4. Les préférences elles-mêmes</h4>
<p>Le critère prend les préférences comme données. Or elles peuvent être déformées par la pauvreté, l’habitude ou la publicité : une personne habituée aux privations peut se déclarer satisfaite de peu. C’est l’une des raisons qui ont conduit Sen à proposer l’approche par les <a href="#c-capabilites">capabilités</a>.</p>`,
    ecoles: `
<p><b><a href="#eco-smith">Smith</a></b> et sa « main invisible » sont l’intuition que les théorèmes du bien-être formaliseront.</p>
<p><b><a href="#eco-walras">Walras</a></b> construit l’équilibre général, et <a href="#eco-pareto">Pareto</a> lui donne son critère d’efficacité.</p>
<p><b>Francis Edgeworth</b> invente en 1881 la « boîte » qui représente l’échange entre deux personnes et la courbe des contrats efficaces.</p>
<p><b><a href="#eco-samuelson">Samuelson</a>, Arrow et Debreu</b> formalisent les théorèmes du bien-être et leurs conditions.</p>
<p><b><a href="#eco-hayek">Hayek</a></b> se méfie de l’économie du bien-être, qui suppose que l’on connaît les préférences et les possibilités ; pour lui, le marché est un processus de découverte plutôt qu’un état d’équilibre optimal.</p>
<p><b><a href="#eco-sen">Sen</a></b> en montre les limites logiques et éthiques et ouvre la voie à d’autres critères de jugement.</p>`,
    source: {
      titre: "Vilfredo Pareto, Manuel d’économie politique, édition française de 1909, chapitre VI",
      texte: "Nous dirons que les membres d’une collectivité jouissent, dans une certaine position, du maximum d’ophélimité, quand il est impossible de trouver un moyen de s’éloigner très peu de cette position, de telle sorte que l’ophélimité dont jouit chacun des individus de cette collectivité augmente ou diminue.",
      notes: `
<p><b>Le contexte.</b> Pareto écrit à Lausanne, dans le prolongement de Walras, mais avec une ambition différente : bâtir une science économique débarrassée de toute considération morale. Il réserve les questions de justice à la sociologie, à laquelle il consacre ses dernières années.</p>
<p><b>Un mot oublié.</b> L’« ophélimité » désigne la satisfaction tirée d’un bien, « qu’il soit utile ou nuisible », selon Pareto lui-même. Le terme n’a pas survécu, mais la distinction qu’il marquait, entre désir et utilité morale, est restée.</p>
<p><b>La formulation précise.</b> Dans le texte, Pareto ajoute que le mouvement doit être « agréable à certains et désagréable à d’autres » pour être impossible. C’est la définition exacte de l’optimum : tout déplacement fait au moins un perdant.</p>`
    },
    quiz: [
      { q: "Quand une situation est-elle optimale au sens de Pareto ?",
        o: ["Quand chacun a la même chose", "Quand on ne peut améliorer le sort de quelqu’un sans détériorer celui d’au moins un autre", "Quand la production est maximale", "Quand l’État a redistribué les revenus"], c: 1,
        e: "L’optimum de Pareto est l’absence de toute amélioration possible sans perdant ; il ne dit rien de l’égalité." },
      { q: "Une réforme fait gagner 100 à Anna et perdre 20 à Bruno, sans compensation. Est-ce une amélioration de Pareto ?",
        o: ["Oui, car le gain total est positif", "Non, car Bruno perd ; c’est en revanche une amélioration au sens de Kaldor-Hicks", "Oui, si Anna est plus pauvre", "Non, et ce n’est pas non plus une amélioration de Kaldor-Hicks"], c: 1,
        e: "Anna pourrait indemniser Bruno et rester gagnante (critère de Kaldor-Hicks), mais tant que l’indemnisation n’a pas lieu, Bruno est perdant." },
      { q: "Que dit le premier théorème du bien-être ?",
        o: ["L’État doit fixer les prix", "Un équilibre de concurrence parfaite est Pareto-optimal, sous certaines conditions", "Les marchés réels sont toujours efficaces", "La redistribution est inutile"], c: 1,
        e: "Sous des conditions strictes (marchés complets, pas d’externalités ni de pouvoir de marché, information parfaite), le marché atteint l’efficacité." },
      { q: "Pourquoi le critère de Pareto est-il souvent jugé favorable au statu quo ?",
        o: ["Parce qu’il interdit toute réforme qui fait un perdant, même minime", "Parce qu’il favorise les pauvres", "Parce qu’il impose l’égalité", "Parce qu’il ne s’applique qu’aux marchés"], c: 0,
        e: "En exigeant que personne ne perde, il donne un droit de veto implicite à ceux que la situation actuelle avantage." },
      { q: "Pourquoi l’échange croisé de reins est-il une amélioration de Pareto ?",
        o: ["Parce que les organes sont vendus", "Parce que plusieurs patients sont greffés sans que personne ne soit lésé", "Parce que l’État paie les donneurs", "Parce qu’il réduit les dépenses de santé"], c: 1,
        e: "Chaque donneur donne comme prévu, chaque patient reçoit un rein compatible : il n’y a que des gagnants." }
    ],
    ouverte: {
      q: "La réforme AVS 21, acceptée en 2022, a relevé l’âge de la retraite des femmes à 65 ans. Comment l’analyser avec les critères de Pareto et de Kaldor-Hicks ?",
      r: "Ce n’est pas une amélioration de Pareto : les femmes concernées travaillent un an de plus ou touchent leur rente plus tard, et sont donc perdantes, au moins à court terme. Selon le critère de Kaldor-Hicks, on peut soutenir que le gain collectif, stabilisation du financement de l’AVS et égalité formelle de l’âge de référence, dépasse ces pertes. La réforme comprenait d’ailleurs des mesures de compensation pour les générations de femmes les plus proches de la retraite, ce qui la rapproche d’une compensation effective, partielle. Mais juger si cette compensation était suffisante, et si l’égalité de l’âge était juste compte tenu des inégalités de salaires et de rentes entre femmes et hommes, suppose des jugements de valeur que ni Pareto ni Kaldor-Hicks ne tranchent. Le résultat très serré de la votation reflète ce désaccord sur l’équité, et non sur l’efficacité."
    },
    lectures: [
      ["Accessible", "Amartya Sen, Éthique et économie, 1987, une critique claire des limites de l’économie du bien-être."],
      ["Accessible", "Alvin Roth, Who Gets What, and Why, 2015, sur la conception des marchés et des appariements."],
      ["Intermédiaire", "Vilfredo Pareto, Manuel d’économie politique (1906, éd. française 1909), chapitres III et VI."],
      ["Intermédiaire", "Hal Varian, Introduction à la microéconomie (manuel), chapitres sur l’échange et le bien-être."],
      ["Recherche", "Nicholas Kaldor, « Welfare Propositions of Economics and Interpersonal Comparisons of Utility », Economic Journal, 1939 ; Bruce Greenwald et Joseph Stiglitz, « Externalities in Economies with Imperfect Information and Incomplete Markets », Quarterly Journal of Economics, 1986."]
    ],
    decouvrir: {
      duree: 5,
      html: `
<h3>Peut-on juger une réforme sans comparer les bonheurs ?</h3>
<p>Une réforme fait gagner des millions de consommateurs et perdre leur emploi à quelques milliers d’ouvriers. Est-elle bonne ? Pour le dire, il faudrait comparer le bonheur des uns au malheur des autres. L’économiste <a href="#eco-pareto">Vilfredo Pareto</a> jugeait ces comparaisons impossibles. Il a proposé un critère plus simple.</p>
<h3>Le critère de Pareto</h3>
<p>Une situation s’améliore si au moins une personne y gagne et que personne n’y perd. Quand plus aucune amélioration de ce genre n’est possible, la situation est dite <b>optimale au sens de Pareto</b>, ou efficace. Partager un gâteau sans en perdre une miette est efficace, quelle que soit la taille des parts.</p>
${frontiere}
<h3>Efficace ne veut pas dire juste</h3>
<p>C’est la limite du critère : une situation où une seule personne a presque tout peut être efficace, puisqu’on ne peut rien lui prendre sans la léser. Et presque toutes les réformes réelles font des gagnants et des perdants. Les économistes utilisent alors un critère élargi : une réforme est bonne si les gagnants pourraient indemniser les perdants. Mais si l’indemnisation n’a pas lieu, les perdants restent perdants.</p>
<h3>À retenir</h3>
<p>Le critère de Pareto sert à repérer le gaspillage, pas à décider ce qui est juste. Les choix de répartition, comme dans une réforme des retraites, restent des choix politiques. La notice complète présente les théorèmes, les exemples et les critiques.</p>`,
      quiz: [0, 1]
    },
    resumes: {
      depart: "Comment juger une réforme qui fait des gagnants et des perdants ?",
      raisonnement: "Six étapes, de la définition aux théorèmes du bien-être et à leurs limites logiques.",
      preuves: "Les marchés imparfaits, des améliorations de Pareto réelles, l’analyse coûts-avantages.",
      cas: "Le libre-échange et l’aide aux perdants, l’échange de reins, la réforme AVS 21.",
      objections: "Le silence sur l’équité, le biais du statu quo, les comparaisons inévitables, les préférences.",
      ecoles: "Smith, Walras et Pareto, Edgeworth, Samuelson-Arrow-Debreu, Hayek, Sen.",
      source: "Pareto, 1909 : la définition du maximum d’ophélimité.",
      quiz: "Cinq questions corrigées et une question sur la réforme AVS 21.",
      lectures: "Cinq lectures classées par niveau."
    }
  };

  /* =====================================================================
     16. CAPABILITÉS (SEN)
     ===================================================================== */
  const chaine = fig(270, `
    ${[["Ressources", "revenu, biens,", "services publics", "gold", 10], ["Facteurs de conversion", "santé, handicap, climat,", "normes sociales, discriminations", "serial", 170], ["Capabilités", "ce que la personne", "peut être et faire", "note", 330], ["Fonctionnements", "ce qu’elle choisit", "d’être et de faire", "plum", 490]].map(([a, b, c, col, x]) => `
      <rect x="${x}" y="40" width="140" height="104" rx="10" style="fill:var(--card); stroke:var(--${col}); stroke-width:1.5"/>
      <text x="${x + 70}" y="70" text-anchor="middle" style="fill:var(--${col}); font:700 13px Manrope, sans-serif">${a}</text>
      <text x="${x + 70}" y="98" text-anchor="middle" ${S}>${b}</text><text x="${x + 70}" y="116" text-anchor="middle" ${S}>${c}</text>`).join("")}
    ${[150, 310, 470].map((x) => `<line x1="${x}" y1="92" x2="${x + 18}" y2="92" style="stroke:var(--ink-soft); stroke-width:1.5"/><path d="M${x + 12},86 L${x + 18},92 L${x + 12},98" style="fill:none; stroke:var(--ink-soft); stroke-width:1.5"/>`).join("")}
    <text x="320" y="184" text-anchor="middle" ${T}>Pourquoi le revenu ne suffit pas à mesurer le bien-être</text>
    <text x="320" y="208" text-anchor="middle" ${S}>Deux personnes au même revenu n’ont pas les mêmes possibilités si l’une est malade,</text>
    <text x="320" y="226" text-anchor="middle" ${S}>vit sans transports publics, ou subit des discriminations. Sen propose d’évaluer</text>
    <text x="320" y="244" text-anchor="middle" ${S}>la liberté réelle de choisir sa vie, c’est-à-dire l’ensemble des capabilités.</text>`,
    "L’approche par les capabilités. Les ressources ne sont que des moyens ; ce qui compte, c’est ce que chacun peut réellement en faire, compte tenu de sa situation.",
    "Chaîne en quatre étapes : ressources, facteurs de conversion, capabilités, fonctionnements");

  OEC.notices["capabilites"] = {
    essentiel: [
      "Pour Amartya Sen, le bien-être d’une personne ne se mesure ni à son revenu, ni à sa satisfaction déclarée, mais à ses « capabilités » : l’ensemble des façons de vivre qu’elle est réellement en mesure de choisir, être en bonne santé, s’instruire, se déplacer, participer à la vie publique.",
      "Le revenu ne suffit pas, parce que les personnes n’ont pas les mêmes besoins pour atteindre les mêmes buts ; la satisfaction ne suffit pas, parce que les plus démunis apprennent souvent à se contenter de peu.",
      "Cette approche a transformé la mesure du développement, avec l’Indice de développement humain (1990) et l’indice de pauvreté multidimensionnelle (2010), et nourri les débats sur les indicateurs de bien-être au-delà du PIB."
    ],
    sections: [
      { id: "depart", titre: "La question de départ : plus riche, mais mourant plus jeune", html: `
<p>Dans Un nouveau modèle économique (Development as Freedom, 1999), <a href="#eco-sen">Amartya Sen</a> relève une comparaison qui dérange. Les Afro-Américains ont, en moyenne, un revenu bien supérieur à celui des habitants de la Chine ou de l’État indien du Kerala. Pourtant, les hommes afro-américains ont alors moins de chances d’atteindre un âge avancé que les hommes de Chine ou du Kerala. Plus riches en revenu, ils sont plus pauvres en possibilité de vivre longtemps.</p>
<p>L’exemple montre que le revenu, indicateur central de l’économie du développement, peut tromper. Ce qui compte, pour Sen, c’est ce que les personnes peuvent réellement faire de leur vie : vivre en bonne santé, échapper à une mort évitable, s’instruire, participer à la vie de leur communauté. Il appelle ces possibilités des « capabilités ». L’idée a changé la manière dont les Nations unies mesurent le progrès des pays.</p>` },
      { id: "raisonnement", titre: "Le raisonnement pas à pas", html: `
<h4>1. L’égalité de quoi ?</h4>
<p>En 1979, dans une conférence intitulée « Equality of What? », Sen pose une question qui structure toute son œuvre. Toutes les théories de la justice défendent l’égalité de quelque chose : l’égalité de satisfaction pour les utilitaristes, l’égalité des « biens premiers » (droits, revenus, bases du respect de soi) pour John Rawls, l’égalité des libertés formelles pour les libertariens. Le désaccord ne porte pas sur l’égalité elle-même, mais sur ce qu’il faut égaliser.</p>
<h4>2. Les limites de l’utilité</h4>
<p>L’économie du bien-être mesure traditionnellement le bien-être par l’utilité, la satisfaction des préférences. Sen objecte que les préférences s’adaptent aux circonstances. Une femme à qui l’on a toujours refusé l’instruction, un travailleur pauvre habitué aux privations peuvent déclarer une satisfaction élevée parce qu’ils ont appris à ne pas désirer ce qu’ils ne peuvent obtenir. Mesurer le bien-être par la satisfaction reviendrait à juger que leur situation est bonne. Sen parle de « préférences adaptatives ».</p>
<h4>3. Les limites du revenu</h4>
<p>Mesurer le bien-être par le revenu ou les ressources ne suffit pas non plus, car les personnes ne convertissent pas les ressources en possibilités de la même façon. Sen distingue plusieurs « facteurs de conversion » : personnels (une personne en fauteuil roulant a besoin de plus de ressources pour se déplacer), sociaux (une femme peut être empêchée de travailler par les normes de sa société), environnementaux (le chauffage coûte plus cher dans un climat froid). À revenu égal, les possibilités réelles diffèrent.</p>
${chaine}
<h4>4. Fonctionnements et capabilités</h4>
<p>Sen appelle « fonctionnements » les états et activités qui constituent une vie : être bien nourri, en bonne santé, instruit, avoir un logement, participer à la vie publique, se montrer en public sans honte. Les « capabilités » sont l’ensemble des combinaisons de fonctionnements qu’une personne peut choisir. La distinction compte : quelqu’un qui jeûne par conviction religieuse et quelqu’un qui a faim faute de nourriture ont le même fonctionnement, mais pas la même capabilité. Seul le premier a choisi.</p>
<h4>5. Le développement comme liberté</h4>
<p>Il en découle une conception du développement : le but n’est pas d’abord d’augmenter le revenu, mais d’élargir les libertés réelles des personnes. La croissance est un moyen important, mais pas le seul : l’éducation, la santé publique, les droits politiques et l’égalité entre femmes et hommes sont à la fois des fins en soi et des moyens d’autres progrès. Sen insiste sur le rôle de la démocratie et d’une presse libre, qui obligent les gouvernants à réagir aux crises.</p>
<h4>6. Une liste ou pas de liste ?</h4>
<p>Sen refuse de dresser une liste définitive des capabilités essentielles : selon lui, c’est à chaque société d’en débattre démocratiquement. La philosophe Martha Nussbaum, qui a développé l’approche avec lui, propose au contraire une liste de dix capabilités centrales, de la vie et la santé corporelle jusqu’au contrôle de son environnement politique et matériel, que toute société juste devrait garantir à un seuil minimal. Cette différence reste l’un des grands débats internes à l’approche.</p>` },
      { id: "preuves", titre: "Ce que disent les faits", html: `
<h4>L’Indice de développement humain</h4>
<p>En 1990, l’économiste pakistanais Mahbub ul Haq, ami de Sen, lance au Programme des Nations unies pour le développement le premier Rapport sur le développement humain. Il propose l’Indice de développement humain (IDH), qui combine l’espérance de vie, le niveau d’éducation et le revenu par habitant. Sen avait d’abord jugé l’indice trop grossier, avant d’accepter son intérêt : un chiffre simple pour concurrencer le PIB dans le débat public. L’IDH a révélé des écarts frappants entre pays de revenu comparable, et a placé la santé et l’éducation au centre des politiques de développement.</p>
<h4>Les « femmes manquantes »</h4>
<p>En 1990, Sen publie un article intitulé « More Than 100 Million Women Are Missing ». Dans les pays où les femmes ont un accès égal à la nourriture et aux soins, elles sont légèrement plus nombreuses que les hommes, parce qu’elles vivent plus longtemps. En Chine, en Inde et dans d’autres pays, le rapport est inverse. En comparant ces rapports, Sen estime que plus de cent millions de femmes « manquent » en raison de la discrimination : avortements sélectifs, moindre accès aux soins et à la nourriture. L’exemple montre ce que le revenu par habitant ne voit pas : des inégalités de capabilités à l’intérieur même des familles.</p>
<h4>Au-delà du PIB</h4>
<p>En 2009, la commission présidée par Joseph Stiglitz, avec Sen comme conseiller et Jean-Paul Fitoussi comme coordinateur, recommande de compléter le PIB par des mesures de qualité de vie, de répartition et de soutenabilité. En 2010, Sabina Alkire et James Foster, à Oxford, construisent un indice de pauvreté multidimensionnelle, adopté par le PNUD, qui mesure les privations simultanées en santé, éducation et conditions de vie.</p>` }
    ],
    cas: [
      { titre: "La famine du Bengale de 1943", html: `
<p>Enfant, Sen voit la famine du Bengale, qui fait environ trois millions de morts. Des décennies plus tard, il l’étudie dans Poverty and Famines (1981). La production de riz en 1943 n’est pas exceptionnellement basse. Mais l’économie de guerre, l’afflux de dépenses militaires à Calcutta et la spéculation font flamber les prix alimentaires, alors que les revenus des ouvriers agricoles, des pêcheurs et des artisans ne suivent pas. Ce sont eux qui meurent. La famine n’est pas un manque de nourriture, mais l’effondrement des « droits d’accès » de certains groupes, c’est-à-dire de leur capabilité à se nourrir. Sen ajoute qu’aucune famine importante n’a eu lieu dans une démocratie dotée d’élections et d’une presse libre.</p>` },
      { titre: "Le Kerala", html: `
<p>L’État indien du Kerala a longtemps eu un revenu par habitant modeste, inférieur à la moyenne indienne pendant des décennies. Il a pourtant atteint une espérance de vie, un taux d’alphabétisation et une mortalité infantile proches de ceux de pays bien plus riches. Sen l’explique par des politiques publiques anciennes d’éducation, y compris des filles, de santé publique et de distribution alimentaire, soutenues par une forte mobilisation politique et sociale. Le cas montre qu’on peut élargir les capabilités essentielles avant d’être riche, et que le revenu n’en est pas la seule condition. Il montre aussi les limites : le chômage des diplômés y est resté élevé, poussant beaucoup de Keralais à émigrer vers les pays du Golfe.</p>` },
      { titre: "La Suisse dans le peloton de tête de l’IDH", html: `
<p>La Suisse figure depuis des années dans le peloton de tête de l’IDH : elle est première dans le Rapport sur le développement humain publié en 2024, puis devancée de peu par l’Islande dans celui de 2025. Ce classement tient à une espérance de vie parmi les plus élevées du monde, un niveau d’éducation élevé et un revenu par habitant important. L’approche des capabilités invite cependant à regarder au-delà des moyennes : elle s’intéresse par exemple à l’accès des personnes handicapées à l’emploi, à l’égalité entre femmes et hommes ou à la situation des personnes sans statut légal, qui ne se reflètent pas dans l’indice global. Le PNUD publie d’ailleurs un IDH ajusté aux inégalités et un indice d’inégalité de genre, qui complètent le classement.</p>` }
    ],
    objections: `
<h4>1. Une approche trop vague</h4>
<p>Les critiques reprochent à Sen de ne pas dire précisément quelles capabilités comptent, ni comment les pondérer entre elles. Sans liste ni pondération, l’approche serait difficile à appliquer et à tester. Sen répond que c’est délibéré : le choix doit relever d’un débat public, et l’approche est un cadre d’évaluation, non une formule.</p>
<h4>2. La mesure</h4>
<p>Les capabilités sont des possibilités, qui ne s’observent pas directement : on ne voit que les fonctionnements réalisés. En pratique, les indicateurs comme l’IDH mesurent surtout des résultats moyens, ce qui les éloigne de l’idée de liberté. Agréger des dimensions différentes en un seul indice suppose aussi des choix arbitraires.</p>
<h4>3. Le risque de paternalisme</h4>
<p>Si ce n’est pas la satisfaction des personnes qui compte, qui décide de ce qui constitue une bonne vie ? Les libéraux craignent qu’une liste de capabilités essentielles ne justifie des politiques qui imposent une conception particulière du bien. Sen insiste sur la liberté de choisir, précisément pour éviter ce risque ; la liste de Nussbaum y est plus exposée.</p>
<h4>4. Rawls suffit-il ?</h4>
<p>Les héritiers de John Rawls estiment que les « biens premiers » sont plus faciles à mesurer et laissent davantage de liberté aux personnes. Sen répond qu’ils ne tiennent pas compte de la diversité humaine dans la conversion des ressources en possibilités. Le débat entre les deux approches reste central en philosophie politique.</p>`,
    ecoles: `
<p><b><a href="#eco-aristote">Aristote</a></b> est la référence revendiquée par Sen et Nussbaum : la richesse n’est qu’un moyen au service d’une vie accomplie.</p>
<p><b><a href="#eco-smith">Smith</a></b> notait que les « choses nécessaires » dépendent des normes sociales : une chemise de lin était nécessaire pour paraître en public sans honte. Sen cite souvent cet exemple.</p>
<p><b><a href="#eco-mill">Mill</a></b> insistait sur la liberté individuelle et l’égalité des femmes, deux thèmes centraux de l’approche.</p>
<p><b><a href="#eco-pareto">Pareto</a> et l’économie du bien-être</b> fondent l’évaluation sur les préférences ; Sen en montre les limites.</p>
<p><b>John Rawls</b>, ami et interlocuteur de Sen, propose l’égalité des biens premiers, que Sen juge insuffisante.</p>
<p><b><a href="#eco-duflo">Esther Duflo</a></b> et l’économie du développement expérimentale partagent l’attention aux conditions concrètes de vie, avec des méthodes plus quantitatives.</p>`,
    source: {
      titre: "Amartya Sen, Development as Freedom, 1999, introduction",
      texte: "Le développement peut être vu comme un processus d’expansion des libertés réelles dont jouissent les individus.",
      notes: `
<p><b>Le contexte.</b> Le livre reprend des conférences données à la Banque mondiale en 1996. Sen s’adresse à une institution qui mesurait d’abord le développement par la croissance du PIB et prônait alors des réformes de marché.</p>
<p><b>« Libertés réelles ».</b> Sen distingue les libertés formelles (le droit de voyager) et les libertés réelles (avoir les moyens de le faire). C’est la différence entre un droit et une capabilité.</p>
<p><b>Le développement comme fin et comme moyen.</b> Dans la suite du texte, Sen montre que les libertés sont à la fois le but du développement et son moyen principal : l’éducation des filles réduit la mortalité infantile, la liberté de la presse prévient les famines, les droits politiques améliorent les politiques économiques.</p>`
    },
    quiz: [
      { q: "Que désigne une « capabilité » chez Sen ?",
        o: ["Une compétence professionnelle", "Une façon de vivre qu’une personne est réellement en mesure de choisir", "Le revenu disponible", "Le niveau de satisfaction déclaré"], c: 1,
        e: "Les capabilités sont l’ensemble des fonctionnements (être en bonne santé, instruit, mobile…) qu’une personne peut effectivement atteindre." },
      { q: "Pourquoi Sen juge-t-il la satisfaction déclarée insuffisante pour mesurer le bien-être ?",
        o: ["Parce qu’elle est trop difficile à mesurer", "Parce que les personnes démunies peuvent adapter leurs désirs à leurs privations", "Parce que les riches mentent", "Parce qu’elle dépend du climat"], c: 1,
        e: "Ce sont les « préférences adaptatives » : se déclarer satisfait de peu ne signifie pas que la situation est bonne." },
      { q: "Quelle est la différence entre jeûner et avoir faim selon Sen ?",
        o: ["Aucune", "Le fonctionnement est le même, mais seul celui qui jeûne a la capabilité de manger", "Celui qui jeûne est plus pauvre", "Celui qui a faim est mieux nourri"], c: 1,
        e: "Les deux sont mal nourris, mais seul le premier a choisi ; c’est la liberté de choix, donc la capabilité, qui les distingue." },
      { q: "Quelles dimensions combine l’Indice de développement humain ?",
        o: ["Revenu, inflation, chômage", "Espérance de vie, éducation, revenu par habitant", "PIB, dette, exportations", "Bonheur, liberté, sécurité"], c: 1,
        e: "Créé en 1990 par Mahbub ul Haq avec Sen, l’IDH combine santé, éducation et revenu." },
      { q: "Qu’a montré Sen à propos de la famine du Bengale de 1943 ?",
        o: ["Qu’elle était due à une récolte catastrophique", "Qu’elle venait de l’effondrement des droits d’accès à la nourriture de certains groupes, malgré une production non exceptionnellement basse", "Qu’elle avait été provoquée par une épidémie", "Qu’elle avait touché toutes les classes sociales également"], c: 1,
        e: "La hausse des prix alimentaires, sans hausse des revenus des plus pauvres, a privé certains groupes de la capacité de se nourrir." }
    ],
    ouverte: {
      q: "La Suisse figure parmi les tout premiers pays au classement de l’IDH. Selon l’approche par les capabilités, quels groupes ou quelles dimensions mériteraient malgré tout une attention particulière ?",
      r: "L’approche invite à regarder les personnes dont les facteurs de conversion sont défavorables : les personnes handicapées, dont l’accès à l’emploi et à la mobilité reste limité ; les personnes âgées isolées ; les personnes sans statut légal, qui ont un accès restreint aux soins et au travail déclaré ; les familles monoparentales, plus exposées à la pauvreté. Elle invite aussi à examiner les capabilités politiques, comme la participation des résidents étrangers, privés du droit de vote au niveau fédéral alors qu’ils représentent environ un quart de la population ; et l’égalité entre femmes et hommes, par exemple les écarts de salaires et de rentes ou l’accès aux structures d’accueil de l’enfance. Un indice global élevé peut coexister avec des privations réelles pour certains groupes, que seule une analyse plus fine révèle."
    },
    lectures: [
      ["Accessible", "Amartya Sen, Un nouveau modèle économique (Development as Freedom), 1999."],
      ["Accessible", "Martha Nussbaum, Capabilités : comment créer les conditions d’un monde plus juste ?, 2011."],
      ["Intermédiaire", "Amartya Sen, L’Idée de justice, 2009, sur la comparaison entre l’approche des capabilités et la théorie de Rawls."],
      ["Intermédiaire", "Joseph Stiglitz, Amartya Sen et Jean-Paul Fitoussi, Richesse des nations et bien-être des individus (rapport de 2009)."],
      ["Recherche", "Amartya Sen, « Equality of What? », Tanner Lectures, 1979 ; Amartya Sen, Poverty and Famines, 1981 ; Sabina Alkire et James Foster, « Counting and Multidimensional Poverty Measurement », Journal of Public Economics, 2011."]
    ],
    decouvrir: {
      duree: 5,
      html: `
<h3>Plus riches, mais vivant moins longtemps</h3>
<p>L’économiste <a href="#eco-sen">Amartya Sen</a> a relevé un fait surprenant : à la fin du XXe siècle, les hommes afro-américains, pourtant bien plus riches en moyenne que les habitants du Kerala en Inde, avaient moins de chances d’atteindre un âge avancé. Le revenu ne dit donc pas tout de la qualité d’une vie.</p>
<h3>Ce que l’on peut vraiment faire</h3>
<p>Pour Sen, ce qui compte, ce sont les <b>capabilités</b> : ce qu’une personne est réellement capable d’être et de faire. Être en bonne santé, s’instruire, se déplacer, travailler, participer à la vie publique. Deux personnes avec le même revenu n’ont pas les mêmes possibilités si l’une est malade, handicapée, ou vit dans une société qui l’empêche d’étudier.</p>
${chaine}
<h3>Pourquoi le bonheur déclaré ne suffit pas</h3>
<p>Sen remarque aussi que les personnes très démunies apprennent souvent à se contenter de peu. Leur satisfaction déclarée peut être élevée alors que leur situation est mauvaise. Il faut donc regarder leurs possibilités réelles, pas seulement ce qu’elles disent ressentir.</p>
<h3>À retenir</h3>
<p>Cette idée a inspiré l’Indice de développement humain des Nations unies, qui classe les pays selon la santé, l’éducation et le revenu, et dont la Suisse occupe l’une des toutes premières places. La notice complète présente le raisonnement, les exemples et les débats.</p>`,
      quiz: [0, 2]
    },
    resumes: {
      depart: "Plus riches en revenu, mais vivant moins longtemps.",
      raisonnement: "Six étapes, de « l’égalité de quoi ? » au débat sur la liste des capabilités.",
      preuves: "L’Indice de développement humain, les femmes manquantes, au-delà du PIB.",
      cas: "La famine du Bengale, le Kerala, la Suisse dans le peloton de tête de l’IDH.",
      objections: "Une approche vague, la mesure, le paternalisme, le débat avec Rawls.",
      ecoles: "Aristote, Smith, Mill, Pareto, Rawls, Duflo.",
      source: "Sen, 1999 : le développement comme expansion des libertés réelles.",
      quiz: "Cinq questions corrigées et une question sur la Suisse.",
      lectures: "Cinq lectures classées par niveau."
    }
  };
})();
