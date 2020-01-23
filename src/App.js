import React from 'react';

import {createBrowserHistory} from 'history';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Layout from './components/Layout'; 

import Timekey from './outputs/timekey';
import Market from './outputs/market';
import Home from './outputs/home';


let history = createBrowserHistory();

function App() {
  
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  return (
    <Layout>
        <Router histor={history}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Timekey">
              <Timekey />
            </Route>
            <Route path="/Market">
              <Market />
            </Route>
          </Switch>
        </Router>
      </Layout>
  );
}

export default App;
