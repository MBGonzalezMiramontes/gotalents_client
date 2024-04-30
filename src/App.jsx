import styles from "./App.module.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./views/home/home";
import Companies from "./views/companies/companies";
import Talents from "./views/talents/talents";
import Footer from "./components/footer/footer";
import NavBar from "./components/navbar/navbar";
import AboutUs from "./views/aboutUs/aboutUs";

const MemoizedNavBar = React.memo(NavBar);
const MemoizedFooter = React.memo(Footer);
const MemoizedHome = React.memo(Home);
const MemoizedTalents = React.memo(Talents);
const MemoizedCompanies = React.memo(Companies);
function App() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <MemoizedNavBar className={styles.navbar} />

        <div className={styles.routes}>
          <Routes>
            <Route path="/" element={<MemoizedHome />} />
            <Route path="/talents" element={<MemoizedTalents />} />
            <Route path="/companies" element={<MemoizedCompanies />} />
            <Route path="/aboutus" element={<AboutUs />} />
          </Routes>
        </div>
        <MemoizedFooter />
      </div>
    </div>
  );
}

export default App;
