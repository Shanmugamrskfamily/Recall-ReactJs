import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
        <div>
        <ul>
            <li><Link to='/'><i className="fa-solid fa-wallet"></i> My Wallet</Link></li>
            <li><Link to='/transactions'><i className="fa-solid fa-money-bill-trend-up"></i> Manage Transactions</Link></li>
        </ul>
        </div>
    </nav>
  )
}

export default Navbar