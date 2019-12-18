import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../lib/AuthProvider';
import Menu from '../components/Menu';
import queryString from 'query-string';

class AddSpot extends Component {
    state = { 
        name: '', 
        type: '', 
        status: '',
        indoor: undefined,
        description: '',
        images: [],
        location: []
     };

     componentDidMount() {
      const values = queryString.parse(this.props.location.search)
      console.log(values.filter) // "top"
      console.log(values.origin) // "im"
      console.log('PARSED URL VALUES FOR LOCATION', values);
      
    }

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

    handleCheckboxChange = event => {
        const { name, value, checked } = event.target;
        console.log('egswegdsgsgsdgsdgs', { name, value, checked });
        
        this.setState({ indoor:value  });
      };
  
    render() {
      const { name, type, status, indoor, description, images, location } = this.state;
      return (
        <div>
          <Menu />
          <section className="addSpotContainer">
          
            {/* <h1>Add New Skate Spot</h1> */}
            <form onSubmit={this.handleFormSubmit}>
              <label className="addSpotLabels">NAME YOUR SPOT</label>
              <input
                className="addSpotInput"
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
                placeholder="Choose wisely ..."
              />
    
              <label className="addSpotLabels">TYPE OF SPOT</label>
              <input
                className="addSpotInput"
                type="text"
                name="type"
                value={type}
                onChange={this.handleChange}
                placeholder="Park / Street / DIY"
              />
    
              <label className="addSpotLabels">STATUS</label>
              <input
                className="addSpotInput"
                type="text"
                name="status"
                value={status}
                onChange={this.handleChange}
                placeholder="Active / WIP / RIP"
              />

              <label className="addSpotLabels">INDOOR?</label>
                  <div className="indoorLabel">
                    <input
                    className="addSpotInput"
                    id="indoor"
                    type="radio"
                    name="indoor"
                    value="indoor"
                    onChange={this.handleCheckboxChange}
                    />
                    <label for="indoor">Indoor</label>
                    <input
                    className="addSpotInput"
                    id="outdoor"
                    type="radio"
                    name="indoor"
                    value="outdoor"
                    onChange={this.handleCheckboxChange}
                    />
                    <label for="outdoor">Outdoor</label>
                  </div>


              <label className="addSpotLabels">DESCRIPTION</label>
              <textarea cols="54" rows="6"
                className="addSpotInput"
                type="text"
                name="description"
                value={description}
                onChange={this.handleChange}
                placeholder="Legendary spot ..."
              />


              {/* <label>Images</label>
              <input
                type="text"
                name="images"
                value={images}
                onChange={this.handleChange}
              /> */}

              {/* <label>Location</label>
              <input
                type="text"
                name="location"
                value={location}
                onChange={this.handleChange}
              /> */}
    
              <input type="submit" value="ADD A SPOT" />
            </form>
          </section>
        </div>
      );
    }
}

export default withAuth(AddSpot);
