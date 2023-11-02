import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ConfigProvider, theme } from 'antd';

import { Paths } from './paths/paths';
import { store } from './app/store';
import Login from './pages/login';
import Register from './pages/register';
import Auth from './features/auth/auth';

import reportWebVitals from './reportWebVitals';

import './index.css';

const router = createBrowserRouter([
  {
    path: Paths.home,
    element: <h1>home</h1>,
  },
  {
    path: Paths.login,
    element: <Login />,
  },
  {
    path: Paths.register,
    element: <Register />,
  },
]);

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
        }}>
        <Auth>
          <RouterProvider router={router} />
        </Auth>
      </ConfigProvider>
    </Provider>
  </React.StrictMode>,
);

reportWebVitals();
