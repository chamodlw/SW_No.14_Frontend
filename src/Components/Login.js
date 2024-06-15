//Login.js
import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { Grid, Typography, TextField, Button } from "@mui/material";
import photo1 from "../images/HealthLabLogo.jpg";
import photo2 from "../images/BloodDraw.webp";
import axios from 'axios';
import { useSetUser } from '../Admin/Admin_Component/UserContext';

function Login() {
  const navigate = useNavigate();
  const setUserContext  = useSetUser(); // Use the setUser function from UserContext. Using the useSetUser hook to obtain the setUser function from your context. This function is responsible for updating the user state in the context.
  const [data, setData] = useState({
    username: '',
    password: ''
  });

  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  axios.defaults.withCredentials = true;

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Login: Form submitted with data:', data);
    setError(''); // Clear error state before making a new request
    const { username, password } = data;

    //Receive the response from the backend
    try {
      const response = await axios.post('http://localhost:3100/api/router_login/login', { username, password });
      console.log('Login response:', response.data);
      const userData = response.data; //making an Object called userData
      console.log('User data:', userData); // After parsing/having response data, adding this console log to check if it is having all information
      // console.log('User data type:', typeof userData); //Checking whether the userData is an object.

      if (userData.error) {
        console.log('Login: Error from backend:', userData.error);
        toast.error(userData.error);
      } else {
        setData({ username: '', password: '' }); // Clear input fields
        const { user } = userData; // destructuring  to extract the user property from the userData object. - userData is an object that contains a user property.
        
        setUser(user); // Set user data in local state. Declared in line 19
        setUserContext(user); // Set user data in context. Declared in line 13
        const role = user.role; // Extract role from response data
        const userId = user.id; // Extract user ID from response data
        console.log('Login: User role:', role);
        //console.log('Navigating to:', `/AdminInterface/${userId}`); // Debug: Log the navigation path

        // Additional logging for debugging
      //console.log('Navigating to:', `/${role}Interface/${userId}`);

        // Redirect based on role
        switch (role) {
          case 'PATIENT':
            //console.log('Redirecting to Patient page');
            navigate(`/Patient/${userId}`);
            console.log('Navigation done');
            break;
          case 'ADMIN':
            console.log('Redirecting to Admin page');
            navigate(`/AdminInterface/${userId}`);
            //console.log('Navigation done');
            break;
          case 'DOCTOR':
            //console.log('Redirecting to Doctor page');
            navigate(`/Doctor/${userId}`);
            break;
          case 'LABASSISTANT':
            //console.log('Redirecting to LabAssistant page');
            navigate(`/LabAssistant/${userId}`);
            break;
          case 'LABOPERATOR':
            //console.log('Redirecting to LabOperator page');
            navigate(`/LabOperator/${userId}`);
            break;
          default:
            // Handle unrecognized roles or default redirection
            console.log('Redirecting to Home page');
            navigate('/HomePage');
        }
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setError('Login failed. Please try again.'); // Set error message if login fails
    }
  };

  return (
    <Grid container justifyContent="center">
      <form
        onSubmit={handleSubmit}
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
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} style={{ textAlign: 'center' }}>
            <img
              src={photo2}
              style={{ width: "100%", maxWidth: "450px", marginTop: "15px" }}
              alt="Blood Draw"
            />
          </Grid>

          <Grid item xs={12} md={6} style={{ paddingLeft: "20px", textAlign: 'center' }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: 'center' }}>
              <img
                src={photo1}
                style={{ width: "100%", maxWidth: "300px", marginTop: "10px" }}
                alt="HealthLab Logo"
              />
              <Typography
                variant="h5"
                style={{
                  marginBottom: "7%",
                  marginTop: "3%",
                  color: "#0085FF",
                  fontWeight: "bold",
                }}
              >
                Login
              </Typography>

              <TextField
                fullWidth
                label="Username"
                variant="outlined"
                name="username"
                value={data.username}
                onChange={(e) => setData({ ...data, username: e.target.value })}
                style={{ marginBottom: "25px" }}
              />

              <TextField
                fullWidth
                label="Password"
                variant="outlined"
                name="password"
                type="password"
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
                style={{ marginBottom: "25px" }}
              />

              {error && (
                <Typography
                  variant="body1"
                  style={{
                    marginBottom: '20px',
                    color: '#9C1C1C',
                  }}
                >
                  {error}
                </Typography>
              )}

              <Typography
                variant="body1"
                style={{
                  marginBottom: "20px",
                  fontFamily: "Inter",
                  fontWeight: "500",
                  fontSize: "12px",
                  lineHeight: "24px",
                  color: "#9C1C1C",
                }}
              >
                <Link to="/forget-password" style={{ color: '#9C1C1C' }}>Forgot Password?</Link>
              </Typography>

              <Button type="submit" sx={{ variant: 'contained', color: '#FFFFFF', background: '#101754', width: '100%', height: '50px'  }}>
                Login
              </Button>

              {user && (
                <Typography
                  variant="body1"
                  style={{
                    marginTop: '20px',
                    color: '#101754',
                  }}
                >
                  Welcome, {user.username}!
                </Typography>
              )}

            </div>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
}

export default Login;
