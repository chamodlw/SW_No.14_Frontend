import React from 'react'
import {AppBar, Tab , Button, Tabs, Typography} from '@mui/material/'
import LocalHospitalTwoToneIcon from '@mui/icons-material/LocalHospitalTwoTone';
export default function Head() {
  return (
    <AppBar sx={{ background: "#D9D9D9"}}>
        <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', fontFamily: 'Helvetica', fontSize: '30px' , color: '#101754' }}>
        <LocalHospitalTwoToneIcon fontSize="large" style={{ marginRight: '10px' ,marginLeft:'10px', color: '#101754' }} />

        HealthLab
        <Tabs sx={{marginLeft:'100px'}}>
          <Tab label ="Home"/>
          <Tab label ="Services"/>
          <Tab label ="About us"/>
          <Tab label ="Contact us"/>
        </Tabs>
        <Button sx={{ marginLeft: 'auto', background:'#101754'}} variant="contained">Login</Button>
        <Button sx={{ marginLeft: '10px', marginRight:'10px' , background:'#101754'}} variant="contained">Signup</Button>
      </Typography>
        
    </AppBar>
  )
}
