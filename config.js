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
    { p: "Quina és la distància mínima exacta de saturació entre dues etapes físiques de diferents catxés?", o: ["160 metres exactes","0,1 milles, que equivalen a 161 metres (528 peus)","150 metres en entorn urbà i 200 metres en entorn natural","No hi ha distància mínima si són de propietaris diferents"], c: 1 },
    { p: "En quin dels següents casos NO s'aplica la regla de distància mínima dels 161 metres?", o: ["Entre un catxé Tradicional i l'etapa física d'un Multi-catxé","Entre l'etapa final d'un catxé Misteri i un altre catxé Misteri","Entre les coordenades publicades (falses) d'un catxé Misteri i un catxé Tradicional","Entre un catxé Letterbox Hybrid i un catxé Tradicional"], c: 2 },
    { p: "Quina d'aquestes afirmacions sobre enterrar un catxé és certa segons les directrius oficials?", o: ["Està permès si s'enterra a menys de 10 cm de profunditat","Està estrictament prohibit en tots els casos, sense excepcions","Només es permet en platges de sorra si no es fan servir eines per excavar","Es permet de manera excepcional amb el permís explícit i per escrit del propietari del terreny"], c: 3 },
    { p: "Si trobes un catxé que té l'estat de "Desactivat temporalment" (Temporarily Disabled) a la web, pots registrar-lo com a "Trobat" (Found it)?", o: ["No, el sistema bloqueja l'opció de registrar troballes fins que el propietari el reactivi","Sí, si el contenidor és al seu lloc i signes el logbook, el registre és vàlid","Sí, però només compta per a les estadístiques si el propietari aprova el registre manualment.","Només si ets usuari Premium"], c: 1 },
    { p: "Què diferencia obligatòriament un Letterbox Hybrid d'un catxé Tradicional?", o: ["Sempre s'ha de resoldre un enigma previ per obtenir les coordenades","Conté un segell de tinta que s'ha de quedar sempre dins del contenidor","No té llibre de registre físic; només s'estampa el segell a la llibreta personal del jugador.","Només es poden amagar en entorns rurals o forestals"], c: 1 },
    { p: "Quin d'aquests tipus de catxés NO té un contenidor físic ni un llibre de registre?", o: ["Wherigo","EarthCache","Project A.P.E. Cache","Letterbox Hybrid"], c: 1 },
    { p: "Quina és la diferència principal entre un catxé Virtual i un EarthCache?", o: ["El Virtual el revisa un revisor comunitari normal i l'EarthCache un geòleg voluntari","L'EarthCache té contenidor físic i el Virtual no","El Virtual ja no es pot crear mai més, però l'EarthCache sí","Els Virtuals només existeixen als Estats Units"], c: 0 },
    { p: "Què és un Reverse Wherigo", o: ["Un catxé on has de caminar d'esquena els últims 50 metres","Un cartutx que només et dona la distància fins al catxé, però no la direcció","Un catxé que comença a les coordenades finals i has de tornar enrere per trobar el codi.","Un catxé que només es pot jugar de nit"], c: 1 },
    { p: "Si trobes un Travel Bug dins d'un catxé i decideixes no emportar-te'l, però vols registrar que l'has vist per sumar la seva icona al teu perfil, quina acció has de fer?", o: ["Grab it (Agafar-lo)","Discover it (Descobrir-lo)","Retrieve it (Recuperar-lo del catxé)","rite note (Escriure una nota)"], c: 1 },
    { p: "Quina diferència hi ha entre Retrieve it i Grab it quan gestiones un rastrejable?", o: ["Són exactament el mateix, només canvia el nom segons el país","Retrieve s'usa quan el treus del catxé on està registrat; Grab s'usa quan el prens d'un altre jugador o d'un catxé on no figurava oficialment","Grab és per a Geocoins i Retrieve és per a Travel Bugs","Retrieve suma quilòmetres i Grab els posa a zero"], c: 1 },
    { p: "Pots quedar-te en propietat una Geocoin que has trobat dins d'un catxé si deixes un objecte d'intercanvi de molt més valor?", o: ["Sí, sempre que avisis el propietari","No, els rastrejables mai són objectes d'intercanvi i han de continuar viatjant","Sí, si porta més de sis mesos parat al mateix catxé","Només si és una edició sense activar"], c: 3 },
    { p: "Què indica exactament una puntuació de Terreny 5 (T5)?", o: ["Que has de caminar més de 15 quilòmetres per arribar-hi","Que el camí té un pendent superior al 45%","Que es necessita equipament especialitzat (com material d'escalada, busseig o una embarcació) per arribar al catxé","Que el catxé està situat a més de 2.000 metres d'altitud"], c: 1 }
    { p: " Quina combinació de Dificultat i Terreny és impossible que existeixi segons les normes de creació de catxés?", o: [" Dificultat 5 / Terreny 1","Dificultat 1 / Terreny 5","Dificultat 1 / Terreny 1 per a un catxé Misteri","Totes les combinacions anteriors són possibles"], c: 3 }
    { p: "Què passa si fas un registre de "Trobat" en un catxé però el teu nom no apareix al logbook físic (i no tens permís del propietari)?", o: ["El registre és vàlid si adjuntes una foto del contenidor a la mà","El propietari del catxé té el dret i el deure d'esborrar el teu registre","El sistema et resta automàticament 5 punts de penalització","Es converteix automàticament en un registre DNF (Did Not Find)"], c: 1 }
    { p: "Què significa la sigla CITO en el món del geocaching?", o: ["Cache In Trash Out (esdeveniments de neteja i recollida de residus a la natura)","Coordinates In The Open (catxés que no estan amagats, sinó a la vista)","Check In Time Out (catxés que s'han de trobar abans d'una hora límit)","cache Inspection Team Official (els revisors voluntaris de la plataforma)"], c: 1 }
    { p: "Quin esdeveniment tecnològic va permetre el naixement del geocaching el maig de l'any 2000?", o: ["El llançament del primer satèl·lit GPS comercial europeu","L'apagada de la "Disponibilitat Selectiva" (Selective Availability) del GPS per part del govern dels EUA","La invenció del primer telèfon mòbil amb pantalla tàctil i mapes integrats","L'obertura al públic de Google Earth"], c: 1 }
    { p: "Com s'anomenava originalment el joc durant les primeres setmanes de maig del 2000, abans de dir-se Geocaching?", o: ["GPS Hunt","Stash Hunt / Great American GPS Stash Hunt","Treasure Seekers","Navicaching"], c: 1 }
    { p: "Què és un catxé Project A.P.E.?", o: ["Un catxé amagat en zones habitades per primats","Una sèrie especial creada el 2001 per promocionar la pel·lícula El planeta dels simis","Un projecte per amagar catxés a l'Estació Espacial Internacional","Un tipus de catxé experimental que es destrueix un cop trobat"], c: 1 }
    { p: "Quin codi únic identifica qualsevol catxé a la base de dades de Geocaching.com?", o: ["Un codi alfanumèric que sempre comença per les lletres GC","Un codi numèric de 8 xifres seguit d'una lletra","Un codi que sempre comença per TB","Les inicials del país seguides de l'any de publicació"], c: 1 }
    { p: "Si un propietari vol arxivar el seu propi catxé, què passa un cop el marca com a "Arxivat" (Archived)?", o: ["Pot tornar-lo a desarxivar ell mateix des del seu perfil sempre que vulgui","El catxé desapareix permanentment del mapa i només un revisor comunitari pot desarxivar-lo en casos molt excepcionals","El catxé passa automàticament a ser propietat del primer jugador que el va trobar (FTF)","Es queda al mapa durant 6 mesos més perquè la gent el pugui continuar buscant"], c: 1 }
   ],


  /* PROVA 3 · Memòria: 6 emojis (es dupliquen per fer les parelles). */
  memoria: ["🗺️","📦","😃","🧭","🔍","🔦"],

  /* PROVA 4 · Paraules desordenades. Format: ["PARAULA", "pista"].
     Una sola paraula, sense espais (els accents els pots posar igualment). */
  paraulesPerPartida: 5,
  segonsPerParaula: 25,
  paraules: [
    ["GCHQ","Geocaching Headquarters"],
    ["GC2D4","El catxé més antic de Catalunya - Montserrat"],
    ["GC30","El catxé actiu més antic del món - Mingo"],
    ["GCGV0P","Original Stash Tribute Plaque"],
    ["GC43","Europe's First"],
    ["GC1BE91"," International Space Station"],
  ]
};
