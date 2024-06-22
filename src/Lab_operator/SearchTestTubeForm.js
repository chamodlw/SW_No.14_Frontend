// src/Lab_operator/SearchTestTubeForm.js

import React, { useState } from 'react';
import { TextField, Button } from "@mui/material";

const SearchTestTubeForm = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <div style={{ padding: '20px' }}>
            <TextField
                id="search"
                label="Search Test Tubes"
                fullWidth
                value={searchTerm}
                onChange={handleSearch}
                sx={{ mb: 2 }}
            />
            <Button
                variant="contained"
                onClick={() => onSearch(searchTerm)}
                sx={{ backgroundColor: '#00c6e6', color: '#ffffff', '&:hover': { backgroundColor: '#0099b8' } }}
            >
                Search
            </Button>
        </div>
    );
};

export default SearchTestTubeForm;
