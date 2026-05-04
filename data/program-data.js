const programData = [
  {
    title: "Pre venčanja (27 / 29 / 30.)",
    open: false,
    events: [
      { dateLabel: "27. maj — Prijava venčanja" },
      { time: "08:00", title: "Matična služba", teams: [
        { badge: "kum", text: "Predaja uplatnice i potpisivanje svih zvaničnih dokumenata za venčanje" }
      ]},
      { dateLabel: "29. maj — Slikanje Beograd" },
      { time: "15:00", title: "Fotografisanje u stanu — Omladinskih brigada 166", teams: [
        { badge: "photo", text: "Fotografisanje u stanu" }
      ]},
      { time: "16:00", title: "Fotografisanje u Topčiderskom parku", teams: [
        { badge: "photo", text: "Fotografisanje u trajanju od sat i po" }
      ]},
      { dateLabel: "30. maj — Tobolac" },
      { time: "14:00", title: "Priprema za sutra", teams: [
        { badge: "kum", text: "Organizovati dekoraciju sale" },
        { badge: "kum", text: "Odneti cveće i posude u salu" },
        { badge: "kum", text: "Postavljanje šatora u dvorište" }
      ]}
    ]
  },
  {
    title: "Dan svadbe — 31. maj",
    open: true,
    events: [
      { time: "13:30", title: "Crkveno venčanje u Manastiru Veluće", teams: [
        { badge: "photo",   text: "Fotografisanje i snimanje ceremonije" },
        { badge: "kum",     text: "Poneti burme, 4 sveće, platno i novac" }
      ]},
      { time: "15:00", title: "Dolazak gostiju u svadbenu salu", teams: [
        { badge: "band",    text: "Puštanje ambijentalne muzike" },
        { badge: "waiters", text: "Iznošenje predjela i točanje pića" },
        { badge: "photo",   text: "Fotografisanje gostiju pri dolasku" },
        { badge: "kum",     text: "Kićenje svatova i raspoređivanje" }
      ]},
      { time: "16:00", title: "Priprema i ulazak mladenaca", groups: [
        { subtime: "16:00", teams: [
          { badge: "band", text: "Harmonika počinje da svira instrumentale" }
        ]},
        { subtime: "16:20", teams: [
          { badge: "band",  text: "Najava mladenaca i izvođenje ulazne pesme" },
          { badge: "photo", text: "Snimanje ulaska" },
          { badge: "kum",   text: "Rasveta — reflektor na ulaz mladenaca" }
        ]}
      ]},
      { time: "17:00", title: "Građansko venčanje", teams: [
        { badge: "band",    text: "Kratka pauza i obrok" },
        { badge: "waiters", text: "Serviranje glavnog jela" },
        { badge: "photo",   text: "Snimanje ceremonije" }
      ]},
      { time: "17:20", title: "Prvi ples", teams: [
        { badge: "band",    text: "Najava plesa i izvođenje pesme" },
        { badge: "effects", text: "Puštanje niske magle i vatrometa" },
        { badge: "photo",   text: "Snimanje prvog plesa" },
        { badge: "waiters", text: "Prijem i skladištenje torte" }
      ]},
      { time: "18:45", title: "Kolo", teams: [
        { badge: "band",  text: "Izvođenje kola" },
        { badge: "photo", text: "Snimanje kola" }
      ]},
      { time: "19:00", title: "Pauza i pečenje", teams: [
        { badge: "band",    text: "Pauza od 15 minuta" },
        { badge: "waiters", text: "Iznošenje pečenja — prvo bendu, zatim gostima" },
        { badge: "photo",   text: "Dopunsko fotografisanje sa mladencima" }
      ]},
      { time: "21:00", title: "Torta", teams: [
        { badge: "band",    text: "Pauza od 10 minuta, preuzeta muzika" },
        { badge: "waiters", text: "Iznošenje i sečenje torte" },
        { badge: "effects", text: "1. Vatromet uz tortu, 2. Šampanjac toranj i baloni" },
        { badge: "photo",   text: "Snimanje sečenja torte" }
      ]},
      { time: "23:00", title: "Kraj proslave", end: true, teams: [
        { badge: "kum", text: "Plaćanje (restorana, muzike, fotografa)" }
      ]}
    ]
  }
];
