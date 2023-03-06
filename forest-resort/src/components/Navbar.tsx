import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import { FaAlignRight } from "react-icons/fa";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [state, setState] = useState(false);
  function handleToggle() {
    setState(!state);
  }
  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <Link to="/">
            <img src={logo} alt="forest resort" />
          </Link>
        </div>
        <button type="button" className={styles.navIcon} onClick={handleToggle}>
          <FaAlignRight className={styles.navIcon} />
        </button>
      </div>
      <ul className={state ? styles.navLinks + ' ' +  styles.showNav : styles.navLinks}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/rooms">Rooms</Link>
        </li>
      </ul>
    </nav>
  );
};
