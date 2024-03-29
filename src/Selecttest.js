import Patienthead from './Components/Patienthead';
import BasicSelect from './Selecttest_Components/BasicSelect';
import './maincss/Selecttest.css';
import BackToTop from './Selecttest_Components/Scroll';
import Footer from './Components/Footer';
import Date from './Components/Date';
import { Grid } from '@mui/material';

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
