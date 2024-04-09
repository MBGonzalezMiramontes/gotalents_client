import axios from "axios";
import {
  POST_COMPANY_SUCCESS,
  POST_TALENT_SUCCESS,
} from "./actions-typescript";

export const createCompany = ({
  name,
  lastname,
  companyName,
  category,
  email,
  phone,
}) => {
  return async function (dispatch) {
    try {
      await axios.post("http://localhost:3001/company", {
        name,
        lastname,
        companyName,
        category,
        email,
        phone,
      });
      return dispatch({
        type: POST_COMPANY_SUCCESS,
      });
    } catch (error) {
      alert(error.message);
    }
  };
};

export const createTalent = ({
  name,
  lastname,
  position,
  email,
  phone,
  cvFile,
  languageFile,
}) => {
  return async function (dispatch) {
    try {
      await axios.post("http://localhost:3001/talent", {
        name,
        lastname,
        position,
        email,
        phone,
        cvFile,
        languageFile,
      });
      return dispatch({
        type: POST_TALENT_SUCCESS,
      });
    } catch (error) {
      alert(error.message);
    }
  };
};
