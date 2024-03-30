import axios from "axios";
import { POST_COMPANY_SUCCESS } from "./actions-typescript";

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
      const action = {
        type: POST_COMPANY_SUCCESS,
      };
      console.log("Action created:", action);
      return dispatch({
        type: POST_COMPANY_SUCCESS,
      });
    } catch (error) {
      alert(error.message);
    }
  };
};
