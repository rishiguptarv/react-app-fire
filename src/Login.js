import React, { Component } from 'react';
import { render } from 'react-dom';
import '../style.css';
import Button from '@material-ui/core/Button';
import PhoneInput from 'react-phone-number-input';
import Select from '@material-ui/core/Select';

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
     <Select
            value={this.state.age}
            onChange={this.handleChange}
            inputProps={{
              name: 'age',
              id: 'age-simple',
            }}
          />
    </div>
    
    );
  }
}

export default (Login);
