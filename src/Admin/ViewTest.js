import React from 'react';
import Testlist from './Admin_Component/Testlist';
import Patienthead from '../Components/Patienthead'; // Importing header component
import Footer from '../Components/Footer'; // Importing footer component
import { Grid } from '@mui/material';
import '../maincss/Class.css';

function ViewTest() {
  return (
    <div className = "Class" sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Patienthead />
      <Grid sx={{flex: 1, paddingTop:'12%', paddingBottom:'3%'}}>
        
        <Testlist/>
       
      </Grid>
      <Footer />
    </div>
  );
}

export default ViewTest;
