import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './com_css/footer.css';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <footer className="footer" >
      <div className="footer-content">
        <div className="footer-social">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
        <div className="footer-info">
          <p>&copy; {new Date().getFullYear()} HealthLab</p>
          <p><br/><EmailIcon/>healthlab@gmail.com<br/><CallIcon/>0913111111</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
