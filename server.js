const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const projectRoutes = require('./routes/projectRoutes');
const walletRoutes = require('./routes/walletRoutes');
const aiRoutes = require('./routes/aiRoutes');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/projects', projectRoutes);
app.use('/api/wallet', walletRoutes);
app.use('/api/ai', aiRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});