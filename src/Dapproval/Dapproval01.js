import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dapproval02 from './Dapproval02';
import Grid from '@mui/material/Grid';

export default function Dapproval01() {
  const [test, setTest] = React.useState('');

  const handleChange = (event) => {
    setTest(event.target.value);
  };

  //return-code
  return (
    <Box sx={{ width: '80%', margin: 'auto', backgroundColor: '#D9D9D9', padding: '20px' ,borderRadius: '8px'}}>
       <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
      <Grid item xs={2} >
      <Dapproval02/>
      </Grid>
      <Grid item xs={6} sx={{ marginTop: '10px'}} >

      <TextField
         Report ID
          id="outlined-required"
          label="Report Id"
        />
        </Grid>
        <Grid item xs={1}sx={{ marginTop: '10px'}}>
         <Button sx={{variant:'contained' ,color:'#FFFFFF', background:'#101754',height:'50px'}}>
          Approve
        </Button>
        </Grid>
        <Grid item xs={1}sx={{ marginTop: '10px'}}>
        <Button sx={{variant:'contained' ,color:'#FFFFFF', background:'#101754',width:'250px',height:'50px'}}>
          Recommend to recheck
        </Button>
        
        </Grid>
        </Grid>
        </Box>

    </Box>
    
  );
  
}