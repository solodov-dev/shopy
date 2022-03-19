import React from "react";
import Hero from "features/landing/components/hero";
import Partners from "features/landing/components/partners";
import styles from "../styles/home.module.css";
import Mission from "features/landing/components/mission";

export default function Home() {
  return (
    <main className={styles.home}>
      <Hero />
      <Partners />
      <Mission />
    </main>
  );
}
