import {
  createTrapTakeoverEvent,
  type TrapTakeoverInput,
} from "@/app/(main-site)/deals/trap-takeover/create-trap-takeover-event";

const deals: IndividualDeal[] = [];

const eventData: TrapTakeoverInput = {
  year: 2026,
  month: 8,
  day: 28,
  featuredBrands: [
    "Jeff's Sessions",
    "Big Boy Dro",
    "Park Jams",
    "Together Canna Supply",
    "High 90's",
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
