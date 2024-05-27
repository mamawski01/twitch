import PropTypes from 'prop-types';
import ChannelCard from './ChannelCard';
export const dummyChannels = [
  {
    id: 1,
    title: 'Channel 1',
    avatarUrl: null,
    username: 'Martin',
    isOnline: false,
  },
  {
    id: 2,
    title: 'Channel 2',
    avatarUrl: null,
    username: 'John',
    isOnline: true,
  },
  {
    id: 3,
    title: 'Channel 3',
    avatarUrl: null,
    username: 'Jane',
    isOnline: false,
  },
  {
    id: 4,
    title: 'Channel 4',
    avatarUrl: null,
    username: 'Jack',
    isOnline: false,
  },
];

export default function Channels({ channels = dummyChannels }) {
  return (
    <div className="channels-container">
      {channels.map((channel) => (
        <ChannelCard
          key={channel.id}
          channel={channel}
          navigateToChannelHandler={() => {}}
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
