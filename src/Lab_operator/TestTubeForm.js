import React, { useEffect, useState } from 'react';
import { Grid, Typography, TextField, Button } from "@mui/material";

const TestTubeForm = ({ addTestTube, updateTestTube, data, isEdit }) => {

    const [tubeId, setTubeId] = useState('');
    const [tubeType, setTubeType] = useState('');
    const [description, setDescription] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [location, setLocation] = useState('');

    useEffect(() => {
        if (data?.tubeId && data.tubeId !== 0) {
            setTubeId(data.tubeId);
            setTubeType(data.tubeType);
            setDescription(data.description);
            setExpirationDate(data.expirationDate);
            setLocation(data.location);
        }
    }, [data]);

    const handleSubmit = (event) => {
        event.preventDefault();
        
        // Call addTestTube function with form data
        addTestTube({ 
            tube_id: tubeId, 
            tube_type: tubeType, 
            description: description, 
            expire_date: expirationDate, 
            location: location 
        });

        // Clear form data after submission
        setTubeId('');
        setTubeType('');
        setDescription('');
        setExpirationDate('');
        setLocation('');
    };

    return (
        <Grid container spacing={2} sx={{ backgroundColor: '#ffffff', margin: '30px', padding: '20px' }}>
            <Grid item xs={12}>
                <Typography variant="h6" sx={{ color: '#000000' }}>Register Test Tube</Typography>
            </Grid>
            <Grid item xs={12}>
                <form onSubmit={handleSubmit}>
                    <TextField
                        id="tubeId"
                        name="tubeId"
                        label="Tube ID"
                        fullWidth
                        required
                        value={tubeId}
                        onChange={(e) => setTubeId(e.target.value)}
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        id="tubeType"
                        name="tubeType"
                        label="Tube Type"
                        fullWidth
                        required
                        value={tubeType}
                        onChange={(e) => setTubeType(e.target.value)}
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        id="description"
                        name="description"
                        label="Description"
                        fullWidth
                        multiline
                        rows={4}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        id="expirationDate"
                        name="expirationDate"
                        label="Expiration Date"
                        type="date"
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={expirationDate}
                        onChange={(e) => setExpirationDate(e.target.value)}
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        id="location"
                        name="location"
                        label="Location"
                        fullWidth
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        sx={{ mb: 2 }}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{
                            backgroundColor: '#00c6e6',
                            color: '#ffffff',
                            '&:hover': {
                                backgroundColor: '#0099b8',
                            },
                        }}

                        onClick={() => {
                            isEdit ? updateTestTube({ 
                                tube_id: tubeId, 
                                tube_type: tubeType, 
                                description: description, 
                                expire_date: expirationDate, 
                                location: location 
                            }) :
                            addTestTube({ 
                                tube_id: tubeId, 
                                tube_type: tubeType, 
                                description: description, 
                                expire_date: expirationDate, 
                                location: location 
                            });
                        }}
                    >
                        
                        {
                            isEdit ? 'Update' : 'Register'
                        }   

                    </Button>
                </form>
            </Grid>
        </Grid>
    );
};

export default TestTubeForm;
