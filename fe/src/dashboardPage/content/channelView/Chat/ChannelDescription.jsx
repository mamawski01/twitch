import PropTypes from 'prop-types';

import { useFollowChannel } from '../../../../shared/hooks/useFollowChannel.js';
import useUserDetails from '../../../../shared/hooks/useUserDetails.js';

export default function ChannelDescription({
  channelDetails: { description, title, username, id },
  getChannels,
}) {
  const { isLogged } = useUserDetails();

  return (
    <div className="channel-description-container">
      <span className="channel-description-title">{username}</span>
      {isLogged && (
        <span>
          <FollowedButton
            className="channel-follow-button"
            channelId={id}
            getChannels={getChannels}
          ></FollowedButton>
        </span>
      )}
      <span className="channel-description-subtitle">{title}</span>
      <div className="channel-description-box">
        <span className="channel-description">{description}</span>
      </div>
    </div>
  );
}
ChannelDescription.propTypes = {
  channelDetails: PropTypes.any,
  getChannels: PropTypes.any,
};

function FollowedButton({ channelId, getChannels }) {
  const { followChannel } = useFollowChannel();

  function handleFollowChannel() {
    followChannel(channelId, getChannels);
  }

  return (
    <button className="channel-follow-button" onClick={handleFollowChannel}>
      Follow
    </button>
  );
}
FollowedButton.propTypes = {
  channelId: PropTypes.any,
  getChannels: PropTypes.any,
};
