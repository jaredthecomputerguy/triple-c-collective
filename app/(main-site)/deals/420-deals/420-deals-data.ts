export type Deal = {
  brand: string;
  description: string;
  limit?: number;
};

export type ReducedPriceDeal = {
  description: string;
  limit?: number;
};

export const fourTwentyDealsData: Record<
  "flowerAndPrerolls" | "edibles" | "cartridges" | "concentrates" | "other",
  { bogoDeals: Deal[]; reducedPriceDeals: ReducedPriceDeal[] }
> = {
  flowerAndPrerolls: {
    bogoDeals: [
      {
        brand: "Big Boy Dro, Flawless, High Grade, & Seven Leaves",
        description: "Get 1 gram of flower for 25¢",
        limit: 8
      },
      {
        brand: "Seven Leaves",
        description: "Buy any flower, get a free eighth (3.5g)",
        limit: 1
      },
      {
        brand: "Eighty East",
        description: "Buy any flower, get a free eighth (3.5g)",
        limit: 1
      },
      {
        brand: "High Grade & Flawless",
        description: "Buy any flower, get a free eighth (3.5g)",
        limit: 1
      },
      {
        brand: "Clarkies",
        description: "Buy any flower, get a free eighth (3.5g)",
        limit: 1
      },
      {
        brand: "Glasshouse Farms",
        description: "Buy any flower, get a free eighth (3.5g)",
        limit: 1
      },
      {
        brand: "Papa's Herb",
        description: "Buy any infused preroll, get a second one free",
        limit: 2
      },
      {
        brand: "Koa Cannabis Co.",
        description: "Buy any infused preroll 10pk, get a second one free",
        limit: 2
      },
      {
        brand: "Midsfactory",
        description:
          "Buy an infused preroll, get your choice of any other Midsfactory product (cartridge, concetrate, infused preroll) for free",
        limit: 2
      }
    ],
    reducedPriceDeals: [
      { description: "Hashtag Infused Flower 3.5g - $25" },
      { description: "Snicklefritz Flower 28g - $55" },
      { description: "Phat Panda Flower 28g - $55" },
      { description: "Phat Panda Flower 3.5g - $24" },
      { description: "Tyson Flower 3.5g - $35" },
      { description: "High Supply Flower 28g - $55" },
      { description: "High Supply Flower 14g - $40" },
      { description: "Coffee Supply Flower 3.5g - $20" },
      { description: "Seed Junky Flower 14g - $40" },
      { description: "Lumpy's Flower 7g - $30" },
      { description: "Lumpy's Flower 14g - $40" },
      { description: "Lumpy's Flower 3.5g - $22" },
      { description: "Big Boy Dro Tres Altos Flower 3.5g - $20" },
      { description: "Akwaaba Cakemera Flower 3.5g - $5" },
      { description: "Floracal Flower 3.5g - $19" },
      { description: "Floracal Flower 7g - $25" },
      { description: "Papa's Herb Flower 3.5g - $11" },
      { description: "Seven Leaves 1g Preroll - $2", limit: 4 },
      { description: "St. Ides 1g Infused Preroll - $20" },
      { description: "Garden Society CBD Preroll Pack 5pk - $20" }
    ]
  },

  edibles: {
    bogoDeals: [
      {
        brand: "Kushy Punch",
        description:
          "Buy any pack of gummies, get a free pack of gummies or a cartridge",
        limit: 2
      },
      {
        brand: "PLUS",
        description: "Buy any pack of gummies, get a free 10pk or 2pk pack",
        limit: 2
      },

      {
        brand: "Emerald Sky",
        description:
          "Buy any pack of gummies or peanut butter cups, get a free pack",
        limit: 2
      },
      {
        brand: "Pabst Blue Ribbon",
        description: "Buy any seltzer drinks, get a free seltzer",
        limit: 1
      },
      {
        brand: "All Drinks",
        description:
          "Buy any drinks, get a free Alpine Splash Soda from Not Your Father's",
        limit: 1
      },
      {
        brand: "Drops",
        description: "Buy any pack of Drops, get a free 2pk of gummies",
        limit: 1
      }
    ],
    reducedPriceDeals: [
      { description: "St. Ides Midnight Berries Seltzer - $3" },
      { description: "ALL Big Pete's Marshmallow Treats - $10" },
      { description: "Garden Society Gummies - $10" },
      { description: "Kikoko Tea Bags - $28" },
      { description: "Gelato Balm - $10" }
    ]
  },

  cartridges: {
    bogoDeals: [
      {
        brand: "Midsfactory",
        description:
          "Buy a cartridge, get your choice of any other Midsfactory product (cartridge, concetrate, infused preroll) for free",
        limit: 2
      },
      {
        brand: "Stiiizy",
        description: "Buy any cartridge, get a free 1g cartridge",
        limit: 2
      },
      {
        brand: "Dompen",
        description:
          "Buy any cartridge or disposable, get your choice of another cartridge or disposable for free testt",
        limit: 2
      },
      {
        brand: "Kushy Punch",
        description:
          "Buy any cartridge, get a free pack of gummies or a cartridge",
        limit: 2
      }
    ],
    reducedPriceDeals: [{ description: "ABX Sauce Cartridge - $30" }]
  },

  concentrates: {
    bogoDeals: [
      {
        brand: "Midsfactory",
        description:
          "Buy a concentrate, get your choice of any other Midsfactory product (cartridge, concetrate, infused preroll) for free",
        limit: 2
      },
      {
        brand: "Green River Extracts",
        description: "Buy a badder, get a live rosin badder for free",
        limit: 1
      }
    ],
    reducedPriceDeals: [
      { description: "Rickett Pocket Dab Rig - $21" },
      { description: "Midsfactory Londonchello Sauce - $21" },
      { description: "Midsfactory Sherbanger Sauce - $15" },
      { description: "Midsfactory Grapefruit Fritter Sauce - $15" },
      { description: "Jeff's Sessions Golden Papaya Sugar Diamonds - $10" }
    ]
  },

  other: {
    bogoDeals: [
      {
        brand: "First Four People In Line",
        description: "Merch/Goodie for the first 4 people in line"
      },
      {
        brand: "Tablets",
        description: "Buy any tablets, get two packs of LEVEL Protabs for free"
      }
    ],
    reducedPriceDeals: [
      {
        description: "Emerald Bay Extracts Sundae Driver RSO Syringe - $10"
      },
      {
        description: "Emerald Bay Extracts Mango Mintality RSO Syringe - $10"
      },

      {
        description: "Emerald Bay Extracts Sour Diesel RSO Syringe - $10"
      }
    ]
  }
};
