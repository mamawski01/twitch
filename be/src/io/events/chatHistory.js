import Channel from '../../models/Channel.js';
import Message from '../../models/Message.js';

export async function emitChatHistory(socket, channelId) {
  try {
    const channel = await Channel.findById(channelId).populate('messages');

    if (channel) {
      return socket.emit('chat-history', {
        channelId,
        messages: channel.messages.map((message) => ({
          author: message.author,
          content: message.content,
          date: message.date,
        })),
      });
    }

    console.log(channelId);

    socket.emit('chat-history', {
      errorOccurred: true,
    });
  } catch (error) {
    console.log(error);
    socket.emit('chat-history', {
      errorOccurred: true,
    });
  }
}

export async function emitChatMessage(io, messageData) {
  try {
    const channel = await Channel.findById(messageData.toChannel);
    if (channel) {
      const newMessage = new Message({
        content: messageData.message.content,
        author: messageData.message.author,
        date: new Date(),
      });

      await newMessage.save();

      channel.messages.push(newMessage._id);
      await channel.save();

      io.to(messageData.toChannel).emit('chat-message', newMessage);
    }
  } catch (error) {
    console.log(error);
    return;
  }
}
