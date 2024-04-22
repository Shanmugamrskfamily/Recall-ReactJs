import React, { useState } from 'react';

function Factorial() {
    const [value, setValue] = useState(0);
    const [output,setOutput]=useState(0);

    const calculateFactorial=()=>{
        if (value === '' || isNaN(value)) {
            alert('Please enter valid numbers.');
            return;
        }
        if(value===1){
            setOutput(1);
            return;
        }
        let fact=1;
        for(let i=1;i<=value;i++){
            fact*=i;
        }
        setOutput(fact);
    }
    return (
        <div>
            <h1>Factorial Methods</h1>
            <div>
                <p>
                    <label htmlFor="value">Enter Value: </label>
                    <input type="number" value={value} onChange={(e) => setValue(e.target.value)} />
                </p>
                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                    <button onClick={calculateFactorial}>Convert to factorial</button>
                </div>
                <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>
                    Output: {output}
                </p>
            </div>
        </div>
    );
}

export default Factorial;
