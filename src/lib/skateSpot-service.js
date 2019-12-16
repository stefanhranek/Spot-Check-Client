import axios from 'axios';


class Spot {
    constructor() {
        this.spot = axios.create({
          baseURL: process.env.REACT_APP_API_URL,
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
    getOneSkateSpotById(id) {
      return this.spot
                .get(`/${id}`)
                .then(({ data }) => data);
    }

    // spot.create()
    
    
    // spot.removeOneById(spotId)
    
    
    // spot.updateOneById(spotId) - backlog
    
    
    // spot.getAllByCity(city) - backlog service
  }


  
  const skateSpotService = new Spot();
  
  export default skateSpotService;





