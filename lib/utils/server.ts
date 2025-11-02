import { z, ZodError } from "zod";
import { Temporal } from "@js-temporal/polyfill";
import {
  Montserrat,
  Bebas_Neue,
  Open_Sans,
  VT323,
  Birthstone,
  DM_Serif_Display,
  Emilys_Candy
} from "next/font/google";

import { Logger } from "@/lib/logger";

export type DealsResponse = {
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
  items: Deal[];
};

export type Deal = {
  id: string;
  htmlId: string;
  collectionId: string;
  collectionName: string;
  created: string; // ISO 8601 date string
  updated: string; // ISO 8601 date string
  description: string;
  active: boolean;
  brands: string[];
  categories: string[];
  subTypes: string;
  typeSubtypes: string;
  image: string;
  imageBackgroundColor: string;
  title: string;
  badge: string;
};

enum DaysOfWeek {
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
  Sunday = 7
}

const logger = new Logger();

export type TimeRemainingUntilDate = {
  Days: string;
  Hours: string;
  Minutes: string;
  Seconds: string;
};

const dateSchema = z
  .object({
    year: z.number().min(1900).max(2100),
    month: z.number().min(1).max(12),
    day: z.number().min(1).max(31)
  })
  .refine(
    (d) => {
      try {
        const date = new Temporal.PlainDate(d.year, d.month, d.day);
        return date.dayOfWeek === DaysOfWeek.Friday;
      } catch {
        return false;
      }
    },
    { message: "Date must be a valid Friday" }
  );

/**
 * Validate and format a date object, ensuring it falls on a Friday.
 * Returns a localized string or "Error" if invalid.
 */
export function formatAndValidateDate(dateObj: z.infer<typeof dateSchema>) {
  try {
    const parsed = dateSchema.parse(dateObj);
    const date = new Temporal.PlainDate(parsed.year, parsed.month, parsed.day);

    return date.toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "short"
    });
  } catch (e) {
    if (e instanceof ZodError) {
      logger.error(
        `ZodError: ${e.errors.map((err) => err.message).join(", ")}`
      );
    } else {
      logger.error(`Error: ${(e as Error).message}`);
    }
    return "Error";
  }
}

export function getDealImageUrl(deal: Deal) {
  return `${process.env.POCKETBASE_BASE_URL}${process.env.POCKETBASE_IMAGE_URL}/${deal.id}/${deal.image}`;
}

export function getTrapTakeoverDateWithSuffix(trapTakeoverDate: Date) {
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric"
  }).format(trapTakeoverDate);

  const day = trapTakeoverDate.getDate();
  let suffix: string;
  const lastDigit = day % 10;
  const lastTwoDigits = day % 100;
  if (lastDigit === 1 && lastTwoDigits !== 11) {
    suffix = "st";
    return formattedDate + suffix;
  }
  if (lastDigit === 2 && lastTwoDigits !== 12) {
    suffix = "nd";
    return formattedDate + suffix;
  }
  if (lastDigit === 3 && lastTwoDigits !== 13) {
    suffix = "rd";
    return formattedDate + suffix;
  }

  suffix = "th";
  return formattedDate + suffix;
}

const pad2 = (n: number) => String(n).padStart(2, "0");

const zeros = (): TimeRemainingUntilDate => ({
  Days: "00",
  Hours: "00",
  Minutes: "00",
  Seconds: "00"
});

/** Ensure we’re working with a ZonedDateTime; accept Date or ZonedDateTime */
function toZdtNow(
  now: Temporal.ZonedDateTime | Date,
  tz: string
): Temporal.ZonedDateTime {
  if (now && typeof (now as Temporal.ZonedDateTime).toInstant === "function") {
    // already a ZonedDateTime
    return now as Temporal.ZonedDateTime;
  }
  // convert Date -> Instant -> ZDT in tz
  const inst = Temporal.Instant.from((now as Date).toISOString());
  return inst.toZonedDateTimeISO(tz);
}

/** Convert ms diff to DHMS strings */
function diffToDHMS(
  nowI: Temporal.Instant,
  targetI: Temporal.Instant
): TimeRemainingUntilDate {
  const ms = targetI.epochMilliseconds - nowI.epochMilliseconds;
  if (ms <= 0) return zeros();

  const totalSeconds = Math.floor(ms / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);
  const days = Math.floor(totalHours / 24);

  return {
    Days: pad2(days),
    Hours: pad2(totalHours % 24),
    Minutes: pad2(totalMinutes % 60),
    Seconds: pad2(totalSeconds % 60)
  };
}

/** Find the 1st or 3rd Friday for a given year/month at hour:minute in tz */
function nthFridayAt(
  year: number,
  month1to12: number, // 1..12
  n: 1 | 3,
  hour: number,
  minute: number,
  tz: string
): Temporal.ZonedDateTime {
  // Defensive: clamp/validate month into 1..12
  if (month1to12 < 1 || month1to12 > 12) {
    throw new RangeError(`Invalid month (expected 1–12): ${month1to12}`);
  }

  const ym = Temporal.PlainYearMonth.from({ year, month: month1to12 });
  let d = ym.toPlainDate({ day: 1 }); // PlainDate YYYY-MM-01

  // Temporal dayOfWeek: Mon=1 … Sun=7; Friday=5
  const offsetToFirstFriday = (5 - d.dayOfWeek + 7) % 7;
  d = d.add({ days: offsetToFirstFriday });
  if (n === 3) d = d.add({ days: 14 });

  // Set target wall time
  const pdt = d.toPlainDateTime({ hour, minute, second: 0 });
  return pdt.toZonedDateTime(tz);
}

/** Remaining time until next 1st or 3rd Friday (this/next month) at 12:00 local */
export function getTimeRemainingUntilFirstOrThirdFriday(
  nowInput: Temporal.ZonedDateTime | Date,
  opts?: { timeZone?: string; hour?: number; minute?: number }
): TimeRemainingUntilDate {
  const tz = opts?.timeZone ?? Temporal.Now.timeZoneId();
  const hour = opts?.hour ?? 12;
  const minute = opts?.minute ?? 0;

  const now = toZdtNow(nowInput, tz);
  const y = now.year;
  const m = now.month; // already 1..12

  const firstFri = nthFridayAt(y, m, 1, hour, minute, tz);
  const thirdFri = nthFridayAt(y, m, 3, hour, minute, tz);

  const nowMs = now.toInstant().epochMilliseconds;
  const firstMs = firstFri.toInstant().epochMilliseconds;
  const thirdMs = thirdFri.toInstant().epochMilliseconds;

  let target = firstFri;
  if (nowMs < firstMs) {
    target = firstFri;
  } else if (nowMs < thirdMs) {
    target = thirdFri;
  } else {
    // jump to next month’s 1st Friday
    const next = now.add({ months: 1 });
    target = nthFridayAt(next.year, next.month, 1, hour, minute, tz);
  }

  return diffToDHMS(now.toInstant(), target.toInstant());
}

/** Remaining time until April 20 @ 16:20 in tz for the current year */
export function getTimeRemainingUntilFourTwenty(
  nowInput: Temporal.ZonedDateTime | Date,
  opts?: { timeZone?: string; hour?: number; minute?: number }
): TimeRemainingUntilDate {
  const tz = opts?.timeZone ?? Temporal.Now.timeZoneId();
  const hour = opts?.hour ?? 16;
  const minute = opts?.minute ?? 20;

  const now = toZdtNow(nowInput, tz);

  const pdt = Temporal.PlainDateTime.from({
    year: now.year,
    month: 4,
    day: 20,
    hour,
    minute
  });
  const target = pdt.toZonedDateTime(tz);

  return diffToDHMS(now.toInstant(), target.toInstant());
}

/** True if `dateStr` is within `days` days before now in `timeZone` */
export function isDateLessThan(
  dateStr: string,
  days: number,
  timeZone: string = Temporal.Now.timeZoneId()
): boolean {
  const nowI = Temporal.Now.instant();
  let inputI: Temporal.Instant;

  try {
    // ISO with Z or offset
    inputI = Temporal.Instant.from(dateStr);
  } catch {
    try {
      // date-time without zone
      const pdt = Temporal.PlainDateTime.from(dateStr);
      inputI = pdt.toZonedDateTime(timeZone).toInstant();
    } catch {
      // date-only
      const pd = Temporal.PlainDate.from(dateStr);
      const midnight = pd.toPlainDateTime(Temporal.PlainTime.from("00:00"));
      inputI = midnight.toZonedDateTime(timeZone).toInstant();
    }
  }

  const diffMs = nowI.epochMilliseconds - inputI.epochMilliseconds;
  const windowMs = days * 24 * 60 * 60 * 1000;
  return diffMs < windowMs;
}
