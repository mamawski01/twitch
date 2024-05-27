import PropTypes from 'prop-types';
const followedChannels = [
  {
    id: 1,
    username: 'Martin',
    isOnline: false,
  },
  {
    id: 2,
    username: 'John',
    isOnline: true,
  },
  {
    id: 3,
    username: 'Jane',
    isOnline: false,
  },
];

export default function Sidebar({ channels = followedChannels }) {
  return (
    <div className=" sidebar-container">
      <span className="sidebar-title">For you</span>
      <span className="sidebar-subtitle">FOLLOWED CHANNELS</span>
      {channels.map((channel, i) => (
        <div className="sidebar-list-item" key={i}>
          <span className="sidebar-list-username">{channel.username}</span>
          <span
            className="sidebar-list-status"
            style={{
              color: channel.isOnline ? 'green' : 'red',
            }}
          >
            {channel.isOnline ? 'Online' : 'Offline'}
          </span>
        </div>
      ))}
    </div>
  );
}
Sidebar.propTypes = {
  channels: PropTypes.shape({
    map: PropTypes.func,
  }),
};
