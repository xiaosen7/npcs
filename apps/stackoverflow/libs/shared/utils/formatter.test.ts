import { formatDate, formatNumber } from "./formatter";

describe("formatter", () => {
  test("formattedDate", () => {
    expect(formatDate(new Date())).toBe("just now");
  });

  test("formatNumber", () => {
    expect(formatNumber(0)).toBe("0");
    expect(formatNumber(1000)).toBe("1.0K");
    expect(formatNumber(1000000)).toBe("1.0M");
    expect(formatNumber(1000000000)).toBe("1.0B");
  });
});
