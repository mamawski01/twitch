import StreamKey from './StreamKey';

const channelSettings = {
  tittle: 'Channel Settings',
  description: 'Channel Settings Description',
  avatarUrl: 'none',
  username: 'Martin',
  streamKey: '1234',
};

export default function Settings() {
  return (
    <div className="settings-container">
      <span>Settings</span>
      <StreamKey streamKey={channelSettings.streamKey}></StreamKey>
    </div>
  );
}
