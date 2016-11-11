import React, { Component } from 'react';



class Axis extends Component{
  constructor(props){
    super(props); //domain, range
    this.state = {};
  }
  render(){
    let horizontal_arrow_path = "M"+10 + " " + (this.props.height-10) + "H" + (this.props.width-5) + 
        "L" + (this.props.width-10) + " " + (this.props.height-15)+
        "M" + (this.props.width-5) + " " + (this.props.height-10)+
        "L" + (this.props.width-10) + " " + (this.props.height-5);

    let vertical_arrow_path = "M" + 10 + " " + (this.props.height-10) + "V" + 10 + 
        "L" + 5 + " " + 15 + 
        "M" + 10 + " " + 10 + 
        "L" + 15 + " " + 15;
    return (
        <g id="axis">
        <path d={horizontal_arrow_path} stroke="black" strokeWidth="2" fill="none"/>
        <path d={vertical_arrow_path} stroke="black" strokeWidth="2" fill="none"/>
        </g>
      );
  };
}

export default Axis;
