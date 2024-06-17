
import { Box } from '@mui/system';


import Footer from '../Component/Footer';
import Head from '../Component/Head';
import LabReportsList from '../Component/SearchResult';
import Report from '../Component/table';

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
