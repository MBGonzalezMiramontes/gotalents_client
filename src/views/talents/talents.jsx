import React from "react";
import top_image from "../../images/talent_image.png";
import styles from "./talents.module.css";
import woman_image from "../../images/woman.png";
import coworkers_image from "../../images/coworkers.png";
import white_logo from "../../images/GoTalents-Logo-16.png";

const Talents = () => {
  const handleJoinOurTeamClick = () => {
    const workWithUsTitle = document.getElementById("workWithUsTitle");
    workWithUsTitle.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.container}>
      <img src={top_image} alt="top_image" className={styles.top_image} />
      <div className={styles.title_body_container}>
        <h1 className={styles.title}>Work with us</h1>
        <p className={styles.paragraph}>
          Our personalized treatment and our experience. in the labor market
          allow us to offer you a quality and efficient service.
        </p>

        <div>
          <img
            src={white_logo}
            alt="white_logo"
            className={styles.white_logo}
          />
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
                Thanks to our extensive network of contacts with companies, we
                can give you access to vacancies that are not available to the
                general public nor are they found in traditional job search
                sites.
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
          </div>

          <div className={styles.featuredCard}>
            <p className={styles.featuredCardSubtitle}>
              <span className={styles.bold}>Go Talents</span> adds all the
              necessary elements so that you can perform work according to
              company requirements
            </p>
            <button className={styles.button} onClick={handleJoinOurTeamClick}>
              Join Our Team
            </button>
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
        <div className={styles.featuredContainer}>
          <div className={styles.title_body_container}>
            <h2 className={styles.thirdTitle}>
              How does it work our <br />
              <span className={styles.bold}> process recruitment? </span>
            </h2>
            <div class={styles.rectangle}></div>
          </div>
        </div>

        <div className={styles.fourthContainer}>
          <h2 className={styles.secondTitle} id="workWithUsTitle">
            Work with us
          </h2>

          <form
            // onSubmit={handleSubmit}
            className={styles.form}
          >
            <label className={styles.label}>Nombre:</label>
            <input
              name="name"
              // onChange={handleChange}
              type="text"
              placeholder="Mi nombre"
            />
            {/* <label className={styles.formErrors}>{error.name}</label> */}

            <label className={styles.label}>Apellido:</label>
            <input
              name="lastname"
              // onChange={handleChange}
              type="text"
              placeholder="Mi apellido"
            />
            {/* <label className={styles.formErrors}>{error.lastname}</label> */}

            <label className={styles.label}>Carrera:</label>
            <input
              name="career"
              // onChange={handleChange}
              type="text"
            />
            {/* <label className={styles.formErrors}>{error.nationality}</label> */}

            <label className={styles.label}>Correo electrónico:</label>
            <input
              name="email"
              // onChange={handleChange}
              type="text"
              placeholder="Mi correo electrónico"
            />
            {/* <label className={styles.formErrors}>{error.nationality}</label> */}

            <label className={styles.label}>Teléfono:</label>
            <input
              name="phone"
              // onChange={handleChange}
              type="text"
              placeholder="Teléfono de contacto (opcional)"
            />
            {/* <label className={styles.formErrors}>{error.dob}</label> */}

            <label className={styles.label}>Curriculim Vite:</label>
            <input
              name="cv"
              // onChange={handleChange}
              type="text"
              placeholder="Adjuntar mi curriculim vitae"
            />
            <button className={styles.buttonUpload}>Cargar</button>
            {/* <label className={styles.formErrors}>{error.dob}</label> */}

            <label className={styles.label}>Cerificado de Idioma:</label>
            <input
              name="laguage"
              // onChange={handleChange}
              type="text"
              placeholder="Adjuntar mi certificado de idioma (opcional)"
            />
            <button className={styles.buttonUpload}>Cargar</button>
            {/* <label className={styles.formErrors}>{error.dob}</label> */}
          </form>
          <button className={styles.buttonSubmit}>Enviar</button>
        </div>
      </div>
    </div>
  );
};

export default Talents;
