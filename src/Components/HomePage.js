import React from "react";
import Head from "./Head.js";
import Footer from "./Footer.js";


import photo4 from "../images/Lab_Assistant_pic.jpg";


export default function HomePage(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

    return(
        <div>
       <Head/>
        
  
       <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', height: '500px', background: '#fff' }}>
                <div style={{ marginRight: '20px', width: '300px', height: '300px', background: 'url("../images/Lab_Assistant_pic.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            </div>
        <div style={{ flex: 1, marginLeft: '20px' }}></div>
        
        <Footer/>

</div>
    )
}