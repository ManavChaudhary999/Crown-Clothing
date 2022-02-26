import {takeEvery, put, call} from "redux-saga/effects";

import {firestore, convertCollectionsSnapshotToMap} from "../../Firebase/firebase.utils";
import {fetchCollectionsSuccess, fetchCollectionsFailure} from "./shop.action";
import { shopActionType  } from "./shop.actionType";

export function* fetchCollections()
{
    // put is used as replacement of dispatch in redux-saga
    // call is used as replacement of async function call
    // yield is used as replacement of await
    try
    {
        const collectionsRef = firestore.collection('collections');
        const snapshot = yield collectionsRef.get();
        // const collectionsMap = yield convertCollectionsSnapshotToMap(snapshot);
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap));
    }
    catch(error)
    {
        yield put(fetchCollectionsFailure(error.message));
    }
}

export function* onFetchCollectionsStart()
{
    // TakeLatest is a redux method used to take multiple request if action type is called but only execute latest or newest request
    // For example - if this action is called multiple times by user accidently or by components then we dont want every time to fetch collections instead only latest.
    // It takes two parameters one is action type and other is method or behaviour with that request
    yield takeEvery(shopActionType.FETCH_COLLECTIONS_START, fetchCollections);
    // Whenever fetchCollectionsStart on shop.action.js is calld this function will be called automatically because of action type fetchCollectionsStart will be fired.
}
