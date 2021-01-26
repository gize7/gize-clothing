import { all, call, takeLatest, put } from "redux-saga/effects";
import UserActionTypes from "../user/user.types";
import { clearCart } from "./cart.action";

const { SIGN_OUT_SUCCES } = UserActionTypes;

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSucsess() {
  yield takeLatest(SIGN_OUT_SUCCES, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSucsess)]);
}
