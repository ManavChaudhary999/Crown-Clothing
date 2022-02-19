import React from "react";
import {connect} from "react-redux";
import "./checkout-page.styles.scss";

import CheckoutItem from "../../Components/checkout-item/checkout-item.component";

import {selectCartItems, selectCartTotalPrice} from "../../redux/cart/cart.selectors";

const CheckoutPage = ({cartItems, total}) => {
    return(
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(item => <CheckoutItem key={item.id} cartItem={item} />)
            }
            <div className="total">TOTAL: ${total}</div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state),
    total: selectCartTotalPrice(state)
});

export default connect(mapStateToProps)(CheckoutPage);