import { Button, Grid, Typography, TextField, FormControl, InputLabel, Select, MenuItem, Snackbar } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";

const TestResultForm = ({ testresult, updateResults, submitted, data, isEdit }) => {
    const [id, setId] = useState('');
    const [uid, setUid] = useState('');
    const [nm, setNm] = useState('');
    const [testtype, setTesttype] = useState('');
    const [tr, setTr] = useState('');
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
            setNm(data.nm);
            setUid(data.uid);
            setTesttype(data.testtype);
            setTr(data.tr);
        }
    }, [data]);
    
    const validateForm = () => {
        let tempErrors = {};
        tempErrors.id = id ? '' : 'ID is required.';
        tempErrors.uid = uid ? '' : 'ID is required.';
        tempErrors.nm = nm ? '' : 'Name is required.';
        tempErrors.testtype = testtype ? '' : 'Test is required.';
        tempErrors.tr = tr ? '' : 'Test result is required.';
        setErrors(tempErrors);
        return Object.values(tempErrors).every(x => x === "");
    };

    const handleSubmit = (actionFunc, successMessage) => {
        if (validateForm()) {
            actionFunc({
                id,
                uid,
                nm,
                testtype,
                tr,
            });
            handleSnackbarOpen(successMessage);
            resetForm();
        }
    };

    const resetForm = () => {
        setId('');
        setUid('');
        setNm('');
        setTesttype('');
        setTr('');
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
                   Enter Test Results
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="Patient ID"
                    variant="outlined"
                    value={uid}
                    onChange={(e) => setUid(e.target.value)}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="Name"
                    variant="outlined"
                    value={nm}
                    onChange={(e) => setNm(e.target.value)}
                    error={!!errors.nm}
                    helperText={errors.nm}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="Appointment ID"
                    variant="outlined"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
            </Grid>
            <Grid item xs={12}sm={6}>
                <TextField
                    fullWidth
                    label="Test"
                    variant="outlined"
                    value={testtype}
                    onChange={(e) => setTesttype(e.target.value)}
                    error={!!errors.testtype}
                    helperText={errors.testtype}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    label="Test Result"
                    variant="outlined"
                    value={tr}
                    onChange={(e) => setTr(e.target.value)}
                    error={!!errors.tr}
                    helperText={errors.tr}
                />
            </Grid>
            <Grid item xs={12}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleSubmit(isEdit ? updateResults : testresult, isEdit ? 'Test result updated successfully' : 'Test result added successfully')}
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
};

export default TestResultForm;
