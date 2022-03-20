import {z} from 'zod';

export type ShoppingList = Record<number, number>;

export type Product = {
  id: number, 
  name: string,
  price: number,
  image: string,
}

const productSchema = z.object({
  id: z.number(),
  name: z.string(),
  price: z.number(),
  image: z.string()
})

export { productSchema }
