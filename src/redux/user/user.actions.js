import UserType from "./user.types";

export const googleSignInStart = () =>({
    type: UserType.GOOGLE_SIGNIN_START
});

export const emailSignInStart = EmailAndPassword =>({
    type: UserType.EMAIL_SIGNIN_START,
    payload: EmailAndPassword
});

export const signInSuccess = user =>({
    type: UserType.SIGNIN_SUCCESS,
    payload: user
});

export const signInFailure = error =>({
    type: UserType.SIGNIN_FAILURE,
    payload: error
});

export const checkUserSession = () => ({
    type: UserType.CHECK_USER_SESSION
});

export const signoutStart = () =>({
    type: UserType.SIGNOUT_START
});

export const signoutSuccess = () =>({
    type: UserType.SIGNOUT_SUCCESS
});

export const signoutFailure = error =>({
    type: UserType.SIGNOUT_FAILURE,
    payload: error
});

export const signupStart = UserCredentials =>({
    type: UserType.SIGNUP_START,
    payload: UserCredentials
});
export const signupSuccess = ({user, additionalData}) =>({
    type: UserType.SIGNUP_SUCCESS,
    payload: {user, additionalData}
});
export const signupFailure = error => ({
    type: UserType.SIGNUP_FAILURE,
    payload: error
});