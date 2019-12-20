import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import MapView from './pages/MapView';
import MapViewStateful from './pages/MapViewStateful';

import AddSpot from './pages/AddSpot';
import SpotDetails from './pages/SpotDetails';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import Favorites from './pages/Favorites';

import AnonRoute from './components/AnonRoute';
import PrivateRoute from './components/PrivateRoute';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <AnonRoute exact path="/home" component={Home} />
          <AnonRoute exact path="/signup" component={Signup} />
          <AnonRoute exact path="/login" component={Login} />

          <PrivateRoute exact path="/map" component={MapViewStateful} />
          <PrivateRoute exact path="/favorites" component={Favorites} />
          <PrivateRoute exact path="/add-spot" component={AddSpot} />
          <PrivateRoute exact path="/spot/:id" component={SpotDetails} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <PrivateRoute exact path="/edit-profile" component={EditProfile} />
          <PrivateRoute exact path="/logout" />
        </Switch>
      </div>
    );
  }
}

export default App;
