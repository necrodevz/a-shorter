import React from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Layout from './components/Layout';

import {Theme as UWPThemeProvider, getTheme} from 'react-uwp/Theme';

function App() {
  return (
    <Router>
      <UWPThemeProvider 
        theme={getTheme({
          themeName: 'dark',
          accent: '#0078D7',
          useFluentDesign: true,
        })}>
          <Layout>
            <Switch>
              <Route exact path='/'>

              </Route>
              <Route path='/extras'>

              </Route>
              <Route path='/onboarding'>

              </Route>
              <Route path='/timekey'>

              </Route>
              <Route path='/xyz'>
              </Route>
            </Switch>
          </Layout>
        </UWPThemeProvider>
    </Router>    
  );
}

export default App;
