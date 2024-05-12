
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

const App = () => {
  
    const [currentPage, setCurrentPage] = useState('page1');
  
 


  return (
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
