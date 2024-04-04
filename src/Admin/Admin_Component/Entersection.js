// EnterSection.js
import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AddToPhotosTwoToneIcon from '@mui/icons-material/AddToPhotosTwoTone';
import { Grid, Typography } from '@mui/material';

function BasicTextFields({ handleChange, formData }) {
  return (
  <Grid container direction="column" alignItems="center" justifyContent="center"> {/* Added justifyContent="center" */}
    <Grid sx={{ alignItems: 'center', paddingBottom: '1%' }}>
      <AddToPhotosTwoToneIcon sx={{ fontSize: 48, display: 'block', margin: 'auto' , color: '#101754'}} />
      <Typography variant="h5" align="center" sx={{ fontWeight: 'bold' , color: '#101754'}}>ADD NEW TESTS</Typography>

    </Grid>

    <Box
      component="form"
      sx={{
        backgroundColor: '#D9D9D9',
        width: '25%',
        minWidth:'30vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > :not(style)': { m: 1, width: '80%' },
        margin: 'auto', // Aligning center horizontally
        borderRadius: '15px', // Adding rounded corners
        padding: '20px',  // Adding some padding for better aesthetics
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="id" label="id" variant="outlined" value={formData.id} onChange={handleChange} />
      <TextField id="name" label="name" variant="outlined" value={formData.name} onChange={handleChange} />
      <TextField id="description" label="description" variant="outlined" value={formData.description} onChange={handleChange} />
    </Box>
  </Grid>
);

}

export default BasicTextFields;