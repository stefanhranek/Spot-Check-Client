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
        location: [],
        nameError: undefined,
        typeError: undefined,
        statusError: undefined,
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
      if (name === '') {
        this.setState( {nameError: 'Please insert a name for the spot'} )
        return;
      }
      if (type === '') {
        this.setState( {typeError: 'Choose a valid type: Park, Street, DIY'} )
        return;
      }
      if (status === '') {
        this.setState( {statusError: 'Choose a valid status: Active, WIP, RIP'} )
        return;
      }

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
                onChange={event => this.handleChange(event)}
                    placeholder={
                      this.state.nameError
                        ? this.state.nameError
                        : "Choose wisely..."
                    }
                />
    
              <label className="addSpotLabels">TYPE OF SPOT</label>
              <input
                className="addSpotInput"
                type="text"
                name="type"
                value={type}
                onChange={event => this.handleChange(event)}
                    placeholder={
                      this.state.typeError
                        ? this.state.typeError
                        : "Park / Street / DIY"
                    }
                />
    
              <label className="addSpotLabels">STATUS</label>
              <input
                className="addSpotInput"
                type="text"
                name="status"
                value={status}
                onChange={event => this.handleChange(event)}
                    placeholder={
                      this.state.statusError
                        ? this.state.statusError
                        : "Active / WIP / RIP"
                    }
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
                placeholder="Give your spot a description..."
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
