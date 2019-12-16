import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../lib/AuthProvider';

class Home extends Component {
  render() {
    const { user, logout, isLoggedin } = this.props;
    return (
      <div>
        {isLoggedin ? (
          
          <div>
            <p>username: {user.username}</p>
            <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <div className="homePageContainer">
              <section className="homeImagesContainer">
                <img className ="homeImage" src="./../../spotCheckLogo.png" alt=""/>
                {/* <div className ="fadedHomePicture"></div> */}
                <img className ="homeImage" src="./../../spotCheckHome.png" alt=""/>
              </section>
              <section className="container">
                    <Link to="/login">
                    {' '}
                    <button className="first wrap">Login</button>{' '}
                    </Link>
                    <br />
                    <Link to="/signup">
                    {' '}
                    <button className="first wrap">Signup</button>{' '}
                    </Link>

                    
              </section>
          </div>
        )}
      </div>
    );
  }
}

export default withAuth(Home);
