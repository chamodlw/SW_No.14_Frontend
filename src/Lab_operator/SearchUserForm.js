import React, { useState } from 'react';
import { TextField, Button, Box } from "@mui/material";

const SearchUserForm = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
            <TextField
                id="search"
                label="Search Users"
                fullWidth
                value={searchTerm}
                onChange={handleSearch}
                sx={{ backgroundColor: '#fff', borderRadius: 1, mr: 2 }}
            />
            <Button
                variant="contained"
                onClick={() => onSearch(searchTerm)}
                sx={{ backgroundColor: '#00796b', color: '#fff', '&:hover': { backgroundColor: '#004d40' } }}
            >
                Search
            </Button>
        </Box>
    );
};

export default SearchUserForm;
