import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Head from './Components/Head';
import HomePage from './Components/HomePage';
import Signin from "./Components/Signin";
import Login from "./Components/Login";
import Selecttest from './Selecttest';
import AddTest from './Admin/AddTest';
import ViewTest from './Admin/ViewTest';
import ViewPatient from './Admin/ViewPatients';
import ViewAppointment from './Admin/ViewAppoinments';
import AdminInterface from './Admin/AdminInterface';
import Dhome from './Dhome';
import Dapproval from './Dapproval';
import Contact from './Contact';

function App() {
  return (
    <div>
    {/* <Signin></Signin> */}
    <BrowserRouter>
    <Routes>
      <Route path='/AdminInterface/:id' element={<AdminInterface/>}/> 
      {/* path is the URL we should access while element is the component/page */}
      <Route path='/Admin/:id' element={<Admin/>}/>
      <Route path='/AddTest/:id' element={<AddTest/>}/>

      <Route path='/Selecttest' element={<Selecttest/>}/>
      <Route path='/Head' element={<Head/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Signin' element={<Signin/>}/>
      <Route path='/HomePage' element={<HomePage/>}/>
    </Routes>
  </BrowserRouter>
    </div>
    );

}


export default App;
//