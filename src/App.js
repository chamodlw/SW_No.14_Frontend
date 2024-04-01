import './App.css';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import Head from './Components/Head';
import HomePage from './Components/HomePage';

import Signin from "./Components/Signin"
import Login from "./Components/Login"
import Selecttest from './Selecttest';
import AddTest from './Admin/AddTest';
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
      <Route path='AdminInterface' element={<AdminInterface/>}/>
      <Route path='Selecttest' element={<Selecttest/>}/>
      <Route path='AddTest' element={<AddTest/>}/>
      <Route path='Dhome' element={<Dhome/>}/>
      <Route path='Dapproval' element={<Dapproval/>}/>
      <Route path='Contact' element={<Contact/>}/>
    
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