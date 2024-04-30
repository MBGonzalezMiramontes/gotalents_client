import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./aboutUs.module.css";
import top_image from "../../images/top_home.png";
import { RocketTakeoff, Lightbulb, Eye } from "react-bootstrap-icons";

const AboutUs = () => {
  const isEnglish = useSelector((state) => state.isEnglish);
  const [scrollToTop, setscrollToTop] = useState(true);

  useEffect(() => {
    if (scrollToTop) {
      window.scrollTo(0, 0);
      setscrollToTop(false);
    }
  }, [scrollToTop]);
  return (
    <div className={styles.container}>
      <img src={top_image} alt="top_image" className={styles.top_image} />
      {isEnglish ? (
        <>
          <div className={styles.secondContainer}>
            <div className={styles.titleContainer}>
              <h2 className={styles.secondTitle}>
                <RocketTakeoff className={styles.icon} />
                Our mission
              </h2>
            </div>
            <p className={styles.paragraphOne}>
              We comprehensively and efficiently connect businesses and talents,
              creating employment bridges that maximize the potential of both
              parties. We are dedicated to providing innovative recruitment
              solutions, ensuring a transparent and ethical process that fosters
              lasting relationships and mutual benefits.
            </p>
          </div>

          <div className={styles.thirdContainer}>
            <div className={styles.titleContainer}>
              <h2 className={styles.thirdTitle}>
                <Eye className={styles.icon} />
                Our vision
              </h2>
            </div>
            <p className={styles.thirdParagraph}>
              We aspire to be leaders in facilitating international job
              opportunities, transforming the way companies find talent and
              professionals access global opportunities. We aim to be recognized
              for excellence in our tasks and to be the preferred choice for
              both employers and talent seeking new career horizons.
            </p>
          </div>

          <div className={styles.fourthContainer}>
            <div className={styles.titleContainer}>
              <h2 className={styles.fourthTitle}>
                <Lightbulb className={styles.icon} />
                Our philosophy
              </h2>
            </div>
            <p className={styles.fourthParagraph}>
              At Go Talents, we believe that the key to business success lies in
              the quality of the individuals who make up your team. Our
              recruitment philosophy focuses on identifying not only outstanding
              technical skills but also on finding professionals who share your
              values and align seamlessly with your company's culture.
            </p>
          </div>
        </>
      ) : (
        <>
          <div className={styles.secondContainer}>
            <div className={styles.titleContainer}>
              <h2 className={styles.secondTitle}>
                {" "}
                <RocketTakeoff className={styles.icon} />
                Nuestra misión
              </h2>
            </div>
            <p className={styles.paragraphOne}>
              Conectamos de manera integral y eficiente a empresas y talentos,
              creando puentes laborales que maximizan el potencial de ambas
              partes. Nos dedicamos a proporcionar soluciones de reclutamiento
              innovadoras, garantizando un proceso transparente y ético que
              fomente relaciones duraderas y beneficios mutuos.
            </p>
          </div>

          <div className={styles.thirdContainer}>
            <div className={styles.titleContainer}>
              <h2 className={styles.thirdTitle}>
                <Eye className={styles.icon} />
                Nuestra visión
              </h2>
            </div>
            <p className={styles.thirdParagraph}>
              Aspiramos a ser líderes en el facilitamiento de oportunidades
              laborales internacionales, transformando la manera en que las
              empresas encuentran talento y cómo los profesionales acceden a
              oportunidades globales. Buscamos ser reconocidos por la excelencia
              en nuestras tareas, y por ser la elección preferida tanto para
              empleadores como para talento en búsqueda de nuevos horizontes
              laborales.
            </p>
          </div>

          <div className={styles.fourthContainer}>
            <div className={styles.titleContainer}>
              <h2 className={styles.fourthTitle}>
                <Lightbulb className={styles.icon} />
                Nuestra filosofía
              </h2>
            </div>
            <p className={styles.fourthParagraph}>
              En Go Talents, creemos que la clave del éxito empresarial radica
              en la calidad de las personas que integran su equipo, la
              transparencia, la ética y la honestidad son los pilares
              fundamentales. Nuestra filosofía de reclutamiento se centra en
              identificar no solo habilidades técnicas sobresalientes, sino
              también en encontrar profesionales que compartan sus valores y se
              alineen perfectamente con la cultura de su empresa.
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default AboutUs;
