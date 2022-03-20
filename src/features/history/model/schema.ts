import { z } from "zod";

export type PurchasedItem = {
  id: number;
  purchaseDate: Date;
  product: string;
  store: string;
  link: string;
};

const purchasedItemShema = z.object({
  id: z.number(),
  purchaseDate: z.preprocess((arg) => {
    if (typeof arg === "string" || arg instanceof Date) return new Date(arg);
  }, z.date()),
  product: z.string(),
  store: z.string(),
  link: z.string(),
});

export { purchasedItemShema };
