import {
  SetLocalHistory,
  SetShoppingList,
} from "features/routes/components/pages";
import Loader from "ui/components/loader";
import ShopLayout from "ui/layouts/shopLayout";
import useObservable from "utils/hooks/useObservable";
import getCatalog from "../model/getCatalog";
import { ShoppingList } from "../model/schema";
import Cart from "./cart";
import Catalog from "./catalog";

export default function Shop(props: {
  setLocalHistory: SetLocalHistory;
  shoppingList: ShoppingList;
  setShoppingList: SetShoppingList;
}) {
  const products = useObservable(getCatalog);

  if (!products) return <Loader />;

  return (
    <ShopLayout>
      <Cart
        products={products}
        setShoppingList={props.setShoppingList}
        onPurchase={props.setLocalHistory}
      >
        {props.shoppingList}
      </Cart>
      <Catalog setShoppingList={props.setShoppingList}>{products}</Catalog>
    </ShopLayout>
  );
}
