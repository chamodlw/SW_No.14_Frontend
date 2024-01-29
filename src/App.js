import './App.css';
import { BrowserRouter, Routes,Route, Switch } from 'react-router-dom';
import Head from './Components/Head';
import Selecttest from './Selecttest';
import Dapproval from './Dapproval';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/Head' element={<Head/>}/>
      <Route path='/Selecttest' element={<Selecttest/>}/>
      <Route path='/Dapproval' element={<Dapproval/>}/>

    </Routes>
  </BrowserRouter>
  );
}

export default App;
