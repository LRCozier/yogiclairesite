import React from "react";
import { Link } from "react-router-dom";
import heroPicture from '../Images/heropicture.jpg';
import './Home.scss';

const Home = () => {
  return (
    <main className="home-page">
      <section className="hero">
        <div className="container hero__content">
          <div className="hero__text">
            <h1>Find Your Balance in Richmond</h1>
            <p>
              Join me for transformative yoga classes designed to strengthen your
              body, calm your mind, and nurture your soul. All levels welcome.
            </p>
            <div className="hero__buttons">
              <Link to="/classes" className="btn btn--primary">View Classes</Link>
              <Link to="/contact" className="btn btn--secondary">Get in Touch</Link>
            </div>
          </div>
          <div className="hero__image">
             <img src={heroPicture} alt="Yogi Claire in a yoga pose in a natural setting"/>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;