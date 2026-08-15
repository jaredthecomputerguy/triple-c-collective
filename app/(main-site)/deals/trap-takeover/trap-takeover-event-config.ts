import {
  createTrapTakeoverEvent,
  type TrapTakeoverInput,
} from "@/app/(main-site)/deals/trap-takeover/create-trap-takeover-event";

const deals: IndividualDeal[] = [];

const eventData: TrapTakeoverInput = {
  year: 2026,
  month: 8,
  day: 21,
  featuredBrands: [
    "High 90's",
    "Hypnotic",
    "Park Jams",
    "Box Lunch",
    "Big Boy Dro",
    "Together Canna Supply",
  ],
  flags: {
    featuredBrands: true,
    flyer: true,
    /* Other flags */
    giftBags: false,
    freeFood: false,
    specialArtPromo: false,
    specialPromo: false,
    video: false,
    individualDeals: false,
  },
  deals,
  numberOfGiftBags: 0,
};

export const event = createTrapTakeoverEvent(eventData);
