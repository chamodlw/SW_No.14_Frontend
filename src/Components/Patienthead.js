import React, { useState, useEffect } from 'react';
import { AppBar, Grid, Tab, Tabs, Typography } from '@mui/material/';
import LocalHospitalTwoToneIcon from '@mui/icons-material/LocalHospitalTwoTone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

function Head() {
  const [value, setValue] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to handle the tab change event
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Effect to add scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AppBar sx={{ background: "#D9D9D9"}}>
      {!isScrolled && 
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <LocalHospitalTwoToneIcon fontSize="large" style={{ color: '#101754', fontSize: '2.7rem' }} />
            <Typography variant="body2" style={{ color: '#101754', marginLeft: '10px', fontSize: '2.0rem', fontFamily: 'sans-serif'}}>HealthLab</Typography>
          </div>  
        </div>}

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}> 
      
          {isScrolled && 
            <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '1%',paddingTop: '1%',paddingBottom: '0.5%', paddingRight: '8%' }}>
              <LocalHospitalTwoToneIcon fontSize="large" style={{ color: '#101754', fontSize: '2.7rem' }} />
              <Typography variant="body2" style={{ color: '#101754', marginLeft: '10px', fontSize: '2.0rem', fontFamily: 'sans-serif'}}>HealthLab</Typography>
            </div>
          }

            <Tabs value={value} onChange={handleChange} sx={{ '& .MuiTab-root': { fontSize: '1.1rem' },  }}>
              <Tab label="Home"/>
              <Tab label="Services"/>
              <Tab label="About us"/>
              <Tab label="Contact Us" component={Link} to="../Contact"/> 
            </Tabs>

            {isScrolled && 
              <Grid style={{ flex: '0 0 0 15%', display: 'flex',  justifyContent: 'center', alignItems: 'center',  paddingLeft: '20%', paddingRight: '5px'}}>
                <AccountCircleIcon fontSize="large" style={{ color: '#101754' }} />
                <Typography variant="body2" style={{ color: '#101754', fontSize: '1.0rem', fontFamily: 'sans-serif'}}>Perera S.K.D.</Typography>
              </Grid>
            }
      </div>
    </AppBar>
  );
}

export default Head;
