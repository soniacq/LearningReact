import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import logoNYU from '../images/nyu_logo_purple.png';

import { } from 'material-ui/styles/colors';

import Sidebar from 'react-side-bar';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';
import Body from './Body';


import IconMenu from 'material-ui/IconMenu';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import FontIcon from 'material-ui/FontIcon';
import Model from 'material-ui/svg-icons/image/blur-linear';
import Domain from 'material-ui/svg-icons/maps/transfer-within-a-station';
import {fullWhite} from 'material-ui/styles/colors';
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
import { InputGroup, FormControl , DropdownButton,  MenuItem} from 'react-bootstrap';
import Search from 'material-ui/svg-icons/action/search';

import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;


const styles = {
  backgound: {
    background: "#50137A"
  },
  titleText: {
    color: 'white'
  },
  zeroMarginLeftRight: {
    width:'70%',
    height:45,
    marginTop:8,
    marginRight:'-15px',
    background:'#B39DDB',
    borderRadius: '5px 5px 5px 5px',
    borderStyle: 'solid',
    borderColor: '#7E57C2#B39DDB',
    borderWidth: '1px 0px 1px 0px'
  },
  toolBarCurrentDomain:{
    marginLeft: '0px',
    marginRight: '0px'
  },
  tittleCurrentDomain:{
    fontSize: 15,
    textTransform: 'uppercase',
    color: 'black', fontWeight:'bold',
    paddingLeft: '3px',
    paddingRight: '0px',
    marginTop: '-5px',
  },
  toolBarGroupChangeDomain:{
    marginLeft: '0px',
    marginRight: '2px'
  },
  buttons:{
    margin: '-10px',
    marginTop:5,
    width:35,
    border:0,
  },

};

class Header extends Component {


  constructor(props) {
      super(props);
      this.state = {
          opened: true,
          logged: false,
          selectedIndex: 0,
      };
  }

  select = () => {
    console.log("here home");
    this.props.route.setActiveMenu("hello love");
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
        //Body.openDock1();
    }

  render() {

    return (

      <div>
        <AppBar showMenuIconButton={true}
          style={styles.backgound}
          title={  <span style={styles.titleText}> Domain Discovery Tool </span>}
          //iconElementLeft={<IconButton><NavigationClose /></IconButton>}
          iconElementLeft={<img src={logoNYU}  height='45' width='40'  />}
          //onLeftIconButtonTouchTap={this.removeRecord.bind(this)}
        >
        <Toolbar style={styles.zeroMarginLeftRight}>
            <ToolbarTitle text="Machine Learning" style={styles.tittleCurrentDomain}/>
                 <ToolbarSeparator  />
                 <IconButton tooltip="Create Model" style={{marginLeft:'-15px', marginRight:'-10px'}} onClick={this.select.bind(this)}> <Model />
                 </IconButton>
                 <Link to='/'>
                 <IconButton tooltip="Change Domain" style={{marginLeft:'-15px'}} > <Domain />
                 </IconButton>
                 </Link>
                 <ToolbarSeparator  />

                  <FormControl style={{width:'30%', marginRight:'-100px', marginTop:5}} type="text" placeholder="Search ..." />
                  <IconButton style={{marginRight:'-25px'}}> <Search />
                  </IconButton>
        </Toolbar>
        </AppBar>
        {this.props.children}

        </div>
    );
  }
}

export default Header;
