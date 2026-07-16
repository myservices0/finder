const socket = new WebSocket('ws://localhost:8080');
socket.send(JSON.stringify({ action: "highlight", blocks: enabled }));