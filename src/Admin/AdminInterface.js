import Patienthead from '../Components/Patienthead';
import Footer from '../Components/Footer';
import { Grid } from '@mui/material';
import '../maincss/AdminInterface.css';
import AdminCards from './Admin_Component/Admin_cards'

function AdminInterface() {

  return (
    <div className="AdminInterface">
      <Patienthead />
      <Grid sx={{paddingTop:'20%', paddingBottom:'8%'}}>
        <AdminCards sx ={{ alignitems:'center' , width:'90%'}}/>
      </Grid>      
      <Footer />
    </div>
  );
}

export default AdminInterface;
