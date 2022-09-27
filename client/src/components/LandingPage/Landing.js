import React from "react";
import { Link } from "react-router-dom";
import worldvideo from "../../assets/worldvideo.mp4";
import styles from "./landing.module.css";

export default function LandingPage() {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <h1>Travel the World!</h1>
      </div>
      <div className={styles.overlay}> </div>
      <video src={worldvideo} playsinline autoPlay loop muted />
      <div>
        <Link to="/home">
          <button className={styles.button}>Take a Tour!</button>
        </Link>
      </div>
    </div>
  );
}
