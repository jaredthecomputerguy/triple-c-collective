import { afterEach, beforeEach, expect, test, vi } from "vitest";

import { getTimeRemainingUntilFirstOrThirdFriday } from "@/lib/utils";

beforeEach(() => {
  // Freeze Date.now to a controlled value for each test
  vi.useFakeTimers();
});

afterEach(() => {
  // Restore Date.now after each test
  vi.useRealTimers();
});

test("(Test: First Friday of Current Month) - Should return exactly 4 days between Jan 1, 2024 and the first Friday, Jan 5, 2024", () => {
  vi.setSystemTime(new Date(2024, 0, 1, 12)); // Jan 1, 2024 @ 12PM local

  const { Days, Hours, Minutes, Seconds } =
    getTimeRemainingUntilFirstOrThirdFriday(new Date());

  expect(Days).toBe("04");
  expect(Hours).toBe("00");
  expect(Minutes).toBe("00");
  expect(Seconds).toBe("00");
});

test("(Test: Third Friday of Current Month) - Should return exactly 13 days between Jan 6, 2024 and the third Friday, Jan 19, 2024", () => {
  vi.setSystemTime(new Date(2024, 0, 6, 12)); // Jan 6, 2024 @ 12PM local

  const { Days, Hours, Minutes, Seconds } =
    getTimeRemainingUntilFirstOrThirdFriday(new Date());

  expect(Days).toBe("13");
  expect(Hours).toBe("00");
  expect(Minutes).toBe("00");
  expect(Seconds).toBe("00");
});

test("(Test: First Friday of Next Month) - Should return exactly 13 days between Jan 20, 2024 and Feb 2, 2024", () => {
  vi.setSystemTime(new Date(2024, 0, 20, 12)); // Jan 20, 2024 @ 12PM local

  const { Days, Hours, Minutes, Seconds } =
    getTimeRemainingUntilFirstOrThirdFriday(new Date());

  expect(Days).toBe("13");
  expect(Hours).toBe("00");
  expect(Minutes).toBe("00");
  expect(Seconds).toBe("00");
});

test("Exactly AT first Friday 12pm — should move to third Friday", () => {
  vi.setSystemTime(new Date(2024, 0, 5, 12)); // Jan 5, 2024 at 12:00 PM
  const result = getTimeRemainingUntilFirstOrThirdFriday(new Date());
  // Should now move toward Jan 19, 2024 (third Friday)
  expect(result.Days).toBe("14");
  expect(result.Hours).toBe("00");
});

test("Exactly AT third Friday 12pm — should move to next month's first Friday", () => {
  vi.setSystemTime(new Date(2024, 0, 19, 12)); // Jan 19, 2024 at 12:00 PM
  const result = getTimeRemainingUntilFirstOrThirdFriday(new Date());
  // Should now move toward Feb 2, 2024
  expect(result.Days).toBe("14");
  expect(result.Hours).toBe("00");
});

test("Late evening after first Friday (missed it) — should move to third Friday", () => {
  vi.setSystemTime(new Date(2024, 0, 5, 18)); // Jan 5, 2024 at 6PM (after 12PM)
  const result = getTimeRemainingUntilFirstOrThirdFriday(new Date());
  expect(result.Days).toBe("13"); // 13 days to Jan 19
  expect(result.Hours).toBe("18"); // and 18 hours leftover
});

test("December 31st — roll over to January's first Friday", () => {
  vi.setSystemTime(new Date(2023, 11, 31, 12)); // Dec 31, 2023 at noon
  const result = getTimeRemainingUntilFirstOrThirdFriday(new Date());
  // First Friday of January 2024 is Jan 5, 2024
  expect(result.Days).toBe("05");
  expect(result.Hours).toBe("00");
});

test("Edge case: February (short month) — third Friday", () => {
  vi.setSystemTime(new Date(2024, 1, 3, 12)); // Feb 3, 2024 at noon
  const result = getTimeRemainingUntilFirstOrThirdFriday(new Date());
  // First Friday of Feb is Feb 2, already passed, next is Feb 16
  expect(result.Days).toBe("13");
  expect(result.Hours).toBe("00");
});
