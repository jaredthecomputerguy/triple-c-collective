import { afterEach, beforeEach, expect, test, vi } from "vitest";
import { getTimeRemainingUntilFirstOrThirdFriday } from "@/lib/utils";

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  vi.useRealTimers();
});

/**
 * Construct a Date in UTC (so test inputs are stable everywhere).
 */
function utcDate(
  year: number,
  month: number,
  day: number,
  hour = 0,
  minute = 0
) {
  return new Date(Date.UTC(year, month, day, hour, minute));
}

/**
 * Wrapper so all calls use UTC explicitly.
 */
function run(now: Date) {
  return getTimeRemainingUntilFirstOrThirdFriday(now, { timeZone: "UTC" });
}

test("First Friday of current month: Jan 1 → Jan 5, 2024", () => {
  vi.setSystemTime(utcDate(2024, 0, 1, 12));
  const result = run(new Date());
  expect(result).toEqual({
    Days: "04",
    Hours: "00",
    Minutes: "00",
    Seconds: "00"
  });
});

test("Third Friday of current month: Jan 6 → Jan 19, 2024", () => {
  vi.setSystemTime(utcDate(2024, 0, 6, 12));
  const result = run(new Date());
  expect(result).toEqual({
    Days: "13",
    Hours: "00",
    Minutes: "00",
    Seconds: "00"
  });
});

test("First Friday of next month: Jan 20 → Feb 2, 2024", () => {
  vi.setSystemTime(utcDate(2024, 0, 20, 12));
  const result = run(new Date());
  expect(result).toEqual({
    Days: "13",
    Hours: "00",
    Minutes: "00",
    Seconds: "00"
  });
});

test("Exactly at first Friday 12PM → should move to third Friday", () => {
  vi.setSystemTime(utcDate(2024, 0, 5, 12));
  const result = run(new Date());
  expect(result).toEqual({
    Days: "14",
    Hours: "00",
    Minutes: "00",
    Seconds: "00"
  });
});

test("Exactly at third Friday 12PM → should move to next month’s first Friday", () => {
  vi.setSystemTime(utcDate(2024, 0, 19, 12));
  const result = run(new Date());
  expect(result).toEqual({
    Days: "14",
    Hours: "00",
    Minutes: "00",
    Seconds: "00"
  });
});

test("Late evening after first Friday (missed it) → should move to third Friday", () => {
  vi.setSystemTime(utcDate(2024, 0, 5, 18));
  const result = run(new Date());
  expect(result).toEqual({
    Days: "13",
    Hours: "18",
    Minutes: "00",
    Seconds: "00"
  });
});

test("December 31st → roll over to January’s first Friday", () => {
  vi.setSystemTime(utcDate(2023, 11, 31, 12));
  const result = run(new Date());
  expect(result).toEqual({
    Days: "05",
    Hours: "00",
    Minutes: "00",
    Seconds: "00"
  });
});

test("February (short month) → third Friday", () => {
  vi.setSystemTime(utcDate(2024, 1, 3, 12));
  const result = run(new Date());
  expect(result).toEqual({
    Days: "13",
    Hours: "00",
    Minutes: "00",
    Seconds: "00"
  });
});

test("After third Friday (Jan 20, 2024) → should go to Feb 2", () => {
  vi.setSystemTime(utcDate(2024, 0, 20, 9));
  const result = run(new Date());
  expect(result).toEqual({
    Days: "13",
    Hours: "03",
    Minutes: "00",
    Seconds: "00"
  });
});

test("Leap year check: Feb 29, 2024 → next month’s first Friday (Mar 1)", () => {
  vi.setSystemTime(utcDate(2024, 1, 29, 12));
  const result = run(new Date());
  expect(result).toEqual({
    Days: "01",
    Hours: "00",
    Minutes: "00",
    Seconds: "00"
  });
});
