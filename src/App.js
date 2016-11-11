import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
injectTapEventPlugin();


class App extends Component {
  constructor(props){
  super(props);
  this.state = {};
}
  render() {
    return (
      <MuiThemeProvider>
      <div >

          <Header name='Domain Discovery Tool'/>
          <Body />
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
