import React, { useState } from "react";
import {connect} from "react-redux";
import "./sign-in.styles.scss"

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {googleSignInStart, emailSignInStart} from "../../redux/user/user.actions";

const SignIn = ({googleSignInStart, emailSignInStart}) => {
    const [userCredentials, setUserCredentials] = useState({email: "", password: ""});
    const {email, password} = userCredentials;

    const handleChange = (event) => {
        const {name, value} = event.target;

        setUserCredentials({...userCredentials, [name]: value});
    }

    const handleSubmit = async event =>
    {
        event.preventDefault();

        emailSignInStart({email, password});  
    }

    return(
        <div className="sign-in">
            <h2>Already An Account</h2>
            <span>Sign In With Email And Password</span>

            <form onSubmit={handleSubmit}>
                <FormInput type="email" name="email" label="Email" value={email} onChange={handleChange} required />
                <FormInput type="password" name="password" label="Password" value={password} onChange={handleChange} required />
                <div className="buttons">
                    <CustomButton type="submit">SignIn</CustomButton>
                    <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn >SignIn</CustomButton>
                </div>
            </form>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (EmailAndPassword) => dispatch(emailSignInStart(EmailAndPassword))
});

export default connect(null, mapDispatchToProps)(SignIn);