import { ReactChild } from "react";
import styles from '../styles/shopLayout.module.scss';

export default function ShopLayout(props: {children: ReactChild[]}) {
  return (
    <div className={styles.shop}>
      {props.children}
    </div>
  )
}

