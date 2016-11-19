import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import logoNYU from '../images/nyu_logo_purple.png';
import IconButton from 'material-ui/IconButton';

//import FontIcon from 'material-ui/FontIcon';
import {purple500, deepPurple400, grey800, indigo900, lightBlue900} from 'material-ui/styles/colors';

import Sidebar from 'react-side-bar';


const styles = {
  backgound: {
    background: "#50137A"
  },
  titleText: {
    color: 'white'
  },
};

class Header extends Component {
  constructor(props) {
      super(props);
      this.state = {
          opened: true
      };
  }

  onOpen() {
      this.setState({ barOpened: true });
    }

    onClose() {
      this.setState({ barOpened: false });
    }

  render() {

      const sidebarProps = {
          bar: (<div>Amazing Sidebar</div>),
          opened: true,
          size: 200
      };

    let headertitle = this.props.name
    return (

      <div>
      <Sidebar {... sidebarProps} />
        <AppBar showMenuIconButton={false}
          style={styles.backgound}
          title={  <span style={styles.titleText}> Domain Discovery Tool </span>}
          //iconElementLeft={false}
          //iconElementLeft={<FontIcon color='#6A1B9A'> <img src={logo} height='35' width='35' alt='' /> </FontIcon>}
          iconElementRight={<img src={logoNYU}  height='45' width='40'  />}
        />

        {this.props.children}
        </div>
    );
  }
}

export default Header;
