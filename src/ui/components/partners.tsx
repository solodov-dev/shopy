import React from "react";
import styles from "../styles/partners.module.css";
import shopify from "../assets/shopify.svg";
import kaub from "../assets/kaub.svg";
import coop from "../assets/coop.svg";

const PARTNERS = [coop, shopify, kaub];

export default function Partners() {
  return (
    <section className={styles.partners}>
      <span>Our partners</span>
      {PARTNERS.map((partner) => (
        <img src={partner} alt={partner} />
      ))}
    </section>
  );
}
