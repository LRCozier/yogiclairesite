import React from 'react';
import './Contact.scss';
import ContactForm from '../Components/Contactform/Contactform';

const Contact = () => {
  return (
    <main>
      <div className="container">
        <div>
          <h2>Get In Touch</h2>
          <p>
            Have questions about classes, retreats, or private sessions? Fill out the form below and I'll get back to you soon.
          </p>
        </div>
       <ContactForm/>
      </div>
    </main>
  );
};

export default Contact;