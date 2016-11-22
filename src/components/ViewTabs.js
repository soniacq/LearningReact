import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';
import Checkbox from 'material-ui/Checkbox';

import Scatterplot from './Scatterplot'
import {csv} from 'd3-request'

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import {blue500, yellow600} from 'material-ui/styles/colors';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';
import Toggle from 'material-ui/Toggle';


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
      slideIndex: 0,
    };
    this.processResults = this.processResults.bind(this)
  }

  processResults (error, data){
      this.setState({"data":data});
  }

  componentWillMount(){
    csv("https://raw.githubusercontent.com/uiuc-cse/data-fa14/gh-pages/data/iris.csv", this.processResults)
  }

  handleChange = (value) => {
    this.setState({
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
          <Tab label="Snippets" value={0} style={styles.tab} />
          <Tab label="Visualizations" value={1} style={styles.tab} />
          <Tab label="Model" value={2} style={styles.tab} />
        </Tabs>
        <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange}  >
          <div style={styles.headline}>
          <List>
      <Subheader inset={true}>100 pages </Subheader>
      <ListItem
        leftAvatar={<Avatar icon={<FileFolder />} />}
        rightToggle={<Toggle />}
        primaryText="Title Url One"
        secondaryText="Description Page .. Relevant words"
      />
      <ListItem
        leftAvatar={<Avatar icon={<FileFolder />} />}
        rightToggle={<Toggle />}
        primaryText="Title Url Two"
        secondaryText="Description Page .. Relevant words"
      />
      <ListItem
        leftAvatar={<Avatar icon={<FileFolder />} />}
        rightToggle={<Toggle />}
        primaryText="Title Url Three"
        secondaryText="Jan 28, 2014Description Page .. Relevant words"
      />
    </List>
    <Divider inset={true} />
    <List>
      <ListItem
        leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={blue500} />}
        rightToggle={<Toggle />}
        primaryText="Home page escort"
        secondaryText="Jan 20, 2014Description Page .. Relevant words"
      />
      <ListItem
        leftAvatar={<Avatar icon={<EditorInsertChart />} backgroundColor={yellow600} />}
        rightToggle={<Toggle />}
        primaryText="Random pages"
        secondaryText="Jan 10, 2014Description Page .. Relevant words"
      />
    </List>
          </div>
          <div style={styles.headline}>


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
