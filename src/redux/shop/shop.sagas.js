import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from "../../firebase/firebase.utils";
import {
  fetchCollectionsFailure,
  fetchCollectionsSuscces,
} from "./shop.action";
import shopActionTypes from "./shop.types";

const { FETCH_COLLECTIONS_START } = shopActionTypes;

export function* fetchCollectionsStartAsync() {
  yield console.log("i am fired");
  try {
    const collectionRef = firestore.collection("collections");
    const snapShot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapShot
    );
    yield put(fetchCollectionsSuscces(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(FETCH_COLLECTIONS_START, fetchCollectionsStartAsync);
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
