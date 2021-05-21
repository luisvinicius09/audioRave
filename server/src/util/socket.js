import http from 'http';
import { Server } from 'socket.io';

export default class SocketServer {
  #io
  constructor({ port }) {
    this.port = port;
  }

  async start() {
    const server = http.createServer((request, response) => {
      response.writeHead(200, {
        'Acess-Control-Allow-Origin': '*',
        'Acess-Control-Allow-Methods': 'OPTIONS, POST, GET',
      })

      response.end('hey!');
    });

    this.#io = new Server(server, {
      cors: {
        origin: '*',
        credentials: false,
      },
    });

    const room = this.#io.of('/room');
    room.on('connection', (socket) => {
      socket.on('joinRoom', (data) => {
        console.log('data received', data);
        
      })
    })

    return new Promise((resolve, reject) => {
      server.on('error', reject);

      server.listen(this.port, () => resolve(server));
    });
  }
}