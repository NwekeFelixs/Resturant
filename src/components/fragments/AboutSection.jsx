import React from 'react';
import '../css/style.css';
import aboutBanner from '../img/about-banner.jpg';
import absImage1 from '../img/about-abs-image.jpg';
import badgeImage from '../img/badge-2.png';
import shapeImage from '../img/shape-3.png';

function AboutSection() {
  const parallaxItems = document.querySelectorAll("[data-parallax-item]");

  let x, y;

  window.addEventListener("mousemove", function (event) {
    x = (event.clientX / window.innerWidth * 10) - 5;
    y = (event.clientY / window.innerHeight * 10) - 5;

    // reverse the number eg. 20 -> -20, -5 -> 5
    x = x - (x * 2);
    y = y - (y * 2);

    for (let i = 0, len = parallaxItems.length; i < len; i++) {
      x = x * Number(parallaxItems[i].dataset.parallaxSpeed);
      y = y * Number(parallaxItems[i].dataset.parallaxSpeed);
      parallaxItems[i].style.transform = `translate3d(${x}px, ${y}px, 0px)`;
    }
  });

  return (
    <section className="section about text-center" aria-label="about" id="about">
      <div className="container">
        <div className="about-content">
          <p className="label-2 section-subtitle" id="about-label">
            Our Story
          </p>
          <h2 className="headline-1 section-title">
            Every Flavor Tells a Story
          </h2>
          <p className="section-text">
            Lorem Ipsum is simply dummy text of the printingand typesetting industry lorem Ipsum has been the industry's
            standard dummy text ever since the when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five centuries, but also the leap into.
          </p>
          <div className="contact-label">Book Through Call</div>
          <a href="tel:+804001234567" className="body-1 contact-number hover-underline">
            +80 (400) 123 4567
          </a>
          <a href="#" className="btn btn-primary">
            <span className="text text-1">Read More</span>
            <span className="text text-2" aria-hidden="true">
              Read More
            </span>
          </a>
        </div>
        <figure className="about-banner">
          <img src={aboutBanner} width="570" height="570" loading="lazy" alt="about banner" className="w-100" data-parallax-item data-parallax-speed="1" />
          <div className="abs-img abs-img-1 has-before" data-parallax-item data-parallax-speed="1.75">
            <img src={absImage1} width="285" height="285" loading="lazy" alt="" className="w-100" />
          </div>
          <div className="abs-img abs-img-2 has-before">
            <img src={badgeImage} width="133" height="134" loading="lazy" alt="" />
          </div>
        </figure>
        <img src={shapeImage} width="197" height="194" loading="lazy" alt="" className="shape" />
      </div>
    </section>
  );
}

export default AboutSection;
