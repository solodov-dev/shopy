import { useMemo } from "react";
import objectKeys from "utils/helpers/objectKeys";
import priceToString from "utils/helpers/priceToString";
import { Product, ShoppingList } from "../model/schema";
import styles from "../styles/cart.module.scss";
import CartProduct from "./cartProduct";
import { SetShoppingList } from "./shop";

export default function Cart(props: {
  children: ShoppingList;
  products: Product[];
  setShoppingList: SetShoppingList;
}) {
  const productsByIds: Record<string, Product> = useMemo(
    () =>
      props.products.reduce((obj, item) => ({ ...obj, [item.id]: item }), {}),
    [props.products]
  );

  const total = useMemo(
    () =>
      objectKeys(props.children).reduce(
        (total, key) =>
          (total += props.children[key] * productsByIds[key].price),
        0
      ),
    [props.children, productsByIds]
  );

  return (
    <div className={styles.cart}>
      {objectKeys(props.children).map((productId) =>
        props.children[productId] ? (
          <CartProduct
            key={productId}
            quantity={props.children[productId]}
            setShoppingList={props.setShoppingList}
          >
            {productsByIds[productId]}
          </CartProduct>
        ) : null
      )}
      <div className={styles.total}>total: {priceToString(total)}</div>
    </div>
  );
}
