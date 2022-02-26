import UserType from "./user.types";

// Default State
const Initial_State = {
    currentUser: null,
    error: undefined
};

// This reducer is called automatically by redux store function whenever state changes or userAction(setCurrentUser)  is called by components
const userReducer = (state = Initial_State, action) => {
    switch (action.type) {

        case UserType.SIGNIN_SUCCESS:
            return{
                ...state,
                currentUser: action.payload,
                error: undefined
            };

        case UserType.SIGNOUT_SUCCESS:
            return{
                ...state,
                currentUser: null,
                error: undefined
            };

        case UserType.SIGNIN_FAILURE:
        case UserType.SIGNOUT_FAILURE:
        case UserType.SIGNUP_FAILURE:
            return{
                ...state,
                currentUser: null,
                error: action.payload
            };
        default:
            return state;
    }
}

export default userReducer;