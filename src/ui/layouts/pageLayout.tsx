import { ReactChild } from "react";
import styles from '../styles/pageLayout.module.scss';

export default function pageLayout(props : {children: ReactChild[] | ReactChild}) {
  return (
    <main className={styles.page}>
      {props.children} 
    </main>
  )
}
