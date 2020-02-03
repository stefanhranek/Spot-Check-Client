import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from './../lib/user-service';

export default class FavoritesList extends Component {
    state = { 
        favoritesList: []
    };

    getFavorites = () => {
        userService
        .getMyFavorites()
        .then( (data) => {
            this.setState({favoritesList: data.favorites})
        })
        .catch( (err) => console.log(err))
    }

    componentDidMount() {
        this.getFavorites();
    }
    
    removeFavorite = (id) => {
        userService.removeFromFavorite(id)
        .then(() => {
        this.getFavorites();
      })
    }

    render() {
        const { favoritesList } = this.state;
        const allMyFavorites = favoritesList.map( element => {
            return <div key={element._id}>
                <div 
                    name={element.name}
                    type={element.type}
                    status={element.status} 
                    indoor={element.indoor} 
                    description={element.description} 
                    >
                    <section className="favoriteListItemWrapper">
                        <Link to={`/spot/${element._id}`} className="flexRowThis">
                            <img className="favoritesIcon" src="./../../skateSpotIcon.png" alt="icon"/>
                            <h1 className="favoriteListItem">{element.name}</h1>
                        </Link>
                            <img onClick={()=>this.removeFavorite(element._id)} className="favoritesIconButton" src="./../../remove.svg" alt="icon"/>
                    </section>
                </div>
                </div>
        }) 
        
        if (!favoritesList.length) {
            return (
                <div className="emptyMessage">
                    <p>'No favorites yet, add spots from the map.'</p>
                </div>
            )
        }

        else {
            return (
                <div>
                    {allMyFavorites}
                </div>
            )
        }
    }
}
