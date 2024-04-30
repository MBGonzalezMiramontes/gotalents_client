import React, { useEffect } from "react";
import styles from "./home.module.css";
import top_image from "../../images/top_home.png";
import woman_image from "../../images/mujer.png";
import man_image from "../../images/hombre.png";
import { Link } from "react-router-dom";
import Switch from "../../components/switch/switch";
import { useSelector } from "react-redux";

const Home = () => {
  const isEnglish = useSelector((state) => state.isEnglish);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.container}>
      <img src={top_image} alt="top_image" className={styles.top_image} />
      <Switch />{" "}
      {isEnglish ? (
        <>
          <div className={styles.title_body_container}>
            <h1 className={styles.title_orange}>
              Remote horizons, global talents, infinite potential
            </h1>
            <p className={styles.paragraph}>
              We specialize in identifying and recruiting the most outstanding
              talent to meet the specific needs of your company, whether you are
              seeking experienced professionals or promising young individuals.
              <br />
              <br />
              Our commitment to excellence and our personalized approach make us
              the ideal partner to meet your talent needs and take your
              organization to the next level.
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
              <p className={styles.paragraphCard}>
                Connect with passionate professionals to meet the needs of your
                company.
              </p>
              <p className={styles.featurdBlue}>
                Find the ideal talent for you business right now.
              </p>
              <Link to="/companies" className={styles.link}>
                <button className={styles.blueButton}>Companies</button>
              </Link>
            </div>
            <div className={styles.card}>
              <img
                src={man_image}
                alt="man_image"
                className={styles.man_image}
              />
              <h2 className={styles.subtitle_orange}>Apply</h2>
              <p className={styles.paragraphCard}>
                Be part of a group of like-minded people that will propel your
                career towards success.
              </p>
              <p className={styles.featurdOrange}>
                Join a team where you can shine and stand out.
              </p>
              <Link to="/talents" className={styles.link}>
                <button className={styles.orangeButton}>Talents</button>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={styles.title_body_container}>
            <h1 className={styles.title_orange}>
              Horizontes remotos, talentos globales, potencial infinito
            </h1>
            <p className={styles.paragraph}>
              Nos dedicamos a identificar y reclutar el talento más destacado
              para satisfacer las necesidades específicas de su empresa, ya sea
              que esté buscando profesionales experimentados o jóvenes
              prometedores.
              <br />
              <br />
              Nuestra dedicación a la excelencia y nuestro enfoque personalizado
              nos convierten en el socio ideal para satisfacer sus necesidades
              de talento y llevar su organización al siguiente nivel.
            </p>
          </div>
          <div className={styles.columns}>
            <div className={styles.card}>
              <img
                src={woman_image}
                alt="woman_image"
                className={styles.woman_image}
              />
              <h2 className={styles.subtitle_blue}>Contratar</h2>
              <p className={styles.paragraphCard}>
                Conéctese con profesionales apasionados para satisfacer las
                necesidades de su compañía.
              </p>
              <p className={styles.featurdBlue}>
                Encuentra el talento ideal para tu negocio ahora mismo.
              </p>
              <Link to="/companies" className={styles.link}>
                <button className={styles.blueButton}>Compañías</button>
              </Link>
            </div>
            <div className={styles.card}>
              <img
                src={man_image}
                alt="man_image"
                className={styles.man_image}
              />
              <h2 className={styles.subtitle_orange}>Aplicar</h2>
              <p className={styles.paragraphCard}>
                Sé parte de un grupo de personas con ideas afines que impulsarán
                su carrera hacia el éxito.
              </p>
              <p className={styles.featurdOrange}>
                Únete a un equipo donde puedas brillar y destacar.
              </p>
              <Link to="/talents" className={styles.link}>
                <button className={styles.orangeButton}>Talentos</button>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
