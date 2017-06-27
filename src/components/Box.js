import React, { Component } from 'react';
import Draggable from 'react-draggable';

export default class Box extends Component {
  constructor(props) {
    super(props)
    this.state = {

      items: { items: [] }
    }
    this.initPosition = this.initPosition.bind(this)
  }

  initPosition() {
    let x = Math.random() * 470
    let y = Math.random() * 470
    return {x: x, y: y}
  }

  putDown(item) {
    let poop = this.children.props.id
    console.log(poop)
  }


  componentDidMount() {

  }

  render() {
    return (
      <Draggable bounds='parent' defaultPosition={this.initPosition()} onStop={function() { console.log(this.children) }}>
        <div id={this.props.boxId} onDoubleClick={this.props.openBox} className='box'></div>
      </Draggable>
    )
  }
}
