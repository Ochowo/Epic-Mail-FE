import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Welcome from '../components/index';

const App = () => (
  <Router>
    <Route exact path="/" component={Welcome} />
  </Router>
);
export default App;
