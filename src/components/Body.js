import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import DomainInfo from './DomainInfo';
import QueriesLoad from './QueriesLoad';
import Filters from './Filters';
import Views from './Views';
import '../css/Components.css';

import Sidebar from 'react-sidebar';

const styles = {
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
      open: false,
      transitions: true,
      touch: true,
      shadow: true,
      pullRight: false,
      touchHandleWidth: 20,
      dragToggleDistance: 30,
      size:350,
    };
  }

  openDock(){
    this.onSetOpen(!this.state.open);
    if(!this.state.open){
    this.setState({size: 50});}
    else{
      this.setState({size: 350});
    }
  }

  onSetOpen(open) {
    this.setState({open: open});
  }

  render(){
     const sidebar = (<div style={{width:this.state.size}}>
       <Col style={{marginTop:70, marginLeft:10, marginRight:10, width:350, background:"black"}}>
     <Row className="Menus-child">
       <DomainInfo stated={true} />
     </Row>
     <Row className="Menus-child">
       <QueriesLoad />
     </Row>
     <Row className="Menus-child">
       <Filters />
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
               <button onClick={this.openDock.bind(this)}>cvbcfvb</button>
                 <Views />
                 </Row>
         </div>
     </Sidebar>
    )
  }
}

export default Body;
