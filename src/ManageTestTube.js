import React from 'react';
import { Box } from "@mui/material";
import TestTubesTable from './TestTubesTable';
import Head from "./Head"; 
import Footer from './Footer';

const Users = () => {
    return (
        <Box>
            <Head />
            <TestTubesTable />
            <Footer />
        </Box>
    );
}

export default Users;
