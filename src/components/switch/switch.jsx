import React, { useState } from "react";
import styles from "./switch.module.css";

const Switch = () => {
  const [isSpanish, setIsSpanish] = useState(false);

  const handleChangeLanguage = () => {
    setIsSpanish(!isSpanish);
  };

  return (
    <div className={styles.switchContainer}>
      <input
        id="toggle_switch"
        name="toggle_switch"
        type="checkbox"
        checked={isSpanish}
        onChange={handleChangeLanguage}
        className={styles.switchInput}
      />
      <label className={styles.labelSwitch} htmlFor="toggle_switch">
        {isSpanish ? "English" : "Español"}
      </label>
    </div>
  );
};

export default Switch;
