import React, { useState } from 'react';
import { Grid, Typography, TextField, Button } from "@mui/material";
import axios from 'axios';
import { toast } from 'react-hot-toast';
import forgotPasswordImage from '../images/forgotpassword.png'; // Adjust path as per your project structure

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [step, setStep] = useState(1);

  const handleSendCode = async () => {
    try {
      const response = await axios.post('http://localhost:3100/api/router_login/send-verification-code', { email });
      toast.success(response.data.message);
      setStep(2);
    } catch (error) {
      console.error('Error sending verification code:', error);
      toast.error('Failed to send verification code');
    }
  };

  const handleResetPassword = async () => {
    try {
      const response = await axios.post('http://localhost:3100/api/router_login/verify-code-and-reset-password', { email, code, newPassword });
      toast.success(response.data.message);
      setStep(1);
      setEmail('');
      setCode('');
      setNewPassword('');
    } catch (error) {
      console.error('Error resetting password:', error);
      toast.error('Failed to reset password');
    }
  };

  return (
    <Grid container justifyContent="center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          step === 1 ? handleSendCode() : handleResetPassword();
        }}
        style={{
          borderRadius: "15px",
          padding: "20px",
          backgroundColor: "#D3E9FE",
          width: "90%",
          maxWidth: "800px",
          marginTop: "10%",
          boxShadow: "1px 5px 3px -3px rgba(0,0,0,0.44)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {step === 1 ? (
          <>
            <div style={{ marginBottom: "20px" }}>
              <img src={forgotPasswordImage} alt="Forgot Password" style={{ width: "200px", marginBottom: "10px" }} />
              <Typography
                variant="h5"
                style={{
                  color: "#0085FF",
                  fontWeight: "bold",
                  marginBottom: "10px",
                }}
              >
                Enter your email address to reset your password
              </Typography>
            </div>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ marginBottom: "25px" }}
            />
            <Button type="submit" variant="contained" color="primary" style={{ borderRadius: "20px" }}>
              Send Verification Code
            </Button>
          </>
        ) : (
          <>
            <Typography
              variant="h5"
              style={{
                marginBottom: "7%",
                marginTop: "3%",
                color: "#0085FF",
                fontWeight: "bold",
              }}
            >
              Reset Password
            </Typography>
            <TextField
              fullWidth
              label="Verification Code"
              variant="outlined"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              style={{ marginBottom: "25px" }}
            />
            <TextField
              fullWidth
              label="New Password"
              variant="outlined"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              style={{ marginBottom: "25px" }}
            />
            <Button type="submit" variant="contained" color="primary" style={{ borderRadius: "20px" }}>
              Reset Password
            </Button>
          </>
        )}
      </form>
    </Grid>
  );
};

export default ForgotPassword;
