import React from 'react';
import ReactDOM from 'react-dom/client';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { App } from './App.jsx';
import { AuthPage } from './authPage/AuthPage.jsx';
import { DashboardPage } from './dashboardPage/DashboardPage.jsx';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/auth',
    element: <AuthPage></AuthPage>,
  },
  {
    path: '/',
    element: <DashboardPage></DashboardPage>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App>
      <RouterProvider router={router}></RouterProvider>
    </App>
  </React.StrictMode>,
);
