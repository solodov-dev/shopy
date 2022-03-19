import useObservable from "../hooks/useObservable";
import { renderHook } from "@testing-library/react-hooks";
import { Subject } from "rxjs";

test("should observe data changes", () => {
  const subj = new Subject();
  const { result } = renderHook(() => useObservable(subj));
  subj.next("test");
  expect(result.current).toBe("test");
});
