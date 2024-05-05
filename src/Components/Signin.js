import React from "react";
import Button from '@mui/material/Button';
import photo from '../images/HealthLabLogo.jpg';
import { Link } from 'react-router-dom';
import { Grid, Typography, TextField} from '@mui/material';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

export default function Signin(){
const [role, setRole] = React.useState(''); // useState hook is used to create a state variable 'role' and a function 'setRole' to update its value. The initial state of age is an empty string ('').

const handleChange = (event) => { // //This function is called whenever the value of the select input changes. It updates the 'role' state variable with the new selected value.
  setRole(event.target.value);
};

  return (
    <Grid container justifyContent="center">
      <form
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
              label="Full Name"
              variant="outlined"
              style={{ marginBottom: "20px" }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              style={{ marginBottom: "20px" }}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Address"
              variant="outlined"
              style={{ marginBottom: "20px" }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="National ID number"
              variant="outlined"
              style={{ marginBottom: "20px" }}
            />
          </Grid>
          <Grid item xs={6}>
          <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Role</InputLabel>
          <Select
          labelId="role-select-label"
          id="role-select"
          value={role}
          label="Role"
          onChange={handleChange}
          >
          <MenuItem value="Patient">Patient</MenuItem>
          <MenuItem value="Doctor">Doctor</MenuItem>
          <MenuItem value="Admin">Admin</MenuItem>
          </Select>
          </FormControl>
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Username"
              variant="outlined"
              style={{ marginBottom: "20px" }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Password"
              variant="outlined"
              style={{ marginBottom: "20px" }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Confirm Password"
              variant="outlined"
              style={{ marginBottom: "20px" }}
            />
          </Grid>
        </Grid>

        <Typography variant="body1" style={{ marginBottom: "20px", color: "#9C1C1C" }}>
          Already have an account? <Link to="/login">Login</Link>
        </Typography>

        <Button type="submit"sx={{variant:'contained' ,color:'#FFFFFF', background:'#101754',width:'100%',height:'50px'}}>
          Sign In
        </Button>
      </form>
    </Grid>
  );
}