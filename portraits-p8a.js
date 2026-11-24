/* Œconomia — portraits longs, lot 8 (a) : Lawrence Summers, Daron Acemoglu */
(function () {
  const { T, S, M, fig, arrow, lifeline } = OEC.pfx;
  const LABELS = { cas: "Épisodes marquants", objections: "Critiques et adversaires", ecoles: "Héritiers et postérité" };
  const node = (x, y, w, h, t, sub, c) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" style="fill:var(--card); stroke:${c}; stroke-width:2"/><text x="${x + w / 2}" y="${y + h / 2 - 3}" text-anchor="middle" style="fill:var(--ink); font:700 12px Manrope, sans-serif">${t}</text><text x="${x + w / 2}" y="${y + h / 2 + 15}" text-anchor="middle" ${S}>${sub}</text>`;
  const cards = (items, w, h, y0) => items.map(([n, d, c], i) => {
    const x = 20 + i * (w + 10);
    let s = `<rect x="${x}" y="${y0}" width="${w}" height="${h}" rx="10" style="fill:var(--card); stroke:${c}; stroke-width:2"/><text x="${x + w / 2}" y="${y0 + 28}" text-anchor="middle" style="fill:${c}; font:700 13px Manrope, sans-serif">${n}</text>`;
    const words = d.split(" "); let line = "", ly = y0 + 56; const max = Math.floor(w / 6.6);
    words.forEach((wd) => { if ((line + wd).length > max) { s += `<text x="${x + w / 2}" y="${ly}" text-anchor="middle" ${S}>${line.trim()}</text>`; ly += 17; line = ""; } line += wd + " "; });
    return s + `<text x="${x + w / 2}" y="${ly}" text-anchor="middle" ${S}>${line.trim()}</text>`;
  }).join("");

  /* =====================================================================
     LAWRENCE SUMMERS
     ===================================================================== */
  const vieSummers = lifeline(1954, 2025, [
    [1954, "naissance à New Haven", true], [1982, "doctorat à Harvard", false], [1983, "titulaire à 28 ans", true], [1991, "Banque mondiale", false],
    [1999, "secrétaire au Trésor", true], [2001, "président de Harvard", false], [2009, "conseiller d’Obama", true], [2013, "la stagnation séculaire", false]
  ], "Lawrence Summers, né en 1954", "Chercheur, haut fonctionnaire et président d’université, Summers a alterné toute sa vie entre Harvard et Washington. Peu d’économistes ont occupé autant de postes de pouvoir.");

  const stagnation = fig(330, (() => {
    let s = `<text x="20" y="24" ${T}>La stagnation séculaire selon Summers (2013) : le mécanisme</text>`;
    s += node(20, 46, 145, 58, "Vieillissement", "plus d’épargne", "var(--note)");
    s += node(173, 46, 145, 58, "Inégalités", "les riches épargnent", "var(--note)");
    s += node(326, 46, 145, 58, "Capital bon marché", "moins d’investissement", "var(--gold)");
    s += node(479, 46, 145, 58, "Réserves", "des pays émergents", "var(--note)");
    s += arrow(92, 106, 200, 140) + arrow(245, 106, 290, 140) + arrow(398, 106, 350, 140) + arrow(551, 106, 440, 140);
    s += node(120, 142, 400, 58, "Trop d’épargne, pas assez d’investissement", "le taux d’intérêt naturel devient négatif", "var(--plum)");
    s += arrow(320, 202, 320, 226);
    s += node(120, 228, 400, 58, "Le plancher du zéro", "la banque centrale ne peut pas descendre assez bas", "var(--serial)");
    s += `<text x="20" y="310" ${S}>Résultat : demande faible, croissance lente, risque de bulles. Remède proposé : l’investissement public.</text>`;
    return s;
  })(), "Summers reprend en 2013 une expression d’Alvin Hansen (1938). Plusieurs forces poussent l’épargne à la hausse et l’investissement à la baisse. Le taux d’intérêt qui équilibrerait les deux devient négatif, mais les taux de la banque centrale ne peuvent guère descendre sous zéro : l’économie reste en dessous de son potentiel.", "Schéma des causes et des effets de la stagnation séculaire");

  const cicatrices = fig(300, (() => {
    let s = `<text x="20" y="24" ${T}>L’hystérèse (Blanchard et Summers, 1986) : la récession laisse des cicatrices</text>`;
    s += node(20, 50, 280, 62, "Une récession", "la production et l’emploi chutent", "var(--serial)");
    s += node(340, 50, 280, 62, "Chômage de longue durée", "les chômeurs restent hors de l’emploi", "var(--gold)");
    s += node(340, 164, 280, 62, "Compétences perdues", "les liens avec l’emploi se défont", "var(--plum)");
    s += node(20, 164, 280, 62, "Potentiel réduit", "même après la reprise", "var(--note)");
    s += arrow(302, 81, 338, 81) + arrow(480, 114, 480, 162) + arrow(338, 195, 302, 195) + arrow(160, 162, 160, 114);
    s += `<text x="320" y="142" text-anchor="middle" style="fill:var(--ink-soft); font:italic 600 12px Manrope, sans-serif">effet durable</text>`;
    s += `<text x="20" y="256" ${S}>Leçon : une récession non combattue coûte plus cher qu’on ne le croit,</text>`;
    s += `<text x="20" y="274" ${S}>ce qui justifie une politique de relance rapide et vigoureuse.</text>`;
    return s;
  })(), "Olivier Blanchard et Lawrence Summers montrent en 1986, à propos du chômage européen, que le chômage d’aujourd’hui peut augmenter le chômage de demain : le taux de chômage « naturel » dépend de l’histoire.", "Boucle de l’hystérèse en quatre étapes");

  OEC.portraits["summers"] = {
    portrait: true, labels: LABELS,
    essentiel: [
      "Lawrence Summers, né en 1954, économiste américain, a été secrétaire au Trésor de Bill Clinton, président de l’université Harvard et conseiller économique de Barack Obama. Il a mêlé comme peu d’autres la recherche et l’exercice du pouvoir.",
      "Chercheur en macroéconomie, en finance et en économie publique, il a étudié l’hystérèse du chômage avec Olivier Blanchard, et relancé en 2013 l’idée de « stagnation séculaire » : un excès durable d’épargne qui maintient les taux d’intérêt très bas et la croissance faible.",
      "Brillant et provocateur, il a été au cœur de nombreuses controverses : la dérégulation financière des années 1990, ses propos sur les femmes en sciences à Harvard, ses relations avec Jeffrey Epstein, mais aussi son avertissement juste sur l’inflation de 2021."
    ],
    sections: [
      { id: "vie", titre: "Une vie", html: `
<p>Lawrence Henry Summers naît le 30 novembre 1954 à New Haven, dans le Connecticut, dans une famille d’économistes : ses deux parents enseignent l’économie à l’université de Pennsylvanie, et deux de ses oncles, Paul <a href="#eco-samuelson">Samuelson</a> et Kenneth Arrow, recevront le prix Nobel. Il entre au MIT à seize ans, puis fait son doctorat à Harvard sous la direction de Martin Feldstein, qu’il obtient en 1982. L’année suivante, à vingt-huit ans, il devient l’un des plus jeunes professeurs titulaires de l’histoire de Harvard.</p>
<p>En 1982-1983, il travaille au Conseil des conseillers économiques du président Reagan, aux côtés de Paul <a href="#eco-krugman">Krugman</a>. Il reçoit en 1993 la médaille John Bates Clark. De 1991 à 1993, il est économiste en chef de la Banque mondiale. Il entre ensuite au Trésor américain sous Bill Clinton, comme sous-secrétaire aux affaires internationales, puis secrétaire adjoint, et enfin secrétaire au Trésor de 1999 à 2001.</p>
${vieSummers}
<p>Il préside l’université Harvard de 2001 à 2006, puis dirige le Conseil économique national de Barack Obama en 2009-2010, pendant la réponse à la crise financière. Revenu à Harvard, il intervient abondamment dans le débat public. En novembre 2025, après la publication de sa correspondance avec Jeffrey Epstein, condamné pour crimes sexuels, il annonce se retirer de ses engagements publics et quitte notamment le conseil d’administration d’OpenAI.</p>` },
      { id: "epoque", titre: "Le monde qu’il voulait comprendre", html: `
<p>Summers commence sa carrière à la fin des années 1970, quand la macroéconomie se divise entre les nouveaux classiques, autour de Robert <a href="#eco-lucas">Lucas</a>, et les nouveaux keynésiens. Il appartient au second camp, avec un goût marqué pour les données plutôt que pour les modèles abstraits. Il critique l’hypothèse d’efficience des marchés financiers et s’intéresse au chômage européen, qui reste élevé bien après les chocs pétroliers.</p>
<p>Dans les années 1990, il participe à la gestion des grandes crises financières des pays émergents, Mexique, Asie, Russie, et à la libéralisation financière de l’époque, aux côtés d’Alan Greenspan et de Robert Rubin.</p>
<p>Après la crise de 2008, il observe une reprise anormalement lente, malgré des taux d’intérêt à zéro. Il cherche à comprendre pourquoi les économies riches semblent avoir besoin de bulles financières pour atteindre le plein emploi.</p>` },
      { id: "pensee", titre: "La pensée, pas à pas", html: `
<h4>1. Les marchés financiers ne sont pas toujours efficients</h4>
<p>Dans les années 1980, Summers montre avec d’autres que les prix des actifs peuvent s’écarter durablement de leur valeur fondamentale, à cause de « bruiteurs », des investisseurs mal informés, et des limites de l’arbitrage. Il plaide même pour une petite taxe sur les transactions financières.</p>
<h4>2. L’hystérèse du chômage</h4>
<p>Avec Olivier Blanchard, il montre en 1986 que le chômage peut devenir persistant : les chômeurs de longue durée perdent leurs compétences et leurs liens avec l’emploi, et pèsent moins sur les salaires. Le <a href="#c-taux-naturel">taux de chômage naturel</a> dépend donc de l’histoire (<a href="#c-hysterese">voir hystérèse</a>).</p>
${cicatrices}
<h4>3. La politique budgétaire en temps de crise</h4>
<p>Summers défend une relance budgétaire « opportune, ciblée et temporaire ». Quand les taux d’intérêt sont à zéro, les dépenses publiques sont plus efficaces, car la banque centrale ne les neutralise pas en remontant ses taux, et elles évitent les cicatrices de l’hystérèse.</p>
<h4>4. La stagnation séculaire</h4>
<p>En novembre 2013, lors d’une conférence au Fonds monétaire international, Summers reprend l’idée d’Alvin Hansen : les économies riches souffriraient d’un excès chronique d’épargne par rapport à l’investissement (<a href="#c-stagnation-seculaire">voir stagnation séculaire</a>). Le taux d’intérêt d’équilibre serait devenu négatif, et la banque centrale, bloquée au plancher du zéro, ne pourrait plus assurer le plein emploi (<a href="#c-trappe-liquidite">voir trappe à liquidité</a>).</p>
${stagnation}
<h4>5. Bulles et investissement public</h4>
<p>Summers en tire deux conclusions. D’abord, les bulles des années 2000 n’étaient pas un accident : sans elles, la demande aurait été insuffisante. Ensuite, la meilleure réponse est l’investissement public, dans les infrastructures notamment, financé par l’emprunt à des taux très bas.</p>
<h4>6. Le retour de l’inflation</h4>
<p>En 2021, Summers juge le plan de relance de Joe Biden, 1 900 milliards de dollars, trop important face à l’écart réel entre la production et son potentiel. Il prédit une inflation forte. La suite lui donne largement raison, même s’il prévoyait aussi qu’une forte hausse du chômage serait nécessaire pour la réduire, ce qui ne s’est pas produit.</p>` },
      { id: "livres", titre: "Les livres et articles qui comptent", html: `
<p><b>« Hysteresis and the European Unemployment Problem » (1986), avec Olivier Blanchard.</b> L’article fondateur sur la persistance du chômage.</p>
<p><b>« Noise Trader Risk in Financial Markets » (1990), avec J. Bradford De Long, Andrei Shleifer et Robert Waldmann.</b> Pourquoi les investisseurs irrationnels peuvent influencer durablement les prix.</p>
<p><b>Conférence au FMI (novembre 2013).</b> L’intervention qui relance le débat sur la stagnation séculaire.</p>
<p><b>« U.S. Economic Prospects: Secular Stagnation, Hysteresis, and the Zero Lower Bound » (2014).</b> La version écrite et développée de son argument.</p>
<p><b>Ses chroniques</b> dans le Financial Times et le Washington Post, où il intervient sur la politique économique américaine.</p>` }
    ],
    cas: [
      { titre: "La note de la Banque mondiale", html: `
<p>En décembre 1991, une note interne de la Banque mondiale signée par Summers, alors économiste en chef, se demande si la Banque ne devrait pas encourager le transfert d’industries polluantes vers les pays pauvres, où le « coût » de la pollution, mesuré par les revenus perdus, serait plus faible. La note, divulguée par la presse, provoque un scandale. Summers explique qu’il s’agissait d’un texte ironique, rédigé par un collaborateur, pour pousser le raisonnement économique jusqu’à l’absurde. L’épisode reste un exemple célèbre des limites d’un calcul économique sans considération morale.</p>` },
      { titre: "Le Trésor et la crise asiatique", html: `
<p>En 1997-1998, les crises financières en Thaïlande, en Indonésie et en Corée du Sud menacent l’économie mondiale. Avec le secrétaire au Trésor Robert Rubin et Alan Greenspan, Summers organise des plans de sauvetage par le FMI, en échange de mesures d’austérité et de réformes. Le magazine Time les présente en couverture comme « le comité pour sauver le monde ». Joseph Stiglitz, alors économiste en chef de la Banque mondiale, critique durement ces conditions, qu’il juge avoir aggravé la crise.</p>` },
      { titre: "La démission de Harvard", html: `
<p>En janvier 2005, lors d’un colloque sur la diversité dans les sciences, Summers avance plusieurs hypothèses pour expliquer la faible présence des femmes parmi les professeurs de sciences et d’ingénierie, dont des différences de dispersion des aptitudes entre les sexes. Ses propos provoquent une tempête. Déjà contesté pour son style autoritaire, il subit en mars 2005 un vote de défiance de la faculté des arts et des sciences, et démissionne en 2006.</p>` },
      { titre: "« Team transitory » contre Summers", html: `
<p>Début 2021, Summers rompt publiquement avec l’administration démocrate, dont il est proche, en prévenant que le plan de relance risque de provoquer « des pressions inflationnistes d’une ampleur inédite depuis une génération ». Beaucoup d’économistes, dont Paul <a href="#eco-krugman">Krugman</a>, jugent alors l’inflation transitoire. L’inflation américaine dépasse 9 % en juin 2022. Krugman reconnaîtra son erreur, tout en notant que la désinflation s’est faite ensuite sans la récession prédite par Summers.</p>` }
    ],
    objections: `
<h4>1. La dérégulation financière</h4>
<p>Au Trésor, Summers soutient en 1999 l’abrogation de la loi Glass-Steagall, qui séparait banques de dépôt et banques d’investissement, et s’oppose en 1998 à la régulation des produits dérivés proposée par Brooksley Born, présidente de l’autorité de régulation des marchés à terme. Ses critiques y voient l’une des causes de la crise de 2008.</p>
<h4>2. Une relance de 2009 trop faible ?</h4>
<p>Des économistes comme Christina Romer, qui travaillait avec lui, ou Paul Krugman ont jugé que le plan de relance de 2009 était trop modeste. Summers a été accusé d’avoir freiné des mesures plus ambitieuses, tout en défendant ensuite une politique budgétaire active.</p>
<h4>3. Une hypothèse contestée</h4>
<p>La stagnation séculaire a été critiquée par Ben Bernanke, qui y voyait plutôt un excès d’épargne mondial, venu notamment d’Asie, et par d’autres qui attribuaient la lenteur de la croissance à l’offre, en particulier au ralentissement de la productivité, plus qu’à la demande. La remontée des taux d’intérêt après 2022 a relancé la discussion.</p>
<h4>4. Le style et l’éthique</h4>
<p>Son tempérament provocateur, ses propos de 2005 et, en 2025, la révélation de sa longue correspondance avec Jeffrey Epstein ont durablement terni sa réputation, au-delà de ses idées économiques.</p>`,
    ecoles: `
<p><b>John Maynard <a href="#eco-keynes">Keynes</a></b> et <b>Alvin Hansen</b> sont les sources de la stagnation séculaire.</p>
<p><b>Paul <a href="#eco-samuelson">Samuelson</a></b> et <b>Kenneth Arrow</b>, ses oncles, et <b>Martin Feldstein</b>, son directeur de thèse, l’ont formé.</p>
<p><b>Olivier Blanchard</b> est son coauteur sur l’hystérèse et un allié sur la politique budgétaire.</p>
<p><b>Paul <a href="#eco-krugman">Krugman</a></b> partage son diagnostic de stagnation, mais s’est opposé à lui sur l’inflation de 2021.</p>
<p><b>Andrei Shleifer</b>, son ancien étudiant, a développé la finance comportementale.</p>
<p><b>Ben Bernanke</b> et <b>Robert Gordon</b> proposent d’autres explications de la croissance lente.</p>`,
    source: {
      titre: "Lawrence Summers, intervention au Fonds monétaire international, novembre 2013",
      texte: "Imaginons une situation où les taux d’intérêt naturels et d’équilibre sont tombés nettement en dessous de zéro.",
      notes: `
<p><b>Une hypothèse de travail.</b> Summers ne présente pas une théorie achevée, mais une question : que se passe-t-il si le taux d’intérêt qui assurerait le plein emploi est négatif, alors que la banque centrale ne peut pas descendre sous zéro ?</p>
<p><b>Les conséquences.</b> Dans ce monde, la politique monétaire seule est impuissante, les périodes de plein emploi s’accompagnent de bulles financières, et l’épargne abondante attend des investissements qui ne viennent pas.</p>
<p><b>Un tournant.</b> Cette intervention a lancé l’un des grands débats macroéconomiques des années 2010, jusqu’au retour de l’inflation et des taux plus élevés en 2022.</p>`
    },
    quiz: [
      { q: "Quels postes Summers a-t-il occupés ?",
        o: ["Président de la Réserve fédérale", "Secrétaire au Trésor, président de Harvard et conseiller économique d’Obama", "Directeur du FMI", "Sénateur"], c: 1,
        e: "Il a aussi été économiste en chef de la Banque mondiale." },
      { q: "Qu’est-ce que l’hystérèse du chômage ?",
        o: ["Un chômage qui disparaît seul", "Le fait que le chômage d’aujourd’hui augmente durablement le chômage de demain", "Le chômage saisonnier", "Le chômage dû aux robots"], c: 1,
        e: "Les chômeurs de longue durée perdent compétences et liens avec l’emploi." },
      { q: "Selon la stagnation séculaire, quel est le problème central ?",
        o: ["Une inflation trop forte", "Un excès d’épargne par rapport à l’investissement, qui pousse le taux d’intérêt naturel sous zéro", "Une dette publique trop faible", "Un manque de main-d’œuvre"], c: 1,
        e: "La banque centrale est bloquée au plancher du zéro." },
      { q: "Quel remède Summers propose-t-il contre la stagnation séculaire ?",
        o: ["L’austérité budgétaire", "L’investissement public, notamment dans les infrastructures", "Le protectionnisme", "La hausse des taux"], c: 1,
        e: "Financé à des taux d’intérêt très bas." },
      { q: "Que prévoit Summers début 2021 ?",
        o: ["Une déflation", "Une forte inflation provoquée par un plan de relance trop important", "Une crise bancaire", "Une baisse du dollar"], c: 1,
        e: "L’inflation américaine dépasse 9 % en 2022." }
    ],
    ouverte: {
      q: "De 2015 à 2022, la Banque nationale suisse a maintenu un taux directeur négatif de −0,75 %. Cette expérience confirme-t-elle la thèse de la stagnation séculaire ?",
      r: "En partie. La Suisse présente plusieurs traits décrits par Summers : une épargne très abondante, liée notamment au vieillissement et à la prévoyance professionnelle obligatoire, des taux d’intérêt à long terme parfois négatifs, et une inflation durablement proche de zéro. Le taux négatif de la BNS montre qu’une banque centrale peut descendre un peu sous zéro, mais pas beaucoup, ce qui rejoint l’idée d’un plancher. Toutefois, le cas suisse a aussi une cause propre : la BNS cherchait surtout à freiner l’appréciation du franc, valeur refuge, et non seulement à relancer la demande intérieure. Par ailleurs, la Suisse a connu le plein emploi pendant cette période, ce qui ne correspond pas à une stagnation au sens strict. La remontée des taux en 2022, puis leur retour à zéro en 2025, montrent que le débat reste ouvert : l’épisode de taux bas était-il une tendance de long terme ou une parenthèse ?"
    },
    lectures: [
      ["Accessible", "Lawrence Summers, « The Age of Secular Stagnation », Foreign Affairs, 2016."],
      ["Accessible", "Coen Teulings et Richard Baldwin (dir.), Secular Stagnation: Facts, Causes and Cures, CEPR, 2014, en accès libre."],
      ["Intermédiaire", "Lawrence Summers, « U.S. Economic Prospects: Secular Stagnation, Hysteresis, and the Zero Lower Bound », Business Economics, 2014."],
      ["Intermédiaire", "Joseph Stiglitz, La Grande Désillusion, 2002, pour une critique de la gestion des crises des années 1990."],
      ["Recherche", "Olivier Blanchard et Lawrence Summers, « Hysteresis and the European Unemployment Problem », NBER Macroeconomics Annual, 1986."]
    ],
    decouvrir: {
      duree: 6,
      html: `
<h3>Un économiste au pouvoir</h3>
<p>Lawrence Summers, né en 1954 dans une famille d’économistes, devient professeur à Harvard à vingt-huit ans. Il est ensuite économiste en chef de la Banque mondiale, secrétaire au Trésor de Bill Clinton, président de Harvard et conseiller de Barack Obama. Sa carrière est aussi marquée par de nombreuses controverses.</p>
${vieSummers}
<h3>Trop d’épargne, pas assez d’investissement</h3>
<p>Après la crise de 2008, la croissance reste faible malgré des taux d’intérêt à zéro. Summers explique en 2013 que les pays riches épargnent trop et investissent trop peu, à cause du vieillissement, des inégalités et du faible coût des équipements. Le taux d’intérêt qui ramènerait le plein emploi serait négatif, ce que la banque centrale ne peut pas atteindre. C’est la « stagnation séculaire ».</p>
${stagnation}
<h3>Les cicatrices des crises</h3>
<p>Avec Olivier Blanchard, Summers montre aussi qu’une récession peut laisser des traces durables : les chômeurs de longue durée perdent leurs compétences, et l’économie produit moins même après la reprise. D’où son plaidoyer pour des relances rapides.</p>
<h3>À retenir</h3>
<p>Summers a renouvelé le débat sur la croissance lente et les taux bas. Le portrait complet présente sa carrière, ses idées et les critiques qu’il a suscitées.</p>`,
      quiz: [2, 1]
    },
    resumes: {
      vie: "De New Haven à Harvard, au Trésor et à la Maison-Blanche.",
      epoque: "La macroéconomie divisée, les crises des années 1990, la reprise lente après 2008.",
      pensee: "Six étapes, des marchés inefficients à l’inflation de 2021.",
      livres: "De l’hystérèse à la stagnation séculaire.",
      cas: "La note de la Banque mondiale, la crise asiatique, Harvard, l’inflation de 2021.",
      objections: "La dérégulation, la relance de 2009, une hypothèse contestée, le style et l’éthique.",
      ecoles: "Keynes et Hansen, Samuelson et Arrow, Blanchard, Krugman, Shleifer, Bernanke et Gordon.",
      source: "Et si le taux d’intérêt naturel était négatif ?",
      quiz: "Cinq questions corrigées et une question sur les taux négatifs de la BNS.",
      lectures: "Cinq lectures classées par niveau."
    }
  };

  /* =====================================================================
     DARON ACEMOGLU
     ===================================================================== */
  const vieAcemoglu = lifeline(1967, 2025, [
    [1967, "naissance à Istanbul", true], [1992, "doctorat à la LSE", false], [1993, "arrive au MIT", true], [2001, "les origines coloniales", false],
    [2005, "médaille Clark", true], [2012, "Prospérité, puissance et pauvreté", false], [2023, "Pouvoir et progrès", true], [2024, "prix Nobel", false]
  ], "Daron Acemoglu, né en 1967", "Économiste turc et américain d’origine arménienne, Acemoglu enseigne au MIT depuis 1993. Il est l’un des économistes les plus cités au monde.");

  const nogales = fig(260, (() => {
    let s = `<text x="20" y="24" ${T}>Nogales : une ville, une frontière, deux destins</text>`;
    s += cards([["Nogales (Arizona)", "États-Unis. Revenus moyens environ trois fois plus élevés, routes, écoles et hôpitaux de bonne qualité, élus responsables, droits de propriété protégés.", "var(--note)"], ["Nogales (Sonora)", "Mexique. Même population d’origine, même climat, même culture, mais revenus plus faibles, criminalité et corruption plus fortes, services publics de moindre qualité.", "var(--serial)"]], 295, 190, 44);
    return s;
  })(), "Dans Prospérité, puissance et pauvreté (2012), Acemoglu et Robinson ouvrent leur livre sur cette ville coupée en deux par la frontière. La géographie et la culture sont les mêmes de part et d’autre ; seules les institutions diffèrent.", "Deux cartes comparant les deux moitiés de Nogales");

  const cercles = fig(290, (() => {
    let s = `<text x="20" y="24" ${T}>Cercle vertueux et cercle vicieux des institutions</text>`;
    s += node(20, 46, 290, 58, "Institutions inclusives", "droits protégés, pouvoir partagé", "var(--note)");
    s += node(20, 128, 290, 58, "Incitations à investir et innover", "chacun profite de ses efforts", "var(--note)");
    s += node(20, 210, 290, 58, "Croissance durable", "destruction créatrice acceptée", "var(--note)");
    s += node(330, 46, 290, 58, "Institutions extractives", "une élite détient le pouvoir", "var(--serial)");
    s += node(330, 128, 290, 58, "Rentes captées par l’élite", "peu d’incitations pour les autres", "var(--serial)");
    s += node(330, 210, 290, 58, "Stagnation ou croissance fragile", "l’élite bloque l’innovation", "var(--serial)");
    s += arrow(165, 106, 165, 126) + arrow(165, 188, 165, 208) + arrow(475, 106, 475, 126) + arrow(475, 188, 475, 208);
    return s;
  })(), "Selon Acemoglu et Robinson, les institutions inclusives se renforcent elles-mêmes : la prospérité partagée donne à beaucoup de gens les moyens de défendre leurs droits. Les institutions extractives aussi : l’élite qui profite des rentes utilise son pouvoir pour bloquer les changements qui la menaceraient.", "Deux colonnes : cercle vertueux et cercle vicieux");

  OEC.portraits["acemoglu"] = {
    portrait: true, labels: LABELS,
    essentiel: [
      "Daron Acemoglu, né en 1967 à Istanbul, professeur au MIT, prix Nobel 2024 avec Simon Johnson et James Robinson, a montré que les institutions politiques et économiques expliquent largement pourquoi certains pays sont riches et d’autres pauvres.",
      "Il distingue les institutions « inclusives », qui protègent les droits de tous et partagent le pouvoir, des institutions « extractives », qui permettent à une élite de capter les richesses. Il étaye cette thèse par l’histoire de la colonisation, résumée dans Prospérité, puissance et pauvreté (2012).",
      "Il étudie aussi les effets de la technologie, des robots et de l’intelligence artificielle sur le travail, et soutient que le progrès technique ne profite à tous que si la société l’oriente."
    ],
    sections: [
      { id: "vie", titre: "Une vie", html: `
<p>Kamer Daron Acemoğlu naît le 3 septembre 1967 à Istanbul, dans une famille arménienne de Turquie. Son père enseigne le droit commercial, sa mère dirige une école arménienne. Il grandit pendant une période de grande instabilité politique : la Turquie connaît un coup d’État militaire en 1980. Il racontera que cette expérience de la dictature l’a poussé à s’interroger sur les liens entre démocratie et développement.</p>
<p>Il part étudier en Angleterre, à l’université d’York, puis à la London School of Economics, où il obtient son doctorat en 1992. Il rejoint le MIT dès 1993, où il fait toute sa carrière. Extrêmement productif, il publie sur la macroéconomie, le marché du travail, la croissance, la théorie des réseaux, l’économie politique et la technologie.</p>
${vieAcemoglu}
<p>Il reçoit en 2005 la médaille John Bates Clark. Avec le politologue James Robinson et l’économiste Simon Johnson, il mène depuis la fin des années 1990 un programme de recherche sur les institutions, qui leur vaut le prix Nobel en 2024, « pour leurs études sur la façon dont les institutions se forment et influencent la prospérité ». Ses livres grand public, Prospérité, puissance et pauvreté (2012), Le Couloir étroit (2019) et Pouvoir et progrès (2023), sont traduits dans le monde entier.</p>` },
      { id: "epoque", titre: "Le monde qu’il voulait comprendre", html: `
<p>Pourquoi le revenu moyen d’un Suisse est-il plus de cinquante fois supérieur à celui d’un habitant du Burundi ? Les économistes avancent plusieurs explications : la géographie et le climat, défendus notamment par Jeffrey Sachs ; la culture, de Max Weber à David Landes ; ou l’ignorance des dirigeants, qui ne sauraient pas quelles politiques mener.</p>
<p>Dans les années 1990, la « nouvelle économie institutionnelle » de Douglass North soutient que ce sont les règles du jeu, les institutions, qui comptent le plus. Mais il est difficile de le prouver : les pays riches ont de bonnes institutions, mais est-ce la cause ou la conséquence de leur richesse ?</p>
<p>Acemoglu, Johnson et Robinson cherchent un moyen de trancher cette question de causalité, en utilisant l’histoire comme une expérience naturelle.</p>` },
      { id: "pensee", titre: "La pensée, pas à pas", html: `
<h4>1. Les origines coloniales</h4>
<p>Dans un article de 2001, Acemoglu, Johnson et Robinson utilisent la mortalité des premiers colons européens. Là où les colons mouraient en masse de maladies, comme en Afrique de l’Ouest, ils ont créé des institutions extractives pour exploiter les ressources à distance. Là où ils pouvaient s’installer, comme en Amérique du Nord ou en Australie, ils ont importé des institutions protégeant les droits de propriété. Ces institutions ont persisté, et expliquent une grande partie des écarts de revenu actuels.</p>
<h4>2. Le renversement de fortune</h4>
<p>En 2002, ils montrent que, parmi les anciennes colonies, les régions les plus riches et les plus peuplées vers 1500, comme le Mexique, le Pérou ou l’Inde, sont souvent devenues plus pauvres que les régions alors peu développées, comme les États-Unis ou le Canada. Les Européens ont installé des institutions extractives là où il y avait des richesses et des populations à exploiter.</p>
<h4>3. Inclusives ou extractives</h4>
<p>Les institutions économiques inclusives protègent la propriété, garantissent l’égalité devant la loi et permettent à chacun d’entreprendre. Elles reposent sur des institutions politiques inclusives, pluralistes et assez centralisées pour faire respecter le droit (<a href="#c-institutions-inclusives">voir institutions inclusives</a>). Les institutions extractives, au contraire, concentrent le pouvoir et les richesses dans les mains d’une élite.</p>
${nogales}
<h4>4. Les cercles vertueux et vicieux</h4>
<p>Les institutions tendent à se reproduire. Une élite qui profite d’institutions extractives craint la <a href="#c-destruction-creatrice">destruction créatrice</a>, qui pourrait faire émerger des concurrents et des contre-pouvoirs. Elle bloque donc l’innovation. Les changements viennent surtout de « moments critiques », comme la peste noire ou la révolution anglaise de 1688.</p>
${cercles}
<h4>5. Le couloir étroit</h4>
<p>Dans Le Couloir étroit (2019), Acemoglu et Robinson décrivent la liberté comme un équilibre fragile entre un État fort et une société forte, capable de le contrôler. Trop d’État mène au despotisme, pas assez à l’anarchie ou à la domination des coutumes et des clans.</p>
<h4>6. La technologie et le travail</h4>
<p>Avec Pascual Restrepo, Acemoglu étudie l’automatisation. Ils estiment en 2020 que chaque robot industriel supplémentaire pour mille travailleurs a réduit l’emploi et les salaires dans les régions américaines concernées. Dans Pouvoir et progrès (2023), avec Simon Johnson, il soutient que la technologie ne profite pas automatiquement à tous : tout dépend de qui décide de son orientation.</p>
<h4>7. L’intelligence artificielle</h4>
<p>Acemoglu s’inquiète d’une intelligence artificielle tournée vers l’automatisation et la surveillance plutôt que vers l’aide aux travailleurs. En 2024, il estime que ses effets sur la productivité seront plus modestes que ce qu’annoncent ses promoteurs, du moins pendant la décennie à venir.</p>` },
      { id: "livres", titre: "Les livres et articles qui comptent", html: `
<p><b>« The Colonial Origins of Comparative Development » (2001), avec Simon Johnson et James Robinson.</b> L’article fondateur, l’un des plus cités de l’économie contemporaine.</p>
<p><b>Economic Origins of Dictatorship and Democracy (2006), avec James Robinson.</b> Une théorie des transitions démocratiques.</p>
<p><b>Prospérité, puissance et pauvreté (2012), avec James Robinson.</b> Leur thèse pour le grand public, avec de nombreux exemples historiques.</p>
<p><b>Le Couloir étroit (2019), avec James Robinson.</b> Sur l’équilibre entre l’État et la société.</p>
<p><b>Pouvoir et progrès (2023), avec Simon Johnson.</b> Mille ans d’histoire de la technologie et de la prospérité partagée.</p>` }
    ],
    cas: [
      { titre: "Les deux Corées", html: `
<p>Acemoglu et Robinson aiment comparer la Corée du Nord et la Corée du Sud. Jusqu’en 1945, les deux parties de la péninsule partagent la même histoire, la même langue et la même culture. Le Sud adopte progressivement des institutions économiques puis politiques inclusives, et devient un pays riche et démocratique. Le Nord, sous une dictature communiste héréditaire, reste l’un des pays les plus pauvres du monde, frappé par la famine dans les années 1990. Les images satellites de nuit, éclairées au Sud et sombres au Nord, résument la différence.</p>` },
      { titre: "La Glorieuse Révolution", html: `
<p>Pour Acemoglu et Robinson, la révolution anglaise de 1688, qui limite le pouvoir du roi au profit du Parlement, est un moment fondateur. Elle crée des institutions politiques plus pluralistes, qui protègent les droits de propriété d’une classe élargie de marchands et d’entrepreneurs. Selon eux, c’est ce qui explique que la révolution industrielle ait commencé en Angleterre un siècle plus tard, plutôt qu’en Espagne ou en France.</p>` },
      { titre: "Le Botswana, exception africaine", html: `
<p>Le Botswana, indépendant en 1966, était alors l’un des pays les plus pauvres du monde. Il est devenu l’un des plus prospères d’Afrique, grâce à ses diamants, mais surtout, selon Acemoglu, Johnson et Robinson, grâce à des institutions inclusives héritées de traditions tribales de consultation et à des dirigeants qui ont respecté les règles démocratiques. Contrairement à d’autres pays riches en ressources, les revenus des diamants n’y ont pas été captés par une élite.</p>` },
      { titre: "Le Nobel 2024", html: `
<p>Le 14 octobre 2024, Acemoglu, Johnson et Robinson reçoivent le prix Nobel. Acemoglu, interrogé par la presse, insiste sur le recul de la démocratie dans le monde et sur la nécessité de mieux répartir les fruits du progrès technique, y compris de l’intelligence artificielle. Le prix récompense un programme de recherche qui a profondément marqué l’économie du développement et l’histoire économique.</p>` }
    ],
    objections: `
<h4>1. Des données contestées</h4>
<p>L’économiste David Albouy a critiqué en 2012 les données de mortalité des colons utilisées dans l’article de 2001 : elles seraient incomplètes et parfois reconstruites. Les auteurs ont répondu en défendant la solidité de leurs résultats.</p>
<h4>2. Le capital humain d’abord ?</h4>
<p>Edward Glaeser et ses coauteurs ont soutenu en 2004 que les colons n’ont pas seulement apporté des institutions, mais aussi leur éducation et leur savoir-faire. Le capital humain pourrait être la cause première, et les bonnes institutions sa conséquence.</p>
<h4>3. La Chine</h4>
<p>La croissance rapide de la Chine depuis 1978, sous un régime autoritaire, semble contredire la thèse. Acemoglu et Robinson répondent qu’une croissance sous institutions extractives est possible pour rattraper un retard, mais qu’elle s’essoufflera faute de destruction créatrice et de libertés.</p>
<h4>4. Une notion trop large</h4>
<p>Certains historiens et économistes jugent les catégories « inclusives » et « extractives » trop vagues, au risque d’expliquer chaque cas après coup. La géographie, les maladies ou la culture, défendues par Jeffrey Sachs ou d’autres, garderaient aussi un rôle important.</p>`,
    ecoles: `
<p><b>Douglass North</b> et la nouvelle économie institutionnelle sont ses prédécesseurs directs.</p>
<p><b>Joseph <a href="#eco-schumpeter">Schumpeter</a></b> lui inspire le rôle central de la destruction créatrice.</p>
<p><b>James Robinson</b> et <b>Simon Johnson</b> sont ses coauteurs et colauréats du prix Nobel.</p>
<p><b>Pascual Restrepo</b> travaille avec lui sur l’automatisation et le travail.</p>
<p><b>Elinor <a href="#eco-ostrom">Ostrom</a></b> partage son intérêt pour les institutions, à une échelle plus locale.</p>
<p><b>Thomas <a href="#eco-piketty">Piketty</a></b> débat avec lui du rôle des institutions politiques dans les inégalités.</p>`,
    source: {
      titre: "Daron Acemoglu et James Robinson, Prospérité, puissance et pauvreté, 2012, chapitre 13",
      texte: "Les nations échouent aujourd’hui parce que leurs institutions économiques extractives ne créent pas les incitations nécessaires pour que les gens épargnent, investissent et innovent.",
      notes: `
<p><b>La thèse centrale.</b> Le titre original du livre est Why Nations Fail, « Pourquoi les nations échouent ». Cette phrase en donne la réponse en une ligne : la pauvreté n’est ni une fatalité géographique ni un problème culturel, mais le résultat de règles qui découragent l’effort.</p>
<p><b>La politique derrière l’économie.</b> Les auteurs ajoutent que ces institutions économiques sont maintenues par des institutions politiques qui protègent le pouvoir de l’élite. Changer l’économie suppose donc de changer la politique.</p>
<p><b>Une leçon pour l’aide au développement.</b> Ils en concluent que l’aide internationale a peu d’effet si elle ne touche pas aux institutions, et peut même renforcer les élites en place.</p>`
    },
    quiz: [
      { q: "Selon Acemoglu, qu’est-ce qui explique d’abord les écarts de richesse entre pays ?",
        o: ["Le climat", "Les institutions politiques et économiques", "La religion", "La taille du pays"], c: 1,
        e: "La géographie et la culture jouent un rôle secondaire selon lui." },
      { q: "Que montre l’exemple de Nogales ?",
        o: ["Que le climat explique tout", "Qu’avec la même géographie et la même culture, des institutions différentes donnent des niveaux de vie différents", "Que le commerce appauvrit", "Que les villes frontalières sont pauvres"], c: 1,
        e: "La ville est coupée en deux par la frontière entre les États-Unis et le Mexique." },
      { q: "Qu’utilisent Acemoglu, Johnson et Robinson en 2001 pour prouver le rôle des institutions ?",
        o: ["Les prix du pétrole", "La mortalité des premiers colons européens", "Les résultats électoraux", "Les températures"], c: 1,
        e: "Elle a déterminé le type d’institutions installées par les colons." },
      { q: "Pourquoi une élite extractive bloque-t-elle souvent l’innovation ?",
        o: ["Par ignorance", "Parce que la destruction créatrice menacerait ses rentes et son pouvoir", "Faute d’argent", "Parce que la technologie est inutile"], c: 1,
        e: "C’est le cercle vicieux des institutions extractives." },
      { q: "Que soutient Pouvoir et progrès (2023) ?",
        o: ["Que la technologie profite toujours à tous", "Que les gains de la technologie ne sont partagés que si la société oriente son développement", "Qu’il faut interdire les robots", "Que l’IA n’aura aucun effet"], c: 1,
        e: "Écrit avec Simon Johnson." }
    ],
    ouverte: {
      q: "La Suisse, pauvre en ressources naturelles, est l’un des pays les plus riches du monde. Est-ce un exemple d’institutions inclusives ? La place financière et le négoce de matières premières nuancent-ils ce tableau ?",
      r: "La Suisse illustre bien plusieurs traits des institutions inclusives : un pouvoir très partagé grâce au fédéralisme et à la démocratie directe, une forte protection des droits de propriété, un État de droit solide, un accès large à l’éducation, notamment par l’apprentissage, et une ouverture à la concurrence et à l’innovation. Sa prospérité ne vient pas de ressources naturelles, ce qui va dans le sens d’Acemoglu. Mais sa thèse invite aussi à regarder les liens de la Suisse avec des institutions extractives ailleurs. Pendant longtemps, le secret bancaire a permis à des élites de pays pauvres, parfois des dictateurs, d’y placer des fortunes détournées. Genève et Zoug accueillent aussi une grande partie du négoce mondial de matières premières, souvent extraites dans des pays aux institutions fragiles. Depuis, la Suisse a abandonné le secret bancaire pour les non-résidents, en adoptant l’échange automatique d’informations à partir de 2017, et restitue des avoirs illicites. Une économie peut donc être inclusive chez elle tout en profitant, en partie, de systèmes extractifs ailleurs."
    },
    lectures: [
      ["Accessible", "Daron Acemoglu et James Robinson, Prospérité, puissance et pauvreté, 2012, chapitres 1 et 2."],
      ["Accessible", "Comité Nobel, « Popular science background: They provided an explanation for why some countries are rich and others poor », 2024."],
      ["Intermédiaire", "Daron Acemoglu et Simon Johnson, Pouvoir et progrès, 2023."],
      ["Intermédiaire", "Daron Acemoglu et James Robinson, Le Couloir étroit, 2019."],
      ["Recherche", "Daron Acemoglu, Simon Johnson et James Robinson, « The Colonial Origins of Comparative Development », American Economic Review, 2001."]
    ],
    decouvrir: {
      duree: 6,
      html: `
<h3>De la Turquie au MIT</h3>
<p>Daron Acemoglu naît en 1967 à Istanbul, dans une famille arménienne. Adolescent, il vit le coup d’État militaire de 1980 en Turquie, qui le pousse à réfléchir aux liens entre politique et prospérité. Professeur au MIT depuis 1993, il reçoit le prix Nobel en 2024 avec Simon Johnson et James Robinson.</p>
${vieAcemoglu}
<h3>Une ville coupée en deux</h3>
<p>Nogales est une ville coupée par la frontière entre les États-Unis et le Mexique. Même climat, mêmes origines, même culture, mais des niveaux de vie très différents. Pour Acemoglu, la différence vient des institutions : les règles qui protègent ou non les droits des gens, et qui partagent ou concentrent le pouvoir.</p>
${nogales}
<h3>Inclusives ou extractives</h3>
<p>Les institutions « inclusives » donnent à chacun la possibilité d’entreprendre et de profiter de ses efforts. Les institutions « extractives » permettent à une petite élite de s’enrichir aux dépens des autres, et cette élite bloque les changements qui la menaceraient. C’est pourquoi la pauvreté peut durer des siècles.</p>
<h3>À retenir</h3>
<p>Pour Acemoglu, la prospérité dépend avant tout des règles politiques et économiques. Le portrait complet présente ses preuves historiques, ses travaux sur la technologie et les critiques qu’on lui adresse.</p>`,
      quiz: [0, 1]
    },
    resumes: {
      vie: "D’Istanbul à York, à la LSE, au MIT et au prix Nobel.",
      epoque: "Géographie, culture ou institutions : pourquoi des pays riches et des pays pauvres ?",
      pensee: "Sept étapes, des origines coloniales à l’intelligence artificielle.",
      livres: "De l’article de 2001 à Pouvoir et progrès.",
      cas: "Les deux Corées, 1688, le Botswana, le Nobel 2024.",
      objections: "Des données contestées, le capital humain, la Chine, une notion trop large.",
      ecoles: "North, Schumpeter, Robinson et Johnson, Restrepo, Ostrom, Piketty.",
      source: "Les nations échouent à cause d’institutions extractives.",
      quiz: "Cinq questions corrigées et une question sur les institutions suisses.",
      lectures: "Cinq lectures classées par niveau."
    }
  };
})();
