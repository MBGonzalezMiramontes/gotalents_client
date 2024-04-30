import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import { Pen, Building, InfoCircle } from "react-bootstrap-icons";
import logo from "../../images/GoTalents-Logo-14.png";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.linkContainer}>
        <Link to="/" className={styles.link}>
          <div className={styles.iconContainer}>
            <img src={logo} alt="logo" className={styles.logo} />
          </div>
          Home
        </Link>
        <Link to="/companies" className={styles.link}>
          <div className={styles.iconContainer}>
            <Building className={styles.icon} />
          </div>
          Companies
        </Link>
        <Link to="/talents" className={styles.link}>
          <div className={styles.iconContainer}>
            <Pen className={styles.icon} />
          </div>
          Talents
        </Link>
        <Link to="/aboutus" className={styles.link}>
          <div className={styles.iconContainer}>
            <InfoCircle className={styles.icon} />
          </div>
          About Us
        </Link>
      </div>
    </div>
  );
};

export default NavBar;