import React from 'react';
import '../css/style.css'; // Import your CSS file
import testimonialBackground from '../img/testimonial-bg.jpg'; 
import avatar from '../img/testi-avatar.jpg'

const Testimonials = () => {
  return (
    <section className="section testi text-center has-bg-image" style={{ backgroundImage: `url(${testimonialBackground})` }} aria-label="testimonials">
      <div className="container">
        <div className="quote">”</div>

        <p className="headline-2 testi-text">
          I wanted to thank you for inviting me down for that amazing dinner the other night. The food was
          extraordinary.
        </p>

        <div className="wrapper">
          <div className="separator"></div>
          <div className="separator"></div>
          <div className="separator"></div>
        </div>

        <div className="profile">
          <img src={avatar} width="100" height="100" loading="lazy" alt="Sam Jhonson" className="img" />
          <p className="label-2 profile-name">Sam Jhonson</p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
