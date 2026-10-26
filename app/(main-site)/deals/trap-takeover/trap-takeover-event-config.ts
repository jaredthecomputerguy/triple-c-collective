import {
  createTrapTakeoverEvent,
  type TrapTakeoverInput,
} from "@/app/(main-site)/deals/trap-takeover/create-trap-takeover-event";

const deals: IndividualDeal[] = [];

const eventData: TrapTakeoverInput = {
  year: 2026,
  month: 10,
  day: 30,
  featuredBrands: [
    "Dompen",
    "Koa Cannabis Co.",
    "High 90's",
    "Jeff's Sessions",
    "Big Boy Dro",
    "Together Canna Supply",
    "Back Country Organics",
    "Park Jams",
  ],
  flags: {
    // True flags
    featuredBrands: true,
    flyer: true,
    giftBags: true,

    // Other flags
    freeFood: false,
    specialArtPromo: false,
    specialPromo: false,
    video: false,
    individualDeals: false,
  },
  deals,
  numberOfGiftBags: 100,
};

export const event = createTrapTakeoverEvent(eventData);
