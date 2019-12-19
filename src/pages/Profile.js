import React, { Component } from 'react'
import Menu from '../components/Menu';
import userService from './../lib/user-service';
import { Link } from 'react-router-dom';
import { withAuth } from '../lib/AuthProvider';
import BottomNav from '../components/BottomNav';


class Profile extends Component {
    render() {
        const { user, logout, isLoggedin } = this.props;
        return (
            <div>
                <Menu />

                {/* <h1>PROFILE</h1> */}
                <section className="bannerProfile">
                    <div className="picContainerProfile">
                        <img className="profilePic" src="./../../profile-pic.png" alt="profile-pic"/>
                    </div>
                </section>

                <section className="bioProfile">
                    <div className="bioFillerProfile"></div>
                    <div className="bioFloatDownProfile">
                        <h1 className="username"> @ {user.username} </h1>
                        <h3 className="currentLocation"> <img className="profilePin" src="./../../pin.svg" alt="location pin"></img> {user.city} </h3>
                        <h3 className="spotsAdded"> <b>{user.mySpots.length}</b> SPOTS ADDED </h3>
                        <Link to="/edit-profile">
                            <button className="editProfileButton">Edit Profile</button>
                        </Link>
                        <Link to="/logout">
                            <button onClick={logout} className="editProfileButton">Log Out</button>
                        </Link>
                    </div>
                </section>

                <section className="media">
                    <p>Media</p>
                </section>
                <BottomNav />
            </div>
        )
    }
}

export default withAuth(Profile);