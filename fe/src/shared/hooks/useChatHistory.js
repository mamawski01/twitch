import { useEffect } from 'react';

import {
  closeChatSubscription,
  getChatHistory,
  sendChatMessage,
} from '../../socketConn/socketConn.js';
import useUserDetails from './useUserDetails.js';
import { useStore } from '../../store/store.js';

export default function useChatHistory(channelId) {
  const { chatHistory } = useStore();

  const { isLogged, username } = useUserDetails();

  useEffect(() => {
    getChatHistory(channelId);
    return () => {
      closeChatSubscription(channelId);
    };
  }, []);

  function sendMessage(message) {
    sendChatMessage(channelId, {
      author: isLogged ? username : 'Anonymous',
      content: message,
    });
  }
  return {
    messages: chatHistory?.channelId === channelId ? chatHistory.messages : [],
    sendMessage,
  };
}
