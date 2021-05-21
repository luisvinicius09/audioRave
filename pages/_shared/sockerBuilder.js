import { constants } from './constants.js';

export default class SocketBuilder {
  constructor({ socketUrl}) {
    this.socketUrl = socketUrl;
  }
  build() {
    const socket = globalThis.io.connect(this.socketUrl, {
      withCreditials: false
    });

    socket.on('connection', () => console.log('connected'));

    socket.on(constants.events.USER_CONNECTED, () => console.log());
    socket.on(constants.events.USER_DISCONNECTED, () => console.log());

    return socket;
  }
}