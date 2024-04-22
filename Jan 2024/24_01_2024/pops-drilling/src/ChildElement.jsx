import React from 'react'
import GrandChildElement from './GrandChildElement'

function ChildElement(props) {

  return (
    <div>
        <h2>Child Element</h2>
        <ol>
            {props.names.map((name,index)=>(
                <li key={index}>{name}</li>
            ))}
        </ol>
        {console.log(props.grandChild)}
        <GrandChildElement names={props.names} grandChild={props.grandChild} />
    </div>
  )
}

export default ChildElement