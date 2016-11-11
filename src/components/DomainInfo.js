import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class DomainInfo extends Component{
  render(){
    return(
      <Card>
         <CardHeader
           title="  Machine Learning"

           actAsExpander={true}
           showExpandableButton={false}
         />
         <CardActions>
         kjl
         </CardActions>
         <CardText >
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
