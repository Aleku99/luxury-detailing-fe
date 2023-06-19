export interface Package {
  title: string;
  services: { description: string; operations?: string[] }[];
  price: string;
}

export const services: Package[] = [
  {
    title: "Detailing Pachet clasic interior",
    services: [
      {
        description: "Curatarea in detaliu a tuturor elementelor din interior:",
        operations: [
          "plafon",
          "stalpi",
          "centuri de siguranta",
          "bord",
          "fete de usi",
          "scaune",
          "bancheta",
          "covorase",
          "mocheta",
        ],
      },
      {
        description: "Elemente din piele:",
        operations: ["tratament cu balsam"],
      },
      {
        description: "Elemente din plastic:",
        operations: ["tratament cu efect antistatic"],
      },
      {
        description: "Ozonizarea instalatiei de climatizare",
      },
    ],
    price: "700-1000 RON",
  },
  {
    title: "Pachet premium interior",
    services: [
      {
        description: "Curatare in detaliu a tuturor elementelor din interior:",
        operations: [
          "plafon",
          "stalpi",
          "bord",
          "centuri de siguranta",
          "banchete",
          "fete de usi",
          "covorase",
          "mocheta",
        ],
      },
      {
        description: "Elemente din piele:",
        operations: ["tratament cu balsam, antibacterian si protectie UV"],
      },
      {
        description: "Elemente din plastic:",
        operations: ["tratament antistatic, antibacterian si protectie UV"],
      },
      {
        description:
          "Ozonizarea instalatiei de climatizare, curatare cu spuma a orificiilor de ventilatie",
      },
    ],
    price: "900-1200 RON",
  },
  {
    title: "Pachet Luxury interior",
    services: [
      {
        description: "Curatare in detaliu a tuturor elementelor din interior:",
        operations: [
          "plafon",
          "stalpi",
          "bord",
          "centuri de siguranta",
          "scaune",
          "bancheta",
          "fete de usi",
          "covorase",
          "mocheta",
        ],
      },
      {
        description: "Elemente textile:",
        operations: ["tratament antibacterian si efect hidrofob"],
      },
      {
        description: "Elemente din piele:",
        operations: [
          "tratament cu balsam, antibacterian, protectie UV, transfer culoare si ceramic",
        ],
      },
      {
        description: "Elemente di plastic:",
        operations: [
          "tratament antistatic, antibacterian si protectie UV ci ceramic",
        ],
      },
      {
        description:
          "Ozonizarea instalatiei de climatizare, curatare cu spuma a orificiilor de ventilatie",
      },
    ],
    price: "1000-1500 RON",
  },
  {
    title: "Detailing exterior",
    services: [
      {
        description: "Pachet clasic exterior",
        operations: [
          "spalare detaliata",
          "eliminare bitum",
          "decontaminare cu argila",
          "degresare",
          "corectie lac",
          "polish",
          "curatarea jantelor si anvelopelor",
          "protectie ceramica (pana la 6 luni)",
        ],
      },
    ],
    price: "800-1300 RON",
  },
  {
    title: "Detailing exterior",
    services: [
      {
        description: "Pachet premium exterior",
        operations: [
          "spalare detaliata",
          "eliminare bitum",
          "decontaminare cu argila",
          "degresare",
          "corectie lac",
          "polish",
          "curatarea jantelor si anvelopelor",
          "tratament hidrofob plastic exterior",
          "tratament ceramic geamuri",
          "protectie ceramica GTECHNIQ Cristal Serum Light",
        ],
      },
    ],
    price: "1600-2500 RON",
  },
];
