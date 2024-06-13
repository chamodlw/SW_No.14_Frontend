// Testlist.js
import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import axios from 'axios'; // Import axios for making HTTP requests

const columns = [
  { id: 'id', label: 'id', minWidth: 170 },
  { id: 'name', label: 'name', minWidth: 100 },
  { id: 'description', label: 'description', minWidth: 170, align: 'right' }
];

export default function StickyHeadTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows, setRows] = useState([]);


  useEffect(() => {
    axios.get('http://localhost:3100/api/tests')
      .then(response => {
        console.log('Response data:', response.data);
        const responseData = response.data && response.data.response; // Accessing the 'response' key
        if (Array.isArray(responseData)) {
          setRows(responseData);
          console.log('Data is an array. Setting rows.');
        } else {
          console.error('Data received is not an array:', responseData);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  
  
   // Empty dependency array ensures useEffect runs only once on mount
  

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '80%', overflow: 'hidden', margin: 'auto', textAlign: 'center' }}>
      <TableContainer sx={{ maxHeight: 420 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth , fontWeight: 'bold' }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
  {rows.map((row, index) => (
    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
      {columns.map((column) => {
        const value = row[column.id]; // Accessing the value based on column id
        return (
          <TableCell key={column.id} align={column.align}>
            {value}
          </TableCell>
        );
      })}
    </TableRow>
  ))}
</TableBody>

        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5,10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
