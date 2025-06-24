export const handleConnection = (socket, io) => {
    console.log(`User connected: ${socket.id}`);
    // Handle chat messages
    socket.on('chat message', (data) => {
        console.log(`Message from ${socket.user.username}: ${data.message}`);
        io.emit('chat message', data); // Broadcast the message
    });
    // Handle disconnections
    socket.on('disconnect', () => {
        console.log(`User disconnected: ${socket.id}`);
    });
};