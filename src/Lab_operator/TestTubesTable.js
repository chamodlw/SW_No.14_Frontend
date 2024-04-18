import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Paper } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

const TestTubesTable = ({ rows, selectedTestTube, deleteTestTube }) => {
const handleEditTube = (tubeId, tubeType, description, expireDate, location) => {
    // Pass individual attributes to the selectedTestTube function
    selectedTestTube({ tube_id: tubeId, tube_type: tubeType, description: description, expire_date: expireDate, location: location });
};
    

    const handleDeleteTube = (id) => {
        console.log(`Deleting tube with ID ${id}`);
    };

    return (
        <TableContainer component={Paper} sx={{ marginTop: '50px' }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Tube ID</TableCell>
                        <TableCell>Tube Type</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Expiration Date</TableCell>
                        <TableCell>Location</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows && rows.map((row) => (
                        <TableRow key={row._id}>
                            <TableCell>{row.tube_id}</TableCell>
                            <TableCell>{row.tube_type}</TableCell>
                            <TableCell>{row.description}</TableCell>
                            <TableCell>{row.expire_date}</TableCell>
                            <TableCell>{row.location}</TableCell>
                            <TableCell>
                                <IconButton
                                    color="primary"
                                    onClick={() => handleEditTube(row.tube_id, row.tube_type, row.description, row.expire_date, row.location)}
                                    style={{ marginRight: '10px' }}
                                >
                                    <Edit />
                                </IconButton>
                                <IconButton
                                    color="secondary"
                                    onClick={() => window.confirm('Are you sure?') && deleteTestTube({ tube_id: row.tube_id })}
                                >
                                    <Delete /> 
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TestTubesTable;
