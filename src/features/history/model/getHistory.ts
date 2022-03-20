import { catchError, map, of } from "rxjs";
import { ajax } from "rxjs/ajax";
import {purchasedItemShema} from './schema';

const getHistory = ajax
  .getJSON<Record<string, any>>(`${window.location.origin}/data/history.json`)
  .pipe(
    map((response) =>
      response.data.items.map((item: any) => purchasedItemShema.parse(item))
    ),
    catchError((error) => {
      console.error(error);
      return of(error);
    })
  );

export default getHistory;
