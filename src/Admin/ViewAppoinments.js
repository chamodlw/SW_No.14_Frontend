import React from 'react';
import Appoinmentlist from './Admin_Component/Appoinmentlist';
import Patienthead from '../Components/Patienthead'; 
import Footer from '../Components/Footer'; 
import { Grid } from '@mui/material';
import '../maincss/Class.css';

function ViewTest() {
  return (
    <div className = "Class" sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Patienthead />
      <Grid sx={{flex: 1, paddingTop:'12%', paddingBottom:'3%'}}>
        
        <Appoinmentlist/>
       
      </Grid>
      <Footer />
    </div>
  );
}

export default ViewTest;
