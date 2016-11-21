  import React, {Component} from 'react';
  import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';


  import IconMenu from 'material-ui/IconMenu';
  import IconButton from 'material-ui/IconButton';
  import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
  import MenuItem from 'material-ui/MenuItem';
  import RaisedButton from 'material-ui/RaisedButton';
  import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

  var ReactRouter = require('react-router');
  var Link = ReactRouter.Link;

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


  class Tool extends Component{
    render(){

      return(
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
      )
    }
  };

  class DomainInfo extends Component{
    constructor(props) {
      super(props);
      this.state = {
        expanded: true,
        toolBar: null,
      };

    };

    componentWillMount = () => {
      var toolBarInitial = <Tool />;
      this.setState({toolBar: toolBarInitial});
    };

    componentWillReceiveProps  = (newProps) => {
         this.setState({expanded: this.props.statedCard}, function() {
           if(!this.props.statedCard){
             this.setState({toolBar: null});
           }
           else{
             this.setState({toolBar: <Tool />});
           }
              this.setState({expanded: this.props.statedCard});
         });
     };

    handleExpandChange = (expanded) => {
      this.setState({expanded: expanded});
    };

    handleToggle = (event, toggle) => {
      this.setState({expanded: toggle});
    };

    handleExpand = () => {
      this.setState({expanded: true});
    };

    handleReduce = () => {
      this.setState({expanded: false});
    };

/*
    componentWillMount() {
      this.onSetOpen();
    }

    onSetOpen() {
      var avatarValue = null;
      if(this.props.stated){
         avatarValue = <Avatar color={'white'} backgroundColor={'#7940A0'} size={25} style={styles.avatar} icon={<Assignment />} />;
      }
      this.setState({
        avatar : avatarValue,
      })

    }*/

    render(){

      return(

        <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
          <CardHeader style={styles.cardHeader}
          avatar={this.props.stated}
          actAsExpander={true}
          showExpandableButton={false}
          >
          {this.state.toolBar}
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
