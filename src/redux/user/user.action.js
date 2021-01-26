import UserActionTypes from "./user.types";
const {
  GOOGLE_SIGN_IN_START,
  EMAIL_SIGN_IN_START,
  SIGN_IN_SUCCES,
  SIGN_IN_FAILURE,
  CHECK_USER_SESSION,
  SIGN_OUT_START,
  SIGN_OUT_SUCCES,
  SIGN_OUT_FAILURE,
  SIGN_UP_START,
  SIGN_UP_SUCCES,
  SIGN_UP_FAILURE,
} = UserActionTypes;

export const googleSignInStart = () => ({
  type: GOOGLE_SIGN_IN_START,
});

export const signInSucces = (user) => ({
  type: SIGN_IN_SUCCES,
  payload: user,
});

export const signInFailure = (error) => ({
  type: SIGN_IN_FAILURE,
  payload: error,
});

export const emailSignInStart = (emailAndPassword) => ({
  type: EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

export const checkUserSession = () => ({
  type: CHECK_USER_SESSION,
});

export const signOutStart = () => ({
  type: SIGN_OUT_START,
});
export const signOutSucces = () => ({
  type: SIGN_OUT_SUCCES,
});
export const signOutFailure = (error) => ({
  type: SIGN_OUT_FAILURE,
  payload: error,
});
export const signUpStart = (userCredentials) => ({
  type: SIGN_UP_START,
  payload: userCredentials,
});
export const signUpSucces = ({ user, additionalData }) => ({
  type: SIGN_UP_SUCCES,
  payload: { user, additionalData },
});
export const signUpFailure = (error) => ({
  type: SIGN_UP_FAILURE,
  payload: error,
});
