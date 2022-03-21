import datesAreEqual from "utils/helpers/datesAreEqual";

describe("compares two dates", () => {
  test("two dates are equal", () => {
    const isoDate = "2022-01-04T13:33:03.969Z";
    const date1 = new Date(isoDate);
    const date2 = new Date(isoDate);
    expect(datesAreEqual(date1, date2)).toBeTruthy();
  });

  test("two dates are not equal", () => {
    const isoDate = "2022-01-04T13:33:03.969Z";
    const date1 = new Date(isoDate);
    const date2 = new Date();
    expect(datesAreEqual(date1, date2)).toBeFalsy();
  });
});
