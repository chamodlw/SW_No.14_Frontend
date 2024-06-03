import React, { useState } from 'react';
import { Container, Grid, Avatar, Typography, TextField, Button, Paper } from '@mui/material';
import { styled } from '@mui/system';
import avatarPlaceholder from '../images/avatarPlaceholder.webp'; // Placeholder image URL

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
  backgroundColor: '#101754', // Original button color
  color: '#fff',
  '&:hover': {
    backgroundColor: '#1e88e5', // Hover color
  },
}));

const UserProfileUpdate = () => {
  const [user, setUser] = useState({
    firstname: '',
    lastname: '',
    email: '',
    address: '',
    phonenumber: '',
    nationalID: '',
    username: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User Profile Updated:', user);
    // Add logic to handle profile update (e.g., API call)
  };

  return (
    <Container component={Root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} style={{ textAlign: 'center' }}>
          <AvatarStyled src={avatarPlaceholder} />
          <Typography variant="h6">User Name</Typography>
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
