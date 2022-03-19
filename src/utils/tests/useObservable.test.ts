import useObservable from "../hooks/useObservable";
import { renderHook } from "@testing-library/react-hooks";
import { of } from "rxjs";

test("should observe data changes", () => {
  const observable = of(1, 2, 3);
  const { result } = renderHook(() => useObservable(observable));
  expect(result.current[0]).toBe(3);
});
