import React, { useState } from 'react';
import axios from 'axios';

const Wallet = () => {
  const [balance, setBalance] = useState(0);
  const [depositAmount, setDepositAmount] = useState('');

  const getWalletBalance = async () => {
    try {
      const result = await axios.get('http://localhost:5000/api/wallet/balance');
      setBalance(result.data.balance);
    } catch (error) {
      console.error('Error fetching wallet balance:', error);
    }
  };

  const depositFunds = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/wallet/deposit', {
        amount: depositAmount
      });
      setBalance(response.data.newBalance);
      alert('Funds deposited successfully!');
    } catch (error) {
      console.error('Error depositing funds:', error);
      alert('Deposit failed!');
    }
  };

  return (
    <div>
      <h2>Wallet</h2>
      <p>Current Balance: ${balance}</p>
      <button onClick={getWalletBalance}>Refresh Balance</button>
      <input
        type="number"
        value={depositAmount}
        onChange={(e) => setDepositAmount(e.target.value)}
        placeholder="Enter deposit amount"
      />
      <button onClick={depositFunds}>Deposit</button>
    </div>
  );
};

export default Wallet;