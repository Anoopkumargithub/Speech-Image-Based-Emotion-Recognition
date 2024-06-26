import React from 'react';
import styles from './Pricing.module.css';

const Pricing = () => {
  return (
    <section className={styles.pricing}>
      <h2>Pricing Plans</h2>
      <div className={styles.pricingTable}>
        <div className={styles.plan}>
          <h3>Basic</h3>
          <p>Free</p>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
          <a href="#!" className={styles.cta}>Choose Plan</a>
        </div>
        <div className={styles.plan}>
          <h3>Premium</h3>
          <p>$9.99/month</p>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
            <li>Feature 4</li>
          </ul>
          <a href="#!" className={styles.cta}>Choose Plan</a>
        </div>
        <div className={styles.plan}>
          <h3>Enterprise</h3>
          <p>$29.99/month</p>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
            <li>Feature 4</li>
            <li>Feature 5</li>
          </ul>
          <a href="#!" className={styles.cta}>Choose Plan</a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
