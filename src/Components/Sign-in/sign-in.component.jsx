import React from "react";
import "./sign-in.styles.scss"

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
        };
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        
        this.setState({[name]: value});
        console.log(this.state);
    }

    handleSubmit = event =>
    {
        event.preventDefault();

        this.setState({
            email: "",
            password: "",
        });

        console.log("Signed In");
    }

    render()
    {
        return(
            <div className="sign-in">
                <h2>Already An Account</h2>
                <span>Sign In With Email And Password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" label="Email" value={this.state.email} onChange={this.handleChange} required />
                    <FormInput type="password" name="password" label="Password" value={this.state.password} onChange={this.handleChange} required />
                    <div className="buttons">
                        <CustomButton type="submit" value="submit form">SignIn</CustomButton>
                        <CustomButton type="submit" value="submit form" isGoogleSignIn >SignIn</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;