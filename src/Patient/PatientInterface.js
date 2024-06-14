//Patientface
import Patienthead from '../Components/Patienthead';
import Footer from '../Components/Footer';
import { Grid } from '@mui/material';
import '../maincss/Class.css';
import PatientCards from './Patient_Component/Patient_cards'

function PatientInterface() {

  return (
    <div className="Class">
      <Patienthead />
      <Grid sx={{paddingTop:'20%', paddingBottom:'10%', alignitems:'center'}}>
        <PatientCards sx ={{ alignitems:'center'}}/>
  </Grid>    
      <Footer />
    </div>
  );
}

export default PatientInterface;
