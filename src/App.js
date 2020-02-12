import React from 'react';
import history from './utils/history';

import { Auth0Provider, useAuth0 } from "./react-auth0-spa";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Theme as UWPThemeProvider, getTheme} from 'react-uwp/Theme';

import Layout from './components/Layout'; 

import Timekey from './outputs/timekey';
import Home from './outputs/home';
import Onboarding from './outputs/onboarding';


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
      redirect_uri={`${window.location.origin}/onboarding`}
      onRedirectCallback={onRedirectCallback}
    >
    <Router history={history}>
      <UWPThemeProvider 
        theme={getTheme({
          themeName: 'dark',
          accent: '#0078D7',
          useFluentDesign: true,
        })}>
          <Layout>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path='/extras'>

              </Route>
              <Route path='/onboarding'>
                <Onboarding />
              </Route>
              <Route path="/Timekey">
                <Timekey />
              </Route>
              <PrivateRoute path="/Market">
                
              </PrivateRoute>
              <Route path='/xyz'>
              </Route>
            </Switch>
          </Layout>
        </UWPThemeProvider>
    </Router>    
  </Auth0Provider>
  );
}

export default App;
