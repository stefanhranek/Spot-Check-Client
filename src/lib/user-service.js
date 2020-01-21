import axios from 'axios';


class User {
    constructor() {
        this.user = axios.create({
          baseURL: process.env.REACT_APP_API_URL,
          withCredentials: true,
        });
      }


    //   user.profile()
      getUser() {
        return this.user
          .get(process.env.REACT_APP_API_URL + "/user/profile")
          .then(user => {
            return user.data;
      })
      .catch(err => console.log(err));
      }

    //   user.favorites()
      getMyFavorites() {
    
        return this.user.get('/skatespots/favorites')
        .then( response =>  {
            return response.data;
            })
        } 

        //   user.edit()
        getUserByIdAndUpdate(newUser) {
          // const { username, email, password, city } = user
          return this.user
                    .put('/user/edit', newUser)
                    // .put('/',{ username, password, city, email })
                    // .then(({ data }) => data);
                    .then(res => {
                      console.log('DATA', res);
                      
                      return res.data;
                    });

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