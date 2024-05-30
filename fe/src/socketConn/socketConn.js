import io from 'socket.io-client';

import { useStore } from '../store/store.js';

let socket;

export function connectWithSocketServer() {
  socket = io('http://localhost:6900');

  socket.on('connect', () => {
    console.log('connected to socket server');
    console.log(socket.id);
  });

  socket.on('chat-history', (chatHistory) => {
    const { setChatHistory } = useStore.getState();

    setChatHistory(chatHistory);
  });

  socket.on('chat-message', (chatMessage) => {
    const { chatHistory, setChatHistory } = useStore.getState();

    console.log(chatMessage);

    setChatHistory({
      channelId: chatHistory.channelId,
      messages: [
        ...chatHistory.messages,
        {
          author: chatMessage.author,
          content: chatMessage.content,
        },
      ],
    });
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
