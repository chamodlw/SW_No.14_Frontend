//UserProfile.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography, Avatar, Grid, Paper, Dialog, DialogTitle, DialogContent } from '@mui/material';
import UserProfileUpdate from './UserProfileUpdate';

const Profile = () => {
  const [userData, setUserData] = useState(null); //userData: State variable to hold user data fetched from the backend.
  const [open, setOpen] = useState(false); //open: State variable to manage the open/close state of the dialog for updating user profile.

  useEffect(() => { //useEffect hook runs once when the component mounts.
    fetchUserData(); //Hook calls the fetchUserData function to fetch user data from the backend.
  }, []);

  const fetchUserData = async () => { //Fetch User Data Function: This function sends a GET request to the backend API endpoint to fetch user data.
    try {
      const response = await fetch('http://localhost:3100/api/router_login/getCurrentUser', {
        credentials: 'include', // Ensure cookies are sent with the request
      });
      //console.log('fetchUserData - Response:', response);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      //console.log('User data received:', data);
      setUserData(data); // Assuming `data` is the user object itself
      //console.log('Extracted user data:', data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
//Dialog Open/Close Handlers: These functions manage the open and close state of the dialog for updating user profile
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Paper style={{ padding: '20px 40px', backgroundColor: '#D3E9FE', borderRadius: '15px', boxShadow: '1px 5px 3px -3px rgba(0,0,0,0.44)', width: '65%', margin: 'auto', marginTop: '40px' }}> 
    {/* Material-UI Paper component used to create a styled container for the user profile display. */}
      {userData ? ( //If userData is not null, it renders the user profile details.
        <Grid container spacing={2}> 
        {/* Grid Component: arrange the profile details in a grid layout. */}
          <Grid item xs={12} sm={4} md={3} style={{ textAlign: 'center' }}>
            <Avatar src={userData.profilePic} alt="User Profile" style={{ width: '120px', height: '120px', marginBottom: '20px' }} />
            <Typography variant="h6">{userData.username}</Typography>
          </Grid>
          <Grid item xs={12} sm={8} md={9} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <Typography variant="h4" gutterBottom style={{ marginBottom: '20px', fontSize: '30px', color: '#0085FF', fontWeight: 'bold' }}>User Profile</Typography>
              <Typography variant="subtitle1" style={{ marginBottom: '10px' }}>First Name: {userData.firstname}</Typography>
              <Typography variant="subtitle1" style={{ marginBottom: '10px' }}>Last Name: {userData.lastname}</Typography>
              <Typography variant="subtitle1" style={{ marginBottom: '10px' }}>Email: {userData.email}</Typography>
              <Typography variant="subtitle1" style={{ marginBottom: '10px' }}>Address: {userData.address}</Typography>
              <Typography variant="subtitle1" style={{ marginBottom: '10px' }}>National ID: {userData.nationalID}</Typography>
              <Typography variant="subtitle1" style={{ marginBottom: '10px' }}>Phone Number: {userData.phonenumber}</Typography>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
              <Button onClick={handleOpen} variant="contained" style={{ background: '#101754', color: '#FFFFFF', flex: '1' }}>Edit Profile</Button>
              <Button component={Link} to="/change-password" variant="contained" style={{ background: '#101754', color: '#FFFFFF', flex: '1', marginLeft: '10px' }}>Change Password</Button>
            </div>
          </Grid>
        </Grid>
      ) : (
        <Typography>Loading...</Typography>
      )}

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md"> 
{/*     Dialog Component: This is a Material-UI Dialog component used to display the form for updating user profile.
    It passes userData and onClose function as props to the UserProfileUpdate component.   */}
        <DialogTitle>Edit Profile</DialogTitle>
        <DialogContent>
          <UserProfileUpdate userData={userData} onClose={handleClose} />
        </DialogContent>
      </Dialog>
    </Paper>
  );
};

export default Profile;
