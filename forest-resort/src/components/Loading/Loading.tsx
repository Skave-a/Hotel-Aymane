import { SERVICE_MESSAGES } from "../../utils/constants";
import styles from "./Loading.module.css";
import loading from "../../images/gif/loading-arrow.gif";

export default function Loading() {
  return (
    <div className={styles.loading}>
      <h4>{SERVICE_MESSAGES.loading}</h4>
      <img src={loading} alt="loading" />
    </div>
  );
}
