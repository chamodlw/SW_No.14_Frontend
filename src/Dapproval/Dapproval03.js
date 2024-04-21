import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function FixedContainer() {
  const [msg, setMsg] = useState('');
  const [rid, setRid] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };


  const submit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      // Check if `rid` is not empty before submitting
      if (!rid.trim()) {
        throw new Error('Report ID cannot be empty');
      }

      await axios.post("http://localhost:3100/api/recommendations", {
        date: selectedDate,
        id: rid,
        recommendation: msg
      });
      setAlertMessage('Submitted successfully!');
      setMsg('');
      setRid('');
      setSelectedDate('');
    } catch (error) {
      console.error('Error submitting recommendation:', error);
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
            <DemoContainer components={['DatePicker']}>
           <DemoItem>
            <DatePicker
            value={selectedDate}
            onChange={handleDateChange}
           />
          </DemoItem>
          </DemoContainer>
     
    </LocalizationProvider>
            </Grid>
            <Grid item xs={6}sx={{ marginTop: '10px'}}>
              <TextField
                value={rid}
                onChange={(e) => setRid(e.target.value)}
                id="outlined-required"
                label="Report Id"
              />
            </Grid>
            <Grid item xs={1}sx={{ marginTop: '10px'}}>
              <Button variant="contained" style={{variant:'contained' ,color:'#FFFFFF', background:'#101754',width:'100px',height:'50px'}} type="button"> {/* Specify type="button" */}
                Approve
              </Button>
            </Grid>
            <Grid item xs={1}sx={{ marginTop: '10px'}}>
              <Button variant="contained" style={{variant:'contained' ,color:'#FFFFFF', background:'#101754',width:'200px',height:'50px'}}type="button"> {/* Specify type="button" */}
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
        <div className='cont'>
          <form onSubmit={submit}>
            <textarea name="text" value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Need to..." cols="150" rows="10"></textarea><br></br>
            <Button type="submit" variant="contained" style={{variant:'contained' ,color:'#FFFFFF', background:'#101754',width:'100px',height:'50px'}}>Submit</Button> {/* Specify type="submit" */}
          </form>
        </div>
        <br />
        {alertMessage && <div>{alertMessage}</div>}
      </Box>
    </React.Fragment>
  );
}
