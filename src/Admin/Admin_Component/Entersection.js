import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AddToPhotosTwoToneIcon from '@mui/icons-material/AddToPhotosTwoTone';
import { Grid, Typography } from '@mui/material';

function BasicTextFields({ handleChange, formData }) {
  return (
    <Grid container direction="column" alignItems="center" justifyContent="center">
      <Grid sx={{ alignItems: 'center', paddingBottom: '1%' }}>
        <AddToPhotosTwoToneIcon sx={{ fontSize: 48, display: 'block', margin: 'auto' , color: '#101754'}} />
        <Typography variant="h5" align="center" sx={{ fontWeight: 'bold' , color: '#101754'}}>ADD NEW TESTS</Typography>
      </Grid>

      <Box
        component="form"
        sx={{
          backgroundColor: '#FFFFFF',
          width: '35%',
          minWidth:'30vh',
          maxWidth:'60vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          '& > :not(style)': { m: 1, width: '80%' },
          margin: 'auto',
          borderRadius: '15px',
          padding: '30px',
          paddingLeft:'5px',
          paddingRight:'5px',
        }}
        noValidate
        autoComplete="off"
      >
        <Grid container spacing={2} direction="column" >
          <Grid item container spacing={6}>
            <Grid item xs={6}>
              <TextField id="id" label="id" variant="outlined" value={formData.id} onChange={handleChange} />
            </Grid>
            <Grid item xs={6}>
              <TextField id="name" label="name" variant="outlined" value={formData.name} onChange={handleChange} />
            </Grid>
          </Grid>
          <Grid item >
            <TextField id="description" label="description" variant="outlined" value={formData.description} onChange={handleChange} sx={{width:'100%'}} />
          </Grid>
          <Grid item container spacing={4}>
            <Grid item xs={4}>
              <TextField id="min" label="min" variant="outlined" value={formData.min} onChange={handleChange} />
            </Grid>
            <Grid item xs={4}>
              <TextField id="max" label="max" variant="outlined" value={formData.max} onChange={handleChange} />
            </Grid>
            <Grid item xs={4}>
              <TextField id="unit" label="unit" variant="outlined" value={formData.unit} onChange={handleChange} />
            </Grid>
          </Grid>
          <Grid item >
            <TextField id="price" label="price" variant="outlined" value={formData.price} onChange={handleChange} sx={{width:'100%'}} />
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
}

export default BasicTextFields;
