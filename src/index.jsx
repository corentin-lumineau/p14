import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Homepage  from './pages/Homepage/index.jsx';
import Footer from './components/Footer';
import Header from './components/Header/index.jsx';
import EmployeeList  from './pages/EmployeeList/index.jsx';
import store from './utils/store';


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/employee-list' element={<EmployeeList />} />
        </Routes>
        <Footer />
      </Router>
    </Provider >
  </React.StrictMode>
);


