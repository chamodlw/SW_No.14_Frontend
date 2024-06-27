import React, { useState, useEffect, useRef  } from "react";
import Head from "../Components/Head.js";
import Footer from "../Components/Footer.js";
import photo1 from '../images/Contact-Us-PNG.png';
import Contact01 from './Contact01.js'



export default function Contact() {
   
    return (
        <div>
            <Head />
            <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#E0F7FA', padding: '40px', marginTop: '10px', borderRadius: '50px', border: '30px solid #FFFFFF', borderBottom: '0px' }}>
    

                {/* Right-aligned text */}
                <div style={{ flex: 1, textAlign: 'left', paddingLeft: '40px', paddingRight: '5%' }}>
                    <p style={{ fontSize: '18px', margin: 0, fontFamily: 'Helvetica', paddingBottom: '8px', color: '#808080' }}>HealthLab Inc. - The pioneer of safety and comfort</p>
                    <p style={{ fontWeight: 'bold', fontSize: '45px', margin: 0, fontFamily: 'Helvetica', position: 'relative', paddingBottom: '20px' }}>
                    <span style={{ color: '#101754' }}>Expert Laboratory Services</span>
                        <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '50%', borderBottom: '2px solid #101754', padding: '20px' }}></span>
                    </p>
                    <Contact01/>
                    </div>
                    <img
        src={photo1}
        alt="Detailing"
        style={{ maxWidth: '35%', height: 'auto', marginRight: '30px'}}
    />
          
            </div>
<br/><br/><br/>

<Footer />
</div>

           
       
    ) }
    

