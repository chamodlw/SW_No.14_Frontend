import Patienthead from './Components/Patienthead';
import BasicSelect from './Components/BasicSelect';
import './maincss/Selecttest.css';
import BackToTop from './Components/Scroll';
import Footer from './Components/Footer';
import Date from './Components/Date';
import { Grid } from '@mui/material';
//rename check
function Selecttest() {
  return (
    <div className="Selecttest">
     
      <Patienthead/>
      <Grid sx={{paddingTop:'12%'}}>
        <BasicSelect/>
        <BackToTop />
        <Date/><br/>
      </Grid>
      <Footer/>
    </div>
    
  );
}

export default Selecttest;
