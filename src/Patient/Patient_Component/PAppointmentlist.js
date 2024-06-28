import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {jwtDecode} from 'jwt-decode';

const columns = [
  { id: 'id', label: 'Report ID', minWidth: 170 },
  { id: 'regdate', label: 'Registered Date', minWidth: 100, format: (value) => value.slice(0, 10) },
  { id: 'state', label: 'Current State', minWidth: 170, align: 'right' }
];

export default function StickyHeadTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3100/api/appointments')
      .then(response => {
        console.log('Response data:', response.data);
        const responseData = response.data && response.data.response; // Accessing the 'response' key
        if (Array.isArray(responseData)) {
          // Filter the responseData based on pid
          const filteredData = responseData.filter(row => row.pid === jwtDecode(localStorage.getItem("myToken")).id);
          setRows(filteredData);
          console.log('Data is an array. Setting rows.');
        } else {
          console.error('Data received is not an array:', responseData);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '80%', overflow: 'hidden', margin: 'auto', textAlign: 'center' }}>
      <TableContainer sx={{ maxHeight: 420, minHeight: 390 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, fontWeight: 'bold', backgroundColor: '#D9D9D9' }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.id === 'id' ? (
                            <a href={`/Reportpreview/${value}`} style={{ textDecoration: 'underline', color: '#101754' }}>
                              {value}
                            </a>
                          ) : (
                            column.format && typeof value === 'string'
                              ? column.format(value)
                              : value
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        style={{ backgroundColor: '#D9D9D9' }}
        rowsPerPageOptions={[5, 10, 25, 100]}
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
