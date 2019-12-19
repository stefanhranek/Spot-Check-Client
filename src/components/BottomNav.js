import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class BottomNav extends Component {
    
    render() {
        return (
            <div>
                <nav className="navbar">
                    <ul>
                        <Link to="/favorites">
                            <img className='navIcon' src="./../../heart.svg" alt="home-button"></img>
                        </Link>

                        <Link to="/map">
                            <img className='navIcon' src="./../../map.svg" alt="search-button"></img>
                        </Link>

                        <Link to="/profile">
                            <img className='navIcon' src="./../../user.svg" alt="profile-button"></img>
                        </Link>
                    </ul>
                </nav>
            </div>
        )
    }
}
