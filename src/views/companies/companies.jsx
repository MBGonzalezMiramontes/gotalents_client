import React, { useState, useEffect, useCallback } from "react";
import top_image from "../../images/companies_image.png";
import spanish_video from "../../videos/spanish_video.mp4";
import english_video from "../../videos/english_video.mp4";
import styles from "./companies.module.css";
import { useDispatch, useSelector } from "react-redux";
import { createCompany } from "../../redux/actions/actions";
import validate from "./validation/validation";
import Swal from "sweetalert2";

const Companies = () => {
  const dispatch = useDispatch();
  const isEnglish = useSelector((state) => state.isEnglish);
  const initialCompanyState = {
    name: "",
    lastname: "",
    companyName: "",
    category: "",
    email: "",
    phone: "",
  };

  const [company, setCompany] = useState(initialCompanyState);

  const [error, setError] = useState({
    name: "",
    lastname: "",
    companyName: "",
    category: "",
    email: "",
    phone: "",
  });

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;
    setCompany((prevCompany) => ({
      ...prevCompany,
      [name]: value,
    }));
    validate({ ...company, [name]: value }, name, error, setError);
  }, [company, error]);

  const isFormValid =
    Object.values(error).every((val) => val === "") &&
    Object.values(company).every((val) => val !== "");

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      validate({ ...company }, error, setError);

      const companyData = {
        ...company,
      };

      Swal.fire({
        title: isEnglish ? "Submit Form?" : "¿Enviar formulario?",
        text: isEnglish
          ? "Are you sure you want to submit the form?"
          : "¿Estás seguro de que quieres enviar el formulario?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: isEnglish ? "Yes, submit" : "Sí, enviar",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(createCompany(companyData))
            .then(() => {
              Swal.fire({
                icon: "success",
                title: isEnglish ? "Success!" : "¡Éxito!",
                text: isEnglish
                  ? "Thank you. We will contact you shortly."
                  : "Muchas gracias. Nos pondremos en contacto a la brevedad.",
              }).then(() => {
                // Limpiar los campos después del éxito
                setCompany({
                  name: "",
                  lastname: "",
                  companyName: "",
                  category: "",
                  email: "",
                  phone: "",
                });
                setError({
                  name: "",
                  lastname: "",
                  companyName: "",
                  category: "",
                  email: "",
                  phone: "",
                });
              });
            })
            .catch((error) => {
              console.error("Error al crear la compañía:", error);
              Swal.fire({
                icon: "error",
                title: isEnglish ? "Oops!" : "¡Ups!",
                text: isEnglish
                  ? "You have already registered your email previously."
                  : "Ya has registrado tu email anteriormente.",
              });
            });
        }
      });
    },
    [company, dispatch, error, isEnglish]
  );

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    handleScrollToTop();
  }, []);

  return (
    <div className={styles.mainContainer}>
      <img src={top_image} alt="top_image" className={styles.top_image} />

      {isEnglish ? (
        <>
          <div className={styles.firstContainer}>
            <div className={styles.title_body_container}>
              <h1 className={styles.title}>Recruitment service range</h1>
              <p className={styles.paragraph}>
                We understand that each organization is unique and that the
                right workforce can make a difference in business success.{" "}
                <br />
                <br />
                Our commitment is to reduce employment costs while ensuring that
                you have access to the best talents, allowing you to focus on
                what truly matters: takin your business forward.
              </p>

              <div className={styles.cardsContainer}>
                <div className={styles.card1C}>
                  <div className={styles.card1}>
                    <h2 className={styles.subtitle}>Large-scale recruitment</h2>
                    <p className={styles.paragraphCard}>
                      We handle mass hiring processes, ensuring efficiency
                      without compromising quality.
                    </p>
                  </div>
                </div>

                <div className={styles.card2C}>
                  <div className={styles.card2}>
                    <h2 className={styles.subtitle}>
                      Specialized talent hiring
                    </h2>
                    <p className={styles.paragraphCard}>
                      We locate experts in specific areas to face challenges and
                      critical projects.
                    </p>
                  </div>
                </div>

                <div className={styles.card3C}>
                  <div className={styles.card3}>
                    <h2 className={styles.subtitle}>Executive recruitment</h2>
                    <p className={styles.paragraphCard}>
                      We identify visionary and strategic leaders who will help
                      propel your company towards success.
                    </p>
                  </div>
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
                especially when it comes to sourcing talent from another
                country.
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
                          areas, allowing us to find the ideal candidate for
                          each position.
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
                          Our team handles the entire recruitment process, from
                          the initial search to the final selection. Save up to
                          50% or more!
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
                          Advanced technologies and rigorous assessment
                          processes to ensure that each candidate not only
                          possesses the necessary technical skills but also the
                          ability to adapt to a constantly changing environment.
                          Presenting them to companies in record.
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
                          We offer talent development programs to ensure that
                          your team grows and adapts as business needs evolve.
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tableRow}>
                      <td>
                        <p className={styles.tableHeading}>
                          Guidance and support
                        </p>
                      </td>
                      <td>
                        <p className={styles.tableContent}>
                          We provide guidance and support throughout the hiring
                          process, ensuring that both companies and candidates
                          are satisfied with the choice and employment terms.
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
                especially when it comes to sourcing talent from another
                country.
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
                <video className={styles.video} controls>
                  <source src={english_video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            <div className={styles.fourthContainer}>
              <h2 className={styles.secondTitle}>Contact us</h2>
              <form onSubmit={handleSubmit} className={styles.form}>
                <label className={styles.label}>Name:</label>
                <input
                  name="name"
                  value={company.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="My name"
                />
                <label className={styles.formErrors}>{error.name}</label>

                <label className={styles.label}>Last name:</label>
                <input
                  name="lastname"
                  value={company.lastname}
                  onChange={handleChange}
                  type="text"
                  placeholder="My lastname"
                />

                <label className={styles.formErrors}>{error.lastname}</label>

                <label className={styles.label}>Company:</label>
                <input
                  name="companyName"
                  onChange={handleChange}
                  value={company.companyName}
                  type="text"
                  placeholder="Company's name"
                />
                <label className={styles.formErrors}>{error.companyName}</label>

                <label className={styles.label}>Category:</label>
                <input
                  name="category"
                  onChange={handleChange}
                  value={company.category}
                  type="text"
                  placeholder="e.g.: Gastronomy"
                />
                <label className={styles.formErrors}>{error.category}</label>

                <label className={styles.label}>E-mail:</label>
                <input
                  name="email"
                  onChange={handleChange}
                  value={company.email}
                  type="text"
                  placeholder="E.g.: myname@example.com"
                />
                <label className={styles.formErrors}>{error.email}</label>

                <label className={styles.label}>Phone number:</label>
                <input
                  name="phone"
                  onChange={handleChange}
                  value={company.phone}
                  type="text"
                  placeholder="Contact phone number"
                />
                <label className={styles.formErrors}>{error.phone}</label>
                <button
                  type="submit"
                  className={styles.button}
                  disabled={!isFormValid}
                >
                  {" "}
                  Submit
                </button>
              </form>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={styles.firstContainer}>
            <div className={styles.title_body_container}>
              <h1 className={styles.title}>
                Gama de servicios de reclutamiento{" "}
              </h1>
              <p className={styles.paragraph}>
                Entendemos que cada organización es única y que la fuerza de
                trabajo adecuada puede marcar la diferencia en el éxito
                empresarial.
                <br />
                <br />
                Nuestro compromiso es reducir los costos de empleo y al mismo
                tiempo garantizar que usted tenga acceso a los mejores talentos,
                lo que le permitirá concentrarse en lo que realmente importa:
                impulsar su negocio hacia adelante.
              </p>

              <div className={styles.cardsContainer}>
                <div className={styles.card1C}>
                  <div className={styles.card1}>
                    <h2 className={styles.subtitle}>
                      Reclutamiento a gran escala
                    </h2>
                    <p className={styles.paragraphCard}>
                      Manejamos procesos de contratación masiva, garantizando
                      eficiencia sin comprometer la calidad.
                    </p>
                  </div>
                </div>

                <div className={styles.card2C}>
                  <div className={styles.card2}>
                    <h2 className={styles.subtitle}>
                      Contratación de talento especializado
                    </h2>
                    <p className={styles.paragraphCard}>
                      Encontramos expertos en áreas específicas para abordar
                      desafíos y proyectos críticos.
                    </p>
                  </div>
                </div>

                <div className={styles.card3C}>
                  <div className={styles.card3}>
                    <h2 className={styles.subtitle}>Reclutamiento ejecutivo</h2>
                    <p className={styles.paragraphCard}>
                      Identificamos líderes visionarios y estratégicos que
                      ayudarán a impulsar su empresa hacia el éxito.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.secondContainer} ${styles.wavyBorder}`}>
            <div className={styles.title_body_container}>
              <h2 className={styles.secondTitle}>
                ¿Por qué elegir nuestros
                <span className={styles.bold}> servicios de reclutamiento</span>
                ?
              </h2>
              <p className={styles.paragraphAdjustment}>
                Contratar personal cualificado puede ser un desafío para las
                empresas, especialmente cuando se trata de buscar talento en
                otro país.
                <br />
                <br />
                Nuestro equipo de reclutamiento está preparado para encontrar a
                los más adecuados para cada puesto.
              </p>

              <div className={styles.tableContainer}>
                <table className={styles.table}>
                  <tbody>
                    <tr className={styles.tableRow}>
                      <td>
                        <p className={styles.tableHeading}>
                          Acceso a una amplia red de talento
                        </p>
                      </td>
                      <td>
                        <p className={styles.tableContent}>
                          Extensa base de datos de juniors/profesionales en
                          diversas áreas, lo que nos permite encontrar el
                          candidato ideal para cada puesto.
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tableRow}>
                      <td>
                        <p className={styles.tableHeading}>
                          Reducción de costos y tiempo:
                        </p>
                      </td>
                      <td>
                        <p className={styles.tableContent}>
                          Nuestro equipo se encarga de todo el proceso de
                          reclutamiento, desde la búsqueda inicial hasta la
                          selección final. ¡Ahorra hasta un 50% o más!
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tableRow}>
                      <td>
                        <p className={styles.tableHeading}>
                          Proceso de reclutamiento eficiente
                        </p>
                      </td>
                      <td>
                        <p className={styles.tableContent}>
                          Tecnologías avanzadas y procesos de evaluación
                          rigurosos para asegurar que cada candidato no solo
                          posea las habilidades técnicas necesarias, sino
                          también la capacidad de adaptarse a un entorno en
                          constante cambio. Presentandolos a las empresas en un
                          tiempo récord.
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tableRow}>
                      <td>
                        <p className={styles.tableHeading}>
                          Desarrollo de talento a largo plazo
                        </p>
                      </td>
                      <td>
                        <p className={styles.tableContent}>
                          Ofrecemos programas de desarrollo de talento para
                          garantizar que su equipo crezca y se adapte a medida
                          que evolucionan las necesidades empresariales.
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tableRow}>
                      <td>
                        <p className={styles.tableHeading}>
                          Asesoramiento y apoyo
                        </p>
                      </td>
                      <td>
                        <p className={styles.tableContent}>
                          Brindamos asesoramiento y apoyo a lo largo de todo el
                          proceso de contratación, asegurándonos de que tanto
                          las empresas como los candidatos estén satisfechos con
                          la elección y los términos de empleo.
                        </p>
                      </td>
                    </tr>
                    <tr className={styles.tableRow}>
                      <td>
                        <p className={styles.tableHeading}>
                          Confidencialidad y profesionalismo en todo momento
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
                ¿<span className={styles.bold}>Mis talentos </span>trabajarán
                exclusivamente para mí?{" "}
              </h2>
              <p className={styles.paragraphAdjustment}>
                Absolutamente, los miembros del equipo que contrate estarán
                dedicados a sus proyectos a tiempo completo y de manera
                permanente.
                <br />
                <br />
                No son recursos compartidos y operarán exclusivamente bajo su
                gestión. Usted tiene la autonomía para asignar proyectos
                específicos, establecer plazos y supervisar su trabajo, de
                manera similar a cualquier otro empleado interno.
              </p>
            </div>

            <div className={styles.thirdContainer}>
              <div className={styles.title_body_container}>
                <h2 className={styles.thirdTitle}>
                  ¿Cómo funciona nuestro <br />
                  <span className={styles.bold}>
                    proceso de reclutamiento?{" "}
                  </span>
                </h2>
                <video className={styles.video} controls>
                  <source src={spanish_video} type="video/mp4" />
                  Su navegador no soporta la etiqueta de vídeo.
                </video>
              </div>
            </div>

            <div className={styles.fourthContainer}>
              <h2 className={styles.secondTitle}>Contactanos</h2>
              <form onSubmit={handleSubmit} className={styles.form}>
                <label className={styles.label}>Nombre:</label>
                <input
                  name="name"
                  onChange={handleChange}
                  value={company.name}
                  type="text"
                  placeholder="Mi nombre"
                />
                <label className={styles.formErrors}>{error.name}</label>

                <label className={styles.label}>Apellido:</label>
                <input
                  name="lastname"
                  onChange={handleChange}
                  value={company.lastname}
                  type="text"
                  placeholder="Mi apellido"
                />

                <label className={styles.formErrors}>{error.lastname}</label>

                <label className={styles.label}>Compañía:</label>
                <input
                  name="companyName"
                  onChange={handleChange}
                  value={company.companyName}
                  type="text"
                  placeholder="Nombre de la compañía"
                />
                <label className={styles.formErrors}>{error.companyName}</label>

                <label className={styles.label}>Rubro:</label>
                <input
                  name="category"
                  onChange={handleChange}
                  value={company.category}
                  type="text"
                  placeholder="Ej: Gastronomía"
                />
                <label className={styles.formErrors}>{error.category}</label>

                <label className={styles.label}>Correo electrónico:</label>
                <input
                  name="email"
                  onChange={handleChange}
                  type="text"
                  placeholder="Ej: micorreo@ejemplo.com"
                />
                <label className={styles.formErrors}>{error.email}</label>

                <label className={styles.label}>Número de teléfono:</label>
                <input
                  name="phone"
                  onChange={handleChange}
                  value={company.phone}
                  type="text"
                  placeholder="Número de teléfono de contacto"
                />
                <label className={styles.formErrors}>{error.phone}</label>
                <button
                  type="submit"
                  className={styles.button}
                  disabled={!isFormValid}
                >
                  {" "}
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Companies;
