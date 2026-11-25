/* Œconomia — parcours guidés.
   Des itinéraires tout tracés (notions, simulateurs, portraits, crises, controverses, exercices), dans l’ordre.
   Page #parcours (liste) et #parcours-<id> (détail). Pendant un parcours, un bandeau en bas de l’écran
   rappelle l’étape en cours et mène à la suivante.
   Une étape compte comme faite quand la notice, le dossier ou le portrait est « lu », quand au moins 4 exercices
   sur 8 du niveau sont réussis, ou, pour les autres (simulateur, crise, controverse, fiche), quand on l’a ouverte.
   Tout est enregistré dans le navigateur : « oec-parcours » (étapes ouvertes, parcours en cours).
   Pour ajouter un parcours : compléter la liste P ci-dessous (types d’étapes : c, q, eco, lab, crise, debat, ex, m). */
(function () {
  "use strict";
  const P = [
    { id: "marche", titre: "Comment se forment les prix", accroche: "Pourquoi les fraises coûtent-elles moins cher en juin ? Découvrez la mécanique cachée derrière chaque prix.",
      intro: "Pourquoi le prix des fraises chute-t-il en juin, et pourquoi un loyer genevois coûte-t-il plus cher qu’un loyer jurassien ? Ce parcours part de la rencontre entre l’offre et la demande, puis montre ce que le marché fait bien, et ce qu’il ne sait pas faire.",
      objectifs: ["Lire un graphique d’offre et de demande", "Expliquer pourquoi un prix monte ou baisse", "Repérer les cas où le marché échoue"],
      etapes: [
        ["c:offre-demande", "La base : comment l’offre et la demande fixent un prix, et ce que mesure l’élasticité."],
        ["lab:0", "Déplacez vous-même les courbes et regardez le prix et la quantité s’ajuster."],
        ["c:surplus", "Qui gagne à l’échange ? Le surplus mesure ce que consommateurs et producteurs y trouvent."],
        ["eco:smith", "L’auteur de la « main invisible », et les limites qu’il voyait lui-même au marché."],
        ["lab:3", "Observez un marché se former de lui-même entre acheteurs et vendeurs."],
        ["c:externalite", "Quand le prix ne dit pas tout : pollution, bruit, vaccination."],
        ["exs:m1-deplacement,m1-loi-demande,m1-vf-marche,m1-tableau,et1-externalite", "Un exercice par objectif : <a href=#ex-m1-deplacement>lire un déplacement de courbe</a>, <a href=#ex-m1-loi-demande>la loi de la demande</a>, <a href=#ex-m1-vf-marche>offre, demande et équilibre</a>, <a href=#ex-m1-tableau>trouver l’équilibre dans un tableau</a> et <a href=#ex-et1-externalite>une externalité négative</a>."]] },
    { id: "inflation", titre: "Comprendre l’inflation", accroche: "Où passe votre pouvoir d’achat quand les prix grimpent, et qui peut arrêter la hausse ?",
      intro: "En 2022, les prix ont fortement augmenté presque partout, moins en Suisse que dans la zone euro. Pourquoi ? Ce parcours explique à quoi sert la monnaie, d’où vient l’inflation, et comment les économistes se sont disputés sur la façon de la combattre.",
      objectifs: ["Distinguer les fonctions de la monnaie", "Expliquer les causes de l’inflation", "Passer d’une hausse nominale à une hausse réelle"],
      etapes: [
        ["c:fonctions-monnaie", "Avant l’inflation, la monnaie : à quoi elle sert et qui la crée."],
        ["c:theorie-quantitative", "La plus ancienne explication : trop de monnaie pour trop peu de biens."],
        ["lab:5", "Faites tourner la planche à billets et observez ce qui arrive aux prix."],
        ["eco:friedman", "L’économiste pour qui l’inflation est d’abord une affaire de monnaie."],
        ["debat:summers-krugman", "2021 : l’inflation sera-t-elle passagère ? Deux grands économistes s’opposent : ce que les faits ont montré ensuite, et ce qui reste discuté."],
        ["m:reel", "Votre salaire a-t-il vraiment augmenté ? Savoir passer du nominal au réel."],
        ["exs:mo1-fonctions,mo1-ipc,mo1-vf-bases,mo1-salaire-reel,mo2-quantitative", "Un exercice par objectif : <a href=#ex-mo1-fonctions>les trois fonctions de la monnaie</a>, <a href=#ex-mo1-ipc>calculer un taux d’inflation</a>, <a href=#ex-mo1-vf-bases>monnaie et inflation : les bases</a>, <a href=#ex-mo1-salaire-reel>salaire nominal et salaire réel</a> et, pour aller plus loin, <a href=#ex-mo2-quantitative>l’équation quantitative</a>."]] },
    { id: "crises", titre: "Pourquoi les crises reviennent", accroche: "Tulipes, Internet, subprimes : pourquoi retombe-t-on toujours dans le même piège ?",
      intro: "Des tulipes hollandaises aux subprimes, les crises financières se ressemblent étrangement : euphorie, endettement, panique. Ce parcours raconte deux grandes crises, donne les clés pour comprendre leur mécanique, puis présente le débat sur la manière d’en sortir.",
      objectifs: ["Reconnaître les phases d’une crise financière", "Expliquer le rôle du crédit et de l’endettement", "Comprendre le rôle d’une banque centrale dans la tempête"],
      etapes: [
        ["crise:krach29", "Le krach de 1929 et la Grande Dépression : la crise qui a fait naître la macroéconomie moderne."],
        ["q:crises", "Le dossier complet : pourquoi les économies de marché connaissent-elles des crises ?"],
        ["c:instabilite-financiere", "L’idée de Minsky : la stabilité elle-même finit par engendrer l’instabilité."],
        ["eco:minsky", "Un économiste longtemps resté en marge, redécouvert en 2008."],
        ["crise:subprimes", "2008 : de l’immobilier américain à l’économie mondiale."],
        ["c:preteur-dernier-ressort", "Ce que font les banques centrales quand tout s’effondre, et ce que cela coûte."],
        ["debat:keynes-hayek", "Relancer ou laisser l’économie se purger ? Le grand débat des années 1930."],
        ["exs:fi3-bulle,fi2-levier,fi3-minsky,fi2-panique", "Un exercice par objectif : <a href=#ex-fi3-bulle>reconnaître une bulle</a>, <a href=#ex-fi2-levier>l’effet de levier</a>, <a href=#ex-fi3-minsky>les trois financements de Minsky</a> et <a href=#ex-fi2-panique>arrêter une panique bancaire</a>."]] },
    { id: "commerce", titre: "Le commerce mondial : qui gagne, qui perd ?", accroche: "Le libre-échange enrichit-il vraiment tout le monde ? La réponse va vous surprendre.",
      intro: "La Suisse vit largement de ses échanges avec le reste du monde. Pourquoi les pays commercent-ils entre eux ? Tout le monde y gagne-t-il ? Ce parcours va de l’idée la plus célèbre de l’économie, l’avantage comparatif, aux débats actuels sur la mondialisation.",
      objectifs: ["Expliquer l’avantage comparatif avec un exemple chiffré", "Comprendre pourquoi des pays semblables échangent entre eux", "Identifier les gagnants et les perdants de l’ouverture"],
      etapes: [
        ["c:avantage-comparatif", "L’idée la plus contre-intuitive de l’économie : chacun peut gagner à se spécialiser."],
        ["lab:2", "Mettez-la à l’épreuve avec deux pays et deux produits."],
        ["eco:ricardo", "L’auteur de l’avantage comparatif, et son exemple du vin et du drap."],
        ["c:rendements-croissants", "Pourquoi des pays semblables échangent tant : la « nouvelle » théorie du commerce."],
        ["eco:krugman", "Le prix Nobel qui a renouvelé l’analyse du commerce et de la géographie économique."],
        ["q:commerce", "Le dossier : le commerce enrichit-il les nations, et à quelles conditions ?"],
        ["exs:co1-absolu-comparatif,co1-cout-opp,co2-ricardo,co2-intra,co2-vf-gagnants", "Un exercice par objectif : <a href=#ex-co1-absolu-comparatif>avantage absolu et comparatif</a>, <a href=#ex-co1-cout-opp>le coût d’opportunité</a>, <a href=#ex-co2-ricardo>trouver l’avantage comparatif</a>, <a href=#ex-co2-intra>des voitures contre des voitures</a> et <a href=#ex-co2-vf-gagnants>gagnants et perdants</a>."]] },
    { id: "chomage", titre: "Chômage et relance", accroche: "Pourquoi des gens cherchent du travail même quand l’économie va bien, et que peut y faire l’État ?",
      intro: "Pourquoi y a-t-il du chômage, même quand l’économie va bien ? L’État peut-il le faire baisser en dépensant davantage ? Ce parcours suit le débat ouvert par Keynes dans les années 1930, jusqu’aux leçons des années 1970.",
      objectifs: ["Distinguer les grandes explications du chômage", "Calculer l’effet d’une relance avec le multiplicateur", "Comprendre pourquoi les années 1970 ont changé la donne"],
      etapes: [
        ["q:chomage", "Le dossier : les grandes explications du chômage."],
        ["c:demande-effective", "L’intuition de Keynes : les entreprises produisent ce qu’elles pensent pouvoir vendre."],
        ["c:multiplicateur", "Comment une dépense en entraîne d’autres, et pourquoi l’effet s’épuise."],
        ["lab:1", "Calculez l’effet d’une relance avec le simulateur du multiplicateur."],
        ["eco:keynes", "L’économiste qui a changé la politique économique du XXᵉ siècle."],
        ["c:courbe-phillips", "Moins de chômage contre plus d’inflation : l’arbitrage des années 1960."],
        ["c:stagflation", "Les années 1970, quand le chômage et l’inflation montent ensemble."],
        ["exs:em1-bit,em1-vf-types,em1-keynes,et2-multiplicateur,mo2-phillips", "Un exercice par objectif : <a href=#ex-em1-bit>qui est chômeur ?</a>, <a href=#ex-em1-vf-types>les formes de chômage</a>, <a href=#ex-em1-keynes>le chômage selon Keynes</a>, <a href=#ex-et2-multiplicateur>le multiplicateur keynésien</a> et <a href=#ex-mo2-phillips>la courbe de Phillips</a>."]] },
    { id: "inegalites", titre: "Inégalités : mesurer et comprendre", accroche: "Les plus riches s’enrichissent-ils plus vite que les autres ? Apprenez à lire les chiffres sans vous faire piéger.",
      intro: "Les inégalités augmentent-elles ? Sont-elles le prix à payer pour la croissance, ou un frein ? Ce parcours donne d’abord les outils pour les mesurer sans se tromper, puis présente les grandes thèses qui s’affrontent.",
      objectifs: ["Utiliser moyenne, médiane et parts sans contresens", "Présenter les thèses de Kuznets et de Piketty", "Comprendre l’approche par les capabilités"],
      etapes: [
        ["m:proportions", "Moyenne, médiane, parts : les outils de base pour parler d’inégalités sans se tromper."],
        ["c:courbe-kuznets", "La thèse optimiste : les inégalités montent, puis baissent avec le développement."],
        ["c:r-g", "La thèse de Piketty : quand le rendement du capital dépasse la croissance."],
        ["eco:piketty", "Le portrait de l’auteur du Capital au XXIᵉ siècle."],
        ["c:capabilites", "Une autre mesure : ce que les gens sont réellement libres de faire et d’être."],
        ["eco:sen", "Le philosophe-économiste qui a fait entrer la liberté dans la mesure du développement."],
        ["q:inegalites", "Le dossier : les inégalités sont-elles le prix de la croissance ?"],
        ["exs:in1-mediane,in1-s80s20,in2-kuznets,in3-vf-piketty,in2-vf-justice", "Un exercice par objectif : <a href=#ex-in1-mediane>moyenne et médiane</a>, <a href=#ex-in1-s80s20>le rapport S80/S20</a>, <a href=#ex-in2-kuznets>la courbe de Kuznets</a>, <a href=#ex-in3-vf-piketty>les thèses de Piketty</a> et <a href=#ex-in2-vf-justice>les théories de la justice</a>."]] },
    { id: "communs", titre: "Les communs et l’environnement", accroche: "Peut-on partager une ressource sans la détruire ? Des alpages valaisans au climat, ce que les communautés ont trouvé.",
      intro: "Pâturages, forêts, poissons, climat : comment gérer une ressource que tout le monde utilise et que personne ne possède ? Ce parcours part d’une thèse pessimiste, la « tragédie des communs », et la confronte à un exemple célèbre, celui des alpages valaisans.",
      objectifs: ["Expliquer la tragédie des communs", "Connaître les conditions d’une gestion collective réussie", "Distinguer biens communs, biens publics et externalités"],
      etapes: [
        ["c:biens-communs", "Le problème posé : pourquoi une ressource partagée risque d’être surexploitée."],
        ["lab:4", "Exploitez vous-même un pâturage partagé et voyez ce qu’il devient."],
        ["eco:ostrom", "La première femme prix Nobel d’économie, et les alpages de Törbel, en Valais."],
        ["debat:ostrom-hardin", "Les communs sont-ils condamnés ? Ostrom répond à Hardin."],
        ["c:externalite", "Quand une activité fait payer les autres : pollution, bruit, climat."],
        ["c:bien-public", "Ce que le marché produit trop peu : routes, recherche, défense."],
        ["exs:et1-vf-biens,et1-bien-public,et2-passager,et2-ostrom,et1-externalite", "Un exercice par objectif : <a href=#ex-et1-vf-biens>quatre types de biens</a>, <a href=#ex-et1-bien-public>reconnaître un bien public</a>, <a href=#ex-et2-passager>le passager clandestin</a>, <a href=#ex-et2-ostrom>ni le marché ni l’État ?</a> et <a href=#ex-et1-externalite>une externalité négative</a>."]] },
    { id: "histoire", titre: "Vingt-quatre siècles en six portraits", accroche: "Six esprits qui ont changé notre façon de penser l’argent, d’un philosophe grec à aujourd’hui.",
      intro: "Pour découvrir l’histoire de la pensée économique par ceux qui l’ont faite : un philosophe grec, les fondateurs, les grands rivaux du XXᵉ siècle et une économiste d’aujourd’hui. Pour finir, faites débattre deux d’entre eux.",
      objectifs: ["Situer les grands économistes dans le temps", "Résumer l’idée centrale de chacun", "Comprendre ce qui les oppose"],
      etapes: [
        ["eco:aristote", "Le premier à distinguer la valeur d’usage et la valeur d’échange."],
        ["eco:smith", "La naissance de l’économie politique, en 1776."],
        ["eco:marx", "La critique du capitalisme et de l’exploitation."],
        ["eco:keynes", "La révolution des années 1930 : l’État au secours de la demande."],
        ["eco:hayek", "Le grand rival de Keynes : le marché comme moyen de coordonner des savoirs dispersés."],
        ["eco:duflo", "L’économie d’aujourd’hui : des expériences de terrain pour lutter contre la pauvreté."],
        ["debat:smith-marx", "Le marché libère-t-il ou exploite-t-il ? Faites débattre Smith et Marx."],
        ["exs:co1-mercantilisme,et1-smith,em1-keynes,vi1-familles", "Pour vérifier ce que vous avez retenu : <a href=#ex-co1-mercantilisme>la doctrine mercantiliste</a>, <a href=#ex-et1-smith>les devoirs du souverain selon Smith</a>, <a href=#ex-em1-keynes>le chômage selon Keynes</a> et <a href=#ex-vi1-familles>orthodoxe ou hétérodoxe ?</a>."]] },
    { id: "visions", titre: "Les autres visions de l’économie", accroche: "Et si le marché n’était pas toujours la réponse ? Découvrez les économistes qui pensent autrement.",
      intro: "Les manuels présentent surtout le courant dominant. Mais depuis toujours, des économistes posent d’autres questions : le marché peut-il régler toute la société ? D’où vient vraiment la monnaie ? Que vaut le travail que personne ne paie ? Ce parcours vous fait découvrir ces voix hétérodoxes, leurs arguments et ceux de leurs adversaires.",
      objectifs: ["Distinguer le courant dominant des courants hétérodoxes", "Expliquer l’encastrement et la création monétaire par le crédit", "Argumenter sur le travail non rémunéré et le rôle de l’État"],
      etapes: [
        ["page:familles", "La carte des écoles : ce qui distingue le courant dominant des hétérodoxies, de gauche comme de droite."],
        ["eco:polanyi", "L’historien qui a montré que le marché autorégulateur est une invention récente."],
        ["c:encastrement", "La notion clé de Polanyi : l’économie prise dans la société."],
        ["debat:polanyi-hayek", "1944, deux livres, deux visions du marché : choisissez votre camp."],
        ["c:monnaie-endogene", "D’où vient l’argent sur votre compte ? Le crédit crée la monnaie."],
        ["debat:kelton-summers", "Un État peut-il dépenser sans compter ? La théorie moderne de la monnaie face à ses critiques."],
        ["c:travail-non-remunere", "Le travail que le PIB ne compte pas, et pourquoi c’est important."],
        ["ex:visions-1", "Sept exercices de niveau Découverte pour vérifier ce que vous avez retenu."]] }
  ];

  const KEY = "oec-parcours";
  const NIV = { 1: "Découverte", 2: "Intermédiaire", 3: "Avancé" };
  const PREFIX = { m: "marche", mo: "monnaie", cr: "croissance", em: "emploi", co: "commerce", in: "inegalites", et: "etat", fi: "finance", vi: "visions" };
  const MIN = { c: 7, q: 20, eco: 12, lab: 8, crise: 8, debat: 10, ex: 20, exs: 15, m: 8, page: 6 };
  const get = (k, d) => { try { return JSON.parse(localStorage.getItem(k) || "") || d; } catch (e) { return d; } };
  let S = get(KEY, {}); S.vus = S.vus || [];
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} };
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
  const ECO = () => (window.OECAPP && OECAPP.ECO) || {};
  const nomCourt = (id) => { const e = ECO()[id] || (OEC.extraSpeakers || {})[id]; return e ? e.nom.split(" ").slice(-1)[0] : id; };

  /* ---------- Description d’une étape : lien, titre, type, durée, état ---------- */
  function step(code) {
    const [t, id] = code.split(":");
    const lu = new Set(get("oec-lu", [])), vu = S.vus.includes(code);
    let href = "#", attr = "", titre = id, type = "", fait = vu;
    if (t === "c") { const c = (OEC.concepts || []).find((x) => x.id === id); href = "#c-" + id; titre = c ? c.nom : id; type = "Notion"; fait = lu.has("c-" + id); }
    if (t === "q") { const q = (OEC.questions || []).find((x) => x.id === id); href = "#q-" + id; titre = q ? q.titre : id; type = "Grande question"; fait = lu.has("q-" + id); }
    if (t === "eco") { href = "#eco-" + id; titre = (ECO()[id] || { nom: id }).nom; type = "Portrait"; fait = lu.has("eco-" + id); }
    if (t === "lab") { href = "#labo"; attr = `data-lab="${id}"`; titre = (OEC.labNames || [])[+id] || "Simulateur"; type = "Simulateur"; }
    if (t === "crise") { const c = (OEC.crises || []).find((x) => x.id === id); href = "#crises"; attr = `data-crisis="${id}"`; titre = c ? c.nom : id; type = c ? `Crise · ${c.annee}` : "Crise"; }
    if (t === "debat") { const d = (OEC.debates || []).find((x) => x.id === id); href = "#controverses"; attr = `data-debat="${id}"`; titre = d ? `${nomCourt(d.a)} contre ${nomCourt(d.b)} : ${d.titre}` : id; type = "Controverse"; }
    if (t === "m") { const m = (OEC.methode || []).find((x) => x.id === id); href = "#methode-" + id; titre = m ? m.titre : id; type = "Fiche de méthode"; }
    if (t === "page") { const PAGES = { familles: "Les familles de pensée : orthodoxes et hétérodoxes" }; href = "#" + id; titre = PAGES[id] || id; type = "Page"; }
    if (t === "ex") {
      const [th, n] = id.split("-"), T = ((OEC.lazy && OEC.lazy.exercises) || []).find((x) => x.id === th);
      href = "#ex-" + id; titre = `${T ? T.nom : th}, niveau ${NIV[n] || n}`; type = "Exercices";
      const ex = get("oec-ex", {}); let ok = 0;
      Object.entries(ex).forEach(([k, v]) => { const p = k.match(/^([a-z]+)(\d)-/); if (v && v.ok && p && PREFIX[p[1]] === th && p[2] === n) ok++; });
      const parNiv = T ? (T.niv ? T.niv[+n - 1] : Math.round(T.n / 3)) : 8;
      fait = ok >= Math.ceil(parNiv / 2); type += ok ? ` · ${ok} réussi${ok > 1 ? "s" : ""} sur ${parNiv}` : "";
    }
    if (t === "exs") {
      const ids = id.split(","), ex = get("oec-ex", {}), ok = ids.filter((k) => ex[k] && ex[k].ok).length;
      href = "#ex-" + ids[0]; titre = `${ids.length} exercices choisis pour ce parcours`; type = "Exercices" + (ok ? ` · ${ok} réussi${ok > 1 ? "s" : ""} sur ${ids.length}` : "");
      fait = ok >= Math.ceil(ids.length / 2);
    }
    return { code, t, href, attr, titre, type, fait, vu: vu && !fait, min: MIN[t] || 8 };
  }
  const steps = (p) => p.etapes.map(([code, pq]) => Object.assign(step(code), { pourquoi: pq }));
  const duree = (st) => { const m = st.reduce((a, s) => a + s.min, 0), r = Math.round(m / 15) * 15; return r < 60 ? `${r} min` : `${Math.floor(r / 60)} h${r % 60 ? " " + (r % 60) : ""}`; };
  const prochaine = (st) => { const i = st.findIndex((s) => !s.fait); return i < 0 ? 0 : i; };
  const lien = (p, i, s, cls, txt) => `<a class="${cls}" href="${s.href}" ${s.attr} data-pstep="${p.id}:${i}">${txt}</a>`;

  /* ---------- Page liste et page détail ---------- */
  function render() {
    const root = document.getElementById("parcoursRoot"); if (!root) return;
    const h = location.hash.replace(/^#/, ""), p = P.find((x) => "parcours-" + x.id === h);
    root.innerHTML = p ? detail(p) : liste();
    const sec = root.closest("section"); if (sec) sec.classList.toggle("pc-detail", !!p);
    if (p && window.OECAPP && OECAPP.headH) window.scrollTo({ top: 0, behavior: "instant" });
    const t = (p ? p.titre + " · Parcours" : "Parcours guidés") + " · Œconomia";
    document.title = t; setTimeout(() => (document.title = t), 0);
  }
  function liste() {
    return `<div class="pc-grid">${P.map((p) => {
      const st = steps(p), n = st.filter((s) => s.fait).length;
      const etat = n === st.length ? "Parcours terminé ✓" : n ? `${n} étape${n > 1 ? "s" : ""} sur ${st.length} · on continue ?` : `${st.length} étapes · la 1ʳᵉ en ${st[0].min} min`;
      return `<a class="door pc-card" href="#parcours-${p.id}"><span class="k">${etat}</span><b>${p.titre}</b><p>${p.accroche}</p>
        <span class="pc-types">${[...new Set(st.map((s) => s.type.split(" · ")[0]))].join(" · ")}</span>
        <span class="pg-bar"><i style="width:${Math.round((100 * n) / st.length)}%"></i></span>
        <span class="go">${n === st.length ? "Revoir" : n ? "Reprendre" : "Découvrir"} →</span></a>`; }).join("")}</div>
      <p class="pg-note">Chaque parcours enchaîne des pages du site dans un ordre pensé pour découvrir un sujet sans prérequis. La plupart des étapes prennent moins d’un quart d’heure : vous pouvez vous arrêter quand vous voulez et reprendre plus tard, le parcours se souvient où vous en êtes. Une étape est cochée quand la notice, le dossier ou le portrait a été lu jusqu’au bout, quand la moitié des exercices du niveau est réussie, ou quand le simulateur, la crise, la controverse ou la fiche a été ouvert.</p>`;
  }
  function detail(p) {
    const st = steps(p), n = st.filter((s) => s.fait).length, k = prochaine(st), fini = n === st.length;
    const autres = P.filter((x) => x.id !== p.id && !steps(x).every((s) => s.fait)).slice(0, 3);
    return `<p class="pc-retour"><a href="#parcours">← Tous les parcours</a></p>
      <div class="pc-head">
        <p class="eyebrow">Parcours guidé · ${st.length} étapes · à votre rythme</p>
        <h1>${p.titre}</h1>
        <p class="pc-intro">${p.intro}</p>
        <div class="pc-obj"><b>À la fin, vous saurez :</b><ul>${p.objectifs.map((o) => `<li>${o}</li>`).join("")}</ul></div>
        <p class="pc-cta">${lien(p, k, st[k], "btn", fini ? "Recommencer le parcours →" : n ? `Reprendre à l’étape ${k + 1} →` : "Commencer le parcours →")}
          <span class="pc-av">${n} étape${n > 1 ? "s" : ""} faite${n > 1 ? "s" : ""} sur ${st.length}</span></p>
      </div>
      <ol class="pc-steps">${st.map((s, i) => `<li class="${s.fait ? "fait" : s.vu ? "vu" : ""}${i === k && !fini ? " cur" : ""}">
          <span class="pc-num" aria-hidden="true">${s.fait ? "✓" : i + 1}</span>
          <div><small>${s.type} · ${s.min} min${s.fait ? " · fait" : s.vu ? " · ouvert" : ""}</small>
            <b>${lien(p, i, s, "pc-t", esc(s.titre))}</b>
            <p>${s.pourquoi}</p></div>
        </li>`).join("")}</ol>
      ${autres.length ? `<h3 class="pc-ensuite">Et ensuite ?</h3><div class="pc-grid">${autres.map((x) => `<a class="door pc-card" href="#parcours-${x.id}"><span class="k">${steps(x).length} étapes</span><b>${x.titre}</b><p>${x.accroche}</p><span class="go">Découvrir →</span></a>`).join("")}</div>` : ""}`;
  }

  /* ---------- Bandeau pendant le parcours ---------- */
  const bar = document.createElement("div"); bar.className = "pc-bar"; bar.hidden = true; bar.setAttribute("role", "region"); bar.setAttribute("aria-label", "Parcours en cours");
  document.body.appendChild(bar);
  function bandeau() {
    const a = S.actif, p = a && P.find((x) => x.id === a.id), v = document.body.dataset.view;
    if (!p || v === "parcours" || v === "accueil") { bar.hidden = true; document.body.classList.remove("pc-on"); return; }
    const st = steps(p), i = Math.min(a.i, st.length - 1), s = st[i], nx = st[i + 1];
    bar.innerHTML = `<div class="pc-bar-txt"><small><a href="#parcours-${p.id}">Parcours · ${p.titre}</a></small><span>Étape ${i + 1}/${st.length} · ${esc(s.titre)}</span></div>
      <div class="pc-bar-act">${nx ? lien(p, i + 1, nx, "btn small", `<span class="pc-long">Étape suivante →</span><span class="pc-short">Suite →</span>`) : `<a class="btn small" href="#parcours-${p.id}" data-pfin="1">Terminer ✓</a>`}
      <button type="button" class="pc-bar-x" aria-label="Quitter le parcours" title="Quitter le parcours">×</button></div>`;
    bar.hidden = false; document.body.classList.add("pc-on");
  }
  document.addEventListener("click", (e) => {
    const a = e.target.closest("[data-pstep]");
    if (a) { const [id, i] = a.dataset.pstep.split(":"), p = P.find((x) => x.id === id); if (p) { S.actif = { id, i: +i }; const c = p.etapes[+i][0]; if (!S.vus.includes(c)) S.vus.push(c); save(); } return; }
    if (e.target.closest("[data-pfin]") && S.actif) { S.finis = [...new Set([...(S.finis || []), S.actif.id])]; }
    if (e.target.closest("[data-pfin]") || e.target.closest(".pc-bar-x")) { delete S.actif; save(); bar.hidden = true; document.body.classList.remove("pc-on"); }
  });
  const update = () => { if (document.body.dataset.view === "parcours") render(); bandeau(); };
  window.addEventListener("hashchange", () => setTimeout(update, 0));
  /* les notices et portraits se chargent à la demande : la vue change parfois après l’adresse */
  new MutationObserver(update).observe(document.body, { attributes: true, attributeFilter: ["data-view"] });
  window.addEventListener("storage", update);
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", () => setTimeout(update, 0)); else setTimeout(update, 0);

  /* ---------- CSS ---------- */
  const css = document.createElement("style");
  css.textContent = `
.pc-grid{display:grid; grid-template-columns:repeat(auto-fill, minmax(min(100%, 300px), 1fr)); gap:14px; margin:8px 0 24px}
.pc-card b{font-size:24px}
.pc-card .pc-types{font-size:12.5px; color:var(--ink-soft)}
.pc-card .pg-bar{margin-top:auto}
.pc-retour{margin:0 0 12px} .pc-retour a{color:var(--note); text-decoration:none; font-weight:600}
.pc-head{max-width:820px}
.pc-detail .sec-head{display:none}
.pc-head h1, .pc-head h2{margin:4px 0 12px; font:400 clamp(38px, 5vw, 60px)/1.02 var(--f-display)}
.pc-intro{font-size:17px; line-height:1.6; color:var(--ink-soft)}
.pc-obj{margin:16px 0; padding:14px 18px; border-radius:var(--r); background:var(--card); border:1px solid var(--line)}
.pc-obj ul{margin:6px 0 0; padding-left:20px}
.pc-cta{display:flex; flex-wrap:wrap; align-items:center; gap:12px; margin:18px 0 26px}
.pc-av{font-size:14px; color:var(--ink-soft)}
.pc-steps{list-style:none; margin:0 0 30px; padding:0; max-width:820px; display:grid; gap:10px}
.pc-steps li{display:grid; grid-template-columns:40px minmax(0,1fr); gap:14px; padding:14px 16px; border-radius:var(--r); border:1px solid var(--line); background:var(--card)}
.pc-steps li.cur{border-color:var(--note); box-shadow:0 0 0 1px var(--note)}
.pc-num{display:grid; place-items:center; width:36px; height:36px; border-radius:50%; border:1.5px solid var(--line); font-weight:700; font-size:15px}
.pc-steps li.fait .pc-num{background:var(--note); border-color:var(--note); color:var(--paper)}
.pc-steps li.vu .pc-num{border-color:var(--note); color:var(--note)}
.pc-steps small{display:block; font-size:12.5px; color:var(--ink-soft); text-transform:uppercase; letter-spacing:.06em}
.pc-steps b{display:block; font-size:18px; margin:3px 0 4px}
.pc-steps .pc-t{color:var(--ink); text-decoration:none} .pc-steps .pc-t:hover{color:var(--note); text-decoration:underline}
.pc-steps p{margin:0; font-size:15px; color:var(--ink-soft); line-height:1.5}
.pc-ensuite{margin-top:10px}
.pc-bar{position:fixed; right:16px; bottom:16px; z-index:54; display:flex; align-items:center; gap:14px; max-width:min(560px, calc(100vw - 90px)); padding:10px 10px 10px 16px; border-radius:14px; background:var(--card); color:var(--ink); border:1px solid var(--note); box-shadow:0 8px 24px rgba(0,0,0,.16)}
.pc-bar[hidden]{display:none}
body.pc-on footer{padding-bottom:96px}
.pc-bar-txt{min-width:0; display:flex; flex-direction:column; gap:2px}
.pc-bar-txt small{display:block; white-space:nowrap; overflow:hidden; text-overflow:ellipsis}
.pc-short{display:none}
.pc-bar-txt small a{font-size:12px; color:var(--note); font-weight:700; text-decoration:none; text-transform:uppercase; letter-spacing:.05em}
.pc-bar-txt span{font-size:14px; line-height:1.3; overflow:hidden; text-overflow:ellipsis; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical}
.pc-bar-act{display:flex; align-items:center; gap:4px; flex-shrink:0}
.pc-bar-act .btn{white-space:nowrap}
.pc-bar-x{border:0; background:transparent; font-size:22px; line-height:1; padding:4px 6px; color:var(--ink-soft); cursor:pointer}
@media (max-width: 640px){ .pc-bar{left:70px; right:10px; bottom:10px; max-width:none; gap:6px; padding:8px 4px 8px 12px} .pc-bar-txt{flex:1} .pc-bar-txt span{font-size:13px} .pc-bar-txt small a{font-size:11px} .pc-long{display:none} .pc-short{display:inline} .pc-bar-act .btn{padding:8px 12px} .pc-steps li{grid-template-columns:32px minmax(0,1fr); gap:10px; padding:12px} .pc-num{width:30px; height:30px} .pc-steps b{font-size:16.5px} }
@media print{ .pc-bar{display:none !important} }`;
  document.head.appendChild(css);

  OEC.parcours = { list: P, render };
})();
