/* Œconomia — notices longues, lot 1 (a) : demande effective, avantage comparatif */
(function () {
  const T = 'style="fill:var(--ink); font:600 13px Manrope, sans-serif"';
  const S = 'style="fill:var(--ink-soft); font:500 11.5px Manrope, sans-serif"';
  const M = 'style="fill:var(--ink-soft); font:500 11px \'JetBrains Mono\', monospace"';
  const arrow = (id) => `<defs><marker id="${id}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink-soft)"/></marker></defs>`;
  const fig = (h, body, caption, label) => `<figure class="schema"><svg viewBox="0 0 640 ${h}" role="img" aria-label="${label}">${body}</svg><figcaption>${caption}</figcaption></figure>`;
  const box = (x, y, w, h, l1, l2, tone) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" style="fill:var(--${tone}-soft, var(--card)); stroke:var(--${tone})"/><text x="${x + w / 2}" y="${y + h / 2 - (l2 ? 4 : -4)}" text-anchor="middle" ${T}>${l1}</text>${l2 ? `<text x="${x + w / 2}" y="${y + h / 2 + 14}" text-anchor="middle" ${S}>${l2}</text>` : ""}`;

  /* =====================================================================
     1. DEMANDE EFFECTIVE ET MULTIPLICATEUR
     ===================================================================== */
  const circuit = fig(250, `${arrow("d1")}
    ${box(230, 14, 180, 54, "Production", "ce que les entreprises vendent", "note")}
    ${box(450, 100, 170, 54, "Revenus", "salaires, profits", "gold")}
    ${box(230, 186, 180, 54, "Dépense", "consommation + investissement", "plum")}
    ${box(20, 100, 170, 54, "Fuites", "épargne, impôts, importations", "serial")}
    <path d="M410,41 C470,41 535,60 535,98" style="fill:none; stroke:var(--ink-soft); stroke-width:1.5" marker-end="url(#d1)"/>
    <path d="M535,154 C535,190 470,213 412,213" style="fill:none; stroke:var(--ink-soft); stroke-width:1.5" marker-end="url(#d1)"/>
    <path d="M230,213 C150,213 105,190 105,156" style="fill:none; stroke:var(--serial); stroke-width:1.5; stroke-dasharray:5 4" marker-end="url(#d1)"/>
    <path d="M320,186 L320,70" style="fill:none; stroke:var(--ink-soft); stroke-width:1.5" marker-end="url(#d1)"/>
    <text x="330" y="132" ${S}>la dépense de l’un</text><text x="330" y="146" ${S}>est le revenu de l’autre</text>`,
    "Le circuit keynésien. Les entreprises produisent ce qu’elles s’attendent à vendre ; si une partie des revenus sort du circuit (épargne non investie, impôts, importations) sans être compensée, la production et l’emploi se contractent.",
    "Schéma du circuit production, revenus, dépense, avec les fuites");

  const rounds = (() => {
    let s = arrow("d2"), cum = 0; const c = 0.8, base = 230, scale = 1.6;
    for (let i = 0; i < 12; i++) {
      const v = 100 * Math.pow(c, i); cum += v;
      const x = 46 + i * 46, h = v * scale;
      s += `<rect x="${x}" y="${base - h}" width="32" height="${h}" rx="3" style="fill:${i === 0 ? "var(--gold)" : "var(--note)"}"/>`;
      s += `<text x="${x + 16}" y="${base - h - 6}" text-anchor="middle" ${M}>${v < 10 ? v.toFixed(1) : Math.round(v)}</text>`;
      s += `<text x="${x + 16}" y="${base + 16}" text-anchor="middle" ${M}>${i + 1}</text>`;
    }
    s += `<line x1="40" y1="${base}" x2="600" y2="${base}" style="stroke:var(--line)"/>`;
    s += `<text x="40" y="24" ${T}>Une dépense initiale de 100, puis chaque vague = 80 % de la précédente</text>`;
    s += `<text x="40" y="44" ${S}>Après 12 vagues, on a déjà ${Math.round(cum)} ; à la limite, 100 / (1 − 0,8) = 500.</text>`;
    s += `<text x="600" y="${base + 34}" text-anchor="end" ${S}>vagues successives de dépense</text>`;
    return fig(270, s, "Le multiplicateur avec une propension à dépenser de 0,8 (calcul exact). Si un cinquième de chaque revenu supplémentaire est épargné ou importé, une dépense initiale de 100 finit par engendrer 500 de revenu.", "Graphique en barres des vagues successives du multiplicateur");
  })();

  OEC.notices["demande-effective"] = {
    essentiel: [
      "Les entreprises produisent et embauchent en fonction des ventes qu’elles anticipent. Si la dépense totale, celle des ménages, des entreprises, de l’État et de l’étranger, est insuffisante, la production et l’emploi restent bas, même si des usines et des travailleurs sont disponibles.",
      "Pour Keynes, rien ne garantit que cette « demande effective » corresponde au plein emploi, et ni la baisse des salaires ni celle des taux d’intérêt ne suffisent toujours à la relever. Une économie peut donc rester durablement en sous-emploi.",
      "Une dépense supplémentaire, notamment publique, peut alors relancer l’activité au-delà de son montant initial : c’est le multiplicateur. Son ampleur réelle est l’un des sujets les plus débattus de la macroéconomie."
    ],
    sections: [
      { id: "depart", titre: "La question de départ : des usines à l’arrêt et des chômeurs devant leurs portes", html: `
<p>En 1932, aux États-Unis, près d’un quart de la population active est au chômage ; la production industrielle a chuté de près de moitié depuis 1929. Les usines existent, les machines aussi, les ouvriers sont prêts à travailler, souvent pour un salaire plus bas. Les ménages ont des besoins considérables. Pourtant, rien ne se passe. Pour les économistes de l’époque, formés à la <a href="#c-loi-debouches">loi des débouchés</a> de Say, la situation est presque inconcevable : si l’offre crée sa propre demande, comment peut-il y avoir à la fois des biens invendus et des travailleurs sans emploi ?</p>
<p>En 1930, <a href="#eco-keynes">Keynes</a> écrit que l’économie souffre d’une « panne de magnéto » : le moteur est intact, mais l’étincelle ne passe plus. Six ans plus tard, la Théorie générale propose une explication systématique de cette panne. Elle repose sur une idée simple et lourde de conséquences : ce n’est pas la capacité de produire qui limite la production, mais la dépense qui s’adresse à elle.</p>` },
      { id: "raisonnement", titre: "Le raisonnement pas à pas", html: `
<h4>1. La dépense des uns est le revenu des autres</h4>
<p>Tout achat est une vente, et toute vente un revenu : le salaire de l’ouvrier, le profit du patron, le loyer du propriétaire. Le revenu national est donc égal à la dépense nationale. Si les ménages, les entreprises, l’État et les clients étrangers décident ensemble de dépenser moins, les entreprises vendent moins, réduisent leur production et licencient, et les revenus baissent d’autant.</p>
${circuit}
<h4>2. Les ménages ne dépensent pas tout ce qu’ils gagnent</h4>
<p>Keynes observe que lorsque le revenu augmente, la consommation augmente aussi, mais moins vite : une partie du supplément est épargnée. Il appelle <i>propension marginale à consommer</i> la part d’un franc supplémentaire qui est dépensée. Pour que toute la production soit vendue, il faut que l’épargne soit compensée par une autre dépense, essentiellement l’investissement des entreprises.</p>
<h4>3. L’investissement dépend d’un avenir incertain</h4>
<p>Or l’investissement n’est pas décidé par ceux qui épargnent, et il obéit à d’autres motifs. Une entreprise construit une usine si elle pense la rentabiliser sur dix ou vingt ans, ce qui suppose de deviner la demande future, les prix, la technologie, la politique. Ces calculs reposent sur des conventions fragiles et sur ce que Keynes appelle les « esprits animaux », un besoin spontané d’agir plutôt que de ne rien faire. Quand la confiance s’effondre, l’investissement chute brutalement, et l’épargne n’est plus compensée.</p>
<h4>4. L’équilibre de sous-emploi</h4>
<p>La production s’ajuste alors à la baisse jusqu’à ce que l’épargne, qui diminue avec le revenu, retombe au niveau de l’investissement. L’économie trouve un équilibre, mais à un niveau de production où des millions de personnes restent sans emploi alors qu’elles accepteraient de travailler au salaire courant : c’est le chômage involontaire. Rien, dans le fonctionnement spontané du marché, ne ramène nécessairement l’économie au plein emploi.</p>
<h4>5. Pourquoi la baisse des salaires ne suffit pas</h4>
<p>Les économistes classiques répondaient que le chômage signale des salaires trop élevés. Keynes objecte, au chapitre 19 de la Théorie générale, que le salaire est un coût pour chaque entreprise mais un revenu pour l’économie entière. Une baisse générale des salaires réduit la consommation des salariés et fait baisser les prix, ce qui alourdit le poids réel des dettes. Elle peut aggraver la dépression au lieu de la guérir. De même, épargner davantage, vertu pour chacun, peut réduire le revenu de tous : c’est le <a href="#c-paradoxe-epargne">paradoxe de l’épargne</a>.</p>
<h4>6. Le multiplicateur</h4>
<p>Si la dépense manque, une dépense supplémentaire peut relancer le circuit. Supposons que l’État construise une route pour 100 millions. Les entreprises de travaux publics et leurs salariés reçoivent 100 millions de revenus. S’ils en dépensent 80 %, les commerçants et leurs fournisseurs reçoivent 80 millions, qui en dépensent à leur tour 80 %, soit 64 millions, et ainsi de suite. La somme de ces vagues tend vers 100 / (1 − 0,8) = 500 millions. Formalisé par Richard Kahn en 1931, ce <a href="#c-multiplicateur">multiplicateur</a> est d’autant plus élevé que la part dépensée est forte, et d’autant plus faible que les « fuites » (épargne, impôts, importations) sont importantes (<a href="#labo" data-lab="1">le simuler</a>).</p>
${rounds}
<h4>7. Et la politique monétaire ?</h4>
<p>On pourrait baisser les taux d’intérêt pour relancer l’investissement. Keynes ne l’exclut pas, mais il doute de son efficacité en profonde dépression : si les taux sont déjà bas et que la confiance a disparu, personne n’emprunte, et la monnaie supplémentaire est conservée plutôt que dépensée. C’est la <a href="#c-trappe-liquidite">trappe à liquidité</a>. La politique budgétaire devient alors l’instrument principal.</p>` },
      { id: "preuves", titre: "Ce que disent les faits", html: `
<h4>La Seconde Guerre mondiale, une expérience involontaire</h4>
<p>Le New Deal de Roosevelt n’a jamais été une relance massive : l’économiste E. Cary Brown a montré en 1956 que la politique budgétaire des années 1930 avait échoué « non parce qu’elle ne fonctionnait pas, mais parce qu’elle n’avait pas été essayée ». La guerre, en revanche, provoque une dépense publique sans précédent. Aux États-Unis, le chômage passe d’environ 15 % en 1940 à un peu plus de 1 % en 1944. Les capacités de production oisives et les chômeurs sont absorbés en quelques années, comme le prédisait la théorie, même si l’économie de guerre, avec son rationnement et ses contrôles, ne ressemble à aucune situation normale.</p>
<h4>Mesurer le multiplicateur</h4>
<p>Mesurer le multiplicateur est difficile, car l’État dépense souvent davantage précisément quand l’économie va mal. Les chercheurs utilisent donc des variations de dépenses sans lien avec la conjoncture : dépenses militaires décidées pour des raisons géopolitiques, ou différences entre régions d’un même pays. Les estimations varient beaucoup, de moins de 0,5 à plus de 2. Un consensus s’est dégagé sur un point : le multiplicateur est plus élevé en récession, quand les capacités sont inemployées, et surtout quand la banque centrale ne relève pas ses taux, par exemple parce qu’ils sont déjà à zéro. Emi Nakamura et Jón Steinsson ont ainsi estimé en 2014, à partir des dépenses militaires réparties entre les États américains, un multiplicateur régional proche de 1,5.</p>
<h4>L’erreur de prévision de 2010</h4>
<p>En 2013, Olivier Blanchard, alors économiste en chef du FMI, et Daniel Leigh comparent les prévisions de croissance faites en 2010 pour les pays européens avec la réalité. Ils constatent que les pays qui ont le plus réduit leurs dépenses ont connu une récession bien plus forte que prévu. Les prévisions supposaient un multiplicateur d’environ 0,5 ; le multiplicateur effectif se situait plutôt entre 0,9 et 1,7. C’est l’une des confirmations empiriques récentes les plus nettes de l’intuition keynésienne en période de crise.</p>` }
    ],
    cas: [
      { titre: "Le Royaume-Uni et la Suède dans les années 1930", html: `
<p>Après le krach, le Royaume-Uni applique d’abord une politique orthodoxe : en 1931, le rapport May recommande de fortes réductions des dépenses publiques, dont les allocations chômage. La même année pourtant, le pays abandonne l’étalon-or, ce qui lui permet de baisser ses taux et de déprécier la livre ; la reprise s’amorce, portée notamment par la construction de logements. En Suède, les économistes de l’école de Stockholm, Gunnar Myrdal et Bertil Ohlin, défendent dès le début des années 1930 l’idée de déficits budgétaires en période de crise ; le gouvernement social-démocrate de 1932 lance des travaux publics. Ces expériences, menées avant ou en même temps que la Théorie générale, montrent que les idées keynésiennes étaient « dans l’air ». L’économiste polonais Michał Kalecki avait d’ailleurs formulé le principe de la demande effective dès 1933.</p>` },
      { titre: "L’austérité européenne de 2010-2013", html: `
<p>Après la crise de 2008, les déficits publics européens explosent. À partir de 2010, sous la pression des marchés et des règles budgétaires, de nombreux pays réduisent simultanément leurs dépenses et augmentent les impôts. L’idée d’une « austérité expansionniste », selon laquelle la réduction des déficits restaurerait la confiance et relancerait l’investissement, est alors influente. La zone euro retombe en récession en 2012. En Grèce, le PIB recule d’environ un quart entre 2008 et 2013, et le chômage dépasse 25 %. Le ratio de dette publique rapportée au PIB augmente malgré les coupes, parce que le PIB baisse plus vite que la dette : une illustration, à l’échelle d’un pays, du paradoxe de l’épargne.</p>` },
      { titre: "La pandémie de 2020 et ses suites", html: `
<p>En 2020, les confinements provoquent la récession la plus brutale depuis la guerre. Les gouvernements réagissent par des plans massifs, dont la loi CARES de 2,2 billions de dollars aux États-Unis, et par le chômage partiel en Europe, dont le système suisse des réductions de l’horaire de travail. La reprise est beaucoup plus rapide qu’après 2008, et le chômage revient à son niveau d’avant crise en deux ans environ. Mais en 2021, un nouveau plan américain de 1900 milliards s’ajoute alors que l’économie se redresse déjà. L’inflation qui suit relance le débat (<a href="#controverses" data-debat="summers-krugman">voir Summers contre Krugman</a>) : une demande excessive face à une offre contrainte produit des hausses de prix plutôt que des emplois, ce que Keynes lui-même reconnaissait dans <i>How to Pay for the War</i> (1940).</p>` }
    ],
    objections: `
<h4>1. L’éviction</h4>
<p>Si l’État emprunte pour dépenser, il peut faire monter les taux d’intérêt et décourager l’investissement privé : la dépense publique remplacerait la dépense privée au lieu de s’y ajouter. L’argument est fort au plein emploi, beaucoup plus faible en récession profonde, quand l’épargne abonde et que les taux sont bas.</p>
<h4>2. L’équivalence ricardienne</h4>
<p>Robert Barro (1974) soutient que des ménages prévoyants épargnent la baisse d’impôt ou la dépense financée par emprunt, en prévision des impôts futurs nécessaires pour rembourser. L’effet sur la demande serait alors nul. Les études trouvent en général une <a href="#c-equivalence-ricardienne">équivalence</a> partielle : une partie des ménages épargne, une autre, souvent contrainte financièrement, dépense.</p>
<h4>3. Les anticipations et la critique de Lucas</h4>
<p>Pour la nouvelle économie classique, les agents anticipent les politiques ; des relances répétées et prévisibles perdent leur efficacité et nourrissent l’inflation. <a href="#eco-lucas">Lucas</a> a aussi reproché aux modèles keynésiens de reposer sur des relations instables.</p>
<h4>4. La banque centrale suffit</h4>
<p>Les monétaristes, et aujourd’hui de nombreux macroéconomistes, jugent qu’en temps normal une banque centrale indépendante est mieux placée que le budget pour stabiliser la demande : elle agit vite, sans débat parlementaire, et peut neutraliser une relance budgétaire qu’elle juge inflationniste. Le débat porte surtout sur les situations où les taux sont à zéro.</p>
<h4>5. La dette et l’offre</h4>
<p>Enfin, une relance ne crée pas de capacités de production : si l’économie est déjà proche du plein emploi, elle produit de l’inflation. Et la dette accumulée devra être financée. Keynes lui-même plaidait pour des budgets excédentaires en période de prospérité, une recommandation rarement suivie.</p>`,
    ecoles: `
<p><b><a href="#eco-malthus">Malthus</a></b> avait défendu, contre Ricardo, la possibilité d’une demande effective insuffisante ; Keynes en fait son précurseur dans un essai de 1933.</p>
<p><b><a href="#eco-say">Say</a> et <a href="#eco-ricardo">Ricardo</a></b> représentent la position que Keynes combat : à long terme, la production crée ses propres débouchés.</p>
<p><b><a href="#eco-hayek">Hayek</a></b> voit dans la relance un moyen d’entretenir les erreurs d’investissement du boom (<a href="#controverses" data-debat="keynes-hayek">voir leur débat</a>).</p>
<p><b><a href="#eco-friedman">Friedman</a></b> attribue la Grande Dépression à la contraction monétaire plutôt qu’à l’effondrement de la demande autonome, et préfère une règle monétaire.</p>
<p><b><a href="#eco-minsky">Minsky</a></b> et les post-keynésiens insistent sur la dette et la finance, que la synthèse keynésienne a négligées.</p>
<p><b>Les nouveaux keynésiens</b> (Mankiw, Blanchard) ont reformulé la demande effective avec des prix rigides et des anticipations rationnelles : c’est le cadre utilisé par les banques centrales.</p>`,
    source: {
      titre: "J. M. Keynes, Théorie générale de l’emploi, de l’intérêt et de la monnaie, 1936, chapitre 24",
      texte: "Les idées des économistes et des philosophes politiques, qu’elles soient justes ou fausses, sont plus puissantes qu’on ne le pense généralement. À vrai dire, le monde est presque exclusivement mené par elles. Les hommes d’action qui se croient parfaitement affranchis des influences doctrinales sont d’ordinaire les esclaves de quelque économiste défunt.",
      notes: `
<p><b>Le contexte.</b> Ce sont les dernières pages de la Théorie générale. Après trois cents pages techniques, Keynes s’interroge sur la portée de son livre : peut-il changer les politiques ?</p>
<p><b>Ce que le passage dit de la demande effective.</b> Pour Keynes, le chômage des années 1930 n’est pas une fatalité naturelle, mais le produit d’idées fausses : la conviction que les marchés reviennent seuls au plein emploi et que l’équilibre budgétaire est toujours sain. Changer les idées, c’est changer les politiques.</p>
<p><b>L’ironie de l’histoire.</b> La formule s’est retournée contre son auteur : dans les années 1970, des gouvernants appliquaient un keynésianisme simplifié devenu à son tour l’idée d’« un économiste défunt », au moment où la stagflation exigeait d’autres réponses.</p>`
    },
    quiz: [
      { q: "Selon Keynes, qu’est-ce qui détermine d’abord le niveau de production d’une économie ?",
        o: ["Le stock de machines disponibles", "La dépense anticipée par les entreprises", "Le niveau des salaires", "La quantité de monnaie"], c: 1,
        e: "Les entreprises produisent ce qu’elles pensent vendre. Les capacités de production fixent un plafond, mais en crise, c’est la demande effective qui détermine la production réelle." },
      { q: "Pourquoi une baisse générale des salaires peut-elle aggraver une dépression ?",
        o: ["Parce qu’elle augmente les coûts des entreprises", "Parce qu’elle réduit les revenus, donc la consommation, et alourdit le poids réel des dettes", "Parce qu’elle provoque de l’inflation", "Parce qu’elle pousse les entreprises à remplacer les machines par des travailleurs"], c: 1,
        e: "Le salaire est un coût pour chaque entreprise, mais un revenu pour l’ensemble de l’économie. La baisse générale réduit la demande et, en faisant baisser les prix, augmente la charge réelle des dettes." },
      { q: "Avec une propension à dépenser de 0,75, quel est le multiplicateur simple ?",
        o: ["0,75", "1,75", "4", "7,5"], c: 2,
        e: "Multiplicateur = 1 / (1 − 0,75) = 1 / 0,25 = 4. Une dépense initiale de 100 engendre au total 400 de revenu." },
      { q: "Dans quelle situation la plupart des économistes jugent-ils le multiplicateur budgétaire le plus élevé ?",
        o: ["Au plein emploi, avec une inflation forte", "En récession, avec des taux d’intérêt déjà à zéro", "Quand l’économie est très ouverte aux importations", "Quand les ménages anticipent des hausses d’impôts"], c: 1,
        e: "Quand des capacités sont inemployées et que la banque centrale ne compense pas la relance par une hausse des taux, la dépense publique n’évince pas la dépense privée." },
      { q: "Quelle observation Blanchard et Leigh ont-ils faite en 2013 ?",
        o: ["L’austérité avait relancé la croissance européenne", "Les multiplicateurs effectifs étaient nettement supérieurs à ceux supposés dans les prévisions", "Le multiplicateur était négatif en Grèce", "La politique monétaire avait été trop restrictive en 2010"], c: 1,
        e: "Les prévisions supposaient un multiplicateur d’environ 0,5 ; la réalité correspondait plutôt à 0,9 à 1,7. Les pays qui ont le plus réduit leurs dépenses ont donc connu des récessions plus fortes que prévu." }
    ],
    transfert: { q: "Pendant une récession, les ménages d’un pays décident tous d’épargner davantage par précaution. Que prévoit le raisonnement de Keynes ?",
      o: ["Les ventes baissent, les entreprises produisent et embauchent moins, et les revenus diminuent", "Les taux baissent et l’investissement compense aussitôt la baisse de la consommation", "La production augmente grâce à l’épargne", "Rien ne change"], c: 0,
      e: "La dépense des uns est le revenu des autres : moins de dépense, c’est moins de revenu." },
    ouverte: {
      q: "La Suisse applique depuis 2003 un « frein à l’endettement » qui oblige la Confédération à équilibrer son budget sur l’ensemble d’un cycle conjoncturel. Est-ce compatible avec les idées de Keynes ?",
      r: "En partie. Le mécanisme autorise des déficits en période de récession et exige des excédents en période de haute conjoncture : il laisse donc jouer les « stabilisateurs automatiques », ce qui est conforme à l’idée keynésienne d’une politique contracyclique, et même à la recommandation de Keynes d’excédents en période de prospérité. En revanche, il limite les plans de relance discrétionnaires de grande ampleur, que Keynes jugeait nécessaires dans les crises profondes. Pendant la pandémie, la Suisse a d’ailleurs utilisé une procédure de dépenses extraordinaires, prévue par la règle, pour financer le chômage partiel. Un keynésien soulignera aussi que l’économie suisse, très ouverte, a un multiplicateur faible, puisqu’une grande partie de la dépense supplémentaire part en importations."
    },
    lectures: [
      ["Accessible", "Bernard Maris, Keynes ou l’économiste citoyen, 1999. Une introduction vivante à la pensée et à la personnalité de Keynes."],
      ["Accessible", "Robert Skidelsky, Keynes: The Return of the Master, 2009. Écrit après la crise de 2008, il explique pourquoi Keynes redevient d’actualité."],
      ["Intermédiaire", "J. M. Keynes, Théorie générale (1936), chapitres 1 à 3 et 12. Le chapitre 12 sur les anticipations est le plus accessible et le plus brillant."],
      ["Intermédiaire", "Olivier Blanchard, Macroéconomie (manuel), chapitres sur le marché des biens et le multiplicateur."],
      ["Recherche", "Olivier Blanchard et Daniel Leigh, « Growth Forecast Errors and Fiscal Multipliers », American Economic Review, 2013 ; Valerie Ramey, « Ten Years After the Financial Crisis: What Have We Learned from the Renaissance in Fiscal Research? », Journal of Economic Perspectives, 2019."]
    ],
    decouvrir: {
      questions: [
        { q: "Selon Keynes, pourquoi des usines peuvent-elles rester vides alors que des chômeurs cherchent du travail ?",
          o: ["Parce que les entreprises ne produisent que ce qu’elles pensent pouvoir vendre", "Parce que les machines sont usées", "Parce que les chômeurs refusent de travailler", "Parce que les salaires sont trop bas"], c: 0,
          e: "Si personne n’achète, personne ne produit, et personne n’embauche." },
        { q: "Que veut montrer l’exemple des 100 millions dépensés par l’État pour des routes ?",
          o: ["Que la dépense publique peut créer au total plus de richesse que la somme de départ", "Que les routes coûtent toujours trop cher", "Que l’État doit rembourser aussitôt", "Que les salaires doivent baisser"], c: 0,
          e: "Les salaires versés sont en partie dépensés, puis redépensés : c’est le multiplicateur." }
      ],
      duree: 5,
      html: `
<h3>Des usines vides et des chômeurs</h3>
<p>En 1932, un quart des Américains qui veulent travailler sont au chômage, alors que les usines et les machines sont là. Comment est-ce possible ? Pour <a href="#eco-keynes">John Maynard Keynes</a>, la réponse tient en une idée : les entreprises ne produisent que ce qu’elles pensent pouvoir vendre. Si personne n’achète, personne ne produit, et personne n’embauche.</p>
<h3>La dépense des uns, le revenu des autres</h3>
<p>Chaque achat fait vivre quelqu’un : le boulanger, ses employés, son fournisseur de farine. Quand les ménages et les entreprises ont peur de l’avenir, ils dépensent et investissent moins. Les ventes baissent, les entreprises licencient, les revenus diminuent, et la peur se renforce. L’économie peut ainsi rester bloquée longtemps dans le chômage : c’est ce que Keynes appelle un manque de <b>demande effective</b>.</p>
<h3>Le multiplicateur</h3>
<p>Pour sortir de ce blocage, Keynes propose que l’État dépense, par exemple en construisant des routes ou des écoles. Les 100 millions versés aux entreprises deviennent des salaires ; les salariés en dépensent une partie chez des commerçants, qui en dépensent à leur tour une partie, et ainsi de suite. Au total, la richesse créée peut dépasser la dépense de départ : c’est le <b>multiplicateur</b>.</p>
<h3>À retenir, et à discuter</h3>
<p>Cette idée a inspiré les politiques de plein emploi d’après-guerre, puis les plans de relance de 2008 et 2020. Elle est discutée : la dépense publique doit être financée, elle peut prendre la place de la dépense privée, et si l’économie tourne déjà à plein, elle fait surtout monter les prix, comme en 2021-2022. La notice complète présente les preuves et les débats.</p>`,
      quiz: [0, 2]
    },
    resumes: {
      depart: "1932 : des usines prêtes à produire et des millions de chômeurs.",
      raisonnement: "Sept étapes, du circuit des revenus au multiplicateur et à la trappe à liquidité.",
      preuves: "La guerre comme expérience, la mesure du multiplicateur, l’erreur de prévision de 2010.",
      cas: "Les années 1930 au Royaume-Uni et en Suède, l’austérité européenne, la pandémie.",
      objections: "Éviction, équivalence ricardienne, anticipations, banque centrale, dette et offre.",
      ecoles: "Malthus, Say, Hayek, Friedman, Minsky, les nouveaux keynésiens.",
      source: "Keynes sur le pouvoir des idées et les « économistes défunts ».",
      quiz: "Six questions corrigées et une question sur le frein à l’endettement suisse.",
      lectures: "Cinq lectures classées par niveau."
    }
  };

  /* =====================================================================
     2. AVANTAGE COMPARATIF
     ===================================================================== */
  const table = fig(244, `
    <text x="20" y="30" ${T}>Heures de travail nécessaires pour produire une unité (chiffres de Ricardo, 1817)</text>
    <rect x="20" y="46" width="600" height="34" rx="6" style="fill:var(--paper-2)"/>
    <text x="40" y="68" ${T}>Pays</text><text x="250" y="68" text-anchor="middle" ${T}>Drap</text><text x="390" y="68" text-anchor="middle" ${T}>Vin</text><text x="540" y="68" text-anchor="middle" ${T}>1 drap coûte…</text>
    <text x="40" y="112" ${T}>Angleterre</text><text x="250" y="112" text-anchor="middle" ${M}>100 h</text><text x="390" y="112" text-anchor="middle" ${M}>120 h</text><text x="540" y="112" text-anchor="middle" style="fill:var(--note); font:700 12.5px 'JetBrains Mono', monospace">0,83 vin</text>
    <line x1="20" y1="128" x2="620" y2="128" style="stroke:var(--line)"/>
    <text x="40" y="156" ${T}>Portugal</text><text x="250" y="156" text-anchor="middle" ${M}>90 h</text><text x="390" y="156" text-anchor="middle" ${M}>80 h</text><text x="540" y="156" text-anchor="middle" style="fill:var(--plum); font:700 12.5px 'JetBrains Mono', monospace">1,125 vin</text>
    <text x="20" y="196" ${S}>Le Portugal est plus productif dans les deux biens (avantage absolu),</text><text x="20" y="212" ${S}>mais un drap lui coûte plus de vin qu’à l’Angleterre.</text>
    <text x="20" y="232" ${S}>L’Angleterre a donc un avantage comparatif dans le drap, le Portugal dans le vin.</text>`,
    "Le tableau de Ricardo. La dernière colonne donne le coût d’opportunité d’un drap, mesuré en vin auquel il faut renoncer.",
    "Tableau des heures de travail de Ricardo et des coûts d’opportunité");

  const gains = fig(250, (() => {
    const base = 200, sc = 60, bar = (x, v, col, lbl) => `<rect x="${x}" y="${base - v * sc}" width="56" height="${v * sc}" rx="4" style="fill:${col}"/><text x="${x + 28}" y="${base - v * sc - 6}" text-anchor="middle" ${M}>${String(v).replace(".", ",")}</text><text x="${x + 28}" y="${base + 18}" text-anchor="middle" ${S}>${lbl}</text>`;
    return `<text x="20" y="26" ${T}>Production mondiale avec le même travail (220 h en Angleterre, 170 h au Portugal)</text>
      <text x="150" y="46" text-anchor="middle" ${S}>Sans échange</text><text x="460" y="46" text-anchor="middle" ${S}>Avec spécialisation complète</text>
      ${bar(90, 2, "var(--gold)", "drap")}${bar(160, 2, "var(--plum)", "vin")}
      ${bar(400, 2.2, "var(--gold)", "drap")}${bar(470, 2.125, "var(--plum)", "vin")}
      <line x1="40" y1="${base}" x2="600" y2="${base}" style="stroke:var(--line)"/>
      <text x="320" y="240" text-anchor="middle" ${S}>Gain : 0,2 drap et 0,125 vin de plus, sans une heure de travail supplémentaire.</text>`;
  })(), "Calcul exact à partir des chiffres de Ricardo : l’Angleterre consacre ses 220 heures au drap (2,2 unités), le Portugal ses 170 heures au vin (2,125 unités).", "Graphique comparant la production sans échange et avec spécialisation");

  OEC.notices["avantage-comparatif"] = {
    essentiel: [
      "Un pays, une entreprise ou une personne gagne à se spécialiser dans ce qu’il fait relativement le mieux, même s’il est moins efficace que ses partenaires en tout. Ce qui compte n’est pas la productivité absolue, mais le coût d’opportunité : ce à quoi on renonce pour produire.",
      "Grâce à la spécialisation et à l’échange, la production totale augmente sans travail supplémentaire, et chacun peut consommer davantage qu’en produisant tout lui-même.",
      "Le gain est global, pas forcément individuel : l’ouverture fait des perdants dans les secteurs concurrencés, et le modèle repose sur des hypothèses (plein emploi, mobilité des travailleurs entre secteurs) qui ne sont pas toujours réunies."
    ],
    sections: [
      { id: "depart", titre: "La question de départ : pourquoi échanger avec plus fort que soi ?", html: `
<p>Une avocate tape à la machine plus vite que sa secrétaire. Doit-elle taper elle-même ses lettres ? Évidemment non : chaque heure passée à taper est une heure qu’elle ne facture pas à un client, bien mieux payée. Elle a un avantage absolu dans les deux activités, mais un avantage comparatif dans le conseil juridique. Sa secrétaire, moins rapide en tout, a un avantage comparatif dans la frappe.</p>
<p>Transposée aux nations, cette évidence devient l’une des idées les plus contre-intuitives de l’économie. Elle répond à une crainte ancienne et toujours vivante : un pays moins productif que ses voisins ne peut-il que perdre à l’ouverture ? Et un pays très productif n’a-t-il pas intérêt à tout produire lui-même ? <a href="#eco-ricardo">David Ricardo</a> répond non aux deux questions en 1817. Paul <a href="#eco-samuelson">Samuelson</a>, mis au défi de citer une proposition des sciences sociales à la fois vraie et non triviale, citait l’avantage comparatif ; Paul <a href="#eco-krugman">Krugman</a> l’appelait en 1996 « l’idée difficile de Ricardo », parce que même des esprits brillants peinent à l’admettre.</p>` },
      { id: "raisonnement", titre: "Le raisonnement pas à pas", html: `
<h4>1. De l’avantage absolu à l’avantage comparatif</h4>
<p><a href="#eco-smith">Adam Smith</a> justifiait le commerce par l’avantage absolu : l’Écosse pourrait produire du vin en serre, mais à un coût trente fois supérieur à celui de la France ; mieux vaut acheter le vin et vendre autre chose. L’argument ne dit rien du cas où un pays est meilleur en tout. Ricardo, au chapitre 7 de ses Principes, traite précisément ce cas.</p>
${table}
<h4>2. Le coût d’opportunité</h4>
<p>Pour l’Angleterre, produire un drap demande 100 heures, qui auraient permis de produire 100/120 = 0,83 tonneau de vin. Pour le Portugal, un drap demande 90 heures, qui auraient produit 90/80 = 1,125 tonneau. Le drap coûte donc moins cher en vin en Angleterre qu’au Portugal : c’est le <a href="#c-cout-opportunite">coût d’opportunité</a>. Symétriquement, le vin coûte moins cher en drap au Portugal. Chaque pays a un avantage comparatif dans un bien, quelle que soit sa productivité absolue.</p>
<h4>3. Les gains de la spécialisation</h4>
<p>Si chacun se spécialise dans son avantage comparatif, le monde produit davantage avec le même travail. Il suffit ensuite d’échanger à un prix compris entre les deux coûts d’opportunité, par exemple un drap contre un tonneau de vin : l’Angleterre obtient alors son vin moins cher qu’en le produisant (1 au lieu de 1,2 drap) et le Portugal son drap moins cher (1 tonneau au lieu de 1,125). Les deux y gagnent (<a href="#labo" data-lab="2">le vérifier avec le simulateur</a>).</p>
${gains}
<h4>4. Qui récupère le gain ?</h4>
<p>Le partage du gain dépend du prix d’échange, les « termes de l’échange ». <a href="#eco-mill">John Stuart Mill</a> a montré qu’ils dépendent de l’intensité de la demande de chaque pays pour le bien de l’autre : le pays dont le produit est très demandé à l’étranger capte une plus grande part du gain. Un petit pays qui commerce avec un grand bénéficie souvent davantage, car les prix mondiaux sont proches des coûts du grand partenaire.</p>
<h4>5. Les hypothèses</h4>
<p>Le raisonnement suppose que le travail se déplace librement d’un secteur à l’autre à l’intérieur du pays, mais pas entre pays ; que le plein emploi est assuré ; que les coûts sont constants ; que les transports sont gratuits. Ricardo supposait aussi que les capitaux restent chez eux, par attachement des capitalistes à leur pays. Chacune de ces hypothèses a donné lieu à des prolongements et à des critiques.</p>
<h4>6. D’où viennent les avantages comparatifs ?</h4>
<p>Chez Ricardo, ils viennent des différences de productivité, que la théorie ne cherche pas à expliquer. Au XXe siècle, Eli Heckscher et Bertil Ohlin les rattachent aux dotations en facteurs : un pays riche en capital exporte des biens qui en utilisent beaucoup, un pays riche en main-d’œuvre des biens intensifs en travail. Les théories plus récentes ajoutent l’histoire, les économies d’échelle, la qualité des institutions ou la géographie.</p>` },
      { id: "preuves", titre: "Ce que disent les faits", html: `
<h4>Le Japon de 1859, une expérience naturelle</h4>
<p>Pendant plus de deux siècles, le Japon des Tokugawa reste presque fermé au commerce extérieur. En 1859, sous la pression américaine, il s’ouvre brutalement. Daniel Bernhofen et John Brown (2004) étudient cette expérience naturelle : les prix japonais d’avant l’ouverture révèlent les coûts relatifs d’autarcie, et l’on peut vérifier si le Japon exporte bien les biens relativement bon marché chez lui. C’est le cas : il exporte la soie et le thé, et importe des cotonnades et des lainages. Ils estiment le gain à l’ouverture à quelques pourcents du revenu national, au plus de l’ordre de 8 à 9 %.</p>
<h4>Le test de l’agriculture mondiale</h4>
<p>Arnaud Costinot et Dave Donaldson (2012) utilisent des données agronomiques de la FAO, qui estiment le rendement potentiel de chaque culture sur chaque parcelle du monde. Ils peuvent ainsi mesurer directement les productivités relatives, ce qui est en général impossible, et montrent que les pays produisent davantage les cultures pour lesquelles ils sont relativement plus productifs, comme le prédit Ricardo.</p>
<h4>Le paradoxe de Leontief</h4>
<p>En 1953, Wassily Leontief teste la théorie de Heckscher-Ohlin sur les États-Unis, le pays le plus riche en capital du monde. Surprise : leurs exportations utilisent relativement plus de travail que leurs importations. Ce « paradoxe » a été en partie résolu en tenant compte de la qualification du travail : les États-Unis exportent des biens intensifs en travail très qualifié. Il a montré que les déterminants des avantages comparatifs sont plus subtils que de simples quantités de capital et de travail.</p>` }
    ],
    cas: [
      { titre: "Le drap et le vin, du traité de Methuen à Friedrich List", html: `
<p>L’exemple de Ricardo n’est pas abstrait. Par le traité de Methuen (1703), le Portugal ouvre son marché aux lainages anglais, et l’Angleterre accorde au vin portugais un droit de douane inférieur à celui du vin français. Le porto devient la boisson des Anglais. Mais au XIXe siècle, les critiques du libre-échange, comme l’Allemand Friedrich List, retournent l’exemple : le Portugal serait resté un pays agricole, tandis que l’Angleterre s’industrialisait. Pour List, l’avantage comparatif fige les spécialisations du moment ; un pays peut avoir intérêt à protéger temporairement ses industries naissantes pour créer de nouveaux avantages. Les historiens discutent encore du rôle réel du traité dans le retard portugais.</p>` },
      { titre: "La Suisse, montres, médicaments et agriculture protégée", html: `
<p>La Suisse, sans matières premières ni accès à la mer, illustre la logique de l’avantage comparatif fondé sur les compétences. Ses exportations sont dominées par la chimie et la pharmacie, les machines, l’horlogerie et les instruments de précision : des biens qui valent beaucoup par kilo et incorporent un travail très qualifié. Elle importe la plupart de ses biens de consommation courante et de son énergie.</p>
<p>L’agriculture suisse, en revanche, est fortement protégée par des droits de douane et des paiements directs, pour des raisons d’entretien des paysages, de sécurité d’approvisionnement et de politique régionale. Selon la logique de Ricardo, cela a un coût : les consommateurs paient la viande ou le fromage plus cher, et des ressources restent dans un secteur où le pays n’a pas d’avantage comparatif. Les défenseurs de cette politique répondent que l’agriculture produit des biens que le marché ne rémunère pas.</p>` },
      { titre: "Le « choc chinois »", html: `
<p>L’entrée de la Chine dans l’Organisation mondiale du commerce, en 2001, provoque une hausse spectaculaire de ses exportations de biens manufacturés. Pour les consommateurs du monde entier, les prix baissent. Mais David Autor, David Dorn et Gordon Hanson (2013) montrent que les régions américaines spécialisées dans les industries concurrencées, meubles, textiles, jouets, ont subi des pertes d’emplois massives et durables : les travailleurs licenciés n’ont pas retrouvé facilement un emploi ailleurs, ni déménagé. L’hypothèse de Ricardo selon laquelle le travail passe sans coût d’un secteur à l’autre s’est révélée bien trop optimiste. Le gain global n’a pas été redistribué aux perdants.</p>` }
    ],
    objections: `
<h4>1. Le gain est collectif, les pertes sont individuelles</h4>
<p>Le théorème de Stolper-Samuelson (1941) montre que l’ouverture fait baisser la rémunération du facteur relativement rare. Dans un pays riche, il s’agit souvent du travail peu qualifié. Le pays gagne, mais certains de ses habitants perdent, sauf si les gagnants les indemnisent, ce qui arrive rarement.</p>
<h4>2. Les coûts d’ajustement</h4>
<p>Le passage d’un secteur à l’autre prend du temps, détruit des compétences et des communautés. Le « choc chinois » montre que ces coûts peuvent durer plus d’une décennie.</p>
<h4>3. Les avantages se construisent</h4>
<p>Les avantages comparatifs ne sont pas des dons de la nature : la Corée du Sud n’avait aucun avantage apparent dans les semi-conducteurs en 1970. Les partisans de la politique industrielle, de Hamilton et List à Dani Rodrik, soutiennent qu’un pays peut créer de nouveaux avantages par l’investissement, l’éducation et une protection temporaire.</p>
<h4>4. Rendements croissants et concentration</h4>
<p>Quand les coûts baissent avec la taille, la spécialisation dépend de l’histoire et peut être verrouillée par le premier arrivé (<a href="#c-rendements-croissants">rendements croissants</a>). Le commerce peut alors renforcer des avantages acquis plutôt que refléter des différences naturelles.</p>
<h4>5. Le progrès du partenaire</h4>
<p>En 2004, Samuelson lui-même rappelle qu’un pays peut perdre si son partenaire devient plus productif précisément dans le secteur où lui-même exportait : ses termes de l’échange se détériorent. L’avantage comparatif garantit un gain par rapport à l’autarcie, pas une amélioration continue.</p>
<h4>6. Dépendance et sécurité</h4>
<p>La pandémie de 2020 (masques, médicaments) et les tensions autour des semi-conducteurs ont rappelé qu’une spécialisation poussée crée des dépendances. Le modèle de Ricardo ne tient pas compte du risque de rupture des approvisionnements.</p>`,
    ecoles: `
<p><b><a href="#eco-mun">Les mercantilistes</a></b> voyaient le commerce comme un jeu à somme nulle ; Ricardo montre qu’il est à somme positive.</p>
<p><b><a href="#eco-smith">Smith</a></b> fonde le commerce sur l’avantage absolu et la division du travail ; Ricardo généralise.</p>
<p><b><a href="#eco-mill">Mill</a></b> explique comment se partagent les gains et admet la protection des industries naissantes.</p>
<p><b>Les structuralistes</b> Raúl Prebisch et Hans Singer (1950) soutiennent que les prix des matières premières tendent à baisser relativement à ceux des produits manufacturés : se spécialiser dans les matières premières condamnerait au sous-développement.</p>
<p><b>Les marxistes</b>, comme Arghiri Emmanuel dans L’Échange inégal (1969), voient dans le commerce entre pays aux salaires très différents un transfert de valeur du Sud vers le Nord.</p>
<p><b><a href="#eco-krugman">Krugman</a></b> et la nouvelle théorie du commerce ajoutent les rendements croissants, qui expliquent l’échange entre pays semblables.</p>`,
    source: {
      titre: "David Ricardo, Principes de l’économie politique et de l’impôt, 1817, chapitre 7",
      texte: "Dans un système de commerce parfaitement libre, chaque pays consacre naturellement son capital et son travail aux emplois qui lui sont le plus avantageux. Cette poursuite de l’avantage individuel est admirablement liée au bien universel de l’ensemble.",
      notes: `
<p><b>Le contexte.</b> Ricardo écrit au moment du débat sur les Corn Laws, qui protègent les céréaliers anglais. Son chapitre sur le commerce extérieur sert un argument politique : l’Angleterre doit importer son blé et se spécialiser dans les manufactures.</p>
<p><b>L’écho de Smith.</b> La seconde phrase rappelle la « main invisible » : l’intérêt de chacun sert, sans qu’il le veuille, l’intérêt de tous. Mais Ricardo parle de nations, et suppose que leur avantage est celui de tous leurs habitants.</p>
<p><b>Ce que la phrase tait.</b> « Admirablement liée au bien universel » : les auteurs ultérieurs, de Stolper et Samuelson à Autor, ont montré que ce lien n’est vrai qu’en moyenne. Le gain de la nation n’est pas celui de chaque travailleur.</p>`
    },
    quiz: [
      { q: "Dans l’exemple de Ricardo, pourquoi l’Angleterre doit-elle se spécialiser dans le drap alors que le Portugal le produit avec moins de travail ?",
        o: ["Parce que l’Angleterre a un avantage absolu dans le drap", "Parce qu’un drap coûte moins de vin en Angleterre qu’au Portugal", "Parce que le Portugal manque de main-d’œuvre", "Parce que le drap anglais se vend plus cher à l’étranger que le vin"], c: 1,
        e: "Le drap coûte 0,83 tonneau de vin en Angleterre contre 1,125 au Portugal. C’est le coût d’opportunité, et non la productivité absolue, qui détermine la spécialisation." },
      { q: "Un pays A produit une voiture en 10 heures et un ordinateur en 5 heures ; un pays B, une voiture en 20 heures et un ordinateur en 8 heures. Qui a l’avantage comparatif dans les ordinateurs ?",
        o: ["A, car il est plus rapide pour les deux", "B, car un ordinateur lui coûte 0,4 voiture contre 0,5 pour A", "Personne, les coûts sont proportionnels", "A, car un ordinateur lui coûte 0,4 voiture"], c: 1,
        e: "Pour A, un ordinateur coûte 5/10 = 0,5 voiture. Pour B, 8/20 = 0,4 voiture. B a l’avantage comparatif dans les ordinateurs, A dans les voitures." },
      { q: "Que montre le théorème de Stolper-Samuelson ?",
        o: ["Que le commerce profite toujours à tous", "Que l’ouverture fait baisser la rémunération du facteur relativement rare", "Que les pays pauvres perdent toujours au commerce", "Que les droits de douane sont toujours inefficaces"], c: 1,
        e: "Le pays gagne globalement, mais les détenteurs du facteur rare (souvent le travail peu qualifié dans les pays riches) voient leur rémunération baisser." },
      { q: "Pourquoi l’ouverture du Japon en 1859 est-elle un test précieux ?",
        o: ["Parce que le Japon avait les mêmes coûts relatifs que ses partenaires", "Parce que les prix d’autarcie, observables avant l’ouverture, révèlent les coûts relatifs", "Parce que le Japon était déjà spécialisé dans l’industrie", "Parce que le commerce s’y est fait par troc"], c: 1,
        e: "Les coûts relatifs d’autarcie sont normalement inobservables. Au Japon, on les connaît grâce aux prix d’avant 1859, et l’on vérifie que le pays exporte les biens relativement bon marché chez lui." },
      { q: "Quelle hypothèse de Ricardo le « choc chinois » a-t-il le plus remise en cause ?",
        o: ["La gratuité des transports", "Le passage sans coût des travailleurs d’un secteur à l’autre", "La concurrence parfaite sur tous les marchés", "L’égalité des salaires entre pays"], c: 1,
        e: "Les travailleurs licenciés des secteurs concurrencés n’ont pas retrouvé facilement d’emploi ailleurs, ni déménagé : l’ajustement a été lent et coûteux." }
    ],
    transfert: { q: "Le Vietnam produit des chaussures et des puces électroniques moins efficacement que la Corée du Sud, mais son retard est bien plus faible dans les chaussures. Que conseille la théorie de Ricardo ?",
      o: ["Le Vietnam se spécialise dans les chaussures, la Corée dans les puces, et ils échangent", "La Corée produit tout elle-même", "Le Vietnam produit tout lui-même", "Aucun échange n’est avantageux"], c: 0,
      e: "Chaque pays se spécialise là où son coût d’opportunité est le plus faible, même s’il est moins productif partout." },
    ouverte: {
      q: "Faut-il que la Suisse continue de protéger fortement son agriculture, au regard de la théorie de l’avantage comparatif ?",
      r: "La théorie de Ricardo suggère que la protection a un coût : prix plus élevés pour les consommateurs, ressources maintenues dans un secteur sans avantage comparatif, et risque de mesures de rétorsion contre les exportations suisses. Mais plusieurs arguments s’ajoutent au calcul : l’agriculture entretient des paysages et une vie rurale dans les régions de montagne (des externalités positives que le marché ne rémunère pas), elle contribue à la sécurité d’approvisionnement en cas de crise, et une transition brutale imposerait des coûts concentrés sur une population précise. Une réponse fréquente des économistes consiste à remplacer la protection aux frontières par des paiements directs liés aux services rendus, qui préservent ces objectifs à un coût moindre pour les consommateurs ; la Suisse a d’ailleurs évolué dans ce sens depuis les années 1990."
    },
    lectures: [
      ["Accessible", "Paul Krugman, « Ricardo’s Difficult Idea », 1996, disponible en ligne. Un texte court et percutant sur les malentendus autour de l’avantage comparatif."],
      ["Accessible", "Paul Krugman, La Mondialisation n’est pas coupable (Pop Internationalism), 1996."],
      ["Intermédiaire", "David Ricardo, Principes de l’économie politique et de l’impôt (1817), chapitre 7."],
      ["Intermédiaire", "Dani Rodrik, Nations et mondialisation, 2008, et Straight Talk on Trade, 2017, pour une vision critique."],
      ["Recherche", "Daniel Bernhofen et John Brown, « A Direct Test of the Theory of Comparative Advantage: The Case of Japan », Journal of Political Economy, 2004 ; David Autor, David Dorn et Gordon Hanson, « The China Syndrome », American Economic Review, 2013."]
    ],
    decouvrir: {
      questions: [
        { q: "Pourquoi l’avocate a-t-elle intérêt à confier la frappe à sa secrétaire, même si elle tape plus vite ?",
          o: ["Parce que chaque heure passée à taper est une heure de conseil qu’elle ne facture pas", "Parce que taper est fatigant", "Parce que la secrétaire tape en réalité plus vite qu’elle", "Parce que l’ordinateur coûte plus cher que la secrétaire"], c: 0,
          e: "Ce qui compte n’est pas d’être le meilleur, mais ce à quoi on renonce." },
        { q: "Qu’est-ce que le coût d’opportunité ?",
          o: ["Ce à quoi on renonce en choisissant une activité", "Le prix payé au fournisseur", "Le coût du transport des marchandises", "Les impôts sur le commerce"], c: 0,
          e: "C’est la clé de l’avantage comparatif." }
      ],
      duree: 5,
      html: `
<h3>L’avocate et la secrétaire</h3>
<p>Une avocate tape plus vite que sa secrétaire. Elle a pourtant tout intérêt à lui confier la frappe : chaque heure passée à taper est une heure de conseil qu’elle ne facture pas. Ce n’est pas parce qu’on est le meilleur en tout qu’on doit tout faire soi-même.</p>
<h3>L’idée de Ricardo</h3>
<p>En 1817, <a href="#eco-ricardo">David Ricardo</a> applique ce raisonnement aux pays. Le Portugal produit le drap et le vin avec moins de travail que l’Angleterre. Mais pour lui, produire un drap revient à renoncer à beaucoup de vin, alors que pour l’Angleterre, c’est l’inverse. Si l’Angleterre se spécialise dans le drap et le Portugal dans le vin, puis qu’ils échangent, le monde dispose de davantage de drap <i>et</i> de vin, avec le même travail.</p>
${gains}
<h3>Ce qui compte : le coût de renoncer</h3>
<p>La clé est le <b>coût d’opportunité</b> : ce à quoi on renonce en choisissant une activité. Chaque pays a toujours un domaine où ce coût est relativement faible. C’est pourquoi même un pays peu productif a sa place dans le commerce mondial, et même un pays très productif gagne à acheter ailleurs.</p>
<h3>À retenir, et à discuter</h3>
<p>L’idée explique une grande partie des bienfaits du commerce, mais pas tout. Le gain est collectif : les ouvriers des secteurs concurrencés peuvent perdre leur emploi, comme lors de la montée des exportations chinoises après 2001. Et certains pays ont choisi de protéger temporairement des industries pour créer de nouveaux avantages. La notice complète présente les preuves et ces débats.</p>`,
      quiz: [0, 1]
    },
    resumes: {
      depart: "L’avocate, la secrétaire, et la crainte de commercer avec plus fort que soi.",
      raisonnement: "Six étapes, de l’avantage absolu de Smith aux dotations en facteurs.",
      preuves: "Le Japon de 1859, l’agriculture mondiale et le paradoxe de Leontief.",
      cas: "Le traité de Methuen, la Suisse et son agriculture, le choc chinois.",
      objections: "Perdants, coûts d’ajustement, politique industrielle, rendements croissants, dépendances.",
      ecoles: "Mercantilistes, Smith, Mill, structuralistes, marxistes, Krugman.",
      source: "Ricardo, chapitre 7 : la poursuite de l’avantage individuel et le bien universel.",
      quiz: "Six questions corrigées, dont un calcul, et une question sur l’agriculture suisse.",
      lectures: "Cinq lectures classées par niveau."
    }
  };
})();
