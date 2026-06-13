const services = [
  {icon:'🏗️',title:'Hochbau',lead:'Einfamilienhäuser, Mehrfamilienhäuser und öffentliche Bauten – zuverlässig, präzise und handwerklich stark.',details:'Neben Einfamilienhäusern gehören Mehrfamilienhäuser und öffentliche Bauten zum Repertoire. Bauen bleibt Handarbeit – offen für neue Technologien, aber mit Fokus auf saubere Ausführung.',points:['EFH und MFH','Öffentliche Bauten','Beton- und Backsteinbauten','Projektleitung und Bauausführung'],contacts:['Reto Müller · Geschäftsführer · r.mueller@gottlieb-mueller.ch · 079 606 68 37','Bruno Mehr · Bauführer Hochbau · b.mehr@gottlieb-mueller.ch · 079 870 71 08','Jimmy Lindt · Bauführer Hochbau · j.lindt@gottlieb-mueller.ch · 079 286 79 53']},
  {icon:'🚧',title:'Tiefbau',lead:'Maschinenintensive Tiefbauarbeiten, Kanalisationen, Werkleitungen, Natursteinmauern und Reparaturen.',details:'Der Maschinenpark ist für vielseitige Tiefbauarbeiten gerüstet. Von der neuen Quartierstrasse bis zur Reparatur von Werkleitungen zählt ruhige Hand, Erfahrung und Zuverlässigkeit.',points:['Kanalisationen und Werkleitungen','Natursteinmauern','Gas- und Leitungsreparaturen','Maschineneinsätze im Tiefbau'],contacts:['Walter Keiser · Geschäftsführer / Leiter Tiefbau · w.keiser@gottlieb-mueller.ch · 079 434 52 25','Ralph Morgenthaler · Bauführer Tiefbau · r.morgenthaler@gottlieb-mueller.ch · 079 408 68 25']},
  {icon:'🛠️',title:'Kundendienst',lead:'Kundenarbeiten, Sanierungen und Umbauten mit minimalem Aufwand und maximalem Ergebnis.',details:'Für Umbauten, Wohnungssanierungen und Arbeiten rund um private Liegenschaften. Der Kundendienst kommt direkt zum Objekt und findet pragmatische Lösungen.',points:['Wohnungssanierungen','Ausbau und Reparaturen','Kleinere Umbauten','Persönliche Beratung vor Ort'],contacts:['Konrad Wüest · Leiter Erneuerungsbau · k.wuest@gottlieb-mueller.ch · 079 667 84 78']},
  {icon:'♻️',title:'Muldendienst',lead:'Mulde mieten in Zofingen, Rothrist und der Region – schnell, unkompliziert und zuverlässig.',details:'Für Bauabfälle, Sperrgut oder Gartenabfälle: Mulden in Grössen von 4 bis 40 m³, verschiedene Ausführungen und fachgerechte nachhaltige Entsorgung.',points:['Abrollmulden, Deckelmulden, Flachmulden','Abrollpaletten und Flachpaletten','Schnelle Lieferung und Abholung','Fachgerechte Entsorgung'],contacts:['Beat Bolliger · Disposition / Muldendienst · b.bolliger@gottlieb-mueller.ch · 062 746 88 15']},
  {icon:'🚚',title:'LKW mit Ladekran / Baustellenlogistik',lead:'Transportieren, heben und präzise platzieren – flexibel, stark und zuverlässig.',details:'Der LKW mit Ladekran ist ideal für schweres oder sperriges Material. Er unterstützt Bau- und Gewerbeprojekte, Montagearbeiten und kurzfristige Logistikeinsätze.',points:['Max. Hubkraft 10’500 kg / 2.45 m','Reichweite 19.00 m','Palettengabeln, Steingreifer, Zweischalengreifer','Materialanlieferung mit präzisem Abladen'],contacts:['Beat Bolliger · Disposition / Muldendienst · b.bolliger@gottlieb-mueller.ch · 062 746 88 15']},
  {icon:'🏚️',title:'Renovationen',lead:'Umbauten, Rückbau und Sanierung mit Know-how, Handarbeit und moderner Unterstützung.',details:'Vom Rückbau bis zur Verstärkung bestehender Bauten: Renovationen und Umbauten werden mit Erfahrung, Präzision und passenden Maschinen umgesetzt.',points:['Sanierungsarbeiten','Rückbau und Umbau','Betonverstärkungen','Erdbebensichere Erneuerungen'],contacts:['Konrad Wüest · Leiter Erneuerungsbau · k.wuest@gottlieb-mueller.ch · 079 667 84 78']},
  {icon:'🪵',title:'Zimmerei',lead:'Alles aus Holz: Trennwände, Carports, Pergolen, Sitzplätze, Überdachungen und Treppen.',details:'Die hauseigene Zimmerei ist auf kleinere Holzbauteile und individuelle Lösungen eingerichtet – praktisch, sauber und aus einer Hand.',points:['Trennwände und Carports','Pergolen und Sitzplätze','Überdachungen','Treppen und Holzbauteile'],contacts:['Konrad Wüest · Leiter Erneuerungsbau · k.wuest@gottlieb-mueller.ch · 079 667 84 78']}
];

const team = [
  ['Reto Müller','Geschäftsführer','r.mueller@gottlieb-mueller.ch','079 606 68 37'],
  ['Walter Keiser','Geschäftsführer / Leiter Tiefbau','w.keiser@gottlieb-mueller.ch','079 434 52 25'],
  ['Konrad Wüest','Leiter Erneuerungsbau','k.wuest@gottlieb-mueller.ch','079 667 84 78'],
  ['Ralph Morgenthaler','Bauführer Tiefbau','r.morgenthaler@gottlieb-mueller.ch','079 408 68 25'],
  ['Bruno Mehr','Bauführer Hochbau','b.mehr@gottlieb-mueller.ch','079 870 71 08'],
  ['Jimmy Lindt','Bauführer Hochbau','j.lindt@gottlieb-mueller.ch','079 286 79 53'],
  ['Beat Bolliger','Disposition / Muldendienst','b.bolliger@gottlieb-mueller.ch','062 746 88 15'],
  ['Seraina Hochuli','Berufsbildnerin','s.hochuli@gottlieb-mueller.ch','062 746 88 20']
];

const serviceCards = document.getElementById('serviceCards');
const detail = document.getElementById('page-detail');

function renderServices(){
  serviceCards.innerHTML = services.map((s,i)=>`<article class="service-card"><div><div class="icon">${s.icon}</div><h3>${s.title}</h3><p>${s.lead}</p></div><button data-index="${i}">Unterseite öffnen →</button></article>`).join('');
  serviceCards.querySelectorAll('button').forEach(btn => btn.addEventListener('click', () => openService(Number(btn.dataset.index))));
}

function openService(index){
  const s = services[index];
  detail.classList.remove('hidden');
  detail.innerHTML = `<div class="detail-inner"><div class="detail-copy"><p class="eyebrow">Unterseite · Angebot</p><h2>${s.title}</h2><p>${s.details}</p><ul>${s.points.map(p=>`<li>${p}</li>`).join('')}</ul><a href="#kontakt" class="btn primary small">Anfrage zu ${s.title}</a></div><aside class="detail-side"><h3>Direkte Ansprechpartner</h3>${s.contacts.map(c=>{const [name,role,email,phone]=c.split(' · ');return `<div class="person-mini"><strong>${name}</strong><span>${role}</span><a href="mailto:${email}">${email}</a><span>${phone}</span></div>`}).join('')}</aside></div>`;
  detail.scrollIntoView({behavior:'smooth', block:'start'});
}

function renderTeam(){
  document.getElementById('teamGrid').innerHTML = team.map(([name,role,email,phone])=>`<article class="member"><div class="avatar">${name.split(' ').map(n=>n[0]).join('')}</div><h4>${name}</h4><p>${role}</p><a href="mailto:${email}">${email}</a><p>${phone}</p></article>`).join('');
}

document.querySelector('.menu-toggle').addEventListener('click',()=>document.querySelector('.main-nav').classList.toggle('open'));
document.querySelectorAll('[data-open]').forEach(el=>el.addEventListener('click',()=>{const idx=services.findIndex(s=>s.title===el.dataset.open); if(idx>=0) setTimeout(()=>openService(idx),120)}));

renderServices();
renderTeam();
