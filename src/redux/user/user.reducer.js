import UserActionTypes from "./user.types";

const {
  SIGN_IN_SUCCES,
  SIGN_IN_FAILURE,
  SIGN_OUT_FAILURE,
  SIGN_OUT_SUCCES,
  SIGN_UP_FAILURE,
} = UserActionTypes;

const INITIAL_STATE = {
  currentUser: null,
  error: null,
};

const useReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCES:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case SIGN_OUT_SUCCES:
      return {
        ...state,
        currentUser: null,
        error: null,
      };
    case SIGN_OUT_FAILURE:
    case SIGN_IN_FAILURE:
    case SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default useReducer;
