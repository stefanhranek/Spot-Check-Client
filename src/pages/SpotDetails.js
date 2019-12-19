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
                        <h1 className="detailsNameHeader">{favorites.name}</h1>
                        <div className="spotDetailsBanner"></div>
                        <div className="spotDetailsContainer">
                            <div className="spotNameAndLikeButton">
                            
                                <button className="addToFavorites">Add to favorites</button>
                            </div>
                            <div>
                                <h3>INFORMATION</h3>
                                <hr/>
                            <section className="infoDetails">
                                <section className="singleDetailWrap">
                                    <h3>TYPE:</h3>
                                    <p className="spotDetailValues">{favorites.type}</p>
                                </section>
                                <section className="singleDetailWrap">
                                    <h3>STATUS:</h3>
                                    <p className="spotDetailValues">{favorites.status}</p>
                                </section>
                                <section className="singleDetailWrap">
                                    <h3>INDOOR?:</h3>
                                    <p className="spotDetailValues">{favorites.indoor}</p>
                                </section>
                                
                                <h3>DESCRIPTION</h3>
                                    <p className="spotDetailValues">{favorites.description}</p>
                            </section>
                            </div>
                        <button onSubmit={this.handleButtonSubmit} className="goBackButtonDetails">Go Back</button>
                        </div>
                        <BottomNav />
                    </div>
                )
            }
        }
        

export default withAuth(SpotDetails);