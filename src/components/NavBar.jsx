import React, { useEffect, useState } from 'react';
import './css/style.css';
import logo from './img/logo.svg';
import { AiOutlineClose } from 'react-icons/ai';

const NavBar = () => {
  const [lastScrollPos, setLastScrollPos] = useState(0);

  const handleScroll = () => {
    const isScrollBottom = lastScrollPos < window.scrollY;
    if (isScrollBottom) {
      // You can add your hide logic here
    } else {
      // You can add your show logic here
    }

    setLastScrollPos(window.scrollY);
  };

  useEffect(() => {
    const navTogglers = document.querySelectorAll('[data-nav-toggler]');
    navTogglers.forEach((element) => {
      element.addEventListener('click', toggleNavbar);
    });

    window.addEventListener('scroll', handleScroll);

    return () => {
      navTogglers.forEach((element) => {
        element.removeEventListener('click', toggleNavbar);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollPos]);

  const toggleNavbar = () => {
    const navbar = document.querySelector('[data-navbar]');
    const overlay = document.querySelector('[data-overlay]');
    document.body.classList.toggle('nav-active');
    navbar.classList.toggle('active');
    overlay.classList.toggle('active');
  };

  return (
    <header className={`header ${lastScrollPos >= 50 ? 'active' : ''}`} data-header>
        <div className="container">
        <a href="#" className="logo">
        <img src={logo} width="160" height="50" alt="Grilli - Home" />
        </a>
        
        <nav className="navbar" data-navbar>
        <button className="close-btn" aria-label="close menu" data-nav-toggler>
            <AiOutlineClose/>
        </button>
        
        <a href="#" className="logo">
            <img src={logo} width="160" height="50" alt="Grilli - Home" />
        </a>
        
        <ul className="navbar-list">
            <li className="navbar-item">
            <a href="#home" className="navbar-link hover-underline active">
                <div className="separator"></div>
                <span className="span">Home</span>
            </a>
            </li>
        
            <li className="navbar-item">
            <a href="#menu" className="navbar-link hover-underline active">
                <div className="separator"></div>
                <span className="span">Menu</span>
            </a>
            </li>
        
            <li className="navbar-item">
            <a href="#" className="navbar-link hover-underline active">
                <div className="separator"></div>
                <span className="span">Our Chef</span>
            </a>
            </li>
        
            <li className="navbar-item">
            <a href="#about" className="navbar-link hover-underline active">
                <div className="separator"></div>
                <span className="span">About</span>
            </a>
            </li>
        
            <li className="navbar-item">
            <a href="#" className="navbar-link hover-underline active">
            <div className="separator"></div>
            <span className="span">Contact</span>
            </a>
        </li>
            
        </ul>
        
        <div className="text-center">
            <p className="headline-1 navbar-title">Visit Us</p>
            <address className="body-4">
            Restaurant St, Delicious City, <br />
            London 9578, UK
            </address>
            <p className="body-4 navbar-text">Open: 9.30 am - 2.30pm</p>
            <a href="mailto:booking@grilli.com" className="body-4 sidebar-link">booking@grilli.com</a>
            <div className="separator"></div>
            <p className="contact-label">Booking Request</p>
            <a href="tel:+88123123456" className="body-1 contact-number hover-underline">
            +88-123-123456
            </a>
        </div>
        </nav>
        
        <a href="#" className="btn btn-secondary">
        <span className="text text-1">Find A Table</span>
        <span className="text text-2" aria-hidden="true">Find A Table</span>
        </a>
        
        <button className="nav-open-btn" aria-label="open menu" data-nav-toggler>
        <span className="line line-1"></span>
        <span className="line line-2"></span>
        <span className="line line-3"></span>
        </button>
        
        <div className="overlay" data-nav-toggler data-overlay></div>
        </div>
    </header>
  );
};

export default NavBar;
