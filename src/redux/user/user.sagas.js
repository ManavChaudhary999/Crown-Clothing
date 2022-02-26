import { takeLatest, put, call, all} from "redux-saga/effects";

import {signInSuccess, signInFailure, signoutSuccess, signoutFailure, signupSuccess, signupFailure} from "./user.actions";
import UserActionType from "./user.types";

import {auth, googleProvider, createUserProfileDocument, getCurrentUser} from "../../Firebase/firebase.utils";

function* getSnapshotFromUserAuth(userAuth, additionalData)
{
    try
    {
        const userRef = yield call(createUserProfileDocument, userAuth, additionalData);
        const userSnapshot = yield userRef.get();

        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    }
    catch(error)
    {
        yield put(signInFailure(error.message));
    }
}

function* onGoogleSignIn()
{
    try
    {
        const {user} = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user);
    }
    catch(error)
    {
        yield put(signInFailure(error.message));
    }
}

function* onEmailSignIn({payload: {email, password}})
{
    try
    {
        const {user} = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user);
    }
    catch(error)
    {
        yield put(signInFailure(error.message));
    }
}

function* isUserAuthenticated()
{
    try
    {
        const user = yield getCurrentUser();
        if(!user) return;
        yield getSnapshotFromUserAuth(user);
    }
    catch(error)
    {
        yield put(signInFailure(error.message));
    }
}

function* onSignout()
{
    try
    {
        yield auth.signOut();
        yield put(signoutSuccess());
    }
    catch(error)
    {
        yield put(signoutFailure(error.message));
    }
}

function* onSignup({payload: {email, password, displayName}})
{
    try
    {
        const {user} = yield auth.createUserWithEmailAndPassword(email, password);
        yield put(signupSuccess({ user, additionalData: {displayName} }));
    }
    catch(error)
    {
        yield put(signupFailure(error.message));
    }
}

function* signInAfterSignUp({payload: {user, additionalData}})
{
    yield getSnapshotFromUserAuth(user, additionalData);
}

function* onGoogleSignInStart()
{
    yield takeLatest(UserActionType.GOOGLE_SIGNIN_START, onGoogleSignIn);
}

function* onEmailSignInStart()
{
    yield takeLatest(UserActionType.EMAIL_SIGNIN_START, onEmailSignIn);
}

function* onCheckUserSession()
{
    yield takeLatest(UserActionType.CHECK_USER_SESSION, isUserAuthenticated);
}

function* onSignoutStart()
{
    yield takeLatest(UserActionType.SIGNOUT_START, onSignout);
}

function* onSignupStart()
{
    yield takeLatest(UserActionType.SIGNUP_START, onSignup);
}

function* onSignupSuccess()
{
    yield takeLatest(UserActionType.SIGNUP_SUCCESS, signInAfterSignUp);
}

export default function* UserSagas()
{
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignoutStart),
        call(onSignupStart),
        call(onSignupSuccess)
    ])
};