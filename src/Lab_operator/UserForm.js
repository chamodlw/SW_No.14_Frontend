// src/Lab_operator/UserForm.js
import React, { useEffect, useState } from "react";
import { Button, Typography, TextField, FormControl, InputLabel, Select, MenuItem, Snackbar, Box, Paper } from "@mui/material";
import axios from "axios";

const UserForm = ({ addUser, updateUser, submitted, data, isEdit }) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [test, setTest] = useState('');
  const [tests, setTests] = useState([]);
  const [testTubes, setTestTubes] = useState([]);
  const [bloodType, setBloodType] = useState('');
  const [selectedTube, setSelectedTube] = useState('');
  const [testTubeId, setTestTubeId] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [isNicValid, setIsNicValid] = useState(true);

  useEffect(() => {
    if (!submitted) {
      resetForm();
    }
  }, [submitted]);

  useEffect(() => {
    if (data?.id && data.id !== 0) {
      setId(data.id.toString());
      setName(data.name);
      setTest(data.test);
      setBloodType(data.blood_type);
      setSelectedTube(data.test_tubes);
      setTestTubeId(data.test_tube_id);
    }
  }, [data]);

  useEffect(() => {
    fetchTestTubes();
    fetchTests();
  }, []);

  const fetchTestTubes = async () => {
    try {
      const response = await axios.get('http://localhost:3100/api/test_tubes');
      setTestTubes(response.data.response || []);
    } catch (error) {
      console.error('Error fetching test tubes:', error);
    }
  };

  const fetchTests = async () => {
    try {
      const response = await axios.get('http://localhost:3100/api/tests');
      setTests(response.data.response || []);
    } catch (error) {
      console.error('Error fetching tests:', error);
    }
  };

  const validateForm = () => {
    let tempErrors = {};
    tempErrors.name = name ? '' : 'Name is required.';
    tempErrors.test = test ? '' : 'Test is required.';
    tempErrors.selectedTube = selectedTube ? '' : 'Test tube selection is required.';
    tempErrors.bloodType = bloodType ? '' : 'Blood type is required.';
    tempErrors.testTubeId = testTubeId.length >= 4 ? '' : 'Test Tube ID must be at least 4 characters long.';
    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === "");
  };

  const handleSubmit = (actionFunc, successMessage) => {
    if (validateForm()) {
      actionFunc({
        id,
        name,
        test,
        test_tubes: selectedTube,
        test_tube_id: testTubeId,
        blood_type: bloodType
      });
      handleSnackbarOpen(successMessage);
      resetForm();
    }
  };

  const resetForm = () => {
    setId('');
    setName('');
    setTest('');
    setBloodType('');
    setSelectedTube('');
    setTestTubeId('');
    setErrors({});
  };

  const handleSnackbarOpen = (message) => {
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  };

  const fetchPatientName = async (nic) => {
    try {
      console.log(`Fetching patient name for NIC: ${nic}`);
      const response = await axios.get('http://localhost:3100/users');
      console.log('Response from server:', response.data);

      // Extract the nested response data
      const users = response.data.response;

      const user = users.find(user => user.nationalID === nic);
      if (user && user.fullname) {
        setName(user.fullname);
        setIsNicValid(true);
        console.log(`Found patient: ${user.fullname}`);
      } else {
        setName('');
        setIsNicValid(false);
        setSnackbarMessage('No patient found with this NIC');
        setSnackbarOpen(true);
        console.log('No patient found with this NIC');
      }
    } catch (error) {
      console.error('Error fetching patient name:', error);
      setSnackbarMessage(`Error fetching patient name: ${error.message}`);
      setSnackbarOpen(true);
      setIsNicValid(false);
    }
  };

  const handleNicBlur = () => {
    if (id) {
      fetchPatientName(id);
    }
  };

  return (
    <Paper sx={{ width: '97%', margin: 'auto', backgroundColor: '#D9D9D9', padding: '20px', borderRadius: '8px', marginTop: '80px' }}>
      <Typography variant="h4" sx={{ color: '#333', mb: 4 }}>
        Blood Testing Application
      </Typography>
      <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          fullWidth
          label="NIC"
          variant="outlined"
          value={id}
          onChange={(e) => setId(e.target.value)}
          onBlur={handleNicBlur}
          sx={{ backgroundColor: '#fff', borderRadius: 1 }}
        />
        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={!!errors.name}
          helperText={errors.name}
          sx={{ backgroundColor: '#fff', borderRadius: 1 }}
          InputProps={{
            readOnly: true,
          }}
        />
        <FormControl fullWidth variant="outlined" sx={{ backgroundColor: '#fff', borderRadius: 1 }} disabled={!isNicValid}>
          <InputLabel>Test</InputLabel>
          <Select
            value={test}
            onChange={(e) => setTest(e.target.value)}
            label="Test"
            error={!!errors.test}
          >
            {tests.map((test) => (
              <MenuItem key={test._id} value={test.name}>{test.name}</MenuItem>
            ))}
          </Select>
          <Typography variant="caption" color="error">{errors.test}</Typography>
        </FormControl>
        <FormControl fullWidth variant="outlined" sx={{ backgroundColor: '#fff', borderRadius: 1 }} disabled={!isNicValid}>
          <InputLabel>Test Tube</InputLabel>
          <Select
            value={selectedTube}
            onChange={(e) => setSelectedTube(e.target.value)}
            label="Test Tube"
            error={!!errors.selectedTube}
          >
            {testTubes.map((tube) => (
              <MenuItem key={tube._id} value={tube.tube_type}>{tube.tube_type}</MenuItem>
            ))}
          </Select>
          <Typography variant="caption" color="error">{errors.selectedTube}</Typography>
        </FormControl>
        <TextField
          fullWidth
          label="Test Tube ID"
          variant="outlined"
          value={testTubeId}
          onChange={(e) => setTestTubeId(e.target.value)}
          error={!!errors.testTubeId}
          helperText={errors.testTubeId}
          sx={{ backgroundColor: '#fff', borderRadius: 1 }}
          disabled={!isNicValid}
        />
        <FormControl fullWidth variant="outlined" sx={{ backgroundColor: '#fff', borderRadius: 1 }} disabled={!isNicValid}>
          <InputLabel>Blood Type</InputLabel>
          <Select
            value={bloodType}
            onChange={(e) => setBloodType(e.target.value)}
            label="Blood Type"
            error={!!errors.bloodType}
          >
            <MenuItem value=""><em>None</em></MenuItem>
            <MenuItem value="A+">A+</MenuItem>
            <MenuItem value="A-">A-</MenuItem>
            <MenuItem value="B+">B+</MenuItem>
            <MenuItem value="B-">B-</MenuItem>
            <MenuItem value="AB+">AB+</MenuItem>
            <MenuItem value="AB-">AB-</MenuItem>
            <MenuItem value="O+">O+</MenuItem>
            <MenuItem value="O-">O-</MenuItem>
          </Select>
          <Typography variant="caption" color="error">{errors.bloodType}</Typography>
        </FormControl>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#00c6e6',
            color: '#ffffff',
            '&:hover': {
              backgroundColor: '#0099b8',
            },
            mt: 2
          }}
          onClick={() => handleSubmit(isEdit ? updateUser : addUser, isEdit ? 'The testing was successfully updated' : 'The testing was successfully added')}
          disabled={!isNicValid}
        >
          {isEdit ? 'Update' : 'Add'}
        </Button>
      </Box>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
        message={snackbarMessage}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        action={
          <Button sx={{ color: '#ffffff' }} size="small" onClick={() => setSnackbarOpen(false)}>
            CLOSE
          </Button>
        }
        sx={{ backgroundColor: '#4caf50', color: '#fff' }}
      />
    </Paper>
  );
}

export default UserForm;
