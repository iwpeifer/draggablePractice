import React, { Component } from 'react';
import Draggable from 'react-draggable';
import Box from './Box'
import Letter from './Letter'

export default class extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props)
    return (
      <div id="box-container">
        {this.props.boxes.map((box, index) => <Box key={index} openBox={this.props.openBox}/>)}
        {this.props.letters.map((letter, index) => <Letter key={index} openLetter={this.props.openLetter}/>)}
      </div>
    )
  }

}
