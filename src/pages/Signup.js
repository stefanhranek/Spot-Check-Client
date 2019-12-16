import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../lib/AuthProvider';
import Menu from '../components/Menu';

class Signup extends Component {
  state = { username: '', password: '', email: '' };

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password, email } = this.state;
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
      <div className="signup-page-wrapper">
        <Menu />
        <h1 className="signup-header">Create<br/>Account.</h1>
        <form className="signup-form-wrapper" onSubmit={this.handleFormSubmit}>
          <section className="signup-form-section-wrapper">
            <label >Username:</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
            />
          </section>

          <section className="signup-form-section-wrapper">
            <label >Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </section>

          <section className="signup-form-section-wrapper">
            <label >Email:</label>
            <input
              className="password-input-style"
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </section>

          <input className="signup-button" type="submit" value="Signup" />
        </form>

        <p>
          Already have account?
          <Link className="login-link" to={'/login'}> Login</Link>
        </p>
      </div>
    );
  }
}

export default withAuth(Signup);
