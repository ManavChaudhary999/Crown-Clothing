import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import "./header.styles.scss";

import {ReactComponent as Logo} from "../../Assets/logo.svg";
import {auth} from "../../Firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const Header = ({currentUser, hidden}) =>(
    <div className="header">    
        <Link to="/"><Logo className="logo-container" /></Link>
        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/contacts">CONTACTS</Link>
            {
                currentUser ?
                    <div className="option" onClick={()=> auth.signOut()}>SIGNOUT</div>
                    :
                    <Link className="option" to="/signin">SIGNIN</Link>
            }
            <CartIcon className="option" />
        </div>
        {hidden ? null : <CartDropdown />}
    </div>
);

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser,
    hidden: state.cart.hidden
});

export default connect(mapStateToProps)(Header);