import { Product } from "../model/schema";
import styles from "../styles/cartProduct.module.scss";
import deleteKey from "utils/helpers/deleteKey";
import { SetShoppingList } from "features/routes/components/pages";

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
            props.setShoppingList((prev) =>
              prev[id] === 1
                ? deleteKey(prev, id)
                : { ...prev, [id]: prev[id] - 1 }
            )
          }
        >
          -
        </button>
        <button
          onClick={() => props.setShoppingList((prev) => deleteKey(prev, id))}
        >
          &times;
        </button>
      </div>
    </div>
  );
}
