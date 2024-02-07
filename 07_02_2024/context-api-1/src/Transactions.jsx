import React from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import { WalletContext } from './WalletContext';
import { useEffect } from 'react';

function Transactions() {
    const [amount,setAmount]=useState(0);
    const {handleTransaction, walletData}=useContext(WalletContext);
    const [transactions,setTransactions]=useState([]);
    useEffect(()=>{
        setTransactions(walletData.transaction_history);
    },[walletData]);
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
        <div>
            <div className="transactions-container">
                <h1>Manage Transactions</h1>
                <i className="fa-solid fa-indian-rupee-sign"></i> 
                <input 
                    type='number' 
                    className="transactions-input" 
                    placeholder="Enter Amount for Transaction" 
                    value={amount} 
                    onChange={(e) => setAmount(e.target.value)}
                /> <br />
                <button className="transactions-button" onClick={handleAddIncome}>Add Income</button>
                <button className="transactions-button" onClick={handleAddExpense}>Add Expense</button>
                <button className="transactions-button" onClick={handleGetLoan}>Get Loan(12.5% Intrest)</button>
                <button className="transactions-button" onClick={handlePayLoan}>Pay To Loan</button>
            </div>
            <div className="transaction-history">
                <h1>Transaction History</h1>
                <ol>
                    {transactions.length > 0 ? (
                        transactions.map((transaction, index) => (
                            <li key={index}>{index + 1}. {transaction}</li>
                        ))
                    ) : (
                        <p>No Transactions Available</p>
                    )}
                </ol>
            </div>
        </div>
    );    
}

export default Transactions;