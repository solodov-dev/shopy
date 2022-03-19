import React, { ReactChild } from "react";
import styles from "../styles/header.module.css";

export default function Header(props: { children: ReactChild | ReactChild[] }) {
  return <header className={styles.header}>{props.children}</header>;
}
