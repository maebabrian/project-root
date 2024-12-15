const http = require('http');
const express = require('express');
const cors = require('cors');
const { connectToDatabase } = require('./config/database');
const setupWebSocket = require('./src/sockets/websocket');

const app = express();
const server = http.createServer(app);

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
connectToDatabase();

// Setup WebSocket
setupWebSocket(server);

// Example API route
app.get('/api/test', (req, res) => {
  res.send('API is working');
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
