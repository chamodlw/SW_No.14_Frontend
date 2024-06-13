import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography, Avatar, Grid, Paper, Dialog, DialogTitle, DialogContent, Divider } from '@mui/material';
import UserProfileUpdate from './UserProfileUpdate';

const Profile = () => {
  const [userData, setUserData] = useState(null); // userData: State variable to hold user data fetched from the backend.
  const [open, setOpen] = useState(false); // open: State variable to manage the open/close state of the dialog for updating user profile.

  useEffect(() => { // useEffect hook runs once when the component mounts.
    fetchUserData(); // Hook calls the fetchUserData function to fetch user data from the backend.
  }, []);

  const fetchUserData = async () => { // Fetch User Data Function: This function sends a GET request to the backend API endpoint to fetch user data.
    try {
      const response = await fetch('http://localhost:3100/api/router_login/getCurrentUser', {
        credentials: 'include', // Ensure cookies are sent with the request
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setUserData(data); // Assuming `data` is the user object itself
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  // Dialog Open/Close Handlers: These functions manage the open and close state of the dialog for updating user profile
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Paper style={{ padding: '20px 40px', backgroundColor: '#D3E9FE', borderRadius: '15px', boxShadow: '1px 5px 3px -3px rgba(0,0,0,0.44)', width: '80%', margin: 'auto', marginTop: '40px' }}>
      {/* Material-UI Paper component used to create a styled container for the user profile display. */}
      {userData ? (
        <Grid container spacing={2} alignItems="stretch">
          {/* Grid Component: arrange the profile details in a grid layout. */}
          <Grid item xs={12} md={4} style={{ display: 'flex' }}>
            {/* First Box */}
            <Paper style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '1px 3px 3px -3px rgba(0,0,0,0.2)', flex: 1 }}>
              <Grid container spacing={2} direction="column" alignItems="center">
                <Grid item>
                  <Avatar src={userData.profilePic} alt="User Profile" style={{ width: '120px', height: '120px', marginBottom: '10px' }} />
                </Grid>
                <Grid item>
                  <Typography variant="h6" style={{ marginBottom: '10px' }}>{userData.username}</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1" style={{ marginBottom: '10px' }}>{userData.role}</Typography>
                </Grid>
                <Grid item container spacing={2} justifyContent="center">
                  <Grid item>
                    <Button onClick={handleOpen} variant="contained" style={{ backgroundColor: '#101754', color: '#fff', '&:hover': { backgroundColor: '#1e88e5' } }}>Edit Profile</Button>
                  </Grid>
                  <Grid item>
                    <Button component={Link} to="/change-password" variant="contained" 
                    style={{ 
                      color: '#0085FF', 
                      //  blue text color
                      backgroundColor: '#fff',
                      // white background color
                      border: '1px solid #0085FF', 
                      // blue border
                      }}>Change Password</Button>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          <Grid item xs={12} md={8} style={{ display: 'flex' }}>
            {/* Second Box */}
            <Paper style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '1px 3px 3px -3px rgba(0,0,0,0.2)', flex: 1 }}>
              <Typography variant="h4" gutterBottom style={{ marginBottom: '20px', fontSize: '30px', color: '#0085FF', fontWeight: 'bold' }}>User Profile</Typography>
              
              <Grid container alignItems="center" style={{ marginBottom: '20px', paddingTop: '10px' }}>
                <Grid item xs={4}>
                  <Typography variant="subtitle1">First Name:</Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography variant="subtitle1" style={{ textAlign: 'left', paddingLeft: '70px' }}>{userData.firstname}</Typography>
                </Grid>
              </Grid>
              <Divider style={{ marginBottom: '10px' }} />
              
              <Grid container alignItems="center" style={{ marginBottom: '20px', paddingTop: '10px' }}>
                <Grid item xs={4}>
                  <Typography variant="subtitle1">Last Name:</Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography variant="subtitle1" style={{ textAlign: 'left', paddingLeft: '70px' }}>{userData.lastname}</Typography>
                </Grid>
              </Grid>
              <Divider style={{ marginBottom: '10px' }} />
              
              <Grid container alignItems="center" style={{ marginBottom: '20px', paddingTop: '10px' }}>
                <Grid item xs={4}>
                  <Typography variant="subtitle1">Email:</Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography variant="subtitle1" style={{ textAlign: 'left', paddingLeft: '70px' }}>{userData.email}</Typography>
                </Grid>
              </Grid>
              <Divider style={{ marginBottom: '10px' }} />
              
              <Grid container alignItems="center" style={{ marginBottom: '20px', paddingTop: '10px' }}>
                <Grid item xs={4}>
                  <Typography variant="subtitle1">Address:</Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography variant="subtitle1" style={{ textAlign: 'left', paddingLeft: '70px' }}>{userData.address}</Typography>
                </Grid>
              </Grid>
              <Divider style={{ marginBottom: '10px' }} />
              
              <Grid container alignItems="center" style={{ marginBottom: '20px', paddingTop: '10px' }}>
                <Grid item xs={4}>
                  <Typography variant="subtitle1">National ID:</Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography variant="subtitle1" style={{ textAlign: 'left', paddingLeft: '70px' }}>{userData.nationalID}</Typography>
                </Grid>
              </Grid>
              <Divider style={{ marginBottom: '10px' }} />
              
              <Grid container alignItems="center" style={{ marginBottom: '20px', paddingTop: '10px' }}>
                <Grid item xs={4}>
                  <Typography variant="subtitle1">Phone Number:</Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography variant="subtitle1" style={{ textAlign: 'left', paddingLeft: '70px' }}>{userData.phonenumber}</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      ) : (
        <Typography>Loading...</Typography>
      )}

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        {/* Dialog Component: This is a Material-UI Dialog component used to display the form for updating user profile.
    It passes userData and onClose function as props to the UserProfileUpdate component. */}
        <DialogTitle>Edit Profile</DialogTitle>
        <DialogContent>
          <UserProfileUpdate userData={userData} onClose={handleClose} />
        </DialogContent>
      </Dialog>
    </Paper>
  );
};

export default Profile;
