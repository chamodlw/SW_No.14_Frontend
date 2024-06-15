import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Head from './Components/Head';
import HomePage from './Components/HomePage';
import Signin from "./Components/Signin";
import Login from "./Components/Login";
import Selecttest from './Selecttest';
import AddTest from './Admin/AddTest';
// import ViewTest from './Admin/ViewTest';
// import ViewPatient from './Admin/ViewPatients';
// import ViewAppointment from './Admin/ViewAppoinments';
import AdminInterface from './Admin/AdminInterface';
import Admin from "./Admin/Admin";
import UserProfileUpdate from "./Components/UserProfileUpdate";
import Patient  from "./pages/Patient";
import Doctor from "./pages/Doctor";
import LabAssistant from "./pages/LabAssistant";
import LabOperator from "./pages/LabOperator";
import UserProfile from "./Components/UserProfile";
import ProtectedRoute from './Admin/Admin_Component/ProtectedRoute';
import { UserProvider } from './Admin/Admin_Component/UserContext';


function App() {
  return (
  <UserProvider>
    {/* <Signin></Signin> */}
  <BrowserRouter>
    <Routes>

      <Route element={<ProtectedRoute allowedRoles={['ADMIN']} />}>
      {/* Wrap My Admin Routes with ProtectedRoute */}
      <Route path='/AdminInterface/:id' element={<AdminInterface/>}/> 
      {/* path is the URL we should access while element is the component/page as it is mentioned in the import section on top of this code.*/}
      <Route path='/Admin/:id' element={<Admin/>}/>
      <Route path='/AddTest/:id' element={<AddTest/>}/>
      </Route>
      <Route path='/Selecttest' element={<Selecttest/>}/>
      <Route path='/Head' element={<Head/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Signin' element={<Signin/>}/>
      <Route path='/HomePage/*' element={<HomePage/>}/>
      <Route path='/Patient/:id' element={<Patient/>}/> 
      {/* Dynamic routing - '/Patient/:id'*/}
      <Route path='/Doctor/:id' element={<Doctor/>}/>
      <Route path='/LabOperator/:id' element={<LabOperator/>}/>
      <Route path='/LabAssistant/:id' element={<LabAssistant/>}/>
      <Route path='/UserProfile/:id' element={<UserProfile/>}/>
      <Route path='/UserProfileUpdate/:id' element={<UserProfileUpdate/>}/>
      {/* <Route path='/' element={<HomePage />} />  */}
      {/* default loading path - Homepage*/}
      <Route path='*' element={<HomePage />} /> 
      {/* Redirect to HomePage for any unknown routes */}
    </Routes>
  </BrowserRouter>
  </UserProvider>
    );

}

export default App;