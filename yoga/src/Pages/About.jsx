import React from "react";
import {Helmet} from "react-helmet-async";

const About = () => {
  return (
    <Helmet>
      <tilte>About Yogi Claire</tilte>
      <meta name="description" content="Learn about Yogi Claire, a dedicated yoga instructor in Richmond upon Thames." />
    <section id="about" className="yogiclaire-section">
      <h2 className="yogiclaire-section-title">About Yogi Claire</h2>
      <p>Yoga is more than just physical postures; it's a holistic practice that connects body, mind, and spirit.</p>
    </section>
    </Helmet>
  );
};

export default About;