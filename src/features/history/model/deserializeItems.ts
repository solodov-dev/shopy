import { ShoppingItem } from "./types";

export default function deserializeItem(item: any): ShoppingItem {
  let deserializedItem: ShoppingItem;
  try {
    deserializedItem = { ...item };
    deserializedItem.purchaseDate = new Date(item.purchaseDate);
  } catch (e: any) {
    throw new Error("Deserialization error: ", e);
  }

  return deserializedItem;
}
