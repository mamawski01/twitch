import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { App } from './App.jsx';
import { AuthPage } from './authPage/AuthPage.jsx';
import { DashboardPage } from './dashboardPage/DashboardPage.jsx';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/auth" element={<AuthPage></AuthPage>}></Route>
          <Route path="/*" element={<DashboardPage></DashboardPage>}></Route>
        </Routes>
      </App>
    </BrowserRouter>
  </React.StrictMode>,
);
