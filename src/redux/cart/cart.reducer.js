import cartTypes from "../cart/cart.types";
import AddItemToCart from "./cart.utils";

const Initial_State = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state= Initial_State, action) => {
    switch(action.type) {
        case cartTypes.Toggle_Cart_Hidden:
            return{
                ...state,
                hidden: !state.hidden
            };
        case cartTypes.Add_Cart_Item:
            return{
                ...state,
                cartItems: AddItemToCart(state.cartItems, action.payload)
            };
        default:
            return state;
    }
};

export default cartReducer;