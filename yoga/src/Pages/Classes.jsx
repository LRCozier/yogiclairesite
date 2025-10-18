import React from "react";
import { Link } from "react-router-dom";
import './Classes.scss';

const Classes = () => {
  const classList = [
    { name: 'Adult Yoga - Gentle Hatha & Flow', description: 'Perfect for newcomers to start their yoga journey.', time: 'Monday: 7pm - 8pm', location: 'Oak Tree Studio, TW12 3EY' },
    { name: 'Pregnancy & Post Natal Yoga', description: 'Focusing on birth preparation and pelvic health.', time: 'Tuesday: 10am - 11am', location: 'Teddington Methodist Church, TW11 8TP'},
    { name: 'Restorative Yoga', description: 'For Nuffield Health Members only.', time: 'Friday: 5:30pm - 6:30pm', location: 'Nuffield Health, TW16 5EQ'},
  ];

  return (
    <main className="classes-page">
      <section className="container">
        <div className="section-header">
          <h2>Class Offerings</h2>
          <p>Choose from a variety of classes to suit your needs and schedule.</p>
        </div>
        <div className="class-grid">
          {classList.map((yogaClass, index) => (
            <div className="class-card" key={index}>
              <div className="class-card__content">
                <h3>{yogaClass.name}</h3>
                {yogaClass.description && <p>{yogaClass.description}</p>}
                <div className="class-card__details">
                  <p><strong>Time:</strong> {yogaClass.time}</p>
                  <p><strong>Location:</strong> {yogaClass.location}</p>
                </div>
                <Link to="/contact" className="btn btn--secondary">Book Now</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Classes;