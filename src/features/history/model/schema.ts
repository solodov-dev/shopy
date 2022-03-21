import { z } from "zod";

export type PurchasedItem = {
  id: string;
  purchaseDate: Date;
  name: string;
  store: string;
  link: string;
};

const purchasedItemShema = z.object({
  id: z.string(),
  purchaseDate: z.preprocess((arg) => {
    if (typeof arg === "string" || arg instanceof Date) return new Date(arg);
  }, z.date()),
  name: z.string(),
  store: z.string(),
  link: z.string(),
});

export { purchasedItemShema };
