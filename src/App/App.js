import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom';

// import pages
import ConnectPage from '../Pages/connect';
import PlatformsPage from '../Pages/platforms';
import UploadPage from '../Pages/upload';
import EditPage from '../Pages/edit';
import ReviewPage from '../Pages/review';
import PublishedPage from '../Pages/published';


class App extends Component {
  render() {
    return (
      <Router>
        <Route
          exact
          path="/connect"
          component={ConnectPage}
        />
        <Route
          exact
          path="/platforms"
          component={PlatformsPage}
        />
        <Route
          exact
          path="/upload"
          component={UploadPage}
        />
        <Route
          exact
          path="/edit"
          component={EditPage}
        />
        <Route
          exact
          path="/review"
          component={ReviewPage}
        />
        <Route
          exact
          path="/published"
          component={PublishedPage}
        />
      </Router>
    );
  }
}

export default App;
