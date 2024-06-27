import React, { useState } from 'react';
import Patienthead from '../Components/Patienthead';
import Footer from '../Components/Footer';
import { Grid } from '@mui/material';
import '../maincss/Class.css';
import PatientSearch from './Admin_Component/PatientSearch';
import Patientlist from './Admin_Component/Patientlist';

function ViewTest() {
  const [rows, setRows] = useState([]);

  const [selectedRole, setSelectedRole] = useState('PATIENT');

  const handleChange = (event, newValue) => {
    setSelectedRole(newValue);
  };

  return (
    <div className="Class" sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Patienthead />
      <Grid sx={{ flex: 1, paddingTop: '12%', paddingBottom: '3%' }}>
        <Grid sx={{ paddingTop: '2%', paddingBottom: '3%' }}>
          <PatientSearch rows={rows} selectedRole ={selectedRole} handleChange={handleChange}/>
        </Grid>
        <Patientlist setRows={setRows} selectedRole={selectedRole} handleChange={handleChange}/>
      </Grid>
      <Footer />
    </div>
  );
}

export default ViewTest;
