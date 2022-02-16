import React from "react";
import {Link} from "react-router-dom";
import "./header.styles.scss";

import {ReactComponent as Logo} from "../../Assets/logo.svg";
import {auth} from "../../Firebase/firebase.utils";

const Header = ({currentUser}) =>(
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
        </div>
    </div>
);

export default Header;