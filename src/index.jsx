import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import Homepage  from './pages/Homepage/index.jsx';
import Footer from './components/Footer';
import Header from './components/Header/index.jsx';
import EmployeeList  from './pages/EmployeeList/index.jsx';
import store from './utils/store';
import Overlay from './components/Overlay';

const router = createBrowserRouter([
  {
    path: "/",
    element:
      <>
        <Header />
        <Homepage />
        <Footer />
        <Overlay />
      </>
  },
  {
    path: "/employee-list",
    element:
      <>
        <Header />
        <EmployeeList />
        <Footer />
      </>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
