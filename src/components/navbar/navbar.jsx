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
          <div className={styles.linkContent}>
            <img src={logo} alt="logo" className={styles.logo} />
            <span>Home</span>
          </div>
        </Link>
        <Link to="/companies" className={styles.link}>
          <div className={styles.linkContent}>
            <Building className={styles.icon} />
            <span>Companies</span>
          </div>
        </Link>
        <Link to="/talents" className={styles.link}>
          <div className={styles.linkContent}>
            <Pen className={styles.icon} />
            <span>Talents</span>
          </div>
        </Link>
        <Link to="/aboutus" className={styles.link}>
          <div className={styles.linkContent}>
            <InfoCircle className={styles.icon} />
            <span>About Us</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
