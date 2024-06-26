import Footer from '../../Components/Footer';
import Head from '../../Components/Head';
import { Box } from '@mui/system';
import ReportSearchBar from '../LabasisstenceComponent/ReportSearchBar';


function Serch() {
  return (
    <div className="App">
  <Box>
   <Head/>
   <ReportSearchBar/>
   <Footer/>
 

  </Box>
    </div>
  );
}

export default Serch;