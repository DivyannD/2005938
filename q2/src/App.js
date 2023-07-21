// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home';
// Remove individual imports of Login, Signup, TrainList, TrainDetails, etc.

const App = () => {
  return (
    <Router>
      <Switch>
        {/* You can add other routes here if needed */}
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
