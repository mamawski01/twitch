import { useState } from 'react';

export default function NewMessageInput({ sendMessage }) {
  const [messageContent, messageContentSet] = useState('');

  function handleValueChange(e) {
    messageContentSet(e.target.value);
  }

  function handleSendMessage() {
    //sent message to the server
    if (messageContent.length > 0) {
      sendMessage(messageContent);
      //after sending the message, clear the input field
      messageContentSet('');
    }
  }
  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  }
  return (
    <div className="chat-message-input-container">
      <input
        type="text"
        className="chat-message-input"
        placeholder="Type message ..."
        value={messageContent}
        onChange={handleValueChange}
        onKeyDown={handleKeyPress}
      />
    </div>
  );
}
