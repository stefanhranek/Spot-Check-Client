import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class BottomNav extends Component {
    render() {
        return (
            <div>
                <nav className="navbar">
                    <ul>
                        <Link>
                            <img className='home-icon' src="./../../public/grey-search-icon.png" alt="search-button"></img>
                        </Link>

                        <Link>
                            <img className='home-icon' src="./../../public/grey-home-icon.png" alt="home-button"></img>
                        </Link>
                        
                        <Link>
                            <img className='home-icon' src="./../../public/grey-profile-icon.png" alt="profile-button"></img>
                        </Link>
                    </ul>
                </nav>
            </div>
        )
    }
}
