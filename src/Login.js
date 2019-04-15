import React, { Component } from 'react';
import { render } from 'react-dom';
import '../style.css';
import Button from '@material-ui/core/Button';
import PhoneInput from 'react-phone-number-input';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';

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
    <Grid
  container
  direction="row"
  justify="center"
  alignItems="center"> 
    <PhoneInput
    placeholder="Enter phone number"
    value={ this.state.phone }
    onChange={ phone => this.setState({ phone }) } />  
    </Grid>
    </div>
  
    
    );
  }
}

export default (Login);
