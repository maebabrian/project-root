module.exports = (server) => {
    const { Server } = require('socket.io');
    const io = new Server(server, {
      cors: {
        origin: '*',
        methods: ['GET', 'POST'],
      },
    });
  
    io.on('connection', (socket) => {
      console.log('A user connected:', socket.id);
  
      socket.on('responderLocationUpdate', (data) => {
        io.emit('responderLocationUpdate', data);
      });
  
      socket.on('disconnect', () => {
        console.log('A user disconnected:', socket.id);
      });
    });
  
    return io;
  };
  