import { useEffect, useState } from "react";
import { Observable } from "rxjs";

export default function useObservable<T>(observable: Observable<T>) {
  const [data, setData] = useState<T>();

  useEffect(() => {
    const subscription = observable.subscribe(setData);
    return () => subscription.unsubscribe();
  }, [observable]);

  return data;
}
