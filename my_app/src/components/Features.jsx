import React from 'react';
import styles from './Features.module.css';

const Features = () => {
  return (
    <section className={styles.features}>
      <h2>Our Features</h2>
      <div className={styles.featureItem}>
        <img src="/feature1.png" alt="Feature 1" />
        <h3>Feature 1</h3>
        <p>Details about feature 1</p>
      </div>
      <div className={styles.featureItem}>
        <img src="/feature2.png" alt="Feature 2" />
        <h3>Feature 2</h3>
        <p>Details about feature 2</p>
      </div>
      <div className={styles.featureItem}>
        <img src="/feature3.png" alt="Feature 3" />
        <h3>Feature 3</h3>
        <p>Details about feature 3</p>
      </div>
    </section>
  );
};

export default Features;
