/* global document */
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import style from '../assets/stylesheets/main.scss'; // eslint-disable-line
import App from './components/App';
import SignupForm from './components/SignupForm';
import Post from './components/Post';
import LoginForm from './components/LoginForm';

// import LoginForm from './components/LoginForm';
import Home from './components/Home';

const rootRouter = (
  <Router history={browserHistory} >
    <Route path="/" component={App} >
      <IndexRoute component={Home} />
      <Route path="/signup" component={SignupForm} />
      <Route path="/login" component={LoginForm} />
      <Route path="/posts" component={Post} />
      <Route path="/logout" component={LogoutForm} />
    </Route>
  </Router>
);

render(rootRouter, document.getElementById('app'));