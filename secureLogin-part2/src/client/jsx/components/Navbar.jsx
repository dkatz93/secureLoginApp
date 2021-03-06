import React from 'react';
import { Link } from 'react-router';

const Navbar = () => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav">
          <li className="active"><Link to="/">HOME</Link></li>
          <li className="active"><Link to="/login">LOGIN</Link></li>
          <li className="active"><Link to="/signup">SIGNUP</Link></li>
          <li className="active"><Link to="/login">LOGOUT</Link></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
