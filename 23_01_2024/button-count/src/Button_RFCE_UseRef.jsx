import React, { useRef, useState } from 'react';

function Button_RFCE_UseRef() {
    const countRef = useRef(0);
    const [count, setCount] = useState(countRef.current);

    const increase = () => {
        countRef.current = countRef.current + 1;
        setCount(countRef.current);
        console.log(`UseRef: ${countRef.current}`);
    }

    const decrease = () => {
        countRef.current = countRef.current - 1;
        setCount(countRef.current);
        console.log(`UseRef: ${countRef.current}`);
    }

    return (
        <div>
            The Count: {count} <br />
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
        </div>
    );
}

export default Button_RFCE_UseRef;