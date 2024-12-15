const ws = new WebSocket('ws://localhost:5000');

ws.onmessage = (event) => {
  const message = JSON.parse(event.data);
  if (message.type === 'NEW_INCIDENT') {
    console.log('New incident:', message.data);
    // Update state or notify the user
  }
};

export default ws;
