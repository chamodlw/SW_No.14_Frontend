import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Paper, Typography, Box } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon, PictureAsPdf as PictureAsPdfIcon } from '@mui/icons-material';

const TestTubesTable = ({ rows, selectedTestTube, deleteTestTube, generatePDF }) => {
    return (
        <Paper elevation={3} sx={{ padding: 4, marginTop: 4 }}>
            <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                <Typography variant="h5">Test Tubes</Typography>
            </Box>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Tube Type</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Expiration Date</TableCell>
                            <TableCell>Location</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row._id}>
                                <TableCell>{row.tube_type}</TableCell>
                                <TableCell>{row.description}</TableCell>
                                <TableCell>{row.expire_date}</TableCell>
                                <TableCell>{row.location}</TableCell>
                                <TableCell>
                                    <IconButton
                                        onClick={() => selectedTestTube(row)}
                                        sx={{
                                            color: 'blue',
                                            '&:hover': {
                                                backgroundColor: 'rgba(0, 0, 255, 0.1)',
                                            },
                                        }}
                                    >
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton
                                        onClick={() => window.confirm('Are you sure?') && deleteTestTube(row)}
                                        sx={{
                                            color: 'red',
                                            '&:hover': {
                                                backgroundColor: 'rgba(255, 0, 0, 0.1)',
                                            },
                                        }}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                    <IconButton
                                        onClick={() => generatePDF(row)}
                                        sx={{
                                            color: 'green',
                                            '&:hover': {
                                                backgroundColor: 'rgba(0, 255, 0, 0.1)',
                                            },
                                        }}
                                    >
                                        <PictureAsPdfIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
};

export default TestTubesTable;
