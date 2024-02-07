import React from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import { WalletContext } from './WalletContext';

function Transactions() {
    const [amount,setAmount]=useState(0);
    const {handleTransaction}=useContext(WalletContext);

    const handleAddIncome=()=>{
        if(amount>0){
            handleTransaction(parseFloat(amount),'add-income');
            setAmount(0);
        }
    }
    const handleAddExpense=()=>{
        if(amount>0){
            handleTransaction(parseFloat(amount),'add-expense');
            setAmount(0);
        }
    }
    const handleGetLoan=()=>{
        if(amount>0){
            handleTransaction(parseFloat(amount),'get-loan');
            setAmount(0);
        }
    }
    const handlePayLoan=()=>{
        if(amount>0){
            handleTransaction(parseFloat(amount),'pay-loan');
            setAmount(0);
        }
    }
    return (
        <div className="transactions-container">
            <h1>Manage Transactions</h1>
            <input className="transactions-input" type="number" placeholder="Enter Amount for Transaction" value={amount} onChange={(e) => setAmount(e.target.value)}/> <br />
            <button className="transactions-button" onClick={handleAddIncome}>Add Income</button>
            <button className="transactions-button" onClick={handleAddExpense}>Add Expense</button>
            <button className="transactions-button" onClick={handleGetLoan}>Get Loan</button>
            <button className="transactions-button" onClick={handlePayLoan}>Pay To Loan</button>
        </div>
  );
}

export default Transactions;