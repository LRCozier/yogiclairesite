import React from 'react';
import aboutImage from '../Images/heropicture.jpg';

const About = () => {
  return (
    <main>
      <div className="container">
        <div className="two-column-layout">
          <div className="two-column-layout__image">
            <img src={aboutImage} alt="Yoga teacher Claire smiling" />
          </div>
          <div className="two-column-layout__text">
            <h2>Meet Claire</h2>
            <p>
              My journey with yoga began over a decade ago, and it has profoundly transformed my approach to life, health, and wellbeing. As a certified instructor, my goal is to share the incredible benefits of this practice with you.
            </p>
            <p>
              My classes are built on a foundation of inclusivity and mindfulness, creating a safe and welcoming space for students of all levels to explore their practice. Let's find your balance together.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;