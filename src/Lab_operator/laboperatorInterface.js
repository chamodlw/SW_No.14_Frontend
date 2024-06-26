// src/Lab_operator/laboperatorInterface.js
import React from 'react';
import Patienthead from '../Components/Patienthead';
import Footer from '../Components/Footer';
import { Grid } from '@mui/material';
import '../maincss/Class.css';
import LabOperatorCards from './labOperator_component/labOperator_card';

function LaboperatorInterface() {
  return (
    <div className="Class">
      <Patienthead />
      <Grid sx={{paddingTop:'13%', paddingBottom:'10%', alignitems:'center'}}>
        <LabOperatorCards sx ={{ alignitems:'center'}}/>
      </Grid>    
      <Footer />
    </div>
  );
}

export default LaboperatorInterface;
