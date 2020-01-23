import React from 'react';
import history from './utils/history';

import {Router, Route, Switch} from 'react-router-dom';
import { Auth0Provider } from "./react-auth0-spa";

import Layout from './components/Layout'; 

import Timekey from './outputs/timekey';
import Market from './outputs/market';
import Home from './outputs/home';




function App() {
  

  const onRedirectCallback = appState => {
    history.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  };
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  return (
    <Auth0Provider
    domain={process.env.REACT_APP_AUTH0_DOMAIN}
    client_id={process.env.REACT_APP_AUTH0_CLIENTID}
    redirect_uri={`${window.location.origin}/Timekey`}
    onRedirectCallback={onRedirectCallback}
  >
    <Layout>
      <Router history={history}>
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
  </Auth0Provider>
  );
}

export default App;
