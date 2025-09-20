import React from "react";
import { Link } from "react-router-dom";
import heroPicture from '../Images/heropicture.jpg';

const Home = () => {
  return (
    <section id="hero" className="page-section hero-section">
      <div className="container hero-content">
        <div className="hero-text">
          <h1>Find Your Balance in Richmond</h1>
          <p>
            Join me for transformative yoga classes designed to strengthen your
            body, calm your mind, and nurture your soul. All levels welcome.
          </p>
          <div className="hero-buttons">
            <Link to="/classes" className="btn btn-primary">Book Your First Class</Link>
            <Link to="/classes" className="btn btn-secondary">View Schedule</Link>
          </div>
        </div>
        <div className="hero-image">
           <img src={heroPicture} alt="yogi claire yoga pose"/>
        </div>
      </div>
    </section>
  );
};

export default Home;