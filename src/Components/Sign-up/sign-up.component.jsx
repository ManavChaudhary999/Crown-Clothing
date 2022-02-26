import React from "react";
import {connect} from "react-redux";
import "./sign-up.styles.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {signupStart} from "../../redux/user/user.actions";

class SignUp extends React.Component{
    constructor(props){
        super(props);

        this.state={
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        };
    }

    handleChange = event => {
        const {name, value} = event.target;

        this.setState({[name]: value});
    }
    
    handleSubmit = async event => {
        event.preventDefault();
        
        const {displayName, email, password, confirmPassword} = this.state;
        const {signupStart} = this.props;

        if(password !== confirmPassword)
        {
            alert("Password Dont Match");
            return;
        }

        signupStart({displayName, email, password});
        
        this.setState({
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        });
    }

    render()
    {
        const {displayName, email, password, confirmPassword} = this.state;

        return(
            <div className="sign-up">
                <h2 className="title">Don't Have An Account</h2>
                <span>Sign Up</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="displayName" type="name" label="DisplayName" value={displayName} onChange={this.handleChange} required />
                    <FormInput name="email" type="email" label="Email" value={email} onChange={this.handleChange} required />
                    <FormInput name="password" type="password" label="Password" value={password} onChange={this.handleChange} required />
                    <FormInput name="confirmPassword" type="password" label="ConfirmPassword" value={confirmPassword} onChange={this.handleChange} required />
                    <CustomButton type="submit">SignUp</CustomButton>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    signupStart: user => dispatch(signupStart(user))
});

export default connect(null, mapDispatchToProps)(SignUp);