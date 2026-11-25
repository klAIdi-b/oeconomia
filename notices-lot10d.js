/* Œconomia — notices longues, lot 10 (d) : taux de change */
(function () {
  const T = 'style="fill:var(--ink); font:600 13px Manrope, sans-serif"';
  const S = 'style="fill:var(--ink-soft); font:500 11.5px Manrope, sans-serif"';
  const fig = (h, body, caption, label) => `<figure class="schema"><svg viewBox="0 0 640 ${h}" role="img" aria-label="${label}">${body}</svg><figcaption>${caption}</figcaption></figure>`;
  const arrow = (x1, y1, x2, y2, col = "var(--ink-soft)") => {
    const a = Math.atan2(y2 - y1, x2 - x1), h = 8;
    return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" style="stroke:${col}; stroke-width:1.8"/><polygon points="${x2},${y2} ${x2 - h * Math.cos(a - 0.4)},${y2 - h * Math.sin(a - 0.4)} ${x2 - h * Math.cos(a + 0.4)},${y2 - h * Math.sin(a + 0.4)}" style="fill:${col}"/>`;
  };
  const dash = (x1, y1, x2, y2) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" style="stroke:var(--ink-soft); stroke-width:1; stroke-dasharray:4 3"/>`;

  /* =====================================================================
     TAUX DE CHANGE
     ===================================================================== */
  /* le marché du franc : une hausse de la demande */
  const marche = fig(310, (() => {
    let s = `<text x="20" y="22" ${T}>Le marché du franc en temps de crise</text>`;
    s += `<line x1="90" y1="260" x2="90" y2="44" style="stroke:var(--ink); stroke-width:1.5"/><line x1="90" y1="260" x2="560" y2="260" style="stroke:var(--ink); stroke-width:1.5"/>`;
    s += `<text x="98" y="54" ${S}>prix du franc (en euros)</text><text x="560" y="276" text-anchor="end" ${S}>francs échangés</text>`;
    s += `<line x1="130" y1="240" x2="470" y2="70" style="stroke:var(--gold); stroke-width:3"/><text x="476" y="68" ${S}>offre de francs</text>`;
    s += `<line x1="130" y1="90" x2="400" y2="240" style="stroke:var(--note); stroke-width:3"/><text x="404" y="252" ${S}>demande</text>`;
    s += `<line x1="230" y1="70" x2="500" y2="220" style="stroke:var(--plum); stroke-width:3"/><text x="504" y="224" ${S}>demande en crise</text>`;
    /* intersections : D1 avec O en (≈273,168), D2 avec O en (≈340,135) */
    s += dash(90, 168, 273, 168) + dash(90, 133, 344, 133);
    s += `<circle cx="273" cy="168" r="5" style="fill:var(--ink)"/><circle cx="344" cy="133" r="5" style="fill:var(--ink)"/>`;
    s += `<text x="82" y="172" text-anchor="end" ${S}>avant</text><text x="82" y="137" text-anchor="end" ${S}>après</text>`;
    s += arrow(300, 205, 380, 205, "var(--plum)");
    s += `<text x="320" y="290" text-anchor="middle" ${S}>Les investisseurs veulent des francs : la demande se déplace, le franc s’apprécie.</text>`;
    return s;
  })(), "Schéma. Le taux de change est le prix d’une monnaie exprimé dans une autre. Il se forme, comme les autres prix, par la rencontre d’une offre et d’une demande. Quand les investisseurs cherchent un abri, la demande de francs augmente et son prix monte : il faut moins de francs pour obtenir un euro.", "Schéma du marché du franc : la demande se déplace vers la droite et le prix du franc augmente");

  /* le triangle d’incompatibilité */
  const triangle = fig(330, (() => {
    let s = `<text x="20" y="22" ${T}>Le triangle d’incompatibilité : on ne peut avoir que deux des trois</text>`;
    const A = [320, 62], B = [120, 240], C = [520, 240];
    s += `<polygon points="${A} ${B} ${C}" style="fill:none; stroke:var(--line); stroke-width:2"/>`;
    const sommet = (p, t, dy, anchor = "middle") => `<circle cx="${p[0]}" cy="${p[1]}" r="7" style="fill:var(--gold)"/><text x="${p[0]}" y="${p[1] + dy}" text-anchor="${anchor}" style="fill:var(--ink); font:700 12px Manrope, sans-serif">${t}</text>`;
    s += sommet(A, "Taux de change fixe", -14);
    s += sommet(B, "Capitaux libres", 24);
    s += sommet(C, "Politique monétaire autonome", 24);
    s += `<text x="172" y="146" text-anchor="end" ${S}>change fixe et</text><text x="172" y="162" text-anchor="end" ${S}>capitaux libres :</text><text x="172" y="178" text-anchor="end" ${S}>Danemark, Hong Kong</text>`;
    s += `<text x="470" y="146" ${S}>change fixe et</text><text x="470" y="162" ${S}>politique autonome :</text><text x="470" y="178" ${S}>Bretton Woods, avec</text><text x="470" y="194" ${S}>contrôle des capitaux</text>`;
    s += `<text x="320" y="300" text-anchor="middle" ${S}>capitaux libres et politique autonome :</text><text x="320" y="316" text-anchor="middle" ${S}>change flottant (Suisse, États-Unis)</text>`;
    return s;
  })(), "D’après Robert Mundell et Marcus Fleming (années 1960). Un pays qui laisse circuler les capitaux et veut fixer son taux de change doit aligner ses taux d’intérêt sur ceux de l’étranger : il renonce à sa propre politique monétaire.", "Triangle dont les sommets sont le change fixe, les capitaux libres et la politique monétaire autonome");

  OEC.notices["taux-de-change"] = {
    essentiel: [
      "Le taux de change est le prix d’une monnaie exprimé dans une autre : par exemple, le nombre de francs qu’il faut pour obtenir un euro. Il se forme sur le marché des changes, selon l’offre et la demande de chaque monnaie.",
      "Une monnaie s’apprécie quand elle gagne de la valeur : les importations deviennent moins chères, mais les exportations plus chères pour les clients étrangers. Elle se déprécie dans le cas inverse. Le franc, valeur refuge, a tendance à s’apprécier lors des crises.",
      "À long terme, les taux de change tendent à refléter les écarts d’inflation entre pays (parité des pouvoirs d’achat). À court terme, ils dépendent surtout des taux d’intérêt, des anticipations et de la confiance. Chaque pays doit choisir entre un change fixe, des capitaux libres et une politique monétaire autonome : il ne peut avoir que deux des trois."
    ],
    sections: [
      { id: "depart", titre: "La question de départ : pourquoi le franc vaut-il plus qu’avant ?", html: `
<p>En 2000, un euro valait environ 1,55 franc. Depuis 2022, il en vaut moins d’un. Pour un touriste suisse en Italie, c’est une bonne nouvelle : ses vacances coûtent moins cher. Pour une entreprise horlogère qui vend en euros, c’est un défi : chaque montre rapporte moins de francs. Pourquoi la valeur d’une monnaie change-t-elle ainsi, et qui la fixe ?</p>
<p>Pendant longtemps, les monnaies étaient rattachées à l’or ou entre elles. Après 1945, le système de Bretton Woods fixe le cours des grandes monnaies par rapport au dollar, lui-même convertible en or. Ce système s’effondre au début des années 1970 : les États-Unis suspendent la convertibilité du dollar en août 1971, et la Suisse laisse flotter le franc en janvier 1973. Depuis, la valeur du franc se forme chaque jour sur le marché des changes.</p>` },
      { id: "raisonnement", titre: "Le raisonnement pas à pas", html: `
<h4>1. Un prix comme un autre</h4>
<p>Sur le marché des changes, on achète et on vend des monnaies. Ceux qui veulent des francs (touristes étrangers, entreprises qui achètent des produits suisses, investisseurs qui placent leur argent en Suisse) forment la demande. Ceux qui vendent des francs pour obtenir d’autres monnaies forment l’offre. Le taux de change équilibre les deux (<a href="#c-offre-demande">voir offre et demande</a>).</p>
${marche}
<h4>2. Lire un taux de change</h4>
<p>On peut l’exprimer dans les deux sens : 1 euro = 0,94 franc, ou 1 franc = 1,06 euro. Quand il faut moins de francs pour un euro, le franc s’est <b>apprécié</b> ; l’euro s’est <b>déprécié</b>. Il faut toujours vérifier dans quel sens le taux est donné.</p>
<h4>3. Les effets sur le commerce</h4>
<p>Un franc plus fort rend les produits importés moins chers pour les Suisses, ce qui freine l’inflation. Mais il rend les produits suisses plus chers à l’étranger : à prix inchangé en francs, une montre de 6500 francs coûte plus d’euros. Les exportateurs doivent alors baisser leurs marges, gagner en productivité ou miser sur la qualité.</p>
<h4>4. Le long terme : la parité des pouvoirs d’achat</h4>
<p>En 1916, l’économiste suédois Gustav Cassel propose une idée simple : à long terme, une même somme devrait acheter la même chose dans tous les pays. Si les prix montent de 3 % par an dans la zone euro et de 1 % en Suisse, l’euro devrait perdre environ 2 % par an face au franc. C’est en grande partie ce qui explique l’appréciation du franc sur plusieurs décennies : l’inflation a presque toujours été plus faible en Suisse.</p>
<h4>5. Le court terme : taux d’intérêt et confiance</h4>
<p>Au jour le jour, les échanges de devises liés aux placements financiers dépassent de loin ceux liés au commerce. Une hausse des taux d’intérêt dans un pays attire les capitaux et fait monter sa monnaie. La confiance compte aussi : en temps de crise, les investisseurs se réfugient dans les monnaies jugées sûres, comme le franc, le dollar ou le yen.</p>
<h4>6. Fixe ou flottant ?</h4>
<p>Un pays peut laisser flotter sa monnaie ou la rattacher à une autre. Le change fixe apporte de la stabilité aux entreprises, mais il a un prix. Robert Mundell et Marcus Fleming montrent dans les années 1960 qu’un pays ne peut pas avoir à la fois un change fixe, des capitaux libres et une politique monétaire autonome : c’est le triangle d’incompatibilité.</p>
${triangle}
<h4>7. Quand la banque centrale intervient</h4>
<p>Une banque centrale peut acheter ou vendre des devises pour influencer le cours de sa monnaie. La BNS l’a fait massivement pour freiner la hausse du franc (<a href="#c-politique-monetaire">voir politique monétaire</a>). Pour freiner une appréciation, elle crée des francs et achète des devises : elle peut le faire sans limite. Pour freiner une dépréciation, elle doit vendre ses réserves de devises, qui, elles, sont limitées.</p>
<p class="ex-revoir">Fiche méthode : <a href="#methode-variation">Calculer un taux de variation</a></p>` },
      { id: "preuves", titre: "Ce que disent les faits", html: `
<h4>L’indice Big Mac</h4>
<p>Depuis 1986, l’hebdomadaire The Economist compare le prix d’un Big Mac dans le monde entier. Si la parité des pouvoirs d’achat était vérifiée, il coûterait partout la même chose une fois converti. Ce n’est pas le cas : la Suisse figure régulièrement parmi les pays où il est le plus cher. Les salaires, les loyers et les prix des services y sont plus élevés, et ils ne s’échangent pas entre pays.</p>
<h4>Une parité très lente</h4>
<p>Les études montrent que la parité des pouvoirs d’achat se vérifie à long terme, mais très lentement. Selon une revue de Kenneth Rogoff (1996), il faut en moyenne trois à cinq ans pour que la moitié d’un écart à la parité disparaisse. À court terme, les taux de change sont presque imprévisibles.</p>
<h4>Le mercredi noir de 1992</h4>
<p>En septembre 1992, la livre sterling est rattachée aux monnaies européennes, alors que l’économie britannique aurait besoin de taux plus bas. Des spéculateurs, dont George Soros, parient massivement sur sa baisse. Malgré des hausses de taux et des ventes de réserves, la Banque d’Angleterre doit abandonner le rattachement le 16 septembre. L’épisode illustre le triangle d’incompatibilité : avec des capitaux libres, un change fixe incompatible avec les besoins du pays devient intenable.</p>` }
    ],
    cas: [
      { titre: "Le 15 janvier 2015", html: `
<p>Depuis septembre 2011, la BNS défend un cours plancher de 1,20 franc pour un euro en achetant des devises. Le 15 janvier 2015, elle annonce son abandon, sans avertissement. En quelques minutes, l’euro chute brièvement sous 0,90 franc, avant de se stabiliser autour de la parité. Les exportateurs et les hôteliers voient leurs prix augmenter d’un coup de plus de 10 % pour leurs clients européens. Beaucoup réduisent leurs marges, déplacent une partie de leurs achats à l’étranger ou gèlent les salaires.</p>` },
      { titre: "Le tourisme d’achat", html: `
<p>Quand le franc s’apprécie, faire ses courses en France, en Allemagne ou en Italie devient plus avantageux. Près des frontières, à Genève, Bâle, Constance ou au Tessin, de nombreux ménages traversent la frontière chaque semaine. Le commerce de détail suisse estime que ces achats à l’étranger représentent plusieurs milliards de francs par an. Le taux de change touche ainsi directement les commerces de proximité (<a href="#c-elasticite">voir élasticité</a>).</p>` },
      { titre: "La Suisse « manipulatrice » ?", html: `
<p>En décembre 2020, le Trésor américain qualifie la Suisse de « manipulateur de devises », en raison des achats massifs de devises de la BNS et de l’excédent commercial suisse avec les États-Unis. La BNS répond qu’elle n’intervient pas pour avantager ses exportateurs, mais pour éviter une appréciation excessive du franc qui ferait baisser les prix et menacerait l’économie. L’épisode montre qu’une politique de change, même justifiée par des objectifs internes, peut être perçue à l’étranger comme une arme commerciale.</p>` }
    ],
    objections: `
<h4>1. Des marchés trop volatils ?</h4>
<p>Les partisans du change flottant pensaient que les monnaies évolueraient doucement selon les écarts d’inflation. Elles fluctuent en réalité beaucoup plus. Rudiger Dornbusch montre en 1976 qu’un taux de change peut réagir de manière excessive à un changement de politique monétaire, avant de revenir progressivement. Pour certains économistes, cette volatilité justifie des interventions ou des limites aux mouvements de capitaux.</p>
<h4>2. Fixer ou flotter : aucun choix n’est parfait</h4>
<p>Le change fixe protège le commerce des variations de cours, mais il prive le pays de sa politique monétaire et l’expose aux attaques spéculatives. Le change flottant laisse la banque centrale libre, mais il expose les entreprises aux variations. L’euro a supprimé le risque de change entre ses membres, mais des pays comme la Grèce ont perdu la possibilité de dévaluer pour retrouver leur compétitivité.</p>
<h4>3. La guerre des monnaies</h4>
<p>Une monnaie faible avantage les exportateurs. Des gouvernements sont accusés de maintenir leur monnaie artificiellement basse pour gagner des parts de marché, au détriment de leurs partenaires. Mais il est souvent difficile de distinguer une politique monétaire légitime d’une manipulation : les mêmes instruments servent aux deux.</p>`,
    ecoles: `
<p><b>David <a href="#eco-ricardo">Ricardo</a></b> et <b>David Hume</b> décrivent les ajustements automatiques entre monnaie, prix et commerce sous l’étalon-or.</p>
<p><b>Gustav Cassel</b> formule la parité des pouvoirs d’achat après la Première Guerre mondiale.</p>
<p><b>John Maynard <a href="#eco-keynes">Keynes</a></b> participe à la conception du système de Bretton Woods en 1944.</p>
<p><b>Milton <a href="#eco-friedman">Friedman</a></b> défend dès 1953 le change flottant.</p>
<p><b>Robert Mundell</b> et <b>Marcus Fleming</b> formulent le triangle d’incompatibilité ; Mundell pose aussi les bases de la théorie des zones monétaires optimales.</p>
<p><b>Rudiger Dornbusch</b> explique la volatilité excessive des taux de change ; Paul <a href="#eco-krugman">Krugman</a> modélise les crises de change.</p>`,
    source: {
      titre: "Gustav Cassel, Money and Foreign Exchange after 1914, 1922",
      texte: "Si nous sommes prêts à payer un certain prix pour une monnaie étrangère, c’est en dernière analyse parce que cette monnaie a un pouvoir d’achat en marchandises et en services dans ce pays étranger.",
      notes: `
<p><b>Le contexte.</b> Après la Première Guerre mondiale, les monnaies européennes ne sont plus rattachées à l’or et l’inflation diffère fortement d’un pays à l’autre. Cassel cherche un repère pour fixer de nouveaux taux de change.</p>
<p><b>L’idée.</b> Une monnaie vaut ce qu’elle permet d’acheter. Si les prix doublent dans un pays, sa monnaie devrait perdre la moitié de sa valeur face aux autres.</p>
<p><b>Sa portée.</b> La parité des pouvoirs d’achat sert encore à comparer les niveaux de vie entre pays et à juger si une monnaie est surévaluée. Mais elle décrit une tendance de long terme, pas les variations quotidiennes.</p>`
    },
    quiz: [
      { q: "Le taux passe de 1 euro = 1,10 franc à 1 euro = 0,95 franc. Que s’est-il passé ?",
        o: ["Le franc s’est déprécié", "Le franc s’est apprécié", "L’euro s’est apprécié", "Les deux monnaies se sont dépréciées"], c: 1,
        e: "Il faut moins de francs pour un euro : le franc vaut plus." },
      { q: "Quel est l’effet d’un franc fort sur les exportateurs suisses ?",
        o: ["Leurs produits deviennent moins chers à l’étranger", "Leurs produits deviennent plus chers pour les clients étrangers", "Leurs ventes à l’étranger augmentent", "Leurs matières premières importées deviennent plus chères"], c: 1,
        e: "À prix inchangé en francs, il faut plus d’euros pour les acheter." },
      { q: "Selon la parité des pouvoirs d’achat, que devient à long terme la monnaie d’un pays à forte inflation ?",
        o: ["Elle s’apprécie", "Elle se déprécie", "Elle reste stable", "Elle dépend seulement des taux d’intérêt"], c: 1,
        e: "Elle perd de la valeur à peu près au rythme de l’écart d’inflation." },
      { q: "Selon le triangle d’incompatibilité, que doit sacrifier un pays qui veut un change fixe et des capitaux libres ?",
        o: ["Son commerce extérieur", "Sa politique monétaire autonome", "Sa monnaie nationale", "La libre circulation des marchandises"], c: 1,
        e: "Ses taux d’intérêt doivent suivre ceux du pays auquel il est rattaché." },
      { q: "Pourquoi le franc s’apprécie-t-il souvent pendant les crises ?",
        o: ["Parce que l’inflation suisse augmente pendant les crises", "Parce que les investisseurs le jugent sûr et en achètent", "Parce que les touristes viennent plus nombreux", "Parce que les taux suisses sont très élevés"], c: 1,
        e: "Stabilité politique, faible inflation et finances solides en font une valeur refuge." }
    ],
    ouverte: {
      q: "Un franc fort est-il plutôt une chance ou un problème pour la Suisse ?",
      r: "Le franc fort a des gagnants et des perdants. Il profite aux consommateurs, qui paient moins cher les produits importés, l’énergie et les voyages, et il aide à garder une inflation faible : en 2022, l’inflation suisse est restée bien en dessous de celle de la zone euro. Il reflète aussi la confiance dans le pays et pousse les entreprises à gagner en productivité. Mais il pèse sur l’industrie d’exportation, le tourisme et le commerce de détail près des frontières, qui perdent des clients ou doivent réduire leurs marges. Des emplois industriels peuvent être déplacés à l’étranger. La BNS a longtemps cherché un équilibre en intervenant sur le marché des changes, au prix d’un bilan très exposé aux marchés et de critiques venues des États-Unis. La réponse dépend du point de vue : celui du consommateur, du salarié de l’industrie, de l’épargnant ou du touriste, et du rythme auquel le franc s’apprécie, plus difficile à absorber quand il est brutal."
    },
    lectures: [
      ["Accessible", "Banque nationale suisse, « La BNS en bref » et le matériel pédagogique Iconomix sur le taux de change."],
      ["Accessible", "The Economist, « The Big Mac index », mis à jour deux fois par an, en ligne."],
      ["Intermédiaire", "Paul Krugman, Maurice Obstfeld et Marc Melitz, Économie internationale, Pearson."],
      ["Intermédiaire", "Barry Eichengreen, L’Expansion du capital : une histoire du système monétaire international, L’Harmattan, 1997."],
      ["Recherche", "Kenneth Rogoff, « The Purchasing Power Parity Puzzle », Journal of Economic Literature, 1996."],
      ["Recherche", "Rudiger Dornbusch, « Expectations and Exchange Rate Dynamics », Journal of Political Economy, 1976."]
    ],
    decouvrir: {
      duree: 5,
      html: `
<h3>Combien vaut un franc ?</h3>
<p>Le taux de change est le prix d’une monnaie dans une autre : par exemple, combien de francs il faut pour un euro. En 2000, un euro valait environ 1,55 franc ; aujourd’hui, moins d’un franc. Le franc s’est fortement apprécié.</p>
${marche}
<h3>Pourquoi c’est important</h3>
<p>Quand le franc s’apprécie, les vacances à l’étranger et les produits importés coûtent moins cher. Mais les montres, les machines ou les nuitées d’hôtel suisses deviennent plus chères pour les étrangers. Le 15 janvier 2015, quand la BNS a abandonné le cours plancher de 1,20 franc pour un euro, les exportateurs ont vu leurs prix augmenter de plus de 10 % en un jour pour leurs clients européens.</p>
<h3>À retenir</h3>
<p>Le taux de change dépend à long terme des écarts d’inflation, et à court terme des taux d’intérêt et de la confiance. La notice complète présente la parité des pouvoirs d’achat, le triangle d’incompatibilité et le débat sur les interventions.</p>`,
      quiz: [0, 1]
    },
    resumes: {
      depart: "Pourquoi le franc vaut-il plus qu’avant ? De Bretton Woods au change flottant.",
      raisonnement: "Sept étapes, du marché des changes aux interventions de la banque centrale.",
      preuves: "L’indice Big Mac, une parité très lente, le mercredi noir de 1992.",
      cas: "Le 15 janvier 2015, le tourisme d’achat, la Suisse accusée de manipulation.",
      objections: "Des marchés trop volatils, fixer ou flotter, la guerre des monnaies.",
      ecoles: "Hume et Ricardo, Cassel, Keynes, Friedman, Mundell et Fleming, Dornbusch et Krugman.",
      source: "Une monnaie vaut ce qu’elle permet d’acheter.",
      quiz: "Cinq questions corrigées et une question sur le franc fort.",
      lectures: "Six lectures classées par niveau."
    }
  };
})();
