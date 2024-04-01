import React from "react";
import Button from '@mui/material/Button';
import photo from '../images/HealthLabLogo.jpg';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Login from './Login';


function Signin() {
  return (

    <div>
      <div>

      </div>
      <form
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr", // Two columns
          borderRadius: "15px",
          padding: "20px 40px",
          backgroundColor: "#D3E9FE",
          width: "65%",
          marginLeft: "15%",
          marginTop: "10%",
          boxShadow:"1px 5px 3px -3px rgba(0,0,0,0.44)"
        }}
      >

        <img
          src={photo} // Use the imported image
          // alt="My Photo"
          style={{ width: "100%", maxWidth: "300px", marginTop: "15px" }}
        />
        <h2
          style={{
            gridColumn: "span 2", // Span across two columns
            marginBottom: "5%",
            marginLeft: "45%",
            color: "#0085FF",
            fontWeight: "bold",
          }}
        >
          Sign In
        </h2>


      {/* <img src="./HealthLabLogo.jpg" alt="My Photo" style = {{position: "absolute",
width: "500px",
height: "100px",
left: "1030px",
top: "187px"}}
 ></img> */}

        <div className="form-group">
          <label className="labels" htmlFor="fullname">
            Full Name           
          </label>
          <div className="custom_input">
            <input style={{
                width: "350px",
                height: "25px",
                left: "1087px",
                top: "915px",
                borderRadius: "5px",
                background: "rgba(0, 0, 0, 0.04)"
              }}
              className="details-input form-control"
              type="text"
              id="fullname"
              placeholder=""
            />
          </div>
          <br/>
        </div>
    

        <div className="form-group">
          <label className="labels" htmlFor="email">
            Email          
          </label>
          <div className="custom_input">
            <input style={{
                width: "350px",
                height: "25px",
                left: "1087px",
                top: "915px",
                borderRadius: "5px",
                background: "rgba(0, 0, 0, 0.04)"
              }}
              className="details-input form-control"
              type="text"
              id="email"
              placeholder=""
            />
          </div>
        </div>

        <div className="form-group">
          <label className="labels" htmlFor="address">
            Address           
          </label>
          <div className="custom_input">
            <input style={{
                width: "350px",
                height: "25px",
                left: "1087px",
                top: "915px",
                borderRadius: "5px",
                background: "rgba(0, 0, 0, 0.04)"
              }}
              className="details-input form-control"
              type="text"
              id="address"
              placeholder=""
            />
          </div>
          <br/>
        </div>

        <div className="form-group">
          <label className="labels" htmlFor="id">
            National ID number           
          </label>
          <div className="custom_input">
            <input style={{
                width: "350px",
                height: "25px",
                left: "1087px",
                top: "915px",
                borderRadius: "5px",
                background: "rgba(0, 0, 0, 0.04)"
              }}
              className="details-input form-control"
              type="text"
              id="id"
              placeholder=""
            />
          </div>
        </div>

        <div className="form-group">
          <label className="labels" htmlFor="username">
            Username           
          </label>
          <div className="custom_input">
            <input style={{
                width: "350px",
                height: "25px",
                left: "1087px",
                top: "915px",
                borderRadius: "5px",
                background: "rgba(0, 0, 0, 0.04)"
              }}
              className="details-input form-control"
              type="text"
              id="username"
              placeholder=""
            />
          </div>
          <br/>
        </div>

        <div className="form-group">
          <label className="labels" htmlFor="password">
            Password           
          </label>
          <div className="custom_input">
            <input style={{
                width: "350px",
                height: "25px",
                left: "1087px",
                top: "915px",
                borderRadius: "5px",
                background: "rgba(0, 0, 0, 0.04)"
              }}
              className="details-input form-control"
              type="text"
              id="password"
              placeholder=""
            />
          </div>
        </div>

        <div className="form-group">
          <label className="labels" htmlFor="space">    
          </label>
          <div className="custom_input">
          </div>
        </div>

        <div className="form-group">
          <label className="labels" htmlFor="confirmpassword">
           Confirm Password           
          </label>
          <div className="custom_input">
            <input style={{
                width: "350px",
                height: "25px",
                left: "1087px",
                top: "915px",
                borderRadius: "5px",
                background: "rgba(0, 0, 0, 0.04)"
              }}
              className="details-input form-control"
              type="text"
              id="confirmpassword"
              placeholder=""
            />
          </div>
          <br/>
        </div>

        <div className="form-group">
          <label className="labels" htmlFor="space">    
          </label>
          <div className="custom_input">
          </div>
        </div>

        <div className="form-group">
         
          <label className="labels" htmlFor="space"           
          style={{

fontFamily: 'Inter',
fontStyle: "normal",
fontWeight: "500",
fontSize: "12px",
lineHeight: "24px",

color: "#9C1C1C"}}> 

          <Link to="/login">Already have an account?</Link>
          <Routes>
          <Route path="/login" component={Login} />
          </Routes>
          </label>

          <div className="custom_input">
          </div>
          <br/>
        </div>

        <div className="form-group">
          <label className="labels" htmlFor="space">    
          </label>
          <div className="custom_input">
          </div>
        </div>

        <Button sx={{variant:'contained' ,color:'#FFFFFF', background:'#101754', width: "150px",
                height: "35px", borderRadius: "10px"}}>
          Sign In
        </Button>

        <br />
        <br />
      </form>
      <br />
      <br />
    </div>
  );
}

export default Signin;
