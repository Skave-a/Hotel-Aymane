import React from "react";
import { IBanner } from "../../utils/types";
import styles from "./Banner.module.css";

export default function Banner(props: IBanner) {
  const { children, title, subtitle } = props;
  return (
    <div className={styles.banner}>
      <h1>{title}</h1>
      <div></div>
      <p>{subtitle}</p>
      {children}
    </div>
  );
}
