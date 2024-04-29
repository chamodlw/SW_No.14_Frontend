import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import axios, { Axios } from 'axios';


const Users=() =>{
  const [users,setUsera]=useState([]);

useEffect(()=>{getUsers();},[])

  const getUsers=()=>{
    Axios.get('http://localhost:3001/api/userss')
    .then(Response=>{console.log(Response);})
  }
}

const MyTable = ({ data }) => {
  const handleGenerate = (reportID) => {
    // Handle the generate action here
    console.log(`Generating report for ReportID: ${reportID}`);
  };

  return (
    <TableContainer sx={{display: 'flex', padding:'100px' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ReportID</TableCell>
            <TableCell>NationalID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Genarate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.reportID}>

              <TableCell>{row.reportID}</TableCell>
              <TableCell>{row.NationalID}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>
                <Link to="/LabReportUI"><Button variant="contained" color="primary" onClick={() => handleGenerate(row.reportID)}>
                Genarate
                </Button></Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

// Hard-coded sample data


const Report = () => {
 
const sampleData = [
  { reportID: 1, name: 'John Doe' ,NationalID:'123'},
  { reportID: 2, name: 'Jane Smith',NationalID:'3' },
  { reportID: 3, name: 'Alice Johnson',NationalID:'13' },
];
  useEffect(()=>{
   axios.get('http://localhost:3001/api/users')
   .then((response)=>{
    const data=response.data;
     console.log(response.data);
   })
  },[]);
  return (
    <div>
     
      <MyTable data={sampleData} />
    </div>
  );
};

export default Report;
