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

        //   user.edit()
        getUserByIdAndUpdate(user) {
          const { username, email, password, city } = user
          return this.user
                    .put('/user',{ username, password, city, email })
                    .then(({ data }) => data);
        }

        addToFavorites() {

          return this.user.get('/')
          .then( (data) => console.log(data))
          .catch( (err) => console.log(err));

        }

      }







  const userService = new User();

  export default userService;