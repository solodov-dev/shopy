import React from "react";
import styles from "../styles/hero.module.css";
import { ReactComponent as Shopping } from "ui/assets/shopping.svg";
import Routes from "features/routes/constants/routes";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div>
        <h1>Shoppy</h1>
        <p>All your shopping in one place</p>
        <div className={styles.link}>
          <Link to={Routes.CART}>Go shopping</Link>
        </div>
      </div>
      {/* <Shopping className={styles.image} /> */}
    </section>
  );
}
