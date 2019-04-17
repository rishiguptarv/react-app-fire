import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {Select, BootstrapInput, MenuItem, Input, Button } from '@material-ui/core';
import firebase from firebase;

  const config = {
    apiKey: "AIzaSyB5OTFxrmsLItoxP6ISO9gxTtjcSN9FlXQ",
    authDomain: "phone-login-536c9.firebaseapp.com",
    databaseURL: "https://phone-login-536c9.firebaseio.com",
    projectId: "phone-login-536c9",
    storageBucket: "phone-login-536c9.appspot.com",
    messagingSenderId: "305382960164"
  };
  firebase.initializeApp(config);


 class Login extends React.Component {
  //  constructor(props){
  //    super(props);
  //  }
      state =  {
      login:'',
      countryCode:'',
      phone:''
      }

  onTextChange =(event)=>{
    this.setState({ [event.target.name]: event.target.value });
   console.log(event.state);
  }

  render(){
     console.log(this.state);
     const { classes } = this.props;
    return (
      <div>
      <Select inputProps={{name: 'countryCode',id: 'countryCode'}}placeholder='Select your country' onChange={this.onTextChange} value={this.state.countryCode}>
            <MenuItem value={'+91'}>+91</MenuItem>
            <MenuItem value={'+92'}>+92</MenuItem>
            <MenuItem value={'+93'}>+93</MenuItem>
            </Select>

      <Input inputProps={{name: 'phone',id: 'phone'}} placeholder={"phone"} value= {this.state.phone} onChange={this.onTextChange} />
       <Button variant="contained" color="primary">
      Send Code
    </Button>
      </div>
      
    );
  }

}

export default Login;