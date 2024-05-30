import PropTypes from 'prop-types';
import useChatHistory from '../../../../shared/hooks/useChatHistory.js';
import Messages from './Messages.jsx';
import NewMessageInput from './NewMessageInput.jsx';

export default function Chat({ channelId }) {
  const { sendMessage, messages } = useChatHistory(channelId);

  return (
    <div className="chat-section">
      <div className="chat-title-container">
        <span className="chat-title-text">Stream Chat</span>
      </div>
      <Messages messages={messages}></Messages>
      <NewMessageInput sendMessage={sendMessage}></NewMessageInput>
    </div>
  );
}

Chat.propTypes = {
  channelId: PropTypes.any,
};
