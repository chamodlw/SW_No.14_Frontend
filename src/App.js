import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Head from './Components/Head';
import HomePage from './Components/HomePage';
import Signin from "./Components/Signin"
import Login from "./Components/Login"
import Selecttest from './Selecttest';
import AddTest from './Admin/AddTest';
import ViewTest from './Admin/ViewTest';
import ViewPatient from './Admin/ViewPatients';
import ViewAppointment from './Admin/ViewAppoinments';
import AdminInterface from './Admin/AdminInterface';
import Dhome from './Dhome';
import Dapproval from './Dapproval';
import Contact from './Contact';
import ReportUI from './ReportUI/ReportUI';

function App() {
  return (
    <div>
    {/* <Signin></Signin> */}
    <BrowserRouter>
    <Routes>
    <Route path='Dhome' element={<Dhome/>}/>
      <Route path='Dapproval' element={<Dapproval/>}/>
      <Route path='Contact' element={<Contact/>}/>
      <Route path='AdminInterface' element={<AdminInterface/>}/>
      <Route path='Selecttest' element={<Selecttest/>}/>
      <Route path='AddTest' element={<AddTest/>}/>
      <Route path='ViewTest' element={<ViewTest/>}/>
      <Route path='ViewPatient' element={<ViewPatient/>}/>
      <Route path='ViewAppointment' element={<ViewAppointment/>}/>
      <Route path='/Head' element={<Head/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Signin' element={<Signin/>}/>
      <Route path='/HomePage' element={<HomePage/>}/>
      <Route path="/ReportUI/:id" element={<ReportUI />}/>
      </Routes>
  </BrowserRouter>
    </div>



    );


}


export default App;
//