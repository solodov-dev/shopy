import {z} from 'zod';

export type CatalogItem = {
  id: number, 
  product: string,
  price: string,
  image: string,
}

const catalogItemSchema = z.object({
  id: z.number(),
  product: z.string(),
  price: z.string(),
  image: z.string()
})

export { catalogItemSchema }
