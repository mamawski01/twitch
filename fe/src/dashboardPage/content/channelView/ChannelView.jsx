import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useChannelDetails } from '../../../shared/hooks/useChannelDetails.js';
import ChannelDescription from './Chat/ChannelDescription.jsx';
import Chat from './Chat/Chat.jsx';
import LoadingSpinner from '../../../shared/components/LoadingSpinner.jsx';

import { ReactFlvPlayer } from 'react-flv-player';

export function Stream({ streamUrl }) {
  return (
    <div className="channel-video-container">
      <ReactFlvPlayer
        width="100%"
        height="100%"
        url={streamUrl}
      ></ReactFlvPlayer>
    </div>
  );
}
Stream.propTypes = {
  streamUrl: PropTypes.any,
};

export default function ChannelView({ getChannels }) {
  const { isFetching, getChannelDetails, channelDetails } = useChannelDetails();

  const { id } = useParams();

  useEffect(() => {
    getChannelDetails(id);
    //cleaning
    return () => {};
  }, []);

  if (isFetching) return <LoadingSpinner></LoadingSpinner>;
  return (
    <div className="channel-container">
      <div className="channel-video-description-section">
        {channelDetails.isOnline ? (
          <Stream streamUrl={channelDetails.streamUrl}></Stream>
        ) : (
          <div className="channel-offline-placeholder">
            <span>Channel is offline</span>
          </div>
        )}

        <ChannelDescription
          channelDetails={channelDetails}
          getChannels={getChannels}
        ></ChannelDescription>
      </div>
      <Chat></Chat>
    </div>
  );
}

ChannelView.propTypes = {
  getChannels: PropTypes.any,
};
