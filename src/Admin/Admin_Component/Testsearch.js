import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
import { Card, CardContent, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';

export default function Testsearch({ rows }) {
  const [searchValue, setSearchValue] = useState('');
  const [selectedTest, setSelectedTest] = useState(null);
  const [showCard, setShowCard] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const handleSearch = () => {
    if (selectedTest) {
      console.log(selectedTest);
      setShowCard(true);
      setShowOverlay(true);
    }
    console.log("patient is " + rows);
  };

  const handleCloseCard = () => {
    setShowCard(false);
    setShowOverlay(false);
    setSelectedTest(null);
  };

  return (
    <div style={{ position: 'relative', width: '50%', margin: '0 auto', paddingBottom: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Autocomplete
          freeSolo
          options={rows}
          getOptionLabel={(row) => row?.name || ''}
          filterOptions={(options, { inputValue }) =>
            options.filter((option) =>
              (option?.name)?.toLowerCase().includes(inputValue.toLowerCase())
            )
          }
          onInputChange={(event, newValue) => setSearchValue(newValue)}
          onChange={(event, value) => setSelectedTest(value)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search for tests"
              variant="outlined"
              InputProps={{
                ...params.InputProps,
                type: 'search',
                sx: { borderRadius: '20px' },
              }}
              style={{ width: '400px' }}
            />
          )}
        />
        <IconButton onClick={handleSearch}>
          <SearchIcon sx={{ color: 'action.active', ml: 1.5 }} />
        </IconButton>
      </div>

      {showCard && selectedTest && (
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
              top: '120%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '75%',
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
                padding: '0px 20px',
              }}
              size="large"
            >
              <CardContent>
                <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                  {selectedTest?.name}
                </Typography>
                <Typography variant="body1">
                  {selectedTest && (
                    <ul style={{ listStyleType: 'circle', padding: 0 }}>
                      <li><strong>Test ID:</strong> {selectedTest?.id}</li>
                      <li><strong>Test Name:</strong> {selectedTest?.name}</li>
                      <li><strong>Test Description:</strong> <br/>{selectedTest?.description}</li>
                      <li><strong>Default Range:</strong> {"("+selectedTest?.min+" - "+selectedTest?.max+")"}</li>
                      <li><strong>Test Price:</strong> {"LKR "+selectedTest?.price}</li>
                    </ul>
                  )}              
                </Typography>
                <Typography >
                    <button style={{ backgroundColor: '#D9D9D9', color: 'black', padding: '5px 10px', borderRadius: '7px' ,width :"80px"}}>Edit</button>
                </Typography>
              </CardContent>
            </Card>
          </div>
        </>
      )}
    </div>
  );
}
