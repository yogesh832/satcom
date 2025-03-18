import React from 'react'
import Home from '../components/Home'
import ServicesSolutions from '../components/ServicesSolutions'
import TestingServices from '../components/TestingServices'
import Projects from '../components/Projects'
import Products from '../components/Products'
import HowWeWork from '../components/HowWeWork'
import AboutPage from '../components/AboutPage'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'

const LandingPage = () => {
  return (
    <div>
        <div className="flex flex-col h-screen w-full">
            <Home />
            <ServicesSolutions />
            <TestingServices/>
            <Projects />
            <Products />
            <HowWeWork />
            <AboutPage />
            <ContactUs />
            <Footer/>

        </div>
    </div>
  )
}

export default LandingPage