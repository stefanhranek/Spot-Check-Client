import React, { Component } from 'react'
import { Link } from "react-router-dom";
// import countries from "../countries.json";
import skatespots from "./../data/skateboard-parks.json"
// import shortid from "shortid";
import Menu from '../components/Menu'

export default function Favorites(props) {
    return (
        <div className="listContainer">
            <Menu />
            <h1>FAVORITES LIST</h1>
        </div>
      );
    }
                //   {skatespots.map(spot => (
                //     <div className="FavoritesList" key={shortid.generate()}>
                //     <Link to={`/spot/`}> {/* /{:id} */}
                //         <img
                //           className="icon"
                //           src={`https://www.countryflags.io/${country.cca2.toLowerCase()}/flat/64.png`}
                //           alt=""
                //         />
                //         {spot.name.common}
                //       </Link>
                //     </div>
                //   ))}