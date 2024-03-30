import styles from "./App.module.css";
import { Route, Routes } from "react-router-dom";
import Home from "./views/home/home";
import Companies from "./views/companies/companies";
import Talents from "./views/talents/talents";
import Footer from "./components/footer/footer";
import NavBar from "./components/navbar/navbar";

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <NavBar className={styles.navbar} />

        <div className={styles.routes}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/talents" element={<Talents />} />
            <Route path="/companies" element={<Companies />} />
            {/* <Route path="/aboutus" element={<AboutUs />} /> */}
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
