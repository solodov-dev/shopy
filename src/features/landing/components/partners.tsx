import React from "react";
import styles from "../styles/partners.module.css";
import shopify from "ui/assets/shopify.svg";
import kaub from "ui/assets/kaub.svg";
import coop from "ui/assets/coop.svg";

const PARTNERS = [coop, shopify, kaub];

export default function Partners() {
  return (
    <section className={styles.partners}>
      <span>Our partners</span>
      {PARTNERS.map((partner) => (
        <img key={partner} src={partner} alt={partner} />
      ))}
    </section>
  );
}
