import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Paper } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

const UsersTable = ({ rows, selectedUser, deleteUser }) => {
    // Sample dummy data
    // const users = [
    //     { id: 1, name: 'John Doe', test: 'Test 1', testTubes: ['Tube 1', 'Tube 2'], bloodType: 'A+' },
    //     { id: 2, name: 'Jane Smith', test: 'Test 2', testTubes: ['Tube 2', 'Tube 3'], bloodType: 'B-' },
    //     { id: 3, name: 'Alice Johnson', test: 'Test 3', testTubes: ['Tube 1', 'Tube 3'], bloodType: 'O+' },
    // ];

    const handleEditUser = (id) => {
        // Implement edit user functionality here
        console.log(`Editing user with ID ${id}`);
    };

    const handleDeleteUser = (id) => {
        // Implement delete user functionality here
        console.log(`Deleting user with ID ${id}`);
    };

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Test</TableCell>
                        <TableCell>Test Tubes</TableCell>
                        <TableCell>Blood Type</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        rows.length > 0 ? rows.map(row => (
                            <TableRow key={row.id}>
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.test}</TableCell>
                                <TableCell>{row.test_tubes}</TableCell>
                                <TableCell>{row.blood_type}</TableCell>
                                <TableCell>
                                    <IconButton
                                        color="primary"
                                        onClick={() => 
                                            selectedUser(
                                                {
                                                    id: row.id, 
                                                    name: row.name,
                                                    test: row.test,
                                                    test_tubes: row.test_tubes,
                                                    blood_type: row.blood_type,
                                                }
                                            )} // Fix here: changed user.id to row.id
                                        style={{ marginRight: '10px' }}
                                    >
                                        <Edit />
                                    </IconButton>
                                    <IconButton
                                        color="secondary"
                                        onClick={() => window.confirm('Are you sure?') && deleteUser({ id: row.id })}
                                    >
                                        <Delete />
                                    </IconButton>

                                </TableCell>
                            </TableRow>
                        )) : null // Added a null check to handle the case where rows.length is 0
                    }
                </TableBody>

            </Table>
        </TableContainer>
    );
}

export default UsersTable;
