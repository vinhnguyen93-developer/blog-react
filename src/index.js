import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Route from "./shared/libs/CustomRoute";
import * as serviceWorker from './serviceWorker';
import "./index.css";

import Home from './pages/home';
import Login from './pages/auth/login';
import Register from './pages/auth/register';

import BlogDetail from "./pages/blog";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact component={Home} path="/"/>
      <Route component={BlogDetail} path="/blog/:id"/>
      <Route component={Login} path="/login"/>
      <Route component={Register} path="/register"/>
    </Switch>
  </Router>
  ,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
