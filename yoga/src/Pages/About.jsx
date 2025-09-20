import React from "react";
import aboutImage from '../Images/aboutimage.jpg';

const About = () => {
  return (
    <section id="about" className="page-section">
      <div className="container about-content">
        <div className="about-image">
           <img src={aboutImage} alt="Claire Marismari Portrait" />
        </div>
        <div className="about-text">
          <h2>Meet Claire</h2>
          <p>
            With over 15 years of teaching experience, I'm passionate about making yoga
            accessible to everyone. Based in beautiful Richmond upon Thames, I offer a
            variety of classes that blend traditional Hatha yoga with modern flow sequences.
          </p>
          <p>
            My approach focuses on building strength, flexibility, and mindfulness in a
            supportive, non-judgmental environment. Whether you're a complete
            beginner or experienced practitioner, you'll find a welcoming space to grow
            your practice.
          </p>
          <ul className="credentials-list">
             <li>RYT 500 Certified</li>
             <li>CPD Qualified</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;