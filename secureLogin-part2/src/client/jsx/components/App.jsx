import React, { Component } from 'react';
import Navbar from './Navbar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyState: '',
    };
  }

  render() {
    return (
      <div id="app-root">
        <Navbar />
        <div className="container">
          { this.props.children ? this.props.children : null }
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.element.isRequired,
};


export default App;
