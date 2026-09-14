export const CONTENT = {
  es: {
    name: "Joan Domínguez Fernández",
    dev: {
      kicker: "Portfolio — Desarrollo",
      headline: "Desarrollo Full-Stack",
      sub: "React & Python, de la interfaz a la base de datos.",
      projectsLabel: "Proyectos",
      projects: [
        { tag: "01", title: "RecetaIA", desc: "App que sugiere recetas a partir de 4 ingredientes que ya tienes en casa, usando la API de ChatGPT.", stack: ["React", "Python", "OpenAI API"], linkLabel: "Ver proyecto", link: "#", imgSrc: "/assets/recetaia.png", imgAlt: "Captura de RecetaIA" },
        { tag: "02", title: "Can Cargol", desc: "Website creado para hostear un b'n'b y que las reservas no pasen por Booking o Air b'n'b. A día de hoy más de 200 clientes al año nos contactan a través de ella.", stack: ["React", "Python", "CSS"], linkLabel: "Ver proyecto", link: "#", imgSrc: "/assets/can cargol.png", imgAlt: "Captura de Can Cargol" },
        { tag: "03", title: "Centraleta IA — Grup Eina (PoC)", desc: "Prueba de concepto de un agente de voz con IA para atención telefónica de talleres mecánicos. El sistema identifica al taller que llama, consulta y gestiona tickets de soporte técnico, y guía diagnósticos avanzados o consultas de información técnica de vehículos mediante un flujo conversacional completo en catalán.", stack: [ "Telnyx", "Flask", "OpenAI"], linkLabel: "Ver proyecto", link: "#", imgSrc: "/assets/callcenter.png", imgAlt: "Captura de Centraleta IA" },
        { tag: "03", title: "Arreu Campers", desc: "Website encarada a mostrar los proyectos de camperización que hace Norberto", stack: ["React", "Python", "CSS", ""], linkLabel: "Ver proyecto", link: "#", imgSrc: "/assets/Vapi.png", imgAlt: "Captura de Centraleta IA" }
      ],
      skillsLabel: "Habilidades",
      skills: ["Javascript", "React", "Python", "Flask", "REST APIs", "SQL", "Git", "CSS"]
    },
    hack: {
      kicker: "Portfolio — Ciberseguridad/Pentesting",
      headline: "Girando_la_tortilla",
      sub: "Aprendiz de pentesting y CTFs. Rompo sistemas para aprender a protegerlos.",
      toolsLabel: "Herramientas propias",
      tools: [
        { name: "Portscanner.py", desc: "Escaneador de puertos construido en Python" },
        { name: "arp_spoofer.py", desc: "Script diseñado para enviar mensajes falsos dentro de una red local utilizando el protocolo ARP" },
        { name: "nombre-herramienta-3", desc: "Breve descripción de qué hace — reemplaza con tu herramienta." }
      ],
      writeupsLabel: "Writeups",
      writeups: [
        { name: "Título del writeup #1", desc: "Plataforma (HTB/THM) — resumen en una línea." },
        { name: "Título del writeup #2", desc: "Plataforma (HTB/THM) — resumen en una línea." },
        { name: "Título del writeup #3", desc: "Plataforma (HTB/THM) — resumen en una línea." }
      ],
      ctfsLabel: "CTFs conseguidos",
      ctfs: [
        { name: "Nombre del CTF #1", result: "resuelto" },
        { name: "Nombre del CTF #2", result: "resuelto" },
        { name: "Nombre del CTF #3", result: "resuelto" }
      ],
      tryhackmeLabel: "TryHackMe",
      tryhackme: {
        username: "Cnidari-THM",
        rank: "Adept — pendiente",
        profileUrl: "https://tryhackme.com/p/Cnidari",
        rooms: [
          { name: "Pickle Rick", type: "webapp", status: "completada" },
          { name: "Letter", type: "OSINT", status: "completada" },
          { name: "Watter bottle", type: "OSINT", status: "completada" },
          { name: "Overhead at breakfast", type: "OSINT", status: "completada" },
          { name: "The Game", type: "Game hacking", status: "completada" },
          { name: "Carnage", type: "Blue team", status: "completada" }
        ]
      },
      skillsLabel: "Skills",
      skills: ["Web pentesting", "Whireshark", "Linux", "Nmap", "Burp Suite", "Python scripting", "CTFs (THM)"]
    },
    email: "E-mail"
  },
  fr: {
    name: "Joan Domínguez Fernández",
    dev: {
      kicker: "Portfolio — Développement",
      headline: "Full-Stack Développement",
      sub: "React & Python, de l'interface à la base de données.",
      projectsLabel: "Projets",
      projects: [
        { tag: "01", title: "RecetaIA", desc: "Appli qui suggère des recettes à partir de 4 ingrédients que vous avez déjà chez vous, via l'API de ChatGPT.", stack: ["React", "Python", "OpenAI API"], linkLabel: "Voir le projet", link: "#", imgSrc: "/assets/recetaia.png", imgAlt: "Capture de RecetaIA" },
        { tag: "02", title: "Can Cargol", desc: "Site web créé pour héberger un B'n'b et que les réservations ne passent pas par Booking ou Air B'n'b. Aujourd'hui, plus de 200 clients nous contactent chaque année par son intermédiaire.", stack: ["React", "Python", "CSS"], linkLabel: "Voir le projet", link: "#", imgSrc: "/assets/can cargol.png", imgAlt: "Capture de Can Cargol" },
        { tag: "03", title: "Centraleta IA — Grup Eina (PoC)", desc: "Preuve de concept d'un agent vocal IA pour l'accueil téléphonique de garages automobiles. Le système identifie le garage appelant, consulte et gère les tickets de support technique, et guide les diagnostics avancés ou les consultations d'informations techniques de véhicules via un flux conversationnel complet en catalan.", stack: ["Vapi", "Telnyx", "Flask", "Deepgram Nova-3", "Azure TTS", "GPT-4o"], linkLabel: "Voir le projet", link: "#", imgSrc: "/assets/callcenter.png", imgAlt: "Capture de Centraleta IA" }
      ],
      skillsLabel: "Compétences",
      skills: ["React", "Python", "Flask", "REST APIs", "SQL", "Git", "CSS"]
    },
    hack: {
      kicker: "Portfolio — Mode Sécurité",
      headline: "Renverser la vapeur",
      sub: "Apprenti en pentesting et CTF. Je casse des systèmes pour apprendre à les protéger.",
      toolsLabel: "Outils personnels",
      tools: [
        { name: "Portscanner.py", desc: "Analyseur de ports construit en Python." },
        { name: "ARP_Spoofer.py", desc: "Script conçu pour envoyer de faux messages sur un réseau local en utilisant le protocole ARP" },
        { name: "nom-outil-3", desc: "Brève description — à remplacer par ton outil." }
      ],
      writeupsLabel: "Writeups",
      writeups: [
        { name: "Titre du writeup #1", desc: "Plateforme (HTB/THM) — résumé en une ligne." },
        { name: "Titre du writeup #2", desc: "Plateforme (HTB/THM) — résumé en une ligne." },
        { name: "Titre du writeup #3", desc: "Plateforme (HTB/THM) — résumé en une ligne." }
      ],
      ctfsLabel: "CTF réussis",
      ctfs: [
        { name: "Nom du CTF #1", result: "résolu" },
        { name: "Nom du CTF #2", result: "résolu" },
        { name: "Nom du CTF #3", result: "résolu" }
      ],
      tryhackmeLabel: "TryHackMe",
      tryhackme: {
        username: "Cnidari",
        rank: "Adepte / 1328 points ",
        profileUrl: "https://tryhackme.com/p/Cnidari",
        rooms: [
          { name: "Pickle Rick", type: "webapp", status: "completée" },
          { name: "Letter", type: "OSINT", status: "completée" },
          { name: "Watter bottle", type: "OSINT", status: "completée" },
          { name: "Overhead at breakfast", type: "OSINT", status: "completée" },
          { name: "The Game", type: "Game hacking", status: "completée" },
          { name: "Carnage", type: "Blue team", status: "completée" }
        ]
      },
      skillsLabel: "Compétences",
      skills: ["Web pentesting", "Whireshark", "Linux", "Nmap", "Burp Suite", "Python scripting", "CTFs (THM)"]
    },
    email: "Email"
  },
  ca: {
    name: "Joan Domínguez Fernández",
    dev: {
      kicker: "Portfolio — Edició Desenvolupament",
      headline: "Programació Full-Stack",
      sub: "React & Python, de la interfície a la base de dades.",
      projectsLabel: "Projectes",
      projects: [
        { tag: "01", title: "RecetaIA", desc: "App que suggereix receptes a partir de 4 ingredients que ja tens a casa, mitjançant l'API de ChatGPT.", stack: ["React", "Python", "OpenAI API"], linkLabel: "Veure projecte", link: "#", imgSrc: "/assets/recetaia.png", imgAlt: "Captura de RecetaIA" },
        { tag: "02", title: "Can Cargol", desc: "Website creat per hostejar un b'n'b i que les reserves no passin per Booking o Air b'n'b. A día d'avui més de 200 clients a l'any ens contacten a través de la web.", stack: ["React", "Python", "CSS"], linkLabel: "Veure projecte", link: "#", imgSrc: "/assets/can cargol.png", imgAlt: "Captura de Can Cargol" },
        { tag: "03", title: "Centraleta IA — Grup Eina (PoC)", desc: "Prova de concepte d'un agent de veu amb IA per a l'atenció telefònica de tallers mecànics. El sistema identifica el taller que truca, consulta i gestiona tiquets de suport tècnic, i guia diagnòstics avançats o consultes d'informació tècnica de vehicles mitjançant un flux conversacional complet en català.", stack: ["OpenAI Realtime", "Telnyx", "Flask" ], linkLabel: "Veure projecte", link: "#", imgSrc: "/assets/callcenter.png", imgAlt: "Captura de Centraleta IA" }
      ],
      skillsLabel: "Habilitats",
      skills: ["Javascript", "React", "Python", "Flask", "REST APIs", "SQL", "Git", "CSS"]
    },
    hack: {
      kicker: "Portfolio — Ciberseguretat/Pentesting",
      headline: "Tombant_la_truita",
      sub: "Aprenent de pentesting i CTFs. Trenco sistemes per aprendre a protegir-los.",
      toolsLabel: "Eines pròpies",
      tools: [
        { name: "Portscanner.py", desc: "Analisis de ports disponibles escrit en Python." },
        { name: "ARP_Spoofer.py", desc: "Script que envia missatges falsos a la xarxa local fent servir el protocol ARP." },
        { name: "nom-eina-3", desc: "Breu descripció — reemplaça amb la teva eina." }
      ],
      writeupsLabel: "Writeups",
      writeups: [
        { name: "Títol del writeup #1", desc: "Plataforma (HTB/THM) — resum en una línia." },
        { name: "Títol del writeup #2", desc: "Plataforma (HTB/THM) — resum en una línia." },
        { name: "Títol del writeup #3", desc: "Plataforma (HTB/THM) — resum en una línia." }
      ],
      ctfsLabel: "CTFs aconseguits",
      ctfs: [
        { name: "Nom del CTF #1", result: "resolt" },
        { name: "Nom del CTF #2", result: "resolt" },
        { name: "Nom del CTF #3", result: "resolt" }
      ],
      tryhackmeLabel: "TryHackMe",
      tryhackme: {
        username: "Cnidari",
        rank: "Adepte / 1328 punts",
        profileUrl: "https://tryhackme.com/p/Cnidari",
        rooms: [
          { name: "Pickle Rick", type: "webapp", status: "completada" },
          { name: "Letter", type: "OSINT", status: "completada" },
          { name: "Watter bottle", type: "OSINT", status: "completada" },
          { name: "Overhead at breakfast", type: "OSINT", status: "completada" },
          { name: "The Game", type: "Game hacking", status: "completada" },
          { name: "Carnage", type: "Blue team", status: "completada" }
        ]
        
      },
      skillsLabel: "Skills",
      skills: ["Web pentesting", "Whireshark", "Linux", "Nmap", "Burp Suite", "Python scripting", "CTFs (THM)"]
    },
    email: "Email"
  },
  en: {
    name: "Joan Domínguez Fernández",
    dev: {
      kicker: "Portfolio — Development Edition",
      headline: "Full-Stack Developing",
      sub: "React & Python, from the interface to the database.",
      projectsLabel: "Projects",
      projects: [
        { tag: "01", title: "RecetaIA", desc: "App that suggests recipes from 4 ingredients you already have at home, using the ChatGPT API.", stack: ["React", "Python", "OpenAI API"], linkLabel: "View project", link: "#", imgSrc: "/assets/recetaia.png", imgAlt: "RecetaIA screenshot" },
        { tag: "02", title: "Can Cargol", desc: "Website created for hosting a b'n'b and that reservations do not go through Booking or Air b'n'b. Today, more than 200 customers a year contact us through it.", stack: ["React", "Python", "CSS"], linkLabel: "View project", link: "#", imgSrc: "/assets/can cargol.png", imgAlt: "Can Cargol screenshot" },
        { tag: "03", title: "Centraleta IA — Grup Eina (PoC)", desc: "Proof of concept of an AI voice agent for handling phone support at car repair shops. The system identifies the calling workshop, queries and manages technical support tickets, and guides advanced diagnostics or vehicle technical information queries through a complete conversational flow in Catalan.", stack: ["Vapi", "Telnyx", "Flask", "Deepgram Nova-3", "Azure TTS", "GPT-4o"], linkLabel: "View project", link: "#", imgSrc: "/assets/callcenter.png", imgAlt: "Centraleta IA screenshot" }
      ],
      skillsLabel: "Skills",
      skills: ["React", "Python", "Flask", "REST APIs", "SQL", "Git", "CSS"]
    },
    hack: {
      kicker: "Portfolio — Cibersecurity/Pentesting",
      headline: "Flip_the_script",
      sub: "Pentesting & CTF learner. Breaking systems to learn how to protect them.",
      toolsLabel: "Tools I built",
      tools: [
        { name: "Portscanner.py", desc: "Port scanner built in Python." },
        { name: "ARP_Spoofer.py", desc: "Script designed to send fake messages within a local network using the ARP protocol" },
        { name: "tool-name-3", desc: "Short description of what it does — replace with your tool." }
      ],
      writeupsLabel: "Writeups",
      writeups: [
        { name: "Writeup title #1", desc: "Platform (HTB/THM) — one-line summary." },
        { name: "Writeup title #2", desc: "Platform (HTB/THM) — one-line summary." },
        { name: "Writeup title #3", desc: "Platform (HTB/THM) — one-line summary." }
      ],
      ctfsLabel: "CTFs solved",
      ctfs: [
        { name: "CTF name #1", result: "solved" },
        { name: "CTF name #2", result: "solved" },
        { name: "CTF name #3", result: "solved" }
      ],
      tryhackmeLabel: "TryHackMe",
      tryhackme: {
        username: "Cnidari",
        rank: "Adept / 1328 points",
        profileUrl: "https://tryhackme.com/p/Cnidari",
        rooms: [
          { name: "Pickle Rick", type: "webapp", status: "completed" },
          { name: "Letter", type: "OSINT", status: "completed" },
          { name: "Watter bottle", type: "OSINT", status: "completed" },
          { name: "Overhead at breakfast", type: "OSINT", status: "completed" },
          { name: "The Game", type: "Game hacking", status: "completed" },
          { name: "Carnage", type: "Blue team", status: "completed" }
        ]
        
      },
      skillsLabel: "Skills",
      skills: ["Web pentesting", "Whireshark", "Linux", "Nmap", "Burp Suite", "Python scripting", "CTFs (THM)"]
    },
    email: "E-mail"
  }
};