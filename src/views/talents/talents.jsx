import React from "react";
import top_image from "../../images/talent_image.png";
import styles from "./talents.module.css";
import woman_image from "../../images/woman.png";
import coworkers_image from "../../images/coworkers.png";

const Talents = () => {
  return (
    <div className={styles.container}>
      <img src={top_image} alt="top_image" className={styles.top_image} />
      <div className={styles.title_body_container}>
        <h1 className={styles.title}>Work with us</h1>
        <p className={styles.paragraph}>
          Our personalized treatment and our experience. in the labor market
          allow us to offer you a quality and efficient service.
        </p>

        <h2 className={styles.secondTitle}>
          Why
          <span className={styles.bold}> join our team?</span>
        </h2>

        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <h2 className={styles.subtitle}>
              Access to exclusive job opportunities
            </h2>
            <p className={styles.paragraphCard}>
              Thanks to our extensive network of contacts with companies, we can
              give you access to vacancies that are not available to the general
              public nor are they found in traditional job search sites.
            </p>
          </div>
          <div className={styles.card}>
            <h2 className={styles.subtitle}>Specialized advice</h2>
            <p className={styles.paragraphCard}>
              Professional advice to improve your profile and increase the
              chances of success
            </p>
          </div>
          <div className={styles.card}>
            <h2 className={styles.subtitle}>Greater visibility</h2>
            <p className={styles.paragraphCard}>
              Your profile will be presented in a professional manner to
              employing companies. This will increase your visibility and will
              give you a competitive advantage against other candidates.
            </p>
          </div>
          <div className={styles.card}>
            <h2 className={styles.subtitle}>Save of time and effort</h2>
            <p className={styles.paragraphCard}>
              We take care of looking for opportunities jobs that fit your
              profile, saving you time and effort in the process.
            </p>
          </div>
          <div className={styles.card}>
            <h2 className={styles.subtitle}>Confidentiality</h2>
            <p className={styles.paragraphCard}>
              We respect your privacy at all times. Your personal and
              professional information will be treated with the utmost
              discretion.
            </p>
          </div>

          <div className={styles.featuredCard}>
            <p className={styles.featuredCardSubtitle}>
              <span className={styles.bold}>Go Talents</span> adds all the
              necessary elements so that you can perform work according to
              company requirements
            </p>
            <button className={styles.button}>Join Our Team</button>
          </div>

          <div className={styles.imagesContainer}>
            <img
              src={woman_image}
              alt="woman_image"
              className={styles.woman_image}
            />
            <img
              src={coworkers_image}
              alt="coworkers_image"
              className={styles.coworkers_image}
            />
          </div>
        </div>
      </div>

      <div className={styles.thirdContainer}>
        <div className={styles.title_body_container}>
          <h2 className={styles.thirdTitle}>
            How does it work our <br />
            <span className={styles.bold}> process recruitment? </span>
          </h2>
          <div class={styles.rectangle}></div>
        </div>
      </div>
    </div>
  );
};

export default Talents;
