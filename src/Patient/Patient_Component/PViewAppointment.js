import React from 'react';
import Patienthead from '../../Components/Patienthead'; 
import Footer from '../../Components/Footer'; 
import { Grid } from '@mui/material';
import '../../maincss/Class.css';
import PAppointmentlist from '../Patient_Component/PAppointmentlist';

function ViewTest() {
  return (
    <div className = "Class" sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Patienthead />
      <Grid sx={{flex: 1, paddingTop:'12%', paddingBottom:'3%'}}>
        
        <PAppointmentlist/>
       
      </Grid>
      <Footer />
    </div>
  );
}

export default ViewTest;
