import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import ChannelCard from './ChannelCard.jsx';

export default function Channels({ channels }) {
  const navigate = useNavigate();

  function handleNavigateToChannel(id) {
    navigate(`/channel/${id}`);
  }
  return (
    <div className="channels-container">
      {channels.map((channel) => (
        <ChannelCard
          key={channel.id}
          channel={channel}
          navigateToChannelHandler={handleNavigateToChannel}
        ></ChannelCard>
      ))}
    </div>
  );
}
Channels.propTypes = {
  channels: PropTypes.shape({
    map: PropTypes.func,
  }),
};
