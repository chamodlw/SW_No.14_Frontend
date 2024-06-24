import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
import { Card, CardContent, Typography, Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import axios from 'axios';

export default function Appointmentsearch({ rows }) {
  const [searchValue, setSearchValue] = useState('');
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [showCard, setShowCard] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedBillvalue, setEditedBillvalue] = useState('');

  const handleSearch = () => {
    if (selectedAppointment) {
      console.log(selectedAppointment);
      setShowCard(true);
      setShowOverlay(true);
    }
    console.log("appointment is " + JSON.stringify(rows));
  };

  const handleCloseCard = () => {
    setShowCard(false);
    setShowOverlay(false);
    setSelectedAppointment(null);
    setIsEditing(false);
    setEditedBillvalue('');
  };

  const handleEditClick = () => {
    setIsEditing(true);
    setEditedBillvalue(selectedAppointment?.billvalue);
  };

  const handleSaveClick = () => {
    // Update the price of the selected test (assuming `rows` can be updated)
    const updatedRows = rows.map(row =>
      row.id === selectedAppointment.id ? { ...row, billvalue: editedBillvalue } : row
    );
    setSelectedAppointment({ ...selectedAppointment, billvalue: editedBillvalue });
    setIsEditing(false);
    console.log("Updated rows: ", updatedRows);
    console.log("new billvalue " + editedBillvalue);
    axios.post('http://localhost:3100/api/updateappointment', { id: selectedAppointment.id, billvalue: editedBillvalue })
      .then(response => {
        // Handle the response if needed
        console.log(response.data);
        // Update the selectedTest price
        setSelectedAppointment({ ...selectedAppointment, billvalue: editedBillvalue });
      })
      .catch(error => {
        // Handle the error if needed
        console.error(error);
      });
    // You might need to update the rows in the parent component or state if required
  };

return (
    <div style={{ position: 'relative', width: '50%', margin: '0 auto', paddingBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Autocomplete
                freeSolo
                options={rows}
                getOptionLabel={(row) => row?.id ? 'App.No. '+String(row.id) + ' - ' + row?.pname : ''}
                filterOptions={(options, { inputValue }) =>
                    options.filter((option) =>
                        String(option?.id)?.includes(inputValue) || option?.pname?.toLowerCase().includes(inputValue.toLowerCase())
                    )
                }
                onInputChange={(event, newValue) => setSearchValue(newValue)}
                onChange={(event, value) => setSelectedAppointment(value)}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Search for Appointments"
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

        {showCard && selectedAppointment && (
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
                        top: '160%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '90%',
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
                                {"Appointment No." + selectedAppointment?.id +" : "+selectedAppointment?.pname}
                            </Typography>
                            <Typography variant="body1">
                                {selectedAppointment && (
                                    <ul style={{ listStyleType: 'circle', padding: 0 }}>
                                        <li><strong>Appointment ID:</strong> {selectedAppointment?.id}</li>
                                        <li><strong>Patient Name:</strong> {selectedAppointment?.pname}</li>
                                        <li><strong>Patient ID:</strong> <br />{selectedAppointment?.pid}</li>
                                        <li><strong>Blood Tests:</strong> <br />{selectedAppointment?.selectTests.map(test => <ul>{test.testName}</ul>)}</li>
                                        <li><strong>Registered Date:</strong> <br />{selectedAppointment?.regdate.slice(0, 10)}</li>
                                        <li><strong>Appointment Current State:</strong> {selectedAppointment?.state}</li>
                                        <li>
                                            <strong>Appointment Billvalue:</strong>
                                            {isEditing ? (
                                                <TextField
                                                    value={editedBillvalue}
                                                    onChange={(e) => setEditedBillvalue(e.target.value)}
                                                    variant="outlined"
                                                    size="small"
                                                    sx={{ marginLeft: 1 }}
                                                />
                                            ) : (
                                                " LKR " + selectedAppointment?.billvalue
                                            )}
                                        </li>
                                    </ul>
                                )}
                            </Typography>
                            <Typography>
                                {isEditing ? (
                                    <div>
                                        <Button
                                            onClick={handleSaveClick}
                                            sx={{ backgroundColor: '#101754', color: 'white', padding: '5px 10px', borderRadius: '7px', width: '80px', marginRight: '10px' }}
                                        >
                                            Save
                                        </Button>
                                        <Button
                                            onClick={() => setIsEditing(false)}
                                            sx={{ backgroundColor: 'grey', color: 'white', padding: '5px 10px', borderRadius: '7px', width: '80px' }}
                                        >
                                            Cancel
                                        </Button>
                                    </div>
                                ) : (
                                    <Button
                                        onClick={handleEditClick}
                                        sx={{ backgroundColor: '#D9D9D9', color: 'black', padding: '5px 10px', borderRadius: '7px', width: '80px' }}
                                    >
                                        Edit
                                    </Button>
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
