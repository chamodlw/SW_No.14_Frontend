import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Users from './Lab_operator/Users';
import TestTube from './Lab_operator/TestTube';
import ManageTestTube from './Lab_operator/ManageTestTube';
import BloodTesting from './Lab_assistant/BloodTesting';
import PaymentGateway from './user/PaymentGateway';
import UserForm from './Lab_operator/UserForm';
import BarcodeScanner from './Lab_operator/BarcodeScanner';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/lab-operator/users' element={<Users />} />
      <Route path='/lab-operator/test-tube' element={<TestTube />} />
      <Route path='/lab-operator/manage-test-tubes' element={<ManageTestTube />} />
      <Route path='/lab-assistant/blood-testing' element={<BloodTesting />} />
      <Route path='/user/payment' element={<PaymentGateway />} />
      <Route path='/lab-operator/user-form' element={<UserForm />} />
      <Route path='/scan' element={<BarcodeScanner />} />

    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
