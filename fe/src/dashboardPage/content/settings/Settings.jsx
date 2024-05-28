import LoadingSpinner from '../../../shared/components/LoadingSpinner';
import { useChannelSettings } from '../../../shared/hooks/useChannelSettings';
import ChannelSettings from './ChannelSettings';
import PasswordSettings from './PasswordSettings';
import StreamKey from './StreamKey';

export default function Settings() {
  const { channelSettings, isFetching, saveSettings } = useChannelSettings();
  if (isFetching) {
    return <LoadingSpinner>Fetching the data</LoadingSpinner>;
  }

  return (
    <div className="settings-container">
      <span>Settings</span>
      <ChannelSettings
        settings={channelSettings}
        saveSettings={saveSettings}
      ></ChannelSettings>
      <PasswordSettings></PasswordSettings>
      <StreamKey streamKey={channelSettings.streamKey}></StreamKey>
    </div>
  );
}
