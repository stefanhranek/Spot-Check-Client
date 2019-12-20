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
            return response.data;
            })
        } 

        //   user.edit()
        getUserByIdAndUpdate(user) {
          const { username, email, password, city } = user
          return this.user
                    .put('/',{ username, password, city, email })
                    .then(({ data }) => data);
        }


        addToFavorites(spotId) {
          return this.user
                        .patch('/user', { spotId })
        
      }

      removeFromFavorite(spotId) {
        return this.user
                      .patch('/user/remove', { spotId })
      
    }

      
}







  const userService = new User();

  export default userService;