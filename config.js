/* ============================================================
   CONFIGURACIÓ DEL JOC — edita només aquest fitxer
   ============================================================ */
window.CONFIG = {

  titol: "Cache de Nadal",
  subtitol: "Cinc proves, un sol campió.",

  /* Classificació compartida entre tots els mòbils */
  firebaseUrl: "https://nadal2026-default-rtdb.europe-west1.firebasedatabase.app",

  /* PROVA 1 · Quiz. Quantes preguntes surten a cada partida (a l’atzar).
     Les opcions es barregen soles cada cop, així que la posició de la
     resposta correcta ja és diferent a cada partida. */
  preguntesPerPartida: 10,
  segonsPerPregunta: 15,

  /* Format: { p: "pregunta", o: [opcions], c: índex de la correcta (0 = la primera) } */
  preguntes: [
    { p: "Distància mínima entre dues etapes físiques de catxés diferents?", o: ["160 metres exactes","150 m a ciutat i 200 m al camp","0,1 milles (161 metres)","Cap, si són de propietaris diferents"], c: 2 },
    { p: "On NO s’aplica la regla dels 161 metres?", o: ["Entre les coordenades falses d’un Misteri i un Tradicional","Entre un Tradicional i l’etapa d’un Multi","Entre els finals de dos Misteris","Entre un Letterbox Hybrid i un Tradicional"], c: 0 },
    { p: "Es pot enterrar un catxé?", o: ["Sí, a menys de 10 cm","Només en platges de sorra","Sí, amb permís escrit del propietari","No, està prohibit"], c: 3 },
    { p: "Pots registrar com a «Trobat» un catxé desactivat temporalment?", o: ["Sí, si el trobes i signes el logbook","No, el sistema ho bloqueja","Només si el propietari ho aprova","Només si ets Premium"], c: 0 },
    { p: "Què caracteritza un Letterbox Hybrid?", o: ["Cal resoldre un enigma previ","Té un segell de tinta que es queda al contenidor","No té cap contenidor","Només s’amaga al bosc"], c: 1 },
    { p: "Quin d’aquests catxés NO té contenidor ni logbook?", o: ["Wherigo","Project A.P.E.","Letterbox Hybrid","EarthCache"], c: 3 },
    { p: "Diferència principal entre un Virtual i un EarthCache?", o: ["El Virtual el revisa un revisor normal; l’EarthCache, un geòleg voluntari","L’EarthCache té contenidor i el Virtual no","Els Virtuals només existeixen als EUA","Cap, són el mateix"], c: 0 },
    { p: "Què és un Reverse Wherigo?", o: ["Un catxé només de nit","Un en què caminar d’esquena els últims 50 m","Un cartutx que només diu la distància, no la direcció","Un que comença a les coordenades finals"], c: 2 },
    { p: "Veus un Travel Bug però no te’l quedes. Quina acció el suma al teu perfil?", o: ["Grab it","Discover it","Retrieve it","Write note"], c: 1 },
    { p: "Diferència entre Retrieve it i Grab it?", o: ["Són exactament el mateix","Grab és per a Geocoins; Retrieve, per a Travel Bugs","Retrieve suma km i Grab els posa a zero","Retrieve: el treus d’un catxé. Grab: el prens d’un jugador"], c: 3 },
    { p: "Pots quedar-te una Geocoin trobada si deixes un objecte de més valor?", o: ["Sí, si avises el propietari","Sí, si porta 6 mesos aturada","No, han de continuar viatjant","Només si no està activada"], c: 2 },
    { p: "Què indica un Terreny 5 (T5)?", o: ["Camí de més de 15 km","Cal equip especial (escalada, busseig, barca)","Pendent superior al 45%","Més de 2.000 m d’altitud"], c: 1 },
    { p: "Quina combinació de Dificultat i Terreny és impossible?", o: ["Cap, totes són possibles","Dificultat 5 / Terreny 1","Dificultat 1 / Terreny 5","Dificultat 1 / Terreny 1 en un Misteri"], c: 0 },
    { p: "Registres «Trobat» però no surts al logbook físic. Què passa?", o: ["Val si hi adjuntes una foto","Et resta 5 punts automàticament","El propietari pot esborrar el registre","Passa a ser un DNF"], c: 2 },
    { p: "Què significa CITO?", o: ["Coordinates In The Open","Check In Time Out","Cache Inspection Team Official","Cache In Trash Out (neteja de la natura)"], c: 3 },
    { p: "Quin fet va permetre néixer el geocaching el maig del 2000?", o: ["El primer GPS europeu","La fi de la «Disponibilitat Selectiva» del GPS","El primer mòbil tàctil amb mapes","L’obertura de Google Earth"], c: 1 },
    { p: "Com es deia el joc a les primeres setmanes del 2000?", o: ["GPS Hunt","Treasure Seekers","Navicaching","Great American GPS Stash Hunt"], c: 3 },
    { p: "Què és un catxé Project A.P.E.?", o: ["Catxés amagats entre primats","Un projecte a l’Estació Espacial","Una sèrie del 2001 per promocionar El planeta dels simis","Catxés que es destrueixen en trobar-los"], c: 2 },
    { p: "Quin codi identifica un catxé a Geocaching.com?", o: ["Alfanumèric que comença per GC","Numèric de 8 xifres i una lletra","Comença per TB","País + any de publicació"], c: 0 },
    { p: "Què passa quan un catxé s’arxiva?", o: ["El propietari el pot desarxivar quan vulgui","Només un revisor el pot desarxivar, excepcionalment","Passa al primer que el va trobar (FTF)","Es queda 6 mesos més al mapa"], c: 1 }
  ],

  /* PROVA 3 · Memòria: 6 emojis (es dupliquen per fer les parelles). */
  memoria: ["😢","📦","😃","🧭","🔍","🔦"],

  /* PROVA 4 · Paraules desordenades. Format: ["PARAULA", "pista"]. */
  paraulesPerPartida: 6,
  segonsPerParaula: 25,
  paraules: [
    ["GCHQ","Geocaching Headquarters"],
    ["GC2D4","El catxé més antic de Catalunya - Montserrat"],
    ["GC30","El catxé actiu més antic del món - Mingo"],
    ["GCGV0P","Original Stash Tribute Plaque"],
    ["GC43","Europe’s First"],
    ["GC1BE91","International Space Station"]
  ],

  /* PROVA 5 · Puzzle de 9 peces (3x3).
     Per defecte surt un dibuix nadalenc. Si vols posar-hi una foto vostra,
     puja-la a GitHub (millor quadrada, p. ex. puzzle.jpg) i escriu-ne el nom aquí: "puzzle.jpg" */
  puzzleImatge: "",
  segonsPuzzle: 120
};
