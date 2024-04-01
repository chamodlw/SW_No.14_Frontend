import Footer from './Components/Footer';
import Patienthead from './Components/Patienthead';
import Contact02 from './Contact02';


export default function Contact(){

    return (
        
        <div style={{
            backgroundImage: `url("https://th.bing.com/th?id=OIP.boKcMpvOeBXn9z2t91T7qQHaGM&w=273&h=228&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2)`,
           backgroundPosition:'center',
            backgroundRepeat:'no-repeat',
            backgroundSize:'cover'
          }}>
         <Patienthead/> 
         <br/><br/><br/>
         <Contact02/>
         <br/><br/>
           <Footer/>
           
        </div>
    );
}