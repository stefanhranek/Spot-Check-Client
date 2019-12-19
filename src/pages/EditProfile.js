import React, { Component } from 'react'
import Menu from '../components/Menu';
// import userService from './../lib/user-service';
// import { Link } from 'react-router-dom';
import { withAuth } from '../lib/AuthProvider';
import userService from '../lib/user-service';
import BottomNav from '../components/BottomNav';


class EditProfile extends Component {
    state = {
        username: '',
        password: '',
        email: '',
        city: ''
    }

    handleFormSubmit = event => {
        event.preventDefault();
        const { user } = this.state;
        userService
          .getUserByIdAndUpdate({ user })
          .then( () => {
            this.props.history.goBack();
          })
    };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    render() {
        const { user, logout, isLoggedin } = this.props;
        const { username, email, password, city } = this.props
        return (
            <div>
                <Menu />

                
                <section className="banner">
                    <div className="picContainerEdit">
                        <img className="profilePic" src="./../../profile-pic.png" alt="profile-pic"/>
                    </div>
                </section>

                <section className="bio">
                    {/* <div className="bioFiller"></div> */}
                    <div className="bioFloatDown">
                    <form className="editProfileForm" onSubmit={this.handleFormSubmit}>
                        <section className="editProfileSectionWrapper">
                            <label className="addSpotLabels">USERNAME</label>
                            <input
                            className="addSpotInput"
                            type="text"
                            name="username"
                            value={username}
                            onChange={this.handleChange}
                            />
                        </section>

                        <section className="editProfileSectionWrapper">
                            <label className="addSpotLabels">PASSWORD</label>
                            <input
                            className="addSpotInput"
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.handleChange}
                            />
                        </section>

                        <section className="editProfileSectionWrapper">
                            <label className="addSpotLabels">EMAIL</label>
                            <input
                            className="addSpotInput"
                            type="email"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                            />
                        </section>

                        <section className="editProfileSectionWrapper">
                            <label className="addSpotLabels">CURRENT CITY</label>
                            <input
                            className="addSpotInput"
                            type="text"
                            name="city"
                            value={city}
                            onChange={this.handleChange}
                            />
                        </section>

                        <input className="editProfile-button" type="submit" value="Save changes" />
                        </form>
                        
                    </div>
                </section>
                <BottomNav />
            </div>
        )
    }
}

export default withAuth(EditProfile);