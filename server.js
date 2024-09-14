const WebSocket = require('ws');
const express = require('express');
const app = express();

// Create a WebSocket server
const wss = new WebSocket.Server({ port: 8080 });

// WebSocket connection
wss.on('connection', (ws) => {
  console.log('Client connected');

  ws.on('message', (message) => {
    console.log('Received:', message);

    // Broadcast the message to all clients
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  ws.on('close', () => console.log('Client disconnected'));
});

// Start an Express server
app.listen(3000, () => {
  console.log('HTTP server running on http://localhost:3030');
});
