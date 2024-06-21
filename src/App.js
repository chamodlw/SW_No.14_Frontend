import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Head from './Components/Head';
import Selecttest from './Selecttest';
import UserForm from './Lab_operator/UserForm'; // Ensure this path is correct
import BarcodeScanner from './Lab_operator/BarcodeScanner'; // Ensure this path is correct

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Head' element={<Head />} />
        <Route path='/Selecttest' element={<Selecttest />} />
        <Route path='/UserForm' element={<UserForm />} />
        <Route path='/scan' element={<BarcodeScanner />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
