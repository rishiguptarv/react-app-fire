import React, { Component } from 'react';
import { render } from 'react-dom';
import '../style.css';
import Button from '@material-ui/core/Button';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
    <div className="Login-component">
    </div>
    );
  }
}

export default (Login);
