import React, { useContext, useState } from 'react';
import { ProductContext } from './ProductContext';

function ProductStatus() {
    const { setStatus,setAge,setMobile,setName } = useContext(ProductContext);
    const [data, setData] = useState(''); 

    const handleApplyStatus = () => {
        if(data.toLocaleLowerCase()==='mobile'){
        setStatus(data);
        setAge(28);
        setMobile('7845');
        setName('SHANMUGAM');
        }
        else{
            alert('Wrong Product details!');
        }
    }

    return (
        <div>
            <input type="text" placeholder='Type Product Name Here' value={data} onChange={(e) => setData(e.target.value)} />
            <button style={{margin:'20px'}} onClick={handleApplyStatus}>Send Data</button>
        </div>
    )
}

export default ProductStatus;