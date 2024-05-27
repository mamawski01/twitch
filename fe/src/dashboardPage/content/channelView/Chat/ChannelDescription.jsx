import PropTypes from 'prop-types';

export default function ChannelDescription({
  dummyChannel: { description, title, username },
}) {
  console.log(title);
  return (
    <div className="channel-description-container">
      <span className="channel-description-title">{username}</span>
      <span className="channel-description-subtitle">{title}</span>
      <div className="channel-description-box">
        <span className="channel-description">{description}</span>
      </div>
    </div>
  );
}
ChannelDescription.propTypes = {
  dummyChannel: PropTypes.any,
};
