var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import {Grid, Row, Col} from 'react-bootstrap';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Forward from 'material-ui/svg-icons/content/forward';
import AddBox from 'material-ui/svg-icons/content/add-box';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import DeleteForever from 'material-ui/svg-icons/action/delete-forever';
import {fullWhite} from 'material-ui/styles/colors';

function Home () {
  return (
    <div className="jumbotron col-sm-12 text-center">
        <div style={{ marginLeft:'40%'}}>
          <Row>
            <Col xs={3} md={3} style={{borderStyle: 'solid',
            borderColor: '#C09ED7',
            background: 'white',
            borderRadius: '0px 0px 0px 0px',
            borderWidth: '0px 0px 1px 0px'}}>
                  <List>
                    <Subheader style={{color:'black'}}><h2>Domains</h2></Subheader>
                    <ListItem style={{textAlign: 'left'}}
                      primaryText="Machine Learning"
                      rightIcon={<Forward />}
                    />
                    <ListItem style={{textAlign: 'left'}}
                      primaryText="Car"
                      rightIcon={<Forward />}
                    />
                    <ListItem style={{textAlign: 'left'}}
                      primaryText="Text Classification"
                      rightIcon={<Forward />}
                    />
                    <ListItem style={{textAlign: 'left'}}
                      primaryText="Ebola"
                      rightIcon={<Forward />}
                    />
                    <ListItem style={{textAlign: 'left'}}
                      primaryText="Data mining"
                      rightIcon={<Forward />}
                    />
                </List>
            </Col>
            <Col xs={3} md={3}>
            <Link to='/playerOne'>
              <FlatButton style={{margin:'70px 10px 10px 10px'}}
                backgroundColor="#26C6DA"
                hoverColor="#80DEEA"
                icon={<AddBox color={fullWhite} />}
              />
              <FlatButton style={{margin:20}}
                backgroundColor="#26C6DA"
                hoverColor="#80DEEA"
                icon={<DeleteForever color={fullWhite} />}
              />
              <FlatButton style={{margin:20}}
                backgroundColor="#26C6DA"
                hoverColor="#80DEEA"
                icon={<ContentCopy color={fullWhite} />}
              />
            </Link>
            </Col>
        </Row>
      </div>
    </div>
  )
}

module.exports = Home;
