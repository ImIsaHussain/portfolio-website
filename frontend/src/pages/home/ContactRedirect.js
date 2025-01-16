import React from 'react';
import Styles from '../../styles/pages/ContactRedirect.module.css';

function Contact() {
  return (
    <section className={Styles.section}>
      <h2>Get In Touch</h2>
      <div className={Styles.contactInfo}>
        <p>Feel free to reach out for collaborations or just a friendly chat.</p>
        <div className={Styles.socialLinks}>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://twitter.com/yourtwitterhandle" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          <a href="mailto:R8A6o@example.com">Email</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
