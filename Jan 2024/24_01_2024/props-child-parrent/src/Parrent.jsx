import React, { useState } from 'react'
import Child from './Child';

function Parrent() {
    const [name,setName]=useState('');
    const [data,setData]=useState('');
    const [messageFromGrandChild,setmessageFromGrandChild]=useState('');
    
    const handleChildsend=()=>{
        setData(name);
    }

    const handleMessageFromGrandChild=(grandChildMsg)=>{
        setmessageFromGrandChild(grandChildMsg);
    }
  return (
    <div>
        <h1>Parrent</h1>
        <p>Type Message to Child: <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/> <button onClick={handleChildsend}>Send to Grandchild</button></p>
        <p>Message From Grandchild: {messageFromGrandChild}</p>
        <Child parrent={data} grandChildMsg={handleMessageFromGrandChild}/>
    </div>
  )
}

export default Parrent