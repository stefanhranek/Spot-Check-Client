import axios from 'axios';


class User {
    constructor() {
        this.user = axios.create({
          baseURL: process.env.REACT_APP_API_URL,
          withCredentials: true,
        });
      }


    //   user.profile()


    //   user.favorites()
      getMyFavorites() {
    
        return this.user.get('/skatespots/favorites')
        .then( response =>  {
            console.log('RESPONSE.dATA', response.data);
            return response.data;
            })
        } 
      }



    //   user.edit()






  const userService = new User();

  export default userService;