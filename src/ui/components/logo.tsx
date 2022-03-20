import React from "react";
import styles from "../styles/logo.module.scss";
import { ReactComponent as Cart } from "../assets/cart.svg";

export default function Logo() {
  return <Cart className={styles.cart} />;
}
