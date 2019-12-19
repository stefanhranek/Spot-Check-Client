import React, { Component } from 'react'
import Menu from '../components/Menu';
// import userService from './../lib/user-service';
// import { Link } from 'react-router-dom';
import { withAuth } from '../lib/AuthProvider';
import userService from '../lib/user-service';


class EditProfile extends Component {
    state = {
        user: {}
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
                            value={user.username}
                            onChange={this.handleChange}
                            />
                        </section>

                        <section className="editProfileSectionWrapper">
                            <label className="addSpotLabels">PASSWORD</label>
                            <input
                            className="addSpotInput"
                            type="password"
                            name="password"
                            value={user.password}
                            onChange={this.handleChange}
                            />
                        </section>

                        <section className="editProfileSectionWrapper">
                            <label className="addSpotLabels">EMAIL</label>
                            <input
                            className="addSpotInput"
                            type="email"
                            name="email"
                            value={user.email}
                            onChange={this.handleChange}
                            />
                        </section>

                        <section className="editProfileSectionWrapper">
                            <label className="addSpotLabels">CURRENT CITY</label>
                            <input
                            className="addSpotInput"
                            type="text"
                            name="city"
                            value={user.city}
                            onChange={this.handleChange}
                            />
                        </section>

                        <input className="signup-button" type="submit" value="Save changes" />
                        </form>
                        
                    </div>
                </section>

            </div>
        )
    }
}

export default withAuth(EditProfile);