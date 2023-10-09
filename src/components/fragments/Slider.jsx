import React, { useState, useEffect } from 'react';
import '../css/style.css';
import slider1 from '../img/hero-slider-1.jpg';
import slider2 from '../img/hero-slider-2.jpg';
import slider3 from '../img/hero-slider-3.jpg';
import heroIcon from '../img/hero-icon.png';
import { AiFillStepForward } from 'react-icons/ai';
import { AiFillStepBackward } from 'react-icons/ai';

function Slider() {
  const [currentSlidePos, setCurrentSlidePos] = useState(0);
  const [lastActiveSliderItem, setLastActiveSliderItem] = useState(null);

  const heroSliderItems = [
    {
      image: slider1,
      subtitle: 'Tradational & Hygine',
      title: 'For the love of delicious food',
      text: 'Come with family & feel the joy of mouthwatering food',
    },
    {
      image: slider2,
      subtitle: 'Delightful experience',
      title: 'Flavors Inspired by the Seasons',
      text: 'Come with family & feel the joy of mouthwatering food',
    },
    {
      image: slider3,
      subtitle: 'Amazing & Delicious',
      title: 'Where every flavor tells a story',
      text: 'Come with family & feel the joy of mouthwatering food',
    },
  ];

  const slideNext = () => {
    if (currentSlidePos >= heroSliderItems.length - 1) {
      setCurrentSlidePos(0);
    } else {
      setCurrentSlidePos(currentSlidePos + 1);
    }
    updateSliderPos();
  };

  const slidePrev = () => {
    if (currentSlidePos <= 0) {  
      setCurrentSlidePos(heroSliderItems.length - 1);
    } else {
      setCurrentSlidePos(currentSlidePos - 1);
    }
    updateSliderPos();
  };
  

  useEffect(() => {
    const interval = setInterval(slideNext, 7000);
    return () => clearInterval(interval);
  }, [currentSlidePos]);

  const updateSliderPos = () => {
    if (lastActiveSliderItem) {
      lastActiveSliderItem.classList.remove('active');
    }
  
    // Access the HTML element within the object
    const currentSliderItem = document.querySelectorAll('[data-hero-slider-item]')[currentSlidePos];
  
    if (currentSliderItem) {
      currentSliderItem.classList.add('active');
      setLastActiveSliderItem(currentSliderItem);
    }
  };
  

  return (
    <section className="hero text-center" aria-label="home" id="home">
      <ul className="hero-slider" data-hero-slider>
        {heroSliderItems.map((item, index) => (
          <li
            key={index}
            className={`slider-item ${index === currentSlidePos ? 'active' : ''}`}
            data-hero-slider-item
          >
            <div className="slider-bg">
              <img src={item.image} width="1880" height="950" alt="" className="img-cover" />
            </div>
            <p className="label-2 section-subtitle slider-reveal">{item.subtitle}</p>
            <h1 className="display-1 hero-title slider-reveal">{item.title}</h1>
            <p className="body-2 hero-text slider-reveal">{item.text}</p>
            <a href="#" className="btn btn-primary slider-reveal">
              <span className="text text-1">View Our Menu</span>
              <span className="text text-2" aria-hidden="true">
                View Our Menu
              </span>
            </a>
          </li>
        ))}
      </ul>
      <button
        className="slider-btn prev"
        aria-label="slide to previous"
        data-prev-btn
        onClick={slidePrev}
      >
        <AiFillStepBackward/>
      </button>
      <button
        className="slider-btn next"
        aria-label="slide to next"
        data-next-btn
        onClick={slideNext}
      >
        <AiFillStepForward/>
      </button>
      <a href="#" className="hero-btn has-after">
        <img src={heroIcon} width="48" height="48" alt="booking icon" />
        <span className="label-2 text-center span">Book A Table</span>
      </a>
    </section>
  );
}

export default Slider;
