import axios from 'axios';


class Spot {
    constructor() {
        this.spot = axios.create({
          baseURL: process.env.REACT_APP_API_URL + '/skatespots',
          withCredentials: true,
        });
      }
  
    // spot.getAll()
    getAllSkateSpots() {
      return this.spot
                .get()
                .then(({ data }) => data);
    }
  
    // spot.getOneById(spotId)
    getOneSkateSpotById(_id) {
      return this.spot
                .get(`/spot-details/${_id}`)
                .then(({ data }) => data);
    }

    // spot.create()
    addNewSkateSpot(skateSpotInfo) {
      const { name, type, status, indoor, description, images, location } = skateSpotInfo;
      console.log('{ name, type, status, indoor, description, images, location }', { name, type, status, indoor, description, images, location });
      
    const locationObj = { type: 'Point', coordinates: location }

      return this.spot
      .post("",{ name, type, status, indoor, description, images, location: locationObj })
      .then(({ data }) => data);
    }
    
    // spot.removeOneById(spotId)
    
    
    // spot.updateOneById(spotId) - backlog
    
    
    // spot.getAllByCity(city) - backlog service
  }


  
  const skateSpotService = new Spot();
  
  export default skateSpotService;





