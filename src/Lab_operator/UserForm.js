import { Button, Grid, Typography, TextField, FormControl, InputLabel, Select, MenuItem, Snackbar } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";

const UserForm = ({ addUser, updateUser, submitted, data, isEdit }) => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [test, setTest] = useState('');
    const [testTubes, setTestTubes] = useState([]);
    const [bloodType, setBloodType] = useState('');
    const [selectedTube, setSelectedTube] = useState('');
    const [testTubeId, setTestTubeId] = useState('');
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (!submitted) {
            resetForm();
        }
    }, [submitted]);

    useEffect(() => {
        if (data?.id && data.id !== 0) {
            setId(data.id.toString());
            setName(data.name);
            setTest(data.test);
            setBloodType(data.blood_type);
            setSelectedTube(data.test_tubes);
            setTestTubeId(data.test_tube_id);
        }
    }, [data]);

    useEffect(() => {
        fetchTestTubes();
    }, []);

    const fetchTestTubes = async () => {
        try {
            const response = await axios.get('http://localhost:3100/api/test_tubes');
            setTestTubes(response.data.response || []);
        } catch (error) {
            console.error('Error fetching test tubes:', error);
        }
    };


    const validateForm = () => {
        let tempErrors = {};
        tempErrors.name = name ? '' : 'Name is required.';
        tempErrors.test = test ? '' : 'Test is required.';
        tempErrors.selectedTube = selectedTube ? '' : 'Test tube selection is required.';
        tempErrors.bloodType = bloodType ? '' : 'Blood type is required.';
        tempErrors.testTubeId = testTubeId.length >= 4 ? '' : 'Test Tube ID must be at least 4 characters long.';
        setErrors(tempErrors);
        return Object.values(tempErrors).every(x => x === "");
    };

    const handleSubmit = (actionFunc, successMessage) => {
        if (validateForm()) {
            actionFunc({
                id, 
                name, 
                test, 
                test_tubes: selectedTube, 
                test_tube_id: testTubeId,
                blood_type: bloodType 
            });
            handleSnackbarOpen(successMessage);
            resetForm();
        }
    };

    const resetForm = () => {
        setId('');
        setName('');
        setTest('');
        setBloodType('');
        setSelectedTube('');
        setTestTubeId('');
        setErrors({});
    };

    const handleSnackbarOpen = (message) => {
        setSnackbarMessage(message);
        setSnackbarOpen(true);
    };

    return (
        <Grid container spacing={2} sx={{ backgroundColor: '#f0f0f0', padding: '30px' }}>
            <Grid item xs={12}>
                <Typography variant="h4" sx={{ color: '#333333', marginTop: '100px' }}>
                    Blood Testing Application
                </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="ID"
                    variant="outlined"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
            </Grid>

            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="Name"
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    error={!!errors.name}
                    helperText={errors.name}
                />
            </Grid>

            <Grid item xs={12}>
                <TextField
                    fullWidth
                    label="Test"
                    variant="outlined"
                    value={test}
                    onChange={(e) => setTest(e.target.value)}
                    error={!!errors.test}
                    helperText={errors.test}
                />
            </Grid>

            <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                    <InputLabel>Test Tube</InputLabel>
                    <Select
                        value={selectedTube}
                        onChange={(e) => setSelectedTube(e.target.value)}
                        label="Test Tube"
                        error={!!errors.selectedTube}
                    >
                        {testTubes.map((tube) => (
                            <MenuItem key={tube._id} value={tube.tube_type}>{tube.tube_type}</MenuItem>
                        ))}
                    </Select>
                    <Typography variant="caption" color="error">{errors.selectedTube}</Typography>
                </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="Test Tube ID"
                    variant="outlined"
                    value={testTubeId}
                    onChange={(e) => setTestTubeId(e.target.value)}
                    error={!!errors.testTubeId}
                    helperText={errors.testTubeId}
                />
            </Grid>


            <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined">
                    <InputLabel>Blood Type</InputLabel>
                    <Select
                        value={bloodType}
                        onChange={(e) => setBloodType(e.target.value)}
                        label="Blood Type"
                        error={!!errors.bloodType}
                    >
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value="A+">A+</MenuItem>
                        <MenuItem value="A-">A-</MenuItem>
                        <MenuItem value="B+">B+</MenuItem>
                        <MenuItem value="B-">B-</MenuItem>
                        <MenuItem value="AB+">AB+</MenuItem>
                        <MenuItem value="AB-">AB-</MenuItem>
                        <MenuItem value="O+">O+</MenuItem>
                        <MenuItem value="O-">O-</MenuItem>
                    </Select>
                    <Typography variant="caption" color="error">{errors.bloodType}</Typography>
                </FormControl>
            </Grid>

            <Grid item xs={12}>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#00c6e6',
                        color: '#ffffff',
                        '&:hover': {
                            backgroundColor: '#0099b8',
                        },
                    }}
                    onClick={() => handleSubmit(isEdit ? updateUser : addUser, isEdit ? 'The testing was successfully updated' : 'The testing was successfully added')}
                >
                    {isEdit ? 'Update' : 'Add'}
                </Button>
            </Grid>

            <Snackbar
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={() => setSnackbarOpen(false)}
                message={snackbarMessage}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                sx={{ backgroundColor: '#4caf50', color: '#ffffff' }}
            />
        </Grid>
    );
}

export default UserForm;