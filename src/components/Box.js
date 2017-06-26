import React, { Component } from 'react';
import Draggable from 'react-draggable';

export default class Box extends Component {
  constructor(props) {
    super(props)
    this.state = {
      files: { files: [] }
    }
    this.position = this.position.bind(this)
  }

  position() {
    let x = Math.random() * 470
    let y = Math.random() * 470
    return {x: x, y: y}
  }

  render() {
    return (
      <Draggable bounds='parent' defaultPosition={this.position()}>
        <div onDoubleClick={this.props.openBox} className='box'></div>
      </Draggable>
    )
  }
}
