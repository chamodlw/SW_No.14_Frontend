import Footer from '../Components/Footer';
import Patienthead from '../Components/Patienthead';
import Contact02 from './Contact02';


export default function Contact(){

    return (
        
        <div style={{
            backgroundImage: `url("https://th.bing.com/th/id/OIP.v9rkcUJa2zPsD2qf13mu-wHaEo?w=244&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7)`,
           backgroundPosition:'center',
            backgroundRepeat:'no-repeat',
            backgroundSize:'cover'
          }}>

         <Patienthead/> 
         <br/><br/><br/><br/><br/>
         <Contact02/>
         <br/><br/>
           <Footer/>
           
        </div>
    );
}