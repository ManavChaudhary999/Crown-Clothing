import {createSelector} from "reselect";

const shopState = state => state.shop;

export const selectCollections = createSelector(
    [shopState],
    shop => shop.collections
);

export const selectCollectionForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
);

export const selectCategory = collectionUrlParam => createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
);