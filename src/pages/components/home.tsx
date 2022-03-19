import React from "react";
import Hero from "ui/components/hero";
import Partners from "ui/components/partners";
import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <main className={styles.home}>
      <Hero />
      <Partners />
    </main>
  );
}
