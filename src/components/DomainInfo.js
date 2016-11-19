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


  import Avatar from 'material-ui/Avatar';
  import Assignment from 'material-ui/svg-icons/action/assignment-returned';

  const styles = {
    cardHeader:{
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
      fontSize: 14,
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

  onSetOpen(open) {
    if(this.props.stated){this.setState({avatar : <Avatar color={'white'} backgroundColor={'#7940A0'} size={25} style={styles.avatar} icon={<Assignment />} /> })};

  }

  class DomainInfo extends Component{
    constructor(props) {
      super(props);
      this.state = {
        open: false,
        avatar: null,
      };

    }

    handleToggle = () => this.setState({open: !this.state.open});

    render(){

      const avatarNull = <Avatar color={'white'} backgroundColor={'#7940A0'} size={25} style={styles.avatar} icon={<Assignment />} />;
      return(
        <Card initiallyExpanded={true}>
          <CardHeader style={styles.cardHeader}
          avatar={this.state.avatar}
          //actAsExpander={true}
          showExpandableButton={true}
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
                <ToolbarSeparator style={styles.zeroMarginLeftRight} />
              </ToolbarGroup>
              <ToolbarGroup lastChild={true}  style={styles.toolBarGroupChangeDomain}>
                <Link to='/'>
                <RaisedButton  style={{marginTop:10, marginLeft: '1px', marginRight: '3px'}} label="Change" primary={true} />
                </Link>
              </ToolbarGroup>
            </Toolbar>
          </CardHeader>

          <CardActions>
            kjl
          </CardActions>
          <CardText  expandable={true} >
            <div>
              <RaisedButton style={{marginLeft:100}}
              label="Toggle Drawer"
              onTouchTap={this.handleToggle}
              />
              <Drawer open={this.state.open} >
                <QueriesLoad />
                <MenuItem>Menu Item 2</MenuItem>
              </Drawer>
            </div>

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
