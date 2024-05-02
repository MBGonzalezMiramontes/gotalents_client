import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import top_image from "../../images/talent_image.png";
import styles from "./talents.module.css";
import woman_image from "../../images/woman.png";
import coworkers_image from "../../images/coworkers.png";
import white_logo from "../../images/GoTalents-Logo-16.png";
import { createTalent } from "../../redux/actions/actions";
import validate from "./validation/validation";
import spanish_video from "../../videos/spanish_video.mp4";
import english_video from "../../videos/english_video.mp4";
import Swal from "sweetalert2";

const Talents = () => {
  const dispatch = useDispatch();
  const isEnglish = useSelector((state) => state.isEnglish);
  const [cvFile, setCvFile] = useState(null);
  const [languageFile, setLanguageFile] = useState(null);
  const [talent, setTalent] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    position: "",
    cvFile: "",
    languageFile: "",
  });
  const [error, setError] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    position: "",
    cvFile: "",
    languageFile: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTalent({
      ...talent,
      [name]: value,
    });
    if (name === "cvFile") {
      setCvFile(event.target.files[0]);
    } else if (name === "languageFile") {
      setLanguageFile(event.target.files[0]);
    }
    // Llama a validate después de que se actualiza el estado del talent y el error
    validate({ ...talent, [name]: value }, name, error, setError);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    validate({ ...talent }, error, setError);
    const hasErrors = Object.values(error).some(
      (errorMessage) => errorMessage !== ""
    );
    if (!hasErrors) {
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
          const talentData = {
            ...talent,
            cvFile,
            languageFile,
          };

          dispatch(createTalent(talentData))
            .then(() => {
              Swal.fire({
                title: isEnglish ? "Success!" : "¡Éxito!",
                text: isEnglish
                  ? "Thank you. We will contact you shortly."
                  : "Muchas gracias. Nos pondremos en contacto a la brevedad.",
                icon: "success",
              }).then(() => {
                // Limpiar los campos después del éxito
                setTalent({
                  name: "",
                  lastname: "",
                  email: "",
                  phone: "",
                  position: "",
                  cvFile: "", // Cambiar null por ""
                  languageFile: "", // Cambiar null por ""
                });
                setError({
                  name: "",
                  lastname: "",
                  email: "",
                  phone: "",
                  position: "",
                  cvFile: "",
                  languageFile: "",
                });
              });
            })
            .catch((error) => {
              console.error("Ups, no hemos podido enviar tu solicitud:", error);
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
    }
  };

  const handleJoinOurTeamClick = () => {
    const workWithUsTitle = document.getElementById("workWithUsTitle");
    workWithUsTitle.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.container}>
      <img src={top_image} alt="top_image" className={styles.top_image} />

      {isEnglish ? (
        <>
          <div className={styles.title_body_container}>
            <h1 className={styles.title}>Where your career soars!</h1>
            <p className={styles.paragraph}>
              Our personalized approach and market expertise enable us to
              provide you with a high-quality and efficient service.
            </p>

            <div>
              <img
                src={white_logo}
                alt="white_logo"
                className={styles.white_logo}
              />
              <h2 className={styles.secondTitle}>
                Why
                <span className={styles.bold}> join our family?</span>
              </h2>

              <div className={styles.cardsContainer}>
                <div className={styles.card}>
                  <h2 className={styles.subtitle}>
                    Access to exclusive job opportunities
                  </h2>
                  <p className={styles.paragraphCard}>
                    Thanks to our extensive network of contacts with companies,
                    we can provide you access to job openings that are not
                    available to the general public or listed on traditional job
                    search websites.
                  </p>
                </div>
                <div className={styles.card}>
                  <h2 className={styles.subtitle}>Specialized guidance</h2>
                  <p className={styles.paragraphCard}>
                    Professional guidance to enhance your profile and increase
                    your chances of success.
                  </p>
                </div>
                <div className={styles.card}>
                  <h2 className={styles.subtitle}>Greater visibility</h2>
                  <p className={styles.paragraphCard}>
                    Your profile will be professionally presented to hiring
                    companies, enhancing your visibility and providing you with
                    a competitive edge over other candidates.{" "}
                  </p>
                </div>
                <div className={styles.card}>
                  <h2 className={styles.subtitle}>Time and effort savings</h2>
                  <p className={styles.paragraphCard}>
                    We take care of finding job opportunities that match your
                    profile, saving you time and effort in the process.
                  </p>
                </div>
                <div className={styles.card}>
                  <h2 className={styles.subtitle}>Confidentiality</h2>
                  <p className={styles.paragraphCard}>
                    We respect your privacy and confidentiality at all times.
                    Your personal and professional information will be treated
                    with the utmost discretion.
                  </p>
                </div>
              </div>

              <div className={styles.featuredCard}>
                <p className={styles.featuredCardSubtitle}>
                  <span className={styles.bold}>Go Talents</span> provides you
                  with all the necessary tools to enable you to perform the job
                  accorging to the company's requirements.
                </p>
                <button
                  className={styles.button}
                  onClick={handleJoinOurTeamClick}
                >
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
          <div className={styles.secondCardsContainer}>
            <div className={styles.card}>
              <h2 className={styles.subtitle}>Professional Development</h2>
              <p className={styles.paragraphCard}>
                Continuous learning is fundamental to our culture. Benefit from
                ongoing training programs, mentoring opportunities, and
                resources to enhance your skills and stay at the forefront of
                your field.
              </p>
            </div>
            <div className={styles.card}>
              <h2 className={styles.subtitle}>Best salaries</h2>
              <p className={styles.paragraphCard}>2 days off.</p>
            </div>
            <div className={styles.card}>
              <h2 className={styles.subtitle}>Work-life balance</h2>
              <p className={styles.paragraphCard}>
                Continuous learning is fundamental to our culture. Benefit from
                ongoing training programs, mentoring opportunities, and
                resources to enhance your skills and stay at the forefront of
                your field.
              </p>
            </div>
          </div>
          <div className={styles.thirdContainer}>
            <div className={styles.featuredContainer}>
              <div className={styles.title_body_container}>
                <h2 className={styles.thirdTitle}>
                  How does our <br />
                  <span className={styles.bold}> process recruitment </span>
                  work?
                </h2>
                <video className={styles.video} controls>
                  <source src={english_video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            <div className={styles.fourthContainer}>
              <h2 className={styles.formTitle} id="workWithUsTitle">
                Work with us
              </h2>

              <form
                onSubmit={handleSubmit}
                className={styles.form}
                action="/talent"
                method="POST"
                encType="multipart/form-data"
              >
                <label className={styles.label}>Name:</label>
                <input
                  value={talent.name}
                  name="name"
                  onChange={handleChange}
                  type="text"
                  placeholder="My name"
                />
                <label className={styles.formErrors}>{error.name}</label>

                <label className={styles.label}>Last name:</label>
                <input
                  value={talent.lastname}
                  name="lastname"
                  onChange={handleChange}
                  type="text"
                  placeholder="My lastname"
                />
                <label className={styles.formErrors}>{error.lastname}</label>

                <label className={styles.label}>Position:</label>
                <input
                  value={talent.position}
                  name="position"
                  onChange={handleChange}
                  type="text"
                  placeholder="E.g.: Architect"
                />
                <label className={styles.formErrors}>{error.position}</label>

                <label className={styles.label}>E-mail:</label>
                <input
                  value={talent.email}
                  name="email"
                  onChange={handleChange}
                  type="text"
                  placeholder="E.g.: myname@example.com"
                />
                <label className={styles.formErrors}>{error.email}</label>

                <label className={styles.label}>Phone number:</label>
                <input
                  value={talent.phone}
                  name="phone"
                  onChange={handleChange}
                  type="text"
                  placeholder="Contact phone number"
                />
                <label className={styles.formErrors}>{error.phone}</label>

                <label className={styles.label}>Currículum Vitae:</label>
                <p className={styles.text}>Pdf format</p>
                <div className={styles.fileButton}>
                  <input
                    value={talent.cvFile}
                    name="cvFile"
                    onChange={handleChange}
                    type="file"
                    accept=".pdf"
                  />
                </div>
                <label className={styles.formErrors}>{error.cvFile}</label>

                <label className={styles.label}>Language Certificate:</label>
                <p className={styles.text}>(Optional)</p>
                <p className={styles.text}>Pdf format</p>
                <div className={styles.fileButton}>
                  <input
                    value={talent.languageFile}
                    name="languageFile"
                    onChange={handleChange}
                    type="file"
                    accept=".pdf"
                  />
                </div>
                <label className={styles.formErrors}>
                  {error.languageFile}
                </label>
                <button
                  disabled={
                    !talent.name ||
                    !talent.lastname ||
                    !talent.email ||
                    !talent.phone ||
                    !talent.position ||
                    !!error.name ||
                    !!error.lastname ||
                    !!error.email ||
                    !!error.phone ||
                    !!error.position ||
                    !cvFile
                  }
                  type="submit"
                  className={styles.buttonSubmit}
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
          <div className={styles.title_body_container}>
            <h1 className={styles.title}>¡Donde tu carrera despega!</h1>
            <p className={styles.paragraph}>
              Nuestro enfoque personalizado y nuestra experiencia en el mercado
              laboral nos permiten ofrecerte un servicio de calidad y eficiente.
            </p>

            <div>
              <img
                src={white_logo}
                alt="white_logo"
                className={styles.white_logo}
              />
              <h2 className={styles.secondTitle}>
                ¿Por qué
                <span className={styles.bold}> unirte a nuestra familia</span>?
              </h2>

              <div className={styles.cardsContainer}>
                <div className={styles.card}>
                  <h2 className={styles.subtitle}>
                    Acceso a oportunidades laborales exclusivas
                  </h2>
                  <p className={styles.paragraphCard}>
                    Gracias a nuestra amplia red de contactos con empresas,
                    podemos brindarte acceso a vacantes que no se encuentran
                    disponibles al público en general ni se encuentran en los
                    sitios de búsqueda de empleo tradicionales.
                  </p>
                </div>
                <div className={styles.card}>
                  <h2 className={styles.subtitle}>
                    Asesoramiento especializado
                  </h2>
                  <p className={styles.paragraphCard}>
                    Asesoramiento profesional para mejorar tu perfil y aumentar
                    las posibilidades de éxito.
                  </p>
                </div>
                <div className={styles.card}>
                  <h2 className={styles.subtitle}>Mayor visibilidad</h2>
                  <p className={styles.paragraphCard}>
                    Tu perfil será presentado de manera profesional a las
                    empresas empleadoras. Esto aumentará tu visibilidad y te
                    dará una ventaja competitiva frente a otros candidatos.
                  </p>
                </div>
                <div className={styles.card}>
                  <h2 className={styles.subtitle}>
                    Ahorro de tiempo y esfuerzo
                  </h2>
                  <p className={styles.paragraphCard}>
                    Nos encargamos de buscar oportunidades laborales que se
                    ajusten a tu perfil, ahorrándote tiempo y esfuerzo en el
                    proceso.
                  </p>
                </div>
                <div className={styles.card}>
                  <h2 className={styles.subtitle}>Confidencialidad</h2>
                  <p className={styles.paragraphCard}>
                    Respetamos tu privacidad y confidencialidad en todo momento.
                    Tu información personal y profesional será tratada con la
                    máxima discreción.
                  </p>
                </div>
              </div>

              <div className={styles.featuredCard}>
                <p className={styles.featuredCardSubtitle}>
                  <span className={styles.bold}>Go Talents</span> te entrega
                  todas las herramientas necesarias para que puedas realizar el
                  trabajo según lo exigido por la empresa.
                </p>
                <button
                  className={styles.button}
                  onClick={handleJoinOurTeamClick}
                >
                  Unete a nuestro equipo
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
          <div className={styles.secondCardsContainer}>
            <div className={styles.card}>
              <h2 className={styles.subtitle}>Desarrollo profesional</h2>
              <p className={styles.paragraphCard}>
                El aprendizaje continuo es fundamental en nuestra cultura.
                Benefíciate de programas de formación en curso, oportunidades de
                mentoría y recursos para mejorar tus habilidades y mantenerte a
                la vanguardia en tu campo.
              </p>
            </div>
            <div className={styles.card}>
              <h2 className={styles.subtitle}>Los mejores salarios</h2>
              <p className={styles.paragraphCard}>2 días libres</p>
            </div>
            <div className={styles.card}>
              <h2 className={styles.subtitle}>
                Equilibrio entre trabajo y vida
              </h2>
              <p className={styles.paragraphCard}>
                Disfruta de flexibilidad y la posibilidad de trabajar de forma
                remota, asegurándote de poder destacar en tu vida profesional
                sin comprometer tu bienestar personal.
              </p>
            </div>
          </div>
          <div className={styles.thirdContainer}>
            <div className={styles.featuredContainer}>
              <div className={styles.title_body_container}>
                <h2 className={styles.thirdTitle}>
                  ¿Cómo funciona nuestro <br />
                  <span className={styles.bold}>proceso de reclutamiento</span>?
                </h2>
                <video className={styles.video} controls>
                  <source src={spanish_video} type="video/mp4" />
                  Su navegador no soporta la etiqueta de vídeo.
                </video>
              </div>
            </div>

            <div className={styles.fourthContainer}>
              <h2 className={styles.formTitle} id="workWithUsTitle">
                Contactanos
              </h2>

              <form
                onSubmit={handleSubmit}
                className={styles.form}
                action="/talent"
                method="POST"
                encType="multipart/form-data"
              >
                <label className={styles.label}>Nombre:</label>
                <input
                  name="name"
                  value={talent.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Mi nombre"
                />
                <label className={styles.formErrors}>{error.name}</label>

                <label className={styles.label}>Apellido:</label>
                <input
                  name="lastname"
                  value={talent.lastname}
                  onChange={handleChange}
                  type="text"
                  placeholder="Mi apellido"
                />
                <label className={styles.formErrors}>{error.lastname}</label>

                <label className={styles.label}>Carrera:</label>
                <input
                  name="position"
                  value={talent.position}
                  onChange={handleChange}
                  type="text"
                  placeholder="Ej: Arquitecto"
                />
                <label className={styles.formErrors}>{error.position}</label>

                <label className={styles.label}>Correo electrónico:</label>
                <input
                  name="email"
                  value={talent.email}
                  onChange={handleChange}
                  type="text"
                  placeholder="Ej: micorreo@ejemplo.com"
                />
                <label className={styles.formErrors}>{error.email}</label>

                <label className={styles.label}>Teléfono:</label>
                <input
                  name="phone"
                  value={talent.phone}
                  onChange={handleChange}
                  type="text"
                  placeholder="Teléfono de contacto"
                />
                <label className={styles.formErrors}>{error.phone}</label>

                <label className={styles.label}>Currículum Vitae:</label>
                <p className={styles.text}>Formato .pdf</p>
                <div className={styles.fileButton}>
                  <input
                    value={talent.cvFile}
                    name="cvFile"
                    onChange={handleChange}
                    type="file"
                    accept=".pdf"
                  />
                </div>
                <label className={styles.formErrors}>{error.cvFile}</label>

                <label className={styles.label}>Certificado de Idioma:</label>
                <p className={styles.text}>(Opcional)</p>
                <p className={styles.text}>Formato .pdf</p>
                <div className={styles.fileButton}>
                  <input
                    value={talent.languageFile}
                    name="languageFile"
                    onChange={handleChange}
                    type="file"
                    accept=".pdf"
                  />
                </div>
                <label className={styles.formErrors}>
                  {error.languageFile}
                </label>
                <button
                  disabled={
                    !talent.name ||
                    !talent.lastname ||
                    !talent.email ||
                    !talent.phone ||
                    !talent.position ||
                    !!error.name ||
                    !!error.lastname ||
                    !!error.email ||
                    !!error.phone ||
                    !!error.position ||
                    !cvFile
                  }
                  type="submit"
                  className={styles.buttonSubmit}
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

export default Talents;
