import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Head from './Components/Head';
import HomePage from './Components/HomePage';
import Signin from "./Components/Signin";
import Login from "./Components/Login";
import Selecttest from './Patient/Patient_Component/Selecttest';
import AddTest from './Admin/AddTest';
import ViewTest from './Admin/ViewTest';
import ViewPatient from './Admin/ViewPatients';
import ViewAppointment from './Admin/ViewAppoinments';
import AdminInterface from './Admin/AdminInterface';
import Admin from "./Admin/Admin";
import UserProfileUpdate from "./Components/UserProfileUpdate";
import Patient  from "./pages/Patient";
import Doctor from "./pages/Doctor";
import UserProfile from "./Components/UserProfile";

import PatientInterface from './Patient/PatientInterface';
import PViewTest from './Patient/Patient_Component/PViewTest';
import AViewTest from './Admin/AViewTest';


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
      <Route path='/AViewTest/:id' element={<AViewTest/>}/>
      <Route path='/ViewAppoinment/:id' element={<ViewAppointment/>}/>
      <Route path='/ViewPatient/:id' element={<ViewPatient/>}/>

      <Route path='/Selecttest' element={<Selecttest/>}/>
      <Route path='/Head' element={<Head/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Signin' element={<Signin/>}/>
      <Route path='/HomePage/*' element={<HomePage/>}/>
      <Route path='/Patient/:id' element={<Patient/>}/> 
      {/* Dynamic routing - '/Patient/:id'*/}
      <Route path='/Doctor/:id' element={<Doctor/>}/>
      <Route path='/Doctor/:id' element={<Doctor/>}/>
      <Route path='/Doctor/:id' element={<Doctor/>}/>
      <Route path='/UserProfile/:id' element={<UserProfile/>}/>
      <Route path='/UserProfileUpdate/:id' element={<UserProfileUpdate/>}/>
      <Route path='/' element={<HomePage />} /> 
      {/* default loading path - Homepage*/}
      <Route path='*' element={<HomePage />} /> 
      {/* Redirect to HomePage for any unknown routes */}
    </Routes>
  </BrowserRouter>
    </div>
    );

}

export default App;
//