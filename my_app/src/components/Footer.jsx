import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLinks}>
        <Link to="/home">Home</Link>
        <Link to="/features">Features</Link>
        <Link to="/how-it-works">How It Works</Link>
        <Link to="/testimonials">Testimonials</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/about-us">About Us</Link>
      </div>
      <div className={styles.contactInfo}>
        <p>Contact us at: info@ourcompany.com</p>
      </div>
      <div className={styles.socialMedia}>
        <a href="#!"><img src="../assets/facebook.png" alt="Facebook" /></a>
        <a href="#!"><img src="/twitter.png" alt="Twitter" /></a>
        <a href="#!"><img src="/instagram.png" alt="Instagram" /></a>
      </div>
    </footer>
  );
};

export default Footer;
