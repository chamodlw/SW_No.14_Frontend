import React, { useState, useEffect } from "react";
import Head from "./Head.js";
import Footer from "./Footer.js";
import photo1 from '../images/Lab_Assistant_pic.jpg';
//import { AppBar, Tab, Button, Tabs, Typography, Grid } from '@mui/material/';
import photo2 from '../images/smalllogo.png';
import photo3 from '../images/labtool1 (3).png';
import photo4 from '../images/labtool2.png';
import photo5 from '../images/labtool3.png';
import photo6 from '../images/Labtool4-removebg-preview.png';
import photo7 from '../images/X.jpg';

export default function HomePage() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        // Simulate loading delay
        const timeout = setTimeout(() => {
            setLoaded(true);
        }, 400);

        return () => clearTimeout(timeout);
    }, []);

    const boxStyle = {
        width: '250px',
        height: '320px',
        borderRadius: '10px',
        background: 'linear-gradient(145deg, #cacaca, #f0f0f0)',
        boxShadow: '17px 17px 34px #b1b1b1, -17px -17px 34px #ffffff',
        marginBottom: '40px',
        position: 'relative', // Ensure the container has relative positioning - to make the contentStyle (grey colour square) to be positioned correctly.
    };
    
    const contentStyle = {
        width: '90px',
        height: '90px',
        backgroundColor: '#ABA9A9',
        transform: 'translateX(-50%) rotate(45deg)', // Center horizontally, then rotate
        position: 'absolute',
        top: '13%', // Position at the top
        left: '50%', // Center horizontally
    };
    

    return (
        <div style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.5s ease' }}>
            <Head />

            {/* Image on the left */}
            <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#FFFFFF', padding: '40px', marginTop: '20px' }}>
                <img
                    src={photo1}
                    alt="Detailing"
                    style={{ maxWidth: '45%', height: 'auto' }}
                />

                {/* Right-aligned text */}
                <div style={{ flex: 1, textAlign: 'left', paddingLeft: '40px', paddingRight: '5%' }}>
                    <p style={{ fontSize: '18px', margin: 0, fontFamily: 'Helvetica', paddingBottom: '8px', color: '#808080' }}>HealthLab Inc. - The pioneer of safety and comfort</p>
                    <p style={{ fontWeight: 'bold', fontSize: '45px', margin: 0, fontFamily: 'Helvetica', position: 'relative', paddingBottom: '20px' }}>
                    <span style={{ color: '#101754' }}>Expert Laboratory Services</span>
                        <span style={{ position: 'absolute', bottom: '-5px', left: 0, width: '50%', borderBottom: '2px solid #101754', padding: '20px' }}></span>
                    </p>
                    <p style={{ fontSize: '18px', margin: 0, fontFamily: 'Helvetica', paddingTop: '50px' }}>We prioritize your <span style={{ color: '#101754', fontWeight: 'bold' }}>comfort</span> and <span style={{ color: '#101754', fontWeight: 'bold' }}>safety</span>, employing the latest techniques to make the process as painless and efficient as possible.</p>
                </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <h1 style={{ color: '#101754', marginBottom: '10px' }}>Services</h1>
            </div>

{/* Service healine and the underline with the small logo */}
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
    <div style={{ borderBottom: '1px solid #101754', width: '4cm' }}></div>
    <div style={{ marginRight: '20px', marginLeft: '20px' }}>
        <img src={photo2} alt="Services Icon" style={{ width: '20px', height: '20px' }} />
    </div>
    <div style={{ borderBottom: '1px solid #101754', width: '4cm' }}></div>
</div>

{/* Content under Services */}

<div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px', flexWrap: 'wrap' }}>
    <div style={{ ...boxStyle, flex: '1 1 250px', maxWidth: '300px', margin: '10px', textAlign: 'center' }}>
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
            <div style={{ ...contentStyle, display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '10px' }}> 
                <img src={photo3} alt="Icon 1" style={{ width: '60px', height: '60px', borderRadius: '20%' }} />
            </div>
            <div style={{ marginTop: '160px' }}>
                <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Comprehensive Blood Tests</p>
                <p style={{ fontSize: '14px' }}>A wide array of blood tests to assess various health indicators</p>
            </div>
        </div>
    </div>
    <div style={{ ...boxStyle, flex: '1 1 250px', maxWidth: '300px', margin: '10px', textAlign: 'center' }}>
        <div style={{ ...contentStyle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}> 
            <img src={photo4} alt="Icon 2" style={{ width: '60px', height: '60px', borderRadius: '20%' }} />
        </div>
        <div style={{ marginTop: '180px' }}>
            <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Point-of-Care Testing</p>
            <p style={{ fontSize: '14px', marginLeft: '10px', marginRight:'10px' }}>Rapid testing for immediate results, Point-of-care testing for faster treatment decisions</p>
        </div>
    </div>
    <div style={{ ...boxStyle, flex: '1 1 250px', maxWidth: '300px', margin: '10px', textAlign: 'center' }}>
        <div style={{ ...contentStyle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}> 
            <img src={photo5} alt="Icon 3" style={{ width: '70px', height: '70px', borderRadius: '20%' }} />
        </div>
        <div style={{ marginTop: '180px' }}>
            <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Result Interpretation and Consultation</p>
            <p style={{ fontSize: '14px' }}>Expert interpretation of test results by qualified healthcare professionals</p>
        </div>
    </div>
    <div style={{ ...boxStyle, flex: '1 1 250px', maxWidth: '300px', margin: '10px', textAlign: 'center' }}>
        <div style={{ ...contentStyle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}> 
            <img src={photo6} alt="Icon 4" style={{ width: '80px', height: '80px', borderRadius: '20%' }} />
        </div>
        <div style={{ marginTop: '180px' }}>
            <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Health Check Panels</p>
            <p style={{ fontSize: '14px' }}>Customized health check panels for comprehensive assessments</p>
        </div>
    </div>
</div>


            <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <h1 style={{ color: '#101754', marginBottom: '10px' }}>About us</h1>
            </div>

{/* About us healine and the underline with the small logo */}
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
    <div style={{ borderBottom: '1px solid #101754', width: '4cm' }}></div>
    <div style={{ marginRight: '20px', marginLeft: '20px' }}>
        <img src={photo2} alt="Services Icon" style={{ width: '20px', height: '20px' }} />
    </div>
    <div style={{ borderBottom: '1px solid #101754', width: '4cm' }}></div>
</div>

<div style={{ textAlign: 'center', margin: '30px' }}>
<p style={{ fontSize: '20px', fontWeight: 'bold' }}>Discover Unparalleled Excellence with Our Expert Team</p>
            <p style={{ fontSize: '18px' }}>Welcome to HealthLab Inc. where we are dedicated to redefining excellence in blood drawing and diagnostic testing. With a commitment to advancing healthcare through cutting-edge technology and compassionate care, our laboratory stands at the forefront of precision diagnostics. Our highly skilled team of phlebotomists ensures a seamless and comfortable blood collection experience, while our state-of-the-art facilities empower us to deliver a comprehensive range of tests with unparalleled accuracy.</p>
            <img src={photo7} alt="Detailing" style={{ maxWidth: '60%', height: 'auto', borderRadius: '0%', margin: '40px' }} />

        </div>

            <Footer />
        </div>
        
    )
}
