import React from 'react';
import ContactForm from '../components/ContactForm';
import './Contact.scss';

const Contact = () => {
  return (
    <main>
      <div className="container">
        <div style={{ textAlign: 'center', padding: '4rem 0 2rem' }}>
          <h2>Get In Touch</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto' }}>
            Have questions about classes, retreats, or private sessions? Fill out the form below and I'll get back to you soon.
          </p>
        </div>
        <ContactForm />
      </div>
    </main>
  );
};

export default Contact;