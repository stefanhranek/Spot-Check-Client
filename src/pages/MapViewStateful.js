import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import HomeTabs from '../components/HomeTabs.js';
import Menu from '../components/Menu.js';
import skateSpotService from './../lib/skateSpot-service';
import { Link } from 'react-router-dom';
import BottomNav from '../components/BottomNav.js';



class MapViewStateful extends React.Component {
  state = {
    latitude: 41.3851,
    longitude: 2.1734,  /* set to Barcelona's location */
    width: "100vw",
    height: "93.5vh",
    zoom: 10,
    spotsReady: false,
    selectedPark: null,
    newPin: null,
    skatespots: [],
    pinVisible: false,
    selectedParkVisible: false
  };

  componentDidMount() {
    // get skate spots from the api and save them in the state and change spotsReady flag
    skateSpotService
      .getAllSkateSpots()
      .then((skatespots)=> {
        this.setState({ skatespots })
        
      })
  }

  setViewport = (viewportValues) => {
    this.setState(viewportValues);
  }

  setSelectedPark = (selectedPark) => {

    this.setState({ selectedPark, selectedParkVisible: true, pinVisible: false })
  }

  handleMapChange =(e) => {
    
    this.setNewPin(e.lngLat);
  }

  setNewPin = (location) => {
    const pinVisible = !this.state.pinVisible
    this.setState({ newPin:location, pinVisible })

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

  renderSpotDetailsPopup = (id) => {
    const { _id } = this.state.selectedPark;
    return <Link style={{  width: "100%", height: "100%", zIndex: 9999 }} to={`/spot/${_id}`} ><div className="addNewSpotPopUp">SEE SPOT DETAILS</div></Link>;
  } 


  renderAddSpotPopup = () => {

    const [ lng, lat ] = this.state.newPin;

    return <Link style={{ width: "100%", height: "100%", zIndex: 9999 }} to={`/add-spot?lng=${lng}&lat=${lat}`} ><div className="addNewSpotPopUp">ADD NEW SPOT?</div></Link>;
  } 

  render () {
    const {latitude, longitude, width, height, zoom, spotsReady, selectedPark, skatespots, newPin, pinVisible, selectedParkVisible} = this.state;
    const viewport = {latitude, longitude, width, height, zoom };

    return (
      <div>
      <Menu />
      <HomeTabs />
      <ReactMapGL
        { ...viewport }
        className="mapBox"
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/mapbox/dark-v10"
        onViewportChange={(viewport) => {
          this.setViewport(viewport);
        }}
        onClick={this.handleMapChange}
      >
        {(selectedPark && selectedParkVisible) ? this.renderSpotDetailsPopup()  : null}
        { (newPin && pinVisible) ? this.renderAddSpotPopup() : null }
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

        {selectedPark ? (this.renderSpotDetailsPopup(), (
          <Popup
            longitude={selectedPark.location.coordinates[0]}
            latitude={selectedPark.location.coordinates[1]}
            onClose={() => {
              this.setSelectedPark(null);
            }}
            
          >
            
              <div>
                <h2 className="spotTitleOnMap">{selectedPark.name}</h2>
                <p className="spotDetailsOnMap">{selectedPark.description}</p>
              </div>
            
          </Popup>
        )) : null}

        { (newPin && pinVisible) ? (
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
      <BottomNav />
    </div>
  );
}
}

export default MapViewStateful;