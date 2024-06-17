import React from 'react';
import { Container, Paper, Typography, Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const LabReportsList = () => {
  // Hardcoded lab report data
  const labReport = {
    id: 'LR001',
    patientName: 'John Doe',
    testDetails: 'Blood test, Urine test',
    paymentDetails: 'Paid $100',
  };

  const handleBack = () => {
    // Handle back button click, for example: navigate back to previous page
    console.log('Back button clicked');
  };

  return (
    <Container maxWidth="md" sx={{ marginTop: 4  , padding:'150px'}}>
      <Paper sx={{ padding: 3, marginBottom: 3 }}>
        <Typography variant="h5" gutterBottom>
          Lab Report {labReport.id}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="subtitle1">Report ID: {labReport.id}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">Patient Name: {labReport.patientName}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">Tests Details: {labReport.testDetails}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" fullWidth>
              View Report
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">Payment Details: {labReport.paymentDetails}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Link to ="/Reportview"><Button variant="outlined" color="primary" onClick={handleBack}>
              Back
            </Button></Link>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default LabReportsList;
