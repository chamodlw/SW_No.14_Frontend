import React, { useEffect } from 'react';
import Patienthead from '../Components/Patienthead';
import Footer from '../Components/Footer';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';
import axios from 'axios';
import '../maincss/AdminInterface.css';

function AdminInterface() {
  const handleNavigate = useNavigate(); //Making an instance of useNavigate
axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get('http://localhost:3100/api/AdminInterface')
      .then(res => {
        if (res.data === "success") {
          console.log("Successed"); // Or any other function or state update
        } else {
          handleNavigate('/');
        }
      })
      .catch(err => console.log(err));
  }, [handleNavigate]);



  return (
    <div className="AdminInterface">
      <Patienthead /><br /><br /><br /><br /><br />
      <Grid
        sx={{
          display: 'flex',
          justifyContent: 'center', // Center horizontally
          alignItems: 'center', // Center vertically
          gap: '5%',
          width: '100%', // Added to align buttons to the middle of the page
          height: '70vh', // Added to align buttons to the middle of the page
        }}
      >
        <button
          className="AdminButton1"
          onClick={() => handleNavigate('../AddTest')}
        >
          Add New Test
        </button>
        <button
          className="AdminButton2"
          onClick={() => handleNavigate('../ViewTests')}
        >
          View Test List
        </button>
      </Grid>
      <Footer />
    </div>
  );
}

export default AdminInterface;
