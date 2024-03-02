import React, { useContext, useState } from "react";
import { ButtonContext } from "./ButtonContext";

const Button=()=>{

    const {count,increament,decreament, status, handleStatus}=useContext(ButtonContext);

    const [data,setData]=useState('');


    return (
        <div style={{textAlign:'center'}}>
            <h1>Here the Button Function</h1>
            <div>
                <p>The Current Count: <b>{count}</b></p><br />
                <button style={{margin:'10px'}} onClick={increament} >Increase</button>
                <button style={{margin:'10px'}} onClick={decreament} >Decrease</button>
            </div>
            <div>
                <h1>Product Status</h1>
                <p>Product Status: <b>{status}</b></p>
                <p>
                    <label htmlFor="status">Set Status:</label>
                    <select name="status" id="status" value={data} onChange={(e)=>{
                        setData(e.target.value);
                        console.log(data);
                    }
                        } >
                        <option value="">Select</option>
                        <option value="Pending">Pending</option>
                        <option value="Completed">Completed</option>
                        <option value="Rejected">Rejected</option>
                    </select>
                </p>
                <button onClick={() => handleStatus(data)}>Set Status</button>
            </div>
        </div>
    )
}

export default Button;