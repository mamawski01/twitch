import toast from 'react-hot-toast';

import { followChannel as followChannelRequest } from '../../api/api.js';

export function useFollowChannel() {
  async function followChannel(channelId, onSuccess) {
    const responseData = await followChannelRequest(channelId);

    if (responseData.error) {
      return toast.error(
        responseData.exception?.response?.data ||
          'Error occurred while following channel.',
      );
    }
    toast.success('Channel followed successfully.');
    onSuccess(true);
  }
  return { followChannel };
}
