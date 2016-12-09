import React, { Component } from 'react';
import axios from 'axios';

class SignupForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userEmail: '',
      password :'',
      confirmationPassword: ''
    }
  }

  loginUser(e) {
    e.preventDefault();
    console.log("You are logging");
  }

  onChangeEmail(e){

    this.setState({userEmail:e.target.value});

  }

  onChangePass(e){
    this.setState({password:e.target.value});
  }

  onChangePassConfirm(e){
    this.setState({confirmationPassword:e.target.value});

  }

  createUser(e){
    e.preventDefault();
    console.log('current state:', this.state)

    axios.post('/api/users/',
    {email: this.state.userEmail, password: this.state.password})
    .then(res => 
      window.location.href = 'http://localhost:3001/');
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <h1>Signup</h1>
          <form onSubmit={this.createUser.bind(this)}>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.onChangeEmail.bind(this)} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" id="password" placeholder="Password" onChange={this.onChangePass.bind(this)}/>
            </div>
            <div className="form-group">
              <label htmlFor="confirmation_password">Confirm Password</label>
              <input type="password" className="form-control" id="confirmation_password" placeholder="Password" onChange={this.onChangePassConfirm.bind(this)} />
            </div>
            <button type="submit" className="btn btn-primary">Create Account</button>
          </form>
        </div>
      </div>
    )
  }
}

export default SignupForm
