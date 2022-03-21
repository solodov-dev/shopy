import priceToString from "utils/helpers/priceToString";

describe("converst a number to the price string", () => {
  test("converts 123 to 1.23 Euro", () => {
    expect(priceToString(123)).toBe("1.23€");
  });

  test("converts 23 to 0.23 Euro", () => {
    expect(priceToString(23)).toBe("0.23€");
  });

  test("converts 3 to 0.03 Euro", () => {
    expect(priceToString(3)).toBe("0.03€");
  });
});
