import deleteKey from "utils/helpers/deleteKey";

describe("Delete key without mutating", () => {
  test("Delete key", () => {
    const obj = { a: 1, b: 2 };
    expect(deleteKey(obj, "a")).toMatchObject({ b: 2 });
  });

  test("New object is not the same object", () => {
    const obj = { a: 1, b: 2 };
    expect(deleteKey(obj, "b") === obj).toBeFalsy();
  });
});
