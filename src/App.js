import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import './App.css';

import Directory from "./Components/direcrtory/directory.component";
import Shop from "./Pages/shop/shop.component";
import Header from "./Components/header/header.component";
import SignInSignUp from "./Pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import {auth, createUserProfileDocument} from "./Firebase/firebase.utils";
import {setCurrentUser} from "./redux/user/user.actions";

class App extends React.Component {
  
  unsubscribeFromAuth = null;

  componentDidMount()
    {
      const {setCurrentUser} = this.props;
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
          if(userAuth)
          {
            const userRef = await createUserProfileDocument(userAuth);
            userRef.onSnapshot(snapshot => {
              setCurrentUser({
                id: snapshot.id,
                ...snapshot.data()
              });
            });
          }
          else
          {
            setCurrentUser(userAuth);
          }
        });
    }
    
    componentDidUnMount()
    {
        this.unsubscribeFromAuth();
    }


  render()
  {
    return(
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Directory} />
          <Route path="/shop" component={Shop} />
          <Route path="/signin" render={()=> this.props.currentUser ? (<Redirect to="/" />) : (<SignInSignUp />)} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => (console.log("UserReduce called"),{
  currentUser: state.user.currentUser
});

// here setCurrentUser is a prop we want to pass in app(or this) component and setCurrentUser(user) is an action
const mapDispatchToProps = (dispatch) =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
