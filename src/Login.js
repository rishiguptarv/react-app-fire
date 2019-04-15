import React, { Component } from 'react';
import { render } from 'react-dom';
import '../style.css';
import Button from '@material-ui/core/Button';
import PhoneInput from 'react-phone-number-input'

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
      <PhoneInput
    placeholder="Enter phone number"
    value={ this.state.phone }
    onChange={ phone => this.setState({ phone }) } />
    </div>
    );
  }
}

export default (Login);
