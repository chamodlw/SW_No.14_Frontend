import Patienthead from './Components/Patienthead';
import Footer from './Components/Footer';
import Dhome01 from './Dhome/Dhome01';
import Dhome02 from './Dhome/Dhome02';


function Dhome() {
    return (
      <div style={{backgroundColor: '#d7e3fc'}} className="Dhome">
       
        <Patienthead/><br/><br/><br/><br/><br/>
        <Dhome01/>
        <Dhome02/><br/><br/><br/><br/><br/>
        <Footer/>
      </div>
      
    );
  }
  export default Dhome;