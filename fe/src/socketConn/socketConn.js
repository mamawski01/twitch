import io from 'socket.io-client';
// import { useStore } from '../../../be/src/store/store.js';

let socket;

export function connectWithSocketServer() {
  socket = io('http://localhost:6900');

  socket.on('connect', () => {
    console.log('connected to socket server');
    console.log(socket.id);
  });

  socket.on('chat-history', (chatHistory) => {
    // const { setChatHistory } = useStore();
    console.log(setChatHistory);

    console.log(chatHistory);
    console.log('chat history received from server');
  });

  socket.on('chat-message', (chatMessage) => {
    console.log(chatMessage);
    console.log('new message received from server');
  });
}

export function getChatHistory(channelId) {
  socket.emit('chat-history', channelId);
}

export function sendChatMessage(toChannel, message) {
  socket.emit('chat-message', {
    toChannel,
    message,
  });
}

export function closeChatSubscription(channelId) {
  socket.emit('chat-unsubscribe', channelId);
}
