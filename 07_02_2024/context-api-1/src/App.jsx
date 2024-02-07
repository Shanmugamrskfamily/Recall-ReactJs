import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { WalletProvider } from './WalletContext';
import Wallet from './Wallet';
import Navbar from './Navbar';
import Transactions from './Transactions';

function App() {
  return (
    <WalletProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Wallet />} />
          <Route path='/transactions' element={<Transactions/>} />
        </Routes>
      </Router>
    </WalletProvider>
  );
}

export default App;
