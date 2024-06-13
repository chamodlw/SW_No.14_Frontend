//PatientSearch.js
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
import { rows } from '../Admin_Component/Patientlist';
import { Button, Card, CardContent, Typography } from '@mui/material'; // Import Card and Typography from MUI

export default function PatientSearch() {
  const [searchValue, setSearchValue] = useState('');
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [showCard, setShowCard] = useState(false); // State to control the display of the card
  const [showOverlay, setShowOverlay] = useState(false); // State to control the display of the overlay

  const handleSearch = () => {
    if (selectedPatient) {
      // Display details of selected patient
      console.log(selectedPatient); // Replace with your logic to display patient details
      setShowCard(true); // Show the card after search button is pressed
      setShowOverlay(true); // Show the overlay after search button is pressed
    }
  };

  const handleCloseCard = () => {
    setShowCard(false); // Hide the card
    setShowOverlay(false); // Hide the overlay
    setSelectedPatient(null); // Reset selected patient
  };

  return (
    <div style={{ position: 'relative', width: '50%', margin: '0 auto' }}>
      <Autocomplete
  freeSolo
  options={rows} // Use the rows array directly
  getOptionLabel={(row) => row.name} // Specify the property to use as the label
  filterOptions={(options, { inputValue }) =>
    options.filter((option) =>
      option.name.toLowerCase().includes(inputValue.toLowerCase())
    )
  }
  onChange={(event, value) => setSelectedPatient(value)} // Set the selected object directly
  renderInput={(params) => (
    <TextField
      {...params}
      label="Search for a patient"
      variant="outlined"
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      InputProps={{
        ...params.InputProps,
        type: 'search',
        startAdornment: (
          <Button onClick={handleSearch}>
            <SearchIcon sx={{ color: 'action.active', mr: 1.5 }} />
          </Button>
        ),
        sx: { borderRadius: '20px' },
      }}
    />
  )}
/>

      {/* Display selected patient in a card only after search button is pressed */}
      {showCard && selectedPatient && (
  <>
    {/* Semi-transparent overlay */}
    {showOverlay && (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 999,
        }}
        onClick={handleCloseCard} // Close card on overlay click
      ></div>
    )}
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '40%', // Set width to 40% of the screen
        borderRadius: '20px', // Add rounded corners
        boxShadow: '0 8px 12px rgba(0, 0, 0, 1)', // Add shadow
        zIndex: 1000,
      }}
    >
      <Card
        variant="outlined"
        sx={{
          height: '100%',
          width: '100%',
          maxWidth: 400,
          margin: 'auto',
          borderRadius: 5,
        }}
        size="large"
      >
        <CardContent>
          <Typography variant="h5" component="div">
            Patient Details
          </Typography>
          <Typography variant="body1">ID: {selectedPatient.id}</Typography>
          <Typography variant="body1">Name: {selectedPatient.name}</Typography>
          <Typography variant="body1">Description: {selectedPatient.description}</Typography>
        </CardContent>
      </Card>
    </div>
  </>
)}

    </div>
  );
}
