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
                <button className="transactions-button" onClick={() => handleAction('add-income')}>Add Income</button>
                <button className="transactions-button" onClick={() => handleAction('add-expense')}>Add Expense</button>
                <button className="transactions-button" onClick={() => handleAction('get-loan')}>Get Loan(12.5% Interest)</button>
                <button className="transactions-button" onClick={() => handleAction('pay-loan')}>Pay To Loan</button>
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
