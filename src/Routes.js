import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ComingSoon from './ComingSoon';
import Home from './Home';
import Test from './Test';


export default class Routes extends Component {
    render() {
      return (
        <Switch>
          <Redirect
            exact
            from="/"
            to="/home"
          />
          <Route
            component={Test}
            exact
            path="/home"
          />
          <Route
            component={ComingSoon}
            exact
            path="/upload"
          />
          <Route
            component={ComingSoon}
            exact
            path="/docs"
          />
          <Route
            component={ComingSoon}
            exact
            path="/soon"
          />
          <Route
            component={ComingSoon}
            exact
            path="/statastic"
          />
          <Route
            component={ComingSoon}
            exact
            path="/soon"
          />
          <Route
            component={ComingSoon}
            exact
            path="/soon"
          />
          <Route
            component={ComingSoon}
            exact
            path="/soon"
          />
          <Route
            component={ComingSoon}
            exact
            path="/soon"
          />
          <Route
            component={ComingSoon}
            exact
            path="/under-development"
          />
          <Route
            component={ComingSoon}
            exact
            path="/not-found"
          />
          {/* <Redirect to="/not-found" /> */}
        </Switch>
      );
    }
  }