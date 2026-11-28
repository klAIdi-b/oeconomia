/* Œconomia — moteur principal */
(function () {
  "use strict";
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const el = (tag, attrs = {}, html) => {
    const e = document.createElement(tag);
    for (const k in attrs) {
      if (k === "class") e.className = attrs[k];
      else if (k === "style") e.style.cssText = attrs[k];
      else if (k.startsWith("on")) e.addEventListener(k.slice(2), attrs[k]);
      else e.setAttribute(k, attrs[k]);
    }
    if (html != null) e.innerHTML = html;
    return e;
  };
  const cssVar = (n) => getComputedStyle(document.documentElement).getPropertyValue(n).trim();
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const ECO = {};
  OEC.economists.forEach((e) => (ECO[e.id] = e));
  Object.values(OEC.extraSpeakers).forEach((e) => (ECO[e.id] = e));
  const schoolColor = (id) => cssVar(OEC.schools[ECO[id].ecole].token);
  const fmtYear = (y) => (y < 0 ? Math.abs(y) + " av. J.-C." : String(y));
  const lifespan = (e) => e.vie[0] < 0 ? `${-e.vie[0]}–${-e.vie[1]} av. J.-C.` : `${e.vie[0]}–${e.vie[1] ?? ""}`;
  const shortName = (e) => e.nom.split(" ").slice(-1)[0].replace("Khaldoun", "Ibn Khaldoun");

  window.OECAPP = { $, $$, el, cssVar, reduced, ECO, schoolColor };

  /* ---------- Thème ---------- */
  const isDark = () => {
    const t = document.documentElement.getAttribute("data-theme");
    if (t) return t === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };
  try { const saved = localStorage.getItem("oec-theme"); if (saved) document.documentElement.setAttribute("data-theme", saved); } catch (e) {}
  const fireTheme = () => { document.dispatchEvent(new Event("oec-theme")); };
  $("#themeBtn").addEventListener("click", () => {
    const next = isDark() ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("oec-theme", next); } catch (e) {}
    fireTheme();
  });
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", fireTheme);

  /* ---------- Rosaces guillochées (portraits) ---------- */
  let portraitCache = {};
  /* Adresse courte pour chaque rosace (blob:) plutôt qu’une image encodée de 119 000 caractères recopiée des centaines de fois dans la page.
     Si le navigateur ou l’hébergeur refuse les adresses blob:, on garde l’image encodée. */
  let BLOB = false, avantPolices = false;
  const URL_ID = {};
  function toUrl(c) {
    const d = c.toDataURL("image/png");
    if (!BLOB) return d;
    try {
      const bin = atob(d.slice(d.indexOf(",") + 1)), u = new Uint8Array(bin.length);
      for (let i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i);
      return URL.createObjectURL(new Blob([u], { type: "image/png" }));
    } catch (e) { return d; }
  }
  const testBlob = () => new Promise((ok) => {
    try {
      const c = document.createElement("canvas"); c.width = c.height = 1;
      const d = c.toDataURL("image/png"), bin = atob(d.slice(d.indexOf(",") + 1)), u = new Uint8Array(bin.length);
      for (let i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i);
      const url = URL.createObjectURL(new Blob([u], { type: "image/png" })), img = new Image();
      const fin = (v) => { BLOB = v; ok(); };
      img.onload = () => fin(true); img.onerror = () => fin(false); setTimeout(() => fin(BLOB), 400);
      img.src = url;
    } catch (e) { ok(); }
  });
  /* Polices : on n’attend plus qu’elles soient chargées pour afficher le site. Les initiales des rosaces dessinées avant
     l’arrivée de Cinzel sont redessinées ensuite, et les images déjà affichées sont mises à jour. */
  function rafraichirPortraits() {
    const anciens = Object.entries(portraitCache);
    portraitCache = {};
    const neuf = {};
    anciens.forEach(([key, url]) => { if (key.endsWith(isDark() ? "d" : "l")) neuf[url] = portrait(URL_ID[url]); });
    document.querySelectorAll("img").forEach((im) => { const n = neuf[im.getAttribute("src")]; if (n) im.setAttribute("src", n); });
  }
  function hash(s) { let h = 2166136261; for (const c of s) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619); } return h >>> 0; }
  function rng(seed) { let s = seed || 1; return () => ((s = Math.imul(s ^ (s >>> 15), 2246822507) ^ Math.imul(s ^ (s >>> 13), 3266489909)) >>> 0) / 4294967296; }
  function portrait(id) {
    const key = id + (isDark() ? "d" : "l");
    if (portraitCache[key]) return portraitCache[key];
    const e = ECO[id];
    const S = 240, c = document.createElement("canvas");
    c.width = c.height = S;
    const g = c.getContext("2d");
    const col = schoolColor(id), card = cssVar("--card"), ink = cssVar("--ink");
    const R = rng(hash(id));
    if (document.fonts && !document.fonts.check("700 34px Cinzel")) avantPolices = true;
    const cx = S / 2, cy = S / 2;
    g.lineWidth = 0.7;
    const petals = 7 + Math.floor(R() * 9), petals2 = 11 + Math.floor(R() * 14);
    for (let L = 0; L < 4; L++) {
      const base = 62 + L * 13, amp = 6 + R() * 7, k = L % 2 ? petals : petals2;
      for (let m = 0; m < 3; m++) {
        g.beginPath();
        for (let i = 0; i <= 360; i++) {
          const t = (i / 360) * Math.PI * 2;
          const r = base + amp * Math.sin(k * t + m * 2.1) + 3 * Math.sin((k * 3) * t);
          const x = cx + r * Math.cos(t), y = cy + r * Math.sin(t);
          i ? g.lineTo(x, y) : g.moveTo(x, y);
        }
        g.strokeStyle = col; g.globalAlpha = 0.35 + 0.15 * (L % 2);
        g.stroke();
      }
    }
    g.globalAlpha = 1;
    g.beginPath(); g.arc(cx, cy, 112, 0, Math.PI * 2); g.strokeStyle = col; g.lineWidth = 1.4; g.stroke();
    for (let i = 0; i < 96; i++) {
      const a = (i / 96) * Math.PI * 2;
      g.beginPath(); g.moveTo(cx + 106 * Math.cos(a), cy + 106 * Math.sin(a)); g.lineTo(cx + (i % 4 ? 109 : 113) * Math.cos(a), cy + (i % 4 ? 109 : 113) * Math.sin(a));
      g.lineWidth = 0.8; g.stroke();
    }
    g.beginPath(); g.arc(cx, cy, 50, 0, Math.PI * 2); g.fillStyle = card; g.fill(); g.lineWidth = 2; g.strokeStyle = col; g.stroke();
    g.beginPath(); g.arc(cx, cy, 44, 0, Math.PI * 2); g.lineWidth = 0.7; g.stroke();
    g.fillStyle = ink; g.textAlign = "center"; g.textBaseline = "middle";
    g.font = "700 34px Cinzel, Georgia, serif";
    g.fillText(e.ini, cx, cy + 2);
    const url = toUrl(c); URL_ID[url] = id;
    return (portraitCache[key] = url);
  }
  window.OECAPP.portrait = portrait;

  /* ---------- Héros : rosace animée ---------- */
  function hero() {
    const cv = $("#heroCanvas"), g = cv.getContext("2d");
    let W = 0, H = 0, dpr = 1, running = true, t0 = performance.now();
    const words = "ŒCONOMIA · BANQUE DES IDÉES · SMITH · RICARDO · MARX · WALRAS · KEYNES · HAYEK · FRIEDMAN · OSTROM · SEN · ";
    $("#mtTop").textContent = words.repeat(6);
    $("#mtBot").textContent = words.split("").reverse().join("").repeat(6);
    function size() {
      const r = cv.getBoundingClientRect(); dpr = Math.min(2, window.devicePixelRatio || 1);
      W = r.width; H = r.height; cv.width = W * dpr; cv.height = H * dpr; g.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    function draw(now) {
      const time = (now - t0) / 1000;
      g.clearRect(0, 0, W, H);
      const cx = W * 0.5, cy = H * 0.47, R = Math.min(W, H) * 0.4;
      const cols = [cssVar("--note"), cssVar("--plum"), cssVar("--gold")];
      g.lineWidth = 0.6;
      for (let L = 0; L < 6; L++) {
        const base = R * (0.3 + 0.13 * L), amp = R * (0.05 + 0.012 * L), k = 12 + 4 * L;
        const ph = time * 0.12 * (L % 2 ? 1 : -1);
        for (let m = 0; m < 3; m++) {
          g.beginPath();
          for (let i = 0; i <= 900; i++) {
            const a = (i / 900) * Math.PI * 2;
            const r = base + amp * Math.sin(k * a + ph + m * 2.09) + amp * 0.35 * Math.sin((k + 3) * a - ph * 1.7);
            const x = cx + r * Math.cos(a), y = cy + r * Math.sin(a) * 0.92;
            i ? g.lineTo(x, y) : g.moveTo(x, y);
          }
          g.strokeStyle = cols[(L + m) % 3]; g.globalAlpha = 0.5;
          g.stroke();
        }
      }
      g.globalAlpha = 1;
      g.beginPath(); g.arc(cx, cy, R * 0.26, 0, Math.PI * 2); g.fillStyle = cssVar("--card"); g.fill();
      g.lineWidth = 1.5; g.strokeStyle = cols[0]; g.stroke();
      g.fillStyle = cssVar("--ink"); g.textAlign = "center"; g.textBaseline = "middle";
      g.font = `italic ${Math.round(R * 0.32)}px "Instrument Serif", Georgia, serif`;
      g.fillText("Œ", cx, cy + R * 0.02);
      if (running && !reduced) requestAnimationFrame(draw);
    }
    size(); requestAnimationFrame(draw);
    window.addEventListener("resize", () => { size(); if (reduced || !running) requestAnimationFrame(draw); });
    document.addEventListener("oec-theme", () => { if (reduced || !running) requestAnimationFrame(draw); });
    new IntersectionObserver(([en]) => {
      const was = running; running = en.isIntersecting;
      if (running && !was && !reduced) requestAnimationFrame(draw);
    }).observe(cv);
  }

  /* ---------- Bande de citations ---------- */
  function ticker() {
    const items = OEC.economists.filter((e) => e.citation && e.type !== "formule" && e.citation.length < 140);
    const html = items.map((e) => `<span class="ticker-item">« ${e.citation} »<b>${e.nom}</b></span>`).join("");
    $("#ticker").innerHTML = html + html;
  }

  /* ---------- Frise ---------- */
  let tlIndex = 7;
  function timeline() {
    const track = $("#tlTrack"), scroller = $("#tlScroller"), STEP = 150, PAD = 90;
    track.style.width = PAD * 2 + (OEC.timeline.length - 1) * STEP + "px";
    let lastEra = null;
    const eraFirst = {};
    OEC.timeline.forEach((ev, i) => {
      const x = PAD + i * STEP;
      if (ev.era !== lastEra) {
        track.appendChild(el("div", { class: "tl-era", style: `left:${x - STEP / 2}px` }, `<span>${ev.era}</span>`));
        eraFirst[ev.era] = i; lastEra = ev.era;
      }
      const b = el("button", { class: "tl-ev" + (ev.crisis ? " crisis" : ""), style: `left:${x}px`, "data-i": i, "aria-label": `${fmtYear(ev.y)} : ${ev.t}` },
        `<span class="yr">${ev.y < 0 ? "−" + Math.abs(ev.y) : ev.y}</span><span class="ttl">${ev.t}</span><span class="stem"></span><span class="dot"></span>`);
      b.addEventListener("click", () => { if (!moved) selectTl(i, true); });
      track.appendChild(b);
    });
    const legend = $("#tlEras");
    Object.keys(eraFirst).forEach((era) => legend.appendChild(el("button", { onclick: () => selectTl(eraFirst[era], true) }, era)));
    $("#tlPrev").onclick = () => selectTl(Math.max(0, tlIndex - 1), true);
    $("#tlNext").onclick = () => selectTl(Math.min(OEC.timeline.length - 1, tlIndex + 1), true);
    scroller.addEventListener("keydown", (e) => { if (e.key === "ArrowRight") { e.preventDefault(); $("#tlNext").click(); } if (e.key === "ArrowLeft") { e.preventDefault(); $("#tlPrev").click(); } });
    // glisser pour défiler
    let down = false, sx = 0, sl = 0, moved = false;
    scroller.addEventListener("pointerdown", (e) => { if (e.pointerType !== "mouse") return; down = true; moved = false; sx = e.clientX; sl = scroller.scrollLeft; });
    window.addEventListener("pointermove", (e) => { if (!down) return; const dx = e.clientX - sx; if (Math.abs(dx) > 4) { moved = true; scroller.classList.add("drag"); } scroller.scrollLeft = sl - dx; });
    window.addEventListener("pointerup", () => { down = false; scroller.classList.remove("drag"); setTimeout(() => (moved = false), 0); });
    selectTl(tlIndex, false);
    window.OECAPP.selectTimeline = (i) => selectTl(i, true);
    const st = $("#tlStart");
    if (st) {
      const at = (y) => OEC.timeline.findIndex((e) => e.y === y);
      const picks = [[0, "Depuis le début"], [at(1776), "La naissance de l’économie"], [at(1929), "Le krach de 1929"], [OEC.timeline.length - 1, "Les idées d’aujourd’hui"]].filter(([i]) => i >= 0);
      st.innerHTML = picks.map(([i, lbl]) => { const e = OEC.timeline[i]; return `<button class="chip" data-tl="${i}"><span class="mono" style="opacity:.7">${e.y < 0 ? "−" + Math.abs(e.y) : e.y}</span> ${lbl}</button>`; }).join("");
      st.addEventListener("click", (ev) => { const b = ev.target.closest("[data-tl]"); if (!b) return; selectTl(+b.dataset.tl, true); $("#tlDetail").scrollIntoView({ block: "nearest", behavior: reduced ? "auto" : "smooth" }); });
    }
  }
  function selectTl(i, scroll) {
    tlIndex = i;
    const ev = OEC.timeline[i];
    $$(".tl-ev").forEach((b) => b.classList.toggle("on", +b.dataset.i === i));
    if (scroll) {
      const sc = $("#tlScroller"), b = $(`.tl-ev[data-i="${i}"]`);
      sc.scrollTo({ left: b.offsetLeft - sc.clientWidth / 2, behavior: reduced ? "auto" : "smooth" });
    }
    const d = $("#tlDetail");
    d.innerHTML = "";
    d.appendChild(el("div", { class: "big-yr mono" }, ev.y < 0 ? "−" + Math.abs(ev.y) : ev.y));
    d.appendChild(el("div", {}, `<p class="eyebrow">${ev.era}</p><h3 style="margin-top:8px">${ev.t}</h3><p>${ev.d}</p>`));
    const acts = el("div", { class: "acts" });
    if (ev.who) {
      const e = ECO[ev.who];
      acts.appendChild(el("a", { class: "btn small", href: "#eco-" + ev.who }, `<img src="${portrait(ev.who)}" alt="" width="22" height="22"> ${e.nom}`));
    }
    if (ev.crisis) acts.appendChild(el("a", { class: "btn small", href: "#crises", "data-crisis": ev.crisis }, "Anatomie de la crise →"));
    d.appendChild(acts);
    const ep = $("#tlEra");
    if (ep && OEC.eras) { const slug = "ep-" + ev.era.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z]+/g, "-").replace(/-$/, ""); ep.innerHTML = `<div><p class="eyebrow">L’époque</p><h3 style="margin-top:8px">${ev.era}</h3></div><p>${OEC.eras[ev.era] || ""} <a href="#histoire" data-scroll="${slug}" style="font-weight:700">Lire le chapitre →</a></p>`; }
  }

  /* ---------- Panthéon ---------- */
  let filterSchool = "all", filterText = "";
  function pantheon() {
    const f = $("#filters");
    const used = [...new Set(OEC.economists.map((e) => e.ecole))];
    f.appendChild(el("button", { class: "chip on", "data-s": "all" }, "Toutes les écoles"));
    used.forEach((s) => f.appendChild(el("button", { class: "chip", "data-s": s }, `<i style="background:var(${OEC.schools[s].token})"></i>${OEC.schools[s].label}`)));
    f.appendChild(el("input", { class: "search", id: "ecoSearch", type: "search", placeholder: "Chercher un nom, une idée…", "aria-label": "Chercher un économiste" }));
    f.addEventListener("click", (e) => {
      const b = e.target.closest(".chip"); if (!b) return;
      filterSchool = b.dataset.s; $$(".chip", f).forEach((c) => c.classList.toggle("on", c === b)); renderGrid();
    });
    $("#ecoSearch").addEventListener("input", (e) => { filterText = e.target.value.toLowerCase(); renderGrid(); });
    if (OEC.remplirTotaux) OEC.remplirTotaux();
    renderGrid();
    document.addEventListener("oec-theme", renderGrid);
  }
  function renderGrid() {
    const g = $("#gridEco"); g.innerHTML = "";
    const norm = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
    const q = norm(filterText);
    OEC.economists
      .filter((e) => (filterSchool === "all" || e.ecole === filterSchool) && (!q || norm(e.nom + " " + e.devise + " " + e.idees.join(" ")).includes(q)))
      .forEach((e) => {
        const b = el("button", { class: "eco", style: `--sc:var(${OEC.schools[e.ecole].token})`, onclick: () => openEco(e.id) },
          `<img src="${portrait(e.id)}" alt="" width="84" height="84"><div><div class="n">${e.nom}</div><div class="v" style="margin-top:6px">${lifespan(e)}</div></div><p class="d">${e.devise}</p><span class="sch">${OEC.schools[e.ecole].label}</span>`);
        g.appendChild(b);
      });
    if (!g.children.length) g.appendChild(el("p", { class: "muted" }, "Aucun économiste ne correspond à cette recherche."));
  }

  /* ---------- Fiche : page dédiée (voir pages.js) ---------- */
  function openEco(id) { if (ECO[id] && ECO[id].idees) window.OECAPP.go("eco-" + id); }
  window.OECAPP.openEco = openEco;

  /* ---------- Le Ring ---------- */
  let debate = null, playToken = 0, scores = { a: 0, b: 0 }, shown = 0;
  function ring() {
    const box = $("#bouts");
    OEC.debates.forEach((d) => {
      const b = el("button", { class: "bout", "data-id": d.id, onclick: () => selectDebate(d.id) },
        `<span class="vs">${shortName(ECO[d.a]).toUpperCase()}<em>vs</em>${shortName(ECO[d.b]).toUpperCase()}</span><small>${d.titre}</small><small class="mono">${d.lieu} · ${d.annee}</small>`);
      box.appendChild(b);
    });
    $("#playBtn").onclick = () => { if (!started || finished) startDebate(); else nextReply(); };
    $("#skipBtn").onclick = () => { playToken++; busy = false; $$(".typing").forEach((t) => t.remove()); while (shown < debate.rounds.length) addMsg(shown++); finish(); };
    $("#autoPlay").addEventListener("change", (e) => { if (e.target.checked && started && !finished && !busy) scheduleNext(900); else if (!e.target.checked) { clearTimeout(autoTimer); barre(0); } });
    selectDebate(OEC.debates[0].id);
    // table ronde
    const qs = $("#rtQs");
    OEC.roundtable.forEach((r, i) => qs.appendChild(el("button", { class: "chip" + (i === 0 ? " on" : ""), onclick: (ev) => { $$(".chip", qs).forEach((c) => c.classList.remove("on")); ev.currentTarget.classList.add("on"); roundtable(i); } }, r.q)));
    roundtable(0);
    document.addEventListener("oec-theme", () => { renderArenaHead(); roundtable(rtCur); });
  }
  function renderArenaHead() {
    if (!debate) return;
    const A = ECO[debate.a], B = ECO[debate.b];
    $("#arenaHead").innerHTML = `
      <div class="fighter"><img src="${portrait(A.id)}" alt="" width="62" height="62"><div><a href="#eco-${A.id}" style="color:inherit; text-decoration:none"><b>${A.nom}</b></a><small>${lifespan(A)}</small></div></div>
      <div class="vs-badge">VS</div>
      <div class="fighter r"><img src="${portrait(B.id)}" alt="" width="62" height="62"><div>${B.idees ? `<a href="#eco-${B.id}" style="color:inherit; text-decoration:none"><b>${B.nom}</b></a>` : `<b>${B.nom}</b>`}<small>${lifespan(B)}</small></div></div>`;
  }
  function selectDebate(id) {
    playToken++; clearTimeout(autoTimer);
    debate = OEC.debates.find((d) => d.id === id);
    $$(".bout").forEach((b) => b.classList.toggle("on", b.dataset.id === id));
    renderArenaHead();
    $("#arenaCtx").innerHTML = `<b style="color:var(--ink)">${debate.titre}</b> ${debate.contexte}`;
    scores = { a: 0, b: 0 }; shown = 0; started = false; finished = false; busy = false; updateMeter();
    const chat = $("#chat"); chat.innerHTML = "";
    chat.appendChild(el("p", { class: "muted", style: "margin:auto; text-align:center; font-size:14px" }, `${debate.rounds.length} répliques vous attendent. Vous passez à la suivante quand vous êtes prêt.`));
    $("#playBtn").textContent = "Lancer le débat"; $("#skipBtn").hidden = true; $("#stepCount").textContent = "";
  }
  window.OECAPP.selectDebate = selectDebate;
  function updateMeter() {
    const w = ((scores.a + 1) / (scores.a + scores.b + 2)) * 100;
    $("#meterFill").style.width = w + "%";
    $("#scoreA").textContent = `${shortName(ECO[debate.a])} ${scores.a}`;
    $("#scoreB").textContent = `${scores.b} ${shortName(ECO[debate.b])}`;
  }
  function addMsg(i) {
    const [side, txt, src] = debate.rounds[i];
    const who = ECO[debate[side]];
    const m = el("div", { class: "msg " + side }, `<span class="who">${who.nom}</span><div class="bubble">${txt}</div>`);
    const foot = el("div", { class: "msg-foot" });
    const clap = el("button", { class: "clap" }, "Convaincant");
    clap.onclick = () => { if (clap.classList.contains("done")) return; clap.classList.add("done"); clap.textContent = "Point marqué"; scores[side]++; updateMeter(); };
    foot.appendChild(clap);
    if (src) foot.appendChild(el("span", { class: "src" }, "D’après " + src));
    m.appendChild(foot);
    const chat = $("#chat"); chat.appendChild(m);
    chat.scrollTo({ top: m.offsetTop - 12, behavior: reduced ? "auto" : "smooth" });
  }
  let started = false, finished = false, busy = false, autoTimer = 0;
  const readTime = (txt) => 2500 + txt.replace(/<[^>]+>/g, "").split(/\s+/).length * 320;
  function updateControls() {
    $("#stepCount").textContent = started ? `${shown} / ${debate.rounds.length}` : "";
    if (!finished) $("#playBtn").textContent = shown === 0 ? "Lancer le débat" : "Réplique suivante →";
  }
  function startDebate() {
    playToken++; clearTimeout(autoTimer);
    $("#chat").innerHTML = ""; shown = 0; scores = { a: 0, b: 0 }; started = true; finished = false; busy = false; updateMeter();
    $("#skipBtn").hidden = false;
    nextReply();
  }
  /* Barre de lecture : se remplit pendant le temps laissé pour lire la réplique, avant la suivante */
  function barre(ms) {
    const i = document.querySelector("#autoBar i"); if (!i) return;
    i.style.transition = "none"; i.style.width = "0";
    if (ms && !reduced) { void i.offsetWidth; i.style.transition = `width ${ms}ms linear`; i.style.width = "100%"; }
  }
  function scheduleNext(ms) {
    clearTimeout(autoTimer); barre(ms);
    const my = playToken;
    autoTimer = setTimeout(() => { if (my === playToken && $("#autoPlay").checked && !finished) nextReply(); }, ms);
  }
  function nextReply() {
    if (busy || finished) return;
    clearTimeout(autoTimer); barre(0);
    const my = playToken, chat = $("#chat");
    busy = true; $("#playBtn").disabled = true;
    const side = debate.rounds[shown][0];
    const typing = el("div", { class: "typing " + side }, "<i></i><i></i><i></i>");
    chat.appendChild(typing); chat.scrollTop = chat.scrollHeight;
    setTimeout(() => {
      if (my !== playToken) return;
      typing.remove(); addMsg(shown++);
      busy = false; $("#playBtn").disabled = false; updateControls();
      if (shown >= debate.rounds.length) finish();
      else if ($("#autoPlay").checked) scheduleNext(readTime(debate.rounds[shown - 1][1]));
    }, reduced ? 50 : 750);
  }
  function finish() {
    finished = true; clearTimeout(autoTimer); barre(0);
    $$(".typing").forEach((t) => t.remove());
    $("#skipBtn").hidden = true; $("#playBtn").disabled = false; $("#playBtn").textContent = "Rejouer"; $("#stepCount").textContent = `${shown} / ${debate.rounds.length}`;
    const A = ECO[debate.a], B = ECO[debate.b];
    let yours;
    if (scores.a === scores.b) yours = scores.a === 0 ? "Vous n’avez encore donné aucun point. Cliquez sur « Convaincant » sous les répliques qui vous ont persuadé." : "Match nul dans votre jauge : vous trouvez des arguments justes des deux côtés.";
    else yours = `Pour vous, <b>${(scores.a > scores.b ? A : B).nom}</b> l’emporte, ${Math.max(scores.a, scores.b)} à ${Math.min(scores.a, scores.b)}.`;
    const v = el("div", { class: "verdict" }, `<h4>Votre verdict</h4><p>${yours}</p><h4 style="margin-top:14px">Vu d’aujourd’hui</h4>${typeof debate.verdict === "string" ? `<p>${debate.verdict}</p>` : `<p><b>Ce que les faits ont tranché.</b> ${debate.verdict.faits}</p><p><b>Ce qui reste une question de valeurs ou d’incertitude.</b> ${debate.verdict.ouvert}</p>`}${(() => { const q = (OEC.questions || []).find((q) => q.liens.debat === debate.id); return q ? `<p style="margin-top:12px"><a href="#q-${q.id}" style="font-weight:700">Approfondir : ${q.titre} →</a></p>` : ""; })()}`);
    const chat = $("#chat"); chat.appendChild(v); chat.scrollTop = chat.scrollHeight;
  }
  let rtCur = 0;
  function roundtable(i) {
    rtCur = i;
    const g = $("#rtGrid"); g.innerHTML = "";
    OEC.roundtable[i].r.forEach(([id, txt], k) => {
      const e = ECO[id];
      g.appendChild(el("article", { class: "rt-card", style: `animation-delay:${k * 90}ms; border-top:3px solid var(${OEC.schools[e.ecole].token})` },
        `<header><img src="${portrait(id)}" alt="" width="40" height="40"><div><a href="#eco-${id}" style="color:inherit; text-decoration:none"><b>${e.nom}</b></a><div class="mono muted" style="font-size:11px; margin-top:3px">${lifespan(e)}</div></div></header><p>${txt}</p>`));
    });
  }

  /* ---------- Généalogie ---------- */
  function genealogy() {
    const cv = $("#mapCanvas"), g = cv.getContext("2d"), wrap = cv.parentElement, tip = $("#mapTip");
    wrap.style.overflowX = "auto";
    const nodes = OEC.economists.map((e) => ({ id: e.id, e, x: 0, y: 0, vy: 0 }));
    const byId = {}; nodes.forEach((n) => (byId[n.id] = n));
    const links = OEC.influences.map(([s, t, k]) => ({ s: byId[s], t: byId[t], k }));
    let W = 0, H = 0, dpr = 1, hover = null, focus = null;
    const yearToX = (y) => {
      const segs = [[-400, 0], [1350, 0.07], [1550, 0.12], [1700, 0.2], [2010, 1]];
      for (let i = 1; i < segs.length; i++) if (y <= segs[i][0]) { const [a, fa] = segs[i - 1], [b, fb] = segs[i]; return fa + ((y - a) / (b - a)) * (fb - fa); }
      return 1;
    };
    const flor = (e) => (e.vie[0] < 0 ? e.vie[0] + 40 : e.vie[0] + 38);
    function layout() {
      const vw = wrap.clientWidth; W = Math.max(1150, vw); H = cv.clientHeight || 600;
      cv.style.width = W + "px";
      dpr = Math.min(2, window.devicePixelRatio || 1); cv.width = W * dpr; cv.height = H * dpr; g.setTransform(dpr, 0, 0, dpr, 0, 0);
      const L = 40, Rr = 150;
      nodes.forEach((n) => { n.x = L + yearToX(flor(n.e)) * (W - L - Rr); n.y = H / 2 + ((hash(n.id) % 1000) / 1000 - 0.5) * (H - 140); n.vy = 0; });
      for (let it = 0; it < 400; it++) {
        nodes.forEach((n) => (n.f = (H / 2 - n.y) * 0.0012));
        links.forEach((l) => { const d = l.t.y - l.s.y; l.s.f += d * 0.0025; l.t.f -= d * 0.0025; });
        for (let i = 0; i < nodes.length; i++) for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j], dx = Math.abs(a.x - b.x);
          if (dx > 170) continue;
          let dy = a.y - b.y; if (Math.abs(dy) < 0.1) dy = (i % 2 ? 0.1 : -0.1);
          const need = 64 * (1 - dx / 190) + 10;
          if (Math.abs(dy) < need) { const push = (need - Math.abs(dy)) * 0.25 * Math.sign(dy); a.f += push; b.f -= push; }
        }
        nodes.forEach((n) => { n.vy = (n.vy + n.f) * 0.6; n.y = Math.max(60, Math.min(H - 30, n.y + n.vy)); });
      }
      draw();
    }
    function lineage(id) {
      const up = new Set([id]), down = new Set([id]);
      let ch = true; while (ch) { ch = false; OEC.influences.forEach(([s, t]) => { if (up.has(t) && !up.has(s)) { up.add(s); ch = true; } }); }
      ch = true; while (ch) { ch = false; OEC.influences.forEach(([s, t]) => { if (down.has(s) && !down.has(t)) { down.add(t); ch = true; } }); }
      return { up, down };
    }
    function draw() {
      g.clearRect(0, 0, W, H);
      const ink = cssVar("--ink"), soft = cssVar("--ink-soft"), line = cssVar("--line"), gold = cssVar("--gold");
      // repères de temps
      g.font = '500 11px "JetBrains Mono", monospace'; g.textAlign = "center";
      [-350, 1400, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 2000].forEach((y) => {
        const x = 40 + yearToX(y) * (W - 190);
        g.strokeStyle = line; g.lineWidth = 1; g.setLineDash([2, 4]); g.beginPath(); g.moveTo(x, 34); g.lineTo(x, H - 10); g.stroke(); g.setLineDash([]);
        g.fillStyle = soft; g.fillText(y < 0 ? "−350" : y, x, 22);
      });
      const act = hover || focus;
      const lin = act ? lineage(act.id) : null;
      const inL = (id) => !lin || lin.up.has(id) || lin.down.has(id);
      links.forEach((l) => {
        const hot = lin && ((lin.up.has(l.s.id) && lin.up.has(l.t.id)) || (lin.down.has(l.s.id) && lin.down.has(l.t.id)));
        g.beginPath();
        const mx = (l.s.x + l.t.x) / 2;
        g.moveTo(l.s.x, l.s.y); g.bezierCurveTo(mx, l.s.y, mx, l.t.y, l.t.x, l.t.y);
        g.setLineDash(l.k === "c" ? [5, 4] : []);
        g.strokeStyle = hot ? (l.k === "c" ? cssVar("--serial") : gold) : line;
        g.lineWidth = hot ? 2 : 1.2; g.globalAlpha = !lin || hot ? 1 : 0.35;
        g.stroke(); g.setLineDash([]); g.globalAlpha = 1;
      });
      nodes.forEach((n) => {
        const on = inL(n.id);
        g.globalAlpha = on ? 1 : 0.22;
        const col = schoolColor(n.id);
        g.beginPath(); g.arc(n.x, n.y, act && act.id === n.id ? 10 : 7, 0, Math.PI * 2); g.fillStyle = col; g.fill();
        g.lineWidth = 2; g.strokeStyle = cssVar("--card"); g.stroke();
        g.fillStyle = ink; g.textAlign = "left"; g.font = (act && act.id === n.id ? "700 " : "600 ") + '13px Manrope, sans-serif';
        g.fillText(shortName(n.e), n.x + 12, n.y + 4);
        g.globalAlpha = 1;
      });
    }
    function pick(ev) {
      const r = cv.getBoundingClientRect(), x = ev.clientX - r.left, y = ev.clientY - r.top;
      let best = null, bd = 18;
      nodes.forEach((n) => { const d = Math.hypot(n.x - x, n.y - y); const dl = (x > n.x && x < n.x + 12 + shortName(n.e).length * 7.5 && Math.abs(y - n.y) < 9) ? 0 : d; if (dl < bd) { bd = dl; best = n; } });
      return best;
    }
    cv.addEventListener("pointermove", (ev) => {
      const n = pick(ev);
      if (n !== hover) { hover = n; draw(); }
      cv.style.cursor = n ? "pointer" : "default";
      if (n) {
        tip.innerHTML = `<b>${n.e.nom}</b><br><span style="opacity:.8">${n.e.devise}</span><br><span style="opacity:.65; font-size:12px">${focus === n ? "Cliquez encore pour ouvrir sa fiche" : "Cliquez pour suivre sa lignée"}</span>`;
        tip.style.left = n.x - wrap.scrollLeft + "px"; tip.style.top = n.y + "px"; tip.style.opacity = 1;
      } else tip.style.opacity = 0;
    });
    cv.addEventListener("pointerleave", () => { hover = null; tip.style.opacity = 0; draw(); });
    cv.addEventListener("click", (ev) => {
      const n = pick(ev);
      if (!n) { setFocus(null); return; }
      if (focus === n) openEco(n.id); else setFocus(n.id, false);
    });
    const info = $("#mapInfo"), hint = $("#mapHint");
    const chip = (id, crit) => `<button class="chip${crit ? " crit" : ""}" data-mf="${id}" title="${crit ? "relation de critique" : "relation d’héritage"}"><i style="background:${schoolColor(id)}"></i>${ECO[id].nom}${crit ? " <span style=\"opacity:.8\">(critique)</span>" : ""}</button>`;
    function center(n) { wrap.scrollLeft = n.x - wrap.clientWidth / 2; }
    function setFocus(id, scroll = true) {
      focus = id ? byId[id] : null; hover = null; tip.style.opacity = 0;
      hint.classList.add("off");
      draw(); if (focus && scroll) center(focus);
      const ps = $("#mapPick"); if (ps) ps.value = focus ? focus.id : "";
      renderInfo();
    }
    function renderInfo() {
      if (!focus) {
        info.innerHTML = `<p class="eyebrow">Petit défi</p><h3 style="margin-top:6px">Qui a inspiré à la fois Marx, Hayek et Sen ?</h3>
          <p class="muted" style="margin:6px 0 0">Un révolutionnaire, un libéral et un penseur du développement : ils ont pourtant un maître commun. Faites un pari, la carte vous donnera la réponse.</p>
          <div class="mi-quiz">${["ricardo", "smith", "keynes"].map((id) => `<button class="btn small ghost" data-quiz="${id}">${ECO[id].nom}</button>`).join("")}</div><div class="mi-res" id="miRes"></div>`;
        return;
      }
      const id = focus.id, e = focus.e, L = lineage(id);
      const parents = OEC.influences.filter(([, t]) => t === id), kids = OEC.influences.filter(([s]) => s === id);
      const nUp = L.up.size - 1, nDown = L.down.size - 1;
      info.innerHTML = `<header><img src="${portrait(id)}" alt="" width="48" height="48"><div><h3>${e.nom}</h3><div class="mono muted" style="font-size:12px; margin-top:3px">${lifespan(e)} · ${OEC.schools[e.ecole].label}</div></div></header>
        <p style="margin:12px 0 0">${e.devise}</p>
        <p class="muted" style="margin:8px 0 0; font-size:13.5px">Sur la carte, sa lignée remonte à <b>${nUp}</b> auteur${nUp > 1 ? "s" : ""} et se prolonge chez <b>${nDown}</b> autre${nDown > 1 ? "s" : ""}.</p>
        <div class="mi-cols">
          <div><h4>Ses inspirateurs</h4><div class="mi-chips">${parents.length ? parents.map(([s, , k]) => chip(s, k === "c")).join("") : `<span class="muted" style="font-size:13.5px">Personne sur la carte : c’est un point de départ.</span>`}</div></div>
          <div><h4>Ses héritiers et ses critiques</h4><div class="mi-chips">${kids.length ? kids.map(([, t, k]) => chip(t, k === "c")).join("") : `<span class="muted" style="font-size:13.5px">Personne sur la carte pour l’instant : ses héritiers sont encore au travail.</span>`}</div></div>
        </div>
        <div class="mi-actions"><button class="btn small" data-open="${id}">Lire la fiche de ${shortName(e)} →</button><button class="btn small ghost" data-clear>Effacer et relever le défi</button><span class="muted" style="font-size:12.5px">Touchez un nom ci-dessus pour suivre le fil.</span></div>`;
    }
    info.addEventListener("click", (ev) => {
      const b = ev.target.closest("button"); if (!b) return;
      if (b.dataset.mf) setFocus(b.dataset.mf);
      else if (b.dataset.open) openEco(b.dataset.open);
      else if ("clear" in b.dataset) setFocus(null);
      else if (b.dataset.quiz) {
        const ok = b.dataset.quiz === "smith", res = $("#miRes");
        info.querySelectorAll("[data-quiz]").forEach((x) => (x.disabled = true));
        res.innerHTML = (ok ? "<b>Bien vu !</b> " : `<b>Pas tout à fait.</b> ${ECO[b.dataset.quiz].nom} n’a pas inspiré directement les trois. `) +
          `C’est <b>Adam Smith</b> : Marx reprend sa théorie de la valeur pour la retourner, Hayek son ordre spontané, Sen sa philosophie morale. <button class="btn small" data-mf="smith" style="margin-left:6px">Voir la lignée de Smith sur la carte</button>`;
      }
    });
    const start = $("#mapStart");
    start.innerHTML = [["smith", "le fondateur"], ["marx", "le critique"], ["keynes", "le réformateur"], ["duflo", "une contemporaine"]].map(([id, why]) => `<button class="chip" data-s="${id}"><i style="background:${schoolColor(id)}"></i>${shortName(ECO[id])} <span style="opacity:.8; font-weight:500">${why}</span></button>`).join("");
    start.addEventListener("click", (ev) => { const b = ev.target.closest("[data-s]"); if (b) { setFocus(b.dataset.s); document.getElementById("mapCanvas").scrollIntoView({ block: "center", behavior: "smooth" }); } });
    const pickSel = $("#mapPick");
    if (pickSel) {
      pickSel.insertAdjacentHTML("beforeend", OEC.economists.map((e) => `<option value="${e.id}">${e.nom} (${lifespan(e)})</option>`).join(""));
      pickSel.addEventListener("change", () => { setFocus(pickSel.value || null); if (pickSel.value) info.scrollIntoView({ block: "nearest", behavior: reduced ? "auto" : "smooth" }); });
    }
    renderInfo();
    window.OECAPP.mapFocus = (id) => setFocus(id);
    const leg = $("#mapLegend");
    leg.innerHTML = Object.entries(OEC.schools).map(([k, s]) => `<span><i style="width:10px;height:10px;border-radius:50%;background:var(${s.token});display:inline-block"></i>${s.label}</span>`).join("") +
      `<span><svg width="26" height="6"><line x1="0" y1="3" x2="26" y2="3" stroke="var(--ink-soft)" stroke-width="1.5"/></svg>héritage</span><span><svg width="26" height="6"><line x1="0" y1="3" x2="26" y2="3" stroke="var(--ink-soft)" stroke-width="1.5" stroke-dasharray="5 4"/></svg>critique</span>`;
    layout();
    let rt; window.addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(layout, 150); });
    document.addEventListener("oec-theme", draw);
  }

  /* ---------- Crises ---------- */
  let crisis = OEC.crises[2], phase = 0, markerLen = 0, markerAnim = 0;
  const PHASE_AT = [0.07, 0.3, 0.5, 0.64, 0.84];
  function crises() {
    const tabs = $("#crisisTabs");
    OEC.crises.forEach((c) => tabs.appendChild(el("button", { class: "chip", "data-c": c.id, onclick: () => showCrisis(c.id) }, `${c.nom} <span class="mono" style="opacity:.7">${c.annee}</span>`)));
    const svg = $("#bubbleSvg");
    svg.innerHTML = `
      <defs><linearGradient id="bgr" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="var(--serial)" stop-opacity=".28"/><stop offset="1" stop-color="var(--serial)" stop-opacity="0"/></linearGradient></defs>
      <line x1="30" y1="280" x2="580" y2="280" stroke="var(--line)" stroke-width="1.5"/>
      <text x="580" y="274" class="chart-txt" text-anchor="end">temps →</text>
      <text x="16" y="40" class="chart-txt" transform="rotate(-90 16 40)" text-anchor="end">prix de l’actif</text>
      <path id="bArea" fill="url(#bgr)" d="M30,262 C120,258 170,240 230,200 S330,60 380,48 C410,42 430,90 450,150 S520,270 575,262 L575,280 L30,280 Z"/>
      <path id="bPath" fill="none" stroke="var(--serial)" stroke-width="3" stroke-linecap="round" d="M30,262 C120,258 170,240 230,200 S330,60 380,48 C410,42 430,90 450,150 S520,270 575,262"/>
      <g id="bTicks"></g>
      <circle id="bDot" r="9" fill="var(--serial)" stroke="var(--card)" stroke-width="3"/>
      <g id="bLabel"><rect rx="6" height="26" fill="var(--ink)"/><text fill="var(--paper)" font-size="12" font-weight="700" font-family="Manrope, sans-serif" text-anchor="middle"></text></g>`;
    const path = $("#bPath"), total = path.getTotalLength();
    const ticks = $("#bTicks");
    PHASE_AT.forEach((f, i) => {
      const p = path.getPointAtLength(f * total);
      ticks.insertAdjacentHTML("beforeend", `<line x1="${p.x}" y1="${p.y + 12}" x2="${p.x}" y2="280" stroke="var(--line)" stroke-dasharray="3 3"/><text x="${p.x}" y="${i % 2 ? 314 : 298}" text-anchor="middle" class="chart-txt">${OEC.phaseNames[i]}</text>`);
    });
    const pb = $("#phaseBtns");
    OEC.phaseNames.forEach((n, i) => pb.appendChild(el("button", { onclick: () => setPhase(i) }, `${i + 1}. ${n}`)));
    svg.setAttribute("viewBox", "0 0 600 322");
    window.OECAPP.showCrisis = showCrisis;
    showCrisis(crisis.id);
  }
  function showCrisis(id) {
    crisis = OEC.crises.find((c) => c.id === id);
    $$("#crisisTabs .chip").forEach((b) => b.classList.toggle("on", b.dataset.c === id));
    $("#crisisMeta").textContent = `${crisis.lieu} · ${crisis.annee}`;
    $("#crisisName").textContent = crisis.nom;
    $("#crisisNum").textContent = crisis.chiffre;
    $("#crisisNumLbl").textContent = crisis.chiffreLabel;
    const th = ECO[crisis.theorie];
    $("#crisisLesson").innerHTML = `<b>La leçon.</b> ${crisis.lecon} <br><br><button class="btn small ghost" id="crisisEco"><img src="${portrait(th.id)}" alt="" width="22" height="22"> Lire ${th.nom}</button>`;
    $("#crisisEco").onclick = () => openEco(th.id);
    setPhase(0, true);
  }
  function setPhase(i, instant) {
    phase = i;
    $$("#phaseBtns button").forEach((b, k) => b.classList.toggle("on", k === i));
    const txt = $("#phaseText");
    const last = i === OEC.phaseNames.length - 1;
    const others = OEC.crises.filter((c) => c.id !== crisis.id);
    txt.innerHTML = `<span class="pill bad">Phase ${i + 1} sur ${OEC.phaseNames.length} · ${OEC.phaseNames[i]}</span><br><br>${crisis.phases[i]}` +
      `<span class="phase-nav">${last
        ? `<span class="muted" style="font-size:13px">Fin de la bulle. Comparez avec :</span>${others.map((c) => `<button class="chip" data-cmp="${c.id}">${c.nom}</button>`).join("")}`
        : `<button class="btn small" data-next>Phase suivante : ${OEC.phaseNames[i + 1]} →</button>${i === 0 ? "" : `<button class="chip" data-same>Même phase dans une autre crise</button>`}`}</span>`;
    const nx = txt.querySelector("[data-next]"); if (nx) nx.onclick = () => setPhase(i + 1);
    const sm = txt.querySelector("[data-same]"); if (sm) sm.onclick = () => { const k = OEC.crises.indexOf(crisis), c = OEC.crises[(k + 1) % OEC.crises.length]; showCrisis(c.id); setPhase(i, true); };
    txt.querySelectorAll("[data-cmp]").forEach((b) => (b.onclick = () => showCrisis(b.dataset.cmp)));
    const path = $("#bPath"), total = path.getTotalLength(), target = PHASE_AT[i] * total;
    const start = markerLen, t0 = performance.now(), dur = instant || reduced ? 1 : 900;
    cancelAnimationFrame(markerAnim);
    const tick = (now) => {
      const k = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - k, 3);
      markerLen = start + (target - start) * e;
      const p = path.getPointAtLength(markerLen);
      $("#bDot").setAttribute("cx", p.x); $("#bDot").setAttribute("cy", p.y);
      const lab = $("#bLabel"), t = lab.querySelector("text"), r = lab.querySelector("rect");
      t.textContent = crisis.annee; const w = 16 + crisis.annee.length * 7.4;
      const lx = Math.min(560 - w / 2, Math.max(30 + w / 2, p.x));
      r.setAttribute("x", lx - w / 2); r.setAttribute("y", p.y - 44); r.setAttribute("width", w);
      t.setAttribute("x", lx); t.setAttribute("y", p.y - 27);
      if (k < 1) markerAnim = requestAnimationFrame(tick);
    };
    markerAnim = requestAnimationFrame(tick);
  }

  /* ---------- Boussole ---------- */
  let qi = 0, qx = 0, qy = 0, answered = 0;
  const CS = 520, CM = 46, sc = (v) => CM + ((v + 1) / 2) * (CS - 2 * CM);
  function compass() { renderQuiz(); drawCompass(); document.addEventListener("oec-theme", () => { drawCompass(); if (qi >= OEC.quiz.length) renderQuiz(); }); }
  function userPos() { return answered ? [Math.max(-1, Math.min(1, qx / answered)), Math.max(-1, Math.min(1, qy / answered))] : null; }
  function nearest() {
    const [x, y] = userPos();
    let best = null, bd = 9;
    OEC.economists.forEach((e) => { if (e.x == null) return; const d = Math.hypot(e.x - x, e.y - y); if (d < bd) { bd = d; best = e; } });
    return { e: best, d: bd };
  }
  function drawCompass() {
    const svg = $("#compassSvg");
    const pos = userPos(), nn = qi >= OEC.quiz.length && pos ? nearest() : null;
    let s = `<rect x="${CM}" y="${CM}" width="${CS - 2 * CM}" height="${CS - 2 * CM}" fill="none" stroke="var(--line)"/>
      <line x1="${CS / 2}" y1="${CM}" x2="${CS / 2}" y2="${CS - CM}" stroke="var(--line)"/><line x1="${CM}" y1="${CS / 2}" x2="${CS - CM}" y2="${CS / 2}" stroke="var(--line)"/>
      <text x="${CM}" y="${CS / 2 - 8}" class="chart-txt" text-anchor="start" dx="4">← Marché</text>
      <text x="${CS - CM}" y="${CS / 2 - 8}" class="chart-txt" text-anchor="end" dx="-4">État →</text>
      <text x="${CS / 2}" y="${CM - 14}" class="chart-txt" text-anchor="middle">Terrain, histoire, institutions</text>
      <text x="${CS / 2}" y="${CS - CM + 24}" class="chart-txt" text-anchor="middle">Théorie et modèles</text>`;
    OEC.economists.forEach((e) => {
      if (e.x == null) return;
      const X = sc(e.x), Y = sc(-e.y), hl = nn && nn.e.id === e.id;
      s += `<g class="cdot" data-id="${e.id}" style="cursor:pointer"><circle cx="${X}" cy="${Y}" r="${hl ? 9 : 6}" fill="var(${OEC.schools[e.ecole].token})" stroke="var(--card)" stroke-width="2"/><text x="${X + 9}" y="${Y + 4}" class="chart-txt" style="fill:var(--ink); ${hl ? "font-weight:700" : ""}">${shortName(e)}</text></g>`;
    });
    if (pos) {
      const X = sc(pos[0]), Y = sc(-pos[1]);
      if (nn) s += `<line x1="${X}" y1="${Y}" x2="${sc(nn.e.x)}" y2="${sc(-nn.e.y)}" stroke="var(--gold)" stroke-width="2" stroke-dasharray="4 3"/>`;
      s += `<g style="transition:transform .5s cubic-bezier(.3,1.4,.5,1); transform:translate(${X}px,${Y}px)"><circle r="16" fill="var(--gold)" opacity=".25"/><circle r="8" fill="var(--gold)" stroke="var(--ink)" stroke-width="2"/><text y="-22" text-anchor="middle" class="chart-ttl">Vous</text></g>`;
    }
    svg.innerHTML = s;
    $$(".cdot", svg).forEach((g) => g.addEventListener("click", () => openEco(g.dataset.id)));
  }
  function renderQuiz() {
    const box = $("#quiz");
    if (qi < OEC.quiz.length) {
      const q = OEC.quiz[qi];
      box.innerHTML = `<div class="progress"><i style="width:${(qi / OEC.quiz.length) * 100}%"></i></div>
        <p class="eyebrow">Question ${qi + 1} sur ${OEC.quiz.length}</p>${q.ctx ? `<div class="qctx"><span>La situation</span><p>${q.ctx}</p></div>` : ""}<h3 style="margin-top:14px">${q.q}</h3><div class="opts"></div>
        <p class="muted" style="font-size:13px; margin-top:16px">Votre point doré se déplace sur la carte à chaque réponse.</p>`;
      const opts = $(".opts", box);
      q.o.forEach(([t, dx, dy]) => opts.appendChild(el("button", { class: "opt", onclick: () => { qx += dx; qy += dy; answered++; qi++; renderQuiz(); drawCompass(); } }, t)));
    } else {
      const { e, d } = nearest();
      const [ux, uy] = userPos();
      const second = OEC.economists.filter((o) => o.x != null && o.id !== e.id).sort((p, q) => Math.hypot(p.x - ux, p.y - uy) - Math.hypot(q.x - ux, q.y - uy))[0];
      /* proximité en mots : dix questions ne permettent pas une mesure au pour cent près */
      const prox = d < 0.15 ? "Très proche" : d < 0.35 ? "Proche" : d < 0.6 ? "Plutôt proche" : "Entre plusieurs familles de pensée";
      const loin = OEC.economists.filter((o) => o.x != null).sort((p, q) => Math.hypot(q.x - ux, q.y - uy) - Math.hypot(p.x - ux, p.y - uy))[0];
      box.innerHTML = `<div class="progress"><i style="width:100%"></i></div>
        <p class="eyebrow">Votre résultat</p>
        <div class="result" style="margin-top:16px"><img src="${portrait(e.id)}" alt="" width="110" height="110"><div><p class="muted" style="font-size:14px">Vous pensez comme</p><h3 style="font-size:40px; margin:4px 0 0">${e.nom}</h3><p class="pct mono" style="font-size:20px; margin-top:6px">${prox}</p></div></div>
        <p style="margin-top:16px">${e.devise}</p>
        ${e.citation ? `<p style="margin-top:12px; font:italic 20px/1.35 var(--f-display)">${e.type === "formule" ? e.citation : `« ${e.citation} »`}</p><p class="muted" style="font-size:13px; margin-top:4px">${e.type === "formule" ? `Formule qui résume sa pensée, d’après ${e.source}. Ce ne sont pas ses mots exacts.` : e.source}</p>` : ""}
        ${second ? `<p class="muted" style="margin-top:12px; font-size:14px">Vous n’êtes pas loin non plus de <a href="#eco-${second.id}" style="font-weight:700">${second.nom}</a>.</p>` : ""}
        ${loin ? `<p class="q-loin"><b>Pour sortir de votre bulle :</b> l’auteur le plus éloigné de vos réponses est <a href="#eco-${loin.id}">${loin.nom}</a>. ${loin.devise} <a href="#eco-${loin.id}">Découvrir ${loin.nom.split(" ").slice(-1)[0]} →</a></p>` : ""}
        <div class="btn-row" style="margin-top:20px"><button class="btn small" id="qOpen">Lire sa fiche</button><button class="btn small" id="qShare">Partager mon résultat</button><button class="btn small ghost" id="qAgain">Recommencer</button></div>
        <div class="share-box" id="qShareBox" hidden><p class="muted" style="font-size:13px; margin:0 0 6px">Copiez ce message et envoyez-le à qui vous voulez :</p><textarea readonly rows="3" aria-label="Message à partager"></textarea></div>
        <details class="qhow"><summary>Comment fonctionne ce test ?</summary><p>Chaque réponse déplace votre point sur deux axes. L’axe horizontal va du marché à l’État : il mesure une préférence de politique économique. L’axe vertical va de la théorie et des modèles au terrain, à l’histoire et aux institutions : il mesure une manière de faire de l’économie. Le résultat désigne l’auteur placé le plus près de votre point.</p><p>Les positions des auteurs sont des approximations choisies par le site : un auteur ne se résume pas à un point, et deux axes ne rendent pas justice au travail statistique et expérimental, très présent dans l’économie d’aujourd’hui. Dix questions ne permettent pas une mesure précise : c’est pourquoi le résultat est donné en mots, pas en pourcentage. Ce test n’est ni un diagnostic politique ni une mesure scientifique. C’est une porte d’entrée vers des auteurs, y compris ceux qui pensent autrement que vous.</p></details>`;
      try { localStorage.setItem("oec-boussole", JSON.stringify({ id: e.id, prox, at: Date.now() })); } catch (err) {}
      $("#qShare").onclick = async (ev) => {
        const url = OEC.linkTo ? OEC.linkTo("boussole") : location.href;
        const text = `J’ai fait le test d’Œconomia : je pense comme ${e.nom} (${prox.toLowerCase()})${second ? `, pas loin de ${second.nom}` : ""}. Et vous, quel économiste êtes-vous ?`;
        const btn = ev.currentTarget, ok = (t) => { const o = btn.textContent; btn.textContent = t; setTimeout(() => (btn.textContent = o), 2000); };
        const manual = () => { const bx = $("#qShareBox"), ta = bx.querySelector("textarea"); bx.hidden = false; ta.value = text + " " + url; ta.focus(); ta.select(); };
        try { if (navigator.share) { await navigator.share({ title: "Quel économiste êtes-vous ?", text, url }); return; } } catch (err) { if (err && err.name === "AbortError") return; }
        try { await navigator.clipboard.writeText(text + " " + url); ok("Message copié ✓"); } catch (err) { manual(); }
      };
      $("#qOpen").onclick = () => openEco(e.id);
      $("#qAgain").onclick = () => { qi = qx = qy = answered = 0; renderQuiz(); drawCompass(); };
    }
  }

  /* ---------- Démarrage ---------- */
  function start() {
    hero(); ticker(); timeline(); pantheon(); ring(); genealogy(); crises(); compass();
    if (window.OECLABS) window.OECLABS.init();
    if (window.OECTUTOR) window.OECTUTOR.init();
    if (window.OECPAGES) window.OECPAGES.init();
  }
  testBlob().then(() => {
    const go = () => {
      start();
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { if (avantPolices) { avantPolices = false; rafraichirPortraits(); } });
    };
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", go); else go();
  });
})();
