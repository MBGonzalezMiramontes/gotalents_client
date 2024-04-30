import React from "react";
import styles from "./switch.module.css";
import { changeLanguage } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";

const Switch = () => {
  const dispatch = useDispatch();
  const isEnglish = useSelector((state) => state.isEnglish);

  const handleChangeLanguage = () => {
   dispatch(changeLanguage(!isEnglish));
  };

  return (
    <div className={styles.switchContainer}>
      <input
        id="toggle_switch"
        name="toggle_switch"
        type="checkbox"
        checked={isEnglish}
        onChange={handleChangeLanguage}
        className={styles.switchInput}
      />
      <label className={styles.labelSwitch} htmlFor="toggle_switch">
        {isEnglish ? "Español" : "English"}
      </label>
    </div>
  );
};

export default Switch;
