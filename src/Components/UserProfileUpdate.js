import React, { useState, useEffect } from 'react';
import { Container, Grid, Avatar, Typography, TextField, Button, Paper } from '@mui/material';
import { styled } from '@mui/system';
import avatarPlaceholder from '../images/avatarPlaceholder.webp';

// Styled components for consistent styling
const Root = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
}));

const AvatarStyled = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(15),
  height: theme.spacing(15),
  marginBottom: theme.spacing(2),
}));

const TextFieldStyled = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const ButtonStyled = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  backgroundColor: '#101754',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#1e88e5',
  },
}));

const UserProfileUpdate = ({ userData, onClose }) => {
   // Initialize state with user details
  const [user, setUser] = useState({
    id:'',
    firstname: '',
    lastname: '',
    email: '',
    address: '',
    phonenumber: '',
    nationalID: '',
    username: ''
  });

    // Update state with userData when component mounts or userData changes
  useEffect(() => {
    if (userData) {
      setUser(userData);
      console.log('User data set:', userData);
    }
  }, [userData]);

  
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
    console.log('Updated user data:', { ...user, [name]: value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('User Profile Updated:', user);
  //   onClose(); // Close the dialog after saving changes
  //   // Add logic to handle profile update (e.g., API call)
  // };

  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting user data:', user);
    try {
      const response = await fetch('http://localhost:3100/api/router_login/updateuser', {
        method: 'POST', //POST request to the Backend endpoint with the updated details
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),  // Send user data including id
      });
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Failed to update profile:', errorText);
        throw new Error('Failed to update profile');
      }
      // Handle success
      const responseData = await response.json();
      console.log('Profile updated successfully:', responseData);
      onClose(); // Close the dialog after saving changes
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };
  
  return (
    <Container component={Root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} style={{ textAlign: 'center' }}>
          <AvatarStyled src={avatarPlaceholder} />
          <Typography variant="h6">{user.username}</Typography>
        </Grid>
        <Grid item xs={12} sm={8}>
          <form onSubmit={handleSubmit}>
            <TextFieldStyled
              fullWidth
              label="First Name"
              name="firstname"
              variant="outlined"
              value={user.firstname}
              onChange={handleChange}
            />
            <TextFieldStyled
              fullWidth
              label="Last Name"
              name="lastname"
              variant="outlined"
              value={user.lastname}
              onChange={handleChange}
            />
            <TextFieldStyled
              fullWidth
              label="Email"
              name="email"
              variant="outlined"
              value={user.email}
              onChange={handleChange}
            />
            <TextFieldStyled
              fullWidth
              label="Address"
              name="address"
              variant="outlined"
              value={user.address}
              onChange={handleChange}
            />
            <TextFieldStyled
              fullWidth
              label="National ID"
              name="nationalID"
              variant="outlined"
              value={user.nationalID}
              onChange={handleChange}
            />
            <TextFieldStyled
              fullWidth
              label="Phone Number"
              name="phonenumber"
              variant="outlined"
              value={user.phonenumber}
              onChange={handleChange}
            />
            <TextFieldStyled
              fullWidth
              label="User Name"
              name="username"
              variant="outlined"
              value={user.username}
              onChange={handleChange}
            />
            <ButtonStyled
              type="submit"
              variant="contained"
            >
              Save Changes
            </ButtonStyled>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserProfileUpdate;
