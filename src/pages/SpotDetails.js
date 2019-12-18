import React, { Component } from 'react'
import Menu from '../components/Menu';
import userService from './../lib/user-service';
import { Link } from 'react-router-dom';
import { withAuth } from '../lib/AuthProvider';


class SpotDetails extends Component {
    render() {
        const { name, type, status, indoor, description, images, location } = this.props;
        return (
            <div>
                <Menu />
                <h1>SPOT DETAILS</h1>
            </div>
        )
    }
}

export default withAuth(SpotDetails);