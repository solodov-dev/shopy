import { z } from "zod";

export type ShoppingList = Record<string, number>;

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

const productSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number(),
  image: z.string(),
});

export { productSchema };
