import PropTypes from 'prop-types';

export default function ChannelCard({
  channel: { avatarUrl, title, username, isOnline, id },
  navigateToChannelHandler,
}) {
  function handleNavigate() {
    try {
      navigateToChannelHandler(id);
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <div className="channels-card" onClick={handleNavigate}>
      <ChannelAvatar url={avatarUrl}></ChannelAvatar>
      <span className="channels-card-title">{title}</span>
      <span className="channels-card-text">{username}</span>
      <span
        className="channels-card-text"
        style={{
          color: isOnline ? 'green' : 'red',
        }}
      >
        {isOnline ? 'Online' : 'Offline'}
      </span>
    </div>
  );
}
ChannelCard.propTypes = {
  channel: PropTypes.any,
  navigateToChannelHandler: PropTypes.func,
};

const imageUrl =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe1M-pn5bjphHOA8SfLVr2cuY6jsyyLo1Y730cbGK5gQ&s';

function ChannelAvatar({ url }) {
  return (
    <div className="channels-avatar-container">
      <img src={url || imageUrl} width="100%" height="100%" alt="" />
    </div>
  );
}

ChannelAvatar.propTypes = {
  url: PropTypes.any,
};
