import { useState } from 'react';

import { getChannelDetails as getChannelDetailsRequest } from '../../api/api';
import toast from 'react-hot-toast';

export function useChannelDetails() {
  const [channelDetails, channelDetailsSet] = useState(null);
  async function getChannelDetails() {
    const responseData = await getChannelDetailsRequest();

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
  };
}
