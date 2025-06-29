// Backend/socketHandlers.js
export function setupSocketHandlers(io) {
  io.on('connection', (socket) => {
    console.log('✅ Socket connected:', socket.id);

    socket.on('newOrder', (data) => {
      console.log('📦 New Order:', data);
      io.emit('orderUpdate', data); // Broadcast to all clients
    });

    socket.on('disconnect', () => {
      console.log('❌ Disconnected:', socket.id);
    });
  });
}
