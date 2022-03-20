import React, { ReactChild } from "react";
import styles from "../styles/header.module.scss";

export default function Header(props: { children: ReactChild | ReactChild[] }) {
  return <header className={styles.header}>{props.children}</header>;
}
