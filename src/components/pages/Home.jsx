import React from 'react'
import Loader from '../fragments/Loader'
import NavBar from '../NavBar'
import Footer from '../Footer'
import Slider from '../fragments/Slider'
import ServiceSection from '../fragments/ServiceSection'
import AboutSection from '../fragments/AboutSection'
import SpecialDish from '../fragments/SpecialDish'
import Menu from '../fragments/Menu'
import Testimonials from '../fragments/Testimonials'
import ReservationForm from '../fragments/ReservationForm'
import Features from '../fragments/Features'
import EventSection from '../fragments/EventSection'

function Home() {
  return (
    <div>
      <Loader/>
      <NavBar/>
      <main>
        <article>
            <Slider/>
            <ServiceSection/>
            <AboutSection/>
            <SpecialDish/>
            <Menu/>
            <Testimonials/>
            <ReservationForm/>
            <Features/>
            <EventSection/>
        </article>
      </main>
      <Footer/>
    </div>
  )
}

export default Home
