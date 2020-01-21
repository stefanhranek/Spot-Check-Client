import React, { Component } from "react";
import HamburgerMenu from '../components/HamburgerMenu';
import { Link } from 'react-router-dom';
import userService from './../lib/user-service';


class Menu extends Component {

    render() {
        return (
        <div className="Menu">
          <nav id="menu">
            
              <section id="topNav">
                <h1 className="spotCheckHeader">SPOT CHECK</h1>
                <section className="topNav">
                  {/* <p>Hello {user.username} ! </p> */}
              </section>
              <section className="topRightNav">
                <div className="topRightNavAlign">
                  <Link to="/map">
                    {' '}
                    <button className="hamburgerList">Map</button>{' '}
                  </Link>
                  <p className="hamburgerList">-</p>
                  <Link to="/favorites">
                    {' '}
                    <button className="hamburgerList">Favorites</button>{' '}
                  </Link>
                  <p className="hamburgerList">-</p>
                  <Link to="/profile">
                    {' '}
                    <button className="hamburgerList">Profile</button>{' '}
                  </Link>
                  <br />
                  <Link to="/home">
                    {' '}
                    {/* <button onClick={logout} className="hamburgerList">Logout</button>{' '} */}
                  </Link>
                </div>
                </section>
              </section>
              
            

          </nav>
        </div>
      );
    
    }
}


export default Menu;