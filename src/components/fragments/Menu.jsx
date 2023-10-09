import React, { useEffect } from 'react';
import menuImage1 from '../img/menu-1.png';
import menuImage2 from '../img/menu-2.png';
import menuImage3 from '../img/menu-3.png';
import menuImage4 from '../img/menu-4.png';
import menuImage5 from '../img/menu-5.png';
import menuImage6 from '../img/menu-6.png';
import shapeImage1 from '../img/shape-5.png';
import shapeImage2 from '../img/shape-6.png';

function Menu() {
  useEffect(() => {
    const parallaxItems = document.querySelectorAll("[data-parallax-item]");
    let x, y;

    const handleMouseMove = (event) => {
      x = (event.clientX / window.innerWidth * 10) - 5;
      y = (event.clientY / window.innerHeight * 10) - 5;
      x = x - (x * 2);
      y = y - (y * 2);

      for (let i = 0, len = parallaxItems.length; i < len; i++) {
        x = x * Number(parallaxItems[i].dataset.parallaxSpeed);
        y = y * Number(parallaxItems[i].dataset.parallaxSpeed);
        parallaxItems[i].style.transform = `translate3d(${x}px, ${y}px, 0px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="section menu" aria-label="menu-label" id="menu">
      <div className="container">
        <p className="section-subtitle text-center label-2">Special Selection</p>
        <h2 className="headline-1 section-title text-center">Delicious Menu</h2>
        <ul className="grid-list">
          <li>
            <div className="menu-card hover:card">
              <figure className="card-banner img-holder" style={{ '--width': 100, '--height': 100 }}>
                <img src={menuImage1} width="100" height="100" loading="lazy" alt="Greek Salad" className="img-cover" />
              </figure>
              <div>
                <div className="title-wrapper">
                  <h3 className="title-3">
                    <a href="#" className="card-title">Greek Salad</a>
                  </h3>
                  <span className="badge label-1">Seasonal</span>
                  <span className="span title-2">$25.50</span>
                </div>
                <p className="card-text label-1">
                  Tomatoes, green bell pepper, sliced cucumber, onion, olives, and feta cheese.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="menu-card hover:card">
              <figure className="card-banner img-holder" style={{ '--width': 100, '--height': 100 }}>
                <img src={menuImage2} width="100" height="100" loading="lazy" alt="Lasagne" className="img-cover" />
              </figure>
              <div>
                <div className="title-wrapper">
                  <h3 className="title-3">
                    <a href="#" className="card-title">Lasagne</a>
                  </h3>
                  <span className="span title-2">$40.00</span>
                </div>
                <p className="card-text label-1">
                  Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="menu-card hover:card">
              <figure className="card-banner img-holder" style={{ '--width': 100, '--height': 100 }}>
                <img src={menuImage3} width="100" height="100" loading="lazy" alt="Butternut Pumpkin" className="img-cover" />
              </figure>
              <div>
                <div className="title-wrapper">
                  <h3 className="title-3">
                    <a href="#" className="card-title">Butternut Pumpkin</a>
                  </h3>
                  <span className="span title-2">$10.00</span>
                </div>
                <p className="card-text label-1">
                  Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="menu-card hover:card">
              <figure className="card-banner img-holder" style={{ '--width': 100, '--height': 100 }}>
                <img src={menuImage4} width="100" height="100" loading="lazy" alt="Tokusen Wagyu" className="img-cover" />
              </figure>
              <div>
                <div className="title-wrapper">
                  <h3 className="title-3">
                    <a href="#" className="card-title">Tokusen Wagyu</a>
                  </h3>
                  <span className="badge label-1">New</span>
                  <span className="span title-2">$39.00</span>
                </div>
                <p className="card-text label-1">
                  Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="menu-card hover:card">
              <figure className="card-banner img-holder" style={{ '--width': 100, '--height': 100 }}>
                <img src={menuImage5} width="100" height="100" loading="lazy" alt="Olivas Rellenas" className="img-cover" />
              </figure>
              <div>
                <div className="title-wrapper">
                  <h3 className="title-3">
                    <a href="#" className="card-title">Olivas Rellenas</a>
                  </h3>
                  <span className="span title-2">$25.00</span>
                </div>
                <p className="card-text label-1">
                  Avocados with crab meat, red onion, crab salad stuffed red bell pepper and green bell pepper.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="menu-card hover:card">
              <figure className="card-banner img-holder" style={{ '--width': 100, '--height': 100 }}>
                <img src={menuImage6} width="100" height="100" loading="lazy" alt="Opu Fish" className="img-cover" />
              </figure>
              <div>
                <div className="title-wrapper">
                  <h3 className="title-3">
                    <a href="#" className="card-title">Opu Fish</a>
                  </h3>
                  <span className="span title-2">$49.00</span>
                </div>
                <p className="card-text label-1">
                  Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.
                </p>
              </div>
            </div>
          </li>
        </ul>
        <p className="menu-text text-center">
          During winter daily from <span className="span">7:00 pm</span> to <span className="span">9:00 pm</span>
        </p>
        <a href="#" className="btn btn-primary">
          <span className="text text-1">View All Menu</span>
          <span className="text text-2" aria-hidden="true">View All Menu</span>
        </a>
        <img src={shapeImage1} width="921" height="1036" loading="lazy" alt="shape" className="shape shape-2 move-anim" />
        <img src={shapeImage2} width="343" height="345" loading="lazy" alt="shape" className="shape shape-3 move-anim" />
      </div>
    </section>
  );
}

export default Menu;
