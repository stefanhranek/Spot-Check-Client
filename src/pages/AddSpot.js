import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../lib/AuthProvider';
import Menu from '../components/Menu';

class AddSpot extends Component {
    state = { 
        name: '', 
        type: '', 
        status: '',
        indoor: false,
        description: '',
        images: [],
        location: []
     };

    handleFormSubmit = event => {
      event.preventDefault();
      const { name, type, status, indoor, description, images, location } = this.state;
      //  console.log('Signup -> form submit', { username, password });
      this.props.signup({ name, type, status, indoor, description, images, location }); // props.signup is Provided by withAuth() and Context API
    };
  
    handleChange = event => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
    };
  
    render() {
      const { name, type, status, indoor, description, images, location } = this.state;
      return (
        <div>
        <Menu />
          <h1>Add New Skate Spot</h1>
          <form onSubmit={this.handleFormSubmit}>
            <label>Name your spot</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
  
            <label>Type of spot</label>
            <input
              type="text"
              name="type"
              value={type}
              onChange={this.handleChange}
            />
  
            <label>Status</label>
            <input
              type="text"
              name="status"
              value={status}
              onChange={this.handleChange}
            />

            <label>Indoor</label>
            <input
              type="text"
              name="indoor"
              value={indoor}
              onChange={this.handleChange}
            />


            <label>Description</label>
            <input
              type="text"
              name="description"
              value={description}
              onChange={this.handleChange}
            />


            <label>Images</label>
            <input
              type="text"
              name="images"
              value={images}
              onChange={this.handleChange}
            />

            <label>Location</label>
            <input
              type="text"
              name="location"
              value={location}
              onChange={this.handleChange}
            />
  
            <input type="submit" value="Signup" />
          </form>
        </div>
      );
    }
}

export default withAuth(AddSpot);
