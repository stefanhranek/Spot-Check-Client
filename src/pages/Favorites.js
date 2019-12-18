import React from 'react'
// import { Link } from "react-router-dom";
// import countries from "../countries.json";
// import shortid from "shortid";
import Menu from '../components/Menu'
import HomeTabs from '../components/HomeTabs.js';
import FavoritesList from '../components/FavoritesList.js';

// import services
// import userService from './../lib/user-service';

export default function Favorites(props) {
    return (
        <div className="listContainer">
            <Menu />
            <HomeTabs />

            <section>
              <FavoritesList />
            </section>
            
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