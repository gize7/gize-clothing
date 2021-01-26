import {
  convertCollectionsSnapshotToMap,
  firestore,
} from "../../firebase/firebase.utils";
import shopActionTypes from "./shop.types";

const {
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCES,
  FETCH_COLLECTIONS_FAILURE,
} = shopActionTypes;

export const fetchCollectionsStart = () => ({
  type: FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuscces = (collectionsMap) => ({
  type: FETCH_COLLECTIONS_SUCCES,
  payload: collectionsMap,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionsStart());
    collectionRef
      .get()
      .then((snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuscces(collectionsMap));
      })
      .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
  };
};
