import React, { Component } from 'react'
import Menu from '../components/Menu';
import userService from './../lib/user-service';
import { Link } from 'react-router-dom';
import { withAuth } from '../lib/AuthProvider';
import skateSpotService from '../lib/skateSpot-service';
import BottomNav from '../components/BottomNav';


class SpotDetails extends Component {
    state = { 
            // name: '', 
            // type: '', 
            // status: '',
            // indoor: '',
            // description: '',
            favorites: []
            };

            
            componentDidMount() {
                const { id } = this.props.match.params;
                console.log('this.props', this.props);


                skateSpotService
                .getOneSkateSpotById(id)
                .then( (response) => {
                    console.log('HERE IS THE skate spot response',response);
                    this.setState({favorites: response})
                })
                .catch( (err) => console.log(err));
            }

            render() {
                const { favorites } = this.state;
                console.log('favorites',favorites);

                return (
                    <div>
                        <Menu />
                        <h1>SPOT DETAILS</h1>
                        <div className="spotDetailsBanner"></div>
                        <div className="spotDetailsContainer">
                            <div className="spotNameAndLikeButton">
                                <h3>{favorites.name}</h3>
                                <button>insert heart button</button>
                            </div>
                            <div>
                                <p>INFO</p>
                                <hr/>
                            <section className="infoDetails">
                                <h3>TYPE</h3>
                                    <p>{favorites.type}</p>
                                <h3>STATUS</h3>
                                    <p>{favorites.status}</p>
                                <h3>INDOOR</h3>
                                    <p>{favorites.indoor}</p>
                                <h3>DESCRIPTION</h3>
                                    <p>{favorites.description}</p>
                            </section>
                            </div>
                        <button onSubmit={this.handleButtonSubmit} className="goBackButton">Go Back</button>
                        </div>
                        <BottomNav />
                    </div>
                )
            }
        }
        

export default withAuth(SpotDetails);