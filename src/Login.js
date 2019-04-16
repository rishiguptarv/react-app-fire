import React, { Component } from 'react';
import { render } from 'react-dom';
import '../style.css';
import Button from '@material-ui/core/Button';
import 'react-phone-number-input/style.css'
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
  direction="column"
  justify="center"
  alignItems="center"> 
  
    </Grid>
    </div>
  
    
    );
  }
}

export default (Login);
