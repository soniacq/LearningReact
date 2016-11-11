import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import DomainInfo from './DomainInfo';
import QueriesLoad from './QueriesLoad';
import Filters from './Filters';
import Views from './Views';
import '../css/Components.css';

class Body extends Component{
  render(){
    return(
      <div>
      <Grid className="boder" >
        <Row>
          <Col xs={5} md={3} className="Menus-body">
            <Row className="Menus-child">
              <DomainInfo />
            </Row>
            <Row className="Menus-child">
              <QueriesLoad />
            </Row>
            <Row className="Menus-child">
              <Filters />
            </Row>
          </Col>
          <Col xs={14} md={9} >
            <Row className="View-body">
              <Views />
            </Row>

          </Col>
        </Row>

    </Grid>
    </div>
    )
  }
}

export default Body;
