import React from 'react';
import { Link } from 'react-router-dom';
import './YogaInEducation.scss';

const YogaInEducation = () => {
  return (
    <main className="education-page">
      <section className="section--header">
        <div className="container">
          <h2>Yoga in Education</h2>
          <p>Bringing mindfulness and movement to schools to support student wellbeing.</p>
        </div>
      </section>
      
      <section className="container">
        <div className="two-column-layout two-column-layout--reverse">
          <div className="two-column-layout__image">
            {/* ADD IMAGE */}
          </div>
          <div className="two-column-layout__text">
            <h3>Benefits for Students</h3>
            <p>Our programs are designed to be fun and accessible, helping to improve concentration, manage stress, and encourage a positive environment.</p>
            <h3>Services Offered:</h3>
            <ul>
              <li>One-off workshops</li>
              <li>Weekly after-school clubs</li>
              <li>Mindfulness sessions for staff</li>
            </ul>
            <Link to="/contact" className="btn btn--secondary">Get a Custom Quote</Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default YogaInEducation;