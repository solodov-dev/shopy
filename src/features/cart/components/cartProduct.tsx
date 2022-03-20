import { Product } from "../model/schema";
import { SetShoppingList } from "./shop";
import styles from "../styles/cartProduct.module.scss";

export default function CartProduct(props: {
  children: Product;
  quantity: number;
  setShoppingList: SetShoppingList;
}) {
  const id = props.children.id;

  return (
    <div className={styles.product}>
      <div>
        {props.children.name} &times; {props.quantity}
      </div>
      <div className={styles.buttons}>
        <button
          onClick={() =>
            props.setShoppingList((prev) => ({ ...prev, [id]: prev[id] - 1 }))
          }
        >
          -
        </button>
        <button
          onClick={() =>
            props.setShoppingList((prev) => ({ ...prev, [id]: 0 }))
          }
        >
          &times;
        </button>
      </div>
    </div>
  );
}
