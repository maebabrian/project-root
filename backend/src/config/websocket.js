const WebSocket = require('ws');

let clients = [];

exports.initializeWebSocket = (server) => {
  const wss = new WebSocket.Server({ server });

  wss.on('connection', (ws) => {
    clients.push(ws);

    ws.on('close', () => {
      clients = clients.filter((client) => client !== ws);
    });
  });

  console.log('WebSocket server initialized');
};

exports.broadcastUpdate = (data) => {
  clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(data));
    }
  });
};
