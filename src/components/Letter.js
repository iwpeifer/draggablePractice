import React, { Component } from 'react';
import Draggable from 'react-draggable';
import { Modal } from 'react-materialize';

export default class Letter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Author: "",
      Content: ""
    }
    this.position = this.position.bind(this)
  }

  position() {
    let x = Math.random() * 470
    let y = Math.random() * 470
    return {x: x, y: y}
  }

  openLetter() {
    
  }

  render() {
    return (
      <Draggable bounds='parent' defaultPosition={this.position()}><div onDoubleClick={this.openLetter} className='letter'></div></Draggable>
    )
  }
}
