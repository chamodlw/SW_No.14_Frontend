import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ViewAllReportsButton = () => {
  return (
    <Link to="/Reportview">
    <Button
      variant="contained"
      sx={{
        
        borderRadius: '20px', // Make the button round
        backgroundColor: 'white', // Set background color to white
        color: 'white', // Set text color to black
        padding: '10px 20px',
       position:'center',
    
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Add padding to the button
      }}
    >
      View All Reports
    </Button>
    </Link> 
  );
};

export default ViewAllReportsButton;
