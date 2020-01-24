import React from 'react';
import history from './utils/history';

import {Router, Route, Switch} from 'react-router-dom';
import { Auth0Provider, useAuth0 } from "./react-auth0-spa";

import Layout from './components/Layout'; 

import Timekey from './outputs/timekey';
import Market from './outputs/market';
import Home from './outputs/home';


const PrivateRoute = ({ setLoading, component: Component, path, ...rest }) => {
  const { loading, isAuthenticated, loginWithRedirect } = useAuth0();

  React.useEffect(() => {
    if (loading || isAuthenticated) {
      setLoading(true);
      return;
    }
    const fn = async () => {
      await loginWithRedirect({
        appState: { targetUrl: path }
      });
    };
    fn();
  }, [loading, isAuthenticated, loginWithRedirect, path]);

  const render = props =>
    isAuthenticated === true ? <Component {...props} /> : null;

  return <Route path={path} render={render} {...rest} />;
};

function App() {
  
  const [progressloading, setProgressLoading] = React.useState(false)
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
    <Layout loading={progressloading}>
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute setLoading={setProgressLoading} path="/Timekey">
            <Timekey />
          </PrivateRoute>
          <PrivateRoute setLoading={setProgressLoading} path="/Market">
            <Market />
          </PrivateRoute>
        </Switch>
      </Router>
    </Layout>
  </Auth0Provider>
  );
}

export default App;
