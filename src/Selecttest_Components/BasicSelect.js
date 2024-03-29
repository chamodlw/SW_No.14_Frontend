// BasicSelect.js
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Axios from 'axios';
import SelectTable from './SelectTable';
import { Snackbar } from '@mui/material';

function BasicSelect() {
  
  const [tests, setTests] = useState([]);
  const [selectedTest, setSelectedTest] = useState(null);
  const [selectedTestsForTable, setSelectedTestsForTable] = useState([]); // New state to track selected tests for table
  const [selectedTestDescription, setSelectedTestDescription] = useState('');
  const [testDetails, setTestDetails] = useState('');
    // State to manage Snackbar
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  useEffect(() => {
    getTests();
  }, []);

  // Function to close the Snackbar
  const handleCloseSnackbar = () => {
        setSnackbarOpen(false);
  }

  const getTests = () => {
    Axios.get('http://localhost:3100/api/tests')
      .then((response) => {
        setTests(response.data?.response || []);
      })
      .catch((error) => {
        console.error('Axios Error : ', error);
      });
  };

  const handleChange = (event) => {
    const selectedTestId = event.target.value;
    
    // Check if the selected test is already in selectedTestsForTable
    const isAlreadySelected = selectedTestsForTable.some(test => test.id === selectedTestId);
    
    if (!isAlreadySelected) {
      setSelectedTest(selectedTestId);
    
      const selectedTest = tests.find((test) => test.id === selectedTestId);
      if (selectedTest) {
        setSelectedTestDescription(selectedTest.description);
        Axios.get(`http://localhost:3100/api/tests/${selectedTestId}`)
          .then((response) => {
            setTestDetails(response.data?.details || '');
          })
          .catch((error) => {
            console.error('Axios Error : ', error);
          });
      }
    } else {
      // If the test is already selected, you can handle this case as needed.
      console.log('Test is already selected');
    }
  };

  const handleConfirm = () => {
    if (selectedTest) {
      // Find the selected test object from the tests array
      const selectedTestObject = tests.find((test) => test.id === selectedTest);
      // Add selected test object to the table
      setSelectedTestsForTable([...selectedTestsForTable, selectedTestObject]);
      setSelectedTest(null);
      setSelectedTestDescription('');
      setTestDetails('');
  
      // Sort selectedTestsForTable by ID in ascending order
      setSelectedTestsForTable(prevSelectedTests => prevSelectedTests.sort((a, b) => a.id - b.id));
    }
    
  };
  
  const handleFinal = () => {
  // Extracting selected test IDs from selectedTestsForTable array
  const selectTestIds = selectedTestsForTable.map(test => test.id);
  // Extracting selected test names from selectedTestsForTable array
  const selectTestNames = selectedTestsForTable.map(test => test.name);
  
  // Create a new appointment object
  const newAppointment = {
    id: Math.floor(Math.random() * 1000), // Generate a random integer ID for the appointment
    // You can add more properties to the appointment object as needed
    selectTestIds: selectTestIds,
    selectTestNames: selectTestNames // Include selected test names in the appointment object
  };
  
  // Show success Snackbar
  setSnackbarMessage('Appointment added successfully');
  setSnackbarOpen(true);

  
  // Send the new appointment data to the server
  fetch('http://localhost:3100/api/addappointment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newAppointment) // Pass the new appointment object as JSON data
  })
  
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
    // You can handle success response as needed
  })
  .catch(error => {
    console.error('Error:', error);
    // You can handle errors as needed
  });
};

  

  return (
    <Box sx={{ width: '80%', margin: 'auto', backgroundColor: '#D9D9D9', padding: '20px', borderRadius: '8px' }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" sx={{ color: '#101754' }}>
          Blood Test Type
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedTest || ''}
          label="Blood Test Type"
          onChange={handleChange}
          sx={{ backgroundColor: '#FFFFFF' }}
        >
          {tests.map((test) => (
            <MenuItem key={test.id} value={test.id}>
              {test.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {selectedTestDescription && (
        <Typography variant="subtitle1" sx={{ marginTop: '10px' }}>
          {selectedTestDescription}
        </Typography>
      )}

      {testDetails && (
        <Typography variant="subtitle1" sx={{ marginTop: '10px' }}>
          {testDetails}
        </Typography>
      )}

      <Box sx={{ marginLeft: 'auto', marginTop: '10px' }}>
        <Button sx={{ variant: 'contained', color: '#FFFFFF', background: '#101754' }} onClick={handleConfirm}>
          SELECT
        </Button>
      </Box>

      {/* Displaying selected tests in a table */}
      {selectedTestsForTable.length > 0 && <SelectTable tests={selectedTestsForTable} />}

      <Box sx={{ marginLeft: 'auto', marginTop: '10px' }}>
        {selectedTestsForTable.length > 0 && (
          <Button sx={{ variant: 'contained', color: '#FFFFFF', background: '#101754' }} onClick={handleFinal}>
            CONFIRM
            <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
        action={
          <Button sx={{color:"#ffffff"}} size="small" onClick={handleCloseSnackbar}>
            CLOSE
          </Button>
        }
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      />
          </Button>
          
          
        )}
      </Box>


    </Box>
  );
}

export default BasicSelect;