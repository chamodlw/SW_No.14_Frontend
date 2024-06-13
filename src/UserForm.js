import { Button, Grid, Typography, Input, Checkbox, FormControlLabel, TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";

const UserForm = ({ addUser, updateUser, submitted, data, isEdit }) => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [test, setTest] = useState('');
    const [testTubes, setTestTubes] = useState([]);
    const [bloodType, setBloodType] = useState('');
    const [selectedTube, setSelectedTube] = useState('');

    useEffect(() => {
        if (!submitted){
            setId(0);
            setName('');
            setTest('');
            setBloodType('');
            setSelectedTube('');

        }
    }, [submitted]);

    useEffect(() => {
        if (data?.id && data.id !== 0) {
            setId(data.id);
            setName(data.name);
            setTest(data.test);
            setBloodType(data.test_tubes);
            setSelectedTube(data.blood_type);
        }
    }, [data]);

    useEffect(() => {
        fetchTestTubes();
    }, []);

    const fetchTestTubes = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/test_tubes');
            setTestTubes(response.data.response);
            console.log('Test tubes:', response.data.response);
        } catch (error) {
            console.error('Error fetching test tubes:', error);
        }
    };
    

    const handleIdChange = (e) => {
        setId(e.target.value);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleTestChange = (e) => {
        setTest(e.target.value);
    };

    const handleTubeChange = (e) => {
        setSelectedTube(e.target.value);
    };

    const handleBloodTypeChange = (e) => {
        setBloodType(e.target.value);
    };

    const handleSubmit = () => {
        setId('');
        setName('');
        setTest('');
        setBloodType('');
        setSelectedTube('');
    };

    return (
        <Grid
            container
            spacing={2}
            sx={{
                backgroundColor: '#f0f0f0',
                padding: '30px',
            }}
        >
            <Grid item xs={12}>
                <Typography variant="h4" sx={{ color: '#333333', marginTop: '20px' }}>
                    Blood Testing Application
                </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="ID"
                    variant="outlined"
                    value={id}
                    onChange={handleIdChange}
                />
            </Grid>

            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="Name"
                    variant="outlined"
                    value={name}
                    onChange={handleNameChange}
                />
            </Grid>

            <Grid item xs={12}>
                <TextField
                    fullWidth
                    label="Test"
                    variant="outlined"
                    value={test}
                    onChange={handleTestChange}
                />
            </Grid>

            <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                    <InputLabel>Test Tube</InputLabel>
                    <Select
                        value={selectedTube}
                        onChange={(e) => setSelectedTube(e.target.value)}
                        label="Test Tube"
                    >
                        {testTubes.map((tube) => (
                            <MenuItem key={tube.tube_id} value={tube.tube_type}>{tube.tube_type}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined">
                    <InputLabel>Blood Type</InputLabel>
                    <Select
                        value={bloodType}
                        onChange={handleBloodTypeChange}
                        label="Blood Type"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value="A+">A+</MenuItem>
                        <MenuItem value="A-">A-</MenuItem>
                        <MenuItem value="B+">B+</MenuItem>
                        <MenuItem value="B-">B-</MenuItem>
                        <MenuItem value="AB+">AB+</MenuItem>
                        <MenuItem value="AB-">AB-</MenuItem>
                        <MenuItem value="O+">O+</MenuItem>
                        <MenuItem value="O-">O-</MenuItem>
                    </Select>
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
                    onClick={() => {
                        handleSubmit();
                        isEdit ? updateUser({ 
                            id, 
                            name, 
                            test, 
                            test_tubes: selectedTube, // Convert array to string
                            blood_type: bloodType 
                        }) :
                        addUser({ 
                            id, 
                            name, 
                            test, 
                            test_tubes: selectedTube, // Convert array to string
                            blood_type: bloodType 
                        });
                    }}
                >
                    {
                        isEdit ? 'Update' : 'Add'
                    }
                </Button>


            </Grid>


        </Grid>
    );
}

export default UserForm;