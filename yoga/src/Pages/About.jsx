import React from "react";
import yogapose from '../Images/yogapose.jpg';

const About = () => {
  return (
    <section id="about" className="yogiclaire-section">
      <h2 className="yogiclaire-section-title">About Yogi Claire</h2>
      <img src={yogapose} alt="Yoga Pose" />
      <p>Yoga is more than just physical postures; it's a holistic practice that connects body, mind, and spirit, 
      bringing balance and harmony in a chaotic world. As a teacher, I believe yoga is a transformative tool, 
      inviting us to breathe deeply, move mindfully, and explore our inner selves with compassion. It fosters 
      both personal growth and a sense of community, reminding us of our shared humanity and interconnectedness. 
      Ultimately, yoga is a journey toward greater awareness, peace, and purpose in life</p>
    </section>
  );
};

export default About;