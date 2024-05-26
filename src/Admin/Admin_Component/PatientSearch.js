import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
import { Button, Card, CardContent, Typography } from '@mui/material';

export default function PatientSearch({ rows }) {
  const [searchValue, setSearchValue] = useState('');
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [showCard, setShowCard] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const handleSearch = () => {
    if (selectedPatient) {
      console.log(selectedPatient);
      setShowCard(true);
      setShowOverlay(true);
    }
  };

  const handleCloseCard = () => {
    setShowCard(false);
    setShowOverlay(false);
    setSelectedPatient(null);
  };

  return (
    <div style={{ position: 'relative', width: '50%', margin: '0 auto' }}>
      <Autocomplete
        freeSolo
        options={rows}
        getOptionLabel={(row) => row.fullname}
        filterOptions={(options, { inputValue }) =>
          options.filter((option) =>
            option.fullname.toLowerCase().includes(inputValue.toLowerCase())
          )
        }
        onChange={(event, value) => setSelectedPatient(value)}
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

      {showCard && selectedPatient && (
        <>
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
              onClick={handleCloseCard}
            ></div>
          )}
          <div
            style={{
              position: 'absolute',
              top: '100%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100%', 
              borderRadius: '20px',
              boxShadow: '0 8px 12px rgba(0, 0, 0, 1)',
              zIndex: 1000,
            }}
          >
            <Card
              variant="outlined"
              sx={{
                height: '100%',
                width: '100%',
                minWidth: 400,
                margin: 'auto',
                borderRadius: 5,
                backgroundColor: '#f5f5f5',
                padding: '1px 20px',
              }}
              size="large"
            >
              <CardContent>
                <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                  {selectedPatient.fullname}
                </Typography>
                <Typography variant="body1">
                  {selectedPatient && (
                    <ul style={{ listStyleType: 'circle', padding: 0 }}>
                      <li><strong>ID:</strong> {selectedPatient.nationalID}</li>
                      <li><strong>Name:</strong> {selectedPatient.fullname}</li>
                      <li><strong>Email:</strong> {selectedPatient.email}</li>
                      <li><strong>Address:</strong> {selectedPatient.address}</li>
                      <li><strong>Role:</strong> {selectedPatient.role}</li>
                      <li><strong>Username:</strong> {selectedPatient.username}</li>
                      <li><strong>Password:</strong> {selectedPatient.password}</li>
                    </ul>
                  )}
                </Typography>
              </CardContent>
            </Card>
          </div>
        </>
      )}
    </div>
  );
}
