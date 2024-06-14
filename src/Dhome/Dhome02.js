import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Dapproval02 from '../Dapproval/Dapproval02';

export default function Dhome02() {
  const [test, setTest] = React.useState('');

  const handleChange = (event) => {
    setTest(event.target.value);
  };
  const handleClick = () => {
    // Redirect to another page
    window.location.href = '/Dapproval';
  };

  //return-code
  return (
    <Box sx={{ width: '80%', margin: 'auto', backgroundColor: '#D9D9D9', padding: '20px' ,borderRadius: '8px'}}>
       <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
      <Grid item xs={2}>
      <Dapproval02/>
      </Grid>
      <Grid item xs={7}sx={{ marginTop: '10px'}}>

      <TextField
         Report ID
          id="outlined-required"
          label="Report Id"
        />
        </Grid>
        
        <Grid item xs={1}sx={{ marginTop: '10px'}}>
        <Button onClick={handleClick}sx={{variant:'contained' ,color:'#FFFFFF', background:'#101754',width:'250px',height:'50px'}}>
          View Report
        </Button>
      
        </Grid>
        </Grid>
        </Box>

    </Box>
    
  );
  
}