import React from "react";
import Button from "@mui/material/Button";
import photo1 from '../images/HealthLabLogo.jpg';
import photo2 from "../images/BloodDraw.webp";

function Login() {
  return (
    <div>
      
      <form
        style={{
          display: "flex",
          borderRadius: "15px",
          padding: "20px 40px",
          backgroundColor: "#D3E9FE",
          width: "65%",
          marginLeft: "15%",
          marginTop: "10%",
          boxShadow: "1px 5px 3px -3px rgba(0,0,0,0.44)",
        }}
      >
        
        {/* Photo2 on the left */}
        <div className="form-group">
          <img
            src={photo2}
            style={{ width: "100%", maxWidth: "450px", marginTop: "15px" }}
            alt="My Photo"
          />
        </div>


        {/* Form content on the right */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "50px", 
          }}
        >

          
<img
          src={photo1} // Use the imported image
          // alt="My Photo"
          style={{ width: "100%", maxWidth: "300px", marginTop: "10px", marginLeft: "100px"}}
        />

          <h2
            style={{
              marginBottom: "7%",
              color: "#0085FF",
              fontWeight: "bold",
              
            }}
          >

            Login
          </h2>

          <div className="form-group"  style={{ marginBottom: "25px" }}>
            <label className="labels" htmlFor="username">
              Username
            </label>
            <div className="custom_input">
              <input
                style={{
                  width: "350px",
                  height: "25px",
                  borderRadius: "5px",
                  background: "rgba(0, 0, 0, 0.04)",
                }}
                className="details-input form-control"
                type="text"
                id="username"
                placeholder=""
              />
            </div>
          </div>


          <div className="form-group"  style={{ marginBottom: "25px" }}>
            <label className="labels" htmlFor="password">
              Password
            </label>
            <div className="custom_input">
              <input
                style={{  
                  width: "350px",
                  height: "25px",
                  borderRadius: "5px",
                  background: "rgba(0, 0, 0, 0.04)",
                }}
                className="details-input form-control"
                type="text"
                id="password"
                placeholder=""
              />
            </div>
          </div>

          <div className="form-group"  style={{ marginBottom: "20px" }}>
            <label
              className="labels"
              htmlFor="space"
              style={{
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "12px",
                lineHeight: "24px",
                color: "#9C1C1C",
              }}
            >
              Forgot Password?
            </label>
          </div>

          <div className="form-group">
            {/* Additional labels or form elements can be added here */}
          </div>

          <Button
            sx={{
              variant: "contained",
              color: "#FFFFFF",
              background: "#101754",
              width: "150px",
              height: "35px",
              borderRadius: "10px",
            }}
          >
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Login;