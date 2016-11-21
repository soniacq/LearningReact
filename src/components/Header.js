import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import logoNYU from '../images/nyu_logo_purple.png';

import { } from 'material-ui/styles/colors';

import Sidebar from 'react-side-bar';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';
import Body from './Body';

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
          opened: true,
          logged: false,
      };
  }

  handleChange = (event, logged) => {
    this.setState({logged: logged});
  };

  onOpen() {
      this.setState({ barOpened: true });
    }

    onClose() {
      this.setState({ barOpened: false });
    }

    removeRecord = () => {
       console.log("here");
        this.setState({logged: true});
        Body.openDock1();
    }

  render() {

      const sidebarProps = {
          bar: (<div>Amazing Sidebar</div>),
          opened: true,
          size: 200
      };

    return (

      <div>
      <Sidebar {... sidebarProps} />
        <AppBar showMenuIconButton={true}
          style={styles.backgound}
          title={  <span style={styles.titleText}> Domain Discovery Tool </span>}
          iconElementLeft={<IconButton><NavigationClose /></IconButton>}
          iconElementRight={<img src={logoNYU}  height='45' width='40'  />}
          onLeftIconButtonTouchTap={this.removeRecord.bind(this)}
        />

        {this.props.children}
        </div>
    );
  }
}

export default Header;
