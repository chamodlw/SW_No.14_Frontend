//Patientlist.js
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useState,useEffect,setRows } from 'react';
import axios from 'axios'; 

const columns = [
  { id: 'nationalID', label: 'nationalID', minWidth: 170 },
  { id: 'fullname', label: 'fullname', minWidth: 100 },
  {
    id: 'username',
    label: 'username',
    minWidth: 170,
    align: 'right',
  }
  
  
];



function StickyHeadTable() {
  
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3100/api/users')
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

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '80%', overflow: 'hidden', margin: 'auto', textAlign: 'center' }}>
      <TableContainer sx={{ maxHeight: 400 , minHeight:300}}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead >
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth , fontWeight: 'bold' , backgroundColor:'#D9D9D9'}}
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
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
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
        style={{ backgroundColor:'#D9D9D9' }}
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
 
export default StickyHeadTable;

