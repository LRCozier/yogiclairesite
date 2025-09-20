import React from "react";
import { Link } from "react-router-dom";

const Classes = () => {
  const classList = [
    { name: 'Adult Yoga - Gentle Hatha & Flow', description: 'Perfect for newcomers to start their yoga journey.', time: 'Monday: 7pm - 8pm', location: 'Oak Tree Studio, TW12 3EY' },
    { name: 'Pregnancy Yoga & Post Natal (with babies) - Birth Preparation & Pelvic Health', description: '', time: 'Tuesday: 10am - 11am', location: 'Teddington Methodist Church & Community Centre, TW11 8TP'},
    { name: 'Restorative Yoga', description: 'For Nuffield Health Members only', time: 'Friday: 5:30pm - 6:30pm', location: 'Nuffield Health Sunbury Fitness & Wellbeing Gym, TW16 5EQ'},
  ];

  return (
    <section id="classes" className="page-section">
      <div className="container">
        <div className="section-header">
            <h2>Class Offerings</h2>
            <p>Choose from a variety of yoga styles and formats to suit your needs and schedule</p>
        </div>
        <div className="class-grid">
          {classList.map((yogaClass, index) => (
            <div className="class-card" key={index}>
                <div className="class-card-image">
                    {/* ADD IMAGES */}
                    <span>{yogaClass.name}</span>
                </div>
                <div className="class-card-content">
                    <h3>{yogaClass.name}</h3>
                    {yogaClass.description && <p>{yogaClass.description}</p>}
                    <div className="class-card-details">
                        <p><strong>Time:</strong> {yogaClass.time}</p>
                        <p><strong>Location:</strong> {yogaClass.location}</p>
                    </div>
                     <Link to="/contact" className="btn btn-primary" style={{width: '100%', marginTop: '1rem'}}>Book Now</Link>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Classes;