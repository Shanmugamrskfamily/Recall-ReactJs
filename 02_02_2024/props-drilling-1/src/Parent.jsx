import React, { useState } from 'react';
import Child from './Child';

function Parent() {
    const [fromChild, setFromChild] = useState('');
    const [fromGrandChild, setFromGrandChild] = useState('');
    const [type, setType] = useState('');
    const [toChild, setToChild] = useState('');
    const [toGrandChild, setToGrandChild] = useState('');

    const handleMsgFromChild = (msgToParentFromChild) => {
        setFromChild(msgToParentFromChild);
    }

    const handleMsgFromGrandChild = (msgFromGrandChildToParent) => {
        setFromGrandChild(msgFromGrandChildToParent);
    }
    
    const handleSendToChild = () => {
        setToChild(type);
    }
    
    const handleSendToGrandChild = () => {
        setToGrandChild(type);
    }

    return (
        <div className="px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Parent Component</h1>
            <p className="mb-2">Message From Child: {fromChild}</p>
            <p className="mb-2">Message From Grand Child: {fromGrandChild}</p>
            <div className="mb-4">
                <input type="text" value={type} onChange={(e) => setType(e.target.value)} className="border rounded-md py-2 px-3 mr-2" />
                <button onClick={handleSendToChild} className="bg-yellow-500 text-white px-4 py-2 rounded-md mr-2">Send to Child</button>
                <button onClick={handleSendToGrandChild} className="bg-green-500 text-white px-4 py-2 rounded-md">Send to Grand Child</button>
            </div>
            <Child 
                msgTochildfromParent={toChild} 
                msgtoGrandChildFromParent={toGrandChild}
                msgFromGrandChildToParent={handleMsgFromGrandChild} 
                msgToParentFromChild={handleMsgFromChild} 
            />
        </div>
    );
}

export default Parent;
