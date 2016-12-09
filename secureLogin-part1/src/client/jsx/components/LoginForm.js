import React, { Component } from 'react';
import axios from 'axios';
class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state= {
      userEmail : '',
      password: ''
    }
  }


loginUser(e) {
    e.preventDefault();
    axios.get(`/api/users/${this.state.userEmail}/${this.state.password}`)
    .then(res=>{
      window.location.href = 'http://localhost:3001/';
    })
    .catch()

    console.log("You are logging in a user");

  }

  onChangeUserEmail(e){
    this.setState({userEmail: e.target.value});

  }

  onChangePassword(e){
    this.setState({password: e.target.value});

  }

  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <form onSubmit={this.loginUser.bind(this)}>
            <h1>Login</h1>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.onChangeUserEmail.bind(this)} />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={this.onChangePassword.bind(this)} />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm