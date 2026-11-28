/* Œconomia — portraits longs, lot 9 (a) : Joseph Stiglitz, Mariana Mazzucato */
(function () {
  const { T, S, M, fig, arrow, lifeline } = OEC.pfx;
  const LABELS = { cas: "Épisodes marquants", objections: "Critiques et adversaires", ecoles: "Héritiers et postérité" };
  const node = (x, y, w, h, t, sub, c) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" style="fill:var(--card); stroke:${c}; stroke-width:2"/><text x="${x + w / 2}" y="${y + h / 2 - 3}" text-anchor="middle" style="fill:var(--ink); font:700 12px Manrope, sans-serif">${t}</text><text x="${x + w / 2}" y="${y + h / 2 + 15}" text-anchor="middle" ${S}>${sub}</text>`;

  /* =====================================================================
     JOSEPH STIGLITZ
     ===================================================================== */
  const vieStiglitz = lifeline(1943, 2026, [
    [1943, "naissance à Gary", true], [1967, "doctorat au MIT", false], [1979, "médaille Clark", true], [1981, "rationnement du crédit", false],
    [1995, "conseiller de Clinton", true], [1997, "Banque mondiale", false], [2001, "prix Nobel", true], [2002, "La Grande Désillusion", false], [2012, "Le Prix de l’inégalité", true]
  ], "Joseph Stiglitz, né en 1943", "Théoricien de l’information imparfaite, conseiller à la Maison-Blanche, économiste en chef de la Banque mondiale puis critique de la mondialisation : Stiglitz a mené de front la recherche la plus abstraite et le débat public.");

  const asym = fig(300, (() => {
    let s = `<text x="20" y="24" ${T}>Quand l’un en sait plus que l’autre</text>`;
    s += node(30, 50, 180, 58, "L’emprunteur", "connaît son projet", "var(--note)");
    s += node(430, 50, 180, 58, "La banque", "ne voit pas le risque", "var(--ink-soft)");
    s += node(30, 136, 180, 58, "L’assuré", "connaît sa prudence", "var(--note)");
    s += node(430, 136, 180, 58, "L’assureur", "ne voit que la moyenne", "var(--ink-soft)");
    s += node(30, 222, 180, 58, "Le salarié", "connaît son effort", "var(--note)");
    s += node(430, 222, 180, 58, "L’employeur", "ne peut pas tout surveiller", "var(--ink-soft)");
    [79, 165, 251].forEach((y) => { s += arrow(214, y, 426, y, "var(--gold)"); });
    s += `<text x="320" y="70" text-anchor="middle" ${S}>crédit rationné</text><text x="320" y="156" text-anchor="middle" ${S}>contrats pour trier</text><text x="320" y="242" text-anchor="middle" ${S}>salaires plus élevés, chômage</text>`;
    return s;
  })(), "Trois marchés étudiés par Stiglitz et ses coauteurs entre 1976 et 1984. Dans chacun, celui qui est mal informé se protège : la banque refuse des prêts, l’assureur propose plusieurs contrats, l’employeur paie davantage pour motiver. Le marché ne s’équilibre plus par le seul prix.", "Schéma de trois marchés où l’information est asymétrique");

  const credit = fig(300, (() => {
    let s = `<text x="20" y="24" ${T}>Pourquoi la banque ne relève pas son taux</text>`;
    s += `<line x1="70" y1="250" x2="600" y2="250" style="stroke:var(--ink-soft); stroke-width:1.5"/><line x1="70" y1="250" x2="70" y2="50" style="stroke:var(--ink-soft); stroke-width:1.5"/>`;
    s += `<text x="600" y="272" text-anchor="end" ${S}>taux d’intérêt demandé</text><text x="78" y="52" ${S}>gain attendu par la banque</text>`;
    s += `<path d="M70,240 C200,150 280,80 340,80 C420,80 500,150 590,230" style="fill:none; stroke:var(--gold); stroke-width:3"/>`;
    s += `<line x1="340" y1="80" x2="340" y2="250" style="stroke:var(--line); stroke-dasharray:4 4"/><circle cx="340" cy="80" r="6" style="fill:var(--gold)"/>`;
    s += `<text x="340" y="268" text-anchor="middle" style="fill:var(--ink); font:700 12px Manrope, sans-serif">taux choisi</text>`;
    s += `<text x="180" y="120" text-anchor="middle" ${S}>les intérêts</text><text x="180" y="136" text-anchor="middle" ${S}>rapportent plus</text>`;
    s += `<text x="500" y="110" text-anchor="middle" ${S}>les prudents renoncent,</text><text x="500" y="126" text-anchor="middle" ${S}>il reste les plus risqués</text>`;
    return s;
  })(), "D’après Stiglitz et Weiss (1981), schéma. Au-delà d’un certain taux, la banque gagne moins : les emprunteurs sérieux se retirent et les défauts se multiplient. Elle préfère donc garder un taux modéré et refuser une partie des demandes.", "Courbe en cloche du gain de la banque selon le taux d’intérêt");

  OEC.portraits["stiglitz"] = {
    portrait: true, labels: LABELS,
    essentiel: [
      "Joseph Stiglitz, né en 1943, économiste américain, prix Nobel 2001 avec George Akerlof et Michael Spence, a montré que les marchés fonctionnent mal dès que l’information est inégalement répartie entre acheteurs et vendeurs, prêteurs et emprunteurs, employeurs et salariés.",
      "Il en tire une conclusion générale : l’efficacité des marchés, la « main invisible », repose sur une hypothèse d’information parfaite qui n’est presque jamais vérifiée. L’intervention publique peut donc améliorer le résultat.",
      "Conseiller de Bill Clinton, puis économiste en chef de la Banque mondiale, il est devenu l’un des critiques les plus connus du FMI, de la mondialisation telle qu’elle a été conduite et de la montée des inégalités."
    ],
    sections: [
      { id: "vie", titre: "Une vie", html: `
<p>Joseph Eugene Stiglitz naît le 9 février 1943 à Gary, dans l’Indiana, une ville de l’acier au bord du lac Michigan, où est né aussi Paul <a href="#eco-samuelson">Samuelson</a>. Son père est agent d’assurances, sa mère institutrice. Il racontera que les licenciements, la pauvreté et la ségrégation raciale qu’il voit autour de lui l’ont convaincu très tôt que les marchés ne fonctionnent pas comme dans les manuels.</p>
<p>Il étudie à l’Amherst College, puis au MIT, où il obtient son doctorat en 1967. Il passe une année à Cambridge, en Angleterre, où il travaille d’abord avec Joan <a href="#eco-robinson">Robinson</a>. De 1969 à 1971, il séjourne à Nairobi, au Kenya, où il étudie le métayage. En 1970, à vingt-sept ans, il devient professeur titulaire à Yale. Il enseigne ensuite à Stanford, à Oxford et à Princeton, et reçoit en 1979 la médaille John Bates Clark.</p>
${vieStiglitz}
<p>En 1993, il entre au Conseil des conseillers économiques du président Bill Clinton, qu’il préside de 1995 à 1997. Il devient alors économiste en chef de la Banque mondiale. Ses critiques publiques du FMI pendant la crise asiatique provoquent des tensions avec le Trésor américain, et il quitte la Banque au début de l’année 2000. Il reçoit le prix Nobel en 2001 et rejoint la même année l’université Columbia, à New York, où il enseigne toujours. Ses livres pour le grand public, à commencer par La Grande Désillusion (2002), sont traduits dans des dizaines de langues.</p>` },
      { id: "epoque", titre: "Le monde qu’il voulait comprendre", html: `
<p>Dans les années 1950, Kenneth Arrow et Gérard Debreu démontrent rigoureusement ce qu’Adam <a href="#eco-smith">Smith</a> avait pressenti : sous certaines conditions, un système de marchés concurrentiels conduit à une situation efficace, où l’on ne peut améliorer le sort de l’un sans dégrader celui d’un autre (<a href="#c-optimum-pareto">voir optimum de Pareto</a>). Parmi ces conditions figure une information parfaite : chacun connaît la qualité de ce qu’il achète.</p>
<p>Beaucoup d’économistes pensent alors qu’un peu d’ignorance ne change presque rien au résultat. En 1970, George Akerlof montre le contraire sur le marché des voitures d’occasion : si l’acheteur ne peut distinguer une bonne voiture d’une mauvaise, les bonnes disparaissent du marché (<a href="#c-asymetrie-information">voir asymétrie d’information</a>). Stiglitz étend cette idée à l’assurance, au crédit, au travail et aux marchés financiers.</p>
<p>À partir de 1989, la chute du mur de Berlin ouvre une période de confiance dans les marchés. Le FMI et la Banque mondiale recommandent aux pays en développement et aux anciens pays communistes de privatiser, d’équilibrer leur budget et d’ouvrir leurs frontières aux capitaux : c’est le « consensus de Washington ». Stiglitz, qui voit ces politiques de l’intérieur, les jugera fondées sur une théorie qu’il a passé sa carrière à réfuter.</p>` },
      { id: "pensee", titre: "La pensée, pas à pas", html: `
<h4>1. L’information n’est jamais parfaite</h4>
<p><b>La question.</b> Les deux parties d’un échange savent-elles la même chose ?</p>
<p><b>Son raisonnement.</b> Dans la plupart des échanges, l’un des partenaires en sait plus que l’autre. Le vendeur connaît mieux son produit, l’emprunteur son projet, l’assuré ses habitudes, le salarié son effort. Stiglitz en fait le point de départ de toute son œuvre, ce n’est pas un détail, c’est la situation normale.</p>
<p><b>Un exemple.</b> George Akerlof avait montré en 1970, avec le marché des voitures d’occasion, que le doute sur la qualité peut chasser les bonnes voitures du marché. Stiglitz, Akerlof et Michael Spence reçoivent ensemble le prix Nobel en 2001 pour leurs travaux sur l’information.</p>
<p><a href="#c-asymetrie-information">Pour aller plus loin, la notice « Asymétrie d’information » →</a></p>
${asym}
<h4>2. Trier les clients, l’assurance</h4>
<p><b>La question.</b> Comment un assureur reconnaît-il les clients risqués ?</p>
<p><b>Son raisonnement.</b> Avec Michael Rothschild, Stiglitz montre en 1976 comment un assureur peut amener ses clients à révéler eux-mêmes leur risque. Il propose deux contrats, l’un complet et cher, l’autre bon marché avec une franchise élevée. Les personnes prudentes choisissent le second, les autres le premier. Mais cet équilibre est fragile, et il peut ne pas exister du tout.</p>
<p><b>Un exemple.</b> C’est la logique des franchises en assurance automobile ou maladie. Un conducteur qui se sait prudent accepte une franchise élevée pour payer moins cher, un conducteur qui craint l’accident préfère une couverture complète.</p>
<p><a href="#c-asymetrie-information">Pour aller plus loin, la notice « Asymétrie d’information », qui présente la sélection adverse →</a></p>
<h4>3. Le rationnement du crédit</h4>
<p><b>La question.</b> Pourquoi une banque refuse-t-elle un prêt au lieu d’augmenter son taux ?</p>
<p><b>Son raisonnement.</b> Avec Andrew Weiss, Stiglitz explique en 1981 qu’un taux élevé fait fuir les emprunteurs prudents et n’attire que ceux qui prennent de gros risques. La banque préfère donc un taux modéré et sélectionne ses clients. Une partie des demandeurs, même sérieux, n’obtient rien, à aucun prix.</p>
<p><b>Un exemple.</b> Une jeune entreprise sans historique, même avec un bon projet, se voit souvent refuser un crédit, alors qu’elle accepterait de payer un taux plus élevé. Pendant la crise de 2008-2009, de nombreuses petites entreprises ont été privées de crédit de cette façon.</p>
${credit}
<h4>4. Les salaires d’efficience</h4>
<p><b>La question.</b> Pourquoi un employeur paierait-il plus que le salaire du marché ?</p>
<p><b>Son raisonnement.</b> Avec Carl Shapiro, Stiglitz montre en 1984 qu’un employeur qui ne peut pas surveiller tous ses salariés a intérêt à les payer plus que le salaire du marché, car celui qui serait pris à tricher aurait alors beaucoup à perdre. Mais si toutes les entreprises font de même, les salaires sont trop élevés pour que tout le monde trouve un emploi. Le chômage devient ce qui discipline les salariés.</p>
<p><b>Un exemple.</b> En 1914, Henry Ford double le salaire journalier de ses ouvriers, qui passe à cinq dollars. Les démissions et l’absentéisme, très élevés sur ses chaînes, chutent aussitôt, et la productivité augmente.</p>
<p><a href="#c-taux-naturel">Pour aller plus loin, la notice « Taux de chômage naturel » →</a></p>
<h4>5. Des marchés financiers jamais parfaitement efficients</h4>
<p><b>La question.</b> Les prix de la Bourse peuvent-ils refléter toute l’information ?</p>
<p><b>Son raisonnement.</b> Avec Sanford Grossman, Stiglitz relève en 1980 un paradoxe. Si les prix des actions reflétaient déjà toute l’information disponible, personne n’aurait intérêt à payer pour s’informer, et les prix ne refléteraient alors plus rien. Les marchés ne peuvent donc pas être parfaitement efficients.</p>
<p><b>Un exemple.</b> Les banques et les fonds paient des milliers d’analystes pour étudier les entreprises. Ils ne le feraient pas si tout ce qu’ils trouvent était déjà dans les prix. Il faut un peu d’inefficience pour que l’information soit produite.</p>
<h4>6. La main invisible en question</h4>
<p><b>La question.</b> Le marché libre conduit-il toujours à un résultat efficace ?</p>
<p><b>Son raisonnement.</b> Avec Bruce Greenwald, Stiglitz montre en 1986 que, dès que l’information est imparfaite ou que certains marchés manquent, l’équilibre de marché n’est en général pas efficace. Il existe en principe des interventions publiques, des taxes ou des subventions, qui amélioreraient le sort de tous. La « main invisible » n’est donc pas le cas général, mais un cas particulier.</p>
<p><b>Un exemple.</b> Si l’assurance maladie était facultative, les personnes en bonne santé seraient tentées de s’en passer, les primes monteraient pour les autres, et le marché pourrait s’effondrer. C’est l’une des raisons de l’assurance maladie obligatoire, introduite en Suisse en 1996.</p>
<p><a href="#c-optimum-pareto">Pour aller plus loin, la notice « Optimum de Pareto » →</a></p>
<h4>7. La mondialisation et les inégalités</h4>
<p><b>La question.</b> La mondialisation profite-t-elle à tous ?</p>
<p><b>Son raisonnement.</b> Stiglitz reproche au FMI d’avoir imposé aux pays en crise une austérité et une ouverture financière qui les ont fragilisés. Il soutient aussi que les inégalités américaines ne récompensent pas seulement le talent, mais des rentes, positions de monopole, avantages fiscaux, influence politique. Selon lui, ces inégalités affaiblissent la croissance elle-même.</p>
<p><b>Un exemple.</b> Économiste en chef de la Banque mondiale de 1997 à 2000, il assiste de près à la crise asiatique. Il en tire La Grande Désillusion (2002), une critique sévère des recettes du FMI, contestée par l’institution.</p>
<p><a href="#c-courbe-kuznets">Pour aller plus loin, la notice « Courbe de Kuznets », sur le lien entre croissance et inégalités →</a></p>` },
      { id: "livres", titre: "Les livres et articles qui comptent", html: `
<p><b>« Equilibrium in Competitive Insurance Markets » (1976), avec Michael Rothschild.</b> Comment un assureur trie ses clients en leur proposant plusieurs contrats.</p>
<p><b>« Credit Rationing in Markets with Imperfect Information » (1981), avec Andrew Weiss.</b> L’article fondateur sur le rationnement du crédit.</p>
<p><b>La Grande Désillusion (2002).</b> Son livre le plus lu : le récit critique des crises des années 1990 et du rôle du FMI, par un témoin direct.</p>
<p><b>Le Triomphe de la cupidité (2010).</b> Son analyse de la crise financière de 2008 et de la dérégulation qui l’a précédée.</p>
<p><b>Le Prix de l’inégalité (2012).</b> Pourquoi les inégalités coûtent cher à l’économie et à la démocratie.</p>
<p><b>Peuple, pouvoir et profits (2019).</b> Un programme pour un « capitalisme progressiste ».</p>` }
    ],
    cas: [
      { titre: "Les métayers du Kenya", html: `
<p>De 1969 à 1971, Stiglitz travaille à Nairobi. Il y observe le métayage : le paysan cultive la terre d’un propriétaire et lui remet une part de la récolte, souvent la moitié. Les économistes jugeaient ce système inefficace, puisque le paysan ne garde qu’une partie du fruit de son effort. Stiglitz montre en 1974 qu’il s’explique très bien : le propriétaire ne peut pas surveiller le travail, et le paysan est trop pauvre pour supporter seul le risque d’une mauvaise récolte. Le partage de la récolte est un compromis entre incitation et assurance. C’est là qu’il dit avoir compris l’importance de l’information.</p>` },
      { titre: "La querelle avec le FMI", html: `
<p>En 1997 et 1998, la crise financière frappe la Thaïlande, l’Indonésie et la Corée du Sud. Le FMI prête à ces pays en exigeant des taux d’intérêt élevés, des coupes budgétaires et la fermeture de banques. Stiglitz, alors économiste en chef de la Banque mondiale, critique publiquement ces conditions, qui aggravent selon lui la récession. Il quitte la Banque au début de l’année 2000, puis publie La Grande Désillusion. En juillet 2002, Kenneth Rogoff, économiste en chef du FMI, lui répond par une lettre ouverte très dure, qui défend le travail de l’institution et lui reproche de ne proposer aucune solution praticable. Le FMI a depuis reconnu avoir sous-estimé les effets de l’austérité, sans donner raison à Stiglitz sur tout.</p>` },
      { titre: "« Du 1 %, par le 1 %, pour le 1 % »", html: `
<p>En mai 2011, Stiglitz publie dans le magazine Vanity Fair un article au titre inspiré de Lincoln : « Du 1 %, par le 1 %, pour le 1 % ». Il y écrit que le centième le plus riche des Américains reçoit près du quart du revenu national et détient environ 40 % du patrimoine. Quelques mois plus tard, le mouvement Occupy Wall Street reprend l’opposition entre « le 1 % » et « les 99 % ». Peu d’articles d’économistes ont eu un tel écho politique.</p>` },
      { titre: "Mesurer autre chose que le PIB", html: `
<p>En 2008, le président français Nicolas Sarkozy confie à Stiglitz la présidence d’une commission sur la mesure des performances économiques et du progrès social, avec Amartya <a href="#eco-sen">Sen</a> pour conseiller et Jean-Paul Fitoussi pour coordinateur. Le rapport de 2009 recommande de compléter le PIB par des mesures du bien-être, des inégalités et de la soutenabilité (<a href="#c-pib">voir PIB</a>). Il a influencé les statistiques de l’OCDE et de nombreux pays.</p>` }
    ],
    objections: `
<h4>1. L’État est mal informé, lui aussi</h4>
<p>Si l’information manque aux banques et aux assureurs, elle manque encore plus à l’administration. Les héritiers de <a href="#eco-hayek">Hayek</a> et de la théorie des choix publics (<a href="#c-choix-public">voir choix public</a>) répondent que montrer qu’un marché est imparfait ne prouve pas que l’État fera mieux. Stiglitz l’admet en théorie : ses théorèmes disent qu’une amélioration est possible, pas qu’elle est facile.</p>
<h4>2. Une critique injuste du FMI</h4>
<p>Pour Kenneth Rogoff, Stiglitz oublie que les pays qui s’adressent au FMI sont déjà en crise et que personne d’autre ne veut leur prêter. Sans rigueur budgétaire, l’aide aurait fini en inflation ou en fuite des capitaux. Les défenseurs du FMI ajoutent que la Corée du Sud s’est redressée très vite.</p>
<h4>3. La mondialisation a réduit la pauvreté</h4>
<p>Jagdish Bhagwati et d’autres spécialistes du commerce rappellent que l’ouverture aux échanges a sorti des centaines de millions de personnes de la pauvreté, en Chine et en Inde notamment. Stiglitz répond qu’il ne critique pas l’ouverture elle-même, mais la manière dont elle a été conduite, et que ces deux pays l’ont justement faite à leur rythme.</p>
<h4>4. Du théoricien au polémiste</h4>
<p>Certains de ses collègues jugent que ses livres grand public vont bien au-delà de ce que démontrent ses articles, et que son ton s’est durci avec les années. Ses défenseurs soulignent qu’il a vu juste sur plusieurs points : les dangers de la libéralisation financière rapide et ceux de la dérégulation avant 2008.</p>`,
    ecoles: `
<p><b>George Akerlof</b> et <b>Michael Spence</b>, ses colauréats, ont fondé avec lui l’économie de l’information.</p>
<p><b>John Maynard <a href="#eco-keynes">Keynes</a></b> lui inspire l’idée que le chômage est involontaire ; Stiglitz lui donne des fondements microéconomiques.</p>
<p><b>Paul <a href="#eco-samuelson">Samuelson</a></b>, natif de Gary comme lui, a été son professeur au MIT.</p>
<p><b>Milton <a href="#eco-friedman">Friedman</a></b> et <b>Friedrich <a href="#eco-hayek">Hayek</a></b> sont ses adversaires : il conteste leur confiance dans l’efficacité des marchés.</p>
<p><b>Paul <a href="#eco-krugman">Krugman</a></b> utilise le modèle de concurrence monopolistique de Dixit et Stiglitz (1977) pour sa nouvelle théorie du commerce.</p>
<p><b>Thomas <a href="#eco-piketty">Piketty</a></b>, <b>Gabriel Zucman</b> et <b>Mariana <a href="#eco-mazzucato">Mazzucato</a></b> prolongent ses analyses des inégalités, de la fiscalité et du rôle de l’État.</p>`,
    source: {
      titre: "Joseph Stiglitz, « There Is No Invisible Hand », The Guardian, 20 décembre 2002",
      texte: "La main invisible d’Adam Smith, l’idée que les marchés libres conduisent à l’efficacité comme guidés par des forces invisibles, est invisible, au moins en partie, parce qu’elle n’existe pas.",
      notes: `
<p><b>Une formule, un programme.</b> La phrase résume trente ans de recherche. Smith pensait que la recherche de l’intérêt personnel sert l’intérêt général. Stiglitz répond que ce résultat suppose une information parfaite et des marchés complets, deux conditions qui ne sont jamais réunies.</p>
<p><b>Ce qu’elle ne dit pas.</b> Stiglitz ne rejette pas le marché. Il soutient qu’il a besoin de règles et d’un État qui corrige ses défaillances, et que la bonne question n’est pas « marché ou État ? » mais quel partage entre les deux.</p>
<p><b>Le contexte.</b> L’article paraît un an après son prix Nobel et quelques mois après La Grande Désillusion, au moment où les scandales comptables américains, comme celui d’Enron, illustrent ce que peut coûter une information trompeuse.</p>`
    },
    quiz: [
      { q: "Qu’appelle-t-on une asymétrie d’information ?",
        o: ["Une différence de revenus entre deux pays qui commercent", "Une situation où un partenaire en sait plus que l’autre", "Un écart entre l’offre et la demande sur un même marché", "Une erreur de prévision de la banque centrale sur l’inflation"], c: 1,
        e: "Le vendeur, l’emprunteur ou le salarié en savent plus que l’acheteur, la banque ou l’employeur." },
      { q: "Pourquoi une banque refuse-t-elle des prêts au lieu de relever son taux ?",
        o: ["Parce que la banque centrale lui interdit de relever ses taux", "Parce qu’un taux élevé fait fuir les prudents et attire les risqués", "Parce qu’elle manque de liquidités pour prêter à ses clients", "Parce que les emprunteurs refusent d’emprunter à un taux plus élevé"], c: 1,
        e: "C’est le rationnement du crédit, démontré avec Andrew Weiss en 1981 : un taux élevé fait fuir les prudents et attire les plus risqués." },
      { q: "Avec qui Stiglitz partage-t-il le prix Nobel en 2001 ?",
        o: ["Paul Krugman et Robert Lucas", "George Akerlof et Michael Spence", "Amartya Sen et Jean-Paul Fitoussi", "Milton Friedman et Friedrich Hayek"], c: 1,
        e: "Tous trois sont récompensés pour leurs analyses des marchés avec asymétrie d’information." },
      { q: "Que reproche Stiglitz au FMI dans La Grande Désillusion ?",
        o: ["D’avoir prêté trop peu d’argent aux pays en difficulté financière", "D’avoir imposé l’austérité et l’ouverture financière aux pays en crise", "D’avoir laissé les pays en crise sans aucune condition de réforme", "D’avoir favorisé les pays asiatiques au détriment de l’Amérique latine"], c: 1,
        e: "Il critique surtout la gestion de la crise asiatique de 1997-1998, où ces remèdes ont aggravé la situation." },
      { q: "Selon la théorie du salaire d’efficience, pourquoi des entreprises paient-elles plus que le salaire du marché ?",
        o: ["Pour soigner leur image auprès des clients et des candidats", "Pour que le salarié ait beaucoup à perdre en cas de renvoi", "Parce que les syndicats l’imposent lors des négociations", "Parce que la productivité baisse dès que les salaires montent"], c: 1,
        e: "Comme toutes le font, les salaires sont trop élevés pour le plein emploi : il reste du chômage." }
    ],
    ouverte: {
      q: "En juin 2023, les Suisses ont accepté à plus de 78 % l’impôt minimal de 15 % sur les grandes multinationales, prévu par l’OCDE. Stiglitz juge ce taux trop bas. Que dirait-il du cas suisse ?",
      r: "Stiglitz copréside une commission indépendante sur la fiscalité des multinationales, qui réclame un taux minimal de 25 % et juge l’accord de l’OCDE trop favorable aux pays à faible fiscalité. Il dirait sans doute que la Suisse a longtemps profité de la concurrence fiscale, en attirant des sièges et des bénéfices réalisés ailleurs, et que le taux de 15 % entérine cette concurrence au lieu d’y mettre fin. Il rappellerait aussi son expérience de 2016 : chargé par le Panama de présider une commission sur la transparence financière après les « Panama Papers », il en a démissionné avec le juriste bâlois Mark Pieth, faute de garantie que le rapport serait publié. On peut lui répondre que la Suisse a accepté l’impôt minimal à une large majorité, qu’elle pratique l’échange automatique d’informations depuis 2017, et que ses recettes fiscales financent des services publics de qualité. On peut ajouter que la concurrence fiscale, selon ses défenseurs, discipline les États dépensiers. Le débat oppose deux idées de la souveraineté : celle d’un pays libre de fixer ses impôts, et celle des autres pays de taxer les bénéfices réalisés chez eux."
    },
    lectures: [
      ["Accessible", "Joseph Stiglitz, La Grande Désillusion, 2002."],
      ["Accessible", "Joseph Stiglitz, « Of the 1%, by the 1%, for the 1% », Vanity Fair, mai 2011."],
      ["Intermédiaire", "Joseph Stiglitz, Le Prix de l’inégalité, 2012."],
      ["Intermédiaire", "Kenneth Rogoff, « An Open Letter to Joseph Stiglitz », FMI, juillet 2002, pour la critique."],
      ["Recherche", "Joseph Stiglitz et Andrew Weiss, « Credit Rationing in Markets with Imperfect Information », American Economic Review, 1981 ; conférence Nobel « Information and the Change in the Paradigm in Economics », 2001."]
    ],
    decouvrir: {
      questions: [
        { q: "Selon Stiglitz, que se passe-t-il quand l’un des partenaires d’un échange est mal informé ?",
          o: ["Il se protège, et le marché ne fonctionne plus comme prévu", "Le marché devient plus efficace, car chacun se méfie davantage", "Les prix baissent, jusqu’à rendre l’échange plus avantageux", "L’échange est annulé par la loi, qui protège le mal informé"], c: 0,
          e: "C’est l’asymétrie d’information." },
        { q: "Pour Stiglitz, que suppose la « main invisible » d’Adam Smith ?",
          o: ["Une information parfaite, que les marchés ne connaissent pas", "Un État très puissant qui planifie la production et les prix", "L’absence de monnaie, dans une économie de troc généralisé", "Des entreprises toutes publiques, gérées dans l’intérêt général"], c: 0,
          e: "Sans cette information, les marchés ont besoin de règles. Il est devenu l’un des critiques les plus écoutés de la mondialisation." }
      ],
      duree: 6,
      html: `
<h3>Un théoricien devenu contestataire</h3>
<p>Joseph Stiglitz, né en 1943 dans une ville ouvrière de l’Indiana, devient professeur à vingt-sept ans, conseille le président Clinton, puis dirige les économistes de la Banque mondiale. Il reçoit le prix Nobel en 2001 et devient l’un des critiques les plus écoutés de la mondialisation.</p>
${vieStiglitz}
<h3>Quand l’un en sait plus que l’autre</h3>
<p>Son idée centrale est simple. Dans un échange, l’un des deux en sait presque toujours plus que l’autre : l’emprunteur sur son projet, l’assuré sur sa prudence, le salarié sur son effort. Celui qui est mal informé se protège, et le marché ne fonctionne plus comme prévu.</p>
${asym}
<h3>L’exemple du crédit</h3>
<p>Une banque pourrait prêter à tout le monde en demandant un taux élevé. Elle ne le fait pas : un taux élevé ferait fuir les emprunteurs sérieux et n’attirerait que les plus risqués. Elle préfère refuser des prêts. Des personnes solvables restent donc sans crédit.</p>
<h3>À retenir</h3>
<p>Pour Stiglitz, la « main invisible » d’Adam Smith suppose une information parfaite, qui n’existe pas : les marchés ont besoin de règles. Le portrait complet présente ses travaux, sa querelle avec le FMI et les critiques qu’on lui adresse.</p>`,
      quiz: [0, 1]
    },
    resumes: {
      vie: "De Gary au MIT, de la Maison-Blanche à la Banque mondiale, puis au prix Nobel.",
      epoque: "L’efficacité des marchés suppose une information parfaite.",
      pensee: "Sept étapes, de l’assurance à la critique de la mondialisation.",
      livres: "Des articles de 1976 et 1981 à Peuple, pouvoir et profits.",
      cas: "Les métayers du Kenya, la querelle avec le FMI, le 1 %, la mesure du progrès.",
      objections: "L’État mal informé, le FMI défendu, la pauvreté en recul, le polémiste.",
      ecoles: "Akerlof et Spence, Keynes, Samuelson, Friedman et Hayek, Krugman, Piketty.",
      source: "La main invisible est invisible parce qu’elle n’existe pas.",
      quiz: "Cinq questions corrigées et une question sur l’impôt minimal en Suisse.",
      lectures: "Cinq lectures classées par niveau."
    }
  };

  /* =====================================================================
     MARIANA MAZZUCATO
     ===================================================================== */
  const vieMazzucato = lifeline(1968, 2026, [
    [1968, "naissance à Rome", true], [1972, "arrivée à Princeton", false], [1999, "doctorat à la New School", true], [2011, "université du Sussex", false],
    [2013, "L’État entrepreneur", true], [2017, "institut à Londres", false], [2018, "missions européennes", true], [2021, "Mission économie", false], [2023, "The Big Con", true]
  ], "Mariana Mazzucato, née en 1968", "Née en Italie, formée aux États-Unis, installée à Londres : Mazzucato est devenue en dix ans l’une des économistes les plus écoutées des gouvernements sur l’innovation et la politique industrielle.");

  const iphone = fig(310, (() => {
    let s = `<text x="20" y="24" ${T}>D’où viennent les technologies d’un téléphone intelligent ?</text>`;
    [["Internet", "réseau de l’armée américaine", 30], ["GPS", "satellites militaires", 185], ["Écran tactile", "recherches financées par l’État", 340], ["Assistant vocal", "projet du Pentagone", 495]].forEach(([t, sub, x]) => {
      s += `<rect x="${x}" y="46" width="130" height="64" rx="10" style="fill:var(--card); stroke:var(--note); stroke-width:2"/><text x="${x + 65}" y="74" text-anchor="middle" style="fill:var(--ink); font:700 12px Manrope, sans-serif">${t}</text>`;
      const w = sub.split(" "), mid = Math.ceil(w.length / 2);
      s += `<text x="${x + 65}" y="92" text-anchor="middle" style="fill:var(--ink-soft); font:500 10px Manrope, sans-serif">${w.slice(0, mid).join(" ")}</text><text x="${x + 65}" y="104" text-anchor="middle" style="fill:var(--ink-soft); font:500 10px Manrope, sans-serif">${w.slice(mid).join(" ")}</text>`;
      s += arrow(x + 65, 114, 320 + (x + 65 - 320) * 0.25, 196, "var(--gold)");
    });
    s += node(200, 200, 240, 62, "Le téléphone", "conçu et assemblé par l’entreprise", "var(--gold)");
    s += `<text x="320" y="290" text-anchor="middle" ${S}>Recherche publique en amont, pendant des décennies ; produit privé en aval.</text>`;
    return s;
  })(), "D’après L’État entrepreneur (2013), chapitre 5. Mazzucato ne nie pas le talent de l’entreprise qui assemble ces briques. Elle rappelle qu’elles ont été financées par des fonds publics, à un stade où aucun investisseur privé n’aurait pris le risque.", "Schéma des technologies d’origine publique réunies dans un téléphone");

  const risques = fig(290, (() => {
    let s = `<text x="20" y="24" ${T}>Deux prêts publics américains, deux destins</text>`;
    s += node(40, 50, 250, 60, "Solyndra (panneaux solaires)", "prêt garanti de 535 millions de dollars", "var(--serial)");
    s += node(350, 50, 250, 60, "Tesla (voitures électriques)", "prêt de 465 millions de dollars", "var(--note)");
    s += arrow(165, 114, 165, 150) + arrow(475, 114, 475, 150);
    s += node(40, 154, 250, 60, "Faillite en 2011", "la perte est pour le contribuable", "var(--serial)");
    s += node(350, 154, 250, 60, "Succès, prêt remboursé en 2013", "les gains vont aux actionnaires", "var(--note)");
    s += `<text x="320" y="252" text-anchor="middle" style="fill:var(--ink); font:700 13px Manrope, sans-serif">Risques partagés, gains privés</text>`;
    s += `<text x="320" y="272" text-anchor="middle" ${S}>Mazzucato propose que l’État reçoive une part des succès pour couvrir les échecs.</text>`;
    return s;
  })(), "Deux prêts accordés par le ministère américain de l’Énergie en 2009 et 2010. Pour Mazzucato, un investisseur qui supporte les pertes sans jamais partager les gains ne peut pas durer : elle suggère des participations au capital ou des redevances.", "Schéma comparant les prêts publics à Solyndra et à Tesla");

  OEC.portraits["mazzucato"] = {
    portrait: true, labels: LABELS,
    essentiel: [
      "Mariana Mazzucato, née en 1968 à Rome, professeure à l’University College de Londres, soutient que l’État n’est pas seulement un arbitre qui corrige les défauts du marché : il est souvent l’investisseur qui prend les plus grands risques, à l’origine des innovations majeures.",
      "Dans L’État entrepreneur (2013), elle montre que les technologies qui font un téléphone intelligent, Internet, le GPS, l’écran tactile, l’assistant vocal, viennent de recherches financées par des fonds publics. Elle en conclut que la collectivité devrait recevoir une part des gains.",
      "Elle propose d’organiser l’action publique autour de « missions », sur le modèle du programme Apollo. Très écoutée des gouvernements, elle est aussi contestée : ses critiques lui reprochent d’oublier les échecs de l’État et de surestimer sa capacité à choisir."
    ],
    sections: [
      { id: "vie", titre: "Une vie", html: `
<p>Mariana Francesca Mazzucato naît le 16 juin 1968 à Rome. En 1972, sa famille s’installe à Princeton, dans le New Jersey : son père, Ernesto Mazzucato, est physicien et travaille dans un laboratoire public de recherche sur la fusion nucléaire. Elle grandit donc aux États-Unis, dans un milieu de chercheurs financés par l’État.</p>
<p>Elle étudie l’histoire et les relations internationales à l’université Tufts, puis l’économie à la New School for Social Research de New York, une université connue pour sa tradition critique, où elle obtient son doctorat en 1999. Elle s’installe ensuite au Royaume-Uni : elle enseigne à l’Open University, dont elle devient professeure en 2005, puis à l’université du Sussex à partir de 2011, dans un centre réputé pour l’étude de l’innovation.</p>
${vieMazzucato}
<p>En 2011, elle publie pour un cercle de réflexion britannique une courte étude, The Entrepreneurial State, qui devient un livre en 2013 et la fait connaître dans le monde entier. En 2017, elle fonde à l’University College de Londres l’Institut pour l’innovation et l’intérêt public, qu’elle dirige. Elle reçoit en 2018 le prix Leontief. Elle conseille depuis de nombreux gouvernements et organisations internationales : la Commission européenne, l’Écosse, l’Italie, l’Afrique du Sud, et l’Organisation mondiale de la santé, dont elle a présidé le Conseil sur l’économie de la santé pour tous.</p>` },
      { id: "epoque", titre: "Le monde qu’il voulait comprendre", html: `
<p>Depuis les années 1980, une idée domine le débat public : la richesse est créée par les entreprises, et l’État, lent et bureaucratique, doit se limiter à fixer les règles, à financer l’école et la recherche fondamentale, et à corriger les « défaillances du marché » (<a href="#c-externalite">voir externalité</a>, <a href="#c-bien-public">bien public</a>). La Silicon Valley incarne ce récit : des entrepreneurs de génie, des investisseurs audacieux, un État qui ne ferait que gêner.</p>
<p>Après la crise financière de 2008, de nombreux pays européens réduisent leurs dépenses publiques. Au Royaume-Uni, le gouvernement élu en 2010 annonce vouloir « libérer » le secteur privé en réduisant l’État. C’est dans ce contexte que Mazzucato écrit.</p>
<p>Sa formation la prépare à contester ce récit. Elle a étudié Joseph <a href="#eco-schumpeter">Schumpeter</a>, pour qui l’innovation est le moteur du capitalisme, et John Maynard <a href="#eco-keynes">Keynes</a>, pour qui l’investissement dépend d’une confiance fragile. Elle pose une question simple : qui, concrètement, a financé les innovations dont nous sommes le plus fiers ?</p>` },
      { id: "pensee", titre: "La pensée, pas à pas", html: `
<h4>1. L’innovation est incertaine, longue et collective</h4>
<p><b>La question.</b> Pourquoi les investisseurs privés financent-ils si peu les grandes découvertes ?</p>
<p><b>Son raisonnement.</b> Une innovation majeure demande des décennies de recherche dont personne ne connaît l’issue. Mazzucato reprend la distinction de Frank Knight et de Keynes entre le risque, qu’on peut calculer, et l’incertitude, qu’on ne peut pas. Les investisseurs privés, même le capital-risque, veulent un retour en quelques années. Ils arrivent quand le plus dur est fait.</p>
<p><b>Un exemple.</b> Un fonds de capital-risque cherche en général à revendre ses parts au bout de cinq à dix ans. Le séquençage du génome humain, lui, a demandé treize ans de travail, de 1990 à 2003, dans un programme international largement public.</p>
<h4>2. L’État, premier investisseur</h4>
<p><b>La question.</b> Qui a financé Internet, le GPS ou l’écran tactile ?</p>
<p><b>Son raisonnement.</b> Ce sont des agences publiques qui financent les premières étapes, l’agence de recherche du Pentagone pour l’informatique et Internet, les instituts nationaux de santé américains pour les médicaments, les programmes spatiaux pour les satellites. Dans L’État entrepreneur (2013), Mazzucato montre que l’État n’y répare pas un marché existant, il fait exister des marchés qui n’existaient pas.</p>
<p><b>Un exemple.</b> Elle démonte un téléphone intelligent. Internet, le GPS, l’écran tactile et l’assistant vocal reposent tous sur des recherches financées par l’argent public, que les entreprises ont ensuite assemblées avec talent.</p>
<p><a href="#c-bien-public">Pour aller plus loin, la notice « Bien public » →</a></p>
${iphone}
<h4>3. Créer des marchés, pas seulement les corriger</h4>
<p><b>La question.</b> L’État doit-il seulement réparer les défaillances du marché ?</p>
<p><b>Son raisonnement.</b> La théorie habituelle justifie l’action publique par les défaillances du marché, comme la pollution ou les biens publics. Pour Mazzucato, ce cadre est trop étroit, car il présente l’État comme un simple réparateur. Elle parle d’un État qui « crée et façonne » les marchés, en donnant une direction à l’innovation.</p>
<p><b>Un exemple.</b> Le marché de l’énergie solaire n’existait presque pas avant que des États ne le créent. L’Allemagne garantit à partir de 2000 un prix d’achat de l’électricité solaire, et la Chine finance massivement ses fabricants de panneaux. Le prix des panneaux s’effondre ensuite, ce qui rend l’énergie solaire compétitive.</p>
<p><a href="#c-externalite">Pour aller plus loin, la notice « Externalité », qui présente le cadre habituel des défaillances du marché →</a></p>
<h4>4. Risques partagés, gains privés</h4>
<p><b>La question.</b> Qui profite des succès financés par le contribuable ?</p>
<p><b>Son raisonnement.</b> Si le contribuable finance les étapes les plus risquées, il devrait toucher une part des succès. Or les gains vont aux actionnaires, tandis que les échecs restent à la charge du public. Mazzucato propose des participations de l’État au capital, des redevances, ou des conditions sur les prix et sur le réinvestissement des bénéfices.</p>
<p><b>Un exemple.</b> En 2009-2010, le gouvernement américain prête 535 millions de dollars à Solyndra, qui fait faillite en 2011, et 465 millions à Tesla, qui rembourse en 2013 et devient l’une des entreprises les plus valorisées du monde. Le public a porté la perte de l’une, sans rien recevoir du succès de l’autre au-delà du remboursement et des intérêts.</p>
${risques}
<h4>5. Qui crée la valeur ?</h4>
<p><b>La question.</b> Qui crée la valeur, et qui ne fait que la capter ?</p>
<p><b>Son raisonnement.</b> Dans La Valeur de toute chose (2018), Mazzucato distingue ceux qui créent de la valeur et ceux qui l’extraient. Une partie de la finance, selon elle, capte des revenus sans rien produire, et les rachats d’actions enrichissent les actionnaires au détriment de l’investissement.</p>
<p><b>Un exemple.</b> Les grandes entreprises américaines consacrent chaque année plusieurs centaines de milliards de dollars à racheter leurs propres actions, pour en faire monter le cours. Pour Mazzucato, cet argent ne finance ni usines, ni recherche, ni salaires. Ses critiques répondent que les actionnaires le réinvestissent en partie dans d’autres entreprises.</p>
<p><a href="#c-rente">Pour aller plus loin, la notice « Rente différentielle », sur les revenus qui ne récompensent pas un effort →</a></p>
<h4>6. Les missions</h4>
<p><b>La question.</b> Comment donner une direction à l’innovation ?</p>
<p><b>Son raisonnement.</b> Dans Mission économie (2021), Mazzucato propose d’organiser l’action publique autour d’objectifs ambitieux, précis et mesurables. Une mission fixe le but, pas les moyens. Elle mobilise de nombreux secteurs et laisse les entreprises concourir pour y parvenir.</p>
<p><b>Un exemple.</b> Le modèle est le programme Apollo, lancé par Kennedy en 1961 pour poser un homme sur la Lune avant la fin de la décennie, ce qui est fait en 1969. L’Union européenne s’en inspire depuis 2021, avec des missions comme cent villes neutres pour le climat d’ici 2030.</p>
<h4>7. Reconstruire les capacités de l’État</h4>
<p><b>La question.</b> Un État peut-il tout confier à des cabinets de conseil ?</p>
<p><b>Son raisonnement.</b> Un État qui veut mener des missions doit en avoir les compétences. Dans The Big Con (2023), écrit avec Rosie Collington, Mazzucato reproche aux gouvernements de confier trop de tâches à des cabinets de conseil. Ils y perdent leur savoir-faire et deviennent incapables d’agir par eux-mêmes.</p>
<p><b>Un exemple.</b> Pendant la pandémie, le système britannique de dépistage s’appuie sur environ 2 500 consultants au plus fort de la crise, payés en moyenne plus de 1 000 livres par jour. Les compétences acquises repartent avec eux à la fin des contrats.</p>` },
      { id: "livres", titre: "Les livres qui comptent", html: `
<p><b>L’État entrepreneur (2013).</b> Son livre fondateur : l’origine publique des grandes innovations, d’Internet aux médicaments.</p>
<p><b>The Value of Everything (2018).</b> Une histoire de l’idée de valeur, et une critique de ceux qui la captent sans la créer.</p>
<p><b>Mission économie (2021).</b> Un plaidoyer pour des politiques publiques organisées autour de grandes missions.</p>
<p><b>The Big Con (2023), avec Rosie Collington.</b> Comment le recours aux cabinets de conseil affaiblit les États et les entreprises.</p>
<p><b>Rapport « Mission-Oriented Research and Innovation in the European Union » (2018).</b> Le texte, remis à la Commission européenne, qui a inspiré les missions du programme Horizon Europe.</p>` }
    ],
    cas: [
      { titre: "Ce qu’il y a dans un iPhone", html: `
<p>C’est l’exemple qui a fait connaître Mazzucato. Elle reprend une à une les technologies du téléphone d’Apple. Internet descend d’un réseau créé par l’agence de recherche du ministère américain de la Défense. Le GPS est un système de satellites militaires. L’écran tactile s’appuie sur des travaux financés par des agences publiques. L’assistant vocal Siri est issu d’un projet de recherche du Pentagone. Apple a eu le génie de réunir ces éléments dans un bel objet ; mais, écrit-elle, aucune de ces technologies clés n’a été financée par l’entreprise à ses débuts.</p>` },
      { titre: "Tesla et Solyndra", html: `
<p>En 2009, le ministère américain de l’Énergie garantit un prêt de 535 millions de dollars à Solyndra, un fabricant de panneaux solaires, et prête en 2010 465 millions à Tesla. Solyndra fait faillite en 2011, et l’affaire devient un symbole de l’État qui « choisit mal ». Tesla réussit et rembourse son prêt en 2013. Mazzucato en tire une leçon différente : un investisseur perd toujours sur certains projets ; le problème est que l’État a supporté la perte de Solyndra sans rien recevoir du succès de Tesla. S’il avait pris une part du capital, le gain aurait couvert la perte.</p>` },
      { titre: "Les missions de l’Europe", html: `
<p>En 2018, à la demande du commissaire européen à la recherche, Mazzucato remet un rapport qui propose d’orienter une partie du budget de recherche de l’Union vers des « missions ». Le programme Horizon Europe, lancé en 2021, en retient cinq : la lutte contre le cancer, l’adaptation au changement climatique, la santé des océans et des eaux, cent villes neutres pour le climat d’ici 2030, et la santé des sols. C’est l’application la plus directe de ses idées. Les premières évaluations sont partagées : les objectifs mobilisent, mais leur pilotage se révèle complexe.</p>` },
      { titre: "La santé pour tous", html: `
<p>Pendant la pandémie de covid-19, l’Organisation mondiale de la santé crée un Conseil sur l’économie de la santé pour tous et en confie la présidence à Mazzucato. Le Conseil, qui rend son rapport final en 2023, soutient que la santé n’est pas un coût mais un investissement, et que les vaccins mis au point grâce à d’importants financements publics auraient dû être partagés plus largement avec les pays pauvres. Elle y applique son idée centrale : quand le public prend le risque, il doit pouvoir fixer des conditions.</p>` }
    ],
    objections: `
<h4>1. Les échecs de l’État passés sous silence</h4>
<p>Pour Deirdre McCloskey et Alberto Mingardi, auteurs d’une réponse intitulée The Myth of the Entrepreneurial State (2020), Mazzucato ne retient que les réussites. Pour un Internet, combien de programmes coûteux et sans suite ? Les fonctionnaires, ajoutent-ils, ne risquent pas leur propre argent et n’ont pas de moyen sûr de savoir quels projets financer : c’est l’argument de <a href="#eco-hayek">Hayek</a> sur la connaissance dispersée.</p>
<h4>2. Financer la recherche n’est pas créer un produit</h4>
<p>Les technologies militaires dont elle parle n’ont pas été développées pour faire un téléphone. Il a fallu des entrepreneurs pour en imaginer l’usage et prendre le risque commercial. Ses critiques jugent qu’elle sous-estime cette étape, celle que <a href="#eco-schumpeter">Schumpeter</a> plaçait au cœur de l’innovation.</p>
<h4>3. Aller sur la Lune n’est pas guérir la pauvreté</h4>
<p>Dès 1977, l’économiste Richard Nelson demandait pourquoi un pays capable d’envoyer des hommes sur la Lune ne parvenait pas à résoudre les problèmes de ses quartiers pauvres. Une mission technique a un but clair et un seul responsable ; le climat ou la santé mettent en jeu des comportements, des intérêts opposés et de nombreux pays. Mazzucato reconnaît la difficulté et parle de missions plus ouvertes.</p>
<h4>4. L’État est déjà rémunéré</h4>
<p>Les entreprises qui réussissent paient des impôts et des salaires, et la collectivité profite des produits. Ajouter des participations publiques ou des conditions pourrait décourager les investisseurs privés. Mazzucato répond que les grandes entreprises technologiques paient souvent très peu d’impôts sur leurs bénéfices.</p>`,
    ecoles: `
<p><b>Joseph <a href="#eco-schumpeter">Schumpeter</a></b> lui donne son point de départ : l’innovation comme moteur du capitalisme.</p>
<p><b>John Maynard <a href="#eco-keynes">Keynes</a></b> et <b>Hyman <a href="#eco-minsky">Minsky</a></b> lui inspirent sa réflexion sur l’incertitude, l’investissement et la finance.</p>
<p><b>Karl Polanyi</b> lui fournit l’idée que les marchés sont construits par des décisions publiques.</p>
<p><b>Carlota Perez</b> et <b>Christopher Freeman</b>, spécialistes de l’histoire des techniques, ont formé la tradition dont elle est issue.</p>
<p><b>Joseph <a href="#eco-stiglitz">Stiglitz</a></b> partage sa critique des marchés laissés à eux-mêmes et son intérêt pour le partage des rentes.</p>
<p><b>Friedrich <a href="#eco-hayek">Hayek</a></b> est, par ses héritiers, son principal contradicteur (<a href="#controverses" data-debat="hayek-mazzucato">voir la controverse</a>).</p>`,
    source: {
      titre: "Mariana Mazzucato, L’État entrepreneur, 2013, chapitre 5",
      texte: "Il n’y a pas une seule technologie clé de l’iPhone qui n’ait été financée par l’État.",
      notes: `
<p><b>Une phrase choisie pour frapper.</b> Mazzucato prend l’objet qui symbolise le mieux la réussite privée, et montre ce qu’il doit à la dépense publique. L’argument vise moins Apple que le récit selon lequel l’État ne ferait que freiner l’innovation.</p>
<p><b>Ce qu’elle ne dit pas.</b> Elle ne prétend pas que l’État aurait pu inventer le téléphone. Elle écrit ailleurs que le talent d’Apple a été d’intégrer ces technologies et de les rendre simples à utiliser.</p>
<p><b>Ce qu’on lui répond.</b> « Financée par l’État » ne veut pas dire « conçue pour cela » : ces recherches visaient des usages militaires, et leurs retombées civiles n’étaient pas prévues. Le débat porte sur la leçon à en tirer pour l’avenir.</p>`
    },
    quiz: [
      { q: "Quelle est la thèse centrale de L’État entrepreneur ?",
        o: ["L’État doit posséder et diriger les grandes entreprises", "L’État porte les risques à long terme des grandes innovations", "L’innovation vient surtout des petites entreprises de garage", "L’État devrait cesser de financer la recherche de base"], c: 1,
        e: "Il investit là où le privé juge le risque trop grand." },
      { q: "Parmi ces technologies, laquelle Mazzucato rattache-t-elle à un financement public ?",
        o: ["L’imprimante 3D, le drone civil et la montre connectée", "Internet, le GPS, l’écran tactile et l’assistant vocal", "Le four à micro-ondes, la télévision couleur et le magnétoscope", "L’appareil photo numérique, la radio FM et la pile alcaline"], c: 1,
        e: "Ce sont les quatre exemples de son chapitre sur l’iPhone." },
      { q: "Que reproche-t-elle au partage actuel des risques et des gains ?",
        o: ["Les entreprises prennent en charge l’essentiel des risques", "Le public porte les risques, mais les gains restent privés", "L’État gagne trop d’argent sur les innovations qu’il finance", "Les chercheurs sont trop payés pour des résultats modestes"], c: 1,
        e: "Elle l’illustre par les prêts à Solyndra et à Tesla." },
      { q: "Qu’est-ce qu’une « mission » au sens de Mazzucato ?",
        o: ["Une subvention versée à une entreprise pour l’aider à innover", "Un grand objectif public, qui mobilise plusieurs secteurs", "Une entreprise publique chargée de gérer un secteur entier", "Une privatisation d’entreprises publiques jugées inefficaces"], c: 1,
        e: "Le modèle est le programme Apollo, un objectif précis et mesurable." },
      { q: "Quelle est la principale critique adressée à ses thèses ?",
        o: ["Qu’elle exagère le rôle des petites start-up dans l’innovation", "Qu’elle retient les succès de l’État et oublie ses échecs", "Qu’elle réclame une baisse des dépenses publiques de recherche", "Qu’elle défend le libre-échange contre les politiques industrielles"], c: 1,
        e: "C’est l’argument de McCloskey et Mingardi." }
    ],
    ouverte: {
      q: "La Suisse n’a pas de politique industrielle et s’en félicite souvent. Pourtant, le Web est né en 1989 au CERN, à Genève, dans un laboratoire public. Que dirait Mazzucato du modèle suisse ?",
      r: "Elle dirait que la Suisse est un bon exemple de ce qu’elle décrit, même si elle ne le revendique pas. Le Web a été inventé au CERN par Tim Berners-Lee, et le laboratoire l’a placé dans le domaine public en 1993 : un investissement public dont le monde entier a profité. Les écoles polytechniques fédérales de Zurich et de Lausanne, financées par la Confédération, sont à l’origine de centaines de jeunes entreprises, et l’agence Innosuisse soutient les projets communs entre chercheurs et entreprises. L’industrie pharmaceutique bâloise s’appuie sur la recherche universitaire. Mais Mazzucato noterait aussi la différence : la Suisse finance la recherche et la formation sans fixer de direction ni choisir de secteurs, et laisse les entreprises décider. Ses contradicteurs y voient justement la clé du succès suisse : un État qui forme, finance la science fondamentale et s’abstient de désigner les gagnants. Elle répondrait que la transition énergétique demandera peut-être davantage : une direction claire et des investissements que le marché seul ne fera pas. Le débat porte sur la frontière entre soutenir l’innovation et l’orienter."
    },
    lectures: [
      ["Accessible", "Mariana Mazzucato, L’État entrepreneur, 2013 (traduction française en 2020)."],
      ["Accessible", "Mariana Mazzucato, conférence TED « Government: investor, risk-taker, innovator », 2013."],
      ["Intermédiaire", "Mariana Mazzucato, Mission économie, 2021."],
      ["Intermédiaire", "Deirdre McCloskey et Alberto Mingardi, The Myth of the Entrepreneurial State, 2020, pour la critique."],
      ["Recherche", "Mariana Mazzucato, « Mission-Oriented Research and Innovation in the European Union », Commission européenne, 2018 ; Richard Nelson, The Moon and the Ghetto, 1977."]
    ],
    decouvrir: {
      questions: [
        { q: "Selon Mazzucato, qui a pris le risque de départ des technologies de l’iPhone ?",
          o: ["Le contribuable, par des recherches financées par l’État américain", "L’entreprise qui l’a commercialisé, grâce à ses propres chercheurs", "Les banques privées, par des prêts consentis à l’entreprise", "Les consommateurs, par l’achat des premiers modèles vendus"], c: 0,
          e: "L’entreprise a eu le talent de les assembler." },
        { q: "Quel exemple historique Mazzucato donne-t-elle d’une « mission » publique ?",
          o: ["Aller sur la Lune", "Construire le canal de Suez", "Inventer l’imprimerie", "Créer l’euro"], c: 0,
          e: "Elle propose de fixer à l’action publique de grands objectifs de ce type." }
      ],
      duree: 6,
      html: `
<h3>Une économiste écoutée des gouvernements</h3>
<p>Mariana Mazzucato, née à Rome en 1968, grandit aux États-Unis, où son père est physicien dans un laboratoire public. Professeure à Londres, elle se fait connaître en 2013 avec un livre au titre provocateur, L’État entrepreneur, et conseille depuis de nombreux gouvernements.</p>
${vieMazzucato}
<h3>Ce qu’il y a dans un téléphone</h3>
<p>Son exemple le plus célèbre est l’iPhone. Internet, le GPS, l’écran tactile et l’assistant vocal viennent tous de recherches payées par l’État américain, souvent pour l’armée. L’entreprise a eu le talent de les assembler ; mais le risque de départ a été pris par le contribuable.</p>
${iphone}
<h3>Partager aussi les gains</h3>
<p>Elle en tire deux idées. D’abord, l’État ne fait pas que réparer les marchés : il en crée de nouveaux, en investissant là où le privé n’ose pas. Ensuite, puisque le public prend les risques, il devrait recevoir une part des succès. Elle propose de fixer à l’action publique de grandes « missions », comme autrefois celle d’aller sur la Lune.</p>
<h3>À retenir</h3>
<p>Pour Mazzucato, l’innovation est une œuvre collective, dont l’État est souvent le premier investisseur. Le portrait complet présente ses arguments et les critiques sérieuses qu’ils suscitent.</p>`,
      quiz: [0, 2]
    },
    resumes: {
      vie: "De Rome à Princeton, de New York à Londres.",
      epoque: "Après 2008, l’idée que seul le privé crée de la richesse.",
      pensee: "Sept étapes, de l’incertitude aux missions.",
      livres: "De L’État entrepreneur à The Big Con.",
      cas: "L’iPhone, Tesla et Solyndra, les missions européennes, l’OMS.",
      objections: "Les échecs oubliés, financer n’est pas innover, la Lune et la pauvreté, l’impôt.",
      ecoles: "Schumpeter, Keynes et Minsky, Polanyi, Perez et Freeman, Stiglitz, Hayek.",
      source: "Pas une technologie clé de l’iPhone qui n’ait été financée par l’État.",
      quiz: "Cinq questions corrigées et une question sur le modèle suisse.",
      lectures: "Cinq lectures classées par niveau."
    }
  };
})();
