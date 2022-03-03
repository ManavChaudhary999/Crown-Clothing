import React from "react";
import "./cart-item.styles.scss";

const CartItem = ({cartItem:{imageUrl, price, name, quantity}}) => (
    <div className="cart-item">
        <img className="image" src={imageUrl} alt='item' />
        <div className="item-details">
            <span className="name">{name}</span>
            <span>{price} x {quantity}</span>
        </div>
    </div>
);
// Dont want this will rerender for every other cartItem Add, instead only want to render if itself item quantity increases or something changes
// So using React.memo which memorize the component and stop rerender if its not needed.
export default React.memo(CartItem);