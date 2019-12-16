import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import MapView from './pages/MapView';
import AddSpot from './pages/AddSpot';
import SpotDetails from './pages/SpotDetails';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import Navbar from './components/Navbar';
import Favorites from './pages/Favorites';
import HamburgerMenu from './components/HamburgerMenu';


import AnonRoute from './components/AnonRoute';
import PrivateRoute from './components/PrivateRoute';
import Menu from './components/Menu';

class App extends Component {
  render() {
    return (
      <div className="App">
          
        {/* Keep for easy development navigation, but  */}
        {/* Remove later for final deployment */}

        <Switch>
          <AnonRoute exact path="/home" component={Home} />
          <AnonRoute exact path="/signup" component={Signup} />
          <AnonRoute exact path="/login" component={Login} />

          <PrivateRoute exact path="/map" component={MapView} />
          <PrivateRoute exact path="/favorites" component={Favorites} />
          <PrivateRoute exact path="/add-spot" component={AddSpot} />
          <PrivateRoute exact path="/spot/:id" component={SpotDetails} />
          <PrivateRoute exact path="/profile" component={EditProfile} />
          <PrivateRoute exact path="/edit-profile" component={Profile} />
          <PrivateRoute exact path="/logout" />
        </Switch>
      </div>
    );
  }
}

export default App;
