import Patienthead from './Components/Patienthead';
import Footer from './Components/Footer';
import Dhome01 from './Dhome/Dhome01';
import Dhome02 from './Dhome/Dhome02';


function Dhome() {
    return (
      <div style={{
        backgroundImage: `url("https://th.bing.com/th/id/OIP.bsgjIH-oP6klVCk_9ZtLaAHaE9?w=248&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7")`,
       backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover'
      }}>
        
       
        <Patienthead/><br/><br/><br/><br/><br/>
        <Dhome01/>
        <Dhome02/><br/><br/><br/><br/><br/>
        <Footer/>
      </div>
      
    );
  }
  export default Dhome;