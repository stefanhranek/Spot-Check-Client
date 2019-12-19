import React, { Component } from "react";
// import { Router} from 'react-router';
// import { BrowserRouter, Route, Link } from 'react-router-dom';
import Slideout from 'slideout';
import HamburgerMenu from "./HamburgerMenu";


class Menu extends Component {

    
    // componentDidMount() {
    //     var slideout = new Slideout({
    //         'panel': document.getElementById('panel'),
    //         'menu': document.getElementById('menu'),
    //         'padding': 256,
    //         'tolerance': 70
    //     });

        // document.querySelector('.toggle-button').addEventListener('click', function() {
        //     slideout.toggle();
        //   });
      
    render() {
        return (
        <div className="Menu">
          <nav id="menu">
            <header>
              <section id="topNav">
                <h1 className="spotCheckHeader">Spot Check</h1>
              </section>
            </header>
          </nav>
        </div>
      );
    
    }
}


export default Menu;