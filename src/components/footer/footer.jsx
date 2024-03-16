import React from "react";
import styles from "./footer.module.css";
import top_image from "../../images/top_footer.png";

const Footer = () => {
  return (
    <div>
      <img src={top_image} alt="top_image" className={styles.top_image} />
      <p>hola footer</p>
    </div>
  );
};

export default Footer;
