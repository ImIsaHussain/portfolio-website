import React from 'react';
import Styles from '../styles/pages/Contact.module.css';
import contactImg from '../assets/images/DSC06773 2.jpg';

function Contact() {
  return (
    <div className={Styles.container}>
      <section className={Styles.hero}>
        <p className={Styles.title}>GET IN TOUCH</p>
        <p className={Styles.subtitle}>
          Let&apos;s build something <span className={Styles.accent}>extraordinary</span> together
        </p>
      </section>

      <div className={Styles.contentWrapper}>
        <div className={Styles.imageSection}>
          <img src={contactImg} alt="Isa" className={Styles.contactImage} />
        </div>

        <div className={Styles.contactContent}>
          <p className={Styles.message}>
            While I&apos;m busy crafting the perfect showcase of my work,
            I&apos;d love to hear about your ideas and potential collaborations.
            Whether you want to geek out about the latest tech trends,
            brainstorm on a cool project, or just say hi - drop me a line!
          </p>
          <a href="mailto:imisahussain@gmail.com" className={Styles.email}>
            imisahussain@gmail.com
          </a>
        </div>

        <div className={Styles.imageGalleryRight} />
      </div>
    </div>
  );
}

export default Contact;
