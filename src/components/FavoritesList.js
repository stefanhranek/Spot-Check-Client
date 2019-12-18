import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from './../lib/user-service';

export default class FavoritesList extends Component {
    state = { favoritesList: [] };

    
    componentDidMount() {
        userService
        .getMyFavorites()
        .then( (data) => {
            console.log('HERE IS THE DATA',data);
            this.setState({favoritesList: data.favorites})
        })
        .catch( (err) => console.log(err));
    }
    
    render() {
        const { favoritesList } = this.state;
        const allMyFavorites = favoritesList.map( element => {
            return <div key={element._id}>
                <Link to={`/spot/${element._id}`} 
                    name={element.name}
                    type={element.type}
                    status={element.status} 
                    indoor={element.indoor} 
                    description={element.description} 
                    >
                    <h1 className="favoriteListItem">{element.name}</h1>
                </Link>
                </div>
        }) 
        console.log('Here are all of the FAVORITES',allMyFavorites)
        
        return (
            <div>
                {allMyFavorites}
            </div>
        )
    }
}
