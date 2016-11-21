import React, {Component} from 'react';
import { Row, Col} from 'react-bootstrap';
import DomainInfo from './DomainInfo';
import QueriesLoad from './QueriesLoad';
import Filters from './Filters';
import Views from './Views';
import '../css/Components.css';

import Sidebar from 'react-sidebar';

import Avatar from 'material-ui/Avatar';
import Assignment from 'material-ui/svg-icons/action/assignment-returned';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const styles = {
  button:{
    marginTop:45,
    paddingBottom:'-145px',
    marginBottom:'-545px',
    marginRight: 45,
  },
  contentHeaderMenuLink: {
    textDecoration: 'none',
    color: 'white',
    padding: 8,
  },
  content: {
    marginLeft: '5px',
    marginTop: '65px',
    marginRight: '0px',
    marginBottom: '8px',
    backgroundColor: '#FFFFFF',
    borderRadius: '10px 10px 10px 10px',
  },
};

class Body extends Component{

  constructor(props) {
      super(props);
      this.state = {
      docked: true,
      open: true,
      transitions: true,
      touch: true,
      shadow: true,
      pullRight: false,
      touchHandleWidth: 20,
      dragToggleDistance: 30,
      size:350,
      iconDomainInfo:null,
      stateQueryCard:true,
    };
  }

    static  openDock1(){
      if(true){
      this.setState.bind(this)({
        size: 50,
        iconDomainInfo:<Avatar color={'white'} backgroundColor={'#7940A0'} size={25} style={styles.avatar} icon={<Assignment />} />,
        stateQueryCard:false,
        open: false,
      });}
      else{
        this.setState({
          size: 350,
          iconDomainInfo:null,
          stateQueryCard:true,
          open: true,
        });
      }
    }


  openDock(){
    if(this.state.open){
    this.setState({
      size: 50,
      iconDomainInfo:<Avatar color={'white'} backgroundColor={'#7940A0'} size={25} style={styles.avatar} icon={<Assignment />} />,
      stateQueryCard:false,
      open: !this.state.open,
    });}
    else{
      this.setState({
        size: 350,
        iconDomainInfo:null,
        stateQueryCard:true,
        open: !this.state.open,
      });
    }
  }

  render(){
     const sidebar = (<div style={{width:this.state.size}}>

       <Col style={{marginTop:70, marginLeft:10, marginRight:10, width:350, background:"white"}}>
     <Row className="Menus-child">
       <DomainInfo stated={this.state.iconDomainInfo} statedCard={this.state.stateQueryCard} />
     </Row>
     <Row className="Menus-child">
       <QueriesLoad statedCard={this.state.stateQueryCard} />
     </Row>
     <Row className="Menus-child">
       <Filters />
     </Row>
     <Row className="Menus-child">
     <FloatingActionButton mini={true} style={styles.button} zDepth={3} onClick={this.openDock.bind(this)}>
        <ContentAdd />
    </FloatingActionButton>
    </Row>
     </Col>

     </div>
   );

     const sidebarProps = {
       sidebar: sidebar,
       docked: this.state.docked,
       sidebarClassName: 'custom-sidebar-class',
       open: this.state.open,
       touch: this.state.touch,
       shadow: this.state.shadow,
       pullRight: this.state.pullRight,
       touchHandleWidth: this.state.touchHandleWidth,
       dragToggleDistance: this.state.dragToggleDistance,
       transitions: this.state.transitions,
       onSetOpen: this.onSetOpen,
     };

   return (
     <Sidebar {...sidebarProps}>

         <div>

         <Row style={styles.content}>


                 <Views />
                 </Row>
         </div>
     </Sidebar>
    )
  }
}

export default Body;
