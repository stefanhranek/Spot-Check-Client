import React, { Component } from 'react';
import { withAuth } from '../lib/AuthProvider';
import Menu from '../components/Menu';
import queryString from 'query-string';
import { Link } from 'react-router-dom';
import skateSpotService from './../lib/skateSpot-service.js'
import BottomNav from '../components/BottomNav';

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
      const { lng, lat } = values;
      this.setState({location:[Number(lng),Number(lat)]});
    }

    handleButtonSubmit = event => {
      event.then( () => {
          this.props.history.goBack();
        })
    };

    handleFormSubmit = event => {
      event.preventDefault();
      const { name, type, status, indoor, description, images, location } = this.state;
      skateSpotService
        .addNewSkateSpot({ name, type, status, indoor, description, images, location })
        .then( () => {
          this.props.history.goBack();
        })
    };
  
    handleChange = event => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
    };

    handleCheckboxChange = event => {
        const { value } = event.target;
        this.setState({ indoor:value  });
      };
  
    render() {
      const { name, type, status, description } = this.state;
      return (
        <div className="addSpotWholePage">
          <Menu />
          <section className="addSpotContainer">
          
            {/* <h1>Add New Skate Spot</h1> */}
            <form classname="addSpotFormContainer" onSubmit={this.handleFormSubmit}>
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
                    className="radioInput"
                    id="indoor"
                    type="radio"
                    name="indoor"
                    value="indoor"
                    onChange={this.handleCheckboxChange}
                    />
                    <label className="indoor" htmlFor="indoor">Indoor</label>
                    <input
                    className="radioInput"
                    id="outdoor"
                    type="radio"
                    name="indoor"
                    value="outdoor"
                    onChange={this.handleCheckboxChange}
                    />
                    <label className="outdoor" htmlFor="outdoor">Outdoor</label>
                  </div>


              <label className="addSpotLabels">DESCRIPTION</label>
              <textarea cols="56" rows="6"
                className="addSpotInput"
                type="text"
                name="description"
                value={description}
                onChange={this.handleChange}
                placeholder="Legendary spot ..."
              />

              <input className="addSpotButton" type="submit" value="ADD A SPOT" />
            </form>
          <Link to="/map">
            <button onSubmit={this.handleButtonSubmit} className="goBackButton">Go Back</button>
          </Link>
          </section>

          <h1 className="floatingText1">Keep the community up to date.</h1>

          <BottomNav />
        </div>
      );
    }
}

export default withAuth(AddSpot);
