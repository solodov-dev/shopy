import React, { HTMLAttributes } from "react";
import styles from "../styles/button.module.css";

export default function Button(props: HTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...props} className={styles.button}>
      {props.children}
    </button>
  );
}
