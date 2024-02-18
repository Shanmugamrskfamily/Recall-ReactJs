import React, { useState } from 'react';

function PrimeNumbers() {
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [output, setOutput] = useState('');

    const findPrimeNumbers = () => {
        if (start === undefined || isNaN(start) || end === undefined || isNaN(end) || start<=0 || end>10000) {
            alert('Please enter valid numbers, between 1 to 10000 !');
            return;
        }

        let primes = [];
        for (let i = start; i <= end; i++) {
            if (isPrime(i)) {
                primes.push(i);
            }
        }
        setOutput(primes.join(', '));
    };

    const isPrime = (num) => {
        if (num <= 1) return false;
        if (num <= 3) return true;

        if (num % 2 === 0 || num % 3 === 0) return false;

        let i = 5;
        while (i * i <= num) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
            i += 6;
        }
        return true;
    };

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Find Prime Numbers</h1>
            <div style={{ alignItems: 'center' }}>
                <div>
                    <label htmlFor="start">Enter Start Value: </label>
                    <input type="number" style={{ width: '200px', marginBottom: '1rem' }} placeholder='Enter Only Between 1-10000' value={start} onChange={(e) => setStart(parseInt(e.target.value))} />
                </div>
                <div>
                    <label htmlFor="end">Enter End Value: </label>
                    <input type="number" style={{ width: '200px', marginBottom: '1rem' }} placeholder='Enter Only Between 1-10000' value={end} onChange={(e) => setEnd(parseInt(e.target.value))} />
                </div>
                <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                    <button onClick={findPrimeNumbers}>Check For Prime Numbers</button>
                </div>
                <div>
                    <p>The Prime Numbers Between {start} to {end}: {output}</p>
                </div>
            </div>
        </div>
    );
}

export default PrimeNumbers;
