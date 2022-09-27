import React from "react";
import styles from "./loading.module.css";

export default function Loading({ setLoading }) {
  return (
    <section className={styles.loader}>
      <div className={styles.ball}></div>
      <div className={styles.ball}></div>
      <div className={styles.ball}></div>
      <div className={styles.ball}></div>
      <div className={styles.ball}></div>
      <div className={styles.ball}></div>
      <div className={styles.ball}></div>
      <div className={styles.ball}></div>
      {setTimeout(() => {
        setLoading(false);
      }, 500)}
    </section>
  );
}
