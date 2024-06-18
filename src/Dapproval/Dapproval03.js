import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function FixedContainer() {
  const [msg, setMsg] = useState('');
  const [rid, setRid] = useState('');
  const [nm, setNm] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      if (!rid.trim()) {
        throw new Error('Report ID cannot be empty');
      }

      const response = await axios.post('http://localhost:3101/api/recommendations', {
        date: selectedDate,
        id: rid,
        recommendation: msg,
        docname:nm,
      });

      console.log('Response:', response);
      setAlertMessage('Submitted successfully!');
      setMsg('');
      setRid('');
      setSelectedDate(null);
      setNm('');
    } catch (error) {
      console.error('Error submitting recommendation:', error);
      if (error.response) {
        // The request was made and the server responded with a status code that falls out of the range of 2xx
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
        setAlertMessage(`Error: ${error.response.data.message || 'Failed to submit recommendation'}`);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('Request data:', error.request);
        setAlertMessage('Error: No response from the server');
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error message:', error.message);
        setAlertMessage(`Error: ${error.message}`);
      }
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Box sx={{ width: '80%', margin: 'auto', backgroundColor: '#D9D9D9', padding: '20px', borderRadius: '8px' }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  value={selectedDate}
                  onChange={handleDateChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={6} >
              <TextField style={{ marginRight: '15px' }}
                value={rid}
                onChange={(e) => setRid(e.target.value)}
                id="outlined-required"
                label="Report Id"
                required
              />
              <TextField
                value={nm}
                onChange={(e) => setNm(e.target.value)}
                id="outlined"
                label="Doctor name"
                required
              />
            </Grid>
           
            <Grid item xs={1} sx={{ marginTop: '10px' }}>
              <Button variant="contained" style={{ color: '#FFFFFF', background: '#101754', width: '100px', height: '50px' }} type="button">
                Approve
              </Button>
            </Grid>
            <Grid item xs={1} sx={{ marginTop: '10px' }}>
              <Button variant="contained" style={{ color: '#FFFFFF', background: '#101754', width: '200px', height: '50px' }} type="button">
                Recommend to recheck
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <br />
      <Box sx={{ width: '80%', margin: 'auto', backgroundColor: '#D9D9D9', padding: '20px', borderRadius: '8px', height: '50vh' }}>
        <h1>Recommendations</h1>
        <hr />
        <br />
        <div className="cont">
          <form onSubmit={submit}>
            <textarea name="text" 
            value={msg}
           onChange={(e) => setMsg(e.target.value)}
            placeholder="Need to..." cols="150" rows="10"></textarea><br></br>
            
            <Button type="submit" variant="contained" style={{ color: '#FFFFFF', background: '#101754', width: '100px', height: '50px' }}>Submit</Button>
          </form>
        </div>
        <br />
        {alertMessage && <div>{alertMessage}</div>}
      </Box>
    </React.Fragment>
  );
}
