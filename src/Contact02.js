
import Contact01 from './Contact01';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function Contact(){
    
const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(5),
    textAlign: 'left',
    margin: '2rem',
    
  }));

    return (
        
        <div >
      
         <Box sx={{ flexGrow: 0,paddingLeft:'8rem',opacity:'0.95'}}>
   
      <Grid container spacing={8} columns={16} >
        <Grid item xs={7}>
          <Item style={{  border: '2px solid gray',boxShadow: '5px 5px 5px gray',borderRadius:'10px'  }}><Contact01/></Item>
        </Grid>
        <Grid item xs={5} >
          <Item style={{  border: '2px solid gray',boxShadow: '5px 5px 5px gray',borderRadius:'10px' }}><h3>Address:</h3>
          <div style={{paddingLeft:'6rem'}}>
          <p style={{fontStyle:'poppins'}}>No:201,<br/>Suhada Mawatha,<br/>Colombo 07.<br/>Sri lanka</p>
          </div>
          <h3>Hotlines:</h3>
          <div style={{paddingLeft:'6rem'}}>
          <p>0774556172<br/>0112135644<br/>0112135640</p>
          </div>
          <h3>Email:</h3>
          <div style={{paddingLeft:'6rem'}}>
          <p>healthlab@gmail.com</p>
          </div>
          </Item>
        </Grid>
      
      </Grid>
    </Box>
      
        </div>
    );
}