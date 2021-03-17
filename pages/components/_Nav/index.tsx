import React from "react";
import styles from "../../../styles/components/Nav.module.css";

export const Nav = () => {
  return (
    <nav className={styles.navContainer}>
      <p>knowledge</p>
      <p>work</p>
      <p>education</p>
      <p>experience</p>
      <p>contact</p>
    </nav>
  );
};
