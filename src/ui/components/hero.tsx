import React from "react";
import styles from "../styles/hero.module.css";
import { ReactComponent as Shopping } from "../assets/shopping.svg";
import { Routes } from "features/routes/constants/routes";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <section>
        <h1>Shoppy</h1>
        <p>All your shopping in one place</p>
        <Link to={Routes.CART} className={styles.link}>
          Go shopping
        </Link>
      </section>
      <Shopping className={styles.image} />
    </div>
  );
}
