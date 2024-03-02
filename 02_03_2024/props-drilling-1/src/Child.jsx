import React from 'react'
import GrandChild from './GrandChild';
import { useState } from 'react';

function Child(props) {

    const [input,setInput]=useState('');
    const [toParent,setToParent]=useState('');
    const [toGrandChild,setToGrandChild]=useState('');
    const [grandChild,setGrandChild]=useState('');

    // const handleDataFromParent=(data)=>{
    //     setParent(data);
    // }

    const handleDataFromGrandChild=(data)=>{
        setGrandChild(data);
    }

  return (
    <div>
        <div>
        <h1>Child</h1>
        <div>
            
                <label htmlFor="input">Data To Send: </label> <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
                <div>
                    <button onClick={()=>{setToParent(input);
                    props.toParentFromChild(toParent);}} >To Parent</button>
                    <button onClick={()=>setToGrandChild(input)} >To Grand-Child</button>
                </div>
            
            <p>
                Data From Parent: <b>{props.toChildFromParent}</b>
            </p>
            <p>
                Data From Grand-Child: <b>{grandChild}</b>
            </p>
        </div>
        </div>
        <GrandChild toChildFromGrandChild={handleDataFromGrandChild} toParentFromGrandChild={props.toParentFromGrandChild}  toGrandChildFromChild={toGrandChild} toGrandChildFromParent={props.toGrandChildFromParent} />
    </div>
  )
}

export default Child