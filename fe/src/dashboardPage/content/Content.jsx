import PropTypes from 'prop-types';
import { Route, Routes } from 'react-router-dom';

import Channels from './channels/Channels.jsx';
import ChannelView from './channelView/ChannelView.jsx';
import Settings from './settings/Settings.jsx';

export default function Content({ channels, getChannels }) {
  return (
    <div className="content-container">
      <Routes>
        <Route path="settings" element={<Settings></Settings>}></Route>
        <Route
          path="channels"
          element={<Channels channels={channels}></Channels>}
        ></Route>
        <Route
          path="channel/:id"
          element={<ChannelView getChannels={getChannels}> </ChannelView>}
        ></Route>
      </Routes>
    </div>
  );
}

Content.propTypes = {
  channels: PropTypes.any,
  getChannels: PropTypes.any,
};
Channels.propTypes = {
  channels: PropTypes.any,
};
