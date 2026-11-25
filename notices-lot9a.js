/* Œconomia — notices longues, lot 9 (a) : encastrement, monnaie endogène */
(function () {
  const T = 'style="fill:var(--ink); font:600 13px Manrope, sans-serif"';
  const S = 'style="fill:var(--ink-soft); font:500 11.5px Manrope, sans-serif"';
  const fig = (h, body, caption, label) => `<figure class="schema"><svg viewBox="0 0 640 ${h}" role="img" aria-label="${label}">${body}</svg><figcaption>${caption}</figcaption></figure>`;
  const arrow = (x1, y1, x2, y2, col = "var(--ink-soft)") => {
    const a = Math.atan2(y2 - y1, x2 - x1), h = 8;
    return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" style="stroke:${col}; stroke-width:1.8"/><polygon points="${x2},${y2} ${x2 - h * Math.cos(a - 0.4)},${y2 - h * Math.sin(a - 0.4)} ${x2 - h * Math.cos(a + 0.4)},${y2 - h * Math.sin(a + 0.4)}" style="fill:${col}"/>`;
  };
  const box = (x, y, w, h, t, sub, c) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" style="fill:var(--card); stroke:${c}; stroke-width:2"/><text x="${x + w / 2}" y="${y + h / 2 - 3}" text-anchor="middle" style="fill:var(--ink); font:700 12px Manrope, sans-serif">${t}</text><text x="${x + w / 2}" y="${y + h / 2 + 15}" text-anchor="middle" ${S}>${sub}</text>`;

  /* =====================================================================
     ENCASTREMENT
     ===================================================================== */
  const formes = fig(280, (() => {
    let s = `<text x="20" y="24" ${T}>Trois manières d’organiser l’économie selon Polanyi</text>`;
    s += box(20, 50, 190, 70, "Réciprocité", "dons et contre-dons", "var(--note)");
    s += box(225, 50, 190, 70, "Redistribution", "un centre collecte et répartit", "var(--gold)");
    s += box(430, 50, 190, 70, "Échange marchand", "prix fixés sur un marché", "var(--plum)");
    s += `<text x="115" y="146" text-anchor="middle" ${S}>famille, village,</text><text x="115" y="162" text-anchor="middle" ${S}>cercle de la kula</text>`;
    s += `<text x="320" y="146" text-anchor="middle" ${S}>palais, temple, État,</text><text x="320" y="162" text-anchor="middle" ${S}>sécurité sociale</text>`;
    s += `<text x="525" y="146" text-anchor="middle" ${S}>marchés, Bourse,</text><text x="525" y="162" text-anchor="middle" ${S}>commerce en ligne</text>`;
    s += `<rect x="20" y="190" width="600" height="60" rx="10" style="fill:none; stroke:var(--line); stroke-dasharray:5 4"/>`;
    s += `<text x="320" y="216" text-anchor="middle" style="fill:var(--ink); font:700 12.5px Manrope, sans-serif">Toutes les sociétés combinent les trois ;</text>`;
    s += `<text x="320" y="234" text-anchor="middle" ${S}>le XIXe siècle tente, pour la première fois, de tout confier au marché.</text>`;
    return s;
  })(), "D’après Karl Polanyi, La Grande Transformation (1944) et Commerce et marché dans les premiers empires (1957), schéma. Le marché existe presque partout, mais il est longtemps resté une forme parmi d’autres, encadrée par la société.", "Schéma des trois formes d’intégration économique");

  OEC.notices["encastrement"] = {
    essentiel: [
      "L’encastrement désigne l’idée, formulée par Karl Polanyi en 1944, que l’économie est prise dans les relations sociales, politiques et culturelles, et ne fonctionne jamais comme une sphère séparée de la société.",
      "Pendant la plus grande partie de l’histoire, la production et l’échange étaient réglés par la parenté, la religion ou le pouvoir. Le XIXe siècle tente l’inverse : faire du marché le régulateur de toute la société, y compris du travail, de la terre et de la monnaie.",
      "La notion est au cœur des débats sur la place du marché : jusqu’où laisser les prix décider, et que faut-il protéger ? Elle a été reprise et transformée par la sociologie économique, qui montre que même les marchés modernes reposent sur la confiance et les réseaux."
    ],
    sections: [
      { id: "depart", titre: "La question de départ : l’économie est-elle une sphère à part ?", html: `
<p>Dans les manuels, l’économie apparaît souvent comme un domaine autonome, avec ses propres lois : l’offre, la demande, les prix. Les relations familiales, la religion ou la politique y sont des « facteurs extérieurs ». Karl <a href="#eco-polanyi">Polanyi</a> renverse cette perspective. Historien et lecteur des anthropologues, il observe que cette séparation est une exception historique, très récente.</p>
<p>Dans La Grande Transformation, en 1944, il soutient qu’avant le XIXe siècle l’économie était « encastrée » dans la société : on produisait et on échangeait selon des règles de parenté, de rang, de religion ou de pouvoir. Le marché existait, mais à la marge. Ce n’est qu’avec la révolution industrielle anglaise qu’on a tenté de faire l’inverse : soumettre la société aux prix du marché. La question de l’encastrement devient alors : que se passe-t-il quand on essaie de « désencastrer » l’économie ?</p>` },
      { id: "raisonnement", titre: "Le raisonnement pas à pas", html: `
<h4>1. Trois manières d’organiser l’économie</h4>
<p>Polanyi distingue trois grandes formes. La réciprocité : des dons qui appellent des contre-dons, entre parents ou voisins. La redistribution : un centre, palais, temple ou État, collecte les ressources et les répartit. L’échange marchand : des biens contre de l’argent, à un prix fixé sur un marché. Toutes les sociétés combinent les trois.</p>
${formes}
<h4>2. Le marché autorégulateur, une nouveauté</h4>
<p>Le XIXe siècle invente un système où presque tous les revenus dépendent de ventes sur des marchés, et où les prix doivent se fixer librement. Pour Polanyi, ce système n’est pas né spontanément : il a fallu des lois pour supprimer les protections anciennes, enclore les terres, créer un marché national du travail.</p>
<h4>3. Les marchandises fictives</h4>
<p>Trois éléments essentiels ne sont pas produits pour être vendus : le travail, qui est la vie humaine ; la terre, qui est la nature ; la monnaie, qui est une institution. Les traiter comme des marchandises, c’est accepter que leur prix varie sans limite : des salaires sous le minimum vital, des sols épuisés, une monnaie qui manque en pleine crise.</p>
<h4>4. Le double mouvement</h4>
<p>La société ne le supporte pas. Elle se protège, souvent sans plan d’ensemble : lois sur le travail des enfants, syndicats, droits de douane agricoles, banques centrales. L’histoire du XIXe siècle est celle de ce « double mouvement » : l’extension du marché et la protection de la société.</p>
<h4>5. Un autre sens : les réseaux</h4>
<p>En 1985, le sociologue Mark Granovetter reprend le mot dans un sens différent. Pour lui, même les marchés modernes sont encastrés dans des réseaux de relations personnelles : on trouve un emploi par des connaissances, on fait confiance à un fournisseur qu’on connaît. L’encastrement n’est plus une question de degré historique, mais une propriété de toute vie économique.</p>
<h4>6. Ce qu’on en tire aujourd’hui</h4>
<p>La notion invite à poser une question précise sur chaque marché : quelles règles, quelles institutions, quelle confiance le font fonctionner ? Et quelles activités, comme le soin, le sang ou les organes, gagnent à rester hors du marché ?</p>` },
      { id: "preuves", titre: "Ce que disent les faits", html: `
<h4>L’anthropologie des échanges</h4>
<p>En 1922, l’anthropologue Bronisław Malinowski décrit la « kula » des îles Trobriand : des colliers et des bracelets circulent de île en île, sans valeur d’usage, selon des règles de don et de contre-don qui créent des alliances. En 1925, Marcel Mauss généralise dans son Essai sur le don : dans de nombreuses sociétés, l’échange crée des obligations et des liens, et pas seulement des transactions.</p>
<h4>Le jeu de l’ultimatum dans quinze sociétés</h4>
<p>Au début des années 2000, une équipe d’anthropologues et d’économistes dirigée par Joseph Henrich fait jouer le même jeu dans quinze petites sociétés, de l’Amazonie à l’Indonésie : un joueur partage une somme, l’autre accepte ou refuse. Les comportements varient fortement d’une société à l’autre, et dépendent notamment de la place du marché et de la coopération dans la vie quotidienne. Les normes sociales façonnent les choix économiques.</p>
<h4>Le don du sang</h4>
<p>En 1970, le sociologue Richard Titmuss compare le don du sang bénévole au Royaume-Uni et la vente de sang aux États-Unis. Il soutient que le système payant attire des donneurs plus à risque et ne produit pas davantage de sang de qualité. Le débat sur la rémunération du don continue, mais l’exemple montre qu’introduire un prix peut changer le sens d’un acte.</p>` }
    ],
    cas: [
      { titre: "Speenhamland, 1795-1834", html: `
<p>En 1795, des juges du Berkshire décident de compléter les salaires des ouvriers agricoles selon le prix du pain et la taille de leur famille. Pour Polanyi, ce système empêche la naissance d’un véritable marché du travail. Sa suppression par la nouvelle loi sur les pauvres de 1834 livre le travail au marché. Les historiens ont depuis nuancé son récit, mais l’épisode reste un exemple classique de l’encastrement et de sa rupture.</p>` },
      { titre: "Migros et Coop, des coopératives", html: `
<p>Les deux plus grands distributeurs suisses sont des coopératives : leurs membres en sont les propriétaires, et les bénéfices ne sont pas versés à des actionnaires. Migros, fondée en 1925 par Gottlieb Duttweiler, est transformée en coopératives en 1941 et consacre une part de son chiffre d’affaires à la culture et à la formation. Ces entreprises vendent sur un marché, mais selon des règles qui relèvent aussi de la réciprocité.</p>` },
      { titre: "L’eau, marchandise ou bien commun ?", html: `
<p>Dans les années 1990 et 2000, plusieurs villes du monde confient leur distribution d’eau à des entreprises privées, puis certaines la reprennent en main publique, comme Paris en 2010. Le débat porte précisément sur l’encastrement : l’eau peut-elle être vendue comme une marchandise ordinaire, ou doit-elle rester sous un contrôle public ou communautaire (<a href="#c-biens-communs">voir biens communs</a>) ?</p>` }
    ],
    objections: `
<h4>1. Une histoire idéalisée</h4>
<p>Des historiens reprochent à Polanyi d’idéaliser les sociétés d’avant le marché, où l’encastrement allait souvent avec la domination des seigneurs, des castes ou des chefs de famille. Être protégé par la communauté, c’était aussi lui être soumis.</p>
<h4>2. Des marchés plus anciens qu’il ne le dit</h4>
<p>Les historiens de l’Antiquité et du Moyen Âge ont montré l’existence de marchés actifs, avec des prix qui variaient selon l’offre et la demande, bien avant le XIXe siècle. La rupture serait moins nette que Polanyi ne le soutient.</p>
<h4>3. Un concept à deux sens</h4>
<p>Chez Polanyi, l’encastrement varie selon les époques ; chez Granovetter, il est partout. Si tout est encastré, la notion perd une partie de sa force critique. Les chercheurs doivent préciser à chaque fois dans quel sens ils l’emploient.</p>
<h4>4. La lecture libérale</h4>
<p>Pour <a href="#eco-hayek">Hayek</a>, les « protections » que décrit Polanyi sont souvent des privilèges défendus par des groupes organisés, au détriment des consommateurs et des nouveaux venus. Le marché, en mettant fin à des statuts hérités, a aussi été un instrument de liberté.</p>`,
    ecoles: `
<p><b>Karl <a href="#eco-polanyi">Polanyi</a></b> forge la notion dans La Grande Transformation (1944).</p>
<p><b>Bronisław Malinowski</b> et <b>Marcel Mauss</b> lui fournissent les exemples du don et de la réciprocité.</p>
<p><b>Thorstein <a href="#eco-veblen">Veblen</a></b> et les institutionnalistes américains partagent l’idée que l’économie est faite d’habitudes et d’institutions.</p>
<p><b>Mark Granovetter</b> fonde en 1985 la « nouvelle sociologie économique » sur un sens élargi du mot.</p>
<p><b>Elinor <a href="#eco-ostrom">Ostrom</a></b> montre comment des communautés règlent l’usage de ressources communes hors du marché et de l’État.</p>
<p><b>Friedrich <a href="#eco-hayek">Hayek</a></b> en est le grand contradicteur (<a href="#controverses" data-debat="polanyi-hayek">voir la controverse</a>).</p>`,
    source: {
      titre: "Karl Polanyi, La Grande Transformation, 1944, chapitre 6",
      texte: "Permettre au mécanisme du marché de diriger seul le sort des êtres humains et de leur milieu naturel conduirait à la destruction de la société.",
      notes: `
<p><b>Le contexte.</b> Polanyi vient d’expliquer pourquoi le travail, la terre et la monnaie ne sont pas des marchandises comme les autres. La phrase tire la conséquence : un marché sans limites ne peut pas durer.</p>
<p><b>Ce qu’elle ne dit pas.</b> Polanyi ne rejette pas le marché. Il rejette l’idée qu’il puisse être le seul régulateur de la société. Les prix sont utiles, à condition d’être encadrés.</p>
<p><b>Sa portée aujourd’hui.</b> La phrase est souvent citée dans les débats sur le climat, le logement ou le travail des plateformes, qui posent tous la même question : que faut-il soustraire en partie au marché ?</p>`
    },
    quiz: [
      { q: "Que signifie, chez Polanyi, une économie « encastrée » ?",
        o: ["Une économie fermée au commerce extérieur", "Une économie dont la production et l’échange sont réglés par des relations sociales, politiques et religieuses", "Une économie entièrement planifiée", "Une économie dominée par de grandes entreprises"], c: 1,
        e: "Pendant la plus grande partie de l’histoire, le marché n’était qu’une forme d’échange parmi d’autres." },
      { q: "Quelles sont les trois formes d’organisation de l’économie selon Polanyi ?",
        o: ["L’offre, la demande et le prix", "La réciprocité, la redistribution et l’échange marchand", "L’agriculture, l’industrie et les services", "Le capital, le travail et la terre"], c: 1,
        e: "Toutes les sociétés les combinent, dans des proportions différentes." },
      { q: "Pourquoi le travail est-il une « marchandise fictive » ?",
        o: ["Parce qu’il n’a pas de prix", "Parce qu’il n’est pas produit pour être vendu : c’est la vie humaine elle-même", "Parce qu’il est illégal de le vendre", "Parce que son prix est fixé par l’État"], c: 1,
        e: "Il en va de même pour la terre et la monnaie." },
      { q: "En quel sens Granovetter emploie-t-il le mot en 1985 ?",
        o: ["Dans le même sens que Polanyi", "Pour dire que même les marchés modernes sont encastrés dans des réseaux de relations personnelles", "Pour décrire la planification soviétique", "Pour dire que les marchés modernes sont entièrement désencastrés"], c: 1,
        e: "L’encastrement devient une propriété de toute vie économique." },
      { q: "Que soutient Richard Titmuss à propos du don du sang ?",
        o: ["Que payer les donneurs augmente toujours la quantité et la qualité du sang", "Qu’un système payant peut attirer des donneurs plus à risque et changer le sens du don", "Que le don du sang devrait être interdit", "Que les donneurs bénévoles donnent un sang de moins bonne qualité"], c: 1,
        e: "Introduire un prix peut modifier le sens d’un acte." }
    ],
    ouverte: {
      q: "En Suisse, le don du sang n’est pas rémunéré, et en 2022 les votants ont accepté le principe du consentement présumé pour le don d’organes. Faut-il laisser certaines choses hors du marché ?",
      r: "La question est au cœur de la notion d’encastrement. En Suisse, le sang est donné bénévolement, et la loi interdit le commerce d’organes. Le vote de 2022 n’a pas introduit de marché : il a changé la règle par défaut, en présumant le consentement sauf refus exprimé, pour augmenter le nombre de dons. Polanyi, et à sa suite Titmuss, diraient que certaines choses touchent à la dignité des personnes et au lien social : les payer pourrait attirer les plus pauvres, faire baisser la qualité ou décourager ceux qui donnaient par solidarité. Des économistes répondent que des prix bien encadrés pourraient sauver des vies quand les dons manquent, comme pour les reins, et l’Iran, qui rémunère les donneurs de rein, est souvent cité comme ayant fortement réduit ses listes d’attente. Le débat n’oppose donc pas le marché et l’absence de règles, mais différentes manières d’organiser l’échange : don, règle publique ou prix encadré."
    },
    lectures: [
      ["Accessible", "Karl Polanyi, « Notre obsolète mentalité de marché », 1947."],
      ["Accessible", "Michael Sandel, Ce que l’argent ne saurait acheter, 2012."],
      ["Intermédiaire", "Karl Polanyi, La Grande Transformation, 1944, chapitres 4 à 6."],
      ["Intermédiaire", "Marcel Mauss, Essai sur le don, 1925."],
      ["Recherche", "Mark Granovetter, « Economic Action and Social Structure: The Problem of Embeddedness », American Journal of Sociology, 1985 ; Joseph Henrich et al., « In Search of Homo Economicus », American Economic Review, 2001."]
    ],
    decouvrir: {
      duree: 5,
      html: `
<h3>L’économie n’est pas une île</h3>
<p>Quand on achète du pain, on pense à un prix. Mais pendant des millénaires, l’économie a surtout reposé sur d’autres règles : on partageait en famille, on rendait les services reçus, on donnait une part de la récolte au seigneur ou au temple. L’économiste et historien Karl Polanyi dit que l’économie était « encastrée » dans la société.</p>
${formes}
<h3>Le XIXe siècle tente de tout confier au marché</h3>
<p>Avec la révolution industrielle, on essaie pour la première fois de laisser les prix décider de presque tout, y compris des salaires et du prix de la terre. Pour Polanyi, cela menace la société, qui réagit en se protégeant : lois sociales, syndicats, protection de l’agriculture.</p>
<h3>Une question toujours actuelle</h3>
<p>Faut-il payer les donneurs de sang ? Vendre l’eau comme une marchandise ? Ces débats posent la même question : qu’est-ce qui doit rester, en partie, hors du marché ?</p>
<h3>À retenir</h3>
<p>Le marché est une manière d’organiser l’économie parmi d’autres, et il repose toujours sur des règles sociales. La notice complète présente le raisonnement, les preuves et les critiques.</p>`,
      quiz: [0, 1]
    },
    resumes: {
      depart: "L’économie est-elle une sphère à part ? Polanyi en 1944.",
      raisonnement: "Six étapes, des trois formes d’échange aux réseaux de Granovetter.",
      preuves: "La kula et le don, le jeu de l’ultimatum dans quinze sociétés, le don du sang.",
      cas: "Speenhamland, Migros et Coop, l’eau.",
      objections: "Une histoire idéalisée, des marchés anciens, deux sens du mot, la lecture libérale.",
      ecoles: "Polanyi, Malinowski et Mauss, Veblen, Granovetter, Ostrom, Hayek.",
      source: "Le marché seul conduirait à la destruction de la société.",
      quiz: "Cinq questions corrigées et une question sur le don en Suisse.",
      lectures: "Cinq lectures classées par niveau."
    }
  };

  /* =====================================================================
     MONNAIE ENDOGÈNE
     ===================================================================== */
  const deuxVues = fig(300, (() => {
    let s = `<text x="20" y="24" ${T}>D’où vient la monnaie ? Deux récits</text>`;
    s += `<text x="160" y="52" text-anchor="middle" style="fill:var(--ink); font:700 12.5px Manrope, sans-serif">Le récit des manuels</text>`;
    s += `<text x="480" y="52" text-anchor="middle" style="fill:var(--ink); font:700 12.5px Manrope, sans-serif">La monnaie endogène</text>`;
    s += box(60, 66, 200, 52, "Banque centrale", "fixe les réserves", "var(--ink-soft)");
    s += box(60, 146, 200, 52, "Épargnants", "déposent leur argent", "var(--ink-soft)");
    s += box(60, 226, 200, 52, "La banque prête", "une partie des dépôts", "var(--ink-soft)");
    s += arrow(160, 120, 160, 142) + arrow(160, 200, 160, 222);
    s += box(380, 66, 200, 52, "Un client demande un prêt", "pour un projet jugé solvable", "var(--note)");
    s += box(380, 146, 200, 52, "La banque inscrit un dépôt", "de la monnaie nouvelle naît", "var(--gold)");
    s += box(380, 226, 200, 52, "Banque centrale", "fixe le taux, fournit les réserves", "var(--note)");
    s += arrow(480, 120, 480, 142) + arrow(480, 200, 480, 222);
    s += `<line x1="320" y1="60" x2="320" y2="284" style="stroke:var(--line); stroke-dasharray:4 4"/>`;
    return s;
  })(), "Schéma. Dans le récit des manuels, la monnaie part de la banque centrale et de l’épargne. Pour les post-keynésiens, et selon la Banque d’Angleterre elle-même (2014), c’est le crédit qui crée les dépôts : la banque centrale agit surtout par le prix de l’argent, le taux d’intérêt.", "Schéma comparant deux explications de la création monétaire");

  OEC.notices["monnaie-endogene"] = {
    essentiel: [
      "La monnaie endogène désigne la thèse selon laquelle la monnaie est créée par les banques au moment où elles accordent des crédits, en fonction de la demande des emprunteurs, et non fixée de l’extérieur par la banque centrale.",
      "« Les crédits font les dépôts » : quand une banque prête, elle inscrit la somme sur le compte de l’emprunteur, et de la monnaie nouvelle apparaît. La banque centrale influence ce processus surtout par le taux d’intérêt.",
      "Longtemps défendue par les post-keynésiens contre les monétaristes, cette description a été confirmée par plusieurs banques centrales. Elle éclaire les débats sur l’assouplissement quantitatif, la monnaie pleine et la théorie moderne de la monnaie."
    ],
    sections: [
      { id: "depart", titre: "La question de départ : qui crée la monnaie ?", html: `
<p>Dans beaucoup de manuels, la création monétaire suit un ordre simple. La banque centrale émet des billets et des réserves ; les ménages déposent leur épargne à la banque ; la banque prête une partie de ces dépôts, qui reviennent en partie dans d’autres banques, et ainsi de suite. La quantité de monnaie serait un multiple des réserves fixées par la banque centrale : c’est le « multiplicateur monétaire ». Cette vision soutient la <a href="#c-theorie-quantitative">théorie quantitative</a> de Milton <a href="#eco-friedman">Friedman</a> : la banque centrale contrôle la masse monétaire, donc l’inflation.</p>
<p>Des économistes post-keynésiens, de Nicholas Kaldor à Basil Moore, soutiennent depuis les années 1970 que l’ordre est inversé. Ce n’est pas l’épargne qui permet le crédit, mais le crédit qui crée les dépôts. La monnaie ne tombe pas du ciel de la banque centrale : elle naît « de l’intérieur » de l’économie, quand quelqu’un emprunte. D’où le nom de monnaie endogène.</p>` },
      { id: "raisonnement", titre: "Le raisonnement pas à pas", html: `
<h4>1. Le crédit crée le dépôt</h4>
<p>Quand une banque accorde un prêt de 10 000 francs, elle ne prend pas cet argent dans un coffre. Elle inscrit 10 000 francs sur le compte de l’emprunteur : à son actif, une créance sur l’emprunteur ; à son passif, un dépôt. De la monnaie nouvelle vient d’apparaître.</p>
${deuxVues}
<h4>2. Le remboursement la détruit</h4>
<p>Quand l’emprunteur rembourse, l’opération s’inverse : le dépôt et la créance disparaissent ensemble. La quantité de monnaie dépend donc du rythme des nouveaux crédits et des remboursements.</p>
<h4>3. Les banques ne prêtent pas n’importe quoi</h4>
<p>Le pouvoir de créer de la monnaie n’est pas illimité. Une banque ne prête que si elle juge l’emprunteur solvable et le prêt rentable ; elle doit respecter des règles de fonds propres et de liquidité ; et elle a besoin de réserves auprès de la banque centrale pour régler ses paiements avec les autres banques.</p>
<h4>4. La banque centrale fixe le prix, pas la quantité</h4>
<p>Ces réserves, la banque centrale les fournit à la demande, au taux qu’elle a fixé. C’est donc par ce taux qu’elle agit : un taux élevé rend le crédit plus cher et le freine, un taux bas l’encourage. La quantité de monnaie suit la demande de crédit, elle ne la précède pas (<a href="#c-fonctions-monnaie">voir fonctions de la monnaie</a>).</p>
<h4>5. La monnaie suit l’activité</h4>
<p>Il en découle que la monnaie est souvent une conséquence de l’activité économique, plutôt qu’une cause : les entreprises empruntent quand elles veulent investir ou produire. La relation entre monnaie et prix que pose la théorie quantitative devient moins mécanique.</p>
<h4>6. Et l’État ?</h4>
<p>Les tenants de la théorie moderne de la monnaie, comme Stephanie <a href="#eco-kelton">Kelton</a>, étendent le raisonnement : quand l’État dépense, il crée lui aussi des dépôts sur les comptes des ménages et des entreprises, avant d’en retirer une partie par l’impôt.</p>` },
      { id: "preuves", titre: "Ce que disent les faits", html: `
<h4>La Banque d’Angleterre en 2014</h4>
<p>En 2014, la Banque d’Angleterre publie dans son bulletin trimestriel un article intitulé « La création monétaire dans l’économie moderne ». Il explique que la plupart de la monnaie est créée par les banques commerciales lorsqu’elles accordent des prêts, et que le multiplicateur des manuels ne décrit pas le fonctionnement réel. D’autres banques centrales, dont la Bundesbank en 2017, publient des explications semblables.</p>
<h4>L’assouplissement quantitatif</h4>
<p>Après 2008, les grandes banques centrales créent des quantités énormes de réserves en achetant des titres. Selon le multiplicateur, la masse monétaire et l’inflation auraient dû exploser. Elles progressent en réalité modérément pendant des années : les banques ne prêtent pas davantage parce qu’elles ont plus de réserves, mais quand des emprunteurs solvables demandent du crédit.</p>
<h4>Ce qui reste vrai de l’autre vision</h4>
<p>Les faits ne donnent pas entièrement tort aux monétaristes. Sur longue période, les pays où la monnaie croît très vite connaissent une forte inflation. Et quand une banque centrale finance directement un État sans limite, comme dans les hyperinflations, la monnaie devient bien la cause de la hausse des prix.</p>` }
    ],
    cas: [
      { titre: "L’initiative « Monnaie pleine », 2018", html: `
<p>En juin 2018, les Suisses votent sur une initiative qui veut retirer aux banques commerciales le pouvoir de créer de la monnaie scripturale : seule la BNS pourrait le faire. Ses partisans partent précisément du constat de la monnaie endogène, et y voient la cause des bulles de crédit. La BNS et le Conseil fédéral s’y opposent, jugeant le système trop risqué et sans précédent. L’initiative est rejetée par environ 76 % des votants.</p>` },
      { titre: "Le prêt hypothécaire", html: `
<p>Une famille achète un appartement de un million de francs avec 200 000 francs de fonds propres. La banque lui accorde un prêt hypothécaire de 800 000 francs, qu’elle inscrit sur son compte et qui est aussitôt versé au vendeur. Le vendeur dispose désormais d’un dépôt de 800 000 francs qui n’existait pas la veille. En Suisse, où les prêts hypothécaires dépassent largement le revenu national, c’est l’un des principaux canaux de création monétaire.</p>` },
      { titre: "Northern Rock, 2007", html: `
<p>La banque britannique Northern Rock prêtait massivement pour l’immobilier, en se finançant sur les marchés. Quand ce financement se tarit en 2007, les déposants se précipitent aux guichets : c’est la première panique bancaire au Royaume-Uni depuis plus d’un siècle. L’épisode rappelle que la monnaie créée par le crédit repose sur la confiance dans la solvabilité des banques (<a href="#c-preteur-dernier-ressort">voir prêteur en dernier ressort</a>).</p>` }
    ],
    objections: `
<h4>1. Les banques restent contraintes</h4>
<p>Des économistes rappellent que les banques ne créent pas de la monnaie « à partir de rien » sans limite : elles sont tenues par leurs fonds propres, par la réglementation et par la concurrence. Le débat porte sur la nature de ces contraintes plus que sur leur existence.</p>
<h4>2. La banque centrale garde la main</h4>
<p>En fixant ses taux et en régulant les banques, la banque centrale influence fortement la quantité de crédit. Pour ses critiques, dire qu’elle ne contrôle pas la monnaie exagère : elle la contrôle autrement, par le prix.</p>
<h4>3. Un débat parfois de vocabulaire</h4>
<p>Une partie des économistes du courant dominant estime que les modèles modernes, qui raisonnent sur le taux d’intérêt plutôt que sur la masse monétaire, ont déjà intégré l’essentiel de cette critique. Les post-keynésiens répondent que ces modèles ont longtemps ignoré les banques et le crédit, ce qui les a empêchés de voir venir la crise de 2008.</p>`,
    ecoles: `
<p><b>Knut Wicksell</b> et <b>Joseph <a href="#eco-schumpeter">Schumpeter</a></b> décrivent dès le début du XXe siècle des banques qui créent du pouvoir d’achat.</p>
<p><b>John Maynard <a href="#eco-keynes">Keynes</a></b> analyse le crédit et la monnaie dans le Traité sur la monnaie (1930).</p>
<p><b>Nicholas Kaldor</b> et <b>Basil Moore</b> formalisent la monnaie endogène contre le monétarisme.</p>
<p><b>Hyman <a href="#eco-minsky">Minsky</a></b> en tire une théorie de l’instabilité financière.</p>
<p><b>Stephanie <a href="#eco-kelton">Kelton</a></b> et la théorie moderne de la monnaie l’étendent à la dépense publique.</p>
<p><b>Milton <a href="#eco-friedman">Friedman</a></b> et les monétaristes défendent la vision opposée.</p>`,
    source: {
      titre: "Banque d’Angleterre, « Money creation in the modern economy », Quarterly Bulletin, 2014",
      texte: "Chaque fois qu’une banque accorde un prêt, elle crée simultanément un dépôt correspondant sur le compte de l’emprunteur, créant ainsi de la monnaie nouvelle.",
      notes: `
<p><b>Une banque centrale qui corrige les manuels.</b> L’article, écrit par trois économistes de la Banque d’Angleterre, explique que la description courante de la création monétaire est trompeuse. C’est rare de la part d’une institution aussi prudente.</p>
<p><b>Ce qu’il ajoute.</b> Les banques ne peuvent pas prêter sans limite : elles sont tenues par leur rentabilité, par la réglementation et par la politique de taux de la banque centrale.</p>
<p><b>Sa réception.</b> L’article est devenu une référence pour les post-keynésiens, les partisans de la monnaie pleine et ceux de la théorie moderne de la monnaie, qui en tirent pourtant des conclusions très différentes.</p>`
    },
    quiz: [
      { q: "Que signifie la formule « les crédits font les dépôts » ?",
        o: ["Que les banques prêtent l’épargne déposée", "Qu’en accordant un prêt, la banque crée un dépôt, donc de la monnaie nouvelle", "Que les dépôts sont garantis", "Que chaque crédit doit être garanti par un dépôt de même montant"], c: 1,
        e: "La banque inscrit la somme prêtée sur le compte de l’emprunteur." },
      { q: "Que devient la monnaie quand un prêt est remboursé ?",
        o: ["Elle reste en circulation", "Elle est détruite, en même temps que la créance", "Elle va à la banque centrale", "Elle est transférée sur le compte d’épargne de l’emprunteur"], c: 1,
        e: "Le remboursement inverse l’opération de création." },
      { q: "Comment la banque centrale agit-elle surtout selon la thèse de la monnaie endogène ?",
        o: ["En fixant la quantité exacte de monnaie", "En fixant le taux d’intérêt auquel elle fournit les réserves", "En imprimant des billets", "En fixant le montant maximal de chaque prêt"], c: 1,
        e: "Elle fixe le prix de l’argent ; la quantité suit la demande de crédit." },
      { q: "Pourquoi l’assouplissement quantitatif après 2008 n’a-t-il pas fait exploser la masse monétaire ?",
        o: ["Parce que les réserves ont été détruites", "Parce que les banques prêtent selon la demande d’emprunteurs solvables, pas selon leurs réserves", "Parce que les taux étaient très élevés", "Parce que les banques ont prêté toutes leurs réserves à l’étranger"], c: 1,
        e: "Le multiplicateur des manuels ne s’est pas vérifié." },
      { q: "Sur quoi portait l’initiative « Monnaie pleine » de 2018 ?",
        o: ["Supprimer le franc", "Réserver à la BNS la création de monnaie scripturale", "Interdire les prêts hypothécaires", "Supprimer l’argent liquide"], c: 1,
        e: "Elle a été rejetée par environ 76 % des votants." }
    ],
    ouverte: {
      q: "Si les banques créent l’essentiel de la monnaie en accordant des prêts hypothécaires, faut-il mieux encadrer le crédit immobilier en Suisse ?",
      r: "La thèse de la monnaie endogène éclaire bien la situation suisse. Les prêts hypothécaires y sont très élevés par rapport au revenu national, et ils créent une grande partie de la monnaie. Quand le crédit immobilier progresse vite, la monnaie et les prix des logements montent ensemble, ce qui peut nourrir une bulle (<a href=\"#c-instabilite-financiere\">voir instabilité financière</a>). La Suisse dispose déjà d’outils : les règles de fonds propres exigées des acheteurs, le calcul de la capacité financière avec un taux théorique élevé, et le volant anticyclique de fonds propres, que le Conseil fédéral peut activer sur proposition de la BNS, activé en 2013, suspendu en 2020 pendant la pandémie, puis réactivé en 2022. Les partisans d’un encadrement plus strict y voient une manière de prévenir les crises. D’autres soulignent que ces règles rendent l’accès à la propriété plus difficile pour les jeunes ménages, dans un pays où la majorité de la population est locataire. Le débat porte sur l’équilibre entre stabilité financière et accès au logement."
    },
    lectures: [
      ["Accessible", "Banque d’Angleterre, « Money creation in the modern economy », Quarterly Bulletin, 2014."],
      ["Accessible", "BNS, pages pédagogiques « La monnaie et la politique monétaire », en ligne."],
      ["Intermédiaire", "Nicholas Kaldor, The Scourge of Monetarism, 1982."],
      ["Intermédiaire", "Michel Aglietta, La Monnaie entre dettes et souveraineté, 2016."],
      ["Recherche", "Basil Moore, Horizontalists and Verticalists: The Macroeconomics of Credit Money, 1988."]
    ],
    decouvrir: {
      duree: 5,
      html: `
<h3>D’où vient l’argent sur votre compte ?</h3>
<p>On imagine souvent que la banque prête l’argent que d’autres clients ont déposé. En réalité, quand une banque accorde un prêt, elle inscrit simplement la somme sur le compte de l’emprunteur. De l’argent nouveau vient d’apparaître : c’est ce qu’on appelle la monnaie endogène, créée de l’intérieur de l’économie.</p>
${deuxVues}
<h3>Pas sans limites</h3>
<p>Les banques ne prêtent qu’aux clients qu’elles jugent solvables, et doivent respecter des règles. La banque centrale, elle, agit surtout par le taux d’intérêt : plus il est élevé, plus le crédit est cher, et moins on emprunte.</p>
<h3>Un débat suisse</h3>
<p>En 2018, une initiative proposait de réserver la création de monnaie à la BNS. Les votants l’ont rejetée à environ 76 %, mais le débat a fait connaître ce mécanisme méconnu.</p>
<h3>À retenir</h3>
<p>La monnaie naît surtout du crédit, et disparaît quand on rembourse. La notice complète présente le raisonnement, les preuves et le débat avec les monétaristes.</p>`,
      quiz: [0, 4]
    },
    resumes: {
      depart: "Qui crée la monnaie ? Le multiplicateur des manuels contre la monnaie endogène.",
      raisonnement: "Six étapes, du crédit qui crée le dépôt à la dépense publique.",
      preuves: "La Banque d’Angleterre en 2014, l’assouplissement quantitatif, ce qui reste du monétarisme.",
      cas: "Monnaie pleine en 2018, le prêt hypothécaire, Northern Rock.",
      objections: "Des banques contraintes, une banque centrale qui garde la main, un débat de vocabulaire.",
      ecoles: "Wicksell et Schumpeter, Keynes, Kaldor et Moore, Minsky, Kelton, Friedman.",
      source: "Chaque prêt crée un dépôt.",
      quiz: "Cinq questions corrigées et une question sur le crédit immobilier en Suisse.",
      lectures: "Cinq lectures classées par niveau."
    }
  };
})();
