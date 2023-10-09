import React from 'react';
import '../css/style.css';
import specialDishBanner from '../img/special-dish-banner.jpg';
import badgeImage from '../img/badge-1.png';
import shapeImage1 from '../img/shape-4.png';
import shapeImage2 from '../img/shape-9.png';

function SpecialDish() {
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
    <section className="special-dish text-center" aria-label="special-dish">
      <div className="special-dish-banner">
        <img src={specialDishBanner} width="940" height="900" loading="lazy" alt="special dish" className="img-cover" />
      </div>
      <div className="special-dish-content bg-black-10">
        <div className="container">
          <img src={badgeImage} width="28" height="41" loading="lazy" alt="badge" className="abs-img" />
          <p className="section-subtitle label-2">Special Dish</p>
          <h2 className="headline-1 section-title">Lobster Tortellini</h2>
          <p className="section-text">
            Lorem Ipsum is simply dummy text of the printingand typesetting industry lorem Ipsum has been the
            industry's standard dummy text ever since the when an unknown printer took a galley of type.
          </p>
          <div className="wrapper">
            <del className="del body-3">$40.00</del>
            <span className="span body-1">$20.00</span>
          </div>
          <a href="#" className="btn btn-primary">
            <span className="text text-1">View All Menu</span>
            <span className="text text-2" aria-hidden="true">View All Menu</span>
          </a>
        </div>
      </div>
      <img src={shapeImage1} width="179" height="359" loading="lazy" alt="" className="shape shape-1" />
      <img src={shapeImage2} width="351" height="462" loading="lazy" alt="" className="shape shape-2" />
    </section>
  );
}

export default SpecialDish;
