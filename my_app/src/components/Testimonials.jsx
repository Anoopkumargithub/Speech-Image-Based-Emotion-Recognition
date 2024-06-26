import React from 'react';
import styles from './Testimonials.module.css';

const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
      <h2>What Our Users Say</h2>
      <div className={styles.testimonial}>
        <p>"This service is amazing!"</p>
        <h4>- User 1</h4>
      </div>
      <div className={styles.testimonial}>
        <p>"I love using this app every day."</p>
        <h4>- User 2</h4>
      </div>
    </section>
  );
};

export default Testimonials;
