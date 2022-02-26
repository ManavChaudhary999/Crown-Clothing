import {all, call} from "redux-saga/effects";

import {onFetchCollectionsStart} from "./shop/shop.sagas";
import UserSagas from "./user/user.sagas";
import CartSagas from "./cart/cart.sagas";

export default function* RootSaga()
{
    // If use this then it will not call concurrently and rest yield have to wait untill other done
    // yield call(onFetchCollectionsStart);
    // yield call(onFetchCollectionsStart);
    // yield call(onFetchCollectionsStart);
    // So using all instead
    yield all([
        call(onFetchCollectionsStart),
        call(UserSagas),
        call(CartSagas)
    ]);
}