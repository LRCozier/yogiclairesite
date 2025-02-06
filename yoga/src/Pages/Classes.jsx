import React from "react";

const Classes = () => {
  const classList = [
    { name: 'Adult Yoga - Gentle Hatha & Flow', description: 'Perfect for newcomers to start their yoga journey.', time: 'Monday: 7pm - 8pm', location: 'Oak Tree Studio, TW12 3EY' },
    { name: 'Pregnancy Yoga & Post Natal (with babies) - Birth Preparation & Pelvic Health', description: '', time: 'Tuesday: 10am - 11am', location: 'Teddington Methodist Church & Community Centre, TW11 8TP'},
    { name: 'Restorative Yoga', description: 'For Nuffield Health Members only', time: 'Friday: 5:30pm - 6:30pm', location: 'Nuffield Health Sunbury Fitness & Wellbeing Gym, TW16 5EQ'},
  ];

  return (
    <>
    <div className="container">
    <section className="yogiclaire-section">
      <h2>Our Classes</h2>
      <div className="class-list">
        {classList.map((yogaClass, index) => (
          <div className="class-item" key={index}>
            <h3>{yogaClass.name}</h3>
            <p>{yogaClass.description}</p>
            <p><strong>{yogaClass.time}</strong></p>
            <p><strong>{yogaClass.location}</strong></p>
          </div>
        ))}
      </div>
    </section>
    </div>
    </>
  );
}

export default Classes;