import { Dispatch, SetStateAction } from "react";
import { Product, ShoppingList } from "../model/schema";
import ProductCard from "./productCard";
import styles from "../styles/catalog.module.scss";

export default function Catalog(props: {
  children: Product[];
  setShoppingList: Dispatch<SetStateAction<ShoppingList>>;
}) {
  return (
    <div className={styles.catalog}>
      {props.children.map((product) => (
        <ProductCard
          key={product.id}
          addItem={(id) =>
            props.setShoppingList((prev) => ({
              ...prev,
              [id]: id in prev ? prev[id] + 1 : 1,
            }))
          }
        >
          {product}
        </ProductCard>
      ))}
    </div>
  );
}
