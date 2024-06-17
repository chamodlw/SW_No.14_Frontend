
import { Table } from '@mui/material';
import { Box } from '@mui/system';
// import './App.css';
import Cover from '../Component/Cover';
import Footer from '../Component/Footer';
import Head from '../Component/Head';
import Report from '../Component/table';

function Reportview() {
  return (
    <div className="App">
  <Box>
    <Head/>
    <Cover/>
    <Report/>
    <Footer/>
    

  </Box>
    </div>
  );
}

export default Reportview;
