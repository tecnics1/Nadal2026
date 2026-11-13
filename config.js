/* ============================================================
   CONFIGURACIÓ DEL JOC — edita només aquest fitxer
   ============================================================ */
window.CONFIG = {

  titol: "Cache de Nadal",
  subtitol: "Cinc proves, un sol campió.",

  /* PROVA 5 · Puzzle de 9 peces (3x3).
     Per defecte surt un dibuix nadalenc. Si vols posar-hi una foto vostra,
     puja-la a GitHub (millor quadrada, p. ex. puzzle.jpg) i escriu-ne el nom aquí: "puzzle.jpg" */
  puzzleImatge: "",
  segonsPuzzle: 120,

  /* Classificació compartida entre tots els mòbils (opcional).
     Enganxa aquí l’adreça de la teva Firebase Realtime Database,
     per exemple: "https://el-teu-projecte-default-rtdb.europe-west1.firebasedatabase.app"
     Si ho deixes buit, cada mòbil té la seva classificació local. */
  firebaseUrl: "https://nadal2026-default-rtdb.europe-west1.firebasedatabase.app",

  /* PROVA 1 · Quiz. Quantes preguntes surten a cada partida (a l’atzar). */
  preguntesPerPartida: 8,
  segonsPerPregunta: 15,

  /* Format: { p: "pregunta", o: ["opció A","opció B","opció C","opció D"], c: índex de la correcta (0 = la primera) }
     Pots posar-hi 2, 3 o 4 opcions. Afegeix-ne tantes com vulguis. */
  preguntes: [
    { p: "Com es diu l’amagatall que cal trobar en geocaching?", o: ["Cache","Geòfon","Waypoint","Tracker"], c: 0 },
    { p: "En quin any va néixer el geocaching?", o: ["1995","2000","2008","2012"], c: 1 },
    { p: "Què vol dir FTF?", o: ["Fast Tracking Finder","Fin To Find","First To Find","Find The Forest"], c: 2 },
    { p: "Què vol dir DNF en un registre?", o: ["Did Not Find","Done Nice Find","Dos Ni Fum","Do Not Fear"], c: 0 },
    { p: "Què és un Travel Bug?", o: ["Un insecte GPS","Un objecte que viatja de cache en cache","Un error de l’app","Un tipus de brúixola"], c: 1 },
    { p: "Què significa CITO?", o: ["Cache In The Open","Come In, Take Out","Cache In Trash Out","City Tour Orienteering"], c: 2 },
    { p: "Com s’anomena una persona que no coneix el geocaching?", o: ["Muggle","Rookie","Hobbit","Turista"], c: 0 },
    { p: "Quin tipus de cache cal resoldre un enigma per saber on és?", o: ["Tradicional","Mystery o Puzzle","Event","Virtual"], c: 1 },
    { p: "Què s’ha de fer sempre en trobar un cache?", o: ["Endur-se’l","Signar el logbook","Canviar-lo de lloc","Fer-li una foto al cel"], c: 1 },
    { p: "Quina és la mida de cache més petita?", o: ["Micro","Small","Nano","Regular"], c: 2 },
    { p: "Com s’anomena la trobada de geocachers en un lloc i hora concrets?", o: ["Event","Multi","Letterbox","Earthcache"], c: 0 },
    { p: "Si t’emportes un objecte d’un cache, què hi has de deixar?", o: ["Res","Una nota","Un altre d’igual o més valor","Una moneda"], c: 2 }
  ],

  /* PROVA 3 · Memòria: 6 emojis (es dupliquen per fer les parelles). */
  memoria: ["🎄","📦","🎅","🧭","🎁","⭐"],

  /* PROVA 4 · Paraules desordenades. Format: ["PARAULA", "pista"].
     Una sola paraula, sense espais (els accents els pots posar igualment). */
  paraulesPerPartida: 5,
  segonsPerParaula: 25,
  paraules: [
    ["GEOCACHE","L’amagatall que busquem"],
    ["LOGBOOK","On signem quan el trobem"],
    ["COORDENADES","Et diuen on és el tresor"],
    ["TURRÓ","Dolç de Nadal"],
    ["PESSEBRE","Es munta a casa pel desembre"],
    ["CAGANER","El nostre personatge més escatològic"],
    ["BRÚIXOLA","T’indica el nord"],
    ["ESCUDELLA","Sopa de Nadal amb galets"],
    ["NADAL","Quin dia és el 25 de desembre?"],
    ["MUGGLE","Qui no sap què fem amb el GPS"]
  ]
};
