import React from "react";
import top_image from "../../images/companies_image.png";
import styles from "./companies.module.css";
const Companies = () => {
  return (
    <div className={styles.container}>
      <img src={top_image} alt="top_image" className={styles.top_image} />
      <div className={styles.title_body_container}>
        <h1 className={styles.title}>Recruitment services</h1>
        <p className={styles.paragraph}>
          We understand that every organization is unique and the right
          workforce can make the difference in business success. <br />
          <br />
          Our dedication to excellence and personalized approach make us the
          ideal partner to meet your needs. of talent and take your organization
          to the next level.
        </p>
        <div className={styles.cardsContainer}>
          <div className={styles.card1}>
            <h2 className={styles.subtitle}>
              Recruitment on
              <br />a large scale
            </h2>
            <p className={styles.paragraphCard}>
              We handle massive hiring processes, guaranteeing efficiency
              without compromising quality.
            </p>
          </div>
          <div className={styles.card2}>
            <h2 className={styles.subtitle}>
              Recruiting of
              <br />
              specialized talent
            </h2>
            <p className={styles.paragraphCard}>
              We find experts in specific areas to address critical challenges
              and projects.
            </p>
          </div>
          <div className={styles.card3}>
            <h2 className={styles.subtitle}>Executive recruitment</h2>
            <p className={styles.paragraphCard}>
              We identify visionary and strategic leaders that will help propel
              your company towards success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
