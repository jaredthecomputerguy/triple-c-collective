import { expect, test } from "vitest";
import { getTimeRemainingUntilFirstOrThirdFriday } from "../lib/utils";

function createPacificTimeDate(
  year: number,
  month: number,
  day: number,
  hour: number,
) {
  const date = new Date(Date.UTC(year, month, day, hour + 8, 0, 0));
  // Note: +8 because Pacific Time is UTC-8 in winter (standard time)
  return date;
}
test("(Test: First Friday of Current Month) - Should return exactly 4 days between Jan 1, 2024 and the first Friday, Jan 5, 2024", () => {
  const { Days, Hours, Minutes, Seconds } =
    getTimeRemainingUntilFirstOrThirdFriday(
      createPacificTimeDate(2024, 0, 1, 12),
    );

  expect(Days).toBe("04");
  expect(Hours).toBe("00");
  expect(Minutes).toBe("00");
  expect(Seconds).toBe("00");
});

test("(Test: Third Friday of Current Month) - Should return exactly 13 days between Jan 6, 2024 and the third Friday, Jan 19, 2024", () => {
  const { Days, Hours, Minutes, Seconds } =
    getTimeRemainingUntilFirstOrThirdFriday(
      createPacificTimeDate(2024, 0, 6, 12),
    );

  expect(Days).toBe("13");
  expect(Hours).toBe("00");
  expect(Minutes).toBe("00");
  expect(Seconds).toBe("00");
});

test("(Test: First Friday of Next Month) - Should return exactly 12 days 12 hours between Jan 20, 2024 and Feb 2, 2024", () => {
  const { Days, Hours, Minutes, Seconds } =
    getTimeRemainingUntilFirstOrThirdFriday(
      createPacificTimeDate(2024, 0, 20, 12),
    );

  expect(Days).toBe("13");
  expect(Hours).toBe("00");
  expect(Minutes).toBe("00");
  expect(Seconds).toBe("00");
});
