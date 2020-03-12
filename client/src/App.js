import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Navigator from './Navigator';
import 'bootstrap/dist/css/bootstrap.min.css';

// Redux
import { Provider } from 'react-redux';
import store from './store';
// import setAuthToken from './utils/setAuthToken';

import './App.css';

// if (localStorage.token) {
//   setAuthToken(localStorage.token);
// }

const App = () => {

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navigator/>
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
