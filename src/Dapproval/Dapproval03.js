import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import axios from 'axios';

export default function FixedContainer() {
  const [msg, setMsg] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3100/api/recommendations", {
        date: "2002.01.12",
        id: "02",
        recommendation: msg
      });
      setAlertMessage('Submitted successfully!');
      setMsg(''); // Clear the input field after submission
    } catch (error) {
      console.error('Error submitting recommendation:', error);
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Box sx={{ width: '80%', margin: 'auto', backgroundColor: '#D9D9D9', padding: '20px', borderRadius: '8px', height: '50vh' }}>
        <h1>Recommendations</h1>
        <hr />
        <br />
        <div className='cont'>
          <form onSubmit={submit}>
            <textarea name="text" value={msg} onChange={(e) => { setMsg(e.target.value) }} placeholder="Need to..." cols="150" rows="10"></textarea><br></br>
            <input type="submit" value="Submit" style={{ color: '#FFFFFF', background: '#101754', height: '50px' }} />
          </form>
        </div>
        <br />
        {alertMessage && <div>{alertMessage}</div>}
      </Box>
    </React.Fragment>
  );
}
