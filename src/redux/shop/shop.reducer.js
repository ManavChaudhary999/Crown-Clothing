import {shopActionType} from "./shop.actionType";

const Initial_State = {
    collections: null,
    isFetching: false,
    errorMessage: undefined
};

const shopReducer = (state=Initial_State, action) => {
    switch (action.type) {
        case shopActionType.FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching: true
            };
            
        case shopActionType.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                collections: action.payload,
                isFetching: false
            };

        case shopActionType.FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            };

        default:
            return state;
    }
};

export default shopReducer;