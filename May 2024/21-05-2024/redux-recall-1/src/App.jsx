import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addIncome, addExpense, getLoan, repayLoan } from './Redux/Slicers/AccountSlice';
import './App.css';

function App() {
  const [inputVal, setInputVal] = useState('');
  const [selectedAction, setSelectedAction] = useState('addIncome');
  const mainBalance = useSelector(state => state.account.mainBalance);
  const transactions = useSelector(state => state.account.transactions);
  const loanBalance = useSelector(state => state.account.loanBalance);
  const totalExpense = useSelector(state => state.account.totalExpense);
  const totalIncome = useSelector(state => state.account.totalIncome);

  const dispatch = useDispatch();

  const handleAction = () => {
    if (inputVal === '' || isNaN(inputVal)) {
      alert('Please enter a valid amount.');
      return; 
    }
    switch (selectedAction) {
      case 'addIncome':
        dispatch(addIncome(inputVal));
        break;
      case 'addExpense':
        dispatch(addExpense(inputVal));
        break;
      case 'getLoan':
        dispatch(getLoan(inputVal));
        break;
      case 'repayLoan':
        dispatch(repayLoan(inputVal));
        break;
      default:
        break;
    }
    setInputVal('');
  };

  return (
    <div className="container">
      <div className="header">
        <h1>My Account Manager</h1>
      </div>
      <div className="balance-info">
        <h2>Main Balance: {mainBalance}</h2>
        <p>Loan Balance: {loanBalance}</p>
        <p>Total Income: {totalIncome}</p>
        <p>Total Expense: {totalExpense}</p>
      </div>
      <div className="input-group">
        <input
          type="number"
          placeholder="Enter amount"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <select name="action" id="action" onChange={(e) => setSelectedAction(e.target.value)}>
          <option value="addIncome">Add Income</option>
          <option value="addExpense">Add Expense</option>
          <option value="getLoan">Get Loan</option>
          <option value="repayLoan">Repay Loan</option>
        </select>
        <button onClick={handleAction}>Send Action</button>
      </div>
      <div className="transaction-list">
        <h2>All Transactions</h2>
        <ul>
          {transactions.map((transaction, index) => (
            <li key={index}>{index + 1}. {transaction}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
