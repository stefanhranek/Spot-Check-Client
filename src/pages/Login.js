import React, { Component } from 'react';
import { withAuth } from '../lib/AuthProvider';
import Menu from '../components/Menu';

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

          <Menu /> 
          {/* Remove later */}

          <h1 className="login-header">Welcome<br/>Back.</h1>


          <form className="login-form-wrapper" onSubmit={this.handleFormSubmit}>
            <section className="login-form-section-wrapper">
              <label>Username:</label>
              <input
                type="text"
                name="username"
                value={username}
                onChange={this.handleChange}
              />
            </section>

            <section className="login-form-section-wrapper">
              <label>Password:</label>
              <input
                className="password-input-style"
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
            </section>

            <input className="login-button" type="submit" value="Login" />
          </form>

      </div>
    );
  }
}

export default withAuth(Login);
