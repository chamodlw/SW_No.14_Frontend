
import React from 'react';
import { Typography, Paper, Container, Grid,TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import HealthLabLogo from '../images/HealthLabLogo.jpg' ;


const ReportUI = () =>{
  const data = [
    { id: 1, col1: 'Data 1', col2: 'Data 2', col3: 'Data 3', col4: 'Data 4' },
    { id: 2, col1: 'Data 5', col2: 'Data 6', col3: 'Data 7', col4: 'Data 8' },
    { id: 3, col1: 'Data 9', col2: 'Data 10', col3: 'Data 11', col4: 'Data 12' }
  ];
  
  return (
    <Container sx={{ marginTop: '20px',
      display: 'grid',
      gridTemplateColumns: 'auto auto auto',
      gridTemplateRows: 'auto',
      
      gridTemplateAreas: `
      "logo . Contact"
      "BD1 BD2 BD3"
      "Table Table Table"
      "end end end"
      "E n d "
    `,
    columnGap:'30px',
    rowGap:'75px'
  }}>
    {/* First row */}
    {/* Image grid */}
    <Grid item xs={3} sx={{ gridArea: 'logo' }}>
      <Paper sx={{ width: '30%' }}>
        <img
          src={HealthLabLogo}
          alt="logo"
          style={{ width: '100%', height: 'auto' }}
        />
      </Paper>
    </Grid>
    {/* Text grid */}
    <Grid item xs={3} sx={{ gridArea: 'Contact', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
      <Typography variant='body1'>
        0729295498
      </Typography>
      <Typography variant='body1'>
        bandarakgru@gmail.com
      </Typography>
    </Grid>

    {/* Second row */}
    {/* Bio data */}
    {/* First coloum */}
    <Grid item xs={3} sx={{gridArea:'BD1'}}>
      <Typography variant="p" sx={{fontSize:'16px' }} >Rajitah Bandara</Typography>
      <Typography variant="body1" sx={{fontSize:'14px'}}>Age:26<br />Sex:Mail<br />PID:214030K</Typography>
    </Grid>
    {/* Second coloum */}
    {/* <Grid item xs={3} sx={{display:'grid',gridArea:'BD2',justifyItems:'center'}}>
      <Typography variant="p" sx={{fontSize:'16px' }}>Sample Collect at</Typography>
      <Typography variant="body1" sx={{fontSize:'14px'}}>Kandy Branch<br />Ref.By.Dr.Rajitha Bandara</Typography>
    </Grid> */}
    {/* Third coloum */}
    <Grid item xs={3} sx={{gridArea:'BD3'}}>
      <Typography variant="p" sx={{fontSize:'16px' }}>Rajitha Bandara</Typography>
      <Typography variant="body1" sx={{fontSize:'14px'}}>Registered on: 02.31 pm December 2022<br />Collected on: 02.31pm 02 December<br />Reported on: 02.31 December 2022</Typography>
    </Grid>


    {/* Third row */}




    <Grid item xs= {6} sx={{display:'grid',gridArea:'Table',width:'100%'}}>
    <TableContainer component={Paper}>
      <Table>
        {/* Table head */}
        <TableHead>
          <TableRow>
            <TableCell>Column 1</TableCell>
            <TableCell>Column 2</TableCell>
            <TableCell>Column 3</TableCell>
            <TableCell>Column 4</TableCell>
          </TableRow>
        </TableHead>
        {/* Table body */}
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.col1}</TableCell>
              <TableCell>{row.col2}</TableCell>
              <TableCell>{row.col3}</TableCell>
              <TableCell>{row.col4}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>

    {/* End  */}
    <Grid item sx={{display:'grid',gridArea:'end',placeSelf:'center'}}>
      <Typography variant='p' >
----------------------------- **End of report** ----------------------------- 

      </Typography>
    
    </Grid>




    <Grid item sx={{display:'grid',gridArea:'E'}}>
      <Typography variant='p' >
----------------------<br/>
Medical Lab Technetion 
      </Typography>
    
    </Grid>
    <Grid item sx={{display:'grid',gridArea:'d'}}>
      <Typography variant='p' >
----------------------<br/>
Dr.Rajitha Bandara
      </Typography>

    
    </Grid>

  </Container>
  );
}

export default ReportUI;
