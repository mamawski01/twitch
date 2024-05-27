import { Route, Routes } from 'react-router-dom';

import Channels from './channels/Channels.jsx';
import ChannelView from './channelView/ChannelView.jsx';
import Settings from './settings/Settings.jsx';

export default function Content() {
  return (
    <div className="content-container">
      <Routes>
        <Route path="settings" element={<Settings></Settings>}></Route>
        <Route path="channels" element={<Channels></Channels>}></Route>
        <Route path="channel/:id" element={<ChannelView></ChannelView>}></Route>
      </Routes>
    </div>
  );
}
