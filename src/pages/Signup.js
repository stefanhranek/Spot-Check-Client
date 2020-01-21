import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../lib/AuthProvider';

class Signup extends Component {
  state = { 
  username: '', 
  password: '', 
  email: '',
  usernameError: undefined,
  passwordError: undefined,
  emailError: undefined,
 };

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password, email } = this.state;

    if (username === '') {
      this.setState( {usernameError: 'Username was left blank'} )
      // setInterval( () => {
      //     this.setState(
      //         {usernameError:undefined}
      //     )
      // } , 3000 )
      return;
  }

    if (password === '') {
      this.setState( {passwordError: 'Password was left blank'} )
      // setInterval( () => {
      //     this.setState(
      //         {passwordError:undefined}
      //     )
      // } , 3000 )
      return;
    }

    if (email === '') {
      this.setState( {emailError: 'Email was left blank'} )
      // setInterval( () => {
      //     this.setState(
      //         {emailError:undefined}
      //     )
      // } , 3000 )
      return;
    }
    //  console.log('Signup -> form submit', { username, password });
    this.props.signup({ username, password, email }); // props.signup is Provided by withAuth() and Context API

  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password, email } = this.state;
    return (
      <div className="login-page-wrapper">
        <div className="loginPageContainer">
          {/* <h1 className="signup-header">Create<br/>Account.</h1> */}
          <section className="loginImagesContainer">
            <img className ="loginImage" src="./../../spotCheckNewYellow.png" alt=""/>
          </section>

          <div className="loginFormContainer">
            <form className="signup-form-wrapper" onSubmit={this.handleFormSubmit}>
              <section className="signup-form-section-wrapper">
                <label className="signupLabel">Username:</label>
                <input
                  className="password-input-style"
                  type="text"
                  name="username"
                  value={username}
                  onChange={event => this.handleChange(event)}
                    placeholder={
                      this.state.usernameError
                        ? this.state.usernameError
                        : ""
                    }
                />
              </section>

              <section className="signup-form-section-wrapper">
                <label className="signupLabel">Password:</label>
                <input
                  className="password-input-style"
                  type="password"
                  name="password"
                  value={password}
                  onChange={event => this.handleChange(event)}
                    placeholder={
                      this.state.passwordError
                        ? this.state.passwordError
                        : ""
                    }
                />
              </section>

              <section className="signup-form-section-wrapper">
                <label className="signupLabel">Email:</label>
                <input
                  className="password-input-style"
                  type="email"
                  name="email"
                  value={email}
                  onChange={event => this.handleChange(event)}
                    placeholder={
                      this.state.emailError
                        ? this.state.emailError
                        : ""
                    }
                />
              </section>

              <input className="login-button" type="submit" value="Signup" />
            <p className="alternativePage">
              Already have account?
              <Link className="login-link" to={'/login'}> Login</Link>
            </p>
            </form>

            </div>
        </div>
      </div>
    );
  }
}

export default withAuth(Signup);
