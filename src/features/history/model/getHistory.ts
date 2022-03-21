import { map, Observable } from "rxjs";
import { ajax } from "rxjs/ajax";
import { PurchasedItem, purchasedItemShema } from "./schema";

const getHistory: Observable<PurchasedItem[]> = ajax
  .getJSON<Record<string, any>>(`${window.location.origin}/data/history.json`)
  .pipe(
    map((response) =>
      response.data.items.map((item: any) => purchasedItemShema.parse(item))
    )
  );

export default getHistory;
