import { catchError, map, of } from "rxjs";
import { ajax } from "rxjs/ajax";
import deserializeItem from "./deserializeItems";

const getItems = ajax
  .getJSON<Record<string, any>>(`${window.location.origin}/data.json`)
  .pipe(
    map((response) =>
      response.data.items.map((item: any) => deserializeItem(item))
    ),
    catchError((error) => {
      console.error(error);
      return of(error);
    })
  );

export default getItems;
