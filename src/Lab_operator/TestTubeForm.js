import React, { useEffect, useState } from 'react';
import { Grid, Typography, TextField, Button, Snackbar } from "@mui/material";

const TestTubeForm = ({ addTestTube, updateTestTube, data = {}, isEdit }) => {
    const [tubeId, setTubeId] = useState('');
    const [tubeType, setTubeType] = useState('');
    const [description, setDescription] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [location, setLocation] = useState('');
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (isEdit && data) {
            setTubeId(data.tube_id || '');
            setTubeType(data.tube_type || '');
            setDescription(data.description || '');
            setLocation(data.location || '');
            setExpirationDate(data.expire_date ? new Date(data.expire_date).toISOString().split('T')[0] : '');
        }
    }, [data, isEdit]);

    const validate = () => {
        let tempErrors = {};
        tempErrors.tubeId = tubeId ? '' : 'Tube ID is required.';
        tempErrors.tubeType = tubeType ? '' : 'Tube Type is required.';
        tempErrors.description = description.length >= 10 ? '' : 'Description must be at least 10 characters long.';
        tempErrors.expirationDate = expirationDate ? '' : 'Expiration Date is required.';
        tempErrors.location = location ? '' : 'Location is required.';
        setErrors(tempErrors);
        
        return Object.keys(tempErrors).every(key => !tempErrors[key]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!validate()) return;

        const formData = { tube_id: tubeId, tube_type: tubeType, description, expire_date: expirationDate, location };
        if (isEdit) {
            updateTestTube(formData);
        } else {
            addTestTube(formData);
        }

        setSnackbarMessage(isEdit ? 'Test tube was successfully updated' : 'Test tube was successfully registered');
        setSnackbarOpen(true);

        if (!isEdit) {
            setTubeId('');
            setTubeType('');
            setDescription('');
            setExpirationDate('');
            setLocation('');
        }
    };

    return (
        <Grid container spacing={2} sx={{ backgroundColor: '#ffffff', margin: '30px', padding: '20px' }}>
            <Grid item xs={12}>
                <Typography variant="h6" sx={{ color: '#000000', marginTop: '100px' }}>
                    {isEdit ? 'Update Test Tube' : 'Register Test Tube'}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <form onSubmit={handleSubmit}>
                    <TextField
                        id="tubeId"
                        label="Tube ID"
                        fullWidth
                        value={tubeId}
                        onChange={(e) => setTubeId(e.target.value)}
                        error={Boolean(errors.tubeId)}
                        helperText={errors.tubeId}
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        id="tubeType"
                        label="Tube Type"
                        fullWidth
                        value={tubeType}
                        onChange={(e) => setTubeType(e.target.value)}
                        error={Boolean(errors.tubeType)}
                        helperText={errors.tubeType}
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        id="description"
                        label="Description"
                        fullWidth
                        multiline
                        rows={4}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        error={Boolean(errors.description)}
                        helperText={errors.description}
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        id="expirationDate"
                        label="Expiration Date"
                        type="date"
                        fullWidth
                        InputLabelProps={{ shrink: true }}
                        value={expirationDate}
                        onChange={(e) => setExpirationDate(e.target.value)}
                        error={Boolean(errors.expirationDate)}
                        helperText={errors.expirationDate}
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        id="location"
                        label="Location"
                        fullWidth
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        error={Boolean(errors.location)}
                        helperText={errors.location}
                        sx={{ mb: 2 }}
                    />

                    <Button
                        type="submit"
                        disabled={Object.keys(errors).some(key => errors[key])}
                        variant="contained"
                        sx={{ backgroundColor: '#00c6e6', color: '#ffffff', '&:hover': { backgroundColor: '#0099b8' } }}
                    >
                        {isEdit ? 'Update' : 'Register'}
                    </Button>
                </form>
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
};

export default TestTubeForm;
