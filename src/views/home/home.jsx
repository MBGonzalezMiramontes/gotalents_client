import React from "react";
import styles from "./home.module.css";
import top_image from "../../images/top_home.png";
import woman_image from "../../images/mujer.png";
import man_image from "../../images/hombre.png";

const Home = () => {
  return (
    <div className={styles.container}>
      <img src={top_image} alt="top_image" className={styles.top_image} />
      <div className={styles.title_body_container}>
        <h1 className={styles.title_orange}>
          Remote horizons,
          <br />
          global talents,
          <br />
          infinite potential
        </h1>
        <p className={styles.paragraph}>
          We are dedicated to identifying and recruiting top talent to meet the
          specific needs of your company.
          <br />
          <br />
          Our dedication to excellence and personalized approach make us the
          ideal partner to satisfy your talent needs to take your organization
          to the next level.
        </p>
      </div>
      <div className={styles.columns}>
        <div className={styles.card}>
          <img
            src={woman_image}
            alt="woman_image"
            className={styles.woman_image}
          />
          <h2 className={styles.subtitle_blue}>Hire</h2>
          <p className={styles.paragraph}>
            Connect with passionate professionals to meet the needs of your
            company.
          </p>
          <p className={styles.featurdBlue}>
            Find the ideal talent for you business right now.
          </p>
          <button className={styles.blueButton}>Companies</button>
        </div>
        <div className={styles.card}>
          <img src={man_image} alt="man_image" className={styles.man_image} />
          <h2 className={styles.subtitle_orange}>Apply</h2>
          <p className={styles.paragraph}>
            Be part of a group of like-minded people that will propel your
            career towards success.
          </p>
          <p className={styles.featurdOrange}>
            Join a team where you can shine and stand out.
          </p>
          <button className={styles.orangeButton}>Talents</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
