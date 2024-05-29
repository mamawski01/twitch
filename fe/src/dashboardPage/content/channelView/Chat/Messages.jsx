const messages = [
  {
    author: 'John',
    content: 'Hello',
    id: 1,
  },
  {
    author: 'Jane',
    content: 'Hi',
    id: 2,
  },
  {
    author: 'John',
    content: 'How are you?',
    id: 3,
  },
  {
    author: 'Jane',
    content: 'I am good',
    id: 4,
  },
];

function Message({ message: { author, content } }) {
  return (
    <span className="chat-messages-container">
      <span style={{ fontWeight: 'bold' }}>{author}: </span>
      {content}
    </span>
  );
}

export default function Messages() {
  return (
    <div className="chat-messages-container">
      {messages.map((message, i) => (
        <Message key={message.id} message={message}></Message>
      ))}
    </div>
  );
}
