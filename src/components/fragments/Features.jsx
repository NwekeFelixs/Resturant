import React from 'react';
import '../css/style.css'
import featuresIcon1 from '../img/features-icon-1.png';
import featuresIcon2 from '../img/features-icon-2.png';
import featuresIcon3 from '../img/features-icon-3.png';
import featuresIcon4 from '../img/features-icon-4.png';
import shape7Image from '../img/shape-7.png';
import shape8Image from '../img/shape-8.png';

const Features = () => {
  return (
    <section className="features text-center" aria-label="features">
      <div className="container">
        <p className="section-subtitle label-2">Why Choose Us</p>
        <h2 className="headline-1 section-title">Our Strength</h2>
        <ul className="grid-list">
          <li className="feature-item">
            <div className="feature-card">
              <div className="card-icon">
                <img src={featuresIcon1} width="100" height="80" alt="icon" loading="lazy" />
              </div>
              <h3 className="title-2 card-title">Hygienic Food</h3>
              <p className="label-1 card-text">Lorem Ipsum is simply dummy printing and typesetting.</p>
            </div>
          </li>
          <li className="feature-item">
            <div className="feature-card">
              <div className="card-icon">
                <img src={featuresIcon2} width="100" height="80" alt="icon" loading="lazy" />
              </div>
              <h3 className="title-2 card-title">Fresh Environment</h3>
              <p className="label-1 card-text">Lorem Ipsum is simply dummy printing and typesetting.</p>
            </div>
          </li>
          <li className="feature-item">
            <div className="feature-card">
              <div className="card-icon">
                <img src={featuresIcon3} width="100" height="80" alt="icon" loading="lazy" />
              </div>
              <h3 className="title-2 card-title">Skilled Chefs</h3>
              <p className="label-1 card-text">Lorem Ipsum is simply dummy printing and typesetting.</p>
            </div>
          </li>
          <li className="feature-item">
            <div className="feature-card">
              <div className="card-icon">
                <img src={featuresIcon4} width="100" height="80" alt="icon" loading="lazy" />
              </div>
              <h3 className="title-2 card-title">Event & Party</h3>
              <p className="label-1 card-text">Lorem Ipsum is simply dummy printing and typesetting.</p>
            </div>
          </li>
        </ul>
        <img src={shape7Image} width="208" height="178" alt="shape" loading="lazy" className="shape shape-1" />
        <img src={shape8Image} width="120" height="115" alt="shape" loading="lazy" className="shape shape-2" />
      </div>
    </section>
  );
}

export default Features;
