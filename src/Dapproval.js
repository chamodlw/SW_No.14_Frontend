import Patienthead from './Components/Patienthead';
import Dapproval01 from './Dapproval/Dapproval01';
import Dapproval03 from './Dapproval/Dapproval03';
import Box from '@mui/material/Box';

import Footer from './Components/Footer';

function Dapproval() {
    return (
      <div style={{ backgroundColor: '#d7e3fc' }}>
       
        <Patienthead/><br/><br/><br/><br/><br/>
        <Dapproval01/>
        <br/>
        
    <Box sx={{ width: '80%', margin: 'auto', padding: '20px' ,borderRadius: '8px'}}>
        <h1>Lab Report</h1><hr/><br/><br/>
        </Box>
        <Dapproval03/>
        <br/>
          <Footer/>
      </div>
      
    );
  }
  export default Dapproval;