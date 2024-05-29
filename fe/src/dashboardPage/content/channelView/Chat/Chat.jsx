import Messages from './Messages.jsx';
import NewMessageInput from './NewMessageInput.jsx';

export default function Chat({ channelId }) {
  return (
    <div className="chat-section">
      <div className="chat-title-container">
        <span className="chat-title-text">Stream Chat</span>
      </div>
      <Messages messages={[]}></Messages>
      <NewMessageInput></NewMessageInput>
    </div>
  );
}
