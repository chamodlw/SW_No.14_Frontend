import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography, Avatar, Grid, Paper } from '@mui/material';

const Profile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await fetch('http://localhost:3100/api/router_login/users');
      console.log('Response:', response);

      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('User data received:', data);
      setUserData(data.response); // Accessing the response key to get the actual user dat
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  return (
    <Paper style={{ padding: '20px 40px', backgroundColor: '#D3E9FE', borderRadius: '15px', boxShadow: '1px 5px 3px -3px rgba(0,0,0,0.44)', width: '65%', margin: 'auto', marginTop: '40px' }}>
      {userData ? (
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} style={{ textAlign: 'center' }}>
            <Avatar src={userData.profilePic} alt="User Profile" style={{ width: '120px', height: '120px', marginBottom: '20px' }} />
            <Typography variant="h6">{userData.username}</Typography>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Typography variant="h4" gutterBottom style={{ marginBottom: '20px', fontSize: '30px', color: '#0085FF', fontWeight: 'bold' }}>User Profile</Typography>
            <Typography variant="subtitle1" style={{ marginBottom: '10px' }}>First Name: {userData.firstname}</Typography>
            <Typography variant="subtitle1" style={{ marginBottom: '10px' }}>Last Name: {userData.lastname}</Typography>
            <Typography variant="subtitle1" style={{ marginBottom: '10px' }}>Email: {userData.email}</Typography>
            <Typography variant="subtitle1" style={{ marginBottom: '10px' }}>Address: {userData.address}</Typography>
            <Typography variant="subtitle1" style={{ marginBottom: '10px' }}>National ID: {userData.nationalID}</Typography>
            <Typography variant="subtitle1" style={{ marginBottom: '10px' }}>Phone Number: {userData.phonenumber}</Typography>
          </Grid>
          <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
            <Button component={Link} to={`/UserProfileUpdate/${userData.id}`} variant="contained" style={{ background: '#101754', color: '#FFFFFF', width: '24%' }}>Edit Profile</Button>
            <Button component={Link} to="/change-password" variant="contained" style={{ background: '#101754', color: '#FFFFFF', width: '24%' }}>Change Password</Button>
          </Grid>
        </Grid>
      ) : (
        <Typography>Loading...</Typography>
      )}
    </Paper>
  );
};

export default Profile;
