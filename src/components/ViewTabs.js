import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';
import {deepPurpleA400, orange300, blue400, indigoA400, blue900} from 'material-ui/styles/colors';
import Checkbox from 'material-ui/Checkbox';

import Scatterplot from './Scatterplot'
import {csv} from 'd3-request'

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import QueriesLoad from './QueriesLoad';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  headline: {
    fontSize: 12,
    paddingTop: 16,
    marginBottom: 12,
    height: '940px',
  },
  slide: {
    height: '100px',
  },
  tab:{
    fontSize: '12px',
  },
  button:{
    marginTop:'10px',
    marginLeft:'10px',
    marginRight: 20,
  },

};

class ViewTabs extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      open: false,
      slideIndex: 0,
    };
    this.processResults = this.processResults.bind(this)
  }

  handleToggle = () => this.setState({open: !this.state.open});

  processResults (error, data){
      this.setState({"data":data});
  }

  componentWillMount(){
    csv("https://raw.githubusercontent.com/uiuc-cse/data-fa14/gh-pages/data/iris.csv", this.processResults)
  }

  handleChange = (value) => {
    this.setState({
      open: !this.state.open,
      slideIndex: value,
    });
  };

  render() {
    let dimensions= ["petal_length", "petal_width", "sepal_length", "sepal_width"];
    let dnames = ["Petal Length", "Petal Width", "Sepal Length", "Sepal Width"];
    let pairs = [];
    for (let i = 0; i < dimensions.length-1; i++){
      for (let j = i+1; j < dimensions.length; j++){
        pairs.push({'dimensions':[dimensions[i], dimensions[j]],
                    'names': [dnames[i], dnames[j]]});
      }
    }

    return (
      <div>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
          inkBarStyle={{background: '#7940A0' ,height: '4px'}}
          tabItemContainerStyle={{background:'#9A7BB0', height: '40px'}}
        >
          <Tab label="Snippes" value={0} style={styles.tab} />
          <Tab label="Visualizations" value={1} style={styles.tab} />
          <Tab label="Model" value={2} style={styles.tab} />
        </Tabs>
        <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange}  >
          <div style={styles.headline}>
            <Checkbox label="QueryOne" style={styles.checkbox}  />
            <Checkbox label="Querytwo" style={styles.checkbox}  />
            <Checkbox label="Querythree" style={styles.checkbox}  />
            <Checkbox label="Queryfour" style={styles.checkbox}  />
            <Checkbox label="SimpleQuery" style={styles.checkbox}  />
            <Checkbox label="SimpleQuery" style={styles.checkbox}  />
            <Checkbox label="SimpleQuery" style={styles.checkbox}  />
            <Checkbox label="SimpleQuery" style={styles.checkbox}  />
          </div>
          <div style={styles.headline}>
          <FloatingActionButton mini={true} style={styles.button}>
   <ContentAdd />
 </FloatingActionButton>

            {pairs.map((p)=>{
                return (
                    <Scatterplot title={p['names'][0] + " x " + p['names'][1]} data={this.state.data}
                        xAcessor={(d)=>d[p['dimensions'][0]]} yAcessor={(d)=>d[p['dimensions'][1]]} labelAcessor={(d)=>d["species"]}
                        xLabel={p['names'][0]} yLabel={p['names'][1]}/>
                  )
            })}

          </div>
          <div style={styles.headline}>
            <Checkbox label="Neutral" style={styles.checkbox}  />
            <Checkbox label="Relevant" style={styles.checkbox}  />
            <Checkbox label="Irrelevante" style={styles.checkbox}  />
          </div>
        </SwipeableViews>
      </div>
    );
  }
}

export default ViewTabs;
