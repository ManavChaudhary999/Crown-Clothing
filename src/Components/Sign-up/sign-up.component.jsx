import React from "react";
import "./sign-up.styles.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

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
        console.log(this.state);
    }
    
    handleSubmit = event => {
        event.preventDefault();
        
        this.setState({
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        });

        console.log("Siged Up");
    }

    render()
    {
        const {displayName, email, password, confirmPassword} = this.state;

        return(
            <div>
                <h2>Don't Have An Account</h2>
                <span>Sign Up</span>
                
                <form onSubmit={this.handleSubmit}>
                    <FormInput name="displayName" type="name" label="DisplayName" value={displayName} onChange={this.handleChange} required />
                    <FormInput name="email" type="email" label="Email" value={email} onChange={this.handleChange} required />
                    <FormInput name="password" type="password" label="Password" value={password} onChange={this.handleChange} required />
                    <FormInput name="confirmPassword" type="password" label="ConfirmPassword" value={confirmPassword} onChange={this.handleChange} required />
                    <CustomButton type="submit" value="submit form" >SignUp</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignUp;