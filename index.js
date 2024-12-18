// server/index.js

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const projectRoutes = require('./routes/projectRoutes');
const walletRoutes = require('./routes/walletRoutes');
const aiRoutes = require('./routes/aiRoutes');

const app = express();

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/projects', projectRoutes);
app.use('/api/wallet', walletRoutes);
app.use('/api/ai', aiRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});