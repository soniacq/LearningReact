import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';
import {deepPurpleA400, deepPurple300, orange300, indigoA400, blue400, blue900} from 'material-ui/styles/colors';
import FontIcon from 'material-ui/FontIcon';
import AutoComplete from 'material-ui/AutoComplete';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
  },
  slide: {
    padding: '10px 0px 0px 0px',
    height: '100px',
  },
  tab:{
    fontSize: '12px',
    marginTop:'-5px',
  },
};

class QueriesTabs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
      dataSource: [],
    };
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

    handleUpdateInput = (value) => {
      this.setState({
        dataSource: [
          value,
          value + value,
          value + value + value,
        ],
      });
    };


  render() {
    return (
      <div>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
          inkBarStyle={{background: blue900 ,height: '4px'}}
          tabItemContainerStyle={{background: blue400 ,height: '30px'}}
        >
          <Tab label={'WEB'} value={0}  style={styles.tab} />
          <Tab label={'LOAD'} value={1} style={styles.tab} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div style={styles.slide} >
          <AutoComplete style={{  background:'white'}}
                   hintText="Type anything"
                   dataSource={this.state.dataSource}
                   onUpdateInput={this.handleUpdateInput}
           />
          </div>
          <div style={styles.slide}>
            slide n°2
            slide n°1
            slide n°1
          </div>

        </SwipeableViews>
      </div>
    );
  }
}

export default QueriesTabs;

//icon={<FontIcon className="material-icons"  >language</FontIcon> }
