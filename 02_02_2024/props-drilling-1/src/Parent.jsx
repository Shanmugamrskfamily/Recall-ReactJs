import React, { useState } from 'react'
import Child from './Child';

function Parent() {
const [msg,setMsg]=useState('');
const [childMsg,setChildMsg]=useState('');
const [data,setData]=useState('');

const handleMsgFromChild=(msgFromGrandChild)=>{
    setMsg(msgFromGrandChild);
}

const handleSendToChild=()=>{
    setData(childMsg);
}

  return (
    <div>
        <h1>Parrent Component</h1>
        <p>Message From Child: {msg} </p>
        <p>Send Data to Child: <input type="text" value={childMsg} onChange={(e)=>setChildMsg(e.target.value)} /><button onClick={handleSendToChild}>Send to Child</button> </p>
        <Child parent={data}  msgFromGrandChild={handleMsgFromChild} />
    </div>
  )
}

export default Parent