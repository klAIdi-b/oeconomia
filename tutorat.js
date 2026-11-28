/* Œconomia — Tutorat : dialoguer avec un économiste (capacités « sample » et « tts » de claude.ai) */
(function () {
  "use strict";
  const A = window.OECAPP;
  const { $, $$, ECO } = A;

  /* Les auteurs vivants ne sont pas incarnés : un guide présente leur pensée à la troisième personne. */
  const VIVANTS = new Set(["sen", "krugman", "summers", "acemoglu", "piketty", "duflo", "stiglitz", "mazzucato", "waring", "kelton"]);

  /* Ton et manière de raisonner, à partir de leurs écrits */
  const STYLE = {
    aristote: "Raisonne par distinctions et par finalités (à quoi sert la richesse ?), en philosophe de la cité ; prudence devant tout ce qui excède la juste mesure.",
    khaldoun: "Raisonne en historien des dynasties : cohésion sociale, fiscalité, vie urbaine, cycles longs ; exemples tirés du Maghreb et de l’Orient médiéval.",
    mun: "Parle en marchand et administrateur pragmatique : balance générale du commerce, puissance du royaume, intérêt de la nation.",
    quesnay: "Raisonne en médecin du corps social : circulation, produit net, ordre naturel ; plaide pour la liberté du commerce des grains.",
    smith: "Ton de philosophe moral écossais, posé et ironique envers les marchands ; raisonne par la division du travail, l’étendue du marché, le prix naturel, et rappelle les devoirs du souverain.",
    malthus: "Pasteur scrupuleux et empiriste ; attentif aux faits du moment, à la demande effective et aux contraintes démographiques.",
    say: "Clair, didactique, confiant dans l’entrepreneur et la loi des débouchés ; se méfie des explications des crises par l’insuffisance générale de la demande.",
    ricardo: "Raisonne par modèle abstrait et cas limites (« supposons que… ») ; distingue effets temporaires et état permanent ; avantage comparatif, rente, répartition.",
    mill: "Libéral réformateur, nuancé et soucieux de justice ; distingue lois de la production et règles de répartition ; défend la liberté individuelle et l’égalité des femmes.",
    marx: "Analyse en termes de rapports sociaux, de classes, de plus-value, d’accumulation et de crises ; ton polémique et dialectique, ironie mordante envers les « économistes vulgaires ».",
    walras: "Raisonne en mathématicien de l’équilibre général et du tâtonnement ; distingue économie pure, appliquée et sociale ; sympathie pour un socialisme foncier.",
    marshall: "Professeur prudent : équilibre partiel, élasticités, court et long terme, toutes choses égales par ailleurs ; traduit tout en mots et en exemples concrets.",
    pareto: "Ingénieur sceptique et sarcastique envers les idéologies ; efficacité au sens de Pareto, loi des revenus, circulation des élites, actions non logiques.",
    veblen: "Ironie pince-sans-rire ; lit l’économie comme évolution des habitudes et institutions ; consommation ostentatoire, opposition entre industrie et affaires.",
    mises: "Libéral intransigeant et déductif ; calcul économique, prix, propriété, critique du crédit artificiel et de toute planification.",
    schumpeter: "Brillant, aristocratique, aime le paradoxe ; entrepreneur, innovation, destruction créatrice, cycles, et inquiétude sur l’avenir du capitalisme.",
    keynes: "Brillant, ironique, pragmatique et pressé d’agir ; demande effective, incertitude, esprits animaux, préférence pour la liquidité ; méfiance envers les dogmes et les « économistes défunts ».",
    hayek: "Calme, philosophe ; connaissance dispersée, prix comme signaux, ordre spontané, règles générales ; mise en garde contre la prétention de la connaissance et la planification.",
    robinson: "Tranchante, polémique et hétérodoxe ; concurrence imparfaite, monopsone, critique de la théorie néoclassique du capital, temps historique.",
    galbraith: "Humour élégant et grand public ; pouvoir des grandes entreprises, contre-pouvoirs, sagesse conventionnelle, misère publique.",
    friedman: "Débatteur redoutable, clair et souriant ; raisonne par incitations, monnaie et données historiques ; confiance dans le marché, méfiance envers l’État discrétionnaire.",
    samuelson: "Synthèse et rigueur mathématique, ton modéré ; Keynes à court terme, marché à long terme, économie mixte ; aime les formules nettes.",
    minsky: "Lit l’économie depuis Wall Street : bilans, dettes, financement couvert, spéculatif et Ponzi ; la stabilité est déstabilisante.",
    ostrom: "Chercheuse de terrain, précise et modeste ; institutions locales, règles, surveillance, sanctions graduées, polycentrisme ; « pas de panacée ».",
    sen: "Présente la pensée d’Amartya Sen : capabilités, libertés réelles, famines et droits d’accès, choix social, rôle de la démocratie.",
    kahneman: "Psychologue prudent et autocritique ; biais, heuristiques, aversion aux pertes, cadrage ; insiste sur les limites de l’intuition, la sienne comprise.",
    lucas: "Rigueur formelle de la nouvelle économie classique ; anticipations rationnelles, critique de Lucas, fondements microéconomiques, croissance et capital humain.",
    krugman: "Présente la pensée de Paul Krugman : rendements croissants, géographie économique, trappe à liquidité, plaidoyer pour la relance en temps de crise.",
    summers: "Présente la pensée de Larry Summers : stagnation séculaire, hystérèse, proportionnalité des relances, attention aux ordres de grandeur.",
    acemoglu: "Présente la pensée de Daron Acemoglu : institutions inclusives et extractives, direction du progrès technique, automatisation, corridor étroit.",
    piketty: "Présente la pensée de Thomas Piketty : séries historiques d’inégalités, r > g, rôle de l’impôt progressif, idéologies justifiant les inégalités.",
    duflo: "Présente la pensée d’Esther Duflo : essais randomisés, pauvreté décomposée en problèmes précis, attention aux détails de mise en œuvre.",
    stiglitz: "Présente la pensée de Joseph Stiglitz : asymétries d’information, rationnement du crédit, critique du FMI et de la mondialisation mal gérée, coût des inégalités.",
    mazzucato: "Présente la pensée de Mariana Mazzucato : État entrepreneur, origine publique des grandes innovations, missions, partage des risques et des gains.",
    polanyi: "Historien et anthropologue de l’économie, ample et grave ; marché encastré dans la société, marchandises fictives, double mouvement ; regarde chaque question à l’échelle des siècles et des civilisations.",
    kalecki: "Sobre, précis, un peu ironique ; raisonne par l’investissement, les profits, les marges et les rapports de force entre salariés et patrons ; attentif aux obstacles politiques au plein emploi.",
    aglietta: "Professeur rigoureux et nuancé ; raisonne par grandes périodes du capitalisme, institutions, régulation, monnaie comme lien social et souveraineté ; aime replacer l’actualité dans le temps long.",
    waring: "Présente la pensée de Marilyn Waring : travail non rémunéré, limites du PIB, comptes du temps et de la nature, économie féministe.",
    kelton: "Présente la pensée de Stephanie Kelton : théorie moderne de la monnaie, souveraineté monétaire, inflation comme vraie limite, garantie d’emploi."
  };

  const THEMES = [
    ["Inflation et taux", "Les banques centrales ont relevé leurs taux très vite en 2022-2023. Était-ce la bonne réponse à l’inflation ?"],
    ["Droits de douane", "Les droits de douane américains peuvent-ils réindustrialiser les États-Unis ?"],
    ["IA et emploi", "L’intelligence artificielle va-t-elle détruire plus d’emplois qu’elle n’en crée ?"],
    ["Dette publique", "Un État peut-il s’endetter indéfiniment ? Jusqu’où la dette publique est-elle soutenable ?"],
    ["Climat", "Faut-il une taxe carbone, des normes ou des subventions pour lutter contre le réchauffement ?"],
    ["Héritage", "Faut-il taxer davantage les héritages pour réduire les inégalités ?"],
    ["Logement", "Pourquoi les loyers montent-ils autant dans les grandes villes, et que faudrait-il faire ?"],
    ["Cryptomonnaies", "Le bitcoin est-il une monnaie ? Les États doivent-ils créer leur propre monnaie numérique ?"],
    ["Salaire minimum", "Un salaire minimum élevé protège-t-il les travailleurs ou les exclut-il de l’emploi ?"]
  ];

  const MAX_TURNS = 12;
  let sample = null, tts = null, ready = false, denied = false;
  let mode = "un", tutorA = "keynes", tutorB = "hayek";
  let histories = {};           // clé : id du tuteur -> [{role, content}]
  let controllers = [];

  /* ---------- Rendu sûr d’un Markdown minimal ---------- */
  const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  function md(text) {
    return esc(text).split(/\n{2,}/).map((p) => {
      p = p.replace(/\*\*(.+?)\*\*/g, "<b>$1</b>").replace(/(^|[\s(])\*(?!\s)(.+?)\*(?=[\s).,;:!?]|$)/g, "$1<i>$2</i>");
      if (/^\s*[-•] /.test(p)) return "<ul>" + p.split(/\n/).map((l) => `<li>${l.replace(/^\s*[-•]\s*/, "")}</li>`).join("") + "</ul>";
      return `<p>${p.replace(/\n/g, "<br>")}</p>`;
    }).join("");
  }
  const plain = (t) => t.replace(/\*\*?/g, "").trim();

  /* ---------- Instructions envoyées à Claude ---------- */
  function rules(id) {
    const e = ECO[id], alive = VIVANTS.has(id);
    const today = new Date().toLocaleDateString("fr-CH", { month: "long", year: "numeric" });
    const mort = e.vie[1] != null ? `${e.nom} est mort en ${e.vie[1] < 0 ? -e.vie[1] + " av. J.-C." : e.vie[1]}.` : "";
    const who = alive
      ? `Tu es un tuteur du site pédagogique Œconomia qui présente, à la troisième personne, la pensée de ${e.nom}, économiste vivant. Tu ne te fais JAMAIS passer pour ${e.nom} et tu ne lui prêtes aucune déclaration inventée : tu expliques ses idées publiées (« Dans tel livre, ${e.nom.split(" ").slice(-1)[0]} soutient que… ») et tu signales quand tu extrapoles.`
      : `Tu incarnes ${e.nom} (${e.vie[0] < 0 ? -e.vie[0] + "–" + -e.vie[1] + " av. J.-C." : e.vie[0] + "–" + e.vie[1]}) pour un dialogue pédagogique sur le site Œconomia. Tu parles à la première personne, avec ses concepts, son ton et ses références. Le visiteur sait qu’il s’agit d’une reconstitution.`;
    return [
      who,
      `Fiche de référence :
- École : ${OEC.schools[e.ecole].label}
- En une phrase : ${e.devise}
- Œuvre majeure : ${e.oeuvre[0]} (${e.oeuvre[1]})
- Idées clés : ${e.idees.join(" | ")}
- Parcours : ${e.bio}
${e.citation ? (e.type === "formule" ? `- Formule qui résume ta pensée, rédigée par le site d’après ${e.source} : ce ne sont pas tes mots, ne la présente jamais comme une citation ni entre guillemets. ${e.citation}` : `- Citation authentique : « ${e.citation} » (${e.source})`) : ""}
- Manière de raisonner : ${STYLE[id] || ""}`,
      `Règles :
1. Réponds en français, avec la précision d’un universitaire et la clarté d’un bon vulgarisateur. Pas de slogans, pas de banalités : des mécanismes, des concepts nommés, des exemples historiques. N’avance un chiffre ou une date que si tu es sûr de son ordre de grandeur ; sinon, dis qu’il faut le vérifier. N’invente jamais de chiffre.
2. N’invente jamais de citation ni de référence. Tu ne cites entre guillemets que des phrases que tu sais authentiques, en nommant l’œuvre. Sinon, reformule sans guillemets et sans renvoyer à un passage précis (« c’est l’idée que je défends dans tel livre »). Ne rattache jamais à une œuvre une idée qu’elle ne contient pas.
3. Nous sommes en ${today}. ${mort} ${alive ? "" : "Pour les événements postérieurs à ta mort, dis-le franchement, puis raisonne avec tes propres outils sur ce qu’on t’en rapporte, sans prétendre les avoir vécus. Signale chaque raisonnement de ce type par la mention « (extrapolation) »."} Tes connaissances de l’actualité ont une date limite : si on t’interroge sur un fait récent que tu ne connais pas, dis-le et invite le visiteur à coller un article dans le champ prévu.
4. Si un article est fourni, appuie-toi sur lui pour les faits, en le citant, et distingue ses affirmations de ton analyse.
5. Reste honnête intellectuellement : signale les points où ta théorie a été contestée ou démentie par les faits, et termine par une phrase commençant par « Mes contradicteurs répondraient » (ou « Ses contradicteurs répondraient ») qui résume loyalement l’objection la plus forte d’une autre école.
6. Longueur : 150 à 300 mots, en paragraphes, sans titres. Le gras est permis pour un ou deux concepts. Si la question est hors sujet économique, ramène poliment la conversation vers l’économie.
7. Après la phrase des contradicteurs, ajoute une dernière ligne « À lire : » suivie du titre d’une œuvre où le visiteur peut vérifier l’idée principale (le chapitre seulement si tu en es certain).${mode === "deux" ? "\n8. Un autre auteur répond à la même question à côté de toi : c’est une confrontation reconstituée, pas un échange réel. Ne lui prête aucune parole." : ""}`
    ].join("\n\n");
  }

  /* ---------- Interface ---------- */
  function build() {
    const sec = $("#tutorat .wrap");
    const opts = OEC.economists.map((e) => `<option value="${e.id}">${e.nom} (${e.vie[0] < 0 ? -e.vie[0] + " av. J.-C." : e.vie[0]})</option>`).join("");
    $("#tutoPick").innerHTML = OEC.economists.map((e) => `<button class="tpick" data-id="${e.id}" title="${e.nom}"><img src="${A.portrait(e.id)}" alt="" width="40" height="40"><span>${e.nom.split(" ").slice(-1)[0]}</span></button>`).join("");
    $("#tutoB").innerHTML = opts;
    $("#tutoThemes").innerHTML = THEMES.map(([t, q], i) => `<button class="chip" data-t="${i}">${t}</button>`).join("");
    $("#tutoPick").addEventListener("click", (ev) => { const b = ev.target.closest(".tpick"); if (b) selectTutor(b.dataset.id); });
    $("#tutoB").addEventListener("change", (ev) => { tutorB = ev.target.value; renderChats(); });
    $("#tutoThemes").addEventListener("click", (ev) => { const b = ev.target.closest("[data-t]"); if (!b) return; const box = $("#tutoInput"); box.value = THEMES[+b.dataset.t][1]; box.focus(); });
    $$("[name=tutoMode]").forEach((r) => r.addEventListener("change", () => { mode = r.value; $("#tutoBRow").hidden = mode !== "deux"; renderChats(); }));
    $("#tutoForm").addEventListener("submit", (ev) => { ev.preventDefault(); send(); });
    $("#tutoInput").addEventListener("keydown", (ev) => { if (ev.key === "Enter" && !ev.shiftKey) { ev.preventDefault(); send(); } });
    $("#tutoStop").addEventListener("click", () => controllers.forEach((c) => c.abort()));
    $("#tutoReset").addEventListener("click", () => { histories = {}; renderChats(); });
    $("#tutoArticleToggle").addEventListener("click", () => { const a = $("#tutoArticleBox"); a.hidden = !a.hidden; if (!a.hidden) $("#tutoArticle").focus(); });
    selectTutor(tutorA);
    document.addEventListener("oec-theme", () => { build2(); });
    function build2() { $$("#tutoPick img").forEach((img) => (img.src = A.portrait(img.closest(".tpick").dataset.id))); renderChats(); }
  }

  function selectTutor(id) {
    tutorA = id;
    $$("#tutoPick .tpick").forEach((b) => b.classList.toggle("on", b.dataset.id === id));
    if (tutorB === id) { tutorB = OEC.economists.find((e) => e.id !== id && e.debat)?.id || "hayek"; }
    const deb = OEC.debates.find((d) => d.a === id || d.b === id);
    if (deb && mode === "un") tutorB = deb.a === id ? deb.b : deb.a;
    if (!ECO[tutorB] || !ECO[tutorB].idees) tutorB = id === "hayek" ? "keynes" : "hayek";
    $("#tutoB").value = tutorB;
    renderChats();
  }

  function chatHead(id) {
    const e = ECO[id], alive = VIVANTS.has(id);
    return `<header class="tchat-head" style="--sc:var(${OEC.schools[e.ecole].token})">
      <img src="${A.portrait(id)}" alt="" width="48" height="48">
      <div><b>${e.nom}</b><small>${alive ? "Un guide présente sa pensée" : "Reconstitution à partir de ses écrits"}</small></div>
      <a href="#eco-${id}" class="view-link">Sa fiche</a></header>`;
  }

  function renderChats() {
    const wrap = $("#tutoChats");
    const ids = mode === "deux" ? [tutorA, tutorB] : [tutorA];
    wrap.classList.toggle("two", ids.length === 2);
    wrap.innerHTML = ids.map((id) => `<section class="tchat" data-id="${id}">${chatHead(id)}<div class="tmsgs" id="tm-${id}"></div></section>`).join("");
    ids.forEach((id) => {
      const box = $("#tm-" + id), h = histories[id] || [];
      if (!h.length) box.innerHTML = `<p class="tempty">${VIVANTS.has(id) ? `Posez une question : un guide vous répondra en s’appuyant sur les travaux de ${ECO[id].nom}.` : `Posez une question à ${ECO[id].nom}. Choisissez un thème d’actualité ou écrivez librement.`}</p>`;
      h.forEach((t, i) => box.appendChild(bubble(id, t.role, t.content, i)));
      box.scrollTop = box.scrollHeight;
    });
    if (!ready) status(denied ? "denied" : sample === false ? "absent" : "");
  }

  function bubble(id, role, text, idx) {
    const b = document.createElement("div");
    b.className = "tmsg " + (role === "user" ? "me" : "tutor");
    if (role === "user") { b.innerHTML = `<div class="tb">${esc(text.split("\n\n[Article")[0])}</div>`; return b; }
    b.innerHTML = `<div class="tb">${md(text)}</div>`;
    if (tts) {
      const s = document.createElement("button");
      s.className = "clap"; s.textContent = "Écouter";
      s.onclick = () => speak(text, s, id);
      b.appendChild(s);
    }
    return b;
  }

  async function speak(text, btn, id) {
    if (!tts) return;
    if (tts.active() && btn.dataset.on) { tts.stop().catch(() => {}); return; }
    const voice = id === tutorB && mode === "deux" ? "glassy" : "buttery";
    const lines = plain(text).split(/\n{2,}/).filter(Boolean).map((t) => ({ text: t.slice(0, 1990), voice, language: "fr" }));
    $$(".clap[data-on]").forEach((b) => { delete b.dataset.on; b.textContent = "Écouter"; });
    btn.dataset.on = "1"; btn.textContent = "Arrêter";
    try { await tts.speak(lines); } catch (e) { if (e && e.code === "not_granted") { tts = null; } }
    delete btn.dataset.on; btn.textContent = "Écouter";
  }

  function status(kind) {
    const s = $("#tutoStatus");
    if (kind === "absent") s.innerHTML = "ŒconoChat fonctionne lorsque le site est ouvert sur claude.ai avec un compte connecté. Il utilise l’accès à Claude du visiteur, qui donne son accord au premier message." + (window.claude ? "" : " <a href=\"https://claude.ai/artifact/7cm6THQkHe7xCzbPEPxpsH#tutorat\" target=\"_blank\" rel=\"noopener\" style=\"font-weight:700\">Ouvrir ŒconoChat sur claude.ai →</a>");
    else if (kind === "denied") s.innerHTML = "Vous n’avez pas autorisé cette page à utiliser Claude. Vous pouvez modifier ce choix dans le menu Autorisations de l’artefact, puis recharger la page.";
    else if (kind === "busy") s.textContent = "Réflexion en cours… La première réponse peut prendre quelques dizaines de secondes.";
    else s.textContent = kind || "";
    s.hidden = !s.textContent;
    const off = kind === "absent" || kind === "denied";
    $("#tutoInput").disabled = off; $("#tutoSend").disabled = off;
  }

  const ERR = {
    rate_limited: "Trop de questions d’un coup, ou limite d’utilisation atteinte. Réessayez dans quelques minutes.",
    session_expired: "Votre session claude.ai a expiré : reconnectez-vous puis réessayez.",
    refused: "Cette question n’a pas pu recevoir de réponse. Reformulez-la.",
    empty_completion: "La réponse est restée vide. Reformulez ou raccourcissez la question.",
    prompt_too_large: "La conversation ou l’article est trop long. Effacez la conversation ou raccourcissez l’article.",
    upstream_error: "La connexion a été interrompue. Réessayez."
  };

  async function ask(id, question, article) {
    const h = histories[id] || (histories[id] = []);
    const content = article ? `${question}\n\n[Article fourni par le visiteur]\n${article}` : question;
    h.push({ role: "user", content });
    const box = $("#tm-" + id);
    if (!box) return;
    if (box.querySelector(".tempty")) box.innerHTML = "";
    box.appendChild(bubble(id, "user", content));
    const out = document.createElement("div");
    out.className = "tmsg tutor";
    out.innerHTML = `<div class="tb"><p class="muted">${VIVANTS.has(id) ? "Le guide réfléchit…" : ECO[id].nom.split(" ").slice(-1)[0] + " réfléchit…"}</p></div>`;
    box.appendChild(out); box.scrollTop = box.scrollHeight;
    const ctl = new AbortController(); controllers.push(ctl);
    const turns = [{ role: "user", content: rules(id) }, ...h.slice(-MAX_TURNS)];
    if (turns[1] && turns[1].role !== "user") turns.splice(1, 1);
    try {
      const { text, truncated } = await sample(turns, {
        cache: false, signal: ctl.signal, modelTier: "default",
        onText: ({ text }) => { out.querySelector(".tb").innerHTML = md(text); box.scrollTop = box.scrollHeight; }
      });
      h.push({ role: "assistant", content: text });
      out.replaceWith(bubble(id, "assistant", text + (truncated ? "\n\n(Réponse interrompue : demandez la suite.)" : "")));
      ready = true;
    } catch (e) {
      const code = e && e.code;
      if (code === "not_granted" || code === "sampling_disabled" || code === "capability_disabled" || code === "not_declared") {
        denied = true; out.remove(); h.pop(); status("denied"); return;
      }
      if (e && e.text) { h.push({ role: "assistant", content: e.text }); out.querySelector(".tb").innerHTML = md(e.text) + `<p class="muted">(interrompu)</p>`; }
      else { h.pop(); out.querySelector(".tb").innerHTML = `<p class="muted">${code === "cancelled" ? "Arrêté." : ERR[code] || ERR.upstream_error}</p>`; }
    } finally {
      controllers = controllers.filter((c) => c !== ctl);
      box.scrollTop = box.scrollHeight;
    }
  }

  async function send() {
    const box = $("#tutoInput"), q = box.value.trim();
    if (!q || !sample || controllers.length) return;
    const article = $("#tutoArticleBox").hidden ? "" : $("#tutoArticle").value.trim().slice(0, 12000);
    box.value = "";
    $("#tutoSend").hidden = true; $("#tutoStop").hidden = false; status("busy");
    const ids = mode === "deux" ? [tutorA, tutorB] : [tutorA];
    await Promise.all(ids.map((id) => ask(id, q, article)));
    if (article) { $("#tutoArticle").value = ""; $("#tutoArticleBox").hidden = true; }
    $("#tutoSend").hidden = false; $("#tutoStop").hidden = true;
    if (!denied) status("");
  }

  window.OECTUTOR = {
    init() {
      build();
      const cl = window.claude;
      if (!cl || !cl.use) { sample = false; status("absent"); return; }
      cl.use("sample").then((s) => { sample = s || false; if (!s) status("absent"); }).catch(() => { sample = false; status("absent"); });
      cl.use("tts").then((t) => { tts = t || null; if (tts) renderChats(); }).catch(() => {});
    },
    pick(id) { if (ECO[id] && ECO[id].idees) selectTutor(id); }
  };
})();
