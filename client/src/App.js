import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Services from './Services';
import Navigator from './Navigator';
import Footer from './Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import serviceData from './serviceData';
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
            <Route path='/about' component={About} />
            <Route path='/services' serviceData={serviceData} component={Services} />
            <Route path='/contact' component={Contact} />
          </Switch>
          <Footer/>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
