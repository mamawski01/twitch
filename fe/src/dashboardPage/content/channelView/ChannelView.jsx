import ChannelDescription from './Chat/ChannelDescription.jsx';
import Chat from './Chat/Chat.jsx';

const dummyChannel = {
  id: 1,
  title: 'Channel 1',
  description: 'Channel Description',
  username: 'Martin',
  isOnline: false,
};

export default function ChannelView() {
  return (
    <div className="channel-container">
      <div className="channel-video-description-section">
        <div className="channel-offline-placeholder">
          <span>Channel is offline</span>
        </div>
        <ChannelDescription dummyChannel={dummyChannel}></ChannelDescription>
      </div>
      <Chat></Chat>
    </div>
  );
}
