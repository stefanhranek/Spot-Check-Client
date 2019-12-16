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



    //   user.edit()


    
  }



  const userService = new User();

  export default userService;