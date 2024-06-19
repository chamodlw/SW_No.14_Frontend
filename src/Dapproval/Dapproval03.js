import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const FixedContainer = () => {
  const query = useQuery();
  const [msg, setMsg] = useState('');
  const [rid, setRid] = useState(query.get('reportId') || '');
  const [nm, setNm] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [selectedDate, setSelectedDate] = useState(query.get('date') ? dayjs(query.get('date')) : null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      if (!rid.trim()) {
        throw new Error('Report ID cannot be empty');
      }

      const response = await axios.post('http://localhost:3100/api/recommendations', {
        date: selectedDate,
        id: rid,
        recommendation: msg,
        docname: nm,
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
        setAlertMessage(`Error: ${error.response.data.message || 'Failed to submit recommendation'}`);
      } else if (error.request) {
        setAlertMessage('Error: No response from the server');
      } else {
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
            <Grid item xs={6}>
              <TextField
                style={{ marginRight: '15px' }}
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
              <Button
                variant="contained"
                style={{ color: '#FFFFFF', background: '#101754', width: '100px', height: '50px' }}
               // onClick={}
              >
                Approve
              </Button>
            </Grid>
            <Grid item xs={1} sx={{ marginTop: '10px' }}>
              <Button
                variant="contained"
                style={{ color: '#FFFFFF', background: '#101754', width: '200px', height: '50px' }}
                type="button"
              >
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
            <textarea
              name="text"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              placeholder="Need to..."
              cols="150"
              rows="10"
            ></textarea>
            <br />
            <Button type="submit" variant="contained" style={{ color: '#FFFFFF', background: '#101754', width: '100px', height: '50px' }}>Submit</Button>
          </form>
        </div>
        <br />
        {alertMessage && <div>{alertMessage}</div>}
      </Box>
    </React.Fragment>
  );
};

export default FixedContainer;
