import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Description from './user/components/Description';
import Offers from './user/pages/Offers';
import Sessions from './user/pages/Sessions';
import NewPackage from './packages/pages/NewPackage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Description />
          <Offers />
          <Sessions />
        </Route>
        <Route path="/packages/new" exact>
          <NewPackage />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
