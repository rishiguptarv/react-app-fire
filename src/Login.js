import React from 'react';
import faker from 'faker';
import _ from 'lodash';
import {Select, BootstrapInput, MenuItem, Input } from '@material-ui/core';


 class Login extends React.Component {

  state =  {
    login:""
  }

  render(){
    return (
      <div>
      <Select placeholder='Select your country'>
            <MenuItem value={+91}>India</MenuItem>
            <MenuItem value={+92}>dummy</MenuItem>
            <MenuItem value={+93}>dummy</MenuItem>
            </Select>

      <Input placeholder='phone' />
      </div>
    );
  }

}

export default Login;