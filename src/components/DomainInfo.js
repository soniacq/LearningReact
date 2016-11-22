  import React, {Component} from 'react';
  import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';


  import IconMenu from 'material-ui/IconMenu';
  import IconButton from 'material-ui/IconButton';
  import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
  import MenuItem from 'material-ui/MenuItem';
  import RaisedButton from 'material-ui/RaisedButton';
  import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

  import FlatButton from 'material-ui/FlatButton';
  import FontIcon from 'material-ui/FontIcon';
  import ActionAndroid from 'material-ui/svg-icons/action/android';
  import Model from 'material-ui/svg-icons/image/blur-linear';
    import Domain from 'material-ui/svg-icons/maps/transfer-within-a-station';
  import {fullWhite} from 'material-ui/styles/colors';


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
    buttons:{

      margin: '-10px',
      marginTop:5,
      width:35,
      border:0,
    },
    
  };


  class Tool extends Component{
    render(){

      return(
        <Toolbar style={styles.zeroMarginLeftRight}>
            <ToolbarTitle text="Machine Learning" style={styles.tittleCurrentDomain}/>
              <ToolbarSeparator style={styles.zeroMarginLeftRight} />
                 <IconButton tooltip="Create Model" style={{marginLeft:'-15px', marginRight:'-10px', marginTop:5}}> <Model />
                 </IconButton>
                 <Link to='/'>
                 <IconButton tooltip="Change Domain" style={{marginLeft:'-15px', marginTop:5}}> <Domain />
                 </IconButton>
                 </Link>
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
      if(expanded){
        this.props.setActiveMenu(expanded, 2);
      }
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


  /*<ToolbarGroup lastChild={true}  style={styles.toolBarGroupChangeDomain}>
    <Link to='/'>
    <RaisedButton  style={{marginTop:10, marginLeft: '1px', marginRight: '3px'}} label="Change" primary={true} />
    </Link>
  </ToolbarGroup>*/
