import React, { Component } from 'react'
import Menu from '../components/Menu';
import userService from './../lib/user-service';

export default class Profile extends Component {
    render() {
        return (
            <div>
                <Menu />
                <h1>PROFILE</h1>
                <section className="banner">
                    {/* <img src="" alt=""/> */}
                    <div className="profilePic"></div>
                </section>

                <section className="bio">

                </section>

                <section className="media">

                </section>
            </div>
        )
    }
}
