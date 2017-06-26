import React from 'react'
import { Button } from 'react-materialize'

export default (props) => <button onClick={props.thingToDo}>{"New " + props.thingToAdd}</button>
