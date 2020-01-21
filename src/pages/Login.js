import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../lib/AuthProvider';

class Login extends Component {
  state = { username: '', password: '' };

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    this.props.login({ username, password });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password } = this.state;

    return (
      <div className="login-page-wrapper">

            <div className="loginPageContainer">

                <section className="loginImagesContainer">
                  <img className ="loginImage" src="./../../spotCheckNewYellow.png" alt=""/>
                </section>
        
          <div className="loginFormContainer">
            <form className="login-form-wrapper" onSubmit={this.handleFormSubmit}>
              <section className="login-form-section-wrapper">
                <label className="signupLabel">Username:</label>
                <input
                  className="password-input-style"
                  type="text"
                  name="username"
                  value={username}
                  onChange={this.handleChange}
                />
              </section>

              <section className="login-form-section-wrapper">
                <label className="signupLabel">Password:</label>
                <input
                  className="password-input-style"
                  type="password"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                />
              </section>

              <input className="login-button" type="submit" value="Login" />
            <p className="alternativePage">
              Don't have an account yet?
              <Link className="login-link" to={'/signup'}> Signup</Link>
            </p>
            </form>
          </div>
            </div>

      </div>
    );
  }
}

export default withAuth(Login);
