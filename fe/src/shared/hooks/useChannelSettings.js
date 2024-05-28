import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import { getChannelSettings, updateChannelSettings } from '../../api/api.js';

export function useChannelSettings() {
  const [channelSettings, channelSettingsSet] = useState(null);

  async function fetchChannelSettings() {
    const response = await getChannelSettings();

    if (response.error) {
      return toast.error(
        response.exception?.response?.data ||
          'Error occured while fetching channel settings.',
      );
    }
    channelSettingsSet({
      username: response.data.username,
      title: response.data.title,
      description: response.data.description,
      avatarUrl: response.data.avatarUrl,
      streamKey: response.data.streamKey,
    });
  }
  const saveSettings = async (data) => {
    const response = await updateChannelSettings(data);

    if (response.error) {
      return toast.error(
        response.exception?.response?.data ||
          'Error occured while saving channel details.',
      );
    }
    toast.success('Channel settings saved successfully.');
  };

  useEffect(() => {
    fetchChannelSettings();
    //cleaning
    return () => {};
  }, []);

  return {
    isFetching: !channelSettings,
    channelSettings,
    saveSettings,
  };
}
