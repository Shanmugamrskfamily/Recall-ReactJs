import React from 'react';
import { useContext } from 'react';
import { WalletContext } from './WalletContext';

function Wallet() {
    const { walletData } = useContext(WalletContext);

    return (
        <div className="wallet-container">
            <h1 className="wallet-title">My Wallet</h1>
            <div className="wallet-info">
                <p>
                    Available Balance: <i className="fa-solid fa-indian-rupee-sign"></i>{" "}
                    {walletData.walletBalance.toFixed(2)}
                </p>
                <p>
                    Total Income: <i className="fa-solid fa-indian-rupee-sign"></i>{" "}
                    {walletData.totalIncome.toFixed(2)}
                </p>
                <p>
                    Total Expenses: <i className="fa-solid fa-indian-rupee-sign"></i>{" "}
                    {walletData.totalExpense.toFixed(2)}
                </p>
                <p>
                    Total Pending Loan: <i className="fa-solid fa-indian-rupee-sign"></i>{" "}
                    {walletData.totalLoan.toFixed(2)}
                </p>
            </div>
        </div>
    );
}

export default Wallet;
