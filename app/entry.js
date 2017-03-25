import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

// Featured
import Index from './views/Index';
import About from './views/About';
import Projects from './views/Projects';
import Resume from './views/Resume';
import Stats from './views/Stats';
import Contact from './views/Contact';

// Hidden
import Music from './views/Music';

import Login from './views/Login';
import Admin from './views/Admin';

import NotFound from './views/NotFound';

// All of our CSS
require('../public/css/main.scss');

const PrivateRoute = ({ component, ...rest }) => (
  <Route
    {...rest} render={props => (
    window.id ? (
      React.createElement(component, props)
    ) : (
      <Redirect
        to={{
          pathname: '/login',
          state: { from: props.location },
        }}
      />
    )
  )}
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func,
  location: PropTypes.string, // TODO Verify this type
};

PrivateRoute.defaultProps = {
  component: null,
  location: '',
};


ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact component={Index} />
      <Route path="/about" component={About} />
      <PrivateRoute path="/resume" component={Resume} />
      <Route path="/projects" component={Projects} />
      <Route path="/stats" component={Stats} />
      <Route path="/contact" component={Contact} />
      <Route path="/music" component={Music} />
      <Route path="/login" component={Login} />
      <Route path="/admin" component={Admin} />
      <Route component={NotFound} status={404} />
    </Switch>
  </Router>,
  document.getElementById('root'),
);
