import { z } from "zod";
import { Temporal } from "@js-temporal/polyfill";

import { getFeaturedBrands } from "@/app/_components/trap-takeover/trap-takeover-brands";
import { getTrapTakeoverDateWithSuffix } from "@/lib/utils/server";

const TIME_ZONE = "America/Los_Angeles";

const eventDateSchema = z
  .object({
    year: z.number().min(1900).max(2100),
    month: z.number().min(1).max(12),
    day: z.number().min(1).max(31)
  })
  .refine(
    ({ year, month, day }) => {
      const FRIDAY = 5;

      try {
        const date = new Temporal.PlainDate(year, month, day);
        return date.dayOfWeek === FRIDAY;
      } catch {
        return false;
      }
    },
    { message: "Date must be a valid Friday" }
  );

const fileNameFormatter = new Intl.DateTimeFormat("en-US", {
  timeZone: TIME_ZONE,
  month: "2-digit",
  day: "2-digit",
  year: "2-digit"
});

const readableDateFormatter = new Intl.DateTimeFormat("en-US", {
  timeZone: TIME_ZONE,
  weekday: "short",
  month: "long",
  day: "numeric",
  year: "numeric"
});

type FeaturedBrandName = Exclude<
  Parameters<typeof getFeaturedBrands>[number],
  undefined
>;

export type TrapTakeoverInput = {
  year: number;
  month: number;
  day: number;
  featuredBrands?: FeaturedBrandName[];
  flags?: Partial<TrapTakeoverEventConfig["flags"]>;
};

const defaultFlags: TrapTakeoverEventConfig["flags"] = {
  featuredBrands: true,
  flyer: true,
  giftBags: false,
  freeFood: false,
  specialArtPromo: false,
  specialPromo: false,
  video: false,
  individualDeals: false
};

function createEventDate(year: number, month: number, day: number): Date {
  const parsedDate = eventDateSchema.parse({ year, month, day });

  const plainDate = new Temporal.PlainDate(
    parsedDate.year,
    parsedDate.month,
    parsedDate.day
  );

  return new Date(
    plainDate.toZonedDateTime({
      timeZone: TIME_ZONE,
      plainTime: new Temporal.PlainTime(12, 0)
    }).epochMilliseconds
  );
}

function formatDateForFile(
  date: Date,
  fileType: "png" | "pdf",
  year: number,
  month: number
): string {
  const filePrefix = fileNameFormatter.format(date).replaceAll("/", "");
  const paddedMonth = String(month).padStart(2, "0");

  return `/images/trap-takeover/${year}/${paddedMonth}/${filePrefix}-flyer.${fileType}`;
}

export function createTrapTakeoverEvent({
  year,
  month,
  day,
  featuredBrands,
  flags = {}
}: TrapTakeoverInput): TrapTakeoverEventConfig {
  const eventDate = createEventDate(year, month, day);
  const resolvedFeaturedBrands: FeaturedBrandName[] = featuredBrands ?? [];
  return {
    date: eventDate,
    dateString: readableDateFormatter.format(eventDate),
    dateWithSuffix: getTrapTakeoverDateWithSuffix(eventDate),
    flyer: {
      image: formatDateForFile(eventDate, "png", year, month),
      pdf: formatDateForFile(eventDate, "pdf", year, month)
    },
    featuredBrands: getFeaturedBrands(...resolvedFeaturedBrands),
    flags: {
      ...defaultFlags,
      ...flags
    }
  };
}
