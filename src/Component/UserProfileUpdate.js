import React, { useState, useEffect } from 'react';
import { Container, Grid, Avatar, Typography, TextField, Button, Paper } from '@mui/material';
import { styled } from '@mui/system';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

// Styled components for consistent styling
const Root = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
}));

const AvatarWrapper = styled('div')({
  position: 'relative',
  cursor: 'pointer',
  width: '120px',
  height: '120px',
  display: 'inline-block',
  '&:hover .label': {
    display: 'flex',
  },
});

const AvatarImage = styled(Avatar)(({ theme }) => ({
  width: '100%',
  height: '100%',
}));

const Label = styled('div')({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  zIndex: 10000,
  color: '#ffffff',
  transition: 'background-color 0.2s ease-in-out',
  borderRadius: '50%',
  padding: '8px',
  display: 'none',
  alignItems: 'center',
  justifyContent: 'center',
});

const CameraIcon = styled(CameraAltIcon)({
  marginRight: '4px',
});

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
    id: '',
    firstname: '',
    lastname: '',
    email: '',
    address: '',
    phonenumber: '',
    nationalID: '',
    username: '',
    profilePic: null, // Adding a profilePic field to hold the uploaded image
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

  // Handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setUser({
      ...user,
      profilePic: file,
    });
    console.log('Selected profile picture:', file);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting user data:', user);
    try {
      const formData = new FormData();
      formData.append('profilePic', user.profilePic); // Append the profile picture file to FormData

      // Append other user data to FormData
      Object.keys(user).forEach((key) => {
        if (key !== 'profilePic') {
          formData.append(key, user[key]);
        }
      });

      const response = await fetch('http://localhost:3100/api/router_login/updateuser', {
        method: 'POST', //POST request to the Backend endpoint with the updated details
        // headers: {
        //   'Content-Type': 'application/json',
        // },
        // body: JSON.stringify(user),  // Send user data including id
        body: formData, // Send FormData instead of JSON. Cuz JSON does not support file inputs.
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

  const handleAvatarClick = () => {
    // Open the file dialog when clicking on the avatar
    document.getElementById('avatarInput').click();
  };

  return (
    <Container component={Root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} md={3} style={{ textAlign: 'center' }}>
          <AvatarWrapper onClick={handleAvatarClick}>
            <AvatarImage src={userData.profilePic} alt="User Profile" />
            <Label className="label">
              <CameraIcon />
              Change Image
            </Label>
          </AvatarWrapper>
          <input id="avatarInput" type="file" accept="image/*" onChange={handleFileChange} style={{ display: 'none' }} />
          <Typography variant="h6">{user.username}</Typography>
        </Grid>
        <Grid item xs={12} sm={8}>
          <form onSubmit={handleSubmit}>
            {/* File input for profile picture */}
            <input id="avatarInput" type="file" accept="image/*" onChange={handleFileChange} style={{ display: 'none' }} />
            <TextFieldStyled fullWidth label="First Name" name="firstname" variant="outlined" value={user.firstname} onChange={handleChange} />
            <TextFieldStyled fullWidth label="Last Name" name="lastname" variant="outlined" value={user.lastname} onChange={handleChange} />
            <TextFieldStyled fullWidth label="Email" name="email" variant="outlined" value={user.email} onChange={handleChange} />
            <TextFieldStyled fullWidth label="Address" name="address" variant="outlined" value={user.address} onChange={handleChange} />
            <TextFieldStyled fullWidth label="National ID" name="nationalID" variant="outlined" value={user.nationalID} onChange={handleChange} />
            <TextFieldStyled fullWidth label="Phone Number" name="phonenumber" variant="outlined" value={user.phonenumber} onChange={handleChange} />
            <TextFieldStyled fullWidth label="User Name" name="username" variant="outlined" value={user.username} onChange={handleChange} />
            <ButtonStyled type="submit" variant="contained">
              Save Changes
            </ButtonStyled>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserProfileUpdate;
