import React, { useState } from 'react'

function String() {

    const [stringValue,setStringValue]=useState();

    const [input,setInput]=useState('');

    const regularReverse=()=>{
        const reversed=input.trim().split('').reverse().join('');
        setStringValue(reversed);
    }

    const eachWordReverse=()=>{
        const reversedSentenece=input.trim().split(' ').map(word=>word.split('').reverse().join('')).join(' ');
        setStringValue(reversedSentenece);
    }

    const titleUpperCase=()=>{
        const toUpper=input.trim().split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
        setStringValue(toUpper);
    }

    const titleLowerCase=()=>{
        const toLower=input.trim().split(' ').map(word=>word.charAt(0).toLocaleLowerCase()+word.toUpperCase().slice(1)).join(' ');
        setStringValue(toLower);
    }

  return (
    <div>
        <h1 style={{textAlign:'center'}}>String Methods</h1>
        <div style={{alignItems:'center'}}>
            <label htmlFor="string">Enter String Here: </label>
            <input type="text" value={input} onChange={(e)=>setInput((e.target.value))} />
            <div style={{marginTop:'2rem'}}>
                <button style={{marginRight:'5px'}} onClick={regularReverse} >Regular Reverse</button>
                <button style={{marginRight:'5px'}} onClick={eachWordReverse} >Each Word Reverse</button>
                <button style={{marginRight:'5px'}} onClick={titleUpperCase} >Title Upper Case</button>
                <button onClick={titleLowerCase}>Title Lower Case</button>
            </div>
            <p style={{fontWeight:'bold', marginTop:'3rem'}}>Reversed String: {stringValue}</p>
        </div>
    </div>
  )
}

export default String