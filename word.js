/* Œconomia — exercices en Word (.docx), modifiables.
   Le fichier est fabriqué dans le navigateur au moment du clic, avec les valeurs tirées pour les calculs.
   Mise en page reprise des séries d’exercices de l’auteur : Arial 11, bleu 1F4E78 pour les titres, bandeaux et tableaux,
   orange E8601C pour les objectifs et tout le corrigé, consignes en italique gris, cases ☐ (☒ dans le corrigé),
   en-tête de tableau bleu à texte blanc, pied de page avec filet bleu, nom du fichier et « Page x sur y ».
   Aucune dépendance : le .docx est un zip écrit à la main (méthode « stockée », sans compression). */
(function () {
  "use strict";
  const BLEU = "1F4E78", ORANGE = "E8601C", GRIS = "555555", CLAIR = "D6E4F0", W = 9072;
  const enc = new TextEncoder();
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

  /* ---------- Briques WordprocessingML ---------- */
  function run(t, o = {}) {
    if (t === "\t") return `<w:r>${rpr(o)}<w:tab/></w:r>`;
    return `<w:r>${rpr(o)}<w:t xml:space="preserve">${esc(t)}</w:t></w:r>`;
  }
  function rpr(o) {
    let s = "";
    if (o.sym) s += `<w:rFonts w:ascii="Segoe UI Symbol" w:hAnsi="Segoe UI Symbol" w:cs="Segoe UI Symbol"/>`;
    if (o.b) s += "<w:b/><w:bCs/>";
    if (o.i) s += "<w:i/><w:iCs/>";
    if (o.color) s += `<w:color w:val="${o.color}"/>`;
    if (o.sz) s += `<w:sz w:val="${o.sz}"/><w:szCs w:val="${o.sz}"/>`;
    if (o.va) s += `<w:vertAlign w:val="${o.va}"/>`;
    return s ? `<w:rPr>${s}</w:rPr>` : "";
  }
  function para(runs, o = {}) {
    let p = "";
    if (o.keepNext) p += "<w:keepNext/>";
    if (o.bdr) p += `<w:pBdr>${o.bdr}</w:pBdr>`;
    if (o.fill) p += `<w:shd w:val="clear" w:color="auto" w:fill="${o.fill}"/>`;
    if (o.tabs) p += `<w:tabs>${o.tabs}</w:tabs>`;
    p += `<w:spacing w:before="${o.before ?? 0}" w:after="${o.after ?? 120}"${o.line ? ` w:line="${o.line}" w:lineRule="auto"` : ""}/>`;
    if (o.ind) p += `<w:ind ${o.ind}/>`;
    if (o.jc) p += `<w:jc w:val="${o.jc}"/>`;
    return `<w:p><w:pPr>${p}</w:pPr>${Array.isArray(runs) ? runs.join("") : runs}</w:p>`;
  }
  const B4 = (c = BLEU, sz = 4) => ["top", "left", "bottom", "right"].map((s) => `<w:${s} w:val="single" w:sz="${sz}" w:space="0" w:color="${c}"/>`).join("");
  function table(widths, rows) {          /* rows : [{ head, cells: [{ xml, fill }] }] */
    const grid = widths.map((w) => `<w:gridCol w:w="${w}"/>`).join("");
    const tr = rows.map((r) => `<w:tr><w:trPr><w:cantSplit/>${r.h ? `<w:trHeight w:val="${r.h}" w:hRule="atLeast"/>` : ""}${r.head ? "<w:tblHeader/>" : ""}</w:trPr>${r.cells.map((c, k) =>
      `<w:tc><w:tcPr><w:tcW w:w="${widths[k]}" w:type="dxa"/>${c.fill ? `<w:shd w:val="clear" w:color="auto" w:fill="${c.fill}"/>` : ""}<w:vAlign w:val="center"/></w:tcPr>${c.xml || para("", { after: 0 })}</w:tc>`).join("")}</w:tr>`).join("");
    return `<w:tbl><w:tblPr><w:tblW w:w="${W}" w:type="dxa"/><w:tblBorders>${B4()}<w:insideH w:val="single" w:sz="4" w:space="0" w:color="${BLEU}"/><w:insideV w:val="single" w:sz="4" w:space="0" w:color="${BLEU}"/></w:tblBorders><w:tblLayout w:type="fixed"/><w:tblCellMar><w:top w:w="60" w:type="dxa"/><w:left w:w="100" w:type="dxa"/><w:bottom w:w="60" w:type="dxa"/><w:right w:w="100" w:type="dxa"/></w:tblCellMar></w:tblPr><w:tblGrid>${grid}</w:tblGrid>${tr}</w:tbl>` + para("", { after: 60 });
  }
  const th = (t) => ({ fill: BLEU, xml: para(run(t, { b: true, color: "FFFFFF", sz: 20 }), { after: 0 }) });
  const htm = (s, st = {}) => { const r = []; inline(new DOMParser().parseFromString(`<span>${s}</span>`, "text/html").body, st, r); return r.join(""); };
  const td = (xml, fill) => ({ fill, xml: typeof xml === "string" && !xml.startsWith("<w:p") ? para(htm(xml), { after: 0 }) : xml });

  /* ---------- Conversion du HTML des énoncés ---------- */
  function inline(node, st, out) {
    node.childNodes.forEach((n) => {
      if (n.nodeType === 3) { const t = n.textContent.replace(/\s+/g, " "); if (t) out.push(run(t, st)); return; }
      if (n.nodeType !== 1) return;
      const tag = n.tagName.toLowerCase();
      if (tag === "br") { out.push("<w:r><w:br/></w:r>"); return; }
      const s = { ...st };
      if (tag === "b" || tag === "strong") s.b = true;
      if (tag === "i" || tag === "em" || tag === "dfn") s.i = true;
      if (tag === "sub") s.va = "subscript";
      if (tag === "sup") s.va = "superscript";
      if (tag === "small") s.sz = 18;
      inline(n, s, out);
    });
  }
  const BLOCKS = new Set(["p", "div", "ul", "ol", "table", "figure", "h3", "h4", "h5", "section", "blockquote"]);
  async function blocks(html, st = {}, ctx) {
    const doc = new DOMParser().parseFromString(`<div>${html || ""}</div>`, "text/html");
    const out = [];
    await walk(doc.body.firstChild, st, out, ctx);
    return out.join("");
  }
  async function walk(root, st, out, ctx) {
    let buf = [];
    const flush = () => { const t = buf.join(""); if (t.replace(/<[^>]+>/g, "").trim() || t.includes("<w:br/>")) out.push(para(t, { after: 100 })); buf = []; };
    for (const n of Array.from(root.childNodes)) {
      const tag = n.nodeType === 1 ? n.tagName.toLowerCase() : "";
      if (!BLOCKS.has(tag)) { const tmp = document.createElement("span"); tmp.appendChild(n.cloneNode(true)); inline(tmp, st, buf); continue; }
      flush();
      if (tag === "p" || tag === "h5") { const r = []; inline(n, st, r); if (r.length) out.push(para(r, { after: 100 })); }
      else if (tag === "h3" || tag === "h4") { const r = []; inline(n, { ...st, b: true }, r); out.push(para(r, { before: 120, after: 60, keepNext: true })); }
      else if (tag === "ul" || tag === "ol") {
        Array.from(n.children).forEach((li, k) => { const r = [run(tag === "ol" ? `${k + 1}.\t` : "•\t", st)]; inline(li, st, r); out.push(para(r, { after: 60, ind: 'w:left="400" w:hanging="300"', tabs: '<w:tab w:val="left" w:pos="400"/>' })); });
      }
      else if (tag === "table") out.push(htmlTable(n, st));
      else if (tag === "figure") { const svg = n.querySelector("svg"), cap = n.querySelector("figcaption"); if (svg) out.push(await image(svg, ctx)); if (cap) { const r = []; inline(cap, { ...st, i: true, color: GRIS, sz: 18 }, r); out.push(para(r, { after: 120 })); } }
      else await walk(n, st, out, ctx);
    }
    flush();
  }
  function htmlTable(t, st) {
    const rows = Array.from(t.querySelectorAll("tr")); if (!rows.length) return "";
    const ncol = Math.max(...rows.map((r) => r.children.length)), w = Math.floor(W / ncol), widths = Array(ncol).fill(w);
    return table(widths, rows.map((r) => {
      const head = r.parentElement.tagName.toLowerCase() === "thead" || Array.from(r.children).every((c) => c.tagName.toLowerCase() === "th");
      const cells = Array.from(r.children).map((c) => { const x = []; inline(c, head ? { b: true, color: "FFFFFF", sz: 20 } : st, x); return { fill: head ? BLEU : undefined, xml: para(x, { after: 0 }) }; });
      while (cells.length < ncol) cells.push({});
      return { head, cells };
    }));
  }

  /* ---------- Schémas : SVG → PNG, couleurs de la version imprimée ---------- */
  const PROPS = ["fill", "stroke", "stroke-width", "stroke-dasharray", "opacity", "fill-opacity", "stroke-opacity", "font-size", "font-weight", "font-family", "font-style", "text-anchor", "dominant-baseline"];
  async function image(svg, ctx) {
    try {
      const vb = (svg.getAttribute("viewBox") || "0 0 640 300").split(/[\s,]+/).map(Number), vw = vb[2] || 640, vh = vb[3] || 300;
      const host = document.createElement("div");
      host.setAttribute("style", `position:absolute;left:-10000px;top:0;width:${vw}px;${(OEC.print && OEC.print.vars) || ""}`);
      const c = svg.cloneNode(true); c.setAttribute("width", vw); c.setAttribute("height", vh); host.appendChild(c); document.body.appendChild(host);
      const src = [c, ...c.querySelectorAll("*")], cs = src.map((el) => getComputedStyle(el));
      const copie = c.cloneNode(true), dst = [copie, ...copie.querySelectorAll("*")];
      dst.forEach((el, k) => { el.setAttribute("style", PROPS.map((p) => `${p}:${cs[k].getPropertyValue(p)}`).join(";")); el.removeAttribute("class"); });
      host.remove();
      copie.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      const url = URL.createObjectURL(new Blob([new XMLSerializer().serializeToString(copie)], { type: "image/svg+xml" }));
      const img = await new Promise((ok, ko) => { const i = new Image(); i.onload = () => ok(i); i.onerror = ko; i.src = url; });
      const k = 2, cv = document.createElement("canvas"); cv.width = vw * k; cv.height = vh * k;
      const g = cv.getContext("2d"); g.fillStyle = "#fff"; g.fillRect(0, 0, cv.width, cv.height); g.drawImage(img, 0, 0, cv.width, cv.height);
      URL.revokeObjectURL(url);
      const png = new Uint8Array(await (await new Promise((ok) => cv.toBlob(ok, "image/png"))).arrayBuffer());
      const id = ctx.images.length + 1; ctx.images.push(png);
      const cx = Math.round(15.5 * 360000), cy = Math.round(cx * vh / vw);
      return para(`<w:r><w:drawing><wp:inline distT="0" distB="0" distL="0" distR="0"><wp:extent cx="${cx}" cy="${cy}"/><wp:docPr id="${id}" name="Schéma ${id}"/><a:graphic xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main"><a:graphicData uri="http://schemas.openxmlformats.org/drawingml/2006/picture"><pic:pic xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture"><pic:nvPicPr><pic:cNvPr id="${id}" name="image${id}.png"/><pic:cNvPicPr/></pic:nvPicPr><pic:blipFill><a:blip r:embed="rIdImg${id}"/><a:stretch><a:fillRect/></a:stretch></pic:blipFill><pic:spPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="${cx}" cy="${cy}"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom></pic:spPr></pic:pic></a:graphicData></a:graphic></wp:inline></w:drawing></w:r>`, { after: 60, jc: "center" });
    } catch (e) { return para(run("[Schéma : voir la version en ligne]", { i: true, color: GRIS })); }
  }

  /* ---------- La série d’exercices ---------- */
  const CONSIGNE = {
    qcm: "Une seule réponse est correcte. Cochez la case qui convient.",
    calcul: "Faites le calcul, puis inscrivez vos résultats dans le tableau.",
    redaction: "Rédigez votre réponse sur les lignes.",
  };
  const lignes = (n) => Array.from({ length: n }, () => para(run("\t", { color: "7F7F7F" }), { before: 220, after: 0, tabs: `<w:tab w:val="right" w:leader="dot" w:pos="${W}"/>` })).join("");
  const box = (on) => run(on ? "☒" : "☐", { sym: true, b: on, color: on ? ORANGE : undefined, sz: 24 });
  const tiret = (t, o = {}) => para([run("-  ", { b: true, color: ORANGE }), run(t, { b: true, color: ORANGE, ...o })], { after: 40, ind: 'w:left="300" w:hanging="300"' });

  async function corps(D, ctx) {
    const P = D.prof, out = [];
    /* bloc de titre */
    out.push(para(run("Œconomia", { b: true, color: BLEU, sz: 26 }), { after: 0 }));
    out.push(para(run(`Entraînement · ${D.theme} · niveau ${D.niveauNom}`, { color: GRIS, sz: 18 }), { after: 200, bdr: `<w:bottom w:val="single" w:sz="12" w:space="6" w:color="${ORANGE}"/>` }));
    out.push(para(run("Série d’exercices", { b: true, color: BLEU, sz: 34 }), { after: 0 }));
    out.push(para(run(`${D.theme}, niveau ${D.niveauNom}${P ? ", corrigé" : ""}`, { b: true, color: BLEU, sz: 34 }), { after: 200 }));
    const lab = (t) => td(para(run(t, { b: true }), { after: 0 }), CLAIR);
    out.push(table([1400, 3136, 1400, 3136], [{ cells: [lab("Nom"), td(""), lab("Prénom"), td("")] }, { cells: [lab("Classe"), td(""), lab("Date"), td("")] }]));
    /* objectifs, remarques, déroulement */
    out.push(para(run("Ce que vous devez savoir faire", { b: true, color: BLEU }), { before: 160, after: 60, keepNext: true }));
    [...new Set(D.items.map((x) => x.competence))].forEach((c) => out.push(tiret(c.replace(/\.$/, "") + ".")));
    out.push(para(run("Remarques", { b: true, color: BLEU }), { before: 160, after: 60, keepNext: true }));
    out.push(tiret("Les exercices sont indépendants"));
    out.push(tiret("Pour les calculs, arrondissez comme indiqué dans chaque énoncé"));
    out.push(tiret(P ? "Les réponses et les corrections sont en orange" : "Une version corrigée peut être téléchargée sur le site"));
    out.push(para(run("Déroulement", { b: true, color: BLEU }), { before: 160, after: 60, keepNext: true }));
    out.push(table([5800, 2472, 800], [{ head: true, cells: [th("Exercice"), th("Type"), th("Fait")] },
      ...D.items.map((x) => ({ cells: [td(`${x.n}. ${x.titre}`), td(x.typeLib), td(para(box(false), { after: 0, jc: "center" }))] }))]));
    /* exercices */
    const C = P ? { color: ORANGE } : {};
    for (const x of D.items) {
      const court = (x.titre + x.typeLib).length <= 52;
      out.push(para([run(`Exercice ${x.n} : ${x.titre}`, { b: true, color: "FFFFFF", sz: 28 }), ...(court ? [run("\t", {}), run(x.typeLib, { color: "FFFFFF", sz: 20 })] : [])],
        { before: 320, after: 80, keepNext: true, fill: BLEU, tabs: `<w:tab w:val="right" w:pos="${W - 120}"/>`, ind: 'w:left="60" w:right="60"' }));
      if (CONSIGNE[x.kind]) out.push(para(run(CONSIGNE[x.kind], { i: true, color: GRIS }), { after: 100, keepNext: true }));
      out.push(await blocks(x.enonce, {}, ctx));
      if (x.fig) out.push(await blocks(x.fig, {}, ctx));
      if (x.kind === "qcm") {
        x.options.forEach((o, j) => { const on = P && j === x.bonne, r = [box(on), run("  ")]; inline(new DOMParser().parseFromString(`<span>${o}</span>`, "text/html").body, on ? { b: true, color: ORANGE } : {}, r); out.push(para(r, { after: 60, ind: 'w:left="400" w:hanging="400"' })); });
        if (P && x.explication) out.push(await blocks(x.explication, C, ctx));
      } else if (x.kind === "calcul") {
        out.push(table([4300, 3272, 1500], [{ head: true, cells: [th("Résultat demandé"), th("Votre réponse"), th("Unité")] },
          ...x.champs.map((c) => ({ h: 520, cells: [td(c.label), td(P ? para(run(c.rep, { b: true, color: ORANGE }), { after: 0 }) : ""), td(c.unite || "")] }))]));
        if (P && x.correction) out.push(await blocks(x.correction, C, ctx));
      } else if (x.kind === "vf") {
        const [e1, e2] = x.etiquettes;
        out.push(para(run(`Cochez « ${e1} » ou « ${e2} » pour chaque affirmation${e2 === "Faux" ? ". Si l’affirmation est fausse, corrigez-la en une phrase" : ""}.`, { i: true, color: GRIS }), { after: 100, keepNext: true }));
        const w3 = e1.length > 6 ? 1300 : 700, wl = P ? 3000 : 2600;
        out.push(table([500, W - 500 - 2 * w3 - wl, w3, w3, wl], [{ head: true, cells: [th("N°"), th("L’affirmation"), th(e1), th(e2), th(P ? "Explication" : e2 === "Faux" ? "La correction si faux" : "Remarque")] },
          ...x.affirmations.map((a, k) => ({ h: 620, cells: [td(String(k + 1)), td(a.texte), td(para(box(P && a.vrai), { after: 0, jc: "center" })), td(para(box(P && !a.vrai), { after: 0, jc: "center" })), td(P ? para(htm(a.expl, { color: ORANGE, sz: 20 }), { after: 0 }) : "")] }))]));
      } else if (x.kind === "redaction") {
        if (P) {
          out.push(para(run("Critères de réussite", { b: true, color: ORANGE }), { before: 120, after: 60, keepNext: true }));
          x.criteres.forEach((c) => out.push(tiret(c, { b: false })));
          out.push(para(run("Exemple de réponse", { b: true, color: ORANGE }), { before: 120, after: 60, keepNext: true }));
          out.push(await blocks(x.corrige, C, ctx));
        } else out.push(lignes(14));
      }
    }
    out.push(para(run(`Œconomia, klAIdi-b · licence CC BY-SA 4.0 · ${location.hostname.endsWith("github.io") ? location.origin + "/oeconomia/" : "https://klaidi-b.github.io/oeconomia/"}`, { color: GRIS, sz: 16 }), { before: 360, after: 0 }));
    return out.join("");
  }

  /* ---------- Paquet .docx ---------- */
  const NS = 'xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing"';
  function parts(body, ctx, nom, titre) {
    const sect = `<w:sectPr><w:headerReference w:type="default" r:id="rIdHead"/><w:footerReference w:type="default" r:id="rIdFoot"/><w:pgSz w:w="11906" w:h="16838"/><w:pgMar w:top="1418" w:right="1134" w:bottom="1418" w:left="1701" w:header="709" w:footer="709" w:gutter="0"/></w:sectPr>`;
    const f = {};
    f["[Content_Types].xml"] = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Default Extension="png" ContentType="image/png"/><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/><Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/><Override PartName="/word/header1.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.header+xml"/><Override PartName="/word/footer1.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml"/><Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/></Types>`;
    f["_rels/.rels"] = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/></Relationships>`;
    f["docProps/core.xml"] = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><dc:title>${esc(titre)}</dc:title><dc:creator>Œconomia</dc:creator><dc:language>fr-CH</dc:language><dcterms:created xsi:type="dcterms:W3CDTF">${new Date().toISOString().slice(0, 19)}Z</dcterms:created></cp:coreProperties>`;
    f["word/_rels/document.xml.rels"] = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rIdStyles" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/><Relationship Id="rIdHead" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/header" Target="header1.xml"/><Relationship Id="rIdFoot" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/footer" Target="footer1.xml"/>${ctx.images.map((_, k) => `<Relationship Id="rIdImg${k + 1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="media/image${k + 1}.png"/>`).join("")}</Relationships>`;
    f["word/styles.xml"] = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:docDefaults><w:rPrDefault><w:rPr><w:rFonts w:ascii="Arial" w:eastAsia="Arial" w:hAnsi="Arial" w:cs="Arial"/><w:sz w:val="22"/><w:szCs w:val="22"/><w:lang w:val="fr-CH" w:eastAsia="fr-CH" w:bidi="ar-SA"/></w:rPr></w:rPrDefault><w:pPrDefault><w:pPr><w:spacing w:after="120" w:line="264" w:lineRule="auto"/></w:pPr></w:pPrDefault></w:docDefaults><w:style w:type="paragraph" w:default="1" w:styleId="Normal"><w:name w:val="Normal"/><w:qFormat/></w:style><w:style w:type="table" w:default="1" w:styleId="TableNormal"><w:name w:val="Normal Table"/><w:tblPr><w:tblInd w:w="0" w:type="dxa"/><w:tblCellMar><w:top w:w="0" w:type="dxa"/><w:left w:w="108" w:type="dxa"/><w:bottom w:w="0" w:type="dxa"/><w:right w:w="108" w:type="dxa"/></w:tblCellMar></w:tblPr></w:style></w:styles>`;
    f["word/header1.xml"] = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:hdr ${NS}>${para([run("Œconomia", { b: true, color: BLEU, sz: 20 }), run("\t"), run("Entraînement", { color: GRIS, sz: 20 })], { after: 0, tabs: `<w:tab w:val="right" w:pos="${W}"/>` })}</w:hdr>`;
    f["word/footer1.xml"] = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:ftr ${NS}><w:p><w:pPr><w:pBdr><w:top w:val="single" w:sz="6" w:space="4" w:color="${BLEU}"/></w:pBdr><w:tabs><w:tab w:val="right" w:pos="${W}"/></w:tabs><w:spacing w:before="0" w:after="0"/></w:pPr>${run(nom.replace(/\.docx$/, ""), { color: GRIS, sz: 18 })}${run("\t")}${run("Page ", { sz: 20 })}<w:fldSimple w:instr=" PAGE "><w:r><w:rPr><w:sz w:val="20"/></w:rPr><w:t>1</w:t></w:r></w:fldSimple>${run(" sur ", { sz: 20 })}<w:fldSimple w:instr=" NUMPAGES "><w:r><w:rPr><w:sz w:val="20"/></w:rPr><w:t>1</w:t></w:r></w:fldSimple></w:p></w:ftr>`;
    f["word/document.xml"] = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:document ${NS}><w:body>${body}${sect}</w:body></w:document>`;
    ctx.images.forEach((png, k) => { f[`word/media/image${k + 1}.png`] = png; });
    return f;
  }
  /* Zip sans compression */
  const CRC = (() => { const t = new Uint32Array(256); for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; } return t; })();
  const crc32 = (u) => { let c = 0xFFFFFFFF; for (let i = 0; i < u.length; i++) c = CRC[(c ^ u[i]) & 0xFF] ^ (c >>> 8); return (c ^ 0xFFFFFFFF) >>> 0; };
  function zip(files) {
    const chunks = [], central = []; let off = 0;
    const le = (n, b) => { const a = new Uint8Array(b); for (let i = 0; i < b; i++) a[i] = (n >>> (8 * i)) & 0xFF; return a; };
    for (const [name, data] of Object.entries(files)) {
      const nm = enc.encode(name), u = typeof data === "string" ? enc.encode(data) : data, crc = crc32(u);
      const head = [le(0x04034b50, 4), le(20, 2), le(0x0800, 2), le(0, 2), le(0, 2), le(0x21, 2), le(crc, 4), le(u.length, 4), le(u.length, 4), le(nm.length, 2), le(0, 2), nm];
      central.push([le(0x02014b50, 4), le(20, 2), le(20, 2), le(0x0800, 2), le(0, 2), le(0, 2), le(0x21, 2), le(crc, 4), le(u.length, 4), le(u.length, 4), le(nm.length, 2), le(0, 2), le(0, 2), le(0, 2), le(0, 2), le(0, 4), le(off, 4), nm]);
      head.forEach((h) => { chunks.push(h); off += h.length; }); chunks.push(u); off += u.length;
    }
    let size = 0; central.flat().forEach((h) => { chunks.push(h); size += h.length; });
    chunks.push(le(0x06054b50, 4), le(0, 2), le(0, 2), le(central.length, 2), le(central.length, 2), le(size, 4), le(off, 4), le(0, 2));
    return new Blob(chunks, { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" });
  }
  const slug = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/Œ/g, "OE").replace(/œ/g, "oe").replace(/[^A-Za-z0-9]+/g, "-").replace(/^-|-$/g, "");

  async function exercices(D, btn) {
    const old = btn ? btn.textContent : "", dire = (t) => { if (btn) { btn.textContent = t; setTimeout(() => (btn.textContent = old), 2500); } };
    try {
      if (btn) btn.textContent = "Préparation…";
      const nom = `Oeconomia_${slug(D.theme)}_${slug(D.niveauNom)}_${D.prof ? "CORR" : "ETU"}.docx`;
      const ctx = { images: [] }, body = await corps(D, ctx);
      const blob = zip(parts(body, ctx, nom, `${D.theme}, niveau ${D.niveauNom}${D.prof ? ", corrigé" : ""}`));
      let dl = null;
      try { dl = window.claude && claude.use ? await claude.use("downloads") : null; } catch (e) {}
      if (dl) { try { await dl.save({ filename: nom, data: blob }); dire("Fichier Word téléchargé ✓"); return; } catch (e) { if (e && e.code === "declined") { dire(old); return; } } }
      const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = nom; document.body.appendChild(a); a.click(); a.remove();
      setTimeout(() => URL.revokeObjectURL(a.href), 4000);
      dire("Fichier Word téléchargé ✓");
    } catch (e) { console.error(e); dire("Téléchargement impossible"); }
  }
  OEC.word = { exercices, _blob: async (D) => { const ctx = { images: [] }, body = await corps(D, ctx); return zip(parts(body, ctx, "test.docx", "test")); } };
})();
