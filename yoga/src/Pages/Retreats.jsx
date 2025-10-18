import React from 'react';
import { Link } from 'react-router-dom';
import retreatImage from '../Images/retreat.jpg';
import './Retreats.scss';

const Retreats = () => {
  return (
    <main className="retreats-page">
      <section className="hero hero--retreats">
        <div className="hero__overlay"></div>
        <div className="container hero__content">
          <h1 className="hero__title">Yoga & Wellness Retreats</h1>
          <p className="hero__subtitle">Disconnect to reconnect. Join us for an unforgettable journey.</p>
        </div>
      </section>

      <section className="container">
        <div className="two-column-layout">
          <div className="two-column-layout__image">
            <img src={retreatImage} alt="Peaceful yoga retreat setting" />
          </div>
          <div className="two-column-layout__text">
            <h2>Upcoming Retreat: Forest Sanctuary</h2>
            <p className="retreats-page__date"><strong>When:</strong> November 15-18, 2025</p>
            <p>Immerse yourself in nature with our 4-day Forest Sanctuary retreat. Deepen your yoga practice, nourish your body, and find stillness.</p>
            <h3>What's Included:</h3>
            <ul>
              <li>Twice-daily yoga and meditation</li>
              <li>Guided nature walks</li>
              <li>Nourishing vegetarian meals</li>
            </ul>
            <Link to="/contact" className="btn btn--primary">Inquire & Book Your Spot</Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Retreats;