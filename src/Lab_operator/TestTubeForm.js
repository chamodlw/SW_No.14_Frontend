import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Typography, TextField, Button, Snackbar, Card, CardContent, CardMedia, Paper, Box } from "@mui/material";
import jsPDF from 'jspdf';

const TestTubeForm = ({ addTestTube, updateTestTube, data = {}, isEdit }) => {
    const [tubeType, setTubeType] = useState('');
    const [description, setDescription] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [manufacturer, setManufacturer] = useState('');
    const [location, setLocation] = useState('');
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [errors, setErrors] = useState({});
    const [barcode, setBarcode] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        if (isEdit && data) {
            setTubeType(data.tube_type || '');
            setDescription(data.description || '');
            setManufacturer(data.manufacturer || '');
            setLocation(data.location || '');
            setExpirationDate(data.expire_date ? new Date(data.expire_date).toISOString().split('T')[0] : '');
            setBarcode(data.barcode || '');
        }
    }, [data, isEdit]);

    const validate = () => {
        let tempErrors = {};
        tempErrors.tubeType = tubeType ? '' : 'Tube Type is required.';
        tempErrors.description = description.length >= 10 ? '' : 'Description must be at least 10 characters long.';
        tempErrors.expirationDate = expirationDate ? '' : 'Expiration Date is required.';
        tempErrors.manufacturer = manufacturer ? '' : 'Manufacturer is required.';
        tempErrors.location = location ? '' : 'Location is required.';
        setErrors(tempErrors);
        
        return Object.keys(tempErrors).every(key => !tempErrors[key]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!validate()) return;

        const formData = { tube_type: tubeType, description, expire_date: expirationDate, manufacturer, location };
        if (isEdit) {
            formData._id = data._id;
            formData.barcode = barcode; // Ensure the barcode is passed
            updateTestTube(formData);
        } else {
            addTestTube(formData)
                .then(response => {
                    setBarcode(response.barcode); // Set the barcode data
                    setSnackbarMessage('Test tube was successfully registered');
                });
        }

        setSnackbarOpen(true);

        if (!isEdit) {
            setTubeType('');
            setDescription('');
            setExpirationDate('');
            setManufacturer('');
            setLocation('');
        }
    };

    return (
        <Paper elevation={3} sx={{ padding: 4, marginTop: 4, backgroundImage: 'url(/background.jpg)', backgroundSize: 'cover' }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h4" sx={{ color: '#333' }}>
                        {isEdit ? 'Update Test Tube' : 'Register Test Tube'}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            id="tubeType"
                            label="Tube Type"
                            fullWidth
                            value={tubeType}
                            onChange={(e) => setTubeType(e.target.value)}
                            error={Boolean(errors.tubeType)}
                            helperText={errors.tubeType}
                            sx={{ mb: 2, backgroundColor: '#fff', borderRadius: 1 }}
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
                            sx={{ mb: 2, backgroundColor: '#fff', borderRadius: 1 }}
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
                            sx={{ mb: 2, backgroundColor: '#fff', borderRadius: 1 }}
                        />
                        <TextField
                            id="manufacturer"
                            label="Manufacturer"
                            fullWidth
                            value={manufacturer}
                            onChange={(e) => setManufacturer(e.target.value)}
                            error={Boolean(errors.manufacturer)}
                            helperText={errors.manufacturer}
                            sx={{ mb: 2, backgroundColor: '#fff', borderRadius: 1 }}
                        />
                        <TextField
                            id="location"
                            label="Location"
                            fullWidth
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            error={Boolean(errors.location)}
                            helperText={errors.location}
                            sx={{ mb: 2, backgroundColor: '#fff', borderRadius: 1 }}
                        />
                        <Button
                            type="submit"
                            disabled={Object.keys(errors).some(key => errors[key])}
                            variant="contained"
                            sx={{ backgroundColor: '#00796b', color: '#fff', '&:hover': { backgroundColor: '#004d40' } }}
                        >
                            {isEdit ? 'Update' : 'Register'}
                        </Button>
                    </form>
                </Grid>
                {barcode && (
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">Generated Barcode</Typography>
                                <CardMedia
                                    component="img"
                                    image={barcode}
                                    alt="Generated Barcode"
                                />
                            </CardContent>
                        </Card>
                    </Grid>
                )}
                <Snackbar
                    open={snackbarOpen}
                    autoHideDuration={6000}
                    onClose={() => setSnackbarOpen(false)}
                    message={snackbarMessage}
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    sx={{ backgroundColor: '#4caf50', color: '#fff' }}
                />
            </Grid>
        </Paper>
    );
};

export default TestTubeForm;