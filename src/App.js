import React, {useEffect} from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import './App.css';

import ShopPage from "./Pages/shop/shop.component";
import CheckoutPage from "./Pages/checkout/checkout-page.component";

import Header from "./Components/header/header.component";
import Homepage from "./Pages/homepage/homepage.component";
import SignInSignUp from "./Pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

import {selectCurrentUser} from "./redux/user/user.selectors";
import {checkUserSession} from "./redux/user/user.actions";

const App = ({checkUserSession, currentUser}) => {

  useEffect(() =>{
    checkUserSession();
  }, [checkUserSession]);
    
  return(
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route exact path="/signin" render={()=> currentUser ? (<Redirect to="/" />) : (<SignInSignUp />)} />
      </Switch>
    </div>
  );
}

// Old Way without reselect
// const mapStateToProps = (state) => ({
//   currentUser: state.user.currentUser
// });

// New Way with reselect
const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state)
});

const mapDispatchToProps = (dispatch) =>({
  checkUserSession: ()=> dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
