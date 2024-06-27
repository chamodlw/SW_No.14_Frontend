
import { Box } from '@mui/system';

import Footer from '../../Components/Footer';
import Head from '../../Components/Head';
import LabReportsList from '../LabasisstenceComponent/SearchResult';
import Report from '../LabasisstenceComponent/table';

function Reportview() {
  return (
    <div className="App">
  <Box >
    <Head/>
    <LabReportsList  />
    <Footer/>
    

  </Box>
    </div>
  );
}

export default Reportview;