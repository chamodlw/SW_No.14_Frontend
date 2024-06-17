
// import { Table } from '@mui/material';
// import { Box } from '@mui/system';
// import './App.css';
// import Cover from './Component/Cover';
// import Footer from './Component/Footer';
// import Head from './Component/Head';
// import Report from './Component/table';
// import Reportview from './Pages/Reportview';
// import LabReportUI from './Pages/SearchResultPage';
// import SearchBar from './Pages/Serch';

// function App() {
//   return (
//     <div className="App">
//   <Box>
//     <Reportview/>
//     <SearchBar/>
// <LabReportUI/>

//   </Box>
//     </div>
//   );
// }

// export default App;


// App.js



import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LabReportUI from './Pages/SearchResultPage';
import Reportview from './Pages/Reportview';
import SearchBar from './Pages/Serch';
import  { useState ,React} from 'react';
import ReportUI from './Component/ReportUI';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Head from './Components/Head';
import HomePage from './Components/HomePage';
import Signin from "./Components/Signin";
import Login from "./Components/Login";
import Selecttest from './Patient/Patient_Component/Selecttest';
import AddTest from './Admin/AddTest';
import ViewPatient from './Admin/ViewPatients';
import ViewAppointment from './Admin/ViewAppoinments';
import AdminInterface from './Admin/AdminInterface';
import Dhome from './Dhome';
import Dapproval from './Dapproval';
import Contact from './Contact';

import PatientInterface from './Patient/PatientInterface';
import PViewTest from './Patient/Patient_Component/PViewTest';
import AViewTest from './Admin/AViewTest';

const App = () => {
  
    const [currentPage, setCurrentPage] = useState('page1');
  
 


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
      <Route path='/ViewAppointment/:id' element={<ViewAppointment/>}/>
      <Route path='/ViewPatient/:id' element={<ViewPatient/>}/>

      
      <Route path='/PViewTest/:id' element={<PViewTest/>}/>

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
    <Router>
      <Routes>
        <Route path="/" element={<SearchBar />} />
        <Route path="/Reportview" element={<Reportview />} />
        <Route path="/LabReportUI" element={<LabReportUI />} />
        <Route path='/ReportUI' element={<ReportUI/>}/>
        
        {/* Add more routes for additional pages */}
      </Routes>
    </Router>
  );
};

export default App;
//