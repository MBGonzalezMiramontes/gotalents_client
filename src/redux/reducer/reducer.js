import { POST_COMPANY_SUCCESS } from "../actions/actions-typescript.js";

const initialState = {
  company: [],
  // company: null,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case POST_COMPANY_SUCCESS:
      return {
        ...state,
      };
    default:
      return { ...state };
  }
}
export default rootReducer;
