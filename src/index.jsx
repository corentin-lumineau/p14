import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import Homepage  from './pages/Homepage/index.jsx';
import EmployeeList  from './pages/EmployeeList/index.jsx';
import store from './utils/store';


const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage/>
  },
  {
    path: "/employee-list",
    element: <EmployeeList />
  }
])
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider >
  </React.StrictMode>
);


