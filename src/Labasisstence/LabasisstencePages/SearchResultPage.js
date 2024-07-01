
import { Box } from '@mui/system';

import Footer from '../../Components/Footer';
import Head from '../../Components/Head';
import LabReportsList from '../LabasisstenceComponent/SearchResult';
import Report from '../LabasisstenceComponent/table';
import ReportSearchBar from '../LabasisstenceComponent/ReportSearchBar';
import Patienthead from '../../Components/Patienthead';

function Reportview() {
  return (
    <div className="App">
  <Box >
  <Patienthead/>
    <LabReportsList  />
    <Footer/>
    

  </Box>
    </div>
  );
}

export default Reportview;