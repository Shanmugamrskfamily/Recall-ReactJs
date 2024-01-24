import React, { useState, useReducer } from 'react';

const initialWallet = { walletBalance: 100, totalIncome: 0, totalSpent: 0, totalPendingLoan: 0 };

const walletReducer = (state, action) => {
    switch (action.type) {
        case 'addincome':
            return { ...state, walletBalance: state.walletBalance + action.amount, totalIncome: state.totalIncome + action.amount };
        case 'spendmoney':
            if (state.walletBalance < action.amount) {
                alert('Insufficient Balance to Spend! Try Lesser Amount..');
                return state;
            } else {
                return { ...state, walletBalance: state.walletBalance - action.amount, totalSpent: state.totalSpent + action.amount };
            }
        case 'borrowloan':
            return { ...state, walletBalance: state.walletBalance + action.amount, totalPendingLoan: state.totalPendingLoan + action.amount };
        case 'payloan':
            if (state.walletBalance < action.amount) {
                alert('Insufficient Balance to Pay Loan! Try Lesser Amount..');
                return state;
            } else if (state.totalPendingLoan < action.amount) {
                alert(`Your Pending Loan is ${state.totalPendingLoan}, Which is lesser than your entered amount! Try with exact Pending Amount..`);
                return state;
            } else {
                return { ...state, walletBalance: state.walletBalance - action.amount, totalPendingLoan: state.totalPendingLoan - action.amount };
            }
        default:
            return state;
    }
};

function MyWallet() {
    const [wallet, dispatch] = useReducer(walletReducer, initialWallet);
    const [amount, setAmount] = useState('');

    const handleSubmit = (actionType) => {
        const money = parseFloat(amount);
        if (isNaN(money) || money <= 0) {
            alert('Please enter a valid Amount! Try Again..');
            return;
        }

        dispatch({ type: actionType, amount: money });
    };

    return (
        <div className="wallet-container">
          <h1>My Wallet</h1>
          <div className="wallet-info">
            <p>Wallet Current Balance: <b>₹{wallet.walletBalance.toFixed(2)}</b></p>
            <p>Total Income Earned: <b>₹{wallet.totalIncome.toFixed(2)}</b></p>
            <p>Total Spent Money: <b>₹{wallet.totalSpent.toFixed(2)}</b></p>
            <p>Pending Loan Amount: <b>₹{wallet.totalPendingLoan.toFixed(2)}</b></p>
          </div>
          <div className="wallet-actions">
            <input type='number' name="money" id="money" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter Amount" />
            <div className="action-buttons">
              <button onClick={() => handleSubmit('addincome')}>Add Income</button>
              <button onClick={() => handleSubmit('spendmoney')}>Spend Money</button>
              <button onClick={() => handleSubmit('borrowloan')}>Borrow Loan</button>
              <button onClick={() => handleSubmit('payloan')}>Pay Loan</button>
            </div>
          </div>
        </div>
      );
    }
    
    export default MyWallet;
