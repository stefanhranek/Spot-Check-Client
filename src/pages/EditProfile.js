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

                <h1>EDIT PROFILE</h1>
                <section className="banner">
                    <div className="picContainer">
                        <img className="profilePic" src="./../../profile-pic.png" alt="profile-pic"/>
                    </div>
                </section>

                <section className="bio">
                    <div className="bioFiller"></div>
                    <div className="bioFloatDown">
                    <form className="signup-form-wrapper" onSubmit={this.handleFormSubmit}>
                        <section className="signup-form-section-wrapper">
                            <label >Username:</label>
                            <input
                            type="text"
                            name="username"
                            value={user.username}
                            onChange={this.handleChange}
                            />
                        </section>

                        <section className="signup-form-section-wrapper">
                            <label >Password:</label>
                            <input
                            className="password-input-style"
                            type="password"
                            name="password"
                            value={user.password}
                            onChange={this.handleChange}
                            />
                        </section>

                        <section className="signup-form-section-wrapper">
                            <label >Email:</label>
                            <input
                            className="password-input-style"
                            type="email"
                            name="email"
                            value={user.email}
                            onChange={this.handleChange}
                            />
                        </section>

                        <section className="signup-form-section-wrapper">
                            <label >Current City:</label>
                            <input
                            type="text"
                            name="city"
                            value={user.city}
                            onChange={this.handleChange}
                            />
                        </section>

                        <input className="signup-button" type="submit" value="Submit Changes" />
                        </form>
                        
                    </div>
                </section>

                <section className="media">
                    <p>Media</p>
                </section>
            </div>
        )
    }
}

export default withAuth(EditProfile);