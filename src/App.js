import React from "react";
import './App.css';

import {SectionData} from "./Data";
import Directory from "./Components/direcrtory/directory.component";

class App extends React.Component {
  constructor() 
  {
    super();
    this.state = {
      Sections: SectionData
    };
  }

  render()
  {
    return(
      <div>
        <Directory sections={this.state.Sections} />
      </div>
    );
  }
}

export default App;
