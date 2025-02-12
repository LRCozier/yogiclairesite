import './Footer.css';
import {SocialIcon} from 'react-social-icons';
import 'react-social-icons/facebook';
import 'react-social-icons/instagram';


const Footer = () => {
  return (
    <footer>
      <p>&copy; 2025 Yogi Claire. All rights reserved.</p>
      <div id="yogiclaire-footer-socials">
        <SocialIcon url="https://www.facebook.com/yogabogaclaire"/>
        <SocialIcon url="https://www.instagram.com/yogiclairem_/"/>
      </div>
    </footer>
  );
};

export default Footer;