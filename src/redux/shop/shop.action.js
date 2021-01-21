import shopActionTypes from "./shop.types";

const { UPDATE_COLLECTIONS } = shopActionTypes;

export const updateCollections = (collectionMap) => ({
  type: UPDATE_COLLECTIONS,
  payload: collectionMap,
});
