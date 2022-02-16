import React from "react";
import {Switch, Route} from "react-router-dom";
import './App.css';

import Directory from "./Components/direcrtory/directory.component";
import Shop from "./Pages/shop/shop.component";
import Header from "./Components/header/header.component";
import SignInSignUp from "./Pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import {auth, createUserProfileDocument} from "./Firebase/firebase.utils";

const Hat = ({history, match}) =>
  {
    return (
    <div>
      <h1>{`${match.url}/linkUrl`}</h1>
    </div>
    );
  }

class App extends React.Component {
  constructor() 
  {
    super();
    
    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount()
    {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
          if(userAuth)
          {
            const userRef = await createUserProfileDocument(userAuth);
            userRef.onSnapshot(snapshot => {
              this.setState({currentUser: {
                id: snapshot.id,
                ...snapshot.data()}}, ()=> console.log(this.state.currentUser));
            });    
          }
          else
          {
            this.setState({currentUser: null});
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
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Directory} />
          <Route path="/shop" component={Shop} />
          <Route path="/signin" component={SignInSignUp} />
          <Route path="/hats" component={Hat} />
        </Switch>
      </div>
    );
  }
}

export default App;
