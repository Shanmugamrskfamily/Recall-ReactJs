import React, { useState } from 'react'

function GrandChild(props) {
    const [msgToParent,setMsgToParent]=useState('');
    const [grandChildMsg,setGrandChildMsg]=useState('');

    const handleSendToParent=()=>{
        props.setGrandChildMsg(msgToParent);
    }
  return (
    <div>
        <h1>Grand Child</h1>
        <p>Message Received From Parent: {props.parent}</p>
        <p>Send to Parent: <input type="text" value={msgToParent} onChange={(e)=>setMsgToParent(e.target.value)} /> <button onClick={handleSendToParent}>Send To Parent</button></p>
    </div>
  )
}

export default GrandChild