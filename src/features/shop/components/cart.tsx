import {
  SetLocalHistory,
  SetShoppingList,
} from "features/routes/components/pages";
import { useMemo } from "react";
import Button from "ui/components/button";
import objectKeys from "utils/helpers/objectKeys";
import priceToString from "utils/helpers/priceToString";
import { Product, ShoppingList } from "../model/schema";
import styles from "../styles/cart.module.scss";
import CartProduct from "./cartProduct";

export default function Cart(props: {
  children: ShoppingList;
  products: Product[];
  setShoppingList: SetShoppingList;
  onPurchase: SetLocalHistory;
}) {
  const list = props.children;
  const productsByIds: Record<string, Product> = useMemo(
    () =>
      props.products.reduce((obj, item) => ({ ...obj, [item.id]: item }), {}),
    [props.products]
  );

  const total = useMemo(
    () =>
      objectKeys(list).reduce(
        (total, key) => (total += list[key] * productsByIds[key].price),
        0
      ),
    [list, productsByIds]
  );

  return (
    <div className={styles.cart}>
      {objectKeys(list).map((productId) =>
        list[productId] ? (
          <CartProduct
            key={productId}
            quantity={list[productId]}
            setShoppingList={props.setShoppingList}
          >
            {productsByIds[productId]}
          </CartProduct>
        ) : null
      )}
      <footer>
        <div className={styles.total}>total: {priceToString(total)}</div>
        <Button
          disabled={Object.keys(list).length === 0}
          onClick={() => {
            props.onPurchase((prev) => [
              ...prev,
              ...objectKeys(list).map((key) => ({
                ...productsByIds[key],
                purchaseDate: new Date(),
              })),
            ]);
            props.setShoppingList({});
          }}
        >
          Buy
        </Button>
      </footer>
    </div>
  );
}
