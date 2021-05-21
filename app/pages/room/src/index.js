import { constants } from '../../_shared/constants.js';
import SocketBuilder from '../../_shared/sockerBuilder.js';

const socketBuilder = new SocketBuilder({
  socketUrl: constants.socketUrl,
  namespace: constants.socketNamespaces.room,
});

const socket = socketBuilder
  .setOnUserConnected((user) => console.log('user connected', user))
  .setOnUserDisconnected((user) => console.log('user disconnected', user))
  .build();

const room = {
  id: Date.now(),
  topic: 'JS Expert Room',
};

const user = {
  img: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/bear_russian_animal_avatar-256.png',
  username: 'Erick',
};

socket.emit(constants.events.JOIN_ROOM, { user, room });
