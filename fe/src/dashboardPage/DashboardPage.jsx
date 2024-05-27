import Content from './content/Content.jsx';
import Nav from './nav/Nav.jsx';
import Sidebar from './sidebar/Sidebar.jsx';

import './dashboardPage.css';

export function DashboardPage() {
  return (
    <div className="dashboard-container">
      <Nav></Nav>
      <Sidebar></Sidebar>
      <Content></Content>
    </div>
  );
}
