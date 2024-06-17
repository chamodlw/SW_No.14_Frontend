import React from 'react'
import {AppBar, Tab , Tabs, Typography} from '@mui/material/'
import LocalHospitalTwoToneIcon from '@mui/icons-material/LocalHospitalTwoTone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Head() {
  return (
    <AppBar sx={{ background: "#D9D9D9"}}>
        <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', fontFamily: 'Helvetica', fontSize: '40px' , color: '#101754' , }}>
        <LocalHospitalTwoToneIcon fontSize="large" style={{ marginRight: '10px' ,marginLeft:'10px', color: '#101754' }} />

        HealthLab
        <Tabs sx={{marginLeft:'100px'}}>
          <Tab label ="Home"/>
          <Tab label ="Services"/>
          <Tab label ="About us"/>
          <Tab label ="Contact us"/>
        </Tabs>
        <AccountCircleIcon sx={{marginLeft: 'auto', marginRight:'15px' }}></AccountCircleIcon>
      </Typography>
        
    </AppBar>
  )
}