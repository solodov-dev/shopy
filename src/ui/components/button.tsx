import React, { ButtonHTMLAttributes } from "react";
import styles from "../styles/button.module.scss";

export default function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...props} className={styles.button}>
      {props.children}
    </button>
  );
}
