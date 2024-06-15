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
  const [selectedTestsForTable, setSelectedTestsForTable] = useState([]); 
  const [selectedTestDescription, setSelectedTestDescription] = useState('');
  const [testDetails, setTestDetails] = useState('');
  const [patientId, setPatientId] = useState();
  const [patientName, setpatientName] = useState(null); 
  const [state, setState] = useState(null);
  //snackbar
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  useEffect(() => {
    getTests();
  }, []);

  //close the Snackbar
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
            console.log(selectedTestId);
          })
          .catch((error) => {
            console.error('Axios Error : ', error);
          });
      }
    } else {
      console.log('Test is already selected');
    }
  };

  const handleConfirm = () => {
      
    if (selectedTest) {
      setPatientId(1);
      setpatientName("Chamod");
      setState('register_only');
      // Find the selected test object from the tests array
      const selectedTestObject = tests.find((test) => test.id === selectedTest);
      // Add selected test object to the table
      setSelectedTestsForTable([...selectedTestsForTable, selectedTestObject]);
      setSelectedTest(null);
      setSelectedTestDescription('');
      setTestDetails('');
  
      // Sort
      setSelectedTestsForTable(prevSelectedTests => prevSelectedTests.sort((a, b) => a.id - b.id));
    }
    
  };
  
  const handleFinal = () => {
  
  const selectTestIds = selectedTestsForTable.map(test => test.id);
  
  const selectTestNames = selectedTestsForTable.map(test => test.name);
  
  // Create a new appointment object
  const newAppointment = {
    
    selectTestIds: selectTestIds,
    selectTestNames: selectTestNames, 
    patientId: patientId, //patient ID
    patientName: patientName, //name
    state: state // Include state
  };
  
  // Show success Snackbar
  setSnackbarMessage('Appointment added successfully');
  setSnackbarOpen(true);

  
  
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