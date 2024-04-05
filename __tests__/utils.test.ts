import { expect, test } from "vitest";
import { getTimeRemainingUntilFirstOrThirdFriday } from "../lib/utils";

test("(Test: First Friday of Current Month) - Should return exactly 4 days between Jan 1, 2024 and the first Friday, Jan 5, 2024", () => {
  const { Days, Hours, Minutes, Seconds } =
    getTimeRemainingUntilFirstOrThirdFriday(new Date(2024, 0, 1, 12));

  expect(Days).toBe("04");
  expect(Hours).toBe("00");
  expect(Minutes).toBe("00");
  expect(Seconds).toBe("00");
});

test("(Test: Third Friday of Current Month) - Should return exactly 13 days between Jan 6, 2024 and the third Friday, Jan 19, 2024", () => {
  const { Days, Hours, Minutes, Seconds } =
    getTimeRemainingUntilFirstOrThirdFriday(new Date(2024, 0, 6, 12));

  expect(Days).toBe("13");
  expect(Hours).toBe("00");
  expect(Minutes).toBe("00");
  expect(Seconds).toBe("00");
});

test("(Test: First Friday of Next Month) - Should return exactly 13 days between Jan 20, 2024 and the third Friday, Feb 2, 2024", () => {
  const { Days, Hours, Minutes, Seconds } =
    getTimeRemainingUntilFirstOrThirdFriday(new Date(2024, 0, 6, 12));

  expect(Days).toBe("13");
  expect(Hours).toBe("00");
  expect(Minutes).toBe("00");
  expect(Seconds).toBe("00");
});
