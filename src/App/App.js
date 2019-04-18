import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom';

// import pages
import Connect from '../Components/ConnectPage/connect';
import Platforms from '../Components/PlatformsPage/platforms';

class App extends Component {
  render() {
    return (
      <Router>
        <Route
          exact
          path="/connect"
          component={Connect}
        />
        <Route
          exact
          path="/platforms"
          component={Platforms}
        />
      </Router>
    );
  }
}

export default App;
