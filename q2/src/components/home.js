// Home.js
import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Login from './auth/signin';
import Signup from './auth/signup';
import TrainList from './trains/trainList';
import TrainDetails from './trains/trainDetails';

const Home = () => {
  return (
    <div>
    <h1>Welcome to the Train App!</h1>
    <nav>
      <ul>
        {/* Create links for navigation */}
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/trains">Train List</Link>
        </li>
        {/* Add more links for other routes as needed */}
      </ul>
    </nav>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/trains" component={TrainList} />
      <Route path="/train/:id" component={TrainDetails} />
      {/* Add more routes for other components as needed */}
      {/* The default route can be added if you want to show a specific component on the home page */}
      {/* <Route exact path="/" component={HomeComponent} /> */}
    </Switch>
  </div>
);
};

export default Home;
