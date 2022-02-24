import {shopActionType} from "./shop.actionType";

import {firestore, convertCollectionsSnapshotToMap} from "../../Firebase/firebase.utils";

export const fetchCollectionsStart = () => ({
    type: shopActionType.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = collectionsMap => ({
    type: shopActionType.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
    type: shopActionType.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
});

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionsRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart()); // here we are dispatching action as a function

        collectionsRef.get().then(snapshot => {
            const collectionsToMap = convertCollectionsSnapshotToMap(snapshot);
            dispatch(fetchCollectionsSuccess(collectionsToMap));
            // UpdateCollection(collectionToMap);
            // this.setState({loading: false});
        }).catch(error => dispatch(fetchCollectionsFailure(error)));
    };
};