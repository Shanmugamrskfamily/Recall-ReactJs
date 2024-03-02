import React, { useState } from 'react'

function StringManipulation() {

    const[input,setInput]=useState('');

    const [output,setOutput]=useState('');

    const reverseRegular=(data)=>{
        setOutput(data.split('').reverse().join(''));
    }

    const reverseSentense=(data)=>{
        setOutput(data.split(' ').map(word=>word.split('').reverse().join('')).join(' '));
    }

    const titleCaps=(data)=>{
        setOutput(data.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1).toLowerCase()).join(' '));
    }


  return (
    <div style={{textAlign:'center'}}>
        <h1>Strings</h1>
        <div>
            <p>
                <label style={{margin:'10px'}} htmlFor="Sting">Enter The String:</label>
                <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} placeholder='Enter Your Text' />
                <br />
                <br />
                <button onClick={()=>reverseRegular(input)}>Reverse Regular</button>
                <button style={{margin:'10px'}} onClick={()=>reverseSentense(input)}>Reverse Sentence</button>
                <button onClick={()=>titleCaps(input)} >Title Capital</button>
            </p>
            <p>
                Answer: <b>{output}</b>
            </p>
        </div>
    </div>
  )
}

export default StringManipulation;