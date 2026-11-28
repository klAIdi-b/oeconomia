/* Œconomia — notices longues (format « leçon »)
   Chaque notice complète un concept de concepts.js : OEC.notices[id] = { essentiel, sections:[{id,titre,html}], source, quiz, ouverte, lectures } */
OEC.notices = {};

OEC.notices["institutions-inclusives"] = {
  essentiel: [
    "Les pays ne sont pas pauvres d’abord à cause de leur climat, de leur culture ou de l’ignorance de leurs dirigeants, mais parce que leurs institutions, les règles qui organisent l’économie et le pouvoir, découragent l’effort, l’investissement et l’innovation.",
    "Des institutions inclusives protègent la propriété et les contrats du plus grand nombre, ouvrent les marchés à de nouveaux venus et s’appuient sur un pouvoir politique partagé et contrôlé. Des institutions extractives permettent à une élite de s’approprier la richesse produite par les autres.",
    "Ces institutions se renforcent elles-mêmes, ce qui explique la persistance des écarts de richesse sur des siècles. Elles changent surtout lors de « moments critiques », guerres, révolutions, épidémies, ouvertures commerciales, dont l’issue n’est jamais écrite d’avance."
  ],
  sections: [
    { id: "depart", titre: "La question de départ : une ville coupée en deux", html: `
<p>À la frontière entre l’Arizona et l’État mexicain de Sonora, une même agglomération porte un même nom : Nogales. Ses habitants partagent souvent les mêmes ancêtres, la même langue, la même cuisine, le même climat et les mêmes maladies. Pourtant, au nord de la clôture, le revenu des ménages est bien plus élevé ; la plupart des adultes ont terminé l’école secondaire ; les routes sont goudronnées ; l’électricité et l’eau courante fonctionnent ; la police est relativement fiable ; et les habitants élisent et renvoient leurs élus. Au sud, les revenus sont nettement plus faibles, la criminalité et la corruption plus répandues, et créer une entreprise suppose souvent d’obtenir des faveurs.</p>
<p>C’est par cet exemple que Daron Acemoglu et James Robinson ouvrent <i>Why Nations Fail</i> (2012). Si la géographie, la culture et les gènes sont les mêmes des deux côtés, qu’est-ce qui diffère ? Leur réponse : les règles. Les habitants de Nogales (Arizona) vivent depuis le XIXe siècle sous les institutions des États-Unis ; ceux de Nogales (Sonora), sous celles du Mexique. Le même raisonnement vaut pour les deux Corées, l’Allemagne de l’Est et de l’Ouest pendant la guerre froide, ou Haïti et la République dominicaine, qui se partagent une même île.</p>
<p>La question est ancienne. <a href="#eco-smith">Adam Smith</a> attribuait déjà la prospérité à « la paix, des impôts modérés et une administration tolérable de la justice ». <a href="#eco-khaldoun">Ibn Khaldoun</a> expliquait le déclin des dynasties par l’alourdissement de leur fiscalité prédatrice. Ce que la recherche contemporaine apporte, c’est une théorie précise de ce qui rend les institutions bonnes ou mauvaises, pourquoi les mauvaises persistent, et une tentative de mesurer statistiquement leur effet.</p>` },

    { id: "raisonnement", titre: "Le raisonnement pas à pas", html: `
<h4>1. Ce qu’est une institution</h4>
<p>L’historien de l’économie Douglass North, Nobel 1993, définit les institutions comme les « règles du jeu » d’une société : les contraintes, formelles ou informelles, qui encadrent les interactions humaines. Les règles formelles sont les lois, la constitution, les droits de propriété, le droit des contrats. Les règles informelles sont les coutumes, les normes de confiance, les codes de conduite. Les organisations, entreprises, partis, syndicats, sont les joueurs. Une institution n’est pas un bâtiment ni une administration : c’est une règle effectivement appliquée.</p>
<h4>2. Institutions économiques : ce qu’elles changent aux incitations</h4>
<p>Imaginez un paysan qui hésite à drainer son champ, ce qui lui coûtera deux saisons de travail et doublera ses récoltes pour les vingt années suivantes. Il ne le fera que s’il est raisonnablement sûr de garder le fruit de son effort. Si le seigneur, le fonctionnaire ou le chef local peut confisquer la récolte, augmenter arbitrairement l’impôt ou attribuer le champ à un cousin, le drainage n’a aucun sens. Il en va de même pour l’artisan qui achète une machine, l’entrepreneur qui ouvre une usine, la famille qui paie des études à ses enfants.</p>
<p>Les institutions économiques <b>inclusives</b> réunissent trois éléments : des droits de propriété sûrs pour une large partie de la population, et pas seulement pour une élite ; un système juridique impartial qui fait respecter les contrats ; la liberté d’entrer sur les marchés, de créer une entreprise et de choisir son métier. Elles s’accompagnent de services publics qui permettent à chacun de participer : routes, écoles, monnaie stable. Les institutions <b>extractives</b> font l’inverse : elles sont conçues pour transférer des revenus d’un groupe vers un autre, par le travail forcé, les monopoles accordés aux proches du pouvoir, l’expropriation, les impôts arbitraires, les barrières à l’entrée.</p>
<h4>3. Institutions politiques : qui fixe les règles ?</h4>
<p>Les règles économiques ne tombent pas du ciel : elles sont choisies par ceux qui détiennent le pouvoir. Acemoglu et Robinson distinguent deux propriétés des institutions politiques. La <b>centralisation</b> : un État capable de faire respecter l’ordre, de lever l’impôt et de fournir des services sur tout son territoire. Le <b>pluralisme</b> : un pouvoir réparti entre de nombreux groupes, soumis à des contraintes et à des contre-pouvoirs. Des institutions politiques inclusives réunissent les deux. Sans centralisation, on a le chaos, comme en Somalie dans les années 1990 ; sans pluralisme, on a un État fort au service d’une élite.</p>
<h4>4. Pourquoi les élites choisissent-elles des règles extractives ?</h4>
<p>Si les institutions inclusives produisent davantage de richesse, pourquoi les dirigeants ne les adoptent-ils pas ? Ce n’est pas par ignorance, répondent les auteurs, mais par calcul. Les institutions inclusives libèrent la <a href="#c-destruction-creatrice">destruction créatrice</a> : de nouvelles entreprises, de nouvelles technologies, de nouveaux groupes enrichis menacent les positions des élites en place, économiques et politiques. L’empereur François Ier d’Autriche s’opposa longtemps aux chemins de fer de peur qu’ils n’apportent la révolution ; le tsar Nicolas Ier fit de même en Russie. Une élite peut préférer une part plus grande d’un gâteau plus petit, si le gâteau plus grand risque de lui échapper.</p>
<h4>5. Le cercle vicieux et le cercle vertueux</h4>
<p>Les institutions extractives se perpétuent. L’élite qui contrôle le pouvoir politique s’enrichit grâce aux institutions économiques extractives, et utilise cette richesse pour conserver le pouvoir : armée, clientèle, répression. Même lorsqu’elle est renversée, les nouveaux dirigeants héritent d’un système qui récompense la capture de l’État, et la reproduisent souvent : c’est ce que Robert Michels appelait la « loi d’airain de l’oligarchie ». À l’inverse, des institutions inclusives créent un cercle vertueux : le pouvoir étant partagé, aucun groupe ne peut facilement accaparer l’État, et une presse libre, des tribunaux indépendants et de nombreux acteurs économiques défendent les règles.</p>
<h4>6. Les moments critiques</h4>
<p>Si les institutions persistent, comment changent-elles ? Lors de « moments critiques », des chocs qui bouleversent l’équilibre des pouvoirs. La Peste noire de 1348, en tuant un tiers à la moitié de la population européenne, rend la main-d’œuvre rare. À l’ouest de l’Europe, les paysans en profitent pour obtenir des salaires plus élevés et la fin progressive du servage ; à l’est, les seigneurs, plus puissants, imposent au contraire un « second servage ». Un même choc, des institutions initiales légèrement différentes, et deux trajectoires qui divergent pendant des siècles. Les auteurs appellent ce mécanisme la « dérive institutionnelle » : de petites différences, amplifiées par les moments critiques.</p>
<figure class="schema">
<svg viewBox="0 0 640 300" role="img" aria-label="Schéma : institutions politiques, institutions économiques, incitations, prospérité, et la boucle de rétroaction du pouvoir">
  <defs><marker id="ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink-soft)"/></marker></defs>
  <g style="font:600 13px Manrope, sans-serif">
    <rect x="10" y="40" width="140" height="74" rx="10" style="fill:var(--plum-soft); stroke:var(--plum)"/>
    <text x="80" y="70" text-anchor="middle" style="fill:var(--ink)">Institutions</text><text x="80" y="88" text-anchor="middle" style="fill:var(--ink)">politiques</text>
    <text x="80" y="104" text-anchor="middle" style="fill:var(--ink-soft); font-weight:500; font-size:11px">qui fixe les règles</text>
    <rect x="175" y="40" width="140" height="74" rx="10" style="fill:var(--note-soft); stroke:var(--note)"/>
    <text x="245" y="70" text-anchor="middle" style="fill:var(--ink)">Institutions</text><text x="245" y="88" text-anchor="middle" style="fill:var(--ink)">économiques</text>
    <text x="245" y="104" text-anchor="middle" style="fill:var(--ink-soft); font-weight:500; font-size:11px">propriété, contrats, entrée</text>
    <rect x="340" y="40" width="130" height="74" rx="10" style="fill:var(--card); stroke:var(--line)"/>
    <text x="405" y="70" text-anchor="middle" style="fill:var(--ink)">Incitations</text>
    <text x="405" y="90" text-anchor="middle" style="fill:var(--ink-soft); font-weight:500; font-size:11px">investir, innover,</text><text x="405" y="104" text-anchor="middle" style="fill:var(--ink-soft); font-weight:500; font-size:11px">s’instruire</text>
    <rect x="495" y="40" width="135" height="74" rx="10" style="fill:var(--card); stroke:var(--gold)"/>
    <text x="562" y="72" text-anchor="middle" style="fill:var(--ink)">Prospérité</text>
    <text x="562" y="92" text-anchor="middle" style="fill:var(--ink-soft); font-weight:500; font-size:11px">et sa répartition</text>
    <line x1="150" y1="77" x2="172" y2="77" style="stroke:var(--ink-soft); stroke-width:1.5" marker-end="url(#ar)"/>
    <line x1="315" y1="77" x2="337" y2="77" style="stroke:var(--ink-soft); stroke-width:1.5" marker-end="url(#ar)"/>
    <line x1="470" y1="77" x2="492" y2="77" style="stroke:var(--ink-soft); stroke-width:1.5" marker-end="url(#ar)"/>
    <path d="M562,114 C562,230 80,230 80,118" style="fill:none; stroke:var(--serial); stroke-width:1.5; stroke-dasharray:5 4" marker-end="url(#ar)"/>
    <text x="320" y="214" text-anchor="middle" style="fill:var(--serial)">La richesse donne du pouvoir, qui sert à préserver les règles</text>
    <text x="320" y="272" text-anchor="middle" style="fill:var(--ink-soft); font-weight:500; font-size:12px">Les moments critiques (guerres, épidémies, révolutions) peuvent rompre la boucle.</text>
  </g>
</svg>
<figcaption>Le mécanisme selon Acemoglu et Robinson. La flèche rouge en pointillés est la boucle de rétroaction qui fait persister les institutions.</figcaption>
</figure>` },

    { id: "preuves", titre: "Les preuves : une expérience naturelle tirée de l’histoire coloniale", html: `
<h4>Le problème : corrélation ou causalité ?</h4>
<p>Les pays riches ont de meilleures institutions : c’est une évidence statistique. Mais le lien peut aller dans les deux sens. Peut-être les pays riches peuvent-ils simplement se payer de bons tribunaux et une administration honnête. Peut-être un troisième facteur, le climat ou l’instruction, explique-t-il à la fois la richesse et les institutions. Pour isoler l’effet des institutions, il faut trouver une source de différences institutionnelles qui n’ait aucun lien direct avec la richesse actuelle. C’est le problème que résout, de façon célèbre, l’article d’Acemoglu, Johnson et Robinson publié en 2001 dans l’<i>American Economic Review</i>.</p>
<h4>L’idée : la mortalité des premiers colons</h4>
<p>Le raisonnement tient en trois étapes. Première étape : les Européens n’ont pas colonisé partout de la même façon. Là où ils mouraient en masse, du paludisme ou de la fièvre jaune, comme en Afrique de l’Ouest où la mortalité annuelle des soldats européens pouvait dépasser la moitié des effectifs, ils ne s’installaient pas. Ils créaient des États extractifs, destinés à prélever l’or, le caoutchouc ou les esclaves avec le moins de colons possible. Là où ils survivaient, en Amérique du Nord, en Australie, en Nouvelle-Zélande, ils s’installaient en nombre et exigeaient pour eux-mêmes des institutions protectrices : droits de propriété, assemblées, tribunaux. Deuxième étape : ces institutions coloniales ont persisté après l’indépendance, les nouvelles élites héritant des appareils d’État. Troisième étape : les institutions actuelles déterminent le revenu actuel.</p>
<p>La mortalité des colons sert d’« instrument » : elle a influencé les institutions, mais elle n’a pas, selon les auteurs, d’effet direct sur la richesse d’aujourd’hui, car les maladies qui tuaient les Européens, contre lesquelles les populations locales avaient souvent développé une immunité partielle, ne sont pas la cause de la pauvreté actuelle. Les auteurs reconstituent des données de mortalité à partir d’archives militaires et ecclésiastiques du XIXe siècle pour 64 anciennes colonies.</p>
<h4>Les résultats</h4>
<p>La relation est forte : plus la mortalité des colons était élevée, plus les institutions actuelles sont faibles, et plus le pays est pauvre aujourd’hui. Une fois isolé par cette méthode, l’effet des institutions apparaît même plus grand que dans une simple corrélation. Les auteurs estiment qu’améliorer les institutions du Nigeria jusqu’au niveau de celles du Chili pourrait, à long terme, multiplier son revenu jusqu’à sept fois. Ils montrent aussi qu’une fois les institutions prises en compte, la distance à l’équateur et le fait d’être en Afrique perdent l’essentiel de leur pouvoir explicatif.</p>
<h4>Le « renversement de fortune »</h4>
<p>Un second article (2002) apporte une preuve complémentaire. Parmi les anciennes colonies, celles qui étaient les plus prospères vers 1500, mesuré par la densité de population et l’urbanisation, comme les empires aztèque et inca ou le nord de l’Inde moghole, sont aujourd’hui relativement plus pauvres que celles qui étaient alors peu peuplées, comme l’Amérique du Nord ou l’Australie. La géographie n’a pas changé ; ce qui a changé, ce sont les institutions. Là où il y avait des populations nombreuses et des richesses à prendre, les colonisateurs ont installé des systèmes d’extraction, comme l’encomienda ou la mita espagnoles, le travail forcé dans les mines d’argent de Potosí. Là où il n’y avait pas grand-chose à prendre, ils ont dû travailler eux-mêmes, et se donner des règles qui protégeaient leur travail.</p>` }
  ],
  cas: [
    { titre: "Les deux Corées", html: `
<p>En 1945, la Corée, colonie japonaise depuis 1910, est coupée en deux au 38e parallèle par les États-Unis et l’Union soviétique. Le pays est alors ethniquement, linguistiquement et culturellement homogène ; le Nord, plus industrialisé sous l’occupation japonaise, est même un peu plus riche. Au Nord, Kim Il-sung instaure une économie planifiée, collectivise les terres, supprime la propriété privée et les marchés. Au Sud, après une période autoritaire, le régime de Park Chung-hee (1961-1979) conserve la propriété privée et les marchés tout en orientant l’investissement vers l’exportation ; la démocratisation suit en 1987.</p>
<p>Le résultat est l’un des écarts les plus spectaculaires de l’histoire économique. La Corée du Sud est devenue une économie avancée, sièges de Samsung et de Hyundai. La Corée du Nord a connu dans les années 1990 une famine qui a fait plusieurs centaines de milliers de morts, davantage selon certaines estimations, et son revenu par habitant est estimé à une fraction de celui du Sud. Le cas montre aussi les nuances : le Sud n’était pas pleinement inclusif politiquement pendant son décollage, ce qui nourrit l’objection chinoise examinée plus bas.</p>` },
    { titre: "L’Angleterre de 1688", html: `
<p>Pour Acemoglu et Robinson, la révolution industrielle commence en Angleterre parce que ses institutions y sont devenues les premières à être réellement inclusives. Le moment critique est la Glorieuse Révolution de 1688 : le Parlement renverse Jacques II et invite Guillaume d’Orange, qui accepte la Déclaration des droits de 1689. Le roi ne peut plus lever d’impôts, ni maintenir d’armée permanente en temps de paix, sans l’accord du Parlement. Les monopoles accordés par la Couronne reculent ; la Banque d’Angleterre est fondée en 1694.</p>
<p>Douglass North et Barry Weingast ont montré en 1989 que ces contraintes rendaient crédibles les engagements de l’État : sachant que le roi ne pouvait plus répudier ses dettes à sa guise, les prêteurs ont accepté de lui prêter beaucoup plus, à des taux bien plus bas. Pourquoi l’Angleterre, et pas l’Espagne ? Une partie de la réponse, selon un article d’Acemoglu, Johnson et Robinson de 2005, tient au commerce atlantique : en Angleterre, il a enrichi une large classe de marchands indépendants de la Couronne, qui ont pesé pour limiter son pouvoir ; en Espagne, il est resté un monopole royal, qui a renforcé l’absolutisme.</p>` },
    { titre: "Botswana et Sierra Leone : deux pays de diamants", html: `
<p>À son indépendance en 1966, le Botswana est l’un des pays les plus pauvres du monde : une poignée de kilomètres de routes goudronnées, très peu de diplômés du supérieur. En 1967, on y découvre d’importants gisements de diamants. Partout ailleurs en Afrique, de telles richesses ont souvent nourri la corruption et la guerre civile. Le Botswana devient au contraire, pendant plusieurs décennies, l’une des économies à la croissance la plus rapide du monde, avec des élections régulières et une administration réputée intègre.</p>
<p>Les auteurs l’expliquent par deux facteurs. La colonisation britannique y a été légère, laissant intactes les institutions tswana, où le chef devait consulter l’assemblée des hommes du village, le <i>kgotla</i>. Et les premiers dirigeants, Seretse Khama puis Quett Masire, ont fait des choix décisifs : les droits sur les diamants ont été attribués à l’État et non aux chefs locaux, et la rente minière a été investie dans les routes, l’éducation et la santé. La Sierra Leone, autre pays de diamants, a suivi la trajectoire inverse : sous Siaka Stevens (1968-1985), l’État a été capturé par un parti unique qui a pillé l’économie, avant une guerre civile (1991-2002) en partie financée par les « diamants du sang ».</p>` }
  ],
  objections: `
<h4>1. Et la Chine ?</h4>
<p>C’est l’objection la plus fréquente. La Chine connaît depuis 1978 la croissance la plus rapide de l’histoire, sous un parti unique qui ne tolère aucun contre-pouvoir. Acemoglu et Robinson répondent qu’une croissance sous institutions extractives est possible tant qu’il s’agit de rattraper, de réallouer des paysans vers l’industrie et d’imiter des technologies existantes, comme l’a fait l’Union soviétique jusqu’aux années 1960. Mais elle s’essouffle quand il faut innover à la frontière, car l’innovation suppose la destruction créatrice que le pouvoir craint. Le ralentissement chinois des années 2010-2020 et la reprise en main des entreprises technologiques après 2020 sont lus par eux comme une confirmation ; leurs critiques jugent la prédiction trop vague pour être réfutable.</p>
<h4>2. Les institutions, ou le capital humain apporté par les colons ?</h4>
<p>En 2004, Edward Glaeser, Rafael La Porta, Florencio Lopez-de-Silanes et Andrei Shleifer publient « Do Institutions Cause Growth? ». Ils soutiennent que les colons n’ont pas seulement apporté des institutions, mais aussi leur instruction et leurs savoir-faire, et que c’est ce capital humain qui explique d’abord la croissance, les institutions démocratiques suivant l’enrichissement plutôt que le précédant. La Corée du Sud ou Taïwan, autoritaires mais très éduquées pendant leur décollage, iraient dans leur sens.</p>
<h4>3. Les données de mortalité</h4>
<p>En 2012, l’économiste David Albouy publie dans l’<i>American Economic Review</i> une critique détaillée des données de mortalité : beaucoup de valeurs seraient extrapolées d’un pays voisin, certaines mesurées sur des soldats en campagne plutôt qu’en garnison. Corrigées, les estimations deviendraient beaucoup moins nettes. Les auteurs ont répondu en défendant leurs choix et en montrant que leurs résultats résistent à de nombreuses variantes. Le débat technique n’est pas entièrement clos, mais les résultats généraux ont été confirmés par d’autres méthodes.</p>
<h4>4. La géographie compte directement</h4>
<p>Jeffrey Sachs a répondu en 2003 que « les institutions ne gouvernent pas tout » : le paludisme, l’enclavement, la qualité des sols ont des effets directs sur la productivité et la santé, et pas seulement à travers les institutions. Une partie de la littérature cherche aujourd’hui à combiner les deux : la géographie peut avoir façonné les institutions, et continuer d’agir directement.</p>
<h4>5. Une théorie trop souple ?</h4>
<p>Certains historiens et économistes reprochent à la distinction inclusif-extractif d’être définie de manière assez large pour expliquer après coup n’importe quelle trajectoire : un pays qui réussit avait des institutions inclusives, un pays qui échoue des institutions extractives. Les auteurs ont en partie répondu dans <i>The Narrow Corridor</i> (2019), qui précise les conditions dans lesquelles un État fort reste contrôlé par une société forte.</p>`,
  ecoles: `
<p><b><a href="#eco-smith">Adam Smith</a> et les Lumières écossaises</b> avaient déjà souligné le rôle de la justice, de la sécurité de la propriété et de la modération fiscale, ainsi que les ravages des monopoles accordés par l’État.</p>
<p><b>Douglass North</b>, Nobel 1993, est le grand précurseur : il a fait des institutions et des coûts de transaction le cœur de l’histoire économique, et a insisté davantage qu’Acemoglu sur les croyances et les règles informelles.</p>
<p><b><a href="#eco-hayek">Hayek</a></b> partage l’importance des règles générales et de l’État de droit, mais se méfie de l’idée qu’on puisse concevoir de bonnes institutions : pour lui, les meilleures émergent spontanément, par évolution.</p>
<p><b><a href="#eco-ostrom">Elinor Ostrom</a></b> montre que les institutions efficaces sont souvent locales et adaptées à chaque ressource : il n’existe pas de modèle unique à importer.</p>
<p><b><a href="#eco-marx">Marx</a></b> aurait inversé le raisonnement : ce sont les rapports de production qui façonnent les institutions juridiques et politiques, qu’il appelle la « superstructure ». Acemoglu et Robinson reconnaissent d’ailleurs que la répartition des ressources économiques détermine le pouvoir de fait.</p>
<p><b><a href="#eco-sen">Amartya Sen</a></b> rejoint l’argument par un autre chemin : la démocratie et la presse libre ne sont pas seulement des moyens de la prospérité, mais des composantes du développement lui-même.</p>`,
  source: {
    titre: "Adam Smith, conférence de 1755 (rapportée par Dugald Stewart)",
    texte: "Il ne faut guère autre chose, pour porter un État du plus bas degré de barbarie au plus haut degré d’opulence, que la paix, des impôts modérés et une administration tolérable de la justice ; tout le reste est amené par le cours naturel des choses.",
    notes: `
<p><b>Le contexte.</b> Cette phrase est tirée d’une conférence donnée par Smith en 1755, citée par son premier biographe, Dugald Stewart, en 1793. Smith y défend la priorité de ses idées sur la liberté naturelle, vingt ans avant la Richesse des nations.</p>
<p><b>Ce que la phrase anticipe.</b> « La paix » renvoie à la centralisation de l’État, capable d’assurer l’ordre ; « des impôts modérés » et « une administration tolérable de la justice » renvoient à la protection de la propriété et à l’impartialité du droit, deux piliers des institutions inclusives.</p>
<p><b>Ce qu’elle ne dit pas.</b> Smith ne se demande pas pourquoi tant de pays n’ont ni paix, ni impôts modérés, ni justice. C’est précisément la question d’Acemoglu et Robinson : ces conditions ne manquent pas par accident, mais parce que ceux qui détiennent le pouvoir ont intérêt à ce qu’elles manquent. « Le cours naturel des choses » suppose réglé le problème politique.</p>`
  },
  quiz: [
    { q: "Pourquoi l’exemple des deux Nogales est-il si utile aux auteurs ?",
      o: ["Parce que les deux villes ont des climats très différents", "Parce qu’il neutralise la géographie et la culture, et ne laisse varier que les institutions", "Parce que la ville américaine dispose de ressources naturelles bien plus abondantes", "Parce qu’il montre que la culture explique l’essentiel des écarts de revenu"],
      c: 1, e: "Les deux villes partagent climat, maladies, ancêtres et culture. La différence de prospérité ne peut donc venir que de ce qui diffère : les règles des États-Unis et celles du Mexique." },
    { q: "Dans l’article de 2001, à quoi sert la mortalité des premiers colons ?",
      o: ["À mesurer directement le niveau de pauvreté actuel de chacune des anciennes colonies", "À montrer que les maladies tropicales suffisent à expliquer la pauvreté des pays du Sud", "À isoler des différences d’institutions sans lien direct avec la richesse d’aujourd’hui", "À estimer combien de descendants de colons vivent encore aujourd’hui dans chacun de ces pays"],
      c: 2, e: "C’est une variable instrumentale : elle a influencé le type de colonisation, donc les institutions, sans affecter directement le revenu actuel. C’est précisément ce point que conteste Albouy." },
    { q: "Pourquoi une élite peut-elle refuser des institutions qui enrichiraient le pays ?",
      o: ["Parce que les élites ignorent les bénéfices économiques de ces réformes", "Parce que ces institutions coûtent trop cher à financer pour l’État", "Parce que la destruction créatrice menace sa richesse et son pouvoir", "Parce que la culture du pays lui interdit de changer les règles établies"],
      c: 2, e: "Les auteurs rejettent l’hypothèse de l’ignorance. Les élites calculent : de nouveaux entrepreneurs, de nouvelles technologies et de nouveaux groupes enrichis menacent leurs positions." },
    { q: "Que désigne le « renversement de fortune » ?",
      o: ["Les colonies les plus riches vers 1500 sont souvent devenues relativement pauvres", "La chute des empires coloniaux européens après la Seconde Guerre mondiale", "La faillite des grandes compagnies coloniales au cours du XVIIIe siècle", "Le rattrapage spectaculaire de l’Asie de l’Est et du Sud-Est depuis les années 1980"],
      c: 0, e: "Là où il y avait des populations denses et des richesses à prendre, les colonisateurs ont installé des institutions extractives ; là où il n’y avait presque rien, ils ont dû se donner des règles protectrices." },
    { q: "Quelle est l’objection principale de Glaeser et de ses coauteurs (2004) ?",
      o: ["La mortalité des colons a surtout frappé les colonies les plus riches au départ", "La géographie et le climat suffisent à eux seuls à expliquer les écarts de revenu", "Les chiffres de mortalité des colons sont trop peu fiables pour être exploités", "Les colons ont apporté du capital humain, cause possible de la croissance"],
      c: 3, e: "Ils soutiennent que l’instruction et les savoir-faire comptent d’abord, les institutions démocratiques suivant l’enrichissement. L’objection sur les données est celle d’Albouy (2012), celle sur la géographie celle de Sachs." }
  ],
  transfert: { q: "Dans un pays, ouvrir un atelier exige deux ans de démarches et des pots-de-vin, et le gouvernement peut confisquer les terres. Que prévoit la théorie des institutions ?",
    o: ["Peu d’investissement, car ceux qui créent de la richesse risquent de se la voir prendre", "Une croissance rapide, grâce à un État fort qui protège l’ordre public et la stabilité du pays", "Aucun effet, car seule la géographie compte pour expliquer le niveau de richesse", "Une arrivée massive d’entrepreneurs étrangers attirés par la faiblesse des règles"], c: 0,
    e: "Des institutions extractives découragent d’investir : celui qui crée de la richesse n’est pas sûr d’en profiter." },
  ouverte: {
    q: "La Suisse n’a ni accès à la mer, ni matières premières, ni grandes plaines fertiles. Comment le cadre d’Acemoglu et Robinson pourrait-il expliquer sa prospérité, et que manquerait-il à cette explication ?",
    r: "On peut invoquer un pouvoir politique très décentralisé et contrôlé (fédéralisme, démocratie directe, communes autonomes), une tradition ancienne de gestion collective des ressources que décrit aussi Ostrom avec Törbel, une neutralité qui a épargné le pays des destructions des guerres, la protection de la propriété et une monnaie stable. Il manquerait cependant le rôle de l’éducation (dont la Réforme a favorisé la diffusion), de la spécialisation industrielle et financière, des ressources tirées du mercenariat et du commerce, et des réseaux d’immigrés qualifiés, comme les huguenots dans l’horlogerie. Le cas suisse illustre bien les forces et les limites du cadre : il explique pourquoi la richesse a pu s’accumuler, moins pourquoi elle est apparue dans ces secteurs précis."
  },
  lectures: [
    ["Accessible", "Daron Acemoglu et James Robinson, Prospérité, puissance et pauvreté (Why Nations Fail), 2012. Le livre de référence, écrit pour le grand public, riche en récits historiques."],
    ["Accessible", "Daron Acemoglu et James Robinson, The Narrow Corridor, 2019. La suite, sur l’équilibre entre l’État et la société."],
    ["Intermédiaire", "Douglass North, Institutions, Institutional Change and Economic Performance, 1990. Le texte fondateur de l’économie institutionnelle, court et dense."],
    ["Intermédiaire", "Dani Rodrik, Arvind Subramanian et Francesco Trebbi, « Institutions Rule », Journal of Economic Growth, 2004. Une comparaison des explications par les institutions, la géographie et le commerce."],
    ["Recherche", "Daron Acemoglu, Simon Johnson et James Robinson, « The Colonial Origins of Comparative Development », American Economic Review, 2001, et la critique de David Albouy dans la même revue en 2012."]
  ]
};

/* ---------- Institutions : version « Découvrir », résumés des blocs et visuels supplémentaires ---------- */
(function () {
  const N = OEC.notices["institutions-inclusives"];

  N.decouvrir = {

    questions: [

      { q: "Pourquoi la comparaison entre les deux moitiés de Nogales est-elle si parlante ?",

        o: ["Parce que climat et culture sont les mêmes des deux côtés, seules les règles changent", "Parce que la moitié mexicaine possède bien davantage de ressources naturelles que l’autre", "Parce que les habitants des deux côtés viennent de populations très différentes", "Parce que la moitié américaine a été peuplée bien avant la moitié mexicaine"], c: 0,

        e: "Géographie et culture étant semblables, l’écart de niveau de vie doit venir des institutions." },

      { q: "Le Botswana et la Sierra Leone ont tous deux découvert des diamants. Qu’est-ce qui explique leurs destins opposés ?",

        o: ["La qualité et la taille des diamants extraits, bien supérieures au Botswana qu’en Sierra Leone", "La manière dont le pouvoir a été exercé, contrôlé au Botswana et accaparé en Sierra Leone", "Le climat, nettement plus favorable à l’agriculture et au commerce au Botswana", "La taille de la population, bien plus petite au Botswana et plus facile à gérer"], c: 1,

        e: "Mêmes ressources, règles différentes, destins opposés : c’est l’argument des institutions." }

    ],
    duree: 5,
    html: `
<h3>Une ville, deux destins</h3>
<p>Nogales est une ville coupée en deux par la frontière entre les États-Unis et le Mexique. Des deux côtés, les habitants ont souvent les mêmes ancêtres, parlent la même langue et vivent sous le même climat. Pourtant, côté américain, on gagne nettement plus, les routes sont entretenues, l’école est plus longue et la police plus fiable. Si la géographie et la culture sont les mêmes, la différence doit venir d’ailleurs : des <b>règles</b> sous lesquelles chacun vit.</p>
<h3>Les règles du jeu</h3>
<p>Les économistes appellent ces règles des <b>institutions</b> : les lois, les droits de propriété, la justice, mais aussi la façon dont le pouvoir est attribué et contrôlé. Elles comptent parce qu’elles décident de ce qu’il est rentable de faire. Un paysan n’améliorera pas son champ s’il craint qu’on le lui confisque ; un jeune n’ouvrira pas d’atelier s’il faut payer des pots-de-vin pour obtenir une autorisation.</p>
<p>Daron Acemoglu et James Robinson, prix Nobel 2024, distinguent deux familles de règles :</p>
<ul>
<li><b>Inclusives</b> : la propriété de chacun est protégée, la justice est impartiale, n’importe qui peut créer une entreprise, et le pouvoir politique est partagé et contrôlé.</li>
<li><b>Extractives</b> : les règles servent un petit groupe, qui s’enrichit en prélevant ce que produisent les autres, par la force, les monopoles ou l’impôt arbitraire.</li>
</ul>
<h3>Pourquoi les mauvaises règles durent</h3>
<p>Si les règles inclusives enrichissent tout le monde, pourquoi tous les pays ne les adoptent-ils pas ? Parce que ceux qui détiennent le pouvoir n’y ont pas toujours intérêt. L’innovation et la concurrence font naître de nouveaux riches et de nouveaux pouvoirs, qui menacent les anciens. Une élite peut donc préférer un pays plus pauvre qu’elle contrôle à un pays plus riche qui lui échappe. Et comme la richesse donne du pouvoir, et le pouvoir de la richesse, ces règles se perpétuent souvent pendant des siècles.</p>
<h3>Un exemple : deux pays de diamants</h3>
<p>Le Botswana et la Sierra Leone ont tous deux découvert des diamants au XXe siècle. Au Botswana, les premiers dirigeants ont confié les mines à l’État, investi les revenus dans les routes et les écoles, et respecté les élections : le pays est devenu l’un des plus dynamiques d’Afrique. En Sierra Leone, un parti unique s’est approprié la richesse, et les diamants ont fini par financer une guerre civile. Mêmes ressources, règles différentes, destins opposés.</p>
<h3>À retenir</h3>
<p>La richesse d’un pays dépend moins de ce qu’il a que de la manière dont il est gouverné. Cette idée est aujourd’hui l’une des plus influentes de l’économie du développement, mais elle reste discutée : la Chine a connu une croissance très rapide sans démocratie, et d’autres chercheurs insistent sur l’éducation ou la géographie. La notice complète présente ces débats en détail.</p>`,
    quiz: [0, 2]
  };

  N.resumes = {
    depart: "Nogales, une ville coupée par une frontière, et l’énigme qu’elle pose.",
    raisonnement: "Six étapes, de la définition d’une institution aux moments critiques qui la transforment.",
    preuves: "Comment la mortalité des premiers colons permet de mesurer l’effet des institutions.",
    cas: "Les deux Corées, l’Angleterre de 1688, le Botswana face à la Sierra Leone.",
    objections: "La Chine, le capital humain, les données, la géographie, et une théorie jugée trop souple.",
    ecoles: "Smith, North, Hayek, Ostrom, Marx et Sen face à cette thèse.",
    source: "Une phrase d’Adam Smith de 1755 et ce qu’elle laisse de côté.",
    quiz: "Six questions corrigées et une question de réflexion sur la Suisse.",
    lectures: "Cinq lectures classées par niveau."
  };

  const fig = (svg, caption, label) => `<figure class="schema"><svg viewBox="0 0 640 ${svg.h}" role="img" aria-label="${label}">${svg.body}</svg><figcaption>${caption}</figcaption></figure>`;
  const T = 'style="fill:var(--ink); font:600 13px Manrope, sans-serif"';
  const S = 'style="fill:var(--ink-soft); font:500 11.5px Manrope, sans-serif"';
  const arrow = (id) => `<defs><marker id="${id}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink-soft)"/></marker></defs>`;

  /* 1. Peste noire : un même choc, deux trajectoires */
  const peste = fig({ h: 250, body: `${arrow("a2")}
    <rect x="230" y="14" width="180" height="56" rx="10" style="fill:var(--card); stroke:var(--serial)"/>
    <text x="320" y="38" text-anchor="middle" ${T}>Peste noire, 1348</text>
    <text x="320" y="56" text-anchor="middle" ${S}>un tiers à la moitié des Européens meurent</text>
    <path d="M280,70 C230,100 170,100 150,124" style="fill:none; stroke:var(--ink-soft); stroke-width:1.5" marker-end="url(#a2)"/>
    <path d="M360,70 C410,100 470,100 490,124" style="fill:none; stroke:var(--ink-soft); stroke-width:1.5" marker-end="url(#a2)"/>
    <rect x="20" y="128" width="260" height="104" rx="10" style="fill:var(--note-soft); stroke:var(--note)"/>
    <text x="150" y="152" text-anchor="middle" ${T}>Europe de l’Ouest</text>
    <text x="150" y="174" text-anchor="middle" ${S}>Les paysans, devenus rares,</text>
    <text x="150" y="190" text-anchor="middle" ${S}>négocient salaires et libertés</text>
    <text x="150" y="214" text-anchor="middle" style="fill:var(--note); font:700 12.5px Manrope, sans-serif">Déclin du servage</text>
    <rect x="360" y="128" width="260" height="104" rx="10" style="fill:var(--plum-soft); stroke:var(--plum)"/>
    <text x="490" y="152" text-anchor="middle" ${T}>Europe de l’Est</text>
    <text x="490" y="174" text-anchor="middle" ${S}>Les seigneurs, plus puissants,</text>
    <text x="490" y="190" text-anchor="middle" ${S}>attachent les paysans à la terre</text>
    <text x="490" y="214" text-anchor="middle" style="fill:var(--plum); font:700 12.5px Manrope, sans-serif">« Second servage »</text>` },
    "Un même moment critique, deux issues opposées, selon le rapport de forces initial entre seigneurs et paysans. Les deux trajectoires divergent pendant des siècles.",
    "Schéma : la Peste noire conduit au déclin du servage à l’Ouest et au second servage à l’Est");

  /* 2. La stratégie de l’instrument */
  const instrument = fig({ h: 230, body: `${arrow("a3")}
    ${[["Mortalité des", "premiers colons", 10], ["Installation", "ou extraction", 168], ["Institutions", "d’aujourd’hui", 326], ["Revenu", "d’aujourd’hui", 484]].map(([a, b, x], i) => `
      <rect x="${x}" y="30" width="146" height="64" rx="10" style="fill:${i === 0 ? "var(--plum-soft)" : i === 3 ? "var(--card)" : "var(--note-soft)"}; stroke:${i === 0 ? "var(--plum)" : i === 3 ? "var(--gold)" : "var(--note)"}"/>
      <text x="${x + 73}" y="58" text-anchor="middle" ${T}>${a}</text><text x="${x + 73}" y="76" text-anchor="middle" ${T}>${b}</text>`).join("")}
    <line x1="156" y1="62" x2="166" y2="62" style="stroke:var(--ink-soft); stroke-width:1.5" marker-end="url(#a3)"/>
    <line x1="314" y1="62" x2="324" y2="62" style="stroke:var(--ink-soft); stroke-width:1.5" marker-end="url(#a3)"/>
    <line x1="472" y1="62" x2="482" y2="62" style="stroke:var(--ink-soft); stroke-width:1.5" marker-end="url(#a3)"/>
    <path d="M83,94 C83,170 557,170 557,98" style="fill:none; stroke:var(--serial); stroke-width:1.5; stroke-dasharray:5 4"/>
    <line x1="300" y1="140" x2="340" y2="160" style="stroke:var(--serial); stroke-width:2.5"/><line x1="340" y1="140" x2="300" y2="160" style="stroke:var(--serial); stroke-width:2.5"/>
    <text x="320" y="196" text-anchor="middle" style="fill:var(--serial); font:600 12.5px Manrope, sans-serif">Hypothèse clé : pas d’effet direct de la mortalité des colons sur le revenu actuel</text>
    <text x="320" y="216" text-anchor="middle" ${S}>C’est ce lien supposé absent que contestent Sachs (géographie) et Albouy (qualité des données).</text>` },
    "La logique de l’article de 2001. Si la seule voie qui relie la mortalité des colons au revenu actuel passe par les institutions, on peut mesurer l’effet des institutions sans être trompé par la causalité inverse.",
    "Schéma : la mortalité des colons influence l’installation, puis les institutions, puis le revenu ; l’effet direct est supposé absent");

  /* 3. Botswana et Sierra Leone : deux chronologies */
  const ev = (x, y, year, txt, col) => `<circle cx="${x}" cy="${y}" r="6" style="fill:${col}; stroke:var(--card); stroke-width:2"/><text x="${x}" y="${y - 14}" text-anchor="middle" style="fill:var(--ink); font:700 12px 'JetBrains Mono', monospace">${year}</text>${txt.map((t, k) => `<text x="${x}" y="${y + 22 + k * 15}" text-anchor="middle" ${S}>${t}</text>`).join("")}`;
  const chrono = fig({ h: 270, body: `
    <text x="20" y="34" ${T}>Botswana</text>
    <line x1="60" y1="70" x2="600" y2="70" style="stroke:var(--note); stroke-width:3"/>
    ${ev(130, 70, "1966", ["Indépendance,", "pays très pauvre"], "var(--note)")}
    ${ev(320, 70, "1967", ["Diamants confiés à l’État,", "rente investie"], "var(--note)")}
    ${ev(510, 70, "1966-2000", ["Forte croissance,", "élections régulières"], "var(--note)")}
    <text x="20" y="168" ${T}>Sierra Leone</text>
    <line x1="60" y1="204" x2="600" y2="204" style="stroke:var(--serial); stroke-width:3"/>
    ${ev(130, 204, "1961", ["Indépendance"], "var(--serial)")}
    ${ev(320, 204, "1968-1985", ["Siaka Stevens,", "parti unique, pillage"], "var(--serial)")}
    ${ev(510, 204, "1991-2002", ["Guerre civile,", "« diamants du sang »"], "var(--serial)")}` },
    "Deux pays riches en diamants, deux trajectoires. Frises schématiques : les intervalles ne sont pas à l’échelle.",
    "Chronologies comparées du Botswana et de la Sierra Leone depuis leur indépendance");

  const sec = (id) => N.sections.find((s) => s.id === id);
  sec("raisonnement").html = sec("raisonnement").html.replace("<figure class=\"schema\">", peste + "\n<figure class=\"schema\">");
  sec("preuves").html = sec("preuves").html.replace("<h4>Les résultats</h4>", instrument + "\n<h4>Les résultats</h4>");
  N.cas[2].html = chrono + N.cas[2].html;
})();
