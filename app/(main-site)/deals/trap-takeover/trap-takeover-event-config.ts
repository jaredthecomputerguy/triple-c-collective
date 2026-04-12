import {
  createTrapTakeoverEvent,
  type TrapTakeoverInput
} from "@/app/(main-site)/deals/trap-takeover/create-trap-takeover-event";

const eventData: TrapTakeoverInput = {
  year: 2026,
  month: 4,
  day: 17,
  featuredBrands: [
    "Midsfactory",
    "High 90's",
    "Hashtag",
    "Together Canna Supply",
    "Chameleon Craft",
    "Park Jams",
    "Big Boy Dro",
    "Dompen",
    "Koa Cannabis Co.",
    "Sweetleaf Collective"
  ],
  flags: {
    featuredBrands: true,
    flyer: true
  }
};

export const event = createTrapTakeoverEvent(eventData);
