import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../lib/AuthProvider';

class HamburgerMenu extends Component {
  render() {
    const { user, logout, isLoggedin } = this.props;
    return (
      <div
        style={{ 
          border: '10px solid black', 
          borderRadius: '15px', 
          padding: '20px', 
          background: 'rgb(60, 60, 60, .96)',
          height: '100vh',
          zIndex: '10' 
           }}
        >

          <div>

           <section className="topNav">
            <p>Hello USERNAME!</p>
           </section>

            <section>
              <Link to="/map">
                {' '}
                <button className="hamburgerList">View Map</button>{' '}
              </Link>
              <br />
              <Link to="/favorites">
                {' '}
                <button className="hamburgerList">Favorites</button>{' '}
              </Link>
              <br />
              <Link to="/profile">
                {' '}
                <button className="hamburgerList">Profile</button>{' '}
              </Link>
              <br />
              <Link to="/home">
                {' '}
                <button onClick={logout} className="hamburgerList">Logout</button>{' '}
              </Link>
            </section>
            
          </div>
      </div>
    );
  }
}

export default withAuth(HamburgerMenu);
