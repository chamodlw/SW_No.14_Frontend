// EnterSection.js
import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function BasicTextFields({ handleChange, formData }) {
  return (
    <Box
      component="form"
      sx={{
        backgroundColor: '#D9D9D9',
        width: '30%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > :not(style)': { m: 1, width: '80%' },
        margin: 'auto', // Aligning center horizontally
        borderRadius: '10px', // Adding rounded corners
        padding: '20px',  // Adding some padding for better aesthetics
      }}
      noValidate
      autoComplete="off"
    >

      <TextField id="id" label="id" variant="outlined" value={formData.id} onChange={handleChange} />
      <TextField id="name" label="name" variant="outlined" value={formData.name} onChange={handleChange} />
      <TextField id="description" label="description" variant="outlined" value={formData.description} onChange={handleChange} />

    </Box>
  );
}

export default BasicTextFields;