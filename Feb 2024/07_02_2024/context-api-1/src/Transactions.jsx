import React, { useContext, useState, useEffect } from 'react';
import { WalletContext } from './WalletContext';

function Transactions() {
    const [amount, setAmount] = useState(0);
    const { handleTransaction, walletData } = useContext(WalletContext);
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        setTransactions(walletData.transaction_history);
    }, [walletData]);

    const handleAction = (type) => {
        if (amount <= 0) {
            alert('Invalid amount!');
            return;
        }
        handleTransaction(parseFloat(amount), type);
        setAmount(0);
    }

    const getTransactionColor = (type) => {
        const transactionType = type.includes('Income')||type.includes('income') ? 'Income Added' : type.includes('Expense')||type.includes('expense') ? 'Expense Added' : type.includes('Received')||type.includes('get-loan') ? 'Loan Received' : 'Loan Paid';
        const colors = {
            'Income Added': { backgroundColor: 'green', color: 'white', fontWeight:'bold' },
            'Expense Added': { backgroundColor: 'red', color: 'white',fontWeight:'bold' },
            'Loan Received': { backgroundColor: 'orange', color: 'white',fontWeight:'bold' },
            'Loan Paid': { backgroundColor: 'blue', color: 'white',fontWeight:'bold' },
        };
        return colors[transactionType] || { backgroundColor: 'white', color: 'black',fontWeight:'bold' };
    };

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
                {['add-income', 'add-expense', 'get-loan', 'pay-loan'].map((actionType, index) => (
                    <button key={index} className="transactions-button" style={getTransactionColor(actionType)} onClick={() => handleAction(actionType)}>
                        {actionType.replace('-', ' ')}
                    </button>
                ))}
            </div>
            <div className="transaction-history">
                <h1>Transaction History</h1>
                <ol>
                    {transactions.map((transaction, index) => (
                        <li key={index} style={getTransactionColor(transaction)}>{index+1}. {transaction}</li>
                    ))}
                </ol>
            </div>
        </div>
    );
}

export default Transactions;
