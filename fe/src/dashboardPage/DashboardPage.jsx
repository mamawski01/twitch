import PropTypes from 'prop-types';
import { useChannels } from '../shared/hooks/useChannels.js';
import { useEffect } from 'react';

import Content from './content/Content.jsx';
import Nav from './nav/Nav.jsx';
import Sidebar from './sidebar/Sidebar.jsx';
import './dashboardPage.css';
import useUserDetails from '../shared/hooks/useUserDetails.js';
import LoadingSpinner from '../shared/components/LoadingSpinner.jsx';

export function DashboardPage() {
  const { getChannels, isFetching, allChannels, followedChannels } =
    useChannels();
  const { isLogged } = useUserDetails();

  useEffect(() => {
    getChannels(isLogged);
    //cleaning
    return () => {};
  }, []);

  if (isFetching) return <LoadingSpinner>Loading...</LoadingSpinner>;

  return (
    <div className="dashboard-container">
      <Nav></Nav>
      <Sidebar channels={followedChannels}></Sidebar>
      <Content channels={allChannels} getChannels={getChannels}></Content>
    </div>
  );
}

Sidebar.propTypes = {
  channels: PropTypes.any,
};
