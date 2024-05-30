import PropTypes from 'prop-types';
function Message({ message: { author, content } }) {
  return (
    <span className="chat-messages-container">
      <span style={{ fontWeight: 'bold' }}>{author}: </span>
      {content}
    </span>
  );
}

export default function Messages({ messages }) {
  console.log(messages);
  return (
    <div className="chat-messages-container">
      {messages.map((message, i) => (
        <Message key={i} message={message}></Message>
      ))}
    </div>
  );
}

Messages.propTypes = {
  messages: PropTypes.any,
};
