import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import QueriesTabs from './QueriesTabs';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import Search from 'material-ui/svg-icons/action/search';
import Assignment from 'material-ui/svg-icons/action/assignment-returned';
import FontIcon from 'material-ui/FontIcon';
import {blue900} from 'material-ui/styles/colors';

const styles = {
  card: {

    borderStyle: 'solid',
    borderColor: '#C09ED7',
    background: 'white',
    borderRadius: '0px 0px 0px 0px',
    borderWidth: '0px 0px 1px 0px'
  },
  avatar:{
    margin:'-20px 8px 0px 0px',
  },
  cardHeader:{
    background: '#DCCCE7',
    padding:'10px 1px 10px 6px',
    borderRadius: '0px 0px 0px 0px',
  },
  cardMedia:{
    background: '#DCCCE7',
    padding:'2px 4px 2px 4px',
    borderRadius: '0px 0px 0px 0px',
  },

};

class LoadQueries extends Component{
  render(){
    return(
      <Card initiallyExpanded={true} style={styles.card}>
           <CardHeader
             title="Search"
             avatar={ <Avatar color={'white'} backgroundColor={'#7940A0'} size={25} style={styles.avatar} icon={<Assignment />} />}
             style={styles.cardHeader}
             actAsExpander={true}
             showExpandableButton={true}
           />
           <CardMedia expandable={true} style={styles.cardMedia}>
              <QueriesTabs />
           </CardMedia>
       </Card>
    )
  }
}

export default LoadQueries;
