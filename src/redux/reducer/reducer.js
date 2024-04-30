import {
  POST_COMPANY_SUCCESS,
  POST_TALENT_SUCCESS,
  CHANGE_LANGUAGE,
} from "../actions/actions-typescript.js";

const initialState = {
  company: [],
  talent: [],
  isEnglish: false,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case POST_COMPANY_SUCCESS:
      return {
        ...state,
      };
    case POST_TALENT_SUCCESS:
      return {
        ...state,
      };
    case CHANGE_LANGUAGE:
      return {
        ...state,
        isEnglish: action.payload,
      };
    default:
      return { ...state };
  }
}
export default rootReducer;
