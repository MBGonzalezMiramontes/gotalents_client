import {
  POST_COMPANY_SUCCESS,
  POST_TALENT_SUCCESS,
} from "../actions/actions-typescript.js";

const initialState = {
  company: [],
  talent: [],
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
    default:
      return { ...state };
  }
}
export default rootReducer;
