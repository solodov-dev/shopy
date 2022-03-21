import Button from "ui/components/button";
import priceToString from "utils/helpers/priceToString";
import { Product } from "../model/schema";
import styles from "../styles/productCard.module.scss";

export default function ProductCard(props: {
  children: Product;
  addItem: (id: string) => void;
}) {
  return (
    <div className={styles.card}>
      <h3>{props.children.name}</h3>
      <img src={props.children.image} alt={props.children.name} />
      <footer>
        <div className={styles.price}>
          {priceToString(props.children.price)}
        </div>
        <Button onClick={() => props.addItem(props.children.id)}>Add</Button>
      </footer>
    </div>
  );
}
