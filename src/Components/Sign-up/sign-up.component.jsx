import React, {useState} from "react";
import {connect} from "react-redux";
import "./sign-up.styles.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {signupStart} from "../../redux/user/user.actions";

const SignUp = ({signupStart}) => {
    const [user, setUser] = useState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    
    const {displayName, email, password, confirmPassword} = user;
    
    const handleChange = event => {
        const {name, value} = event.target;
        
        setUser({...user, [name]: value});
    }
    
    const handleSubmit = async event => {
        event.preventDefault();
        
        if(password !== confirmPassword)
        {
            alert("Password Dont Match");
            return;
        }

        signupStart({displayName, email, password});
    }

    return(
        <div className="sign-up">
            <h2 className="title">Don't Have An Account</h2>
            <span>Sign Up</span>

            <form onSubmit={handleSubmit}>
                <FormInput name="displayName" type="name" label="DisplayName" value={displayName} onChange={handleChange} required />
                <FormInput name="email" type="email" label="Email" value={email} onChange={handleChange} required />
                <FormInput name="password" type="password" label="Password" value={password} onChange={handleChange} required />
                <FormInput name="confirmPassword" type="password" label="ConfirmPassword" value={confirmPassword} onChange={handleChange} required />
                <CustomButton type="submit">SignUp</CustomButton>
            </form>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    signupStart: user => dispatch(signupStart(user))
});

export default connect(null, mapDispatchToProps)(SignUp);