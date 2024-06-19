import Patienthead from '../../Components/Patienthead';
import BasicSelect from '../Selecttest_Components/BasicSelect';
import '../../maincss/Class.css';
import BackToTop from '../Selecttest_Components/Scroll';
import Footer from '../../Components/Footer';
import Date from '../../Components/Date';
import { Grid } from '@mui/material';

function Selecttest() {
  const getId = (id) =>{
    console.log(id);
  }
  return (
    <div className="Class">
     
      <Patienthead/>
      <Grid sx={{paddingTop:'12%'}}>
        <BasicSelect onLoad={() => getId()} />
        <BackToTop />
        <Date/><br/>
      </Grid>
      <Footer/>
    </div>
    
  );
}

export default Selecttest;
