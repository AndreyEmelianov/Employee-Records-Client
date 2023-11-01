import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Paths } from './paths/paths';
import { store } from './app/store';
import Login from './pages/login';
import Register from './pages/register';

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
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);

reportWebVitals();
