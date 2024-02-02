import React from 'react'
import GrandChild from './GrandChild'

function Child(props) {
  return (
    <div>
        <h1>Child Element</h1>

        <GrandChild parent={props.parent} setGrandChildMsg={props.msgFromGrandChild} />
    </div>
  )
}

export default Child