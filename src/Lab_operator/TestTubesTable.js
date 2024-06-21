// src/Lab_operator/TestTubesTable.js

import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon, PictureAsPdf as PictureAsPdfIcon } from '@mui/icons-material';

const TestTubesTable = ({ rows, selectedTestTube, deleteTestTube, generatePDF }) => {
    return (
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
                                <IconButton onClick={() => selectedTestTube(row)}>
                                    <EditIcon />
                                </IconButton>
                                <IconButton onClick={() => deleteTestTube(row)}>
                                    <DeleteIcon />
                                </IconButton>
                                <IconButton onClick={() => generatePDF(row)}>
                                    <PictureAsPdfIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TestTubesTable;
