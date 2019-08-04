import socketIOClient from 'socket.io-client';

export default socketIOClient(process.env.API_URL, { autoConnect: true });
 