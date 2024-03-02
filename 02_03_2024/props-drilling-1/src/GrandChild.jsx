import React from 'react';
import { useState } from 'react';

function GrandChild(props) {

    const [input,setInput]=useState('');
    const [toParent,setToParent]=useState('');
    const [toChild,setToChild]=useState('');

  return (
    <div>
        <h1>GrandChild</h1>
        <div>
            <label htmlFor="input">Data To Send: </label> <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
            <div>
                <button onClick={()=>{
                    setToParent(input);
                    props.toParentFromGrandChild(toParent);
                    }} >To Parent</button>
                <button onClick={()=>{
                    setToChild(input);
                    props.toChildFromGrandChild(toChild);
                    }} 
                >To child</button>
            </div>
        </div>
        <p>
            Data From Parent: <b>{props.toGrandChildFromParent}</b>
        </p>
        <p>
            Data From Child: <b>{props.toGrandChildFromChild}</b>
        </p>
    </div>
  )
}

export default GrandChild