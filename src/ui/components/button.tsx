import React, { ReactChild } from "react";
import styles from "../styles/button.module.css";

export default function Button(props: {
  children: ReactChild;
  type?: "primary" | "secondary";
}) {
  return (
    <button
      className={props.type === "secondary" ? styles.secondary : styles.primary}
    >
      {props.children}
    </button>
  );
}
