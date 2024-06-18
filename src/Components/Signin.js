import React, { useState } from "react";
import { Grid, Typography, TextField, Button, Select, FormControl, InputLabel, MenuItem } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import photo from '../images/HealthLabLogo.jpg';

const Signin = () => {
  const [data, setData] = useState({
    firstname:'',
    lastname:'',
    email:'',
    address:'',
    nationalID:'',
    phonenumber:'',
    role:'',
    username:'',
    password:''
  });  

  const [confirmPassword, setConfirmPassword] = useState(''); // State variable for confirm password
  const [error, setError] = useState({ field: '', message: '' }); // Initialize error as an object //state variable

  const navigate = useNavigate(); //To navigate after Signin

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

        // Password confirmation check
        if (data.password !== confirmPassword) {
          setError({ field: 'confirmPassword', message: 'Confirm Password does not match' });
          return;
        }

    try {
      const response = await axios.post('http://localhost:3100/api/router_login/createuser', data);
      console.log('Server response:', response);

      if(response.data.error === false){
        //console.log('Setting error:', `User with this ${response.data.message} already exists.`);
        //setError(`User with this ${response.data.message} already exists.`);
        console.log('Error field:', response.data.field);
        console.log('Error message:', response.data.message);
        setError({ field: response.data.field, message: response.data.message });
      } else {
        // Reset the error state if no error
          setError({ field: '', message: '' });
          setData({
            firstname:'',
            lastname:'',
            email:'',
            address:'',
            nationalID:'',
            phonenumber:'',
            role:'',
            username:'',
            password:''
          });
          setConfirmPassword(''); // Reset confirm password
          navigate('/HomePage');
      }
    } catch (error) {
      console.error('Error registering user:', error);
      if (error.response && error.response.status === 409) {
        console.log('Error field:', error.response.data.field);
        console.log('Error message:', error.response.data.message);
        setError({ field: error.response.data.field, message: error.response.data.message });
      } else {
        setError({ field: '', message: 'Error registering user: ' + error.message });
      }
    }
  };
  console.log('Error state:', error);
  return (
    <Grid container justifyContent="center">
      <form
        onSubmit={handleSubmit}
        style={{
          borderRadius: "15px",
          padding: "20px 40px",
          backgroundColor: "#D3E9FE",
          width: "65%",
          boxShadow: "1px 5px 3px -3px rgba(0,0,0,0.44)"
        }}
      >
        <Grid container justifyContent="center">
          <img
            src={photo}
            style={{ width: "100%", maxWidth: "300px", marginTop: "15px", marginBottom: "25px" }}
            alt="HealthLab Logo"
          />
        </Grid>
        <Typography variant="h5" align="center" style={{ marginBottom: "5%", fontSize: "30px", color: "#0085FF", fontWeight: "bold" }}>
          Sign In
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="First Name"
              variant="outlined"
              name="firstname"
              value={data.firstname}
              onChange={handleChange}
              style={{ marginBottom: "20px" }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Last Name"
              variant="outlined"
              name="lastname"
              value={data.lastname}
              onChange={handleChange}
              style={{ marginBottom: "20px" }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              name="email"
              value={data.email}
              onChange={handleChange}
              style={{ marginBottom: "20px" }}
            />

          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Address"
              variant="outlined"
              name="address"
              value={data.address}
              onChange={handleChange}
              style={{ marginBottom: "20px" }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="National ID number"
              variant="outlined"
              name="nationalID"
              value={data.nationalID}
              onChange={handleChange}
              style={{ marginBottom: "20px" }}
            />
            </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Phone Number"
              variant="outlined"
              name="phonenumber"
              value={data.phonenumber}
              onChange={handleChange}
              style={{ marginBottom: "20px" }}
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel id="role-select-label">Role</InputLabel>
              <Select
                labelId="role-select-label"
                id="role-select"
                name="role"
                value={data.role}
                onChange={handleChange}
                label="Role"
              >
                <MenuItem value="PATIENT">Patient</MenuItem>
                <MenuItem value="DOCTOR">Doctor</MenuItem>
                <MenuItem value="ADMIN">Admin</MenuItem>
                <MenuItem value="LABOPERATOR">LabOperator</MenuItem>
                <MenuItem value="LABASSISTANT">LabAssistant</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Username"
              variant="outlined"
              name="username"
              value={data.username}
              onChange={handleChange}
              style={{ marginBottom: "20px" }}
            />
            </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Password"
              variant="outlined"
              type="password"
              name="password"
              value={data.password}
              onChange={handleChange}
              style={{ marginBottom: "20px" }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Confirm Password"
              variant="outlined"
              type="password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange} //Added value and onChange props for the "Confirm Password" field:
              style={{ marginBottom: "20px" }}
            />
          </Grid>

          {error.message && (
            <Grid item xs={12}>
              <Typography variant="body2" color="error">{error.message}</Typography>
            </Grid>
          )}

        </Grid>

        <Typography variant="body1" style={{ marginBottom: "20px", color: "#9C1C1C" }}>
          Already have an account? <Link to="/Login">Login</Link>
        </Typography>

        <Button 
          type='submit'
          sx={{ variant: 'contained', color: '#FFFFFF', background: '#101754', width: '100%', height: '50px' }}
        >
          Sign In
        </Button>
      </form>
    </Grid>
  );
};

export default Signin;

// 2307261097