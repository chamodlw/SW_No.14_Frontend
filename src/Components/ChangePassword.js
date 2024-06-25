// ChangePassword.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Typography, Paper, Snackbar, Grid, CircularProgress } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const ChangePassword = () => {
  const navigate = useNavigate();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const handleChangePassword = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (newPassword !== confirmPassword) {
      setSnackbarMessage('New password and confirm password do not match');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:3100/api/router_login/changePassword', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          currentPassword,
          newPassword,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to change password');
      }

      setSnackbarMessage('Password changed successfully');
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
      navigate('/profile');
    } catch (error) {
      setSnackbarMessage(error.message);
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    } finally {
      setLoading(false);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Paper style={{ padding: '20px', backgroundColor: '#D3E9FE', borderRadius: '15px', width: '50%', margin: 'auto', marginTop: '40px' }}>
      <Typography variant="h4" style={{ marginBottom: '20px', color: '#0085FF', fontWeight: 'bold' }}>Change Password</Typography>
      <form onSubmit={handleChangePassword}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Current Password"
              type="password"
              fullWidth
              required
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="New Password"
              type="password"
              fullWidth
              required
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Confirm New Password"
              type="password"
              fullWidth
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} style={{ textAlign: 'center' }}>
            <Button type="submit" variant="contained" style={{ backgroundColor: '#101754', color: '#fff' }} disabled={loading}>
              {loading ? <CircularProgress size={24} /> : 'Change Password'}
            </Button>
          </Grid>
        </Grid>
      </form>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity={snackbarSeverity}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Paper>
  );
};

export default ChangePassword;
