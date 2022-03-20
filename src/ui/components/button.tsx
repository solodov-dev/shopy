import React, { HTMLAttributes } from "react";
import styles from "../styles/button.module.scss";

export default function Button(props: HTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...props} className={styles.button}>
      {props.children}
    </button>
  );
}
