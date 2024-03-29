import React from 'react';
import Testlist from '../Components/Testlist';
import Patienthead from '../Components/Patienthead'; // Importing header component
import Footer from '../Components/Footer'; // Importing footer component
import { Grid } from '@mui/material';
import backgroundImage from '../images/2.png';

function ViewTest() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' ,backgroundImage: `url(${backgroundImage})`}}>
      <Patienthead />
      <Grid sx={{flex: 1, paddingTop:'10%', paddingBottom:'3%'}}>
        
        <Testlist/>
       
      </Grid>
      <Footer />
    </div>
  );
}

export default ViewTest;
