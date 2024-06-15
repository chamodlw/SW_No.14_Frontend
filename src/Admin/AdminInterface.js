//AdminInterface.js
import React, { useEffect } from 'react';
import Patienthead from '../Components/Patienthead';
import Footer from '../Components/Footer';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';
import axios from 'axios';
import '../maincss/AdminInterface.css';
import { useParams } from 'react-router-dom';
import AdminCards from './Admin_Component/Admin_cards'

function AdminInterface() {
  let { id } = useParams();

  // Now 'id' contains the userId passed in the URL
  // Use 'id' to fetch data or perform operations specific to the user

  const handleNavigate = useNavigate(); //Making an instance of useNavigate
//axios.defaults.withCredentials = true; //This ensures that cookies are sent with cross-origin requests. This is crucial if your backend API requires authentication cookies to be sent along with requests for session management.
  useEffect(() => {
    console.log('AdminInterface - Fetching admin authentication status...');
    //API request
    axios.get('http://localhost:3100/api/router_login/checkAdminAuth')
      .then(res => {
        console.log('AdminInterface - Response:', res.data);
        if (res.data.status === "success") {
          console.log("User authenticated as admin"); // Or any other function or state update
        } else {
          console.log("User not authenticated as admin");
          handleNavigate('/');
        }
      })
      //Error handling - If there is an error during the API call, it logs the error (err) and navigates the user back to the homepage.
      .catch(err => {
        console.error("Error checking admin authentication:", err);
        handleNavigate('/');
    });
  }, [handleNavigate]); // Ensure handleNavigate is stable unless intentional changes are made



  return (
    <div className="AdminInterface">
      <Patienthead />
      <Grid sx={{paddingTop:'13%', paddingBottom:'10%', alignitems:'center'}}>
        <AdminCards sx ={{ alignitems:'center'}}/>
      </Grid>      
      <Footer />
    </div>
  );
}

export default AdminInterface;
