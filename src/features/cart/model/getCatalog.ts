import { catchError, map, of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { catalogItemSchema } from "./schema";

const getCatalog = ajax
  .getJSON<Record<string, any>>(`${window.location.origin}/data/catalog.json`)
  .pipe(
    map((response) =>
      response.data.items.map((item: any) => catalogItemSchema.parse(item))
    ),
    catchError((error) => {
      console.error(error);
      return of(error);
    })
  );

export default getCatalog;
