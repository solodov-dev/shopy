import { map, Observable } from "rxjs";
import { ajax } from "rxjs/ajax";
import { Product, productSchema } from "./schema";

const getCatalog: Observable<Product[]> = ajax
  .getJSON<Record<string, any>>(`${window.location.origin}/data/catalog.json`)
  .pipe(
    map((response) =>
      response.data.items.map((item: any) => productSchema.parse(item))
    )
  );

export default getCatalog;
