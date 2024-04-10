//Admininterface
import Patienthead from '../Components/Patienthead';
import Footer from '../Components/Footer';
import { Grid } from '@mui/material';
import '../maincss/AdminInterface.css';
import AdminCards from './Admin_Component/Admin_cards'

function AdminInterface() {

  return (
    <div className="AdminInterface">
      <Patienthead />
      <Grid sx={{paddingTop:'20%', paddingBottom:'10%', alignitems:'center'}}>
        <AdminCards sx ={{ alignitems:'center'}}/>
      </Grid>      
      <Footer />
    </div>
  );
}

export default AdminInterface;
