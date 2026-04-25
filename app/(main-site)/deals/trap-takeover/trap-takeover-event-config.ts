import {
  createTrapTakeoverEvent,
  type TrapTakeoverInput,
} from "@/app/(main-site)/deals/trap-takeover/create-trap-takeover-event";

const eventData: TrapTakeoverInput = {
  year: 2026,
  month: 5,
  day: 1,
  featuredBrands: [
    "Hashtag",
    "Dompen",
    "Koa Cannabis Co.",
    "Park Jams",
    "Together Canna Supply",
    "Sweetleaf Collective",
  ],
  flags: {
    featuredBrands: true,
    flyer: true,
  },
};

export const event = createTrapTakeoverEvent(eventData);
