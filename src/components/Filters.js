import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FiltersTabs from './FiltersTabs';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import CheckList from 'material-ui/svg-icons/av/playlist-add-check';
import FontIcon from 'material-ui/FontIcon';
import {blue900} from 'material-ui/styles/colors';

const styles = {
  card: {
    background: 'white',
    borderRadius: '10px 10px 10px 10px',
  },
  avatar:{
    margin:'-20px 8px 0px 0px',
  },
  cardHeader:{
    background: '#E3F2FD',
    padding:'8px 1px 1px 6px',
    borderRadius: '10px 10px 8px 8px',
  },
  cardMedia:{
    background: '#E3F2FD',
    padding:'2px 4px 2px 4px',
    borderRadius: '0px 0px 10px 10px',
  },

};

class Filters extends Component{
  render(){
    return(
      <Card style={styles.card}>
           <CardHeader
             title="Filters"
             avatar={ <Avatar color={'white'} backgroundColor={blue900} size={25} style={styles.avatar} icon={<CheckList />} />}
             style={styles.cardHeader}
             actAsExpander={true}
             showExpandableButton={true}
           />
           <CardMedia expandable={true} style={styles.cardMedia}>
              <FiltersTabs />
           </CardMedia>
       </Card>
    )
  }
}

export default Filters;
