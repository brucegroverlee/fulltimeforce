import React, { Suspense, lazy } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { history } from '../history';

import { Spinner } from '../components/Spinner/Spinner';

const Home = lazy(() =>
  import('../pages/Home/Home.container')
)

class AppRouter extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Suspense fallback={<Spinner />}>
            <Route
              exact
              path="/"
              component={Home}
            />
          </Suspense> 
        </Switch>
      </Router>
    )
  }
}

export default AppRouter