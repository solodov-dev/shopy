import { useState } from "react";
import Loader from "ui/components/loader";
import ShopLayout from "ui/layouts/shopLayout";
import useObservable from "utils/hooks/useObservable";
import getCatalog from "../model/getCatalog";
import { ShoppingList } from "../model/schema";
import Cart from "./cart";
import Catalog from "./catalog";

export type SetShoppingList = React.Dispatch<
  React.SetStateAction<ShoppingList>
>;

export default function Shop() {
  const products = useObservable(getCatalog);
  const [shoppingList, setShoppingList] = useState<ShoppingList>({});

  if (!products) return <Loader />;

  return (
    <ShopLayout>
      <Cart products={products} setShoppingList={setShoppingList}>
        {shoppingList}
      </Cart>
      <Catalog setShoppingList={setShoppingList}>{products}</Catalog>
    </ShopLayout>
  );
}
