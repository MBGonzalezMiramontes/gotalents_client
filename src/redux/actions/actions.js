import axios from "axios";
import {
  POST_COMPANY_SUCCESS,
  POST_TALENT_SUCCESS,
  CHANGE_LANGUAGE
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
  console.log("Datos del formulario:", name, lastname, position, email, phone, cvFile, languageFile);
  const formData = new FormData();
  formData.append("name", name);
  formData.append("lastname", lastname);
  formData.append("position", position);
  formData.append("email", email);
  formData.append("phone", phone);
  formData.append("cvFile", cvFile);
  formData.append("languageFile", languageFile);
  console.log("Contenido del formData:", formData);
  return async function (dispatch) {
    try {
      await axios.post("http://localhost:3001/talent", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Solicitud talent enviada con éxito");
      return dispatch({
        type: POST_TALENT_SUCCESS,
      });
    } catch (error) {
      alert(error.message);
    }
  };
};

export const changeLanguage = (isEnglish) => ({
  type: CHANGE_LANGUAGE,
  payload: isEnglish,
});