import React from "react";
import Button from "@mui/material/Button";
import { Grid, Typography, TextField } from "@mui/material";
import photo1 from "../images/HealthLabLogo.jpg";
import photo2 from "../images/BloodDraw.webp";

function Login() {
  return (
    <Grid container justifyContent="center">
      <form
        style={{
          borderRadius: "15px",
          padding: "20px 40px",
          backgroundColor: "#D3E9FE",
          width: "65%",
          marginTop: "10%",
          boxShadow: "1px 5px 3px -3px rgba(0,0,0,0.44)",
          display: "flex",
        }}
      >
        {/* Left Column with Photo2 */}
        <Grid item xs={6}>
          <img
            src={photo2}
            style={{ width: "100%", maxWidth: "450px", marginTop: "15px" }}
            alt="Blood Draw"
          />
        </Grid>

        {/* Right Column with Form Content */}
        <Grid item xs={6} style={{ paddingLeft: "50px" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img
              src={photo1}
              style={{ width: "100%", maxWidth: "300px", marginTop: "10px", marginLeft: "100px" }}
              alt="HealthLab Logo"
            />
            <Typography
              variant="h5"
              style={{
                marginBottom: "7%",
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
              style={{ marginBottom: "25px" }}
            />

            <TextField
              fullWidth
              label="Password"
              variant="outlined"
              style={{ marginBottom: "25px" }}
            />

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
              Forgot Password?
            </Typography>

            <Button type="submit"sx={{variant:'contained' ,color:'#FFFFFF', background:'#101754',width:'100%',height:'50px'}}>
              Login
            </Button>
          </div>
        </Grid>
      </form>
    </Grid>
  );
}

export default Login;
