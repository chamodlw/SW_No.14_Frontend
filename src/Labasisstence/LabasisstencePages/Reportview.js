
import { Table } from '@mui/material';
import { Box } from '@mui/system';
// import './App.css';
import Cover from '../LabasisstenceComponent/Cover';
import Footer from '../../Components/Footer';
import Head from '../../Components/Head';
import Report from '../LabasisstenceComponent/table';
import Patienthead from '../../Components/Patienthead';

function Reportview() {
  return (
    <div className="App">
  <Box>
  <Patienthead/>
    {/* <Cover/> */}
    <Report/>
    <Footer/>
    

  </Box>
    </div>
  );
}

export default Reportview;