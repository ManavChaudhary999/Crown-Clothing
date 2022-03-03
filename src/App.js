import React, {useEffect, lazy, Suspense} from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";

import Header from "./Components/header/header.component";
import Spinner from "./Components/spinner/spinner.component";
import ErrorBoundary from "./Components/error-boundary/error-boundary.component";

import {selectCurrentUser} from "./redux/user/user.selectors";
import {checkUserSession} from "./redux/user/user.actions";

import GlobalStyle from "./global.styles";

const Homepage = lazy(() => import("./Pages/homepage/homepage.component"));
const ShopPage = lazy(() => import("./Pages/shop/shop.component"));
const CheckoutPage = lazy(() => import("./Pages/checkout/checkout-page.component"));
const SignInSignUp = lazy(() => import("./Pages/sign-in-and-sign-up/sign-in-and-sign-up.component"));

const App = ({checkUserSession, currentUser}) => {

  useEffect(() =>{
    checkUserSession();
  }, [checkUserSession]);
    
  return(
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        {/* using ErrorBoundary because we dont want if error gets thrown then continously Spinner loading (Suspense rendereing)  */}
        <ErrorBoundary> 
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={Homepage} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route exact path="/signin" render={()=> currentUser ? (<Redirect to="/" />) : (<SignInSignUp />)} />
          </Suspense>
        </ErrorBoundary>
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
