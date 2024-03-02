import React from 'react'
import Child from './Child'
import { useState } from 'react'

function Parent() {

    const [input,setInput]=useState('');
    const [toChild,setToChild]=useState('');
    const [toGrandChild,setToGrandChild]=useState('');
    const [child,setChild]=useState('');
    const [grandChild,setGrandChild]=useState('');

    const handleDataFromChild=(data)=>{
        setChild(data);
    }

    const handleDataFromGrandChild=(data)=>{
        setGrandChild(data);
    }

  return (
    <div>
        <div>
        <h1>Parent</h1>
        <div>
            
            <label htmlFor="input">Data To Send:</label> <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
            <div>
                <button onClick={()=>setToChild(input)}>To Child</button>
                <button onClick={()=>setToGrandChild(input)}>To Grand-Child</button>
            </div>
            
            <p>
                Data From Child: <b>{child}</b>
            </p>
            <p>
                Data From Grand-Child: <b>{grandChild}</b>
            </p>
        </div>
        </div>
        <Child toChildFromParent={toChild} toGrandChildFromParent={toGrandChild} toParentFromChild={handleDataFromChild} toParentFromGrandChild={handleDataFromGrandChild}/>
    </div>
  )
}

export default Parent