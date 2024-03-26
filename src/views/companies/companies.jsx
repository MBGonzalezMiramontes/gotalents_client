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
          ideal partner to meet your needs of talent and take your organization
          to the next level.
        </p>

        <div className={styles.cardsContainer}>
          <div className={styles.card1}>
            <h2 className={styles.subtitle}>
              Large scale
              <br />
              recruitment
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

      <div className={styles.secondContainer}></div>
      <div className={styles.title_body_container}>
        <h2 className={styles.secondTitle}>
          Why choose our <br />
          <span className={styles.bold}> recruitment services? </span>
        </h2>
        <p className={styles.paragraph}>
          Hiring qualified staff can be a challenge for companies, especially
          when it comes to searching for talent in another country.
          <br />
          <br />
          Our recruiting team is prepared to find the most suitable people for
          each position.
        </p>

        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <tbody>
              <tr className={styles.tableRow}>
                <td>
                  <p className={styles.tableHeading}>
                    Access to a wide network of professionals/talent
                  </p>
                </td>
                <td>
                  <p className={styles.tableContent}>
                    Extensive database of junior/professional profiles in
                    various areas, allowing us to find the ideal candidate for
                    each position.
                  </p>
                </td>
              </tr>
              <tr className={styles.tableRow}>
                <td>
                  <p className={styles.tableHeading}>Cost and time reduction</p>
                </td>
                <td>
                  <p className={styles.tableContent}>
                    Our team handles the entire recruitment process, from the
                    initial search to the final selection.
                  </p>
                </td>
              </tr>
              <tr className={styles.tableRow}>
                <td>
                  <p className={styles.tableHeading}>
                    Efficient recruitment process
                  </p>
                </td>
                <td>
                  <p className={styles.tableContent}>
                    Advanced technologies and rigorous evaluation processes to
                    ensure each candidate not only possesses the necessary
                    technical skills, but also the ability to adapt to a
                    constantly changing environment. Presenting them to
                    companies in record time.
                  </p>
                </td>
              </tr>
              <tr className={styles.tableRow}>
                <td>
                  <p className={styles.tableHeading}>
                    Long-term Talent Development
                  </p>
                </td>
                <td>
                  <p className={styles.tableContent}>
                    We offer talent development programs to ensure that your
                    team grows and adapts as business needs evolve.
                  </p>
                </td>
              </tr>
              <tr className={styles.tableRow}>
                <td>
                  <p className={styles.tableHeading}>Advice and support</p>
                </td>
                <td>
                  <p className={styles.tableContent}>
                    We provide advice and support throughout the hiring process,
                    ensuring that both companies and candidates are satisfied
                    with the choice and terms of employment.
                  </p>
                </td>
              </tr>
              <tr className={styles.tableRow}>
                <td>
                  <p className={styles.tableHeading}>
                    Confidentiality and professionalism at all times
                  </p>
                </td>
                <td>
                  <p className={styles.tableContent}>
                    We ensure utmost discretion and maintain professional
                    conduct throughout all interactions and engagements.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className={styles.thirdContainer}>
        <div className={styles.title_body_container}>
          <h2 className={styles.thirdTitle}>
            How does it work our <br />
            <span className={styles.bold}>  process recruitment? </span>
          </h2>
          <div class={styles.rectangle}></div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
