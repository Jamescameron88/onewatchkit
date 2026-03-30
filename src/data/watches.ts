import { WatchKit } from "@/types/watch";

export const watches: WatchKit[] = [
  {
    id: "expedition-scout",
    name: "Timex Expedition Scout",
    slug: "expedition-scout",
    descriptor: "Rugged everyday field watch",
    bestFor: "Everyday wear, outdoors, all-around versatility",
    intro:
      "A practical field watch that becomes a complete one-watch system with the right three-strap rotation.",
    watchImage: "/images/watches/expedition.jpg",
    watchBuyUrl: "https://amzn.to/4bEURZh",
    packTitle: "All-Around Pack",
    packSummary:
      "One rugged nylon, one dark leather, and one black rubber strap to cover daily wear, elevated casual use, and active days.",
    kitBuyUrl: "https://amzn.to/4bEURZh",
    straps: [
      {
        role: "Daily",
        name: "Black / Gray Nylon",
        material: "Quick-release nylon",
        description:
          "Breathable, rugged, and true to the field-watch character of the Expedition.",
        image: "/images/straps/expedition-nylon.jpg",
        buyUrl: "https://amzn.to/3Nyb2P3",     },
      {
        role: "Elevated",
        name: "Dark Chestnut Leather",
        material: "Quick-release leather",
        description:
          "Adds warmth and refinement without making the watch feel overdressed.",
        image: "/images/straps/expedition-leather.jpg",
        buyUrl: "https://amzn.to/4ddkBxb",
      },
      {
        role: "Active",
        name: "Black FKM Rubber",
        material: "Quick-release rubber",
        description:
          "Built for sweat, heat, travel, yard work, and active use.",
        image: "/images/straps/expedition-rubber.jpg",
        buyUrl: "https://amzn.to/3Q83BP9",      
    },
    ],
  },
  {
    id: "casio-duro",
    name: "Casio Duro",
    slug: "casio-duro",
    descriptor: "Sport and water-ready diver",
    bestFor: "Sport, water, travel, stronger wrist presence",
    intro:
      "A capable diver-style base watch that works well as a sport-focused one-watch system.",
    watchImage: "/images/watches/duro.jpg",
    watchBuyUrl: "https://amzn.to/4s0yeDq",
    packTitle: "All-Around Pack",
    packSummary:
      "A clean strap trio that keeps the Duro sporty while giving it more versatility away from the water.",
    kitBuyUrl: "https://amzn.to/4s0yeDq",
    straps: [
      {
        role: "Daily",
        name: "Stainless Steel Bracelet",
        material: "Stainless steel",
        description:
          "The most versatile look of all. You will find it worn with wetsuits and tuxedos alike.",
        image: "/images/straps/duro-bracelet.jpg",
        buyUrl: "https://amzn.to/4s38ian",
      },
      {
        role: "Elevated",
        name: "Dark Brown Leather",
        material: "Quick-release leather",
        description:
          "Softens the diver aesthetic and makes it more wearable off the water.",
        image: "/images/straps/duro-leather.jpg",
        buyUrl: "https://amzn.to/4sQNK60",
      },
      {
        role: "Active",
        name: "Black Rubber",
        material: "Quick-release rubber",
        description:
          "The most natural active strap for a capable diver-style watch.",
        image: "/images/straps/duro-rubber.jpg",
        buyUrl: "https://amzn.to/4s0ul1e",
      },
    ],
  },
  {
    id: "timex-weekender",
    name: "Timex Weekender",
    slug: "timex-weekender",
    descriptor: "Clean casual everyday watch",
    bestFor: "Casual wear, simple style, easy versatility",
    intro:
      "A lighter, cleaner base watch that becomes a complete casual system with the right strap choices.",
    watchImage: "/images/watches/weekender.jpg",
    watchBuyUrl: "https://amzn.to/4dbtNlE",
    packTitle: "All-Around Pack",
    packSummary:
      "A balanced three-strap setup that keeps the Weekender simple, wearable, and more adaptable.",
    kitBuyUrl: "https://amzn.to/4dbtNlE",
    straps: [
      {
        role: "Daily",
        name: "Olive Nylon",
        material: "Quick-release nylon",
        description:
          "A casual everyday strap that keeps the Weekender easy and approachable.",
        image: "/images/straps/weekender-nylon.jpg",
        buyUrl: "https://amzn.to/3PQqoim",
      },
      {
        role: "Elevated",
        name: "Medium Brown Leather",
        material: "Quick-release leather",
        description:
          "The easiest way to sharpen up the Weekender for nicer casual settings.",
        image: "/images/straps/weekender-leather.jpg",
        buyUrl: "https://amzn.to/4s64MMy",
      },
      {
        role: "Active",
        name: "Black Rubber",
        material: "Quick-release rubber",
        description:
          "A more practical option for hot days, travel, and general hard use.",
        image: "/images/straps/weekender-rubber.jpg",
        buyUrl: "https://amzn.to/4bOvhjq",
      },
    ],
  },
];
