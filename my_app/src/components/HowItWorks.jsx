import React from 'react';
import styles from './HowItWorks.module.css';

const HowItWorks = () => {
  return (
    <section className={styles.howItWorks}>
      <h2>How It Works</h2>
      <div className={styles.step}>
        <h3>Step 1</h3>
        <p>Description of step 1</p>
      </div>
      <div className={styles.step}>
        <h3>Step 2</h3>
        <p>Description of step 2</p>
      </div>
      <div className={styles.step}>
        <h3>Step 3</h3>
        <p>Description of step 3</p>
      </div>
    </section>
  );
};

export default HowItWorks;
