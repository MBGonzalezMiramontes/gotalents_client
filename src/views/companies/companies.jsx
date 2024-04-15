import React, { useState } from "react";
import top_image from "../../images/companies_image.png";
import styles from "./companies.module.css";
import { useDispatch } from "react-redux";
import { createCompany } from "../../redux/actions/actions";
import validate from "./validation/validation";
import Switch from "../../components/switch/switch";

const Companies = () => {
  const dispatch = useDispatch();
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const [company, setCompany] = useState({
    name: "",
    lastname: "",
    companyName: "",
    category: "",
    email: "",
    phone: "",
  });

  const [error, setError] = useState({
    name: "",
    lastname: "",
    companyName: "",
    category: "",
    email: "",
    phone: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCompany({
      ...company,
      [name]: value,
    });

    validate({ ...company, [name]: value }, name, error, setError);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    validate({ ...company }, error, setError);

    const companyData = {
      ...company,
    };

    // Aquí llama a la acción createCompany con los datos de la compañía
    dispatch(createCompany(companyData))
      .then(() => {
        setAlertMessage("Compañía creada exitosamente");
        setShowAlert(true);
      })
      .catch((error) => {
        console.error("Error al crear la compañía:", error);
      });
  };

  return (
    <div className={styles.mainContainer}>
      <img src={top_image} alt="top_image" className={styles.top_image} />
      <Switch />{" "}
      <div className={styles.firstContainer}>
        <div className={styles.title_body_container}>
          <h1 className={styles.title}>Recruitment service range</h1>
          <p className={styles.paragraph}>
            We understand that each organization is unique and that the right
            workforce can make a difference in business success. <br />
            <br />
            Our commitment is to reduce employment costs while ensuring that you
            have access to the best talents, allowing you to focus on what truly
            matters: takin your business forward.
          </p>

          <div className={styles.cardsContainer}>
            <div className={styles.card1}>
              <h2 className={styles.subtitle}>Large-scale recruitment</h2>
              <p className={styles.paragraphCard}>
                We handle mass hiring processes, ensuring efficiency without
                compromising quality.
              </p>
            </div>
            <div className={styles.card2}>
              <h2 className={styles.subtitle}>Specialized talent hiring</h2>
              <p className={styles.paragraphCard}>
                We locate experts in specific areas to face challenges and
                critical projects.
              </p>
            </div>
            <div className={styles.card3}>
              <h2 className={styles.subtitle}>Executive recruitment</h2>
              <p className={styles.paragraphCard}>
                We identify visionary and strategic leaders who will help propel
                your company towards success.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.secondContainer} ${styles.wavyBorder}`}>
        <div className={styles.title_body_container}>
          <h2 className={styles.secondTitle}>
            Why choose our
            <span className={styles.bold}> recruitment services? </span>
          </h2>
          <p className={styles.paragraphAdjustment}>
            Hiring qualified personnel can be a challenge for companies,
            especially when it comes to sourcing talent from another country.
            <br />
            <br />
            Our recruitment team is prepared to find the most suitable
            candidates for each position.
          </p>

          <div className={styles.tableContainer}>
            <table className={styles.table}>
              <tbody>
                <tr className={styles.tableRow}>
                  <td>
                    <p className={styles.tableHeading}>
                      Access to a broad network of talent
                    </p>
                  </td>
                  <td>
                    <p className={styles.tableContent}>
                      Extensive database of juniors/professionals in various
                      areas, allowing us to find the ideal candidate for each
                      position.
                    </p>
                  </td>
                </tr>
                <tr className={styles.tableRow}>
                  <td>
                    <p className={styles.tableHeading}>
                      Cost and time reduction
                    </p>
                  </td>
                  <td>
                    <p className={styles.tableContent}>
                      Our team handles the entire recruitment process, from the
                      initial search to the final selection. Save up to 50% or
                      more!
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
                      Advanced technologies and rigorous assessment processes to
                      ensure that each candidate not only possesses the
                      necessary technical skills but also the ability to adapt
                      to a constantly changing environment. Presenting them to
                      companies in record.
                    </p>
                  </td>
                </tr>
                <tr className={styles.tableRow}>
                  <td>
                    <p className={styles.tableHeading}>
                      Long-term talent development
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
                    <p className={styles.tableHeading}>Guidance and support</p>
                  </td>
                  <td>
                    <p className={styles.tableContent}>
                      We provide guidance and support throughout the hiring
                      process, ensuring that both companies and candidates are
                      satisfied with the choice and employment terms.
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
                      {/* We ensure utmost discretion and maintain professional
                      conduct throughout all interactions and engagements. */}
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

         
            <h2 className={styles.secondTitle}>
              Will
              <span className={styles.bold}> my talenters </span>
              work exclusively for me?{" "}
            </h2>
            <p className={styles.paragraphAdjustment}>
              Hiring qualified personnel can be a challenge for companies,
              especially when it comes to sourcing talent from another country.
              <br />
              <br />
              Our recruitment team is prepared to find the most suitable
              candidates for each position.
            </p>
          </div>
   

        <div className={styles.thirdContainer}>
          <div className={styles.title_body_container}>
            <h2 className={styles.thirdTitle}>
              How does our <br />
              <span className={styles.bold}>process recruitment </span>
              work?{" "}
            </h2>
            <div className={styles.rectangle}></div>
          </div>
        </div>

        <div className={styles.fourthContainer}>
          <h2 className={styles.secondTitle}>Contact us</h2>
          {showAlert && (
            <div className={styles.alert}>
              {alertMessage}
              <button onClick={() => setShowAlert(false)}>Cerrar</button>
            </div>
          )}
          <form onSubmit={handleSubmit} className={styles.form}>
            <label className={styles.label}>Nombre:</label>
            <input
              name="name"
              onChange={handleChange}
              type="text"
              placeholder="Mi nombre"
            />
            <label className={styles.formErrors}>{error.name}</label>

            <label className={styles.label}>Apellido:</label>
            <input
              name="lastname"
              onChange={handleChange}
              type="text"
              placeholder="Mi apellido"
            />

            <label className={styles.formErrors}>{error.lastname}</label>

            <label className={styles.label}>Compañía:</label>
            <input
              name="companyName"
              onChange={handleChange}
              type="text"
              placeholder="Nombre de la compañía"
            />
            <label className={styles.formErrors}>{error.companyName}</label>

            <label className={styles.label}>Rubro:</label>
            <input
              name="category"
              onChange={handleChange}
              type="text"
              placeholder="Ej: Gastronomía"
            />
            <label className={styles.formErrors}>{error.category}</label>

            <label className={styles.label}>Correo electrónico:</label>
            <input
              name="email"
              onChange={handleChange}
              type="text"
              placeholder="Correo electrónico de contacto"
            />
            <label className={styles.formErrors}>{error.email}</label>

            <label className={styles.label}>Teléfono:</label>
            <input
              name="phone"
              onChange={handleChange}
              type="text"
              placeholder="(Opcional) Teléfono de contacto"
            />
            <label className={styles.formErrors}>{error.phone}</label>
            <button type="submit" className={styles.button}>
              {" "}
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Companies;
