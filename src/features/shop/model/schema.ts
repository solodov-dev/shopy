import { z } from "zod";

export type ShoppingList = Record<string, number>;

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  store: string;
  link: string;
};

const productSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number(),
  image: z.string(),
  store: z.string(),
  link: z.string(),
});

export { productSchema };
