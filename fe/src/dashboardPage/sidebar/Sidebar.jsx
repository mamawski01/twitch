import PropTypes from 'prop-types';

export default function Sidebar({ channels }) {
  if (!channels) return null;

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
