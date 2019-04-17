import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Button from '@material-ui/core/Button';
import Login from './src/Login'

class App extends Component {
  render() {
    return (
      <Login/>
    //   <div>
    //     <Hello name={this.state.name} />
    //     <p>
    //       Start editing to see some magic happen :)
    //     </p>
    //          <Button variant="contained" color="primary">
    //   Hello World
    // </Button>
    //   </div>
    
    );
  }
}

render(<App />, document.getElementById('root'));
