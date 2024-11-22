const express = require('express');
const router = express.Router();

let walletBalance = 0;  // Simple in-memory wallet balance

// Get current wallet balance
router.get('/balance', (req, res) => {
  res.json({ balance: walletBalance });
});

// Deposit funds into wallet
router.post('/deposit', (req, res) => {
  const { amount } = req.body;
  if (amount <= 0) {
    return res.status(400).json({ error: 'Amount must be greater than zero.' });
  }
  walletBalance += parseFloat(amount);
  res.json({ newBalance: walletBalance });
});

module.exports = router;