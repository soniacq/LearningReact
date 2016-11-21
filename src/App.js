import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Home from './components/Home';
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


class App extends Component {
  constructor(props){
  super(props);
  this.state = {};
}
  render() {
    return (
      <MuiThemeProvider>
      <div>
      <Router history={hashHistory}>
        <Route path='/' component={Header}>
          <IndexRoute component={Home} />
          <Route path='playerOne' header='Player One' component={Body} />
        </Route>
      </Router>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
