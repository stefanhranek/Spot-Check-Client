import React, { Component } from 'react'
import Menu from '../components/Menu';
import userService from './../lib/user-service';
import { Link } from 'react-router-dom';
import { withAuth } from '../lib/AuthProvider';

import BottomNav from '../components/BottomNav';


class Profile extends Component {
    state = {
        username: "",
        password: "",
        email: "",
        city: "",
        mySpots: []
    }


    componentDidMount() {
        this.getUserData();
    }

    getUserData = () => {
        userService.getUser()
        .then( data => {
            const { username, password, email, city, mySpots } = data;
            console.log('HER DA DATA', data);
            
            this.setState({
                username,
                password,
                city,
                email,
                mySpots
            })
        })
        .catch( (err) => console.log(err));
    }

    render() {
        const { user, logout, isLoggedin } = this.props;
        return (
            <div>
                <div className="stickyNav">
                    <Menu />
                </div>

                {/* <h1>PROFILE</h1> */}
                <section className="bannerProfile">
                    <div className="picContainerProfile">
                        <img className="profilePic" src="./../../skateAvatar.jpg" alt="profile-pic"/>
                    </div>
                </section>

                <section className="bioProfile">
                    <div className="bioFillerProfile"></div>
                    <div className="bioFloatDownProfile">
                        <h1 className="username"> @ {this.state.username} </h1>
                        <h3 className="currentLocation"> <img className="profilePin" src="./../../pin.svg" alt="location pin"></img> {this.state.city} </h3>
                        <h3 className="spotsAdded"> <b>{this.state.mySpots.length}</b> SPOTS ADDED </h3>
                        <Link to="/edit-profile">
                            <button className="editProfileButton">Edit Profile</button>
                        </Link>
                        
                            <button onClick={logout} className="editProfileButton">Log Out</button>
                        
                    </div>
                </section>

                <section className="media">
                    <h1>Media</h1>
                    <p className="comingSoon">Coming Soon!</p>
                </section>
                <BottomNav />
            </div>
        )
    }
}

export default withAuth(Profile);