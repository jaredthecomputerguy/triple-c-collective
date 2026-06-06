import {
  createTrapTakeoverEvent,
  type TrapTakeoverInput,
} from "@/app/(main-site)/deals/trap-takeover/create-trap-takeover-event";

const eventData: TrapTakeoverInput = {
  year: 2026,
  month: 6,
  day: 12,
  featuredBrands: [
    "High 90's",
    "Hashtag",
    "Dompen",
    "Park Jams",
    "Together Canna Supply",
    "Box Lunch",
  ],
  flags: {
    /* TRUE FLAGS */
    featuredBrands: true,
    flyer: true,
    /* FALSE FLAGS */
    giftBags: false,
    freeFood: false,
    specialArtPromo: false,
    specialPromo: false,
    video: false,
    individualDeals: false,
  },
};

export const event = createTrapTakeoverEvent(eventData);
