import React, { Component } from 'react';
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
                    <h1 className="favoriteListItem">{element.name}</h1>
                </div>
        }) 
        console.log('HEREREREREEEEEEEEEEEEEEEEE',allMyFavorites)
        
        return (
            <div>
                {allMyFavorites}
            </div>
        )
    }
}
