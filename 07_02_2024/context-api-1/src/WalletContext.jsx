import React, { createContext, useState, useEffect } from "react";

const WalletContext = createContext();

const WalletProvider = ({ children }) => {
  const initialWalletData = {
    walletBalance: parseFloat(0),
    totalLoan: parseFloat(0),
    totalExpense: parseFloat(0),
    totalIncome: parseFloat(0),
  };

  const [walletData, setWalletData] = useState(initialWalletData);

  useEffect(() => {
    const wallet = JSON.parse(localStorage.getItem("myWallet"));
    if (!wallet) {
      localStorage.setItem("myWallet", JSON.stringify(initialWalletData));
    } else {
      setWalletData(wallet);
    }
  }, []);

  const handleTransaction = (amount, type) => {
    setWalletData((prevWalletData) => {
      const updatedData = { ...prevWalletData };
      if (type === "add-income") {
        updatedData.totalIncome += parseInt(amount);
        updatedData.walletBalance += amount;
      } else if (type === "add-expense") {
        if (updatedData.walletBalance < amount) {
          alert(`Insufficient Wallet Balance! Available Balance: ₹${updatedData.walletBalance.toFixed(2)}`);
          return;
        }
        updatedData.walletBalance -= amount;
        updatedData.totalExpense += amount;
      } else if (type === "get-loan") {
        updatedData.totalLoan += amount;
        updatedData.walletBalance += amount;
      } else if (type === "pay-loan") {
        if (updatedData.totalLoan < amount) {
          alert(
            `Your Total Pending Loan ₹${updatedData.totalLoan.toFixed(2)} is lower than the amount, ₹${amount.toFixed(2)} you entered!`
          );
          return;
        }
        if (updatedData.walletBalance < amount) {
          alert(
            `Insufficient Wallet Balance to Pay Loan! Available Balance: ₹${updatedData.walletBalance.toFixed(2)}`
          );
          return;
        }
        updatedData.totalLoan -= amount;
        updatedData.walletBalance -= amount;
      }
      localStorage.setItem("myWallet", JSON.stringify(updatedData));
      return updatedData;
    });
  };

  return (
    <WalletContext.Provider value={{ walletData, handleTransaction }}>
      {children}
    </WalletContext.Provider>
  );
};

export { WalletContext, WalletProvider };
