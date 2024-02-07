import React, { createContext, useState, useEffect } from "react";

const WalletContext = createContext();

const WalletProvider = ({ children }) => {
  const initialWalletData = {
    walletBalance: parseFloat(0),
    totalLoan: parseFloat(0),
    totalExpense: parseFloat(0),
    totalIncome: parseFloat(0),
    transaction_history:[],
  };
  const [walletData, setWalletData] = useState(initialWalletData);

  useEffect(() => {
    const wallet = JSON.parse(localStorage.getItem("myWallet"));
    if (wallet) setWalletData(wallet);
  }, []);

  const handleTransaction = (amount, type) => {
    setWalletData(prevWalletData => {
      const updatedData = { ...prevWalletData };
      const currentDate = new Date();
      const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
      const transactionMessage = `${formattedDate} ${type === 'add-income' ? 'Income Added' : type === 'add-expense' ? 'Expense Added' : type === 'get-loan' ? 'Loan Received' : 'Loan Paid'}: ₹${amount.toFixed(2)}`;
      
      switch (type) {
        case "add-income":
          updatedData.totalIncome += parseInt(amount);
          updatedData.walletBalance += amount;
          alert('Income Added Successfully!');
          updatedData.transaction_history.push(transactionMessage);
          break;
        case "add-expense":
          if (updatedData.walletBalance < amount) {
            alert(`Insufficient Wallet Balance! Available Balance: ₹${updatedData.walletBalance}`);
            break;
          }
          else {
            updatedData.walletBalance -= amount;
            updatedData.totalExpense += amount;
            updatedData.transaction_history.push(transactionMessage);
            alert(`Expense Added Successfully!`);
          }
          break;
        case "get-loan":
          const intrest=amount/100*12.5;
          updatedData.totalLoan += amount;
          updatedData.walletBalance += amount-intrest;
          updatedData.transaction_history.push(transactionMessage);
          alert(`Loan Received Successfully!`);
          break;
        case "pay-loan":
          if (updatedData.totalLoan < amount) {
            alert(`Your Total Pending Loan ₹${updatedData.totalLoan.toFixed(2)} is lower than the amount, ₹${amount.toFixed(2)} you entered!`);
            break;
          }
          else if (updatedData.walletBalance < amount) {
            alert(`Insufficient Wallet Balance to Pay Loan! Available Balance: ₹${updatedData.walletBalance.toFixed(2)}`);
            break;
          }
          else {
            updatedData.totalLoan -= amount;
            updatedData.walletBalance -= amount;
            updatedData.transaction_history.push(transactionMessage);
            alert(`Loan Paid Successfully!`);
          }
          break;
        default:
          break;
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
