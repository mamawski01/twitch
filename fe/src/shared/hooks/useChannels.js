import { useState } from 'react';
import toast from 'react-hot-toast';

import {
  getChannels as getChannelsRequest,
  getFollowedChannels,
} from '../../api/api.js';

export function useChannels() {
  const [channels, channelsSet] = useState(null);

  async function getChannels(isLogged = false) {
    const channelsData = await getChannelsRequest();

    if (channelsData.error) {
      return toast.error(
        channelsData.exception?.response?.data ||
          'Error occurred while fetching channels.',
      );
    }

    if (!isLogged) {
      return channelsSet({
        channels: channelsData.data.channels,
      });
    }

    const followedChannelsData = await getFollowedChannels();

    if (followedChannelsData.error) {
      return toast.error(
        followedChannelsData.exception?.response?.data ||
          'Error occurred while fetching followed channels.',
      );
    }

    channelsSet({
      channels: channelsData.data.channels,
      followedChannels: channelsData.data.channels.filter((channel) =>
        followedChannelsData.data.followedChannels.includes(channel.id),
      ),
    });
  }

  return {
    getChannels,
    isFetching: Boolean(!channels),
    allChannels: channels?.channels,
    followedChannels: channels?.followedChannels,
  };
}
