import React from 'react';

import {Route, Switch, useRouteMatch, Redirect} from 'react-router-dom';

import Layout from './Layout'
import Main from './Main'
import EditTimeKey from './EditTimeKey';
import PayAdvices from './PayAdvices';
import Supervisor from './Supervisor';

function TimeKey() {
  const {url} = useRouteMatch();
  console.log(url)
  return (
    <Layout headerText={"Timekey"}>
        <Switch>
          <Route exact path={`${url}`+ "/"}>
            <Main />
          </Route>
          <Route path={`${url}`+ "/payAdvices"}>
            <PayAdvices />
          </Route>
          <Route path={`${url}`+ "/Supervisor"}>
            <Supervisor />
          </Route>
        </Switch>
    </Layout>    
  );
}

export default TimeKey;
