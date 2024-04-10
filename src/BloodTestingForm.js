import React from 'react';
import { Grid, Typography, TextField, Button } from "@mui/material";

const BloodTestingForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission
    };

    return (
        <Grid container spacing={2} sx={{ backgroundColor: '#ffffff', margin: '30px', padding: '20px' }}>
            <Grid item xs={12}>
                <Typography variant="h6" sx={{ color: '#000000' }}>Add Blood Testing Result</Typography>
            </Grid>
            <Grid item xs={12}>
                <form onSubmit={handleSubmit}>
                    <TextField
                        id="patientId"
                        name="patientId"
                        label="Patient ID"
                        fullWidth
                        required
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        id="testType"
                        name="testType"
                        label="Test Type"
                        fullWidth
                        required
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        id="result"
                        name="result"
                        label="Result"
                        fullWidth
                        multiline
                        rows={4}
                        required
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        id="testDate"
                        name="testDate"
                        label="Test Date"
                        type="date"
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        id="labassistant"
                        name="labassistant"
                        label="Lab Assistant"
                        fullWidth
                        required
                        sx={{ mb: 2 }}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                    >
                        Add Result
                    </Button>
                </form>
            </Grid>
        </Grid>
    );
};

export default BloodTestingForm;
