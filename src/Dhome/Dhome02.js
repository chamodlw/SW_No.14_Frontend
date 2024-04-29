import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function Dhome02() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [reportId, setReportId] = useState('');

  const handleClick = () => {
    if (!selectedDate || reportId.trim() === '') {
      // If either the DatePicker or Report ID is null or empty, show an alert
      alert("DatePicker and Report ID cannot be null");
    } else {
      // Redirect to another page
      window.location.href = '/Dapproval';
    }
  };

  return (
    <Box sx={{ width: '80%', margin: 'auto', backgroundColor: '#D9D9D9', padding: '20px', borderRadius: '8px' }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                <DemoItem>
                  <DatePicker
                    value={selectedDate}
                    onChange={date => setSelectedDate(date)}
                  />
                </DemoItem>
              </DemoContainer>
            </LocalizationProvider>
          </Grid>
          <Grid item xs={7} sx={{ marginTop: '10px' }}>
            <TextField
              id="outlined-required"
              label="Report Id"
              value={reportId}
              onChange={event => setReportId(event.target.value)}
            />
          </Grid>
          <Grid item xs={1} sx={{ marginTop: '10px' }}>
            <Button onClick={handleClick} sx={{ variant: 'contained', color: '#FFFFFF', background: '#101754', width: '250px', height: '50px' }}>
              View Report
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
