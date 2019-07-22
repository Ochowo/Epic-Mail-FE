import React from 'react';
import { Switch as Router, Route } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import setAuthtoken from '../utils/setAuthToken';
import { setCurrentUser, logoutUser } from '../actions/authAction';
import Home from '../views/home';
import Dashboard from '../views/messages/user';
import store from '../store';

if (localStorage.token) {
  // Set auth token
  setAuthtoken(localStorage.token);

  // Decode token to get user info
  const decoded = jwtDecode(localStorage.token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    // redirect to login
    window.location.href = '/';
  }
}
const App = () => (
  <Router>
    <Route exact path="/" component={Home} />
    <Route exact path="/inbox" component={Dashboard} />
  </Router>
);
export default App;
