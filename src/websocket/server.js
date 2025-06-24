import { Server } from 'socket.io';
import { http } from 'http';
import { app } from '../../index.js';
import { authenticateSocket } from './middlewares.js';
import { handleConnection } from './handlers.js';

// Create HTTP server
const server = http.createServer(app);

// Initialize WebSocket server
const io = new Server(server);

// Attach middleware
io.use(authenticateSocket);

// Handle connections
io.on('connection', (socket) => {
    handleConnection(socket, io);
});

module.exports = server;