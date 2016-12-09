import React, { Component } from 'react';
import axios from 'axios';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  createUser(e) {
    e.preventDefault();
    axios.post('/api/users', {
      email: this.state.email,
      password: this.state.password
    })
    .then(res => window.location.href = '/posts')
    .then(user => console.log(user));
  }

  updateInput(field, event) {
    this.setState({
      [field]: event.target.value
    })
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <h1>Signup</h1>
          <form onSubmit={this.createUser.bind(this)}>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                value={this.state.email}
                onChange={this.updateInput.bind(this, 'email')}
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                value={this.state.password}
                onChange={this.updateInput.bind(this, 'password')}
                type="password"
                className="form-control"
                id="password"
                placeholder="Password" />
            </div>
            <div className="form-group">
              <label htmlFor="confirmation_password">Confirm Password</label>
              <input
                value={this.state.confirmPassword}
                onChange={this.updateInput.bind(this, 'confirmPassword')}
                type="password"
                className="form-control"
                id="confirmation_password"
                placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-primary">Create Account & Login</button>
          </form>
        </div>
      </div>
    )
  }
}

export default SignupForm
