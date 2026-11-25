/* Œconomia — notices longues, lot 8 (b) : hystérèse, fonctions de la monnaie */
(function () {
  const T = 'style="fill:var(--ink); font:600 13px Manrope, sans-serif"';
  const S = 'style="fill:var(--ink-soft); font:500 11.5px Manrope, sans-serif"';
  const M = 'style="fill:var(--ink-soft); font:500 11px \'JetBrains Mono\', monospace"';
  const fig = (h, body, caption, label) => `<figure class="schema"><svg viewBox="0 0 640 ${h}" role="img" aria-label="${label}">${body}</svg><figcaption>${caption}</figcaption></figure>`;
  const arrow = (x1, y1, x2, y2, col = "var(--ink-soft)") => {
    const a = Math.atan2(y2 - y1, x2 - x1), h = 8;
    return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" style="stroke:${col}; stroke-width:1.8"/><polygon points="${x2},${y2} ${x2 - h * Math.cos(a - 0.4)},${y2 - h * Math.sin(a - 0.4)} ${x2 - h * Math.cos(a + 0.4)},${y2 - h * Math.sin(a + 0.4)}" style="fill:${col}"/>`;
  };

  /* =====================================================================
     43. HYSTÉRÈSE
     ===================================================================== */
  const trajets = fig(300, (() => {
    const L = 70, R = 600, B = 240, X = (t) => L + t * (R - L) / 12, Y = (v) => B - v * 18;
    const sans = (t) => t < 2 ? 4 : t < 4 ? 4 + (t - 2) * 2.5 : 9 - (t - 4) * 1.25 > 4 ? 9 - (t - 4) * 1.25 : 4;
    const avec = (t) => t < 2 ? 4 : t < 4 ? 4 + (t - 2) * 2.5 : 9 - (t - 4) * 0.45 > 7 ? 9 - (t - 4) * 0.45 : 7;
    let s = `<text x="20" y="24" ${T}>Le chômage après une récession, avec et sans hystérèse (schéma)</text>`;
    [0, 2, 4, 6, 8, 10].forEach((v) => (s += `<line x1="${L}" y1="${Y(v)}" x2="${R}" y2="${Y(v)}" style="stroke:var(--line)"/><text x="${L - 8}" y="${Y(v) + 4}" text-anchor="end" ${M}>${v} %</text>`));
    s += `<rect x="${X(2)}" y="${Y(10.5)}" width="${X(4) - X(2)}" height="${Y(0) - Y(10.5)}" style="fill:var(--serial); opacity:.08"/><text x="${X(3)}" y="${Y(10.5) + 14}" text-anchor="middle" ${S}>récession</text>`;
    let d1 = "", d2 = ""; for (let t = 0; t <= 12.001; t += 0.1) { d1 += `${t === 0 ? "M" : "L"} ${X(t)} ${Y(sans(t))} `; d2 += `${t === 0 ? "M" : "L"} ${X(t)} ${Y(avec(t))} `; }
    s += `<path d="${d1}" style="fill:none; stroke:var(--note); stroke-width:2.6"/><path d="${d2}" style="fill:none; stroke:var(--serial); stroke-width:2.6; stroke-dasharray:6 4"/>`;
    s += `<text x="${X(11.8)}" y="${Y(4) + 18}" text-anchor="end" style="fill:var(--note); font:700 12px Manrope, sans-serif">sans hystérèse : retour au niveau initial</text>`;
    s += `<text x="${X(11.8)}" y="${Y(9.8)}" text-anchor="end" style="fill:var(--serial); font:700 12px Manrope, sans-serif">avec hystérèse : le chômage reste plus élevé</text>`;
    for (let t = 0; t <= 12; t += 2) s += `<text x="${X(t)}" y="${B + 18}" text-anchor="middle" ${M}>année ${t}</text>`;
    s += `<text x="20" y="286" ${S}>Le choc est le même ; ce qui diffère, c’est la trace qu’il laisse.</text>`;
    return s;
  })(), "Dans la théorie du taux de chômage naturel, une récession fait monter le chômage temporairement, puis il revient à son niveau d’équilibre. Avec l’hystérèse, le niveau d’équilibre lui-même dépend du passé : un chômage élevé pendant longtemps rend le chômage élevé plus durable.", "Deux trajectoires du chômage après une récession");

  const mecanismes = fig(270, (() => {
    let s = `<text x="20" y="24" ${T}>Trois mécanismes par lesquels le chômage s’entretient</text>`;
    const items = [["Capital humain", "Les compétences s’usent, les réseaux se défont, les employeurs se méfient des longues périodes sans emploi.", "var(--note)"], ["Insiders et outsiders", "Les salariés en place négocient pour eux-mêmes ; les chômeurs, absents de la négociation, ne pèsent pas sur les salaires.", "var(--plum)"], ["Capital physique", "Les entreprises investissent moins en récession ; les capacités de production perdues ne reviennent pas d’elles-mêmes.", "var(--gold)"]];
    items.forEach(([n, d, c], i) => {
      const x = 20 + i * 205;
      s += `<rect x="${x}" y="44" width="190" height="200" rx="10" style="fill:var(--card); stroke:${c}; stroke-width:2"/>`;
      s += `<text x="${x + 95}" y="74" text-anchor="middle" style="fill:${c}; font:700 13.5px Manrope, sans-serif">${n}</text>`;
      const words = d.split(" "); let line = "", ly = 104;
      words.forEach((wd) => { if ((line + wd).length > 27) { s += `<text x="${x + 95}" y="${ly}" text-anchor="middle" ${S}>${line.trim()}</text>`; ly += 17; line = ""; } line += wd + " "; });
      s += `<text x="${x + 95}" y="${ly}" text-anchor="middle" ${S}>${line.trim()}</text>`;
    });
    return s;
  })(), "Olivier Blanchard et Lawrence Summers (1986) insistent sur le mécanisme des insiders et des outsiders, formalisé aussi par Assar Lindbeck et Dennis Snower. Les travaux plus récents montrent l’importance des trois canaux, qui touchent à la fois l’emploi et la production potentielle.", "Trois cartes décrivant des mécanismes d’hystérèse");

  OEC.notices["hysterese"] = {
    essentiel: [
      "En économie, l’hystérèse désigne le fait qu’un choc temporaire, comme une récession, laisse des effets durables : le chômage reste élevé, ou la production ne retrouve pas sa tendance d’avant la crise, même une fois la cause disparue.",
      "Le terme, emprunté à la physique du magnétisme, est popularisé en 1986 par Olivier Blanchard et Lawrence Summers pour expliquer la persistance du chômage européen. Les mécanismes en jeu sont la perte de compétences, la position des salariés en place et la baisse de l’investissement.",
      "Si l’hystérèse est importante, les récessions coûtent bien plus qu’on ne le pensait, et il faut les combattre vite et fortement. C’est l’un des arguments en faveur du chômage partiel et d’une politique de demande active en crise."
    ],
    sections: [
      { id: "depart", titre: "La question de départ : pourquoi le chômage européen n’est-il pas redescendu ?", html: `
<p>Au début des années 1970, le chômage est faible dans la plupart des pays d’Europe de l’Ouest, souvent autour de 2 à 3 %, plus bas qu’aux États-Unis. Après les chocs pétroliers et la désinflation du début des années 1980, il monte partout. Mais alors que le chômage américain redescend après 1983, le chômage européen reste élevé, souvent autour de 10 %, pendant toute la fin des années 1980 et les années 1990, même quand la croissance revient.</p>
<p>La théorie dominante, celle du taux de chômage <a href="#c-taux-naturel">naturel</a> de Friedman et Phelps, prévoit que le chômage revient à son niveau d’équilibre après un choc. Faut-il en conclure que le chômage d’équilibre européen a soudain triplé ? En 1986, Olivier Blanchard et Lawrence <a href="#eco-summers">Summers</a> proposent une autre explication : le chômage d’équilibre dépend de l’histoire passée du chômage. Ils empruntent à la physique un mot savant, l’hystérèse.</p>` },
      { id: "raisonnement", titre: "Le raisonnement pas à pas", html: `
<h4>1. Le mot</h4>
<p>En physique, l’hystérèse, du grec « retard », décrit la propriété d’un matériau qui garde la trace d’une action passée. Un morceau de fer exposé à un champ magnétique reste aimanté après que le champ a disparu. Le physicien écossais James Alfred Ewing a forgé le terme en 1881.</p>
<h4>2. L’idée économique</h4>
<p>Appliquée à l’économie, l’idée est qu’un choc temporaire a des effets permanents. Dans la vision classique, l’économie est comme une balle au fond d’un bol : un choc la déplace, puis elle revient au fond. Avec l’hystérèse, elle est sur une table plate : poussée, elle reste là où elle s’est arrêtée.</p>
${trajets}
<h4>3. Les insiders et les outsiders</h4>
<p>Le premier mécanisme mis en avant par Blanchard et Summers concerne la négociation salariale. Les salariés en place, les « insiders », négocient leurs salaires avec les employeurs, souvent par l’intermédiaire des syndicats. Les chômeurs, les « outsiders », n’y participent pas. Après une récession, les insiders, moins nombreux, fixent des salaires qui protègent leurs propres emplois, sans chercher à faire réembaucher les chômeurs. Le chômage se perpétue.</p>
<h4>4. Le capital humain</h4>
<p>Le deuxième mécanisme concerne les chômeurs eux-mêmes. Plus ils restent longtemps sans emploi, plus leurs compétences s’usent, plus leurs réseaux professionnels se défont, et plus les employeurs se méfient d’eux. Certains se découragent et quittent le marché du travail. Le chômage de longue durée devient une barrière à l’emploi.</p>
<h4>5. Le capital physique et la production</h4>
<p>Le troisième mécanisme concerne l’investissement. En récession, les entreprises investissent moins, ferment des usines, renoncent à des projets de recherche. La capacité de production de l’économie, sa production potentielle, en est durablement réduite. L’hystérèse ne touche donc pas seulement l’emploi, mais le niveau du PIB lui-même.</p>
${mecanismes}
<h4>6. Les conséquences pour la politique économique</h4>
<p>Si l’hystérèse est faible, une récession est un mauvais moment passager, et il n’est pas grave de la laisser durer pour réduire l’inflation. Si elle est forte, chaque année de chômage élevé laisse des cicatrices permanentes : il faut agir vite et fortement, quitte à accepter un peu d’inflation. En 2016, la présidente de la Réserve fédérale Janet Yellen se demande publiquement s’il ne faudrait pas faire tourner temporairement une « économie sous pression » pour réparer ces dégâts.</p>
<h4>7. L’hystérèse à l’envers</h4>
<p>Le mécanisme fonctionne aussi dans l’autre sens : une période prolongée de plein emploi peut ramener vers l’emploi des personnes qui s’en étaient éloignées, améliorer leurs compétences et inciter les entreprises à investir. C’est ce qu’a semblé montrer le marché du travail américain très tendu de 2018-2019, où des catégories longtemps exclues ont retrouvé du travail.</p>` },
      { id: "preuves", titre: "Ce que disent les faits", html: `
<h4>Les cicatrices des grandes récessions</h4>
<p>Laurence Ball (2014) examine vingt-trois pays de l’OCDE après la crise de 2008. Dans la plupart, la production potentielle estimée par les organisations internationales a été durablement révisée à la baisse, d’environ 8 % en moyenne pondérée, et l’écart ne se referme pas. Valerie Cerra et Sweta Saxena (2008) trouvent, sur près de deux cents pays, que les crises financières et politiques sont suivies de pertes de production qui ne sont pas rattrapées par la suite.</p>
<h4>Les travailleurs licenciés</h4>
<p>Louis Jacobson, Robert LaLonde et Daniel Sullivan (1993) suivent des salariés américains licenciés lors de fermetures d’entreprises. Cinq ans plus tard, leurs revenus restent inférieurs d’environ 25 % à ceux de salariés comparables qui n’ont pas été licenciés. Les études ultérieures confirment ces pertes durables, plus fortes encore quand le licenciement survient en récession.</p>
<h4>Les diplômés de la crise</h4>
<p>Lisa Kahn (2010) et Philip Oreopoulos, Till von Wachter et Andrew Heisz (2012) montrent que les jeunes qui terminent leurs études pendant une récession gagnent moins pendant une dizaine d’années que ceux qui arrivent sur le marché du travail en période favorable. Ils commencent dans des emplois moins bons, dans des entreprises moins productives, et rattrapent lentement leur retard.</p>` }
    ],
    cas: [
      { titre: "La Suisse des années 1990", html: `
<p>Jusqu’en 1990, le chômage suisse est presque nul, souvent inférieur à 1 %. La longue stagnation du début des années 1990, liée à l’éclatement d’une bulle immobilière, à une politique monétaire restrictive et au franc fort, le fait monter jusqu’à plus de 5 % en 1997, un niveau inconnu depuis les années 1930. Quand la croissance revient, il redescend, mais ne retrouve jamais ses niveaux d’avant 1990 : il oscille depuis entre 2 et 3,5 % environ selon les définitions et les périodes. Une partie de cette hausse durable tient à des changements structurels, comme la généralisation de l’assurance chômage obligatoire, introduite en 1977 puis réorganisée par la loi de 1982, entrée en vigueur en 1984, qui incite les personnes sans emploi à s’inscrire, et le moindre rôle des permis saisonniers, qui permettaient auparavant de « renvoyer » le chômage à l’étranger. Mais l’épisode est souvent cité comme un exemple d’hystérèse.</p>` },
      { titre: "Le chômage partiel, une arme contre l’hystérèse", html: `
<p>En 2009, l’Allemagne recourt massivement au Kurzarbeit, le chômage partiel : les entreprises réduisent le temps de travail au lieu de licencier, et l’État compense une partie des salaires perdus. Malgré une chute du PIB d’environ 5 %, le chômage allemand augmente à peine, ce qu’on appellera le « miracle de l’emploi allemand ». En 2020, la Suisse fait de même à très grande échelle avec la réduction de l’horaire de travail, qui concerne plus d’un million de salariés au printemps. En gardant les salariés liés à leur entreprise, ces dispositifs évitent la perte de compétences et de relations de travail qui alimente l’hystérèse.</p>` },
      { titre: "Les villes industrielles américaines", html: `
<p>Danny Yagan (2019) compare les régions américaines selon la violence du choc subi pendant la crise de 2008. Dans celles qui ont été le plus durement frappées, le taux d’emploi reste plus bas dix ans plus tard, même après la reprise nationale. Les travaux sur le « choc chinois » montrent aussi que les régions industrielles concurrencées par les importations ont connu des pertes d’emploi durables, avec des effets sur la santé, la famille et la participation politique. Les chocs locaux laissent des cicatrices profondes.</p>` }
    ],
    objections: `
<h4>1. Un chômage structurel, pas une hystérèse</h4>
<p>Pour beaucoup d’économistes, la persistance du chômage européen s’explique moins par l’hystérèse que par des institutions rigides : indemnités de chômage longues et généreuses, protection de l’emploi stricte, impôts élevés sur le travail. Les réformes du marché du travail des années 2000, comme celles de l’Allemagne, auraient réduit ce chômage structurel.</p>
<h4>2. Les chocs n’étaient pas temporaires</h4>
<p>La baisse de la production potentielle après 2008 pourrait refléter des tendances déjà à l’œuvre avant la crise, comme le ralentissement de la productivité et le vieillissement, plutôt que les effets de la récession elle-même. Distinguer hystérèse et tendance préexistante est difficile.</p>
<h4>3. Le risque de l’« économie sous pression »</h4>
<p>Faire tourner l’économie au-delà de son potentiel pour réparer les dégâts de l’hystérèse risque d’entraîner une inflation durable, comme l’ont rappelé les épisodes de 2021-2023. Le coût de la reconquête de la stabilité des prix peut alors annuler les gains.</p>
<h4>4. Une notion difficile à mesurer</h4>
<p>Le taux de chômage d’équilibre et la production potentielle ne sont pas observables. Ils sont estimés à partir des données passées, ce qui tend mécaniquement à faire suivre ces estimations au chômage et à la production effectifs, et à faire apparaître une hystérèse qui n’existe peut-être pas.</p>`,
    ecoles: `
<p><b><a href="#eco-friedman">Friedman</a></b> et <b>Phelps</b> proposent un taux de chômage naturel indépendant de l’histoire ; Phelps envisage cependant dès 1972 qu’il puisse en dépendre.</p>
<p><b>Blanchard</b> et <b><a href="#eco-summers">Summers</a></b> (1986) introduisent l’hystérèse en macroéconomie.</p>
<p><b>Lindbeck</b> et <b>Snower</b> développent la théorie des insiders et des outsiders.</p>
<p><b>Ball</b>, <b>Cerra</b> et <b>Saxena</b> documentent les pertes durables après les crises.</p>
<p><b>Yellen</b> et une partie des néokeynésiens en tirent la défense d’une économie sous pression.</p>
<p><b>Les économistes structurels</b>, comme l’OCDE des années 1990, insistent sur les institutions du marché du travail.</p>`,
    source: {
      titre: "Janet Yellen, « Macroeconomic Research After the Crisis », discours à la Réserve fédérale de Boston, 14 octobre 2016",
      texte: "Il pourrait être possible d’inverser ces effets défavorables du côté de l’offre en faisant fonctionner temporairement une « économie sous pression », avec une demande globale robuste et un marché du travail tendu.",
      notes: `
<p><b>Une question plutôt qu’une annonce.</b> Yellen formule cette hypothèse parmi plusieurs questions de recherche ouvertes après la crise. Venant de la présidente de la Réserve fédérale, elle est pourtant lue comme un signal : la banque centrale pourrait laisser le chômage descendre plus bas qu’à l’habitude.</p>
<p><b>Les canaux cités.</b> Yellen évoque la hausse de la participation au marché du travail, le retour de travailleurs découragés, et une meilleure utilisation des compétences, ainsi que la reprise de l’investissement des entreprises dans un contexte de forte demande.</p>
<p><b>Le contexte.</b> En 2016, le chômage américain est revenu sous 5 %, mais la participation au marché du travail et la productivité restent faibles. La question est de savoir si la politique monétaire peut réparer une partie des dégâts durables de la crise de 2008.</p>`
    },
    quiz: [
      { q: "Qu’est-ce que l’hystérèse en économie ?",
        o: ["Une inflation incontrôlée", "Le fait qu’un choc temporaire laisse des effets durables sur le chômage ou la production", "Une panique boursière", "Le fait que le chômage revienne toujours à son niveau d’avant la crise"], c: 1,
        e: "Le niveau d’équilibre lui-même dépend de l’histoire passée." },
      { q: "D’où vient le terme hystérèse ?",
        o: ["De la médecine", "De la physique du magnétisme", "De la finance", "De la biologie"], c: 1,
        e: "Un morceau de fer reste aimanté après la disparition du champ magnétique." },
      { q: "Quel est le mécanisme des insiders et des outsiders ?",
        o: ["Les chômeurs fixent les salaires", "Les salariés en place négocient pour eux-mêmes, sans tenir compte des chômeurs exclus de la négociation", "Les entreprises embauchent tous les chômeurs", "Les chômeurs acceptent des salaires plus bas, ce qui fait baisser le chômage"], c: 1,
        e: "Après une récession, les insiders moins nombreux protègent leurs emplois plutôt que la réembauche." },
      { q: "Que montrent les études sur les jeunes diplômés pendant une récession ?",
        o: ["Qu’ils gagnent plus", "Qu’ils gagnent moins pendant une dizaine d’années", "Qu’ils ne sont pas affectés", "Qu’ils rattrapent leur retard de salaire en un an"], c: 1,
        e: "Ils commencent dans de moins bons emplois et rattrapent lentement leur retard." },
      { q: "Pourquoi le chômage partiel aide-t-il à limiter l’hystérèse ?",
        o: ["Parce qu’il réduit les impôts", "Parce qu’il garde les salariés liés à leur entreprise et préserve leurs compétences", "Parce qu’il augmente les salaires", "Parce qu’il permet aux entreprises de licencier plus facilement"], c: 1,
        e: "On évite la rupture du lien d’emploi et la perte de capital humain." }
    ],
    transfert: { q: "Pendant la crise de 2020, l’Allemagne et plusieurs autres pays paient une partie des salaires pour que les entreprises gardent leurs employés au lieu de les licencier. Quel risque cherchent-ils surtout à éviter ?",
      o: ["Que des chômeurs de longue durée perdent leurs compétences et leurs contacts, et que le chômage reste élevé après la crise", "Que les salaires montent trop vite", "Que les entreprises embauchent trop", "Que l’inflation disparaisse"], c: 0,
      e: "Le chômage partiel garde les salariés liés à leur entreprise et limite l’hystérèse." },
    ouverte: {
      q: "Le chômage partiel a protégé l’emploi suisse en 2020. Peut-il aussi freiner l’adaptation de l’économie en maintenant des emplois condamnés ?",
      r: "C’est le principal reproche fait au chômage partiel. Dans une crise temporaire, comme la pandémie, il évite des licenciements inutiles et préserve les compétences, ce qui limite l’hystérèse et permet une reprise rapide. Mais si le choc est durable, s’il touche un secteur en déclin ou une entreprise non viable, le chômage partiel peut retarder la réallocation des salariés vers des activités d’avenir, et maintenir artificiellement des emplois sans avenir. C’est pourquoi il est limité dans le temps, en Suisse en principe à douze mois sur deux ans en temps normal, et soumis à la condition que la perte de travail soit temporaire et inévitable. Les études sur la Suisse et l’Allemagne concluent en général que ses bénéfices l’emportent nettement en crise conjoncturelle, mais que sa prolongation doit être surveillée de près."
    },
    lectures: [
      ["Accessible", "Olivier Blanchard, Macroéconomie, chapitre sur le chômage européen."],
      ["Accessible", "Janet Yellen, « Macroeconomic Research After the Crisis », discours de 2016."],
      ["Intermédiaire", "Laurence Ball, « Long-Term Damage from the Great Recession in OECD Countries », 2014."],
      ["Intermédiaire", "Assar Lindbeck et Dennis Snower, The Insider-Outsider Theory of Employment and Unemployment, 1988."],
      ["Recherche", "Olivier Blanchard et Lawrence Summers, « Hysteresis and the European Unemployment Problem », NBER Macroeconomics Annual, 1986 ; Valerie Cerra et Sweta Saxena, « Growth Dynamics: The Myth of Economic Recovery », American Economic Review, 2008."]
    ],
    decouvrir: {
      questions: [
        { q: "Que veut dire l’image de la balle qui ne retombe pas au fond du bol ?",
          o: ["Qu’après une crise, l’économie ne revient pas forcément à son état d’avant", "Que les crises n’ont aucun effet durable", "Que la croissance est toujours régulière", "Que les prix remontent toujours"], c: 0,
          e: "C’est l’hystérèse : un choc temporaire laisse des traces durables." },
        { q: "Pourquoi les jeunes qui terminent leurs études en pleine crise sont-ils pénalisés ?",
          o: ["Ils gagnent moins pendant une dizaine d’années", "Ils gagnent plus, car il y a moins de concurrence", "Ils ne sont pas affectés", "Ils retrouvent aussitôt le même salaire que les autres"], c: 0,
          e: "Un mauvais départ laisse des cicatrices sur toute une carrière." }
      ],
      duree: 5,
      html: `
<h3>Une crise qui laisse des traces</h3>
<p>On pense souvent qu’après une récession, l’économie revient à son état d’avant, comme une balle qui retombe au fond d’un bol. Mais parfois, le chômage reste élevé longtemps après la fin de la crise, et la production ne rattrape jamais le terrain perdu. Les économistes appellent cela l’<b>hystérèse</b>, un mot emprunté à la physique des aimants.</p>
${trajets}
<h3>Pourquoi ?</h3>
<p>Les chômeurs de longue durée perdent leurs compétences et leurs contacts, et les employeurs hésitent à les embaucher. Les salariés en place négocient pour eux-mêmes plutôt que pour les chômeurs. Et les entreprises, en récession, renoncent à des investissements qui ne seront jamais faits. Les jeunes qui terminent leurs études en pleine crise gagnent moins pendant une dizaine d’années.</p>
<h3>Agir vite</h3>
<p>Si les crises laissent des cicatrices, il faut les combattre vite. C’est l’idée du chômage partiel, utilisé massivement en Suisse en 2020 : garder les salariés dans leur entreprise plutôt que de les licencier.</p>
<h3>À retenir</h3>
<p>Une récession peut coûter bien plus que ses quelques mois de baisse. La notice complète présente les mécanismes, les preuves et les débats.</p>`,
      quiz: [0, 4]
    },
    resumes: {
      depart: "Pourquoi le chômage européen n’est-il pas redescendu ? Blanchard et Summers, 1986.",
      raisonnement: "Sept étapes, du magnétisme à l’hystérèse à l’envers.",
      preuves: "Les cicatrices des crises, les travailleurs licenciés, les diplômés de la crise.",
      cas: "La Suisse des années 1990, le chômage partiel, les villes industrielles américaines.",
      objections: "Chômage structurel, tendances préexistantes, risque d’inflation, mesure difficile.",
      ecoles: "Friedman et Phelps, Blanchard et Summers, Lindbeck et Snower, Ball, Cerra et Saxena, Yellen.",
      source: "Yellen, 2016 : une économie sous pression pour réparer les dégâts.",
      quiz: "Six questions corrigées et une question sur le chômage partiel.",
      lectures: "Cinq lectures classées par niveau."
    }
  };

  /* =====================================================================
     44. FONCTIONS DE LA MONNAIE
     ===================================================================== */
  const troc = fig(290, (() => {
    let s = `<text x="20" y="24" ${T}>Le problème du troc : la double coïncidence des besoins</text>`;
    const P = { a: [150, 90, "Boulangère", "a du pain, veut des chaussures"], b: [490, 90, "Cordonnier", "a des chaussures, veut du poisson"], c: [320, 220, "Pêcheur", "a du poisson, veut du pain"] };
    Object.values(P).forEach(([x, y, n, d]) => (s += `<rect x="${x - 95}" y="${y - 30}" width="190" height="60" rx="10" style="fill:var(--card); stroke:var(--plum); stroke-width:2"/><text x="${x}" y="${y - 6}" text-anchor="middle" style="fill:var(--ink); font:700 13px Manrope, sans-serif">${n}</text><text x="${x}" y="${y + 14}" text-anchor="middle" ${S}>${d}</text>`));
    s += arrow(247, 90, 393, 90, "var(--serial)") + arrow(445, 122, 370, 188, "var(--serial)") + arrow(270, 188, 190, 122, "var(--serial)");
    s += `<text x="320" y="80" text-anchor="middle" style="fill:var(--serial); font:600 11px Manrope, sans-serif">veut ce qu’a</text>`;
    s += `<text x="20" y="276" ${S}>Aucun échange à deux ne convient. Avec une monnaie, chacun vend à l’un et achète à l’autre.</text>`;
    return s;
  })(), "William Stanley Jevons (1875) appelle ce problème l’absence de « double coïncidence des besoins ». La monnaie le résout en séparant la vente et l’achat. Les anthropologues, comme David Graeber, rappellent toutefois qu’aucune société connue n’a fonctionné principalement par le troc : le crédit et les dettes ont souvent précédé la monnaie.", "Triangle de trois personnes dont les besoins ne coïncident pas deux à deux");

  const fonctions = fig(260, (() => {
    let s = `<text x="20" y="24" ${T}>Les trois fonctions classiques de la monnaie</text>`;
    const items = [["Unité de compte", "Exprimer tous les prix dans une même unité", "« ce pain coûte 4 francs »", "var(--note)"], ["Intermédiaire des échanges", "Être acceptée par tous en paiement", "payer le loyer, recevoir un salaire", "var(--gold)"], ["Réserve de valeur", "Transporter le pouvoir d’achat dans le temps", "garder 100 francs pour plus tard", "var(--plum)"]];
    items.forEach(([n, d, ex, c], i) => {
      const x = 20 + i * 205;
      s += `<rect x="${x}" y="44" width="190" height="190" rx="10" style="fill:var(--card); stroke:${c}; stroke-width:2"/>`;
      s += `<text x="${x + 95}" y="74" text-anchor="middle" style="fill:${c}; font:700 13.5px Manrope, sans-serif">${n}</text>`;
      const words = d.split(" "); let line = "", ly = 106;
      words.forEach((wd) => { if ((line + wd).length > 26) { s += `<text x="${x + 95}" y="${ly}" text-anchor="middle" ${S}>${line.trim()}</text>`; ly += 17; line = ""; } line += wd + " "; });
      s += `<text x="${x + 95}" y="${ly}" text-anchor="middle" ${S}>${line.trim()}</text>`;
      s += `<text x="${x + 95}" y="206" text-anchor="middle" style="fill:var(--ink); font:500 11px Manrope, sans-serif; font-style:italic">${ex}</text>`;
    });
    return s;
  })(), "Une bonne monnaie remplit les trois fonctions à la fois. En période d’hyperinflation, elle perd d’abord sa fonction de réserve de valeur, puis celle d’unité de compte, quand les prix sont affichés en devises étrangères, et enfin celle d’intermédiaire des échanges.", "Trois cartes : unité de compte, intermédiaire des échanges, réserve de valeur");

  OEC.notices["fonctions-monnaie"] = {
    essentiel: [
      "La monnaie remplit trois fonctions classiques : unité de compte, qui permet d’exprimer tous les prix dans une même unité ; intermédiaire des échanges, accepté par tous en paiement ; réserve de valeur, qui permet de transporter le pouvoir d’achat dans le temps.",
      "Les économistes ont longtemps expliqué son origine par les inconvénients du troc ; les anthropologues et les historiens insistent plutôt sur le rôle des dettes, du crédit et de l’État. Aujourd’hui, l’essentiel de la monnaie est créé par les banques, quand elles accordent des crédits.",
      "Ces fonctions éclairent les débats actuels : cryptomonnaies, monnaies locales comme le WIR suisse, monnaie numérique de banque centrale, ou initiative Monnaie pleine rejetée par les Suisses en 2018."
    ],
    sections: [
      { id: "depart", titre: "La question de départ : qu’est-ce qui fait qu’un bout de papier vaut quelque chose ?", html: `
<p>Un billet de 100 francs coûte quelques centimes à imprimer. Un franc sur un compte bancaire n’est qu’une inscription électronique. Pourtant, chacun les accepte en échange de biens réels, de travail, de logement. Pourquoi ? Et pourquoi certaines sociétés ont-elles utilisé des coquillages, du sel, des cigarettes ou d’immenses pierres pour remplir le même rôle ?</p>
<p>Dès le IVe siècle avant notre ère, <a href="#eco-aristote">Aristote</a> observe que la monnaie existe par convention : son nom grec, nomisma, vient de nomos, la loi. Elle n’a pas de valeur par nature, mais parce qu’une communauté décide de l’accepter. Depuis, la question de ce qu’est la monnaie, et de ce qu’elle fait, n’a cessé de diviser les économistes.</p>` },
      { id: "raisonnement", titre: "Le raisonnement pas à pas", html: `
<h4>1. Le problème du troc</h4>
<p>Dans une économie de troc, pour échanger, il faut trouver quelqu’un qui possède ce que l’on veut et qui veut ce que l’on possède. William Stanley Jevons appelle cette condition la « double coïncidence des besoins ». Elle rend les échanges très difficiles dès que l’économie se diversifie.</p>
${troc}
<h4>2. L’intermédiaire des échanges</h4>
<p>La monnaie résout ce problème : on vend contre de la monnaie à quelqu’un, on achète avec cette monnaie à quelqu’un d’autre. L’économiste autrichien Carl Menger explique en 1892 comment une marchandise particulièrement facile à échanger, le sel, le bétail, l’argent métal, finit spontanément par être acceptée par tous, sans décision centrale. C’est la fonction d’intermédiaire des échanges.</p>
<h4>3. L’unité de compte</h4>
<p>La monnaie sert aussi d’étalon commun pour exprimer les valeurs. Sans unité de compte, il faudrait connaître le prix de chaque bien en chacun des autres : avec cent biens, près de cinq mille prix relatifs. Avec une monnaie, cent prix suffisent. L’unité de compte permet aussi de tenir des comptes, de calculer des profits et d’écrire des contrats.</p>
<h4>4. La réserve de valeur</h4>
<p>Enfin, la monnaie permet de conserver un pouvoir d’achat pour plus tard. Ce n’est pas la meilleure réserve de valeur, les actions, les immeubles ou l’or rapportent souvent davantage, mais c’est la plus liquide : elle peut être dépensée immédiatement. L’inflation ronge cette fonction. Keynes fait de ce besoin de liquidité une clé de sa théorie (<a href="#c-preference-liquidite">voir préférence pour la liquidité</a>).</p>
${fonctions}
<h4>5. Monnaie marchandise, monnaie de l’État, monnaie de crédit</h4>
<p>Pendant longtemps, la monnaie a été faite de métaux précieux, dont la valeur était en partie indépendante de leur rôle monétaire. L’Allemand Georg Friedrich Knapp soutient en 1905 que la monnaie est d’abord une création de l’État, qui l’impose en exigeant le paiement des impôts dans cette unité : c’est le « chartalisme ». Aujourd’hui, la monnaie est fiduciaire : elle tient sa valeur de la confiance dans la banque centrale qui l’émet et dans l’État qui l’accepte.</p>
<h4>6. Qui crée la monnaie ?</h4>
<p>La plus grande partie de la monnaie n’est pas faite de billets, mais de dépôts bancaires. Et ces dépôts sont créés par les banques quand elles accordent des crédits : en prêtant 300 000 francs pour un logement, la banque inscrit 300 000 francs sur le compte de l’emprunteur, qui n’existaient pas auparavant. La Banque d’Angleterre l’a rappelé dans une publication remarquée de 2014. La banque centrale encadre cette création par ses taux et la réglementation.</p>
<h4>7. Les fonctions dissociées</h4>
<p>Les trois fonctions peuvent se séparer. Pendant les hyperinflations, la monnaie nationale continue de servir aux paiements quotidiens, mais les prix sont calculés en dollars et l’épargne est placée ailleurs. Inversement, le bitcoin a été conçu comme moyen de paiement, mais sert surtout de placement spéculatif, et presque jamais d’unité de compte, car son prix varie trop.</p>` },
      { id: "preuves", titre: "Ce que disent les faits", html: `
<h4>Les cigarettes des camps de prisonniers</h4>
<p>En 1945, l’économiste Richard Radford, ancien prisonnier de guerre, décrit l’économie des camps allemands où il a été détenu. Les prisonniers échangent le contenu de leurs colis de la Croix-Rouge, et une monnaie apparaît spontanément : la cigarette, homogène, divisible, durable, désirée par presque tous. Les prix s’expriment en cigarettes, et fluctuent selon l’arrivée des colis. L’exemple illustre la théorie de Menger sur l’émergence spontanée de la monnaie.</p>
<h4>Les pierres de Yap</h4>
<p>Sur l’île de Yap, en Micronésie, on utilisait de grandes pierres circulaires, les rai, parfois plus hautes qu’un homme. Les pierres ne bougeaient guère : on transférait leur propriété, connue de toute la communauté. L’une d’elles aurait même coulé en mer lors de son transport, et continué à servir de monnaie. Milton <a href="#eco-friedman">Friedman</a> en a tiré en 1991 une réflexion sur la nature conventionnelle de la monnaie, comparable à l’or stocké dans les coffres des banques centrales.</p>
<h4>Le mythe du troc</h4>
<p>L’anthropologue David Graeber, dans Dette : 5 000 ans d’histoire (2011), reprend les travaux de nombreux chercheurs pour soutenir qu’aucune société connue n’a fonctionné principalement par le troc entre voisins. Les échanges reposaient plutôt sur le crédit, les dons et les obligations ; le troc apparaît surtout entre étrangers, ou quand une monnaie existante disparaît. La monnaie serait née de la comptabilité des dettes, souvent tenue par les temples et les palais en Mésopotamie.</p>` }
    ],
    cas: [
      { titre: "Le WIR, une monnaie complémentaire suisse", html: `
<p>En 1934, en pleine crise, seize entrepreneurs zurichois fondent une coopérative d’entraide économique, le Wirtschaftsring, ou WIR. Ses membres s’accordent des crédits dans une monnaie interne, le franc WIR, utilisable uniquement entre eux, pour continuer à échanger malgré la pénurie de francs suisses. Le WIR existe toujours, aujourd’hui sous la forme de la Banque WIR, et compte des dizaines de milliers de petites et moyennes entreprises. Des études, comme celles de James Stodder, suggèrent que son utilisation augmente en période de récession, ce qui en fait un stabilisateur contracyclique. C’est l’une des plus anciennes monnaies complémentaires encore en fonctionnement.</p>` },
      { titre: "L’initiative Monnaie pleine", html: `
<p>En juin 2018, les Suisses votent sur l’initiative « Monnaie pleine », qui voulait retirer aux banques commerciales le pouvoir de créer de la monnaie scripturale : seule la BNS aurait pu créer de la monnaie, y compris les dépôts sur les comptes courants. Les partisans voulaient rendre le système plus sûr et faire bénéficier la collectivité des gains de la création monétaire. Les opposants, dont le Conseil fédéral et la BNS, craignaient une expérience risquée sans équivalent dans le monde. L’initiative est rejetée par plus de 75 % des votants. Le débat a familiarisé le public avec le fait que les banques créent la monnaie en prêtant.</p>` },
      { titre: "Le bitcoin, monnaie légale au Salvador", html: `
<p>En septembre 2021, le Salvador devient le premier pays à faire du bitcoin une monnaie légale, à côté du dollar américain. Les commerçants sont en principe obligés de l’accepter. Mais l’usage reste très limité : les études montrent que peu de ménages et d’entreprises l’utilisent pour leurs transactions, en raison de sa volatilité. Début 2025, dans le cadre d’un accord avec le FMI, le pays rend son acceptation facultative. L’expérience montre la difficulté pour un actif très volatil de remplir les fonctions d’unité de compte et d’intermédiaire des échanges.</p>` }
    ],
    objections: `
<h4>1. Les fonctions ne disent pas ce qu’est la monnaie</h4>
<p>Énumérer les fonctions ne dit pas pourquoi la monnaie est acceptée. Pour les économistes institutionnalistes et les sociologues, comme Michel Aglietta et André Orléan, la monnaie est d’abord une institution sociale fondée sur la confiance collective, et sa valeur repose sur une croyance partagée, fragile en temps de crise.</p>
<h4>2. Le récit du troc est un mythe</h4>
<p>Comme le soulignent Graeber et de nombreux historiens, le récit des manuels, du troc à la monnaie puis au crédit, inverse probablement l’ordre historique : le crédit et la comptabilité des dettes auraient précédé la monnaie marchandise.</p>
<h4>3. La neutralité de la monnaie</h4>
<p>Pour les économistes classiques, la monnaie est un « voile » qui facilite les échanges sans influencer la production réelle. Pour Keynes et ses successeurs, elle n’est pas neutre : le désir de la conserver peut provoquer des crises de demande (<a href="#c-loi-debouches">voir loi des débouchés</a>). Le débat reste ouvert, surtout à long terme.</p>
<h4>4. La monnaie privée</h4>
<p><a href="#eco-hayek">Hayek</a> propose en 1976 de supprimer le monopole d’émission des banques centrales et de laisser des monnaies privées se concurrencer, la meilleure s’imposant. Les cryptomonnaies ont relancé cette idée, mais leur volatilité et les faillites de certaines plateformes montrent la difficulté de bâtir la confiance sans institution publique.</p>`,
    ecoles: `
<p><b><a href="#eco-aristote">Aristote</a></b> voit dans la monnaie une convention, mesure commune des échanges.</p>
<p><b>Jevons</b> (1875) systématise les fonctions de la monnaie ; <b>Menger</b> (1892) explique son émergence spontanée.</p>
<p><b>Knapp</b> (1905) fonde le chartalisme, repris par la théorie monétaire moderne.</p>
<p><b><a href="#eco-keynes">Keynes</a></b> insiste sur la liquidité et la non-neutralité de la monnaie.</p>
<p><b><a href="#eco-friedman">Friedman</a></b> lie la quantité de monnaie à l’inflation (<a href="#c-theorie-quantitative">voir théorie quantitative</a>).</p>
<p><b><a href="#eco-hayek">Hayek</a></b> défend la concurrence des monnaies ; <b>Graeber</b>, <b>Aglietta</b> et <b>Orléan</b> en soulignent la dimension sociale.</p>`,
    source: {
      titre: "Aristote, Éthique à Nicomaque, livre V, chapitre 5",
      texte: "La monnaie est devenue, par convention, une sorte de substitut du besoin ; et c’est pourquoi elle porte le nom de nomisma, parce qu’elle n’existe pas par nature, mais par la loi, et qu’il est en notre pouvoir de la changer et de la rendre inutile.",
      notes: `
<p><b>Le besoin, mesure de l’échange.</b> Pour Aristote, ce qui rend les biens commensurables, c’est le besoin que les hommes en ont. La monnaie représente ce besoin sous une forme commune, permettant de comparer des chaussures et une maison.</p>
<p><b>Une convention révocable.</b> Aristote souligne que la monnaie peut perdre sa valeur si la communauté le décide. Les démonétisations, les réformes monétaires et les hyperinflations lui donnent raison.</p>
<p><b>Une source durable.</b> Ce passage nourrit toute la réflexion médiévale sur la monnaie, notamment chez Nicole Oresme au XIVe siècle, qui défend l’idée que la monnaie appartient à la communauté et non au prince.</p>`
    },
    quiz: [
      { q: "Quelles sont les trois fonctions classiques de la monnaie ?",
        o: ["Produire, consommer, épargner", "Unité de compte, intermédiaire des échanges, réserve de valeur", "Unité de compte, moyen de paiement, création de richesse", "Exporter, importer, investir"], c: 1,
        e: "Une bonne monnaie remplit les trois à la fois." },
      { q: "Qu’est-ce que la « double coïncidence des besoins » ?",
        o: ["Le fait que deux personnes aient les mêmes goûts", "La condition du troc : trouver quelqu’un qui a ce qu’on veut et veut ce qu’on a", "L’égalité entre l’offre et la demande d’un bien", "Le fait que l’acheteur et le vendeur s’accordent sur un prix"], c: 1,
        e: "La monnaie supprime cette condition en séparant vente et achat." },
      { q: "Avec 100 biens et sans unité de compte, combien de prix relatifs faudrait-il connaître ?",
        o: ["100", "Près de 5 000", "200", "1 000 000"], c: 1,
        e: "100 × 99 / 2 = 4 950 prix relatifs, contre 100 prix avec une unité de compte." },
      { q: "Comment la plus grande partie de la monnaie est-elle créée aujourd’hui ?",
        o: ["Par l’impression de billets", "Par les banques quand elles accordent des crédits", "Par l’extraction d’or", "Par les entreprises"], c: 1,
        e: "Le prêt crée un dépôt nouveau sur le compte de l’emprunteur." },
      { q: "Qu’est-ce que le WIR ?",
        o: ["Une cryptomonnaie", "Une monnaie complémentaire créée en 1934 par des entrepreneurs suisses et toujours utilisée entre PME", "Une monnaie émise par la BNS pour les entreprises", "Un impôt fédéral"], c: 1,
        e: "Son usage augmente en récession, ce qui en fait un amortisseur de crise." }
    ],
    transfert: { q: "Dans un pays où l’inflation atteint 100 % par an, les habitants épargnent en dollars et fixent les loyers en dollars, tout en payant leurs courses en monnaie locale. Quelles fonctions la monnaie locale a-t-elle perdues ?",
      o: ["Celles de réserve de valeur et, en partie, d’unité de compte", "Celle d’intermédiaire des échanges seulement", "Aucune", "Toutes les trois"], c: 0,
      e: "Une monnaie qui perd vite sa valeur ne sert plus à épargner ni à mesurer les prix durablement." },
    ouverte: {
      q: "La BNS devrait-elle émettre un franc numérique accessible à tous les ménages, comme une sorte de billet électronique ?",
      r: "La BNS a mené des expériences de monnaie numérique de banque centrale, notamment le projet Helvetia, mais seulement pour les transactions entre institutions financières, et elle s’est jusqu’ici montrée réservée sur une version pour le grand public. Les partisans d’un franc numérique de détail font valoir qu’avec le déclin de l’argent liquide, le public n’aura bientôt plus accès à une monnaie émise par la banque centrale, seulement à des dépôts bancaires, et qu’une monnaie publique numérique préserverait la souveraineté face aux géants technologiques et aux cryptomonnaies. Les opposants craignent qu’en période de crise, les ménages retirent massivement leurs dépôts bancaires vers le franc numérique, sûr, ce qui fragiliserait les banques et leur capacité de prêter. Il faudrait alors limiter les montants détenus. La question touche directement aux fonctions de la monnaie et au rôle respectif de la banque centrale et des banques dans sa création."
    },
    lectures: [
      ["Accessible", "David Graeber, Dette : 5 000 ans d’histoire, 2011, chapitres 2 et 3."],
      ["Accessible", "Milton Friedman, La Monnaie et ses pièges, 1992, chapitre 1 sur l’île de Yap."],
      ["Intermédiaire", "Michael McLeay, Amar Radia et Ryland Thomas, « Money Creation in the Modern Economy », Bank of England Quarterly Bulletin, 2014."],
      ["Intermédiaire", "Michel Aglietta et André Orléan, La Monnaie entre violence et confiance, 2002."],
      ["Recherche", "Carl Menger, « On the Origin of Money », Economic Journal, 1892 ; Richard Radford, « The Economic Organisation of a P.O.W. Camp », Economica, 1945."]
    ],
    decouvrir: {
      questions: [
        { q: "Pourquoi tout le monde accepte-t-il un billet qui coûte quelques centimes à fabriquer ?",
          o: ["Parce que chacun croit que les autres l’accepteront aussi : la monnaie est une convention", "Parce qu’il est garanti en or", "Parce que son papier est précieux", "Parce que la loi oblige à le garder"], c: 0,
          e: "La monnaie repose sur la confiance." },
        { q: "Que montre l’exemple des cigarettes dans les camps de prisonniers ?",
          o: ["Qu’une monnaie peut apparaître spontanément quand les échanges en ont besoin", "Que fumer était interdit", "Que le troc est plus efficace que la monnaie", "Que les prisonniers n’échangeaient rien"], c: 0,
          e: "Les cigarettes servaient à mesurer les prix, à payer et à garder de la valeur." }
      ],
      duree: 5,
      html: `
<h3>Un bout de papier qui vaut 100 francs</h3>
<p>Un billet coûte quelques centimes à fabriquer, et pourtant tout le monde l’accepte. Pourquoi ? Parce que la monnaie est une convention : nous croyons tous que les autres l’accepteront. Elle rend trois services, ses trois <b>fonctions</b> : mesurer les prix, payer, et garder de la valeur pour plus tard.</p>
<h3>Sans monnaie, le troc</h3>
<p>Sans monnaie, pour obtenir des chaussures contre son pain, la boulangère devrait trouver un cordonnier qui veut justement du pain. La monnaie simplifie tout : on vend à l’un, on achète à l’autre. Dans les camps de prisonniers de la Seconde Guerre mondiale, les cigarettes sont spontanément devenues monnaie.</p>
${fonctions}
<h3>Qui crée la monnaie ?</h3>
<p>Aujourd’hui, l’essentiel de la monnaie n’est pas fait de billets, mais d’inscriptions sur des comptes bancaires, créées par les banques quand elles prêtent. En 2018, les Suisses ont refusé à plus de 75 % de retirer ce pouvoir aux banques. Et depuis 1934, des PME suisses utilisent entre elles leur propre monnaie, le WIR.</p>
<h3>À retenir</h3>
<p>La monnaie repose sur la confiance. La notice complète présente ses fonctions, son histoire et les débats actuels.</p>`,
      quiz: [0, 3]
    },
    resumes: {
      depart: "Qu’est-ce qui fait qu’un bout de papier vaut quelque chose ? Aristote et le nomisma.",
      raisonnement: "Sept étapes, du troc à la création monétaire par les banques.",
      preuves: "Les cigarettes des camps, les pierres de Yap, le mythe du troc.",
      cas: "Le WIR suisse, l’initiative Monnaie pleine, le bitcoin au Salvador.",
      objections: "Fonctions et nature de la monnaie, le mythe du troc, la neutralité, la monnaie privée.",
      ecoles: "Aristote, Jevons et Menger, Knapp, Keynes, Friedman, Hayek, Graeber, Aglietta et Orléan.",
      source: "Aristote : la monnaie existe par la loi, non par nature.",
      quiz: "Six questions corrigées, dont un calcul, et une question sur le franc numérique.",
      lectures: "Cinq lectures classées par niveau."
    }
  };
})();
