import { useState } from 'react';
import toast from 'react-hot-toast';

import { getChannelDetails as getChannelDetailsRequest } from '../../api/api';

export function useChannelDetails() {
  const [channelDetails, channelDetailsSet] = useState(null);
  async function getChannelDetails(id) {
    const responseData = await getChannelDetailsRequest(id);

    if (responseData.error) {
      return toast.error(
        responseData.exception?.response?.data ||
          'Error occured while fetching channel details.',
      );
    }
    channelDetailsSet(responseData.data);
  }
  return {
    channelDetails,
    isFetching: !channelDetails,
    getChannelDetails,
  };
}
