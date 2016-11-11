import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import logo from '../images/ddt_logo2.png';
import logoNYU from '../images/nyu_logo_purple.png';
import IconButton from 'material-ui/IconButton';

//import FontIcon from 'material-ui/FontIcon';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {purple500, deepPurple400, grey800, indigo900, lightBlue900} from 'material-ui/styles/colors';

const styles = {
  backgound: {
    background: lightBlue900
  },
  titleText: {
    color: 'white'
  },
};

class Header extends Component {
  render() {
    let headertitle = this.props.name
    return (
        <AppBar
          style={styles.backgound}
          title={<span style={styles.titleText}> Domain Discovery Tool </span>}
          //iconElementLeft={false}
          //iconElementLeft={<FontIcon color='#6A1B9A'> <img src={logo} height='35' width='35' alt='' /> </FontIcon>}
          iconElementRight={<img src={logoNYU}  height='45' width='40'  />}
        />
    );
  }
}

export default Header;
