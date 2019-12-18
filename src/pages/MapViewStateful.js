import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import * as parkDate from "./../data/skateboard-parks.json";
import HomeTabs from '../components/HomeTabs.js';
import Menu from '../components/Menu.js';
import skateSpotService from './../lib/skateSpot-service';
import { Link } from 'react-router-dom';
import queryString from 'query-string';


class MapViewStateful extends React.Component {
  state = {
    latitude: 41.3851,
    longitude: 2.1734,  /* set to Barcelona's location */
    width: "100vw",
    height: "88vh",
    zoom: 10,
    spotsReady: false,
    selectedPark: null,
    newPin: null,
    skatespots: []
  };

  componentDidMount() {
    // get skate spots from the api and save them in the state and change spotsReady flag
    skateSpotService
      .getAllSkateSpots()
      .then((skatespots)=> {
        console.log('skatespots from the API', skatespots);
        this.setState({ skatespots })
        
      })
  }

  setViewport = (viewportValues) => {
    this.setState(viewportValues);
  }

  setSelectedPark = (selectedPark) => {

    this.setState({ selectedPark })
  }

  handleMapChange =(e) => {
    console.log('LNG LAT',e.lngLat);
    
    this.setNewPin(e.lngLat);
  }

  setNewPin = (location) => {

    this.setState({ newPin:location })

  }

  // useEffect(() => {
  //   const listener = e => {
  //     if (e.key === "Escape") {
  //       setSelectedPark(null);
  //     }
  //   };
  //   window.addEventListener("keydown", listener);

  //   return () => {
  //     window.removeEventListener("keydown", listener);
  //   };
  // }, []);

  renderAddSpotPopup = () => {

    const [ lng, lat ] = this.state.newPin;

    return <Link style={{ width: "100%", height: "100%", zIndex: 9999 }} to={`/add-spot?lng=${lng}&lat=${lat}`} >Add new spot?</Link>;
  } 

  render () {
    const {latitude, longitude, width, height, zoom, spotsReady, selectedPark, skatespots, newPin } = this.state;
    const viewport = {latitude, longitude, width, height, zoom };

    return (
      <div>
      <Menu />
      <HomeTabs />
      <ReactMapGL
        { ...viewport }
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/stefanhranek/ck47tdbs43joe1clhber86t17"
        onViewportChange={(viewport) => {
          this.setViewport(viewport);
        }}
        onClick={this.handleMapChange}
      >
        { newPin ? this.renderAddSpotPopup() : null }
        {skatespots.map(park => (
          <Marker
            key={park._id}
            latitude={park.location.coordinates[1]}
            longitude={park.location.coordinates[0]}
          >
            <button
              className="marker-btn"
              onClick={e => {
                e.preventDefault();
                this.setSelectedPark(park);
              }}
            >
              <img src="./pin.svg
              " alt="Skate Park Icon" />
            </button>
          </Marker>
        ))}

        {selectedPark ? (
          <Popup
            longitude={selectedPark.location.coordinates[0]}
            latitude={selectedPark.location.coordinates[1]}
            onClose={() => {
              this.setSelectedPark(null);
            }}
          >
            <div>
              <h2>{selectedPark.name}</h2>
              <p>{selectedPark.description}</p>
            </div>
          </Popup>
        ) : null}

        {newPin ? (
          <Popup
            style={{ position: "absolute" }}
            longitude={newPin[0]}
            latitude={newPin[1]}
            onClose={() => {
              this.setNewPin(null);
            }}
            onClick={null}
          >
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
}
}

export default MapViewStateful;