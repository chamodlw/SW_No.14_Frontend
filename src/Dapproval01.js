import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Dapproval02 from './Dapproval02';

export default function BasicSelect() {
  const [test, setTest] = React.useState('');

  const handleChange = (event) => {
    setTest(event.target.value);
  };

  return (
    <Box sx={{ width: '80%', margin: 'auto', backgroundColor: '#D9D9D9', padding: '20px' ,borderRadius: '8px'}}>
      <Dapproval02/>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" sx={{color:'#101754'}}>Report ID</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={test}
          label="Blood Test Type"
          onChange={handleChange}
          sx={{ backgroundColor: '#FFFFFF' }}

        >
          
        </Select>
      </FormControl>
      
      {test && (
        <Typography variant="subtitle1" sx={{ marginTop: '10px' }}>
          
           {`${test}`}
           
        </Typography>
      )}
      <Box sx={{ marginLeft: 'auto', marginTop: '10px' }}>
        {/* Add your button component here */}
        <Button sx={{variant:'contained' ,color:'#FFFFFF', background:'#101754'}}>
          Approve
        </Button>&nbsp;
        <Button sx={{variant:'contained' ,color:'#FFFFFF', background:'#101754'}}>
          Recommend to recheck
        </Button>
        
      </Box>
      
    </Box>
    
  );
  
}