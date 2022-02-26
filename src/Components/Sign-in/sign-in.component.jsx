import React from "react";
import {connect} from "react-redux";
import "./sign-in.styles.scss"

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {googleSignInStart, emailSignInStart} from "../../redux/user/user.actions";

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
    }

    handleSubmit = async event =>
    {
        event.preventDefault();

        const {email, password} = this.state;
        const {emailSignInStart} = this.props;

        emailSignInStart({email, password});
        
        this.setState({
            email: "",
            password: "",
        });        
    }
    
    render()
    {
        const {email, password} = this.state;
        const {googleSignInStart} = this.props;

        return(
            <div className="sign-in">
                <h2>Already An Account</h2>
                <span>Sign In With Email And Password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" label="Email" value={email} onChange={this.handleChange} required />
                    <FormInput type="password" name="password" label="Password" value={password} onChange={this.handleChange} required />
                    <div className="buttons">
                        <CustomButton type="submit">SignIn</CustomButton>
                        <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn >SignIn</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (EmailAndPassword) => dispatch(emailSignInStart(EmailAndPassword))
});

export default connect(null, mapDispatchToProps)(SignIn);