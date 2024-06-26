import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src="/logo.png" alt="Logo" />
        </div>
        <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/features">Features</Link></li>
            <li><Link to="/how-it-works">How It Works</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
