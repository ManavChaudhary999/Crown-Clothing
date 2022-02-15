import React from "react";
import {Switch, Route} from "react-router-dom";
import './App.css';

import Directory from "./Components/direcrtory/directory.component";
import Shop from "./Pages/shop/shop.component";
import Header from "./Components/header/header.component";

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
    };

  }


  render()
  {
    return(
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Directory} />
          <Route path="/shop" component={Shop} />
          <Route path="/hats" component={Hat} />
        </Switch>
      </div>
    );
  }
}

export default App;
