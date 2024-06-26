import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1>Welcome to Our Service</h1>
      <p>Providing the best service for you</p>
      <Link to="/register" className={styles.cta}>Get Started</Link>
      <Link to="/login" className={`${styles.cta} ${styles.secondary}`}>Log In</Link>
    </section>
  );
};

export default Hero;
