
import React, {Component} from 'react';
import {Card, CardHeader, CardMedia} from 'material-ui/Card';
import ViewTabs from './ViewTabs';
import Avatar from 'material-ui/Avatar';
import CheckList from 'material-ui/svg-icons/av/playlist-add-check';

const styles = {
  card: {
    paddingLeft: '15px',
    background: 'white',
    borderRadius: '0px 0px 0px 0px',
  },
  cardHeader:{
    background: 'white',
    padding:'8px 8px 4px 8px',
    borderRadius: '0px 0px 0px 0px',
  },
  avatar:{
    margin:'-20px 8px 0px 0px',
  },
  cardMedia:{
    padding:'2px 6px 2px 6px',
    borderRadius: '0px 0px 0px 0px',
  },

};

class Views extends Component{
  render(){
    return(
      <Card initiallyExpanded={true} style={styles.card}>
           <CardHeader
             title="View"
             avatar={ <Avatar color={'white'} backgroundColor={'#7D49A1'} size={25} style={styles.avatar} icon={<CheckList />} />}
              style={styles.cardHeader}
             actAsExpander={true}
             showExpandableButton={true}
           />
           <CardMedia expandable={true} style={styles.cardMedia}>
              <ViewTabs />
           </CardMedia>
       </Card>
    )
  }
}

export default Views;
