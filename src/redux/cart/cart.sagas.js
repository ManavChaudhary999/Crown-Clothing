import {all, put, call, takeLatest} from "redux-saga/effects";

import UserActionType from "../user/user.types";
import {clearCart} from "./cart.actions";

function* clearCartItems()
{
    yield put(clearCart());
}

function* onSignoutSuccessful()
{
    yield takeLatest(UserActionType.SIGNOUT_SUCCESS, clearCartItems);
}

export default function* cartSagas()
{
    yield all([
        call(onSignoutSuccessful)
    ]);
}