import React from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Layout from './components/Layout'; 

import Timekey from './outputs/timekey';
import Market from './outputs/market';
import Home from './outputs/home';

function App() {
  
  return (
    <Layout>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/timekey">
              <Timekey />
            </Route>
            <Route path="/market">
              <Market />
            </Route>
          </Switch>
        </Router>
      </Layout>
  );
}

export default App;
