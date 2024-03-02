import React, { useContext } from "react";
import { ButtonContext } from "./ButtonContext";

const Button=()=>{

    const {count,increament,decreament}=useContext(ButtonContext);


    return (
        <div style={{textAlign:'center'}}>
            <h1>Here the Button Function</h1>
            <div>
                <p>The Current Count: <b>{count}</b></p><br />
                <button style={{margin:'10px'}} onClick={increament} >Increase</button>
                <button style={{margin:'10px'}} onClick={decreament} >Decrease</button>
            </div>
        </div>
    )
}

export default Button;