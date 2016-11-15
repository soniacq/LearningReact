import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import QueriesLoad from './QueriesLoad';

const styles = {
  cardHeader:{
    marginLeft:'-10px',
    marginRight:'-10px',
    paddingTop: '0px',
    paddingBottom: '0px'
  },
  zeroMarginLeftRight: {
    paddingLeft: '0px',
    paddingRight: '0px'
  },
  toolBarCurrentDomain:{
    marginLeft: '0px',
    marginRight: '0px'
  },
  tittleCurrentDomain:{
    fontSize: 12,
    textTransform: 'uppercase',
    color: 'black', fontWeight:'bold',
    paddingLeft: '3px',
    paddingRight: '0px'
  },
  toolBarGroupChangeDomain:{
    marginLeft: '0px',
    marginRight: '2px'
  },
};



class DomainInfo extends Component{
  constructor(props) {
    super(props);

  }


  render(){
    return(
      <Card >
         <CardHeader style={styles.cardHeader}
           actAsExpander={true}
           showExpandableButton={false}
         >
         <Toolbar style={styles.zeroMarginLeftRight}>
           <ToolbarGroup  firstChild={true} style={styles.toolBarCurrentDomain}>
             <ToolbarTitle text="Machine Learning" style={styles.tittleCurrentDomain}/>
             <IconMenu
               iconButtonElement={
                 <IconButton touch={true}>
                   <NavigationExpandMoreIcon />
                 </IconButton>
               }
               style={styles.zeroMarginLeftRight}
             >
               <MenuItem primaryText="Create Model" />
               <MenuItem primaryText="More Info" />
            </IconMenu>
             <ToolbarSeparator style={{marginLeft: '-2px', marginRight: '0px'}} />
          </ToolbarGroup>
          <ToolbarGroup lastChild={true}  style={styles.toolBarGroupChangeDomain}>
          <Link to='/'>
            <RaisedButton  style={{marginTop:10, marginLeft: '-17px', marginRight: '3px'}} label="Change" primary={true} />
          </Link>
          </ToolbarGroup>
     </Toolbar>
         </CardHeader>
         <CardActions>
         kjl
         </CardActions>
         <CardText >

           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
           Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
           Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
           Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
         </CardText>
     </Card>
    )
  }
}

export default DomainInfo;
