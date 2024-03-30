import React from "react";
import styles from "./footer.module.css";
import logo from "../../images/GoTalents-Logo-21.png";
import { Link } from "react-router-dom";
import { Linkedin, Instagram } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.secondContainer}>
        <div className={styles.row}>
          <img src={logo} alt="logo" className={styles.logo} />
        </div>

        <div className={styles.row}>
          <Link to="/companies" className={styles.link}>
            Companies
          </Link>
          <Link to="/talents" className={styles.link}>
            Talents
          </Link>
          <Link to="/aboutus" className={styles.link}>
            About Us
          </Link>
        </div>

        <div className={styles.row}>
          <Link to="/" className={styles.link}>
            <div className={styles.iconConteiner}>
              <Instagram className={styles.icon} />
            </div>
          </Link>
          <Link to="/" className={styles.link}>
            <div className={styles.iconConteiner}>
              <Linkedin className={styles.icon} />
            </div>
          </Link>
        </div>

        <div className={styles.row}>
          <p className={styles.text}>contact@gotalentsglobal.com</p>
          <Link to="/companies" className={styles.link}>
            Terms and conditions
          </Link>
          <p className={styles.text}>
            Copyright 2024 © Go Talents. Todos los derechos reservados
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
