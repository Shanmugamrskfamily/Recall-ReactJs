import React, { useState } from 'react';

function GrandChild(props) {
    const [message, setMessage] = useState('');

    const handleSendMsg = () => {
            props.grandChildMsg(message);
            console.log(props.grandChildMsg);
    }

    return (
        <div>
            <h3>GrandChild</h3>
            <input type="text" style={{margin:"10px"}} placeholder='Type Your Message' value={message} onChange={(e) => setMessage(e.target.value)} />
            <button onClick={handleSendMsg}>Send to Parent</button>
            <p>Message From Parent: {props.names}</p>
        </div>
    );
}

export default GrandChild;
