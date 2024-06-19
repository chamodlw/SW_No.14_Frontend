//SelectTable.js
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const SelectTable = ({ tests }) => {
  return (
    <TableContainer component={Paper} sx={{ marginTop: '20px' }}>
      <Table aria-label="simple table" sx={{ minWidth: 650 }}>
      <TableHead sx={{ backgroundColor: '#101754'}}>
  <TableRow>
    <TableCell sx={{  color: '#FFFFFF' }}>ID</TableCell>
    <TableCell sx={{  color: '#FFFFFF' }}>Name</TableCell>
    <TableCell sx={{  color: '#FFFFFF' }}>Description</TableCell>
  </TableRow>
</TableHead>


        <TableBody>
          {tests.map((test) => (
            <TableRow key={test.id}>
              <TableCell>{test.id}</TableCell>
              <TableCell>{test.name}</TableCell>
              <TableCell>{test.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};


export default SelectTable;

