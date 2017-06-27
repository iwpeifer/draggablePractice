import React, { Component } from 'react';
import Draggable from 'react-draggable';
import { Row, Col } from 'react-materialize'

import './App.css';
import Room from './components/Room'
import AddButton from './components/AddButton'

class App extends Component {
  constructor() {
    super()
    this.state = {
      boxes: [],
      letters: []
    }
    this.addBox = this.addBox.bind(this)
    this.addLetter = this.addLetter.bind(this)
  }

  addBox() {
    this.setState({
      boxes: [...this.state.boxes, 'box']
    })
  }

  addLetter() {
    this.setState({
      letters: [...this.state.letters, 'letter']
    })
  }

  putDown() {
    console.log(arguments)
  }

  openBox() {
    console.log("LOCKED ;)")
  }

  openLetter() {
    console.log("Scribbit!")
  }

  render() {
    return (
      <Row>
        <Col m={2}>
          <h3>hellow</h3>
        </Col>
        <Col m={5}>
            <Room boxes={this.state.boxes} letters={this.state.letters} openBox={this.openBox} openLetter={this.openLetter} putDown={this.putDown}/>
          <Col m={2}>
            <AddButton thingToAdd="Box" thingToDo={this.addBox} />
          </Col>
          <Col m={2}>
            <AddButton thingToAdd="letter" thingToDo={this.addLetter} />
          </Col>
          <Col m={2}>
            <AddButton />
          </Col>
        </Col>
        <Col m={3}>
          <div id="box-contents"></div>
        </Col>
      </Row>
    )
  }
}

export default App;
