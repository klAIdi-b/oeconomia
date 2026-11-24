/* Œconomia — laboratoire de simulateurs */
(function () {
  "use strict";
  const fmt = (v, d = 1) => v.toLocaleString("fr-CH", { minimumFractionDigits: d, maximumFractionDigits: d });
  const rnd = (a, b) => a + Math.random() * (b - a);
  let cleanup = null;

  function ctrl(id, label, min, max, step, val, unit = "") {
    return `<div class="ctrl"><label for="${id}">${label}<output id="${id}-o">${val}${unit}</output></label><input type="range" id="${id}" min="${min}" max="${max}" step="${step}" value="${val}"></div>`;
  }
  function bindRange(root, id, fn, unit = "", dec = null) {
    const i = root.querySelector("#" + id), o = root.querySelector("#" + id + "-o");
    const up = () => { const v = +i.value; o.textContent = (dec == null ? v : fmt(v, dec)) + unit; fn(v); };
    i.addEventListener("input", up);
    return { set: (v) => { i.value = v; up(); }, get: () => +i.value };
  }
  function credit(id, txt) {
    const A = window.OECAPP;
    return `<button class="btn small ghost" data-eco="${id}" style="align-self:flex-start"><img src="${A.portrait(id)}" alt="" width="22" height="22"> ${txt}</button>`;
  }
  function wireCredits(root) { root.querySelectorAll("[data-eco]").forEach((b) => (b.onclick = () => window.OECAPP.openEco(b.dataset.eco))); }
  function setupCanvas(cv, h) {
    const dpr = Math.min(2, window.devicePixelRatio || 1), w = cv.clientWidth;
    cv.width = w * dpr; cv.height = h * dpr; cv.style.height = h + "px";
    const g = cv.getContext("2d"); g.setTransform(dpr, 0, 0, dpr, 0, 0);
    return { g, w, h };
  }

  /* ========== 1. Offre et demande ========== */
  function labSD(stage) {
    stage.innerHTML = `<div class="lab">
      <div class="stage"><svg id="sd" viewBox="0 0 560 400" style="touch-action:none"></svg>
        <p class="muted" style="font-size:13px; margin-top:8px">Astuce : attrapez une courbe à la souris ou au doigt pour la déplacer.</p></div>
      <div class="side">
        <div><p class="eyebrow">Marshall, 1890</p><h3 style="margin-top:8px">Les ciseaux de l’offre et de la demande</h3></div>
        <div class="btn-row">
          <button class="chip" data-sc="froid">Gel en Floride (oranges)</button>
          <button class="chip" data-sc="mode">Le quinoa devient à la mode</button>
          <button class="chip" data-sc="taxe">Taxe sur le tabac</button>
          <button class="chip" data-sc="reset">Réinitialiser</button>
        </div>
        ${ctrl("sdA", "Choc de demande", -30, 30, 1, 0)}
        ${ctrl("sdC", "Choc d’offre (coûts)", -10, 40, 1, 0)}
        ${ctrl("sdT", "Taxe par unité", 0, 40, 1, 0)}
        <div class="kpis"><div class="kpi"><small>Prix payé</small><b id="kP">–</b></div><div class="kpi"><small>Quantité</small><b id="kQ">–</b></div>
          <div class="kpi"><small>Surplus total</small><b id="kS">–</b></div><div class="kpi"><small>Perte sèche</small><b id="kD">–</b></div></div>
        <p class="explain" id="sdTxt"></p>
        ${credit("marshall", "Alfred Marshall")}
      </div></div>`;
    const svg = stage.querySelector("#sd");
    const X0 = 56, X1 = 540, Y0 = 360, Y1 = 20, sx = (q) => X0 + (q / 100) * (X1 - X0), sy = (p) => Y0 - (p / 100) * (Y0 - Y1);
    const b = 0.8, d = 0.7;
    let A = 0, C = 0, T = 0;
    const rA = bindRange(stage, "sdA", (v) => { A = v; draw(); });
    const rC = bindRange(stage, "sdC", (v) => { C = v; draw(); });
    const rT = bindRange(stage, "sdT", (v) => { T = v; draw(); });
    function poly(pts, style) { return `<polygon points="${pts.map(([q, p]) => sx(q) + "," + sy(p)).join(" ")}" style="${style}"/>`; }
    function draw() {
      const a = 90 + A, c = 10 + C;
      const Q0 = Math.max(0, (a - c) / (b + d)), P0 = a - b * Q0;
      const Qt = Math.max(0, (a - c - T) / (b + d)), Pd = a - b * Qt, Ps = Pd - T;
      const CS = 0.5 * Qt * (a - Pd), PS = 0.5 * Qt * (Ps - c), TR = T * Qt, DWL = 0.5 * T * (Q0 - Qt);
      let s = "";
      for (let i = 0; i <= 100; i += 20) s += `<line x1="${sx(0)}" y1="${sy(i)}" x2="${sx(100)}" y2="${sy(i)}" style="stroke:var(--line)"/><text x="${X0 - 8}" y="${sy(i) + 4}" text-anchor="end" class="chart-txt">${i}</text><text x="${sx(i)}" y="${Y0 + 18}" text-anchor="middle" class="chart-txt">${i}</text>`;
      s += `<text x="${X1}" y="${Y0 + 36}" text-anchor="end" class="chart-ttl">Quantité</text><text x="${X0 - 40}" y="${Y1 - 4}" class="chart-ttl">Prix</text>`;
      s += poly([[0, a], [Qt, Pd], [0, Pd]], "fill:var(--note); opacity:.22");
      s += poly([[0, c], [Qt, Ps], [0, Ps]], "fill:var(--plum); opacity:.22");
      if (T > 0) { s += poly([[0, Ps], [Qt, Ps], [Qt, Pd], [0, Pd]], "fill:var(--gold); opacity:.28"); s += poly([[Qt, Pd], [Qt, Ps], [Q0, P0]], "fill:var(--serial); opacity:.45"); }
      const qd = Math.min(100, a / b), qs = Math.min(100, (100 - c) / d);
      s += `<line x1="${sx(0)}" y1="${sy(a)}" x2="${sx(qd)}" y2="${sy(a - b * qd)}" style="stroke:var(--note); stroke-width:3.5"/>`;
      s += `<line x1="${sx(0)}" y1="${sy(c)}" x2="${sx(qs)}" y2="${sy(c + d * qs)}" style="stroke:var(--plum); stroke-width:3.5"/>`;
      s += `<line data-h="D" x1="${sx(0)}" y1="${sy(a)}" x2="${sx(qd)}" y2="${sy(a - b * qd)}" style="stroke:transparent; stroke-width:26; cursor:grab"/>`;
      s += `<line data-h="S" x1="${sx(0)}" y1="${sy(c)}" x2="${sx(qs)}" y2="${sy(c + d * qs)}" style="stroke:transparent; stroke-width:26; cursor:grab"/>`;
      s += `<text x="${sx(qd) - 4}" y="${sy(a - b * qd) - 10}" text-anchor="end" class="chart-ttl" style="fill:var(--note)">Demande</text>`;
      s += `<text x="${sx(qs) - 6}" y="${sy(c + d * qs) + 4}" text-anchor="end" class="chart-ttl" style="fill:var(--plum)">Offre</text>`;
      s += `<line x1="${sx(Qt)}" y1="${sy(Pd)}" x2="${sx(Qt)}" y2="${Y0}" style="stroke:var(--ink-soft); stroke-dasharray:4 4"/><line x1="${X0}" y1="${sy(Pd)}" x2="${sx(Qt)}" y2="${sy(Pd)}" style="stroke:var(--ink-soft); stroke-dasharray:4 4"/>`;
      s += `<circle cx="${sx(Qt)}" cy="${sy(Pd)}" r="7" style="fill:var(--gold); stroke:var(--card); stroke-width:2.5"/>`;
      if (T > 0) s += `<circle cx="${sx(Qt)}" cy="${sy(Ps)}" r="5" style="fill:var(--ink)"/><circle cx="${sx(Q0)}" cy="${sy(P0)}" r="5" style="fill:none; stroke:var(--ink-soft); stroke-width:2"/>`;
      svg.innerHTML = s;
      stage.querySelector("#kP").textContent = fmt(Pd);
      stage.querySelector("#kQ").textContent = fmt(Qt);
      stage.querySelector("#kS").textContent = fmt((CS + PS + TR) / 10, 0);
      stage.querySelector("#kD").textContent = fmt(DWL / 10, 0);
      let t = `Le prix d’équilibre est de <b>${fmt(Pd)}</b> pour <b>${fmt(Qt)}</b> unités. En vert, le gain des acheteurs qui auraient accepté de payer plus ; en violet, celui des vendeurs.`;
      if (T > 0) t += ` La taxe crée un écart : les acheteurs paient ${fmt(Pd)}, les vendeurs ne touchent que ${fmt(Ps)}. L’État encaisse le rectangle doré. Le triangle rouge est la <b>perte sèche</b> : des échanges utiles qui n’ont plus lieu.`;
      stage.querySelector("#sdTxt").innerHTML = t;
    }
    stage.querySelectorAll("[data-sc]").forEach((btn) => btn.addEventListener("click", () => {
      const k = btn.dataset.sc;
      if (k === "froid") { rA.set(0); rC.set(25); rT.set(0); }
      if (k === "mode") { rA.set(25); rC.set(0); rT.set(0); }
      if (k === "taxe") { rA.set(0); rC.set(0); rT.set(25); }
      if (k === "reset") { rA.set(0); rC.set(0); rT.set(0); }
    }));
    let drag = null;
    svg.addEventListener("pointerdown", (e) => { const h = e.target.dataset && e.target.dataset.h; if (!h) return; drag = { h, y: e.clientY, a: A, c: C }; svg.setPointerCapture(e.pointerId); });
    svg.addEventListener("pointermove", (e) => {
      if (!drag) return;
      const r = svg.getBoundingClientRect(), dy = ((drag.y - e.clientY) / r.height) * 400 * (100 / 340);
      if (drag.h === "D") rA.set(Math.round(Math.max(-30, Math.min(30, drag.a + dy))));
      else rC.set(Math.round(Math.max(-10, Math.min(40, drag.c + dy))));
    });
    svg.addEventListener("pointerup", () => (drag = null));
    draw(); wireCredits(stage);
  }

  /* ========== 2. Multiplicateur ========== */
  function labMult(stage) {
    stage.innerHTML = `<div class="lab">
      <div class="stage"><svg id="mu" viewBox="0 0 560 380"></svg></div>
      <div class="side">
        <div><p class="eyebrow">Keynes, 1936</p><h3 style="margin-top:8px">Le multiplicateur</h3></div>
        ${ctrl("muI", "Dépense publique initiale (milliards)", 10, 100, 5, 50)}
        ${ctrl("muC", "Part du revenu consommée", 0.5, 0.95, 0.05, 0.8)}
        ${ctrl("muM", "Part du revenu dépensée en importations", 0, 0.4, 0.05, 0.1)}
        <button class="btn" id="muGo">Injecter la dépense</button>
        <div class="kpis"><div class="kpi"><small>Multiplicateur</small><b id="muK">–</b></div><div class="kpi"><small>Effet total</small><b id="muT">–</b></div></div>
        <p class="explain" id="muTxt"></p>
        ${credit("keynes", "John Maynard Keynes")}
      </div></div>`;
    const svg = stage.querySelector("#mu");
    let I = 50, c = 0.8, m = 0.1, shown = 15, timer = null;
    bindRange(stage, "muI", (v) => { I = v; shown = 15; draw(); });
    bindRange(stage, "muC", (v) => { c = v; shown = 15; draw(); }, "", 2);
    bindRange(stage, "muM", (v) => { m = v; shown = 15; draw(); }, "", 2);
    const N = 15;
    function draw() {
      const ce = c - m, k = 1 / (1 - ce), total = I * k;   /* k = 1 / (1 − c + m), forme des manuels */
      const X0 = 50, X1 = 540, Y0 = 330, Y1 = 30, bw = (X1 - X0) / N;
      const maxCum = total, sy = (v) => Y0 - (v / maxCum) * (Y0 - Y1);
      let s = "", cum = 0, pts = [];
      for (let i = 0; i <= 4; i++) { const v = (maxCum * i) / 4; s += `<line x1="${X0}" x2="${X1}" y1="${sy(v)}" y2="${sy(v)}" style="stroke:var(--line)"/><text x="${X0 - 6}" y="${sy(v) + 4}" text-anchor="end" class="chart-txt">${Math.round(v)}</text>`; }
      for (let i = 0; i < N; i++) {
        const v = I * Math.pow(ce, i);
        const vis = i < shown;
        cum += v;
        const x = X0 + i * bw + 3;
        s += `<rect x="${x}" width="${bw - 6}" y="${sy(cum)}" height="${sy(cum - v) - sy(cum)}" rx="2" style="fill:${i === 0 ? "var(--gold)" : "var(--note)"}; opacity:${vis ? 1 : 0.08}; transition:opacity .3s"/>`;
        s += `<rect x="${x}" width="${bw - 6}" y="${sy(cum - v)}" height="${Y0 - sy(cum - v)}" rx="2" style="fill:var(--note-soft); opacity:${vis ? 1 : 0.1}"/>`;
        if (vis) pts.push([x + (bw - 6) / 2, sy(cum)]);
        s += `<text x="${x + (bw - 6) / 2}" y="${Y0 + 16}" text-anchor="middle" class="chart-txt">${i + 1}</text>`;
      }
      s += `<line x1="${X0}" x2="${X1}" y1="${sy(total)}" y2="${sy(total)}" style="stroke:var(--serial); stroke-dasharray:6 4; stroke-width:1.5"/><text x="${X1}" y="${sy(total) - 6}" text-anchor="end" class="chart-ttl" style="fill:var(--serial)">limite : ${fmt(total, 0)} milliards</text>`;
      if (pts.length > 1) s += `<polyline points="${pts.map((p) => p.join(",")).join(" ")}" style="fill:none; stroke:var(--ink); stroke-width:1.5"/>`;
      s += `<text x="${(X0 + X1) / 2}" y="${Y0 + 36}" text-anchor="middle" class="chart-ttl">Vagues de dépense successives</text>`;
      svg.innerHTML = s;
      stage.querySelector("#muK").textContent = "× " + fmt(k, 2);
      stage.querySelector("#muT").textContent = fmt(total, 0) + " Md";
      stage.querySelector("#muTxt").innerHTML = `Chaque vague vaut <b>${fmt(ce * 100, 0)} %</b> de la précédente. ${fmt(I, 0)} milliards dépensés produisent au total <b>${fmt(total, 0)} milliards</b> de revenus. Plus les ménages épargnent ou importent, plus l’effet s’essouffle vite. Les critiques rappellent que l’État doit emprunter cet argent, ce qui peut freiner l’investissement privé.`;
    }
    stage.querySelector("#muGo").onclick = () => {
      clearInterval(timer); shown = 0; draw();
      timer = setInterval(() => { shown++; draw(); if (shown >= N) clearInterval(timer); }, window.OECAPP.reduced ? 10 : 220);
    };
    draw(); wireCredits(stage);
    return () => clearInterval(timer);
  }

  /* ========== 3. Avantage comparatif ========== */
  function labRicardo(stage) {
    stage.innerHTML = `<div class="lab">
      <div class="stage">
        <div class="btn-row" style="margin-bottom:12px"><button class="chip on" data-m="0">Chacun produit tout (autarcie)</button><button class="chip" data-m="1">Chacun se spécialise</button></div>
        <svg id="ri" viewBox="0 0 560 330"></svg>
        <p class="muted" style="font-size:13px; margin-top:6px">Chaque case représente 10 heures de travail. Doré : drap. Violet : vin.</p>
      </div>
      <div class="side">
        <div><p class="eyebrow">Ricardo, 1817</p><h3 style="margin-top:8px">Le drap anglais et le vin portugais</h3></div>
        ${ctrl("rEc", "Angleterre · heures pour 1 drap", 40, 160, 10, 100, " h")}
        ${ctrl("rEw", "Angleterre · heures pour 1 vin", 40, 160, 10, 120, " h")}
        ${ctrl("rPc", "Portugal · heures pour 1 drap", 40, 160, 10, 90, " h")}
        ${ctrl("rPw", "Portugal · heures pour 1 vin", 40, 160, 10, 80, " h")}
        <p class="explain" id="riTxt"></p>
        ${credit("ricardo", "David Ricardo")}
      </div></div>`;
    const svg = stage.querySelector("#ri");
    const h = { Ec: 100, Ew: 120, Pc: 90, Pw: 80 };
    let mode = 0;
    ["Ec", "Ew", "Pc", "Pw"].forEach((k) => bindRange(stage, "r" + k, (v) => { h[k] = v; draw(); }, " h"));
    stage.querySelectorAll("[data-m]").forEach((b) => b.onclick = () => { mode = +b.dataset.m; stage.querySelectorAll("[data-m]").forEach((x) => x.classList.toggle("on", x === b)); draw(); });
    function draw() {
      const LE = h.Ec + h.Ew, LP = h.Pc + h.Pw;
      const ocE = h.Ec / h.Ew, ocP = h.Pc / h.Pw; // coût d'un drap en vin
      const clothE = ocE < ocP; // l'Angleterre a l'avantage comparatif dans le drap
      const same = Math.abs(ocE - ocP) < 1e-9;
      // allocation des heures à drap constant (2 unités)
      let alloc;
      if (same) alloc = { E: h.Ec, P: h.Pc };
      else {
        const A = clothE ? "E" : "P", B = clothE ? "P" : "E";
        const LA = A === "E" ? LE : LP, hAc = h[A + "c"], hBc = h[B + "c"];
        const fullA = LA / hAc;
        alloc = {};
        if (fullA >= 2) { alloc[A] = 2 * hAc; alloc[B] = 0; }
        else { alloc[A] = LA; alloc[B] = (2 - fullA) * hBc; }
      }
      const tradeOn = mode === 1;
      const cE = tradeOn ? alloc.E : h.Ec, cP = tradeOn ? alloc.P : h.Pc;
      const wine = (LE - cE) / h.Ew + (LP - cP) / h.Pw;
      let s = "";
      const drawCountry = (name, L, cH, y) => {
        const cells = Math.round(L / 10), cloth = Math.round(cH / 10);
        s += `<text x="0" y="${y - 10}" class="chart-ttl">${name} · ${L} heures</text>`;
        for (let i = 0; i < cells; i++) {
          const col = i % 14, row = Math.floor(i / 14);
          s += `<rect x="${col * 26}" y="${y + row * 26}" width="22" height="22" rx="3" style="fill:${i < cloth ? "var(--gold)" : "var(--plum)"}; transition:fill .4s ${i * 15}ms"/>`;
        }
        return y + Math.ceil(cells / 14) * 26;
      };
      let y = drawCountry("Angleterre", LE, cE, 26);
      y = drawCountry("Portugal", LP, cP, y + 46);
      const bx = 390, by = 40, bh = 220, max = Math.max(3, wine + 0.5, 2.5);
      const bar = (x, v, lbl, col) => { const hh = (v / max) * bh; s += `<rect x="${x}" y="${by + bh - hh}" width="44" height="${hh}" rx="3" style="fill:${col}; transition:all .4s"/><text x="${x + 22}" y="${by + bh - hh - 6}" text-anchor="middle" class="chart-txt" style="fill:var(--ink); font-weight:600">${fmt(v, 2)}</text><text x="${x + 22}" y="${by + bh + 16}" text-anchor="middle" class="chart-txt">${lbl}</text>`; };
      s += `<text x="${bx}" y="${by - 20}" class="chart-ttl">Production mondiale</text>`;
      bar(bx, 2, "drap", "var(--gold)");
      bar(bx + 64, wine, "vin", "var(--plum)");
      s += `<line x1="${bx + 56}" x2="${bx + 116}" y1="${by + bh - (2 / max) * bh}" y2="${by + bh - (2 / max) * bh}" style="stroke:var(--ink-soft); stroke-dasharray:3 3"/>`;
      svg.setAttribute("viewBox", `0 0 560 ${Math.max(300, y + 10)}`);
      svg.innerHTML = s;
      const winner = clothE ? "l’Angleterre" : "le Portugal", other = clothE ? "le Portugal" : "l’Angleterre";
      let t = `Pour l’Angleterre, 1 drap coûte <b>${fmt(ocE, 2)}</b> vin (les heures qu’on aurait pu consacrer au vin). Pour le Portugal, <b>${fmt(ocP, 2)}</b>. `;
      if (same) t += "Les coûts relatifs sont identiques : aucun gain à l’échange. C’est le seul cas où Ricardo n’a rien à dire.";
      else t += tradeOn
        ? `Spécialisation : ${winner} fait le drap, ${other} surtout le vin. Avec les mêmes heures et autant de drap, le monde obtient <b>${fmt(wine - 2, 2)} unité de vin en plus</b>. Le gain naît de la différence des coûts relatifs, pas de la productivité absolue.`
        : `Cliquez sur « Chacun se spécialise » : ${winner} a un avantage <i>relatif</i> dans le drap${h.Pc <= h.Ec && h.Pw <= h.Ew ? ", même si le Portugal est meilleur dans les deux productions" : h.Ec <= h.Pc && h.Ew <= h.Pw ? ", même si l’Angleterre est meilleure dans les deux productions" : ""}.`;
      stage.querySelector("#riTxt").innerHTML = t;
    }
    draw(); wireCredits(stage);
  }

  /* ========== 4. Marché émergent ========== */
  function labMarket(stage) {
    stage.innerHTML = `<div class="lab">
      <div class="stage"><canvas id="mk"></canvas></div>
      <div class="side">
        <div><p class="eyebrow">Vernon Smith, 1962 · Gode et Sunder, 1993</p><h3 style="margin-top:8px">La main invisible en direct</h3></div>
        <div class="btn-row"><button class="btn small" id="mkGo">Ouvrir le marché</button><button class="btn small ghost" id="mkShock">Choc : +20 acheteurs</button><button class="btn small ghost" id="mkReset">Réinitialiser</button></div>
        <div class="kpis"><div class="kpi"><small>Prix théorique</small><b id="mkE">–</b></div><div class="kpi"><small>Dernier prix</small><b id="mkL">–</b></div>
          <div class="kpi"><small>Séance</small><b id="mkP">–</b></div><div class="kpi"><small>Efficacité</small><b id="mkF">–</b></div></div>
        ${credit("smith", "Adam Smith et la main invisible")}
      </div></div>`;
    const cv = stage.querySelector("#mk");
    let buyers, sellers, eq, trades, period, active, book, idle, running = false, raf = 0, surplus, maxSurplus;
    function makeAgents(nb = 40) {
      buyers = Array.from({ length: nb }, () => Math.round(rnd(30, 130)));
      sellers = Array.from({ length: 40 }, () => Math.round(rnd(10, 110)));
      const v = [...buyers].sort((a, b) => b - a), c = [...sellers].sort((a, b) => a - b);
      let q = 0; maxSurplus = 0;
      while (q < Math.min(v.length, c.length) && v[q] >= c[q]) { maxSurplus += v[q] - c[q]; q++; }
      const lo = Math.max(c[q - 1] || 0, v[q] || 0), hi = Math.min(v[q - 1] || 200, c[q] || 200);
      eq = { q, p: (lo + hi) / 2 };
    }
    function newPeriod() {
      period++; surplus = 0;
      active = { b: buyers.map((v, i) => i), s: sellers.map((c, i) => i) };
      book = { bid: null, ask: null }; idle = 0;
    }
    function reset(nb = 40) { makeAgents(nb); trades = []; period = 0; newPeriod(); kpi(); paint(); }
    function step() {
      if (!active.b.length || !active.s.length || idle > 600) { if (period >= 8) { stop(); return; } trades.push({ sep: true }); newPeriod(); return; }
      idle++;
      if (Math.random() < 0.5) {
        const bi = active.b[Math.floor(Math.random() * active.b.length)], bid = rnd(1, buyers[bi]);
        if (!book.bid || bid > book.bid.p) book.bid = { i: bi, p: bid };
      } else {
        const si = active.s[Math.floor(Math.random() * active.s.length)], ask = rnd(sellers[si], 200);
        if (!book.ask || ask < book.ask.p) book.ask = { i: si, p: ask };
      }
      if (book.bid && book.ask && book.bid.p >= book.ask.p) {
        const price = book.bid.p === book.ask.p ? book.bid.p : (Math.random() < 0.5 ? book.bid.p : book.ask.p);
        trades.push({ p: price, period });
        surplus += buyers[book.bid.i] - sellers[book.ask.i];
        active.b = active.b.filter((x) => x !== book.bid.i); active.s = active.s.filter((x) => x !== book.ask.i);
        book = { bid: null, ask: null }; idle = 0;
      }
    }
    function kpi() {
      stage.querySelector("#mkE").textContent = fmt(eq.p, 0);
      const last = [...trades].reverse().find((t) => !t.sep);
      stage.querySelector("#mkL").textContent = last ? fmt(last.p, 0) : "–";
      stage.querySelector("#mkP").textContent = period + " / 8";
      stage.querySelector("#mkF").textContent = maxSurplus ? fmt((surplus / maxSurplus) * 100, 0) + " %" : "–";
    }
    function paint() {
      const H = Math.min(380, Math.max(280, cv.clientWidth * 0.62));
      const { g, w, h } = setupCanvas(cv, H);
      const css = window.OECAPP.cssVar;
      const L = 40, R = w - 12, T = 16, B = h - 30, sy = (p) => B - (p / 160) * (B - T);
      g.clearRect(0, 0, w, h);
      g.font = '500 11px "JetBrains Mono", monospace'; g.fillStyle = css("--ink-soft"); g.strokeStyle = css("--line"); g.lineWidth = 1;
      for (let p = 0; p <= 160; p += 40) { g.beginPath(); g.moveTo(L, sy(p)); g.lineTo(R, sy(p)); g.stroke(); g.textAlign = "right"; g.fillText(p, L - 6, sy(p) + 4); }
      g.fillStyle = css("--note-soft"); g.fillRect(L, sy(eq.p + 6), R - L, sy(eq.p - 6) - sy(eq.p + 6));
      g.strokeStyle = css("--note"); g.setLineDash([6, 4]); g.lineWidth = 1.5; g.beginPath(); g.moveTo(L, sy(eq.p)); g.lineTo(R, sy(eq.p)); g.stroke(); g.setLineDash([]);
      g.fillStyle = css("--note"); g.textAlign = "right"; g.font = '600 12px Manrope, sans-serif'; g.fillText("équilibre théorique", R - 4, sy(eq.p) - 8);
      const n = Math.max(60, trades.length), dx = (R - L) / n;
      trades.forEach((t, i) => {
        const x = L + i * dx;
        if (t.sep) { g.strokeStyle = css("--line"); g.beginPath(); g.moveTo(x, T); g.lineTo(x, B); g.stroke(); return; }
        g.beginPath(); g.arc(x, sy(t.p), 3.2, 0, Math.PI * 2); g.fillStyle = css("--plum"); g.fill();
      });
      g.fillStyle = css("--ink-soft"); g.textAlign = "left"; g.font = '500 11px "JetBrains Mono", monospace';
      g.fillText("transactions successives →  (un trait = nouvelle séance)", L, h - 10);
    }
    function loop() { if (!running) return; for (let i = 0; i < 6; i++) step(); paint(); kpi(); raf = requestAnimationFrame(loop); }
    function stop() { running = false; cancelAnimationFrame(raf); stage.querySelector("#mkGo").textContent = "Relancer"; paint(); kpi(); }
    stage.querySelector("#mkGo").onclick = () => {
      if (running) return stop();
      if (period >= 8) reset();
      running = true; stage.querySelector("#mkGo").textContent = "Pause"; loop();
    };
    stage.querySelector("#mkShock").onclick = () => { const was = running; stop(); reset(60); if (was) stage.querySelector("#mkGo").click(); };
    stage.querySelector("#mkReset").onclick = () => { stop(); reset(); stage.querySelector("#mkGo").textContent = "Ouvrir le marché"; };
    reset();
    // aperçu : deux séances pré-calculées pour que le graphique ne soit pas vide
    for (let i = 0; i < 1500 && period < 3; i++) step();
    paint(); kpi();
    const onTheme = () => paint(); document.addEventListener("oec-theme", onTheme);
    const onResize = () => paint(); window.addEventListener("resize", onResize);
    wireCredits(stage);
    return () => { running = false; cancelAnimationFrame(raf); document.removeEventListener("oec-theme", onTheme); window.removeEventListener("resize", onResize); };
  }

  /* ========== 5. Tragédie des communs ========== */
  function labCommons(stage) {
    stage.innerHTML = `<div class="lab">
      <div class="stage"><canvas id="lake"></canvas>
        <svg id="lakeChart" viewBox="0 0 560 120" style="margin-top:10px"></svg></div>
      <div class="side">
        <div><p class="eyebrow">Hardin, 1968 · Ostrom, 1990</p><h3 style="margin-top:8px">Le lac des quatre flottes</h3></div>
        <label class="explain" style="display:flex; gap:8px; align-items:center; cursor:pointer"><input type="checkbox" id="ostrom"> <span><b>Règles d’Ostrom</b> : quota de 5 bateaux par flotte décidé ensemble, surveillance mutuelle, amendes graduées reversées aux flottes qui respectent le quota.</span></label>
        ${ctrl("boats", "Vos bateaux cette saison", 0, 10, 1, 5)}
        <button class="btn" id="sail">Partir en mer</button>
        <div style="overflow-x:auto"><table class="mono" id="fleets" style="width:100%; font-size:13px; border-collapse:collapse"></table></div>
        <p class="explain" id="lakeTxt"></p>
        ${credit("ostrom", "Elinor Ostrom")}
      </div></div>`;
    const cv = stage.querySelector("#lake");
    const K = 1000, r = 0.45, q = 0.01, COST = 3, SEASONS = 12;
    let S, season, fleets, hist, over, boats = 5, ostrom = false, fish = [], raf = 0, alive = true, brutus = 8;
    const QUOTA = 5, MAXB = 16;
    const names = [["Vous", "--gold"], ["Brutus · cupide", "--serial"], ["Prudence · sobre", "--note"], ["Le Copieur", "--plum"]];
    function reset() {
      S = 800; season = 0; over = false; hist = [S]; brutus = 8;
      fleets = names.map(([n, c]) => ({ n, c, last: 5, profit: 0, catch: 0, fined: false, fine: 0, perBoat: 0 }));
      fish = Array.from({ length: 140 }, () => ({ x: Math.random(), y: Math.random(), a: Math.random() * 6.28, v: 0.0006 + Math.random() * 0.0008 }));
      render();
    }
    bindRange(stage, "boats", (v) => (boats = v));
    stage.querySelector("#ostrom").onchange = (e) => { ostrom = e.target.checked; reset(); stage.querySelector("#sail").textContent = "Partir en mer"; };
    stage.querySelector("#sail").onclick = () => {
      if (over) { reset(); stage.querySelector("#sail").textContent = "Partir en mer"; return; }
      const others = fleets.map((f) => f.last);
      /* Sans règles, Brutus ajoute 2 bateaux tant qu’un bateau lui rapporte plus qu’il ne coûte (accès libre, Gordon 1954) */
      if (season > 0 && !ostrom) brutus = fleets[1].perBoat > 0 ? Math.min(MAXB, brutus + 2) : Math.max(1, brutus - 2);
      const copie = Math.round((others[0] + others[1] + others[2]) / 3);
      const plan = [
        boats,
        ostrom ? (fleets[1].fined ? QUOTA : 8) : brutus,
        4,
        ostrom ? Math.min(QUOTA, copie) : copie
      ];
      const perBoat = q * S, totalB = plan.reduce((a, b) => a + b, 0);
      let total = totalB * perBoat; const scale = total > S ? S / total : 1; total *= scale;
      let amendes = 0;
      fleets.forEach((f, i) => {
        f.catch = plan[i] * perBoat * scale; f.fine = 0;
        let p = f.catch - plan[i] * COST;
        if (ostrom) { p -= 1; if (plan[i] > QUOTA) { f.fine = (plan[i] - QUOTA) * (f.fined ? 12 : 6); p -= f.fine; amendes += f.fine; f.fined = true; } }
        f.p = p; f.perBoat = plan[i] ? p / plan[i] : 0; f.last = plan[i]; f.planned = plan[i];
      });
      /* les amendes sont reversées aux flottes qui respectent le quota */
      const sages = fleets.filter((f) => !f.fine).length;
      fleets.forEach((f) => { if (!f.fine && sages) f.p += amendes / sages; f.profit += f.p; });
      S = Math.max(0, S - total); S = S + r * S * (1 - S / K);
      season++; hist.push(S);
      if (season >= SEASONS || S < 15) { over = true; stage.querySelector("#sail").textContent = "Nouvelle partie"; }
      render();
    };
    function render() {
      const tb = stage.querySelector("#fleets");
      tb.innerHTML = `<tr style="color:var(--ink-soft); text-align:right"><th style="text-align:left; font-weight:600; padding:4px 0">Flotte</th><th>Bateaux</th><th>Prise</th><th>Gain cumulé</th></tr>` +
        fleets.map((f) => `<tr style="text-align:right; border-top:1px solid var(--line)"><td style="text-align:left; padding:6px 0"><i style="display:inline-block; width:9px; height:9px; border-radius:50%; background:var(${f.c}); margin-right:6px"></i>${f.n}</td><td>${f.planned ?? "–"}</td><td>${season ? fmt(f.catch, 0) : "–"}</td><td style="color:${f.profit < 0 ? "var(--serial)" : "var(--ink)"}; font-weight:600">${fmt(f.profit, 0)}${f.fine ? ` <span class="pill bad">amende ${f.fine}</span>` : ""}</td></tr>`).join("");
      let t;
      if (!season) t = `Saison 1 sur ${SEASONS}. Stock : <b>${fmt(S, 0)}</b> poissons. ${ostrom ? "Les quatre flottes ont adopté un quota de 5 bateaux. Brutus est tenté d’en sortir 8 ; Prudence en sort 4 ; le Copieur imite la moyenne des autres, dans la limite du quota." : "Brutus commence avec 8 bateaux et en ajoute tant que la pêche lui rapporte ; Prudence en sort 4 ; le Copieur imite la moyenne des autres."}`;
      else if (!over) t = `Saison ${season} terminée. Il reste <b>${fmt(S, 0)}</b> poissons. ${S < 300 ? "Le stock s’effondre : chaque bateau rapporte de moins en moins." : S > 600 ? "Le lac se porte bien." : "Le stock s’érode."}`;
      else {
        const rank = [...fleets].sort((a, b) => b.profit - a.profit).findIndex((f) => f.n === "Vous") + 1;
        t = S < 15 ? `<b>Le lac est vide</b> après ${season} saisons. C’est la tragédie de Hardin : chacun avait intérêt à pêcher plus, tous y ont perdu. Activez les règles d’Ostrom et rejouez.`
          : `<b>Partie terminée.</b> Stock final : ${fmt(S, 0)} poissons. Les quatre flottes ont gagné ensemble <b>${fmt(fleets.reduce((a, f) => a + f.profit, 0), 0)}</b>. Vous finissez ${rank === 1 ? "1<sup>er</sup>" : rank + "<sup>e</sup>"} sur 4. ${ostrom ? "Avec des règles décidées ensemble et des amendes graduées, même Brutus finit par respecter le quota : c’est la leçon d’Ostrom." : S < 350 ? "Le lac n’est pas vide, mais il est surexploité : à la fin, un bateau rapporte à peine ce qu’il coûte. C’est la tragédie des communs de Hardin, que les économistes décrivent aussi comme une rente dissipée (Gordon, 1954). Rejouez avec les règles d’Ostrom, en gardant le même nombre de bateaux." : "Rejouez avec les règles d’Ostrom, en gardant le même nombre de bateaux, et comparez le gain total."}`;
      }
      stage.querySelector("#lakeTxt").innerHTML = t;
      const ch = stage.querySelector("#lakeChart");
      const X0 = 40, X1 = 550, sy = (v) => 100 - (v / K) * 85, sx = (i) => X0 + (i / SEASONS) * (X1 - X0);
      ch.innerHTML = `<line x1="${X0}" x2="${X1}" y1="${sy(0)}" y2="${sy(0)}" style="stroke:var(--line)"/><line x1="${X0}" x2="${X1}" y1="${sy(500)}" y2="${sy(500)}" style="stroke:var(--line); stroke-dasharray:3 3"/>
        <text x="${X0 - 6}" y="${sy(500) + 4}" text-anchor="end" class="chart-txt">500</text><text x="${X0 - 6}" y="${sy(1000) + 4}" text-anchor="end" class="chart-txt">1000</text>
        <text x="${X1}" y="${sy(500) + 14}" text-anchor="end" class="chart-txt">pêche durable maximale</text>
        <line x1="${X0}" x2="${X1}" y1="${sy(650)}" y2="${sy(650)}" style="stroke:var(--gold); stroke-dasharray:3 3"/><text x="${X1}" y="${sy(650) - 5}" text-anchor="end" class="chart-txt">gain total maximal</text>
        <polyline points="${hist.map((v, i) => sx(i) + "," + sy(v)).join(" ")}" style="fill:none; stroke:var(--note); stroke-width:2.5"/>
        ${hist.map((v, i) => `<circle cx="${sx(i)}" cy="${sy(v)}" r="3" style="fill:var(--note)"/>`).join("")}
        <text x="${X0}" y="116" class="chart-txt">stock de poissons par saison</text>`;
    }
    function anim() {
      if (!alive) return;
      const H = Math.min(300, Math.max(220, cv.clientWidth * 0.5));
      const { g, w, h } = setupCanvas(cv, H), css = window.OECAPP.cssVar;
      const grd = g.createLinearGradient(0, 0, 0, h); grd.addColorStop(0, css("--note-soft")); grd.addColorStop(1, css("--paper-2"));
      g.fillStyle = grd; g.beginPath(); g.ellipse(w / 2, h / 2 + 10, w / 2 - 6, h / 2 - 16, 0, 0, Math.PI * 2); g.fill();
      g.strokeStyle = css("--note"); g.lineWidth = 1.5; g.stroke();
      const visible = Math.round((S / K) * fish.length);
      g.strokeStyle = css("--note");
      fish.forEach((f, i) => {
        f.a += (Math.random() - 0.5) * 0.2; f.x += Math.cos(f.a) * f.v; f.y += Math.sin(f.a) * f.v;
        const dx = (f.x - 0.5) / 0.42, dy = (f.y - 0.5) / 0.32; if (dx * dx + dy * dy > 1) { const n = Math.hypot(dx, dy); f.a += Math.PI; f.x = 0.5 + (dx / n) * 0.41; f.y = 0.5 + (dy / n) * 0.31; }
        if (i >= visible) return;
        const x = f.x * w, y = f.y * h + 10;
        g.save(); g.translate(x, y); g.rotate(f.a); g.globalAlpha = 0.8;
        g.beginPath(); g.ellipse(0, 0, 6, 2.6, 0, 0, Math.PI * 2); g.fillStyle = css("--note"); g.fill();
        g.beginPath(); g.moveTo(-5, 0); g.lineTo(-10, -3.5); g.lineTo(-10, 3.5); g.closePath(); g.fill();
        g.restore();
      });
      g.globalAlpha = 1;
      fleets.forEach((fl, k) => {
        const n = fl.planned ?? (k === 0 ? boats : 0);
        for (let j = 0; j < n; j++) {
          const ang = (k / 4) * Math.PI * 2 + (j - n / 2) * 0.09 + Math.PI / 4;
          const x = w / 2 + Math.cos(ang) * (w / 2 - 22), y = h / 2 + 10 + Math.sin(ang) * (h / 2 - 30);
          g.fillStyle = css(fl.c); g.beginPath(); g.moveTo(x - 7, y); g.lineTo(x + 7, y); g.lineTo(x + 4, y + 5); g.lineTo(x - 4, y + 5); g.closePath(); g.fill();
          g.beginPath(); g.moveTo(x, y); g.lineTo(x, y - 9); g.lineTo(x + 5, y - 3); g.closePath(); g.fill();
        }
      });
      g.fillStyle = css("--ink"); g.font = '600 13px "JetBrains Mono", monospace'; g.textAlign = "left";
      g.fillText(`Saison ${Math.min(season + 1, SEASONS)}/${SEASONS} · ${fmt(S, 0)} poissons`, 12, 20);
      if (!window.OECAPP.reduced) raf = requestAnimationFrame(anim);
    }
    reset(); anim(); wireCredits(stage);
    return () => { alive = false; cancelAnimationFrame(raf); };
  }

  /* ========== 6. Planche à billets ========== */
  function labMoney(stage) {
    stage.innerHTML = `<div class="lab">
      <div class="stage" style="position:relative">
        <canvas id="rain" style="position:absolute; inset:0; height:100%; pointer-events:none"></canvas>
        <div style="display:grid; place-items:center; text-align:center; padding:20px 0 10px">
          <p class="eyebrow">Prix d’un café</p>
          <div id="price" style="font:400 clamp(64px,11vw,120px)/1 var(--f-display); color:var(--serial)">4,00</div>
          <p class="mono muted" id="infl" style="margin-top:6px">inflation : 0 %</p>
        </div>
        <div id="eqn" class="mono" style="display:flex; justify-content:center; flex-wrap:wrap; gap:10px; align-items:baseline; font-size:18px; margin:18px 0"></div>
        <svg id="mvpq" viewBox="0 0 560 170"></svg>
      </div>
      <div class="side">
        <div><p class="eyebrow">Théorie quantitative · Friedman, 1970</p><h3 style="margin-top:8px">La planche à billets</h3></div>
        ${ctrl("mM", "Masse monétaire M", 100, 2000, 10, 200)}
        ${ctrl("mV", "Vitesse de circulation V", 1, 10, 0.5, 5)}
        ${ctrl("mQ", "Production réelle Q", 500, 2000, 50, 1000)}
        <div class="btn-row"><button class="btn small" id="print">Imprimer +50 %</button><button class="btn small ghost" id="mReset">Revenir au départ</button></div>
        <label class="explain" style="display:flex; gap:8px; align-items:center; cursor:pointer"><input type="checkbox" id="slack"> <span><b>Économie en sous-emploi</b> (Keynes) : tant que des capacités restent inutilisées, la monnaie supplémentaire stimule d’abord la production plutôt que les prix.</span></label>
        <p class="explain" id="mTxt"></p>
        ${credit("friedman", "Milton Friedman")}
      </div></div>`;
    let M = 200, V = 5, Q = 1000, slack = false;
    const M0 = 200, Q0 = 1000, QCAP = 1600, base = 4;
    const rM = bindRange(stage, "mM", (v) => { M = v; update(); });
    const rV = bindRange(stage, "mV", (v) => { V = v; update(); }, "", 1);
    const rQ = bindRange(stage, "mQ", (v) => { Q = v; update(); });
    stage.querySelector("#slack").onchange = (e) => { slack = e.target.checked; if (slack) rQ.set(800); update(); };
    function realQ() { return slack ? Math.min(QCAP, Q * Math.pow(M / M0, 0.8)) : Q; }
    function update() {
      const q = realQ(), P = (M * V) / q, P0 = (M0 * 5) / Q0, ratio = P / P0;
      stage.querySelector("#price").textContent = fmt(base * ratio, 2);
      stage.querySelector("#infl").textContent = `variation des prix : ${ratio >= 1 ? "+" : ""}${fmt((ratio - 1) * 100, 0)} %`;
      stage.querySelector("#eqn").innerHTML = `<span style="color:var(--note)">M ${M}</span> × <span>V ${fmt(V, 1)}</span> = <span style="color:var(--serial)">P ${fmt(P, 2)}</span> × <span style="color:var(--plum)">Q ${fmt(q, 0)}</span>`;
      const svg = stage.querySelector("#mvpq");
      const bars = [["M", M / 2000, "--note"], ["V", V / 10, "--ink-soft"], ["P", Math.min(1, P / 20), "--serial"], ["Q", q / 2000, "--plum"]];
      svg.innerHTML = bars.map(([n, f, c], i) => `<text x="20" y="${22 + i * 38}" class="chart-ttl">${n}</text><rect x="44" y="${8 + i * 38}" width="500" height="20" rx="4" style="fill:var(--paper-2)"/><rect x="44" y="${8 + i * 38}" width="${Math.max(2, f * 500)}" height="20" rx="4" style="fill:var(${c}); transition:width .4s"/>`).join("");
      /* le texte dépend de ce qui a bougé depuis le départ */
      const fM = M / M0, fV = V / 5, fQ = Q / Q0, pareil = (x) => Math.abs(x - 1) < 0.03;
      const hausse = [fM > 1.03 && "plus de monnaie", fV > 1.03 && "une monnaie qui circule plus vite", fQ < 0.97 && "moins de production"].filter(Boolean);
      const baisse = [fM < 0.97 && "moins de monnaie", fV < 0.97 && "une monnaie qui circule moins vite", fQ > 1.03 && "plus de production"].filter(Boolean);
      const liste = (a) => a.length > 1 ? a.slice(0, -1).join(", ") + " et " + a[a.length - 1] : a[0];
      let t;
      if (slack && q < QCAP) t = `Tant qu’il reste des capacités inutilisées, la monnaie supplémentaire fait surtout monter la production. Les prix bougent peu. C’est l’argument keynésien. Hypothèse de ce modèle : 1 % de monnaie en plus donne environ 0,8 % de production en plus, jusqu’à ${QCAP}.`;
      else if (slack) t = `Les usines tournent à plein (Q = ${QCAP}). Au-delà, chaque billet imprimé ne fait plus monter que les prix.`;
      else if (ratio > 20) t = `Les prix ont été multipliés par ${fmt(ratio, 0)}. Quand la création monétaire s’emballe à ce point, on parle d’hyperinflation. En Allemagne, un pain coûtait environ 250 marks en janvier 1923 et 200 milliards de marks en novembre. Le Zimbabwe a émis en 2009 un billet de 100 000 milliards de dollars.`;
      else if (ratio > 1.3) t = !pareil(fM) && pareil(fV) && pareil(fQ)
        ? `La production n’a pas bougé, la monnaie oui : les prix montent dans la même proportion. C’est le cœur de la théorie quantitative.`
        : `Les prix montent : ${liste(hausse.length ? hausse : ["une dépense totale plus forte"])}. La dépense totale (M × V) progresse plus vite que la production (Q).`;
      else if (ratio < 0.85) t = !pareil(fM) && pareil(fV) && pareil(fQ)
        ? `Moins de monnaie pour la même production : les prix baissent. C’est la déflation, que Friedman reprochait à la Fed d’avoir laissée s’installer après 1929.`
        : `Les prix baissent : ${liste(baisse.length ? baisse : ["une dépense totale plus faible"])}. La dépense totale (M × V) progresse moins vite que la production (Q).`;
      else if (pareil(fM) && pareil(fV) && pareil(fQ)) t = `Prix stables : la monnaie croît au rythme de la production. Friedman proposait d’augmenter la masse monétaire de 3 à 5 % par an, quoi qu’il arrive.`;
      else t = `Prix presque stables : les changements se compensent.${fM > 1.03 && fV < 0.97 ? " La monnaie a augmenté, mais elle circule moins vite : la dépense totale ne bouge presque pas." : " La dépense totale (M × V) évolue au même rythme que la production (Q)."}`;
      stage.querySelector("#mTxt").innerHTML = t;
    }
    // pluie de billets
    const cv = stage.querySelector("#rain"); let notes = [], raf = 0, alive = true;
    function rain() {
      if (!alive) return;
      const { g, w, h } = setupCanvas(cv, cv.parentElement.clientHeight), css = window.OECAPP.cssVar;
      g.clearRect(0, 0, w, h);
      notes = notes.filter((n) => n.y < h + 30);
      notes.forEach((n) => {
        n.y += n.v; n.x += Math.sin(n.y / 30 + n.p) * 0.8; n.r += n.vr;
        g.save(); g.translate(n.x, n.y); g.rotate(n.r); g.globalAlpha = 0.85;
        g.fillStyle = css("--note-soft"); g.strokeStyle = css("--note"); g.lineWidth = 1;
        g.fillRect(-18, -9, 36, 18); g.strokeRect(-18, -9, 36, 18);
        g.beginPath(); g.arc(0, 0, 5, 0, Math.PI * 2); g.stroke(); g.restore();
      });
      if (notes.length) raf = requestAnimationFrame(rain); else raf = 0;
    }
    stage.querySelector("#print").onclick = () => {
      rM.set(Math.min(2000, Math.round(M * 1.5 / 10) * 10));
      if (!window.OECAPP.reduced) {
        const w = cv.clientWidth;
        for (let i = 0; i < 40; i++) notes.push({ x: Math.random() * w, y: -20 - Math.random() * 200, v: 2 + Math.random() * 3, p: Math.random() * 6, r: Math.random() * 6, vr: (Math.random() - 0.5) * 0.1 });
        if (!raf) raf = requestAnimationFrame(rain);
      }
    };
    stage.querySelector("#mReset").onclick = () => { stage.querySelector("#slack").checked = false; slack = false; rM.set(200); rV.set(5); rQ.set(1000); };
    update(); wireCredits(stage);
    return () => { alive = false; cancelAnimationFrame(raf); };
  }

  const LABS = [
    { t: "Offre et demande", s: "Pourquoi les prix bougent", f: labSD },
    { t: "Multiplicateur", s: "L’effet d’une dépense publique", f: labMult },
    { t: "Avantage comparatif", s: "Pourquoi commercer", f: labRicardo },
    { t: "Marché émergent", s: "Un marché sans chef d’orchestre", f: labMarket },
    { t: "Tragédie des communs", s: "Le lac partagé", f: labCommons },
    { t: "Planche à billets", s: "Monnaie et inflation", f: labMoney }
  ];
  function show(i) {
    if (cleanup) { try { cleanup(); } catch (e) {} cleanup = null; }
    document.querySelectorAll("#labTabs .tab").forEach((b, k) => { b.classList.toggle("on", k === i); b.setAttribute("aria-selected", k === i); });
    const tabs = document.getElementById("labTabs"), on = tabs && tabs.children[i];
    if (on && (on.offsetLeft < tabs.scrollLeft || on.offsetLeft + on.offsetWidth > tabs.scrollLeft + tabs.clientWidth)) tabs.scrollLeft = on.offsetLeft - 8;
    const stage = document.getElementById("labStage"), G = OEC.labGuide && OEC.labGuide.list[i];
    /* mode d’emploi : la question et la lecture au-dessus, les expériences à côté du graphique, l’essentiel en dessous */
    stage.innerHTML = (G ? OEC.labGuide.top(G) : "") + `<div class="lab-body"></div>` + (G ? OEC.labGuide.end(G) : "");
    const body = stage.querySelector(".lab-body");
    cleanup = LABS[i].f(body) || null;
    if (G) OEC.labGuide.mount(body, G);
  }
  window.OECLABS = {
    show,
    init() {
      const tabs = document.getElementById("labTabs");
      LABS.forEach((l, i) => {
        const b = document.createElement("button");
        b.className = "tab"; b.setAttribute("role", "tab");
        b.innerHTML = `<b>${l.t}</b><small>${l.s}</small>`;
        b.onclick = () => show(i);
        tabs.appendChild(b);
      });
      show(0);
    }
  };
})();
