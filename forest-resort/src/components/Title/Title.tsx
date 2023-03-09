import React from "react";
import styles from "./Title.module.css";

export default function Title({ title }: { title: string }) {
  return (
    <div className={styles.sectionTitle}>
      <h4>{title}</h4>
      <div className="line"></div>
    </div>
  );
}
