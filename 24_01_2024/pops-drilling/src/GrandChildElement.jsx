import React, { useState } from 'react'

function GrandChildElement(props) {

  const [msg,setMsg]=useState('');
  const handleSendMsg=()=>{
    props.grandChild(msg);
  }

  return (
    <div>
      <h3>Grand Child Element</h3>
        <p>Names From Parrent: {props.names.join(', ')}</p>
        <div>
          <p>Send Data to Parrent</p>
          <input type="text" placeholder='Enter Message to Parrent' value={msg} onChange={(e)=>setMsg(e.target.value)} />
          <button onClick={handleSendMsg}>Send to Parrent</button>
        </div>
    </div>
  )
}

export default GrandChildElement