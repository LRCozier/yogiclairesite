import React from 'react';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import 'react-social-icons/facebook';
import 'react-social-icons/instagram';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div className="footer-about">
          <h3>Yogi Claire</h3>
          <p>Find your balance in Richmond upon Thames.</p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/classes">Classes</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-socials">
          <h4>Connect</h4>
            <div className="social-icons-wrapper">
                <SocialIcon 
                    url="https://www.facebook.com/" 
                    bgColor="transparent" 
                    fgColor="var(--color-primary)" 
                    style={{ height: 40, width: 40 }}
                />
                <SocialIcon 
                    url="https://www.instagram.com/" 
                    bgColor="transparent" 
                    fgColor="var(--color-primary)" 
                    style={{ height: 40, width: 40 }}
                />
            </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Claire Marismari. All rights reserved.</p>
        <p>Built by Luke Rudderham-Cozier</p>
      </div>
    </footer>
  );
};

export default Footer;