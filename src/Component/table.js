import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';
// import { Link } from 'react-router-dom';
import axios from 'axios';
// import { render } from '@testing-library/react';
// import { RecordVoiceOver } from '@mui/icons-material';





// record function to render the record


const Record = (props) => (
  <TableRow>
    <TableCell>{props.record._id} </TableCell>
    <TableCell>{props.record.nationalID}</TableCell>
    <TableCell>{props.record.fullname}</TableCell>
    <TableCell>
      <Button variant="contained" color="primary">
        Generate
      </Button>
    </TableCell>
  </TableRow>
);


export default function RecordeList() {
  const [records, setRecords] = useState([]);

  // get the records from the database


    useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:3101/users`);
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
      const records = await response.json();
      setRecords(records.response);
    }
    getRecords();
    return;
  }, [records.length]);




  // get individual record and map for render

  function RenderRecordList() {
    return records.map((record)=>{
return(
  <Record
  record = {record} />
)
    })
  }


// render the list of records

  return (
    <TableContainer sx={{display: 'flex', padding:'100px' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ReportID </TableCell>
            <TableCell>NationalID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Genarate</TableCell>
          </TableRow>
        </TableHead>


        <TableBody>
        {RenderRecordList()}
      
        </TableBody>
      </Table>
    </TableContainer>
  );
};

// Hard-coded sample data




