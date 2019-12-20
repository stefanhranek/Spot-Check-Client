import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import * as parkDate from "./../data/skateboard-parks.json";
import HomeTabs from '../components/HomeTabs.js';
import Menu from '../components/Menu.js';

const handleMapChange =(e) => {
  console.dir(e.lngLat);
  console.dir( e);
  
  
}

export default function MapView() {
  const [viewport, setViewport] = useState({
    latitude: 41.3851,
    longitude: 2.1734,  /* set to Barcelona's location */
    width: "100vw",
    height: "88vh",
    zoom: 10
  });
  const [selectedPark, setSelectedPark] = useState(null);


  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedPark(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);



  

  return (
    
    <div>
      <Menu />
      <HomeTabs />
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/stefanhranek/ck47tdbs43joe1clhber86t17"
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
        onClick={handleMapChange}
      >
        {parkDate.features.map(park => (
          <Marker
            key={park.properties.PARK_ID}
            latitude={park.geometry.coordinates[1]}
            longitude={park.geometry.coordinates[0]}
          >
            <button
              className="marker-btn"
              onClick={e => {
                e.preventDefault();
                setSelectedPark(park);
              }}
            >
              <img src="./pin.svg
              " alt="Skate Park Icon" />
            </button>
          </Marker>
        ))}

        {selectedPark ? (
          <Popup
            latitude={selectedPark.geometry.coordinates[1]}
            longitude={selectedPark.geometry.coordinates[0]}
            onClose={() => {
              setSelectedPark(null);
            }}
          >
            <div>
              <h2>{selectedPark.properties.NAME}</h2>
              <p>{selectedPark.properties.DESCRIPTIO}</p>
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
}