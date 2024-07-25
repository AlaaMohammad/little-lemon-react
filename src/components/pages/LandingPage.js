import React from 'react'
import Hero from '../sections/Hero'
import Menu from '../sections/Menu'
import Testimonials from '../sections/Testimonials'
import About from '../sections/About'
import Header from '../layout/Header'
import BookingForm from '../booking/BookingForm'
import Footer from '../layout/Footer'
import BookingPage from '../booking/BookingPage.js'

function LandingPage() {
  return (
    <div>
        <Header/>
        {/* <BookingPage/> */}
        <Hero/>
        <Menu/>
        <Testimonials/>
        <About/>
        <Footer/>
       </div>
  )
}

export default LandingPage